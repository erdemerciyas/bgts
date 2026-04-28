import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/industries/telecommunications";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Telekomünikasyon Hizmetleri | BGTS" : "Telecommunications Services | BGTS";
  const description = isTr
    ? "BGTS, telekom operatörleri için dijital platform yönetimi, içerik portalları, MSP hizmetleri ve 7/24 kesintisiz operasyon desteği sunar."
    : "BGTS provides digital platform management, content portals, MSP services, and 24/7 uninterrupted operations support for telecom operators.";

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
