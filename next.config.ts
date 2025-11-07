import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  // ✅ Clean build – Turbopack already handles minification and SWC transforms
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
