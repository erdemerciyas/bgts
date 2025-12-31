"use client"

import Hero from "@/components/ui/Hero"
import Link from "next/link"
import Image from "next/image"
import { Settings, Clock, CheckCircle, ArrowRight, Users, Shield, Zap, Globe, BarChart, Code2, GitBranch, Server, Cpu, GraduationCap, Heart, Rocket } from "lucide-react"

export default function Home() {
  return (
    <>
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
      <section className="py-10 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Türkiye'nin En Büyük Kurumlarının Güvenilir İş Ortağı
          </p>
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
        </div>
      </section>

      {/* Services Summary (Redesigned) */}
      <section className="bg-white">
        {/* Top Split Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide mb-6">
                Hizmetlerimiz
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                Kanıtlanmış Sonuçlarla<br />Güvenilir Teknoloji Ortağınız
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                25 yılı aşkın deneyimimizle, işletmelerin sürdürülebilir büyüme elde etmelerini, operasyonları optimize etmelerini ve benzersiz ihtiyaçlarına göre uyarlanmış stratejik teknoloji danışmanlığı ile karlılığı artırmalarını sağlıyoruz.
              </p>
              <Link href="/services" className="inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 font-bold text-white transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20">
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
        </div>

        {/* Bottom Grid Section (3 Columns) - Full Width Strip */}
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
                <h3 className="text-3xl font-bold mb-6">Yönetilen Hizmetler</h3>
                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                  İşletmenizin uzun vadeli hedeflerine ulaşmasına yardımcı olmak, sürdürülebilir büyüme ve rekabet avantajı sağlamak için özelleştirilmiş stratejik planlar oluşturuyor ve uyguluyoruz.
                </p>
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
                <h3 className="text-3xl font-bold mb-6">Yazılım Geliştirme</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Java, .NET ve modern frontend teknolojileriyle, kurumunuzun ihtiyaçlarına özel, ölçeklenebilir ve güvenli yazılım çözümleri tasarlıyoruz.
                </p>
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
                <h3 className="text-3xl font-bold mb-6">DevOps & Cloud</h3>
                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                  Otomatik dağıtım süreçleri (CI/CD) ve bulut modernizasyonu ile yazılım teslimat hızınızı ve kalitenizi artırarak operasyonel verimlilik sağlıyoruz.
                </p>
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
      </section>

      {/* Software Delivery Models (Widgets) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-bold tracking-wider text-sm uppercase mb-2 block">Esnek İş Modelleri</span>
            <h2 className="text-4xl font-bold mb-4 font-heading text-slate-900">Nasıl Çalışıyoruz?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              İhtiyaçlarınıza özel esnek çalışma modelleri ile uçtan uca proje teslimatı veya çevik takım ölçeklendirmesi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Turnkey Widget */}
            <div className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Anahtar Teslim (TurnKey)</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Projenizi A'dan Z'ye biz yönetelim. Sabit kapsamlı projeleriniz için analiz, tasarım, geliştirme ve test süreçlerini üstleniyoruz.
              </p>

              <div className="space-y-4 mb-8">
                {["Sabit Bütçe & Zaman", "Tek Sorumluluk Noktası", "Uçtan Uca Teslimat"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/services/software-development" className="block w-full py-4 rounded-xl border-2 border-slate-200 font-bold text-slate-700 text-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                Detaylı Bilgi Alın
              </Link>
            </div>

            {/* Time & Material Widget */}
            <div className="group relative p-10 rounded-3xl bg-slate-900 text-white hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Efor Bazlı (Time & Material)</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Kendi ekibinizi bizim uzmanlarımızla güçlendirin. Çevik süreçlerinize anında uyum sağlayan elit mühendisler.
              </p>

              <div className="space-y-4 mb-8">
                {["Esnek Ölçeklendirme", "Tam Kontrol & Şeffaflık", "Hızlı Adaptasyon"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/services/software-development" className="block w-full py-4 rounded-xl bg-blue-600 font-bold text-white text-center hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                Ekibinizi Kurun
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid - Visual & Clean */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-6 py-2 rounded-full bg-cyan-500 text-white font-bold text-sm tracking-wide mb-6">
              Sektörler
            </span>
            <h2 className="text-4xl font-bold font-heading text-slate-900 mb-6">
              Hizmet Verdiğimiz Sektörler
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Finans, savunma, perakende ve telekom gibi kritik sektörlerde; işletmelerin büyümesini destekleyen, operasyonlarını optimize eden ve dijital dönüşüm yolculuklarını hızlandıran stratejik çözümler sunuyoruz.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
            {/* Decorative Central Diamond (Hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rotate-45 z-20 border-4 border-white shadow-sm"></div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {/* Row 1 */}
              <div className="grid divide-y divide-slate-200">
                {/* Item 1: Banking */}
                <div className="relative p-12 flex flex-col items-center text-center group min-h-[400px]">
                  {/* Background Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80"
                    alt="Banking Finance"
                    fill
                    unoptimized
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-white/50 group-hover:bg-transparent transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                      <BarChart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Bankacılık & Finans</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed max-w-sm group-hover:text-slate-800 transition-colors">
                      Modernizasyon, açık bankacılık ve fintech entegrasyonlarıyla finansal riskleri yönetirken karlılığı artırıyoruz.
                    </p>
                    <Link href="/industries/banking" className="text-slate-500 font-bold border-b-2 border-slate-200 hover:text-blue-600 hover:border-blue-600 transition-all pb-1">
                      Finans Çözümlerini İncele
                    </Link>
                  </div>
                </div>
                {/* Item 2: Retail */}
                <div className="relative p-12 flex flex-col items-center text-center group min-h-[400px]">
                  {/* Background Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1472851294608-4155f2118c67?auto=format&fit=crop&q=80"
                    alt="Retail Store"
                    fill
                    unoptimized
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-white/50 group-hover:bg-transparent transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-cyan-600/20 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Perakende</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed max-w-sm group-hover:text-slate-800 transition-colors">
                      Müşteri deneyimini iyileştirmek ve tedarik zincirini optimize etmek için e-ticaret ve omnichannel stratejileri.
                    </p>
                    <Link href="/industries/retail-telecom" className="text-slate-500 font-bold border-b-2 border-slate-200 hover:text-cyan-600 hover:border-cyan-600 transition-all pb-1">
                      Perakende Çözümlerini İncele
                    </Link>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid divide-y divide-slate-200">
                {/* Item 3: Telecom */}
                <div className="relative p-12 flex flex-col items-center text-center group min-h-[400px]">
                  {/* Background Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                    alt="Technology Network"
                    fill
                    unoptimized
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-white/50 group-hover:bg-transparent transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Telekomünikasyon</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed max-w-sm group-hover:text-slate-800 transition-colors">
                      Teknoloji şirketlerinin rekabetçi bir ortamda ölçeklenmesine yardımcı olmak için inovasyonu ve dijital dönüşümü yönlendiriyoruz.
                    </p>
                    <Link href="/industries/retail-telecom" className="text-slate-500 font-bold border-b-2 border-slate-200 hover:text-indigo-600 hover:border-indigo-600 transition-all pb-1">
                      Telekom Çözümlerini İncele
                    </Link>
                  </div>
                </div>
                {/* Item 4: Defense */}
                <div className="relative p-12 flex flex-col items-center text-center group min-h-[400px]">
                  {/* Background Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80"
                    alt="Cyber Security"
                    fill
                    unoptimized
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-white/50 group-hover:bg-transparent transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-slate-800/20 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Savunma Sanayi</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed max-w-sm group-hover:text-slate-800 transition-colors">
                      Kritik görev sistemleri, gömülü yazılım ve C4I çözümleriyle süreç optimizasyonu ve regülasyon uzmanlığı.
                    </p>
                    <Link href="/industries/defense" className="text-slate-500 font-bold border-b-2 border-slate-200 hover:text-slate-900 hover:border-slate-900 transition-all pb-1">
                      Savunma Çözümlerini İncele
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR & Culture Summary (New) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-2 block">Kariyer & Kültür</span>
              <h2 className="text-4xl font-bold font-heading text-slate-900 mb-6">Geleceği Birlikte Şekillendirelim</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Şeffaf iletişim, takım ruhu ve sürekli öğrenme tutkusuyla büyüyen global bir aileyiz. Genç Yetenek Programlarımız ve her seviyeye uygun kariyer yollarımızla potansiyelini keşfet.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Genç Yetenekler</h4>
                    <p className="text-sm text-slate-500">Staj, Bootcamp ve Eğitim programları.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Kariyer Yolları</h4>
                    <p className="text-sm text-slate-500">Teknik ve Yönetsel şeffaf ilerleme.</p>
                  </div>
                </div>
              </div>

              <Link href="/hr" className="inline-flex h-12 items-center justify-center rounded-xl bg-orange-600 px-8 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700 hover:scale-105">
                Kariyer Fırsatları
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100">
                {/* Placeholder for Culture Image */}
                <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center text-slate-400">
                  <Users className="w-20 h-20 opacity-20" />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-6 h-6 text-red-500 fill-current" />
                  <span className="font-bold text-slate-900">Great Place to Work</span>
                </div>
                <p className="text-sm text-slate-500">Çalışan odaklı kültürümüzle sektörde fark yaratıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
