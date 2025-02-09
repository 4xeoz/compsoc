import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos', 'lh3.googleusercontent.com', 'loremflickr.com', 'res.cloudinary.com'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase the limit (adjust as needed)
    },
  },
};

export default nextConfig;
