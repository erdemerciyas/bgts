import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışma Kültürü | BGTS",
  description:
    "BGTS çalışma kültürünü tanıyın. Esnek çalışma, takım ruhu ve yenilikçi ortamımızla fark yaratıyoruz.",
  alternates: { canonical: "https://bgts.com.tr/culture" },
  openGraph: {
    title: "Çalışma Kültürü | BGTS",
    description:
      "BGTS çalışma kültürünü tanıyın. Esnek çalışma, takım ruhu ve yenilikçi ortamımızla fark yaratıyoruz.",
    url: "https://bgts.com.tr/culture",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
