import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',   // Static export — works perfectly on Vercel, no server needed
};

export default nextConfig;
