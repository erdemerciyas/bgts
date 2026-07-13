import { type Locale } from '@/i18n-config';
import { getLocaleFromPathname, getLocalePrefix, isLocale, stripBasePath, stripLocalePrefix } from '@/lib/base-path';

/**
 * Internal (filesystem) paths mapped to locale-specific URL segments.
 * Keys use English folder names from src/app/[lang]/.
 */
export const ROUTE_MAP: Record<string, { tr: string; eng: string }> = {
  '/about': { tr: '/hakkimizda', eng: '/about' },
  '/contact': { tr: '/iletisim', eng: '/contact' },
  '/products/hcm': { tr: '/urunler/hcm', eng: '/products/hcm' },
  '/products/praxilla': { tr: '/urunler/praxilla', eng: '/products/praxilla' },
  '/services/software-development': {
    tr: '/hizmetler/yazilim-muhendisligi',
    eng: '/services/software-development',
  },
  '/services/managed-services': {
    tr: '/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi',
    eng: '/services/managed-services',
  },
  '/services/managed-desktop-services': {
    tr: '/hizmetler/yonetilen-masaustu-hizmetleri',
    eng: '/services/managed-services',
  },
  '/services': { tr: '/hizmetler', eng: '/services' },
  '/industries': { tr: '/sektorler', eng: '/industries' },
  '/resources': { tr: '/bilgi-merkezi', eng: '/resources' },
  '/industries/banking': { tr: '/sektorler/bankacilik-finans', eng: '/industries/banking' },
  '/industries/defense': { tr: '/sektorler/savunma-sanayi', eng: '/industries/defense' },
  '/industries/telecommunications': {
    tr: '/sektorler/telekom',
    eng: '/industries/telecommunications',
  },
  '/industries/retail': { tr: '/sektorler/perakende-e-ticaret', eng: '/industries/retail' },
  '/industries/retail-telecom': {
    tr: '/sektorler/diger-sektorler',
    eng: '/industries/retail-telecom',
  },
  '/social-contribution': { tr: '/yerini-al', eng: '/social-contribution' },
  '/career-paths': { tr: '/kariyer-yollari', eng: '/career-paths' },
  '/culture': { tr: '/calisma-kulturu', eng: '/culture' },
  '/resources/success-stories': { tr: '/basari-hikayeleri', eng: '/resources/success-stories' },
  '/resources/infographics': { tr: '/infografikler', eng: '/resources/infographics' },
  '/partnerships': { tr: '/is-ortaklari', eng: '/partnerships' },
  '/learning': { tr: '/egitim-ve-gelisim', eng: '/learning' },
  '/meetsense-viewer': { tr: '/meetsense-goruntuleyici', eng: '/meetsense-viewer' },
  '/products/cortex': { tr: '/urunler/cortex', eng: '/products/cortex' },
  '/products/meetsense': { tr: '/urunler/meetsense', eng: '/products/meetsense' },
  '/products/doc2bot': { tr: '/urunler/doc2bot', eng: '/products/doc2bot' },
  '/products/docmind': { tr: '/urunler/docmind', eng: '/products/docmind' },
  '/products/ai-hiring-assistant': {
    tr: '/urunler/yapay-zeka-ise-alim-asistani',
    eng: '/products/ai-hiring-assistant',
  },
  '/products/cv-converter': { tr: '/urunler/cv-donusturucu', eng: '/products/cv-converter' },
  '/resources/analyses': { tr: '/bilgi-merkezi/analizler', eng: '/resources/analyses' },
  '/league': { tr: '/league', eng: '/league' },
};

/** Top-level Turkish aliases without a dedicated page — redirect targets (internal path). */
export const TR_TOP_LEVEL_ALIASES: Record<string, string> = {
  '/hizmetler': '/services/software-development',
  '/sektorler': '/industries/banking',
  '/bilgi-merkezi': '/resources/success-stories',
  '/urunler': '/urunler/hcm',
};

/** Legacy English slugs on /tr/ that should 301 to Turkish equivalents. */
export const TR_LEGACY_REDIRECTS: Record<string, string> = {
  '/about': '/hakkimizda',
  '/contact': '/iletisim',
  '/products/hcm': '/urunler/hcm',
  '/products/praxila': '/urunler/praxilla',
  '/products/praxilla': '/urunler/praxilla',
  '/services': '/hizmetler',
  '/services/data-center-platforms-applications-management':
    '/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi',
  '/services/managed-desktop-services': '/hizmetler/yonetilen-masaustu-hizmetleri',
  '/services/site-reliability-engineering':
    '/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi',
  '/services/software-engineering': '/hizmetler/yazilim-muhendisligi',
  '/services/software-development': '/hizmetler/yazilim-muhendisligi',
  '/services/managed-services': '/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi',
  '/services/devops': '/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi',
  '/hizmetler/servis-dayanikliligi-muhendisligi':
    '/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi',
  '/services/data-ai': '/hizmetler/data-ai',
  '/services/professional-services': '/hizmetler/professional-services',
  '/sectors': '/sektorler',
  '/industries': '/sektorler',
  '/industries/banking': '/sektorler/bankacilik-finans',
  '/industries/banking-finance': '/sektorler/bankacilik-finans',
  '/industries/defense': '/sektorler/savunma-sanayi',
  '/industries/defense-industry': '/sektorler/savunma-sanayi',
  '/industries/telecommunications': '/sektorler/telekom',
  '/industries/retail': '/sektorler/perakende-e-ticaret',
  '/industries/retail-ecommerce': '/sektorler/perakende-e-ticaret',
  '/industries/retail-telecom': '/sektorler/diger-sektorler',
  '/industries/other-industries': '/sektorler/diger-sektorler',
  '/knowledge-center': '/bilgi-merkezi',
  '/resources': '/bilgi-merkezi',
  '/career': '/yerini-al',
  '/social-contribution': '/yerini-al',
  '/career-paths': '/kariyer-yollari',
  '/working-culture': '/calisma-kulturu',
  '/culture': '/calisma-kulturu',
  '/young-engineers': '/kariyer-yollari',
  '/open-positions': '/kariyer-yollari',
  '/hr': '/kariyer-yollari',
  '/genc-muhendis-programi': '/kariyer-yollari',
  '/yetenek-gelisim-modeli': '/kariyer-yollari',
  '/acik-pozisyonlar': '/kariyer-yollari',
  '/apply': '/basvuru',
  '/resources/success-stories': '/basari-hikayeleri',
  '/case-studies': '/basari-hikayeleri',
  '/articles': '/bilgi-merkezi/analizler',
  '/resources/articles': '/bilgi-merkezi/analizler',
  '/bilgi-merkezi/makaleler': '/bilgi-merkezi/analizler',
  '/events': '/etkinlikler',
  '/webinars': '/webinarlar',
  '/news': '/haberler',
  '/partnerships': '/is-ortaklari',
  '/learning': '/egitim-ve-gelisim',
  '/resources/infographics': '/infografikler',
  '/meetsense-viewer': '/meetsense-goruntuleyici',
  '/products/cortex': '/urunler/cortex',
  '/products/meetsense': '/urunler/meetsense',
  '/products/doc2bot': '/urunler/doc2bot',
  '/products/docmind': '/urunler/docmind',
  '/products/ai-hiring-assistant': '/urunler/yapay-zeka-ise-alim-asistani',
  '/products/cv-converter': '/urunler/cv-donusturucu',
};

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

