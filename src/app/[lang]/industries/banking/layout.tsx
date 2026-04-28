import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/industries/banking";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Bankacılık & Finans Çözümleri | BGTS" : "Banking & Finance Solutions | BGTS";
  const description = isTr
    ? "BGTS, bankacılık ve finans sektöründe temel bankacılık, ödeme sistemleri, dijital kanallar ve veri analitiği alanlarında uçtan uca teknoloji çözümleri sunar."
    : "BGTS delivers end-to-end technology solutions for banking and finance, including core banking, payments, digital channels, and data analytics.";

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
