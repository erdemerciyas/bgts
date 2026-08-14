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
    ? "ConnectED programında deneyim gelişimle buluşuyor. Bağlantı kur, deneyim kazan, geliş. BGTS ile yetenekler ve iş dünyası arasında güçlü bir köprü kurun."
    : "In the ConnectED program, experience meets development. Connect, gain experience, and grow. Build a strong bridge between talent and the business world with BGTS.";

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
