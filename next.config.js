/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  env: {
    siteMeta: {
      url: process.env.SITE_URL || 'http://localhost:3000',
      title: 'Next.js Tailwind Starter',
      description: 'A starter for Next.js with Tailwind CSS and Typescript',
      imageUrl: '/images/og-image.png'
    }
  },
  images: {
    domains: ['doodleipsum.com', 'images.unsplash.com', 'pbs.twimg.com', 'shuffle.dev', 'tailwindui.com']
  },
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // assetPrefix: isProd ? 'https://cdn.example.com' : '',
  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js'
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug'
      }
    ]
  }
}

module.exports = nextConfig
