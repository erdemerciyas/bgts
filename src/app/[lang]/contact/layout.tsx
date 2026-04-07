import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | BGTS",
  description:
    "BGTS ile iletişime geçin. Adres, telefon ve e-posta bilgilerimizle size en hızlı şekilde ulaşalım.",
  alternates: { canonical: "https://bgts.com.tr/contact" },
  openGraph: {
    title: "İletişim | BGTS",
    description:
      "BGTS ile iletişime geçin. Adres, telefon ve e-posta bilgilerimizle size en hızlı şekilde ulaşalım.",
    url: "https://bgts.com.tr/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
