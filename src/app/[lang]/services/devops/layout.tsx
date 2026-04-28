import type { Metadata } from "next";
import { buildAlternates, buildOgUrl } from "@/lib/seo";
import type { Locale } from "@/i18n-config";

const PATH = "/services/devops";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = isTr ? "DevOps & Cloud Hizmetleri | BGTS" : "DevOps & Cloud Services | BGTS";
  const description = isTr
    ? "BGTS, CI/CD otomasyonu, Kubernetes orkestrasyonu, bulut altyapı yönetimi ve SRE uygulamaları ile DevOps dönüşümünü hızlandırır."
    : "BGTS accelerates your DevOps transformation with CI/CD automation, Kubernetes orchestration, cloud infrastructure management, and SRE practices.";

  return {
    title,
    description,
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title,
      description,
      url: buildOgUrl(PATH, locale),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
