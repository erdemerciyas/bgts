import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perakende & Telekom Çözümleri | BGTS",
  description:
    "BGTS, perakende ve telekomünikasyon sektörlerinde omnichannel deneyim, akıllı tedarik zinciri ve bulut tabanlı altyapı çözümleri sunar.",
  alternates: { canonical: "https://bgts.com.tr/industries/retail-telecom" },
  openGraph: {
    title: "Perakende & Telekom Çözümleri | BGTS",
    description:
      "Perakende ve telekomünikasyon sektörlerinde omnichannel deneyim, akıllı tedarik zinciri ve bulut tabanlı altyapı çözümleri.",
    url: "https://bgts.com.tr/industries/retail-telecom",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
