import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/hr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "İnsan Kaynakları | BGTS" : "Human Resources | BGTS";
  const description = isTr
    ? "BGTS açık pozisyonlarını inceleyin ve kariyer fırsatlarını keşfedin. Teknoloji alanında büyüyen ekibimize katılın."
    : "Explore BGTS open positions and discover career opportunities. Join our growing team in technology.";

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
