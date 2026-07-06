import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import HcmClient from "./HcmClient"

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
