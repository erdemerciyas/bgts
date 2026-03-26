import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yönetilen Hizmetler (MSP) | BGTS",
  description:
    "BGTS, sunucu yönetimi, 7/24 NOC operasyonu, ITSM süreçleri ve AIOps destekli altyapı izleme ile kapsamlı yönetilen hizmetler sunar.",
  alternates: { canonical: "https://bgts.com.tr/services/managed-services" },
  openGraph: {
    title: "Yönetilen Hizmetler (MSP) | BGTS",
    description:
      "Sunucu yönetimi, 7/24 NOC operasyonu, ITSM süreçleri ve AIOps destekli altyapı izleme ile kapsamlı yönetilen hizmetler.",
    url: "https://bgts.com.tr/services/managed-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
