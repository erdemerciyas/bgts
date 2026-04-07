import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İş Ortakları | BGTS",
  description:
    "BGTS iş ortaklarını tanıyın. Microsoft, AWS ve daha fazlası ile güçlü teknoloji çözümleri sunuyoruz.",
  alternates: { canonical: "https://bgts.com.tr/partnerships" },
  openGraph: {
    title: "İş Ortakları | BGTS",
    description:
      "BGTS iş ortaklarını tanıyın. Microsoft, AWS ve daha fazlası ile güçlü teknoloji çözümleri sunuyoruz.",
    url: "https://bgts.com.tr/partnerships",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
