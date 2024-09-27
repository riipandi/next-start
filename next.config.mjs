import NextBundleAnalyzer from '@next/bundle-analyzer'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const isFly = process.env.FLY_MACHINE_ID
const isVercel = process.env.IS_VERCEL_ENV === 'true'
const isProduction = process.env.NODE_ENV === 'production' || isVercel || isFly

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },

  // @ref: https://nextjs.org/blog/next-14-1#improved-self-hosting
  cacheMaxMemorySize: 0, // disable default in-memory caching
  cacheHandler:
    process.env.NODE_ENV === 'production' && !isVercel
      ? resolve(__dirname, 'scripts/cache-handler.mjs')
      : undefined,

  eslint: { ignoreDuringBuilds: isProduction },
  typescript: { ignoreBuildErrors: isProduction },
  logging: { fetches: { fullUrl: true } },

  experimental: {
    // This is required for the experimental feature of
    // pre-populating the cache with the initial data.
    instrumentationHook: true,
  },

  rewrites() {
    return [{ source: '/healthz', destination: '/api/healthz' }]
  },
}

export default withBundleAnalyzer(nextConfig)
