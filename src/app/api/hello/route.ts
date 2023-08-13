import { type NextRequest, NextResponse } from 'next/server'
import { ServerRuntime } from 'next/types'

import { throwResponse } from '@/utils/response'

export const runtime: ServerRuntime = 'edge'
export const revalidate = 3600

export async function GET(_req: NextRequest) {
  try {
    return NextResponse.json({ message: 'Hello, Next.js!' }, { status: 200 })
  } catch (error: any) {
    return error instanceof Response
      ? throwResponse(error.status, error.statusText)
      : throwResponse(500, error.message)
  }
}
