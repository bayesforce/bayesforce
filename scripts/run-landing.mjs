import { createHash } from "node:crypto";
import { lstat, mkdir, readdir, realpath, rm, symlink } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const action = process.argv[2];
const nextCommands = {
  dev: ["dev", "-p", "3005"],
  build: ["build"],
  start: ["start", "-p", "3005"],
};

if (!(action in nextCommands)) {
  throw new Error("Usage: node scripts/run-landing.mjs <dev|build|start>");
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryDirectory = resolve(scriptDirectory, "..");
const applicationDirectory = resolve(repositoryDirectory, "apps", "landing");
const cacheRoot = process.platform === "win32"
  ? process.env.LOCALAPPDATA ?? resolve(homedir(), "AppData", "Local")
  : process.env.XDG_CACHE_HOME ?? resolve(homedir(), ".cache");
const checkoutKey = createHash("sha256").update(applicationDirectory).digest("hex").slice(0, 12);
const cacheDirectory = resolve(cacheRoot, "Bayesforce", "workspaces", checkoutKey, "next");
const projectCacheDirectory = resolve(applicationDirectory, ".next-cache");
const applicationDependencies = resolve(applicationDirectory, "node_modules");
const cacheDependencies = resolve(cacheDirectory, "..", "node_modules");

await mkdir(cacheDirectory, { recursive: true });

if (action === "build") {
  const cacheEntries = await readdir(cacheDirectory);
  await Promise.all(
    cacheEntries
      .filter((entry) => entry !== "node_modules")
      .map((entry) => rm(resolve(cacheDirectory, entry), { recursive: true, force: true })),
  );
}

async function ensureDirectoryLink(linkPath, targetPath) {
  try {
    const link = await lstat(linkPath);
    if (!link.isSymbolicLink()) {
      throw new Error(`${linkPath} must be removed before the local cache link can be created.`);
    }

    const [currentTarget, expectedTarget] = await Promise.all([realpath(linkPath), realpath(targetPath)]);
    if (currentTarget.toLowerCase() === expectedTarget.toLowerCase()) return;

    await rm(linkPath, { recursive: true, force: true });
  } catch (error) {
    if (!(error && typeof error === "object" && "code" in error && error.code === "ENOENT")) {
      throw error;
    }
  }

  await symlink(targetPath, linkPath, process.platform === "win32" ? "junction" : "dir");
}

await ensureDirectoryLink(projectCacheDirectory, cacheDirectory);
await ensureDirectoryLink(cacheDependencies, applicationDependencies);

const nextCli = resolve(applicationDirectory, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextCli, ...nextCommands[action]], {
  cwd: applicationDirectory,
  env: process.env,
  stdio: "inherit",
});

child.once("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});

child.once("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exitCode = code ?? 1;
});
