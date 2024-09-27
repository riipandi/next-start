import NextBundleAnalyzer from '@next/bundle-analyzer'

// Avoid build and lint error in Docker or Vercel deployment
const isProduction =
  process.env.NODE_ENV === 'production' ||
  process.env.IS_VERCEL_ENV === 'true' ||
  process.env.FLY_MACHINE_ID

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  cleanDistDir: true,
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  // @ref: https://nextjs.org/blog/next-14-1#improved-self-hosting
  // cacheHandler: require.resolve('./cache-handler.js'),
  // cacheMaxMemorySize: 0, // disable default in-memory caching
  eslint: { ignoreDuringBuilds: isProduction },
  typescript: { ignoreBuildErrors: isProduction },
  logging: { fetches: { fullUrl: true } },
  rewrites() {
    return [{ source: '/healthz', destination: '/api/healthz' }]
  },
}

export default withBundleAnalyzer(nextConfig)
