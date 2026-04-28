import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/industries/defense";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Savunma Sanayi Teknolojileri | BGTS" : "Defense Industry Technologies | BGTS";
  const description = isTr
    ? "BGTS, savunma sanayi projelerinde MIL-STD ve ISO standartlarına uygun güvenli yazılım geliştirme, test, iş analizi ve DevOps hizmetleri sunar."
    : "BGTS delivers MIL-STD and ISO-compliant secure software development, testing, business analysis, and DevOps services for defense projects.";

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
