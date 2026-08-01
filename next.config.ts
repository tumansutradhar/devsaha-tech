import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.devsaha.tech' }],
        destination: 'https://devsaha.tech/:path*',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
};

export default nextConfig;
