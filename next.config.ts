/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export',
  //trailingSlash: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    TENANT_ID: process.env.TENANT_ID,
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 seconds
    pagesBufferLength: 2,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**', // allow all paths
      },
        {
        protocol: 'https',
        hostname: 'www.playbook.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

