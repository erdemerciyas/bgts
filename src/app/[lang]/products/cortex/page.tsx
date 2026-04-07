import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import CortexClient from "./CortexClient"

export const metadata: Metadata = {
    title: "Cortex - AI-Powered SDLC Platform | BGTS",
    description: "An enterprise SDLC platform that automates the software development lifecycle with AI agents.",
    alternates: {
        canonical: "https://bgts.com.tr/products/cortex",
    },
    openGraph: {
        title: "Cortex - AI-Powered SDLC Platform | BGTS",
        description: "An enterprise SDLC platform that automates the software development lifecycle with AI agents.",
        url: "https://bgts.com.tr/products/cortex",
    },
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
