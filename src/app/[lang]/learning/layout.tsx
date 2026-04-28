import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/learning";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Eğitim ve Gelişim | BGTS" : "Learning & Development | BGTS";
  const description = isTr
    ? "BGTS eğitim ve gelişim programlarını keşfedin. Sertifikasyon destekleri, mentorluk ve sürekli öğrenme fırsatları."
    : "Explore BGTS learning and development programs. Certification support, mentorship, and continuous learning opportunities.";

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
