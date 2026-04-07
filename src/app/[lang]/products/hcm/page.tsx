import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import HcmClient from "./HcmClient"

export const metadata: Metadata = {
    title: "HCM Platform - HR Thema | BGTS",
    description: "Digitalize your HR operations end-to-end with 16 integrated modules. From recruitment to payroll, performance to training planning.",
    alternates: {
        canonical: "https://bgts.com.tr/products/hcm",
    },
    openGraph: {
        title: "HCM Platform - HR Thema | BGTS",
        description: "Digitalize your HR operations end-to-end with 16 integrated modules.",
        url: "https://bgts.com.tr/products/hcm",
    },
}

export default async function HcmPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["hcm"].detail
    return <HcmClient dict={detail} lang={lang} />
}
