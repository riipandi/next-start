/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    loader: 'imgix',
    path: '',
    domains: [
      'localhost',
      'doodleipsum.com',
      'error404.fun',
      'images.unsplash.com',
      'pbs.twimg.com',
      'res.cloudinary.com',
      's.gravatar.com',
      'shuffle.dev',
      'tailwindui.com',
      'via.placeholder.com'
    ]
  },
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  poweredByHeader: false
  // async rewrites() {
  //   return [
  //     { source: '/bee.js', destination: 'https://cdn.splitbee.io/sb.js' },
  //     { source: '/_hive/:slug', destination: 'https://hive.splitbee.io/:slug' }
  //   ]
  // }
}

module.exports = nextConfig
