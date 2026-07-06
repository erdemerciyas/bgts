import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/products/praxilla";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const locale = lang as Locale;
    const isTr = locale === "tr";

    const description = isTr
        ? "ITSM, PPM ve ITOM süreçlerinizi tek platformda birleştiren yeni nesil yapay zeka destekli operasyon yönetimi çözümü."
        : "A next-generation AI-powered operations management solution that unifies your ITSM, PPM, and ITOM processes in a single platform.";

    const title = isTr
        ? "Praxilla - IT Hizmet ve Operasyon Yönetimi"
        : "Praxilla - Integrated IT Service & Operations Management";

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

export default function PraxillaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
