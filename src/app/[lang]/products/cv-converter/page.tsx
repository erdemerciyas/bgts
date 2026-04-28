import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import CvConverterClient from "./CvConverterClient"

const PATH = "/products/cv-converter"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "CV Converter - Akıllı Özgeçmiş Standartlaştırıcı | BGTS"
        : "CV Converter - Smart Resume Standardizer | BGTS"
    const description = isTr
        ? "Farklı formatlardaki özgeçmişleri yapay zeka ile otomatik olarak kurumsal standarda dönüştüren platform."
        : "A platform that automatically converts CVs in different formats to corporate standard using artificial intelligence."

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
