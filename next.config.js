const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    appDir: true,
  },
}

/** @type {import('next').NextConfig} */
module.exports = withPlausibleProxy({
  customDomain: 'https://stats.ghcr.dev',
  subdirectory: undefined,
  scriptName: undefined,
})(nextConfig)
