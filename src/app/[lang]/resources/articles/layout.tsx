import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/resources/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Makaleler | BGTS" : "Articles | BGTS";
  const description = isTr
    ? "Sektör uzmanlarımızdan en güncel içgörüler ve analizler. Yapay zeka, otomasyon, güvenlik ve yönetişim alanlarında makaleler."
    : "Latest insights and analysis from our industry experts. Articles on AI, automation, security, and governance.";

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
