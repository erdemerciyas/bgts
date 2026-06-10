import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import HRClient from "./HRClient"

export default async function HRPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <HRClient dict={dict.hr_page} lang={lang as Locale} />
}
