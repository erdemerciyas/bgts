import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import CultureClient from "./CultureClient"

export default async function CulturePage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <CultureClient dict={dict.careers_culture} />
}
