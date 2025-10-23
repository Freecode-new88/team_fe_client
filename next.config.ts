import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, 

  // ✅ `allowedDevOrigins` is NOT a valid Next.js config key
 
  async redirects() {
    return [
      {
        source: "/promotion-infomation", 
        destination: "/",               
        permanent: true, // true = 308 redirect (SEO-friendly)
      },
    ];
  },
};

export default nextConfig;