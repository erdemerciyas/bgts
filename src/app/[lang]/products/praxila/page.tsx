import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import PraxilaClient from "./PraxilaClient"

const PATH = "/products/praxila"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "Praxila - IT Hizmet ve Operasyon Yönetimi | BGTS"
        : "Praxila - Integrated IT Service & Operations Management | BGTS"
    const description = isTr
        ? "ITSM, PPM ve ITOM süreçlerinizi tek platformda birleştiren yeni nesil yapay zeka destekli operasyon yönetimi çözümü."
        : "A next-generation AI-powered operations management solution that unifies your ITSM, PPM, and ITOM processes in a single platform."

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

export default async function PraxilaPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["praxila"].detail
    return <PraxilaClient dict={detail} lang={lang} />
}
