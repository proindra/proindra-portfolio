/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/proindra_portfolio",
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
  reactStrictMode: true,
};

module.exports = nextConfig;
