/**
 * Route Handlers are not cached by default. To cache a GET method, use a route config
 * option such as `export const dynamic = 'force-static'`. Don't use runtime `edge` with
 * OpenNext. The edge runtime is not supported yet with `@opennextjs/cloudflare`.
 *
 * @see: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
 * @see: https://opennext.js.org/cloudflare/get-started#8-remove-any-export-const-runtime--edge-if-present
 */

export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  const data = await res.json()

  return Response.json({ data })
}
