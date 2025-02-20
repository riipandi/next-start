import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import consola from 'consola'
import type { NextConfig } from 'next'
import { isWorkerd } from 'std-env'

if (isWorkerd) {
  consola.withTag('nextConfig').log('Initializing OpenNext for Cloudflare Workers')
  initOpenNextCloudflareForDev()
}

const nextConfig: NextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true /* disable eslint on build */,
  },
}

export default nextConfig
