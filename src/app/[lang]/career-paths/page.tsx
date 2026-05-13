import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import CareerPathsClient from "./CareerPathsClient"

export default async function CareerPathsPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <CareerPathsClient dict={{ ...dict.careers_paths, internship: dict.careers_internship }} />
}
