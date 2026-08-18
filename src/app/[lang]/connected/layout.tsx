import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/connected";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "ConnectED | BGTS" : "ConnectED | BGTS";
  const description = isTr
    ? "ConnectED; seçmeden teknik yetkinlik geliştirmeye, gerçek proje deneyiminden yerleştirmeye uzanan BGTS deneyim ve gelişim programı."
    : "ConnectED is BGTS's experience and development program — from selection and technical upskilling to real project experience and placement.";

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
