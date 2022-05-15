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
    domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
})
