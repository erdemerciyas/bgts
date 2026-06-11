import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import SuccessStoriesClient from "./SuccessStoriesClient"
import { CASE_STUDIES_TR } from "@/data/case-studies.tr"
import { CASE_STUDIES_EN } from "@/data/case-studies.en"

export default async function SuccessStoriesPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    
    const cases = lang === "eng" ? CASE_STUDIES_EN : CASE_STUDIES_TR;

    return <SuccessStoriesClient dict={dict.resources_success_stories} cases={cases} lang={lang} />
}
