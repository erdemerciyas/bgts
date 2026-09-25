import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/scholarship";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Burs Başvurusu" : "Scholarship Application";
  const description = isTr
    ? "BGTS burs programına online başvurun. Formu 6 kısa adımda doldurarak burs başvurunuzu birkaç dakikada tamamlayın."
    : "Apply online to the BGTS scholarship program. Complete your application in a few minutes with 6 short steps.";

  return {
    title,
    description,
    // Form yalnızca özel link ile paylaşılır; arama motorlarında listelenmez.
    robots: { index: false, follow: false },
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
