import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/industries/retail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Perakende & E-Ticaret Çözümleri | BGTS" : "Retail & E-Commerce Solutions | BGTS";
  const description = isTr
    ? "BGTS, perakende ve e-ticaret sektöründe B2B portallar, İK teknolojileri, DevOps altyapıları ve 7/24 yönetilen hizmetler ile dijital dönüşüm sağlar."
    : "BGTS drives digital transformation in retail and e-commerce with B2B portals, HR tech, DevOps infrastructure, and 24/7 managed services.";

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
