import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/services/managed-services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Yönetilen Hizmetler (MSP) | BGTS" : "Managed Services (MSP) | BGTS";
  const description = isTr
    ? "BGTS, sunucu yönetimi, 7/24 NOC operasyonu, ITSM süreçleri ve AIOps destekli altyapı izleme ile kapsamlı yönetilen hizmetler sunar."
    : "BGTS delivers comprehensive managed services with server management, 24/7 NOC operations, ITSM processes, and AIOps-driven infrastructure monitoring.";

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
