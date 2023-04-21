import { jsonResponse, throwResponse } from '@/utils/response'

export const revalidate = 3600
export const runtime = 'edge'

export async function GET(_req: Request) {
  try {
    return jsonResponse('Hello, Next.js!', undefined, 200)
  } catch (error: any) {
    return error instanceof Response
      ? throwResponse(error.status, error.statusText)
      : throwResponse(500, error.message)
  }
}
