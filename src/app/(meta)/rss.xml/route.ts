export async function GET(_req: Request) {
  const body = `rss.xml`
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' },
  })
}
