import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: '/client/:path*',
        destination: '/projects',
        statusCode: 301,
      },
      {
        source: '/merchant-account-management/:path*',
        destination: '/services/merchant-account-management',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
