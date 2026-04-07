import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | BGTS",
  description:
    "BGTS hakkında bilgi edinin. Vizyonumuz, misyonumuz ve kurumsal değerlerimizle teknoloji dünyasındaki yerimizi keşfedin.",
  alternates: { canonical: "https://bgts.com.tr/about" },
  openGraph: {
    title: "Hakkımızda | BGTS",
    description:
      "BGTS hakkında bilgi edinin. Vizyonumuz, misyonumuz ve kurumsal değerlerimizle teknoloji dünyasındaki yerimizi keşfedin.",
    url: "https://bgts.com.tr/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
