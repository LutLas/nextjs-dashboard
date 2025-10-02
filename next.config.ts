import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '172.23.128.1'],
};

export default nextConfig;
