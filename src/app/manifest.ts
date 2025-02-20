import type { MetadataRoute } from 'next'
import { env } from 'std-env'

export const dynamicParams = false // Prevents dynamic route parameters.
export const dynamic = 'force-static' // Forces the page to be statically rendered.
export const fetchCache = 'force-cache' // Force caching of fetch requests.
export const revalidate = 0 // Disable Incremental Static Regeneration (ISR).

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL || ''
  return {
    lang: 'en',
    dir: 'ltr',
    name: 'Next Start',
    short_name: 'next-start',
    description: 'A starter for Next.js with Tailwind CSS and Typescript',
    theme_color: '#121314',
    background_color: '#ffffff',
    start_url: `${baseUrl}/?source=pwa`,
    id: `${baseUrl}/?source=pwa`,
    icons: [
      {
        src: '/favicon.svg',
        sizes: '36x36',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '48x48',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '72x72',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '96x96',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '144x144',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
    ],
    display: 'standalone',
    orientation: 'natural',
  }
}
