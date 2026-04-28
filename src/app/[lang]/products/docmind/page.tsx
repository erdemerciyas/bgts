import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import DocMindClient from "./DocMindClient"

const PATH = "/products/docmind"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "DocMind - Otomatik Teknik Dokümantasyon | BGTS"
        : "DocMind - Automatic Technical Documentation | BGTS"
    const description = isTr
        ? "Kaynak kodunuzdan yapay zeka ile otomatik teknik dokümantasyon üreten akıllı platform."
        : "An intelligent platform that generates automatic technical documentation from your source code using artificial intelligence."

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

export default async function DocMindPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["docmind"].detail
    return <DocMindClient dict={detail} lang={lang} />
}
