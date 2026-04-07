import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import RetailClient from "./RetailClient"

export default async function RetailPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <RetailClient dict={dict.retail} />
}
