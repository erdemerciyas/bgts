import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import AiHiringClient from "./AiHiringClient"

const PATH = "/products/ai-hiring-assistant"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "AI Hiring Assistant - Yapay Zeka Destekli İşe Alım | BGTS"
        : "AI Hiring Assistant - AI-Powered Recruitment | BGTS"
    const description = isTr
        ? "Özgeçmiş filtreleme ve aday eşleştirme süreçlerini hızlandıran yapay zeka destekli işe alım platformu."
        : "An AI-powered recruitment platform that accelerates resume filtering and candidate matching processes."

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

export default async function AiHiringPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["ai-hiring-assistant"].detail
    return <AiHiringClient dict={detail} lang={lang} />
}
