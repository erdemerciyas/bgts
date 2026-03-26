import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yazılım Geliştirme Hizmetleri | BGTS",
  description:
    "BGTS, web ve mobil uygulama geliştirme, iş analizi, test otomasyonu ve sektörel yazılım çözümleri ile uçtan uca yazılım hizmetleri sunar.",
  alternates: { canonical: "https://bgts.com.tr/services/software-development" },
  openGraph: {
    title: "Yazılım Geliştirme Hizmetleri | BGTS",
    description:
      "Web ve mobil uygulama geliştirme, iş analizi, test otomasyonu ve sektörel yazılım çözümleri ile uçtan uca yazılım hizmetleri.",
    url: "https://bgts.com.tr/services/software-development",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
