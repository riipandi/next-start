/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    loader: 'imgix',
    path: '',
    domains: ['*']
  },
  reactStrictMode: true,
  poweredByHeader: false
  // async rewrites() {
  //   return [
  //     { source: '/bee.js', destination: 'https://cdn.splitbee.io/sb.js' },
  //     { source: '/_hive/:slug', destination: 'https://hive.splitbee.io/:slug' }
  //   ]
  // }
}

module.exports = nextConfig
