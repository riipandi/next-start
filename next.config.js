/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE || false,
    SPLITBEE_TOKEN: process.env.SPLITBEE_TOKEN || ''
  },
  images: {
    domains: ['doodleipsum.com', 'images.unsplash.com', 'pbs.twimg.com', 'shuffle.dev', 'tailwindui.com']
  },
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js'
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug'
      }
    ]
  }
}

module.exports = nextConfig
