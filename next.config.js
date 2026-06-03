/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
