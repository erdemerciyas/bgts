import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/social-contribution";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Sürdürülebilir Değer Programı | BGTS" : "Sustainable Value Program | BGTS";
  const description = isTr
    ? "BGTS sürdürülebilir değer programını keşfedin. Topluma katkı, sosyal sorumluluk ve gönüllülük projelerimiz."
    : "Discover the BGTS sustainable value program. Our community contribution, social responsibility, and volunteering initiatives.";

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
