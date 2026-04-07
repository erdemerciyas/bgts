import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import BankingClient from "./BankingClient"

export default async function BankingPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <BankingClient dict={dict.banking} lang={lang} />
}
