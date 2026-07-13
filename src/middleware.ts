import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';
import { resolveTrLegacyRedirect, resolveEngLegacyRedirect, resolveTrRewrite, getObsoleteRedirectTarget, getInternalPath, localizedHref } from './lib/routes';
import { pathnameHasLocale, stripBasePath, stripLocalePrefix, withBasePath } from './lib/base-path';
import type { Locale } from './i18n-config';

// === RATE LIMITING LOGIC ===
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMITS: Record<string, { windowMs: number; maxRequests: number }> = {
  '/api/chat': { windowMs: 60_000, maxRequests: 10 },
  '/api/contact': { windowMs: 60_000, maxRequests: 5 },
  '/api/league/send-code': { windowMs: 60_000, maxRequests: 5 },
  '/api/league/verify': { windowMs: 60_000, maxRequests: 10 },
  '/api/league/submit': { windowMs: 60_000, maxRequests: 10 },
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

// === I18N LOCALE — her zaman varsayılan dil (tr) kullan, tarayıcı diline bakma ===

function nextWithPathname(request: NextRequest, pathname: string): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

function rewriteWithPathname(
  request: NextRequest,
  pathname: string,
  rewriteUrl: URL
): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  return NextResponse.rewrite(rewriteUrl, {
    request: { headers: requestHeaders },
  });
}

export function middleware(request: NextRequest) {
  const pathname = stripBasePath(request.nextUrl.pathname);

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

  // Legacy /en/ ve /eng/ → /tr/en/ (301)
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const rest = pathname === '/en' ? '' : pathname.slice(3);
    return NextResponse.redirect(
      new URL(withBasePath(`/tr/en${rest}`), request.url),
      301
    );
  }

  if (pathname === '/eng' || pathname.startsWith('/eng/')) {
    const rest = pathname === '/eng' ? '' : pathname.slice(4);
    return NextResponse.redirect(
      new URL(withBasePath(`/tr/en${rest}`), request.url),
      301
    );
  }

  // 2. Locale Routing — /tr veya /tr/en prefix'i yoksa varsayılan dile yönlendir
  if (!pathnameHasLocale(pathname)) {
    return NextResponse.redirect(
      new URL(
        withBasePath(
          `/${i18n.defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`
        ),
        request.url
      )
    );
  }

  const { locale, urlPath } = stripLocalePrefix(pathname);

  const obsoleteTarget = getObsoleteRedirectTarget(urlPath);
  if (obsoleteTarget) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = withBasePath(localizedHref(locale as Locale, obsoleteTarget));
    return NextResponse.redirect(redirectUrl, 301);
  }

  if (locale === 'eng') {
    const engLegacyTarget = resolveEngLegacyRedirect(urlPath);
    if (engLegacyTarget && engLegacyTarget !== urlPath) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = withBasePath(`/tr/en${engLegacyTarget}`);
      return NextResponse.redirect(redirectUrl, 301);
    }

    const internalPath = getInternalPath('eng', urlPath) ?? (urlPath === '/' ? '' : urlPath);
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = withBasePath(`/eng${internalPath === '/' ? '' : internalPath}`);
    return rewriteWithPathname(request, pathname, rewriteUrl);
  }

  if (locale === 'tr') {
    const legacyTarget = resolveTrLegacyRedirect(urlPath);
    if (legacyTarget && legacyTarget !== urlPath) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = withBasePath(`/tr${legacyTarget}`);
      return NextResponse.redirect(redirectUrl, 301);
    }

    const internalPath = resolveTrRewrite(urlPath);
    if (internalPath && internalPath !== urlPath) {
      const rewriteUrl = request.nextUrl.clone();
      rewriteUrl.pathname = withBasePath(`/tr${internalPath}`);
      return rewriteWithPathname(request, pathname, rewriteUrl);
    }
  }

  return nextWithPathname(request, pathname);
}

export const config = {
  // Yalnızca i18n veya api içeren yollarda regex kurallarını çalıştırır
  // Statik dosyaları dışarıda tutar (kapsamlı matcher)
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
