import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/culture";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Çalışma Kültürü | BGTS" : "Work Culture | BGTS";
  const description = isTr
    ? "BGTS çalışma kültürünü tanıyın. Esnek çalışma, takım ruhu ve yenilikçi ortamımızla fark yaratıyoruz."
    : "Discover the BGTS work culture. We make a difference with flexible work, team spirit, and an innovative environment.";

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
