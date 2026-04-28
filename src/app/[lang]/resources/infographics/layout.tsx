import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/resources/infographics";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "İnfografikler | BGTS" : "Infographics | BGTS";
  const description = isTr
    ? "BGTS infografiklerini inceleyin. Teknoloji trendleri ve çözümlerimizi görsel içeriklerle keşfedin."
    : "Browse BGTS infographics. Discover technology trends and our solutions through visual content.";

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
