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

  const title = isTr ? "Genç Mühendis Programı | BGTS" : "Young Engineers Program | BGTS";
  const description = isTr
    ? "BGTS Genç Mühendis Programı ile proje bazlı öğrenim, mentorluk ve gerçek projelerde deneyim kazan."
    : "Gain project-based learning, mentorship, and real-world project experience with the BGTS Young Engineers Program.";

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
