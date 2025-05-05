/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  ✅ This enables static HTML export
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 seconds
    pagesBufferLength: 2,
  },
  images: {
    domains: ['flagcdn.com'],
  },
};

module.exports = nextConfig;
