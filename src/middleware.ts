import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './i18n-config';

// === RATE LIMITING LOGIC ===
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

// === I18N LOCALE MATCHING LOGIC ===
function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. API Rotaları için Rate Limiting Kontrolü
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
    return NextResponse.next(); // API rotalarında locale kontrolü yapma
  }

  // API veya izole edilmiş public rotalar için atla
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.match(/\.(png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }

  // 2. Locale Routing
  // Dizin adında /tr/ veya /en/ var mı kontrol et
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Locale bulunamadıysa yönlendir
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  // Yalnızca i18n veya api içeren yollarda regex kurallarını çalıştırır
  // Statik dosyaları dışarıda tutar (kapsamlı matcher)
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
