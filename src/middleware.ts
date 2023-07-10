import { type NextRequest, NextResponse } from 'next/server'

export function middleware(_req: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: '/((?!_next/(?:data|static|image)|images|favicon.ico|favicon.svg).*)',
}
