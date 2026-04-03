/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "undraw.co",
        pathname: "/api/illustrations/**",
      },
    ],
  },
};

module.exports = nextConfig;
