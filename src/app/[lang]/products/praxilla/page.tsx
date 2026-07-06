import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import PraxillaClient from "./PraxillaClient"

export default async function PraxillaPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const detail = dict.products_page.items["praxilla"].detail
    return <PraxillaClient dict={detail} lang={lang} />
}
