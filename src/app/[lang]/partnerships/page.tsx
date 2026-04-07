import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import PartnershipsClient from "./PartnershipsClient"

export default async function PartnershipsPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <PartnershipsClient dict={dict.partnerships_page} />
}
