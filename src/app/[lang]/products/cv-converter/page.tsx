import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import CvConverterClient from "./CvConverterClient"

export const metadata: Metadata = {
    title: "CV Converter - Smart Resume Standardizer | BGTS",
    description: "A platform that automatically converts CVs in different formats to corporate standard using artificial intelligence.",
    alternates: {
        canonical: "https://bgts.com.tr/products/cv-converter",
    },
    openGraph: {
        title: "CV Converter - Smart Resume Standardizer | BGTS",
        description: "A platform that automatically converts CVs in different formats to corporate standard using artificial intelligence.",
        url: "https://bgts.com.tr/products/cv-converter",
    },
}

export default async function CvConverterPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["cv-converter"].detail
    return <CvConverterClient dict={detail} lang={lang} />
}
