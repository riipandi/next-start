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
    domains: ['doodleipsum.com', 'error404.fun']
  },
  reactStrictMode: true,
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
