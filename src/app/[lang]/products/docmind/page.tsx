import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import DocMindClient from "./DocMindClient"

export const metadata: Metadata = {
    title: "DocMind - Automatic Technical Documentation | BGTS",
    description: "An intelligent platform that generates automatic technical documentation from your source code using artificial intelligence.",
    alternates: {
        canonical: "https://bgts.com.tr/products/docmind",
    },
    openGraph: {
        title: "DocMind - Automatic Technical Documentation | BGTS",
        description: "An intelligent platform that generates automatic technical documentation from your source code using artificial intelligence.",
        url: "https://bgts.com.tr/products/docmind",
    },
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
