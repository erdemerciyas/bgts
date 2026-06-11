import { i18n, type Locale } from '@/i18n-config';

/** Set at build time via NEXT_PUBLIC_BASE_PATH (e.g. /tr3 on Plesk subfolder deploy). */
export function getBasePath(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!raw || raw === '/') return '';
  return raw.startsWith('/') ? raw.replace(/\/$/, '') : `/${raw.replace(/\/$/, '')}`;
}

export function stripBasePath(pathname: string): string {
  const basePath = getBasePath();
  if (!basePath || !pathname.startsWith(basePath)) return pathname;
  const rest = pathname.slice(basePath.length);
  return rest === '' ? '/' : rest.startsWith('/') ? rest : `/${rest}`;
}

/** Resolve tr/eng from pathname even when a deploy prefix (e.g. /tr3) precedes the locale. */
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = stripBasePath(pathname).split('/').filter(Boolean);
  if (segments.includes('eng')) return 'eng';
  if (segments.includes('tr')) return 'tr';
  return i18n.defaultLocale;
}

export function isLocale(value: string): value is Locale {
  return i18n.locales.includes(value as Locale);
}

/** Prepend deploy prefix for middleware redirects/rewrites (Next.js Link handles this automatically). */
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  if (!basePath) return path.startsWith('/') ? path : `/${path}`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
