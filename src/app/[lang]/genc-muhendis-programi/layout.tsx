import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/genc-muhendis-programi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Genç Mühendis Programı | BGTS" : "Young Engineer Program | BGTS";
  const description = isTr
    ? "BGTS Genç Mühendis Programı ile kariyerine güçlü bir başlangıç yap. Mentorluk, eğitim ve gerçek projelerde deneyim."
    : "Kickstart your career with the BGTS Young Engineer Program. Mentorship, training, and real-world project experience.";

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
