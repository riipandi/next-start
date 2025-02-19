import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import type { NextConfig } from 'next'

const isVercel = process.env.IS_VERCEL_ENV === 'true'

if (!isVercel) {
  initOpenNextCloudflareForDev()
}

const nextConfig: NextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
