/** @type {import('next').NextConfig} */
const requestedDistDir = process.env.BAYESFORCE_NEXT_DIST_DIR;
const distDir = requestedDistDir === ".next-dev-cache" || requestedDistDir === ".next-production-cache"
  ? requestedDistDir
  : ".next-production-cache";

const nextConfig = {
  reactStrictMode: true,
  // The local launcher links generated directories outside OneDrive on Windows.
  distDir,
  cleanDistDir: false,
  async redirects() {
    return [
      { source: "/what-we-build/ai-capability", destination: "/capabilities/ai-enablement", permanent: true },
      { source: "/what-we-build/ai-trust-and-governance", destination: "/capabilities/ai-trust-governance", permanent: true },
      { source: "/what-we-build/:path*", destination: "/capabilities/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
