import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import TelecomClient from "./TelecomClient"

export default async function TelecomPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <TelecomClient dict={dict.telecommunications} />
}
