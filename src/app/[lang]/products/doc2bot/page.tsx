import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import Doc2BotClient from "./Doc2BotClient"

export const metadata: Metadata = {
    title: "Doc2Bot - Smart Document Assistant | BGTS",
    description: "Turn your internal documents into a 24/7 accessible knowledge source with an AI-powered chatbot.",
    alternates: {
        canonical: "https://bgts.com.tr/products/doc2bot",
    },
    openGraph: {
        title: "Doc2Bot - Smart Document Assistant | BGTS",
        description: "Turn your internal documents into a 24/7 accessible knowledge source with an AI-powered chatbot.",
        url: "https://bgts.com.tr/products/doc2bot",
    },
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
