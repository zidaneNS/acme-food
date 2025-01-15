import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '9nfcj0sobcwk82zr.public.blob.vercel-storage.com',
        port: ''
      }
    ]
  }
};

export default nextConfig;
