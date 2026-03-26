import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMITS: Record<string, { windowMs: number; maxRequests: number }> = {
  '/api/chat': { windowMs: 60_000, maxRequests: 10 },
  '/api/contact': { windowMs: 60_000, maxRequests: 5 },
  '/api/application': { windowMs: 60_000, maxRequests: 5 },
};

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(key: string, windowMs: number, maxRequests: number): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  entry.count++;
  return entry.count > maxRequests;
}

// Periodically clean up expired entries to prevent memory leaks
if (typeof globalThis !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap) {
      if (now > entry.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }, 60_000);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api/') && request.method === 'POST') {
    const matchedRoute = Object.keys(RATE_LIMITS).find((route) =>
      pathname.startsWith(route)
    );

    if (matchedRoute) {
      const { windowMs, maxRequests } = RATE_LIMITS[matchedRoute];
      const ip = getClientIp(request);
      const key = `${ip}:${matchedRoute}`;

      if (isRateLimited(key, windowMs, maxRequests)) {
        return NextResponse.json(
          { error: 'Çok fazla istek gönderildi. Lütfen bir süre bekleyin.' },
          { status: 429 }
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
