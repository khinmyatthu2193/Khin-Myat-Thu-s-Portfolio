import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { disableStaticImages: true, formats: ["image/avif", "image/webp"] },
  webpack(config) {
    config.module.rules.push({ test: /\.(png|jpe?g|gif|webp)$/i, type: "asset/resource" });
    return config;
  },
};
export default nextConfig;
