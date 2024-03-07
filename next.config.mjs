// Avoid build and lint error in Docker or Vercel deployment
const isProduction = process.env.NODE_ENV === 'production' || process.env.IS_VERCEL_ENV === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  // @ref: https://nextjs.org/blog/next-14-1#improved-self-hosting
  // cacheHandler: require.resolve('./cache-handler.js'),
  // cacheMaxMemorySize: 0, // disable default in-memory caching
  eslint: { ignoreDuringBuilds: isProduction },
  typescript: { ignoreBuildErrors: isProduction },
  logging: {
    fetches: { fullUrl: true },
  },
  rewrites() {
    return [{ source: '/health', destination: '/api/health' }]
  },
}

export default nextConfig
