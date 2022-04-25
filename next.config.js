/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

// Use custom image loader when building for production outside Vercel.
const isProduction = process.env.NODE_ENV === 'production'
const outsideVercel = isProduction && process.env.VERCEL !== '1'

module.exports = withPlausibleProxy({ customDomain: 'https://stats.web.id' })({
  images: {
    path: outsideVercel ? '' : '_next/image',
    loader: outsideVercel ? 'imgix' : 'default',
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com']
  },
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/stats',
        destination:
          'https://stats.web.id/share/next-start.vercel.app?auth=q3zlAZW9CKxMP8HFOKce6&embed=true&theme=light',
        permanent: true
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })
    return config
  }
})
