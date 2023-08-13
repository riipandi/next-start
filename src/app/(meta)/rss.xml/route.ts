import { type NextRequest } from 'next/server'

export async function GET(_req: NextRequest) {
  const body = `rss.xml`
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' },
  })
}
