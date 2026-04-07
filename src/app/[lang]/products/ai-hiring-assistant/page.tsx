import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import AiHiringClient from "./AiHiringClient"

export const metadata: Metadata = {
    title: "AI Hiring Assistant - AI-Powered Recruitment | BGTS",
    description: "An AI-powered recruitment platform that accelerates resume filtering and candidate matching processes.",
    alternates: {
        canonical: "https://bgts.com.tr/products/ai-hiring-assistant",
    },
    openGraph: {
        title: "AI Hiring Assistant - AI-Powered Recruitment | BGTS",
        description: "An AI-powered recruitment platform that accelerates resume filtering and candidate matching processes.",
        url: "https://bgts.com.tr/products/ai-hiring-assistant",
    },
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
