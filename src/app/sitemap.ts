import ENV from '#/env'

import { MetadataRoute } from 'next/types'

// @reference: https://github.com/vercel/next.js/issues/49373
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = ENV.APP_BASE_URL
  const now = new Date()

  const rootPath = {
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 1,
  }

  const pages = ['/about']

  const routes = pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    priority: 0.8,
  }))

  const pageRoutes = [rootPath, ...routes]

  // const allPosts = await fetch('https://.../posts')

  // if (!allPosts) return [...pageRoutes]

  // const postsRoutes = allPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.created_at,
  //   priority: 0.5,
  // }))

  // return [...pageRoutes, ...postsRoutes]

  return [...pageRoutes]
}
