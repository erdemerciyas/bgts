import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İnsan Kaynakları | BGTS",
  description:
    "BGTS açık pozisyonlarını inceleyin ve kariyer fırsatlarını keşfedin. Teknoloji alanında büyüyen ekibimize katılın.",
  alternates: { canonical: "https://bgts.com.tr/hr" },
  openGraph: {
    title: "İnsan Kaynakları | BGTS",
    description:
      "BGTS açık pozisyonlarını inceleyin ve kariyer fırsatlarını keşfedin. Teknoloji alanında büyüyen ekibimize katılın.",
    url: "https://bgts.com.tr/hr",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
