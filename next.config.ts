import type { NextConfig } from 'next'

/* Uncomment to enable OpenNext Cloudflare for Dev */
// import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
// initOpenNextCloudflareForDev()

const nextConfig: NextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
