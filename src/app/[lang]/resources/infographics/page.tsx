import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import InfographicsClient from "./InfographicsClient"

export default async function InfographicsPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <InfographicsClient dict={dict.resources_infographics} />
}
