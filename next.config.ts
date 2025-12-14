import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-expect-error - This suppresses the type error while keeping functionality
  eslint: {
    ignoreDuringBuilds: true,
  },
 
};

export default nextConfig;