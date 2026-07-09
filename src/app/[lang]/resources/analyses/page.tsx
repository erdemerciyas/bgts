import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { ARTICLES_TR } from "@/data/articles.tr"
import { ARTICLES_EN } from "@/data/articles.en"
import { getLocalePrefix } from "@/lib/base-path"
import { getLocalizedPath } from "@/lib/routes"
import ArticlesClient from "./ArticlesClient"
import { ArticleStructuredData } from "@/components/seo/StructuredData"

export default async function ArticlesPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)

    const locale = lang as Locale
    const articles = locale === "eng" ? ARTICLES_EN : ARTICLES_TR
    const prefix = getLocalePrefix(locale)
    const articlesPath = getLocalizedPath(locale, "/resources/analyses")

    return (
        <>
            {articles.map((article) => (
                <ArticleStructuredData
                    key={article.id}
                    title={article.title}
                    author={article.author}
                    date={article.date}
                    excerpt={article.excerpt}
                    coverImage={`https://bgts.com.tr${article.coverImage}`}
                    url={`${prefix}${articlesPath}/${article.id}`}
                />
            ))}
            <ArticlesClient articles={articles} dict={dict.articles} lang={lang} />
        </>
    )
}
