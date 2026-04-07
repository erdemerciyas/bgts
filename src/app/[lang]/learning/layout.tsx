import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eğitim ve Gelişim | BGTS",
  description:
    "BGTS eğitim ve gelişim programlarını keşfedin. Sertifikasyon destekleri, mentorluk ve sürekli öğrenme fırsatları.",
  alternates: { canonical: "https://bgts.com.tr/learning" },
  openGraph: {
    title: "Eğitim ve Gelişim | BGTS",
    description:
      "BGTS eğitim ve gelişim programlarını keşfedin. Sertifikasyon destekleri, mentorluk ve sürekli öğrenme fırsatları.",
    url: "https://bgts.com.tr/learning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
