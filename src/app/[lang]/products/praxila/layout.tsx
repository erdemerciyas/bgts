import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/products/praxila";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const locale = lang as Locale;
    const isTr = locale === "tr";

    const title = isTr
        ? "Praxila - IT Hizmet ve Operasyon Yönetimi | BGTS"
        : "Praxila - Integrated IT Service & Operations Management | BGTS";
    const description = isTr
        ? "ITSM, PPM ve ITOM süreçlerini tek platformda birleştiren yapay zeka destekli operasyon yönetimi."
        : "An AI-powered operations management solution that unifies ITSM, PPM, and ITOM processes in a single platform.";

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

export default function PraxilaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
