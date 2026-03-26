import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perakende & E-Ticaret Çözümleri | BGTS",
  description:
    "BGTS, perakende ve e-ticaret sektöründe B2B portallar, İK teknolojileri, DevOps altyapıları ve 7/24 yönetilen hizmetler ile dijital dönüşüm sağlar.",
  alternates: { canonical: "https://bgts.com.tr/industries/retail" },
  openGraph: {
    title: "Perakende & E-Ticaret Çözümleri | BGTS",
    description:
      "Perakende ve e-ticaret sektöründe B2B portallar, İK teknolojileri, DevOps altyapıları ve 7/24 yönetilen hizmetler ile dijital dönüşüm.",
    url: "https://bgts.com.tr/industries/retail",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
