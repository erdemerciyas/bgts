import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/about";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "Hakkımızda | BGTS" : "About Us | BGTS";
  const description = isTr
    ? "BGTS hakkında bilgi edinin. Vizyonumuz, misyonumuz ve kurumsal değerlerimizle teknoloji dünyasındaki yerimizi keşfedin."
    : "Learn about BGTS. Discover our vision, mission, and corporate values that define our place in the technology world.";

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
