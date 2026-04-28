import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/services/software-development";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Yazılım Geliştirme Hizmetleri | BGTS" : "Software Development Services | BGTS";
  const description = isTr
    ? "BGTS, web ve mobil uygulama geliştirme, iş analizi, test otomasyonu ve sektörel yazılım çözümleri ile uçtan uca yazılım hizmetleri sunar."
    : "BGTS delivers end-to-end software services including web and mobile development, business analysis, test automation, and industry-specific solutions.";

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
