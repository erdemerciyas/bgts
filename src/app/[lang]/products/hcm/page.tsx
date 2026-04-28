import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import HcmClient from "./HcmClient"

const PATH = "/products/hcm"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "HCM Platform - İnsan Kaynakları Yönetim Sistemi | BGTS"
        : "HCM Platform - Human Capital Management | BGTS"
    const description = isTr
        ? "16 entegre modül ile İK operasyonlarınızı uçtan uca dijitalleştirin. İşe alımdan bordroya, performanstan eğitim planlamasına."
        : "Digitalize your HR operations end-to-end with 16 integrated modules. From recruitment to payroll, performance to training planning."

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
