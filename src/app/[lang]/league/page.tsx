import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import LeagueClient from "./LeagueClient";

export const metadata: Metadata = {
  title: "BGTS Lig",
  description: "Şirketi En İyi Kim Tanıyor? Personel bilgi yarışması.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default async function LeaguePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div className={`${GeistSans.variable} ${GeistSans.className}`}>
      <LeagueClient lang={lang} />
    </div>
  );
}
