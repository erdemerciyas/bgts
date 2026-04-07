import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genç Mühendis Programı | BGTS",
  description:
    "BGTS Genç Mühendis Programı ile kariyerine güçlü bir başlangıç yap. Mentorluk, eğitim ve gerçek projelerde deneyim.",
  alternates: { canonical: "https://bgts.com.tr/genc-muhendis-programi" },
  openGraph: {
    title: "Genç Mühendis Programı | BGTS",
    description:
      "BGTS Genç Mühendis Programı ile kariyerine güçlü bir başlangıç yap. Mentorluk, eğitim ve gerçek projelerde deneyim.",
    url: "https://bgts.com.tr/genc-muhendis-programi",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
