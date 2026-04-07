import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import DefenseClient from "./DefenseClient"

export default async function DefensePage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <DefenseClient dict={dict.defense} />
}
