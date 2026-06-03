/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/proindra_portfolio",
  assetPrefix: "/proindra_portfolio/",
  output: "export",
  trailingSlash: true,
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
  reactStrictMode: true,
};

module.exports = nextConfig;
