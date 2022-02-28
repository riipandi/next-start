/** @type {import('next').NextConfig} */

// Use custom image loader when building for production outside Vercel.
const isProduction = process.env.NODE_ENV === 'production'
const outsideVercel = isProduction && process.env.VERCEL !== '1'

module.exports = {
  images: {
    path: outsideVercel ? '' : '_next/image',
    loader: outsideVercel ? 'imgix' : 'default',
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: false,
    minimumCacheTTL: 60,
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
