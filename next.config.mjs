import { withPlausibleProxy } from 'next-plausible'

const plausibleConfig = {
  customDomain: 'https://stats.fltr.dev',
  subdirectory: undefined,
  scriptName: undefined,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default withPlausibleProxy(plausibleConfig)(nextConfig)
