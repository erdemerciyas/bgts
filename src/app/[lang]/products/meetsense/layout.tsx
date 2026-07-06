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

    const description = isTr
        ? "Toplantılarınızı akıllı asistan, canlı transkript ve otomatik Jira entegrasyonu ile kalıcı kurumsal hafızaya dönüştürün."
        : "Turn your meetings into permanent corporate memory with smart assistant, live transcripts, and automatic Jira integration.";

    const title = isTr
        ? "MeetSense - Yapay Zeka Toplantı Asistanı"
        : "MeetSense - AI Meeting Assistant";

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
