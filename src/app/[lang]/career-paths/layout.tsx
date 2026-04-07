import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer Yolları | BGTS",
  description:
    "BGTS'de kariyer yollarını keşfedin. Teknik ve yönetsel gelişim rotalarıyla kariyerinizi şekillendirin.",
  alternates: { canonical: "https://bgts.com.tr/career-paths" },
  openGraph: {
    title: "Kariyer Yolları | BGTS",
    description:
      "BGTS'de kariyer yollarını keşfedin. Teknik ve yönetsel gelişim rotalarıyla kariyerinizi şekillendirin.",
    url: "https://bgts.com.tr/career-paths",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
