import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import LeagueClient from "./LeagueClient";

const leagueDisplay = Chakra_Petch({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-league-display",
});

export const metadata: Metadata = {
  title: "BGTS LİG",
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
    <div
      className={`${GeistSans.variable} ${GeistSans.className} ${leagueDisplay.variable}`}
    >
      <LeagueClient lang={lang} />
    </div>
  );
}
