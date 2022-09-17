const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IMAGE_LOADER: 'custom',
  },
  images: {
    loader: 'custom',
    domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
}

module.exports = withPlausibleProxy()(nextConfig)
