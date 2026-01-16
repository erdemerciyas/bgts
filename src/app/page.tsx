"use client"

import Hero from "@/components/ui/Hero"
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData"
import { LogoWall } from "@/components/home/LogoWall"
import { ServicesSection } from "@/components/home/ServicesSection"
import { IndustriesGrid } from "@/components/home/IndustriesGrid"
import { DeliveryModels } from "@/components/home/DeliveryModels"
import { CareersSection } from "@/components/home/CareersSection"
import { HOME_CONTENT } from "@/content/home"

export default function Home() {
  const { hero } = HOME_CONTENT;

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Ana Sayfa", url: "/" }]} />
      <Hero
        layout="simple"
        title={hero.title}
        subtitle={hero.subtitle}
        badge={hero.badge}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        videoSrc={hero.videoSrc}
      >
        <LogoWall />
      </Hero>
      <ServicesSection />
      <DeliveryModels />
      <IndustriesGrid />
      <CareersSection />
    </>
  )
}
