import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/products/meetsense";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const locale = lang as Locale;
    const isTr = locale === "tr";

    const title = isTr
        ? "MeetSense - Yapay Zeka Toplantı Asistanı | BGTS"
        : "MeetSense - AI Meeting Assistant | BGTS";
    const description = isTr
        ? "Toplantılarınızı AI ile kaydedin, analiz edin ve aksiyon maddelerine dönüştüren akıllı platform."
        : "An intelligent platform that records, analyzes, and turns your meetings into action items with AI.";

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

export default function MeetSenseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
