import type { Metadata } from "next";
import { i18n, type Locale } from "@/i18n-config";

export const SITE_URL = "https://bgts.com.tr";

/**
 * Returns the canonical URL plus hreflang alternates for a given path.
 * Path should be the pathname WITHOUT the locale prefix (e.g. "/about", "/products/meetsense", "/").
 */
export function buildAlternates(path: string, lang: Locale): NonNullable<Metadata["alternates"]> {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

  const languages: Record<string, string> = {};
  for (const locale of i18n.locales) {
    languages[locale] = `${SITE_URL}/${locale}${normalized}`;
  }
  languages["x-default"] = `${SITE_URL}/${i18n.defaultLocale}${normalized}`;

  return {
    canonical: `${SITE_URL}/${lang}${normalized}`,
    languages,
  };
}

/**
 * OpenGraph URL + locale helper for a given path/lang combo.
 */
export function buildOgUrl(path: string, lang: Locale): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}/${lang}${normalized}`;
}

export function ogLocale(lang: Locale): string {
  return lang === "tr" ? "tr_TR" : "en_US";
}
