import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  allowedDevOrigins: ['app.localhost', '*.mydev.local'],
  /* async redirects() {
     return [
       {
         source: "/",
         destination: "/",
         permanent: false, 
       },
     ];
   },*/
};

export default nextConfig;
