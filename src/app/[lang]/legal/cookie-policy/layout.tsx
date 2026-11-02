import type { Metadata } from "next"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { buildAlternates, buildOgUrl } from "@/lib/seo"

const PATH = "/legal/cookie-policy"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params
    const locale = lang as Locale
    const { meta } = (await getDictionary(locale)).legal.cookiePolicy

    return {
        title: meta.title,
        description: meta.description,
        alternates: buildAlternates(PATH, locale),
        openGraph: {
            title: `${meta.title} | BGTS`,
            description: meta.description,
            url: buildOgUrl(PATH, locale),
        },
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
