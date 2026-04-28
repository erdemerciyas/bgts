import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import MeetSenseClient from "./MeetSenseClient"

const PATH = "/products/meetsense"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "MeetSense - Yapay Zeka Toplantı Asistanı | BGTS"
        : "MeetSense - AI Meeting Assistant | BGTS"
    const description = isTr
        ? "Toplantılarınızı akıllı asistan, canlı transkript ve otomatik Jira entegrasyonu ile kalıcı kurumsal hafızaya dönüştürün."
        : "Turn your meetings into permanent corporate memory with smart assistant, live transcripts, and automatic Jira integration."

    return {
        title,
        description,
        alternates: buildAlternates(PATH, locale),
        openGraph: {
            title,
            description,
            url: buildOgUrl(PATH, locale),
        },
    }
}

export default async function MeetSensePage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["meetsense"].detail
    return <MeetSenseClient dict={detail} lang={lang} />
}
