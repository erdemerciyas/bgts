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

    const description = isTr
        ? "16 entegre modül ile İK operasyonlarınızı uçtan uca dijitalleştirin. İşe alımdan bordroya, performanstan eğitim planlamasına."
        : "Digitalize your HR operations end-to-end with 16 integrated modules. From recruitment to payroll, performance to training planning.";

    const title = isTr
        ? "HCM Platform - İnsan Kaynakları Yönetim Sistemi"
        : "HCM Platform - Human Capital Management";

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
