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

/** Public URL prefix (Turkish: /tr, English: /tr/en). */
export function getLocalePrefix(locale: Locale): string {
  return locale === 'eng' ? '/tr/en' : '/tr';
}

/** Whether pathname includes a locale prefix (/tr or /tr/en). */
export function pathnameHasLocale(pathname: string): boolean {
  const stripped = stripBasePath(pathname);
  return stripped === '/tr' || stripped.startsWith('/tr/');
}

/** Strip locale prefix from pathname; returns locale and path without prefix. */
export function stripLocalePrefix(pathname: string): { locale: Locale; urlPath: string } {
  const stripped = stripBasePath(pathname);

  if (stripped === '/tr/en' || stripped.startsWith('/tr/en/')) {
    const urlPath = stripped === '/tr/en' ? '/' : stripped.slice('/tr/en'.length) || '/';
    return { locale: 'eng', urlPath };
  }

  // Legacy /eng (redirected in middleware; kept for internal rewrites)
  if (stripped === '/eng' || stripped.startsWith('/eng/')) {
    const urlPath = stripped === '/eng' ? '/' : stripped.slice('/eng'.length) || '/';
    return { locale: 'eng', urlPath };
  }

  if (stripped === '/tr' || stripped.startsWith('/tr/')) {
    const urlPath = stripped === '/tr' ? '/' : stripped.slice('/tr'.length) || '/';
    return { locale: 'tr', urlPath };
  }

  return { locale: i18n.defaultLocale, urlPath: stripped.startsWith('/') ? stripped : `/${stripped}` };
}

/** Resolve locale from pathname even when a deploy prefix (e.g. /tr3) precedes the locale. */
export function getLocaleFromPathname(pathname: string): Locale {
  return stripLocalePrefix(pathname).locale;
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
