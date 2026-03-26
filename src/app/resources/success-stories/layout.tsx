import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri | BGTS",
  description:
    "BGTS başarı hikayelerini okuyun. Müşterilerimizle birlikte hayata geçirdiğimiz projeler ve çözümler.",
  alternates: { canonical: "https://bgts.com.tr/resources/success-stories" },
  openGraph: {
    title: "Başarı Hikayeleri | BGTS",
    description:
      "BGTS başarı hikayelerini okuyun. Müşterilerimizle birlikte hayata geçirdiğimiz projeler ve çözümler.",
    url: "https://bgts.com.tr/resources/success-stories",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
