export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'eng'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

/** Dictionary JSON filename (en.json kept for English content). */
export function dictionaryKey(locale: Locale): 'tr' | 'en' {
  return locale === 'eng' ? 'en' : 'tr';
}

/** HTML lang attribute (ISO 639-1). */
export function htmlLang(locale: Locale): string {
  return locale === 'eng' ? 'en' : locale;
}

export function isEnglishLocale(locale: string): boolean {
  return locale === 'eng';
}
