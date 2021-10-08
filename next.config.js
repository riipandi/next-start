/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    siteMeta: {
      url: process.env.SITE_URL || 'http://localhost:3000',
      title: 'Next.js Tailwind Starter',
      description: 'A starter for Next.js with Tailwind CSS and Typescript',
      imageUrl: '/images/og-image.png'
    }
  },
  images: {
    domains: ['doodleipsum.com', 'images.unsplash.com', 'shuffle.dev', 'tailwindui.com']
  },
  eslint: {
    dirs: ['src']
  }
}

module.exports = nextConfig
