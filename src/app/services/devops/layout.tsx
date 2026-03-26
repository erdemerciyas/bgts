import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps & Cloud Hizmetleri | BGTS",
  description:
    "BGTS, CI/CD otomasyonu, Kubernetes orkestrasyonu, bulut altyapı yönetimi ve SRE uygulamaları ile DevOps dönüşümünü hızlandırır.",
  alternates: { canonical: "https://bgts.com.tr/services/devops" },
  openGraph: {
    title: "DevOps & Cloud Hizmetleri | BGTS",
    description:
      "CI/CD otomasyonu, Kubernetes orkestrasyonu, bulut altyapı yönetimi ve SRE uygulamaları ile DevOps dönüşümünü hızlandırır.",
    url: "https://bgts.com.tr/services/devops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
