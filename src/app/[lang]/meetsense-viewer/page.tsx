import type { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import MeetsenseViewerClient from "./MeetsenseViewerClient";

const PATH = "/meetsense-viewer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "MeetSense Görüntüleyici | BGTS" : "MeetSense Viewer | BGTS";
  const description = isTr
    ? "MeetSense AI çözümünü keşfedin. Toplantılarınızı yapay zeka ile analiz eden akıllı asistan."
    : "Discover the MeetSense AI solution. Smart assistant that analyzes your meetings with artificial intelligence.";

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

export default async function MeetSenseViewerPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);
    return <MeetsenseViewerClient dict={dict.meetsense_viewer} />;
}
