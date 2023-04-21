import { throwResponse } from '@/utils/response'

export async function GET(_req: Request) {
  try {
    return new Response('All is well')
  } catch (error: any) {
    return error instanceof Response
      ? throwResponse(error.status, error.statusText)
      : throwResponse(500, error.message)
  }
}
