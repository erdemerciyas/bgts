import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import YoungEngineersClient from "../genc-muhendis-programi/YoungEngineersClient"

export default async function TalentModelPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <YoungEngineersClient dict={dict.youngEngineers} lang={lang} />
}
