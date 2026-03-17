"use client"

import { HeroSlider } from "@/components/home/HeroSlider"
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData"

import { ServicesSection } from "@/components/home/ServicesSection"
import { IndustriesGrid } from "@/components/home/IndustriesGrid"
import { DeliveryModels } from "@/components/home/DeliveryModels"

export default function Home() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Ana Sayfa", url: "/" }]} />
      <HeroSlider />
      <ServicesSection />
      <DeliveryModels />
      <IndustriesGrid />

    </>
  )
}
