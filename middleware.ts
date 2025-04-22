import { NextRequest, NextResponse } from 'next/server'
 
const allowedOrigins = ['https://10.15.38.162:3100']
 
export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''

  if (origin && !allowedOrigins.includes(origin) || !origin){
    return new NextResponse(null, {
        status: 400,
        statusText: "Bad Request",
        headers: {
            'Content-Type': 'text/plain'
        }
    })
  }
 
  return NextResponse.next()
}
 
export const config = {
  matcher: '/api/web/:path*',
}