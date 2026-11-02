import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"

const PATH = "/legal/terms-of-use"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const { meta } = (await getDictionary(locale)).legal.termsOfUse

    const title = `${meta.title} | BGTS`

    return {
        title,
        description: meta.description,
        alternates: buildAlternates(PATH, locale),
        openGraph: {
            title,
            description: meta.description,
            url: buildOgUrl(PATH, locale),
        },
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
