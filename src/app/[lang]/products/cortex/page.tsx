import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import CortexClient from "./CortexClient"

const PATH = "/products/cortex"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "Cortex - Yapay Zeka Destekli SDLC Platformu | BGTS"
        : "Cortex - AI-Powered SDLC Platform | BGTS"
    const description = isTr
        ? "Yazılım geliştirme yaşam döngüsünü AI ajanlarıyla otomatikleştiren kurumsal SDLC platformu."
        : "An enterprise SDLC platform that automates the software development lifecycle with AI agents."

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

export default async function CortexPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["cortex"].detail
    return <CortexClient dict={detail} lang={lang} />
}
