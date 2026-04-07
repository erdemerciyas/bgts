import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import LearningClient from "./LearningClient"

export default async function LearningPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <LearningClient dict={dict.careers_learning} />
}
