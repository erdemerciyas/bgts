import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/career-paths";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Kariyer Yolları | BGTS" : "Career Paths | BGTS";
  const description = isTr
    ? "BGTS'de kariyer yollarını keşfedin. Teknik ve yönetsel gelişim rotalarıyla kariyerinizi şekillendirin."
    : "Explore career paths at BGTS. Shape your career with technical and managerial development tracks.";

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
