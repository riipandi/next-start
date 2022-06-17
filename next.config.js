/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

const experimental = process.env.DOCKER_BUILDKIT === '1' ?? {
  outputStandalone: true,
}

const nextConfig = {
  publicRutimeConfig: { imageLoader: 'cloudflare' },
  images: {
    loader: 'custom',
    domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  ...experimental,
}

module.exports = withPlausibleProxy()(nextConfig)
