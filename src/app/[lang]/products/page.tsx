import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import ProductsClient from "./ProductsClient"

export default async function ProductsPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    return <ProductsClient dict={dict.products_page} />
}
