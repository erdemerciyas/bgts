import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İnfografikler | BGTS",
  description:
    "BGTS infografiklerini inceleyin. Teknoloji trendleri ve çözümlerimizi görsel içeriklerle keşfedin.",
  alternates: { canonical: "https://bgts.com.tr/resources/infographics" },
  openGraph: {
    title: "İnfografikler | BGTS",
    description:
      "BGTS infografiklerini inceleyin. Teknoloji trendleri ve çözümlerimizi görsel içeriklerle keşfedin.",
    url: "https://bgts.com.tr/resources/infographics",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
