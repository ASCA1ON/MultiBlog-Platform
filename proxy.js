import { NextResponse } from 'next/server'

const DOMAIN_TO_BLOG_MAP= {
  'tech': 'tech-blog',
  'travel': 'travel-blog',
  'design': 'design-blog',
}

export function proxy(request) {
  const blogDomain = request.headers.get('x-blog-domain')
  
  if (blogDomain && request.nextUrl.pathname === '/') {
    const blogSlug = DOMAIN_TO_BLOG_MAP[blogDomain.toLowerCase()]
    
    if (blogSlug) {
      const url = request.nextUrl.clone()
      url.pathname = `/${blogSlug}`
      return NextResponse.rewrite(url)
    }
  }
  
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}