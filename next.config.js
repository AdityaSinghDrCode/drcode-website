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
    formats: ["image/webp", "image/avif"],
  },
  // Enable compression
  compress: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "motion"],
  },
};

module.exports = nextConfig;
