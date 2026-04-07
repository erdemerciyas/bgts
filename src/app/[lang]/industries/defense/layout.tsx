import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savunma Sanayi Teknolojileri | BGTS",
  description:
    "BGTS, savunma sanayi projelerinde MIL-STD ve ISO standartlarına uygun güvenli yazılım geliştirme, test, iş analizi ve DevOps hizmetleri sunar.",
  alternates: { canonical: "https://bgts.com.tr/industries/defense" },
  openGraph: {
    title: "Savunma Sanayi Teknolojileri | BGTS",
    description:
      "Savunma sanayi projelerinde MIL-STD ve ISO standartlarına uygun güvenli yazılım geliştirme, test, iş analizi ve DevOps hizmetleri.",
    url: "https://bgts.com.tr/industries/defense",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
