const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = withPlausibleProxy({
  customDomain: 'https://stats.fltr.dev',
  subdirectory: undefined,
  scriptName: undefined,
})(nextConfig)
