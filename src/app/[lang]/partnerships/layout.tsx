import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/partnerships";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "İş Ortakları | BGTS" : "Business Partnerships | BGTS";
  const description = isTr
    ? "BGTS iş ortaklarını tanıyın. Microsoft, AWS ve daha fazlası ile güçlü teknoloji çözümleri sunuyoruz."
    : "Meet BGTS partners. We deliver powerful technology solutions with Microsoft, AWS, and many more.";

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
