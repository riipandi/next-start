/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy({ customDomain: 'https://stats.web.id' })({
  publicRutimeConfig: { imageLoader: 'cloudflare' },
  images: {
    loader: 'custom',
    domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
})