const trLocalizedToInternal = new Map<string, string>();
const engLocalizedToInternal = new Map<string, string>();

for (const [internal, paths] of Object.entries(ROUTE_MAP)) {
  trLocalizedToInternal.set(normalizePath(paths.tr), internal);
  engLocalizedToInternal.set(normalizePath(paths.eng), internal);
}

for (const [alias, internal] of Object.entries(TR_TOP_LEVEL_ALIASES)) {
  trLocalizedToInternal.set(normalizePath(alias), internal);
}

/** Public URL path for a locale (without /{lang} prefix). */
export function getLocalizedPath(locale: Locale, internalPath: string): string {
  const normalized = normalizePath(internalPath);
  const mapping = ROUTE_MAP[normalized];
  if (mapping) return mapping[locale] ?? mapping.tr ?? normalized;
  return normalized;
}

/** Resolve a locale-specific URL path to the internal filesystem path. */
export function getInternalPath(locale: Locale, urlPath: string): string | null {
  const normalized = normalizePath(urlPath);
  const map = locale === 'tr' ? trLocalizedToInternal : engLocalizedToInternal;
  return map.get(normalized) ?? null;
}

/** Full href including locale prefix. Supports hash fragments on internalPath. */
export function localizedHref(locale: Locale | string, internalPath: string): string {
  const validLocale: Locale = isLocale(locale) ? locale : getLocaleFromPathname(`/${locale}`);
  const [path, hash] = internalPath.split('#');
  const localized = getLocalizedPath(validLocale, path);
  const prefix = getLocalePrefix(validLocale);
  const href = localized === '/' ? prefix : `${prefix}${localized}`;
  return hash ? `${href}#${hash}` : href;
}

/** Switch the current pathname to another locale, translating slugs when mapped. */
export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const { locale: sourceLocale, urlPath } = stripLocalePrefix(stripBasePath(pathname));
  const internal = getInternalPath(sourceLocale, urlPath);

  if (internal) {
    return localizedHref(targetLocale, internal);
  }

  if (urlPath === '/') {
    return getLocalePrefix(targetLocale);
  }

  return `${getLocalePrefix(targetLocale)}${urlPath}`;
}

/** Convenience wrapper when lang comes from route params as string. */
export function localizedPathForLang(lang: string, internalPath: string): string {
  return localizedHref(lang === 'eng' ? 'eng' : 'tr', internalPath);
}

/** Resolve middleware rewrite: localized TR path → internal path for Next.js routing. */
export function resolveTrRewrite(urlPath: string): string | null {
  return getInternalPath('tr', urlPath);
}

/** Resolve middleware redirect: legacy English slug on /tr/ → Turkish slug. */
export function resolveTrLegacyRedirect(urlPath: string): string | null {
  const normalized = normalizePath(urlPath);
  return TR_LEGACY_REDIRECTS[normalized] ?? null;
}

/** Legacy English slugs on /tr/en/ that should 301 to updated equivalents. */
export const ENG_LEGACY_REDIRECTS: Record<string, string> = {
  '/products/praxila': '/products/praxilla',
  '/resources/articles': '/resources/analyses',
};

/** Resolve middleware redirect: legacy English slug on /tr/en/ → updated English slug. */
export function resolveEngLegacyRedirect(urlPath: string): string | null {
  const normalized = normalizePath(urlPath);
  return ENG_LEGACY_REDIRECTS[normalized] ?? null;
}

/** Removed pages: internal path → replacement internal path (both locales). */
export const OBSOLETE_INTERNAL_REDIRECTS: Record<string, string> = {
  '/services/devops': '/services/managed-services',
  '/genc-muhendis-programi': '/career-paths',
  '/yetenek-gelisim-modeli': '/career-paths',
  '/hr': '/career-paths',
};

/** Replacement internal path for a removed route URL segment. */
export function getObsoleteRedirectTarget(urlPath: string): string | null {
  return OBSOLETE_INTERNAL_REDIRECTS[normalizePath(urlPath)] ?? null;
}
