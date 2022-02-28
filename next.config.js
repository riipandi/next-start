/** @type {import('next').NextConfig} */

// Use custom image loader when building for production outside Vercel.
const imageConfig = () => process.env.VERCEL !== '1' && { loader: 'imgix', path: '' }

module.exports = {
  images: {
    ...imageConfig(),
    formats: ['image/avif', 'image/webp'],
    domains: ['*']
  },
  reactStrictMode: true,
  poweredByHeader: false
  //   async rewrites() {
  //     return [
  //       { source: '/bee.js', destination: 'https://cdn.splitbee.io/sb.js' },
  //       { source: '/_hive/:slug', destination: 'https://hive.splitbee.io/:slug' }
  //     ]
  //   }
}
