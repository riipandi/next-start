import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import type { NextConfig } from 'next'

initOpenNextCloudflareForDev()

const nextConfig: NextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
