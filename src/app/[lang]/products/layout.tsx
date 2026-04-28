import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/products";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const locale = lang as Locale;
    const isTr = locale === "tr";

    const title = isTr
        ? "AI Ürünleri - Kurumsal Yapay Zeka Çözümleri | BGTS"
        : "AI Products - Enterprise AI Solutions | BGTS";
    const description = isTr
        ? "İşe alımdan kurumsal otomasyona, belge yönetiminden bilgi asistanlarına 8 yapay zeka platformu."
        : "8 AI platforms spanning recruitment, enterprise automation, document management, and knowledge assistants.";

    return {
        title,
        description,
        alternates: buildAlternates(PATH, locale),
        openGraph: {
            title,
            description,
            url: buildOgUrl(PATH, locale),
        },
    };
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
