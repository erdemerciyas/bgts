import type { Metadata } from "next";
import { htmlLang, i18n, type Locale } from "@/i18n-config";
import { getLocalePrefix } from "@/lib/base-path";
import { getLocalizedPath } from "@/lib/routes";

export const SITE_URL = "https://bgts.com.tr";

/**
 * Returns the canonical URL plus hreflang alternates for a given path.
 * Path should be the internal pathname WITHOUT the locale prefix (e.g. "/about", "/products/meetsense", "/").
 */
export function buildAlternates(path: string, lang: Locale): NonNullable<Metadata["alternates"]> {
  const normalized = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;

  const languages: Record<string, string> = {};
  for (const locale of i18n.locales) {
    const localized = getLocalizedPath(locale, normalized);
    const prefix = getLocalePrefix(locale);
    languages[htmlLang(locale)] = localized === "/"
      ? `${SITE_URL}${prefix}`
      : `${SITE_URL}${prefix}${localized}`;
  }
  languages["x-default"] = languages[htmlLang(i18n.defaultLocale)];

  const canonicalPath = getLocalizedPath(lang, normalized);
  const canonicalPrefix = getLocalePrefix(lang);
  return {
    canonical: canonicalPath === "/"
      ? `${SITE_URL}${canonicalPrefix}`
      : `${SITE_URL}${canonicalPrefix}${canonicalPath}`,
    languages,
  };
}

/**
 * OpenGraph URL + locale helper for a given internal path/lang combo.
 */
export function buildOgUrl(path: string, lang: Locale): string {
  const normalized = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const localized = getLocalizedPath(lang, normalized);
  const prefix = getLocalePrefix(lang);
  return localized === "/"
    ? `${SITE_URL}${prefix}`
    : `${SITE_URL}${prefix}${localized}`;
}

export function ogLocale(lang: Locale): string {
  return lang === "tr" ? "tr_TR" : "en_US"; // eng locale → en_US OpenGraph
}
