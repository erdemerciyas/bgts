import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/industries/retail-telecom";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Perakende & Telekom Çözümleri | BGTS" : "Retail & Telecom Solutions | BGTS";
  const description = isTr
    ? "BGTS, perakende ve telekomünikasyon sektörlerinde omnichannel deneyim, akıllı tedarik zinciri ve bulut tabanlı altyapı çözümleri sunar."
    : "BGTS delivers omnichannel experiences, smart supply chain, and cloud-based infrastructure for retail and telecommunications.";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
