import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import ContactClient from "./ContactClient"

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <ContactClient dict={dict.contact} lang={lang} />
}
