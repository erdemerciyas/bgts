import { HeroSlider } from "@/components/home/HeroSlider"
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData"

import { ServicesSection } from "@/components/home/ServicesSection"
import { IndustriesGrid } from "@/components/home/IndustriesGrid"
import { DeliveryModels } from "@/components/home/DeliveryModels"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import { getHomeContent } from "@/content/home"

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as Locale);
  const homeContent = getHomeContent(dict.home);

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Ana Sayfa", url: "/" }]} />
      <HeroSlider slidesDict={dict.home.hero.slides} lang={params.lang} />
      <ServicesSection content={homeContent.servicesSummary} lang={params.lang} />
      <DeliveryModels content={homeContent.deliveryModels} lang={params.lang} />
      <IndustriesGrid content={homeContent.industries} lang={params.lang} />
    </>
  )
}

