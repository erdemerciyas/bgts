"use client"

import Hero from "@/components/ui/Hero"
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData"
import Link from "next/link"
import Image from "next/image"
import { Settings, CheckCircle, ArrowRight, Users, Shield, ShieldCheck, Globe, BarChart, GraduationCap, Heart, Rocket } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"

export default function Home() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Ana Sayfa", url: "/" }]} />
      <Hero
        layout="simple"
        title="Business & Global Technology Solutions"
        subtitle="Kritik yazılım projeleri, yönetilen hizmetler ve dijital dönüşüm çözümleriyle kurumunuzun stratejik teknoloji ortağıyız."
        badge="Global Teknoloji Ortağı"
        ctaText="Hizmetleri Keşfedin"
        ctaLink="/services"
        videoSrc="https://play.vidyard.com/TrGTy95HjNi21m7LAtH5e8?autoplay=1&embed_button=0&viral_sharing=0&loop=1&controls=0&muted=1"
      />

      {/* Logo Wall (Social Proof) */}
      <div className="py-10 border-y border-slate-100 bg-white">
        <Container>
          <Text variant="small" className="text-center font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Türkiye&apos;nin En Büyük Kurumlarının Güvenilir İş Ortağı
          </Text>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 transition-all duration-500">
            {[
              { name: "Akbank", src: "/logos/akbank.png" },
              { name: "Türk Telekom", src: "/logos/turk-telekom.png" },
              { name: "Aselsan", src: "/logos/aselsan.png" },
              { name: "Trendyol", src: "/logos/trendyol.png" },
              { name: "Migros", src: "/logos/migros.png" },
              { name: "Vodafone", src: "/logos/vodafone.png" }
            ].map((logo) => (
              <div key={logo.name} className="relative h-8 w-28 sm:h-10 sm:w-40 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 160px"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Services Summary (Redesigned) */}
      <Section background="default" className="pb-0">
        {/* Top Split Section */}
        <Container className="pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-action-blue font-bold text-sm tracking-wide mb-6">
                Hizmetlerimiz
              </span>
              <Heading variant="h2" className="text-slate-900 mb-6">
                Kanıtlanmış Sonuçlarla<br />Güvenilir Teknoloji Ortağınız
              </Heading>
              <Text variant="large" className="text-slate-600 mb-8">
                25 yılı aşkın deneyimimizle, işletmelerin sürdürülebilir büyüme elde etmelerini, operasyonları optimize etmelerini ve benzersiz ihtiyaçlarına göre uyarlanmış stratejik teknoloji danışmanlığı ile karlılığı artırmalarını sağlıyoruz.
              </Text>
              <Link href="/services" className="inline-flex h-14 items-center justify-center rounded-xl bg-action-blue px-8 font-bold text-white transition-all hover:bg-blue-700 shadow-lg shadow-action-blue/20">
                Tüm Hizmetlerimizi İnceleyin
              </Link>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team Meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>

        {/* Bottom Grid Section (3 Columns) - Full Width Strip - Kept custom architecture for specific design */}
        <div className="w-full">
          <div className="grid md:grid-cols-3 min-h-[600px]">

            {/* Managed Services (Blue) */}
            <div className="relative bg-[#0052cc] text-white p-16 flex flex-col justify-between overflow-hidden group">
              {/* Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Managed Services"
                fill
                unoptimized
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-blue-900/40 pointer-events-none"></div>

              {/* Abstract Pattern */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700 z-10"></div>
              <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700 delay-75 z-10"></div>

              <div className="relative z-20">
                <Heading variant="h3" className="mb-6 text-white">Yönetilen Hizmetler</Heading>
                <Text variant="large" className="text-blue-50 mb-8">
                  İşletmenizin uzun vadeli hedeflerine ulaşmasına yardımcı olmak, sürdürülebilir büyüme ve rekabet avantajı sağlamak için özelleştirilmiş stratejik planlar oluşturuyor ve uyguluyoruz.
                </Text>
                <ul className="space-y-4 mb-8 text-blue-50">
                  <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-blue-300" /> 7/24 İzleme & Destek</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-blue-300" /> AIOps & Otomasyon</li>
                </ul>
              </div>
              <div className="relative z-20">
                <Link href="/services/managed-services" className="inline-flex items-center font-bold text-white border-b-2 border-transparent hover:border-white transition-all pb-1 text-lg">
                  Çözümleri Keşfedin <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Software Development (Dark) */}
            <div className="relative bg-[#1e293b] text-white p-16 flex flex-col justify-between overflow-hidden group">
              {/* Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Software Development"
                fill
                unoptimized
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-slate-900/50 pointer-events-none"></div>

              {/* Abstract Pattern */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700 z-10"></div>

              <div className="relative z-20">
                <Heading variant="h3" className="mb-6 text-white">Yazılım Geliştirme</Heading>
                <Text variant="large" className="text-slate-300 mb-8">
                  Java, .NET ve modern frontend teknolojileriyle, kurumunuzun ihtiyaçlarına özel, ölçeklenebilir ve güvenli yazılım çözümleri tasarlıyoruz.
                </Text>
                <ul className="space-y-4 mb-8 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-blue-400" /> Mikroservis Mimarisi</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-blue-400" /> API-First Yaklaşım</li>
                </ul>
              </div>
              <div className="relative z-20">
                <Link href="/services/software-development" className="inline-flex items-center font-bold text-blue-400 border-b-2 border-transparent hover:border-blue-400 transition-all pb-1 text-lg">
                  Çözümleri Keşfedin <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* DevOps (Blue) */}
            <div className="relative bg-[#0052cc] text-white p-16 flex flex-col justify-between overflow-hidden group">
              {/* Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1667372393119-c85c020799a3?auto=format&fit=crop&q=80"
                alt="DevOps"
                fill
                unoptimized
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-blue-900/40 pointer-events-none"></div>

              {/* Abstract Pattern */}
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700 z-10"></div>
              <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700 delay-75 z-10"></div>

              <div className="relative z-20">
                <Heading variant="h3" className="mb-6 text-white">DevOps & Cloud</Heading>
                <Text variant="large" className="text-blue-50 mb-8">
                  Otomatik dağıtım süreçleri (CI/CD) ve bulut modernizasyonu ile yazılım teslimat hızınızı ve kalitenizi artırarak operasyonel verimlilik sağlıyoruz.
                </Text>
                <ul className="space-y-4 mb-8 text-blue-50">
                  <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-blue-300" /> Kubernetes & Konteyner</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-blue-300" /> Cloud-Native Dönüşüm</li>
                </ul>
              </div>
              <div className="relative z-20">
                <Link href="/services/devops" className="inline-flex items-center font-bold text-white border-b-2 border-transparent hover:border-white transition-all pb-1 text-lg">
                  Çözümleri Keşfedin <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Software Delivery Models (Widgets) */}
      <Section background="default">
        <Container>
          <div className="text-center mb-16">
            <Text variant="small" className="text-slate-500 font-bold tracking-wider uppercase mb-2 block">Esnek İş Modelleri</Text>
            <Heading variant="h2" className="mb-4 text-slate-900">Nasıl Çalışıyoruz?</Heading>
            <Text variant="large" className="text-slate-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza özel esnek çalışma modelleri ile uçtan uca proje teslimatı veya çevik takım ölçeklendirmesi.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Turnkey Widget */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-action-blue rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-action-blue/20 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <Heading variant="h3" className="mb-3 text-slate-900">Anahtar Teslim (TurnKey)</Heading>
              <Text className="mb-8">
                Projenizi A&apos;dan Z&apos;ye biz yönetelim. Sabit kapsamlı projeleriniz için analiz, tasarım, geliştirme ve test süreçlerini üstleniyoruz.
              </Text>

              <div className="space-y-4 mb-8">
                {["Sabit Bütçe & Zaman", "Tek Sorumluluk Noktası", "Uçtan Uca Teslimat"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-action-blue" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/services/software-development" className="block w-full py-4 rounded-xl border-2 border-slate-200 font-bold text-slate-700 text-center hover:border-action-blue hover:text-action-blue transition-colors">
                Detaylı Bilgi Alın
              </Link>
            </div>

            {/* Time & Material Widget */}
            <div className="group relative p-10 rounded-3xl bg-indigo-950 text-white hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-300">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <Heading variant="h3" className="mb-3 text-white">Efor Bazlı (Time & Material)</Heading>
              <Text className="text-slate-400 mb-8">
                Kendi ekibinizi bizim uzmanlarımızla güçlendirin. Çevik süreçlerinize anında uyum sağlayan elit mühendisler.
              </Text>

              <div className="space-y-4 mb-8">
                {["Esnek Ölçeklendirme", "Tam Kontrol & Şeffaflık", "Hızlı Adaptasyon"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/services/software-development" className="block w-full py-4 rounded-xl bg-action-blue font-bold text-white text-center hover:bg-blue-500 transition-colors shadow-lg shadow-action-blue/20">
                Ekibinizi Kurun
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries Grid - Visual & Clean */}
      <Section background="default" className="relative">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-6 py-2 rounded-full bg-action-blue text-white font-bold text-sm tracking-wide mb-6">
              Sektörler
            </span>
            <Heading variant="h2" className="text-slate-900 mb-6">
              Hizmet Verdiğimiz Sektörler
            </Heading>
            <Text variant="large" className="text-slate-500">
              Finans, savunma, perakende ve telekom gibi kritik sektörlerde; işletmelerin büyümesini destekleyen, operasyonlarını optimize eden ve dijital dönüşüm yolculuklarını hızlandıran stratejik çözümler sunuyoruz.
            </Text>
          </div>

          {/* Grid Layout */}
          {/* Separated Cards Layout */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1: Banking */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                  alt="Banking & Finance"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/30">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 items-start">
                <Heading variant="h4" className="text-slate-900 mb-3 group-hover:text-action-blue transition-colors">Bankacılık & Finans</Heading>
                <Text className="text-slate-600 mb-6 text-sm line-clamp-3">
                  Modernizasyon, açık bankacılık ve fintech entegrasyonlarıyla riskleri yönetirken karlılığı artırıyoruz.
                </Text>
                <Link href="/industries/banking" className="mt-auto inline-flex items-center text-action-blue font-bold text-sm bg-blue-50 px-4 py-2 rounded-full group-hover:bg-action-blue group-hover:text-white transition-all">
                  Çözümleri İncele <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 2: Retail */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
                  alt="Retail & E-Commerce"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/30">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 items-start">
                <Heading variant="h4" className="text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Perakende</Heading>
                <Text className="text-slate-600 mb-6 text-sm line-clamp-3">
                  Müşteri deneyimini iyileştirmek ve tedarik zincirini optimize etmek için e-ticaret ve omnichannel stratejileri.
                </Text>
                <Link href="/industries/retail-telecom" className="mt-auto inline-flex items-center text-slate-600 font-bold text-sm bg-slate-100 px-4 py-2 rounded-full group-hover:bg-slate-700 group-hover:text-white transition-all">
                  Çözümleri İncele <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 3: Telecom */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                  alt="Telecommunications"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/30">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 items-start">
                <Heading variant="h4" className="text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Telekomünikasyon</Heading>
                <Text className="text-slate-600 mb-6 text-sm line-clamp-3">
                  5G ve dijital dönüşüm ile rekabetçi ölçeklenme ve teknolojik inovasyonu yakalayın.
                </Text>
                <Link href="/industries/retail-telecom" className="mt-auto inline-flex items-center text-indigo-600 font-bold text-sm bg-indigo-50 px-4 py-2 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  Çözümleri İncele <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 4: Defense */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                  alt="Defense Industry"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/30">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 items-start">
                <Heading variant="h4" className="text-slate-900 mb-3 group-hover:text-slate-900 transition-colors">Savunma Sanayi</Heading>
                <Text className="text-slate-600 mb-6 text-sm line-clamp-3">
                  Kritik görev sistemleri ve gömülü yazılımlarla üst düzey güvenlik standartları ve regülasyon uyumu.
                </Text>
                <Link href="/industries/defense" className="mt-auto inline-flex items-center text-slate-700 font-bold text-sm bg-slate-100 px-4 py-2 rounded-full group-hover:bg-slate-800 group-hover:text-white transition-all">
                  Çözümleri İncele <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* HR & Culture Summary (New) */}
      <Section background="default">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-2 block">Kariyer & Kültür</span>
              <Heading variant="h2" className="text-slate-900 mb-6">Geleceği Birlikte Şekillendirelim</Heading>
              <Text variant="large" className="text-slate-600 mb-8">
                Şeffaf iletişim, takım ruhu ve sürekli öğrenme tutkusuyla büyüyen global bir aileyiz. Genç Yetenek Programlarımız ve her seviyeye uygun kariyer yollarımızla potansiyelini keşfet.
              </Text>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-action-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Genç Yetenekler</h4>
                    <p className="text-sm text-slate-500">Staj, Bootcamp ve Eğitim programları.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Kariyer Yolları</h4>
                    <p className="text-sm text-slate-500">Teknik ve Yönetsel şeffaf ilerleme.</p>
                  </div>
                </div>
              </div>

              <Link href="/hr" className="inline-flex h-12 items-center justify-center rounded-xl bg-indigo-600 px-8 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:scale-105">
                Kariyer Fırsatları
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="Office Culture"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-6 h-6 text-indigo-600 fill-current" />
                  <span className="font-bold text-slate-900">Great Place to Work</span>
                </div>
                <p className="text-sm text-slate-500">Çalışan odaklı kültürümüzle sektörde fark yaratıyoruz.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
