import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"
import Doc2BotClient from "./Doc2BotClient"

const PATH = "/products/doc2bot"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const isTr = locale === "tr"

    const title = isTr
        ? "Doc2Bot - Akıllı Belge Asistanı | BGTS"
        : "Doc2Bot - Smart Document Assistant | BGTS"
    const description = isTr
        ? "Kurum içi belgelerinizi yapay zeka destekli sohbet botuyla 7/24 erişilebilir bir bilgi kaynağına dönüştürün."
        : "Turn your internal documents into a 24/7 accessible knowledge source with an AI-powered chatbot."

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

export default async function Doc2BotPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["doc2bot"].detail
    return <Doc2BotClient dict={detail} lang={lang} />
}
