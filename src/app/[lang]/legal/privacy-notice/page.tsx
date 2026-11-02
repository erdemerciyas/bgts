import LegalDocument from "@/components/legal/LegalDocument"
import { buildLegalRelated } from "@/components/legal/related"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"

export default async function Page(props: { params: Promise<{ lang: string }> }) {
    const { lang } = await props.params
    const locale = lang as Locale
    const legal = (await getDictionary(locale)).legal

    return (
        <LegalDocument
            dict={legal.privacyNotice}
            eyebrow={legal.common.eyebrow}
            related={buildLegalRelated(locale, "privacyNotice", legal.common)}
        />
    )
}
