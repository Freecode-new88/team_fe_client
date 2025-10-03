import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/f168",
        permanent: false, 
      },
    ];
  },
};

export default nextConfig;
