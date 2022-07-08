/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
  publicRutimeConfig: { imageLoader: 'cloudflare' },
  images: {
    loader: 'custom',
    domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
}

module.exports = withPlausibleProxy()(nextConfig)
