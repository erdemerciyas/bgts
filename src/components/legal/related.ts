import type { Locale } from "@/i18n-config"
import { localizedHref } from "@/lib/routes"

/** Internal paths of the legal pages, keyed by their dictionary key. */
export const LEGAL_PATHS = {
    cookiePolicy: "/legal/cookie-policy",
    termsOfUse: "/legal/terms-of-use",
    privacyNotice: "/legal/privacy-notice",
} as const

export type LegalKey = keyof typeof LEGAL_PATHS

export interface LegalCommonDict {
    eyebrow: string
    relatedTitle: string
    cookiePolicy: string
    termsOfUse: string
    privacyNotice: string
}

/** The other two legal documents, as links for the footer of a legal page. */
export function buildLegalRelated(
    locale: Locale,
    current: LegalKey,
    common: LegalCommonDict
) {
    const others = (Object.keys(LEGAL_PATHS) as LegalKey[]).filter((key) => key !== current)

    return {
        title: common.relatedTitle,
        links: others.map((key) => ({
            label: common[key],
            href: localizedHref(locale, LEGAL_PATHS[key]),
        })),
    }
}
