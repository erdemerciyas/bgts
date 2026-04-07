import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telekomünikasyon Hizmetleri | BGTS",
  description:
    "BGTS, telekom operatörleri için dijital platform yönetimi, içerik portalları, MSP hizmetleri ve 7/24 kesintisiz operasyon desteği sunar.",
  alternates: { canonical: "https://bgts.com.tr/industries/telecommunications" },
  openGraph: {
    title: "Telekomünikasyon Hizmetleri | BGTS",
    description:
      "Telekom operatörleri için dijital platform yönetimi, içerik portalları, MSP hizmetleri ve 7/24 kesintisiz operasyon desteği.",
    url: "https://bgts.com.tr/industries/telecommunications",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
