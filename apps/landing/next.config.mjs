/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The local launcher links this generated directory outside OneDrive on Windows.
  distDir: ".next-cache",
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
