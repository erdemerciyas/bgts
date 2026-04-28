import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/resources/success-stories";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Başarı Hikayeleri | BGTS" : "Success Stories | BGTS";
  const description = isTr
    ? "BGTS başarı hikayelerini okuyun. Müşterilerimizle birlikte hayata geçirdiğimiz projeler ve çözümler."
    : "Read BGTS success stories. Projects and solutions we delivered together with our customers.";

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
