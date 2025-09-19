import type { MetadataRoute } from 'next'
import { env } from 'std-env'

export const dynamicParams = false // Prevents dynamic route parameters.
export const dynamic = 'force-static' // Forces the page to be statically rendered.
export const fetchCache = 'force-cache' // Force caching of fetch requests.
export const revalidate = 0 // Disable Incremental Static Regeneration (ISR).

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL || ''
  const DISALLOW_LIST: string[] = ['/api', '/_next']

  return {
    rules: {
      userAgent: '*',
      disallow: env.DISALLOW_SEARCH_ENGINE_INDEXING || DISALLOW_LIST,
      allow: env.ALLOW_SEARCH_ENGINE_INDEXING || undefined,
    },
    sitemap: env.ALLOW_SEARCH_ENGINE_INDEXING ? `${baseUrl}/sitemap.xml` : undefined,
  }
}
