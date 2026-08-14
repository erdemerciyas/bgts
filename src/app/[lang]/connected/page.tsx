import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import ConnectedClient from "./ConnectedClient"

export default async function ConnectedPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <ConnectedClient dict={dict.careers_connected} />
}
