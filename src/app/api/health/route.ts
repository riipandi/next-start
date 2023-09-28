import { type NextRequest } from 'next/server'
import { ServerRuntime } from 'next/types'

import { responseWithData, throwResponse } from '@/utils/response'

// FIXME replace nodejs runtime with edge runtime in the future
// @reference: https://github.com/vercel/next.js/issues/48295#issuecomment-1717906097
export const runtime: ServerRuntime = 'nodejs'

export async function GET(_req: NextRequest) {
  try {
    return responseWithData(200, 'All is well')
  } catch (error: any) {
    return error instanceof Response
      ? throwResponse(error.status, error.statusText)
      : throwResponse(500, error.message)
  }
}
