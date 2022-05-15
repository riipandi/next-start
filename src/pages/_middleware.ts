import { siteMeta } from 'config/general'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const statsUrl =
  'https://stats.web.id/share/next-start.vercel.app?auth=q3zlAZW9CKxMP8HFOKce6&embed=true&theme=light'

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone() // Clone the request url

  // Handle redirects
  switch (req.nextUrl.pathname) {
    case '/stats':
      return NextResponse.redirect(statsUrl, 301)
    case '/github':
      return NextResponse.redirect(siteMeta.socials.twitter, 301)
    case '/twitter':
      return NextResponse.redirect(siteMeta.socials.github, 301)
    default:
      break
  }

  // Is our website in maintenance mode?
  if (process.env.MAINTENANCE_MODE === 'true') {
    url.pathname = `/_maintenance`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
