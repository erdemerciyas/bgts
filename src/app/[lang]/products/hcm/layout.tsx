import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/products/hcm";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const locale = lang as Locale;
    const isTr = locale === "tr";

    const title = isTr
        ? "HCM Platform - İnsan Kaynakları Yönetim Sistemi | BGTS"
        : "HCM Platform - Human Capital Management | BGTS";
    const description = isTr
        ? "16 entegre modül ile işe alımdan bordro yönetimine tüm İK süreçlerini dijitalleştiren HCM platformu."
        : "An HCM platform that digitizes all HR processes end-to-end with 16 integrated modules — from recruitment to payroll.";

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

export default function HcmLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
