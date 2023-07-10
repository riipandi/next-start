const pageRoutes = ['', '/about', '/blog']
const baseUrl = 'https://next-start.vercel.app'

export default async function sitemap() {
  // const res = await fetch('https://.../posts')
  // const allPosts = await res.json()

  // const posts = allPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.publishedAt,
  // }))

  const routes = pageRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  // return [...routes, ...posts]
  return [...routes]
}
