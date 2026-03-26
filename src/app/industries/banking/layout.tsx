import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bankacılık & Finans Çözümleri | BGTS",
  description:
    "BGTS, bankacılık ve finans sektöründe temel bankacılık, ödeme sistemleri, dijital kanallar ve veri analitiği alanlarında uçtan uca teknoloji çözümleri sunar.",
  alternates: { canonical: "https://bgts.com.tr/industries/banking" },
  openGraph: {
    title: "Bankacılık & Finans Çözümleri | BGTS",
    description:
      "Bankacılık ve finans sektöründe temel bankacılık, ödeme sistemleri, dijital kanallar ve veri analitiği alanlarında uçtan uca teknoloji çözümleri.",
    url: "https://bgts.com.tr/industries/banking",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
