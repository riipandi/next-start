import { MetadataRoute } from 'next/types'

import { env } from '#/config'

// @reference: https://github.com/vercel/next.js/issues/49373
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const baseUrl = env.NEXT_PUBLIC_SITE_URL

  const rootPath = {
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'yearly',
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
