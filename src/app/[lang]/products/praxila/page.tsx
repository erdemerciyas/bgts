import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import PraxilaClient from "./PraxilaClient"

export const metadata: Metadata = {
    title: "Praxila - Integrated IT Service & Operations Management | BGTS",
    description: "A next-generation AI-powered operations management solution that unifies your ITSM, PPM, and ITOM processes in a single platform.",
    alternates: {
        canonical: "https://bgts.com.tr/products/praxila",
    },
    openGraph: {
        title: "Praxila - Integrated IT Service & Operations Management | BGTS",
        description: "A next-generation AI-powered operations management solution that unifies your ITSM, PPM, and ITOM processes in a single platform.",
        url: "https://bgts.com.tr/products/praxila",
    },
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
