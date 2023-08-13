import { type NextRequest } from 'next/server'

import { throwResponse } from '@/utils/response'

export async function GET(_req: NextRequest) {
  try {
    return new Response('All is well')
  } catch (error: any) {
    return error instanceof Response
      ? throwResponse(error.status, error.statusText)
      : throwResponse(500, error.message)
  }
}
