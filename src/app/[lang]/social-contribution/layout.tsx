import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sürdürülebilir Değer Programı | BGTS",
  description:
    "BGTS sürdürülebilir değer programını keşfedin. Topluma katkı, sosyal sorumluluk ve gönüllülük projelerimiz.",
  alternates: { canonical: "https://bgts.com.tr/social-contribution" },
  openGraph: {
    title: "Sürdürülebilir Değer Programı | BGTS",
    description:
      "BGTS sürdürülebilir değer programını keşfedin. Topluma katkı, sosyal sorumluluk ve gönüllülük projelerimiz.",
    url: "https://bgts.com.tr/social-contribution",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
