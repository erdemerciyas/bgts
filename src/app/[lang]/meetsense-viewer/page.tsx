import type { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import MeetsenseViewerClient from "./MeetsenseViewerClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "MeetSense Viewer | BGTS",
    description: lang === 'tr' 
      ? "MeetSense AI çözümünü keşfedin. Toplantılarınızı yapay zeka ile analiz eden akıllı asistan."
      : "Discover the MeetSense AI solution. Smart assistant that analyzes your meetings with artificial intelligence.",
    alternates: { canonical: `https://bgts.com.tr/${lang}/meetsense-viewer` },
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
