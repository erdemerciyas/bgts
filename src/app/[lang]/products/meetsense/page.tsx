import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import MeetSenseClient from "./MeetSenseClient"

export const metadata: Metadata = {
    title: "MeetSense - AI Meeting Assistant | BGTS",
    description: "Turn your meetings into permanent corporate memory with smart assistant, live transcripts, and automatic Jira integration.",
    alternates: {
        canonical: "https://bgts.com.tr/products/meetsense",
    },
    openGraph: {
        title: "MeetSense - AI Meeting Assistant | BGTS",
        description: "Turn your meetings into permanent corporate memory with smart assistant, live transcripts, and automatic Jira integration.",
        url: "https://bgts.com.tr/products/meetsense",
    },
}

export default async function MeetSensePage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["meetsense"].detail
    return <MeetSenseClient dict={detail} lang={lang} />
}
