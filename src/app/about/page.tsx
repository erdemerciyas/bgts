"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import StatsCard from "@/components/ui/StatsCard"
import Timeline from "@/components/ui/Timeline"
import { Globe, Users, Award, Briefcase, Rocket, Target, Zap, Building2, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Hakkımızda", href: "/about", icon: Building2 }
                    ]}
                />

                <Hero
                    title="Hakkımızda"
                    subtitle="1,400'den fazla mühendisimizle, 1997'den beri dijital dönüşüme liderlik eden global bir teknoloji gücüyüz."
                    badge="Biz Kimiz"
                    className="bg-blue-900"
                    backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                />

                {/* Stats Section with Animated Cards */}
                <div className="container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <StatsCard
                            value="1,400+"
                            label="Mühendis"
                            icon={Users}
                            description="Global yetenek havuzu"
                            color="blue"
                            delay={0}
                        />
                        <StatsCard
                            value="25+"
                            label="Yıllık Deneyim"
                            icon={Calendar}
                            description="1997'den beri"
                            color="slate"
                            delay={0.1}
                        />
                        <StatsCard
                            value="100+"
                            label="Kurumsal Müşteri"
                            icon={Briefcase}
                            description="Türkiye ve global"
                            color="indigo"
                            delay={0.2}
                        />
                        <StatsCard
                            value="Global"
                            label="Varlık"
                            icon={Globe}
                            description="Uluslararası operasyon"
                            color="blue"
                            delay={0.3}
                        />
                    </div>

                    {/* Mission Section with Image */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                            <h2 className="text-3xl font-bold text-slate-900 font-heading">Misyonumuz</h2>
                            <p>
                                Finans, Savunma, Telekom ve Perakende sektörlerindeki kuruluşlar için stratejik teknoloji ortağı olmak en büyük hedefimizdir. Biz sadece proje teslim etmiyoruz; ölçeklenebilirliği, güvenliği ve sürdürülebilirliği güvence altına alarak süreci sahipleniyoruz.
                            </p>
                            <p>
                                Türkiye'deki merkezimizden global ofislerimize kadar, en karmaşık mühendislik problemlerini çözmek için çeşitliliğe sahip yetenek havuzumuzdan güç alıyoruz.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                    <span>Global Teslimat</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Award className="w-5 h-5 text-blue-600" />
                                    <span>Kalite Sertifikalı</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    <span>Elit Yetenekler</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-blue-600" />
                                    <span>Uçtan Uca Çözümler</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                alt="Team Working"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h4 className="text-2xl font-bold mb-2">Birlikte Başarıyoruz</h4>
                                    <p className="text-blue-100">Tutkulu ekibimizle geleceği inşa ediyoruz</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 font-heading mb-4">Yolculuğumuz</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">1997'den günümüze sürekli büyüme ve inovasyon hikayemiz</p>
                        </div>
                        <Timeline
                            items={[
                                {
                                    year: "1997",
                                    title: "Kuruluş",
                                    description: "İstanbul'da teknoloji danışmanlığı olarak başlangıç",
                                    icon: Rocket,
                                    color: "blue"
                                },
                                {
                                    year: "2005",
                                    title: "Global Genişleme",
                                    description: "Avrupa ofislerinin açılması ve uluslararası operasyonlar",
                                    icon: Globe,
                                    color: "slate"
                                },
                                {
                                    year: "2012",
                                    title: "Savunma Sektörü",
                                    description: "Kritik görev projelerine giriş ve savunma sertifikasyonları",
                                    icon: Award,
                                    color: "indigo"
                                },
                                {
                                    year: "2020",
                                    title: "Dijital Dönüşüm",
                                    description: "Cloud-native ve AI çözümlerine geçiş",
                                    icon: Zap,
                                    color: "blue"
                                },
                                {
                                    year: "2024",
                                    title: "1,400+ Mühendis",
                                    description: "Global yetenek havuzu ve 100+ kurumsal müşteri",
                                    icon: Users,
                                    color: "slate"
                                }
                            ]}
                        />
                    </div>

                    {/* Values Section */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-24">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-shadow">
                            <Target className="w-12 h-12 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Misyon Odaklı</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Müşterilerimizin başarısı bizim başarımızdır. Her projede değer yaratmaya odaklanıyoruz.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border-2 border-slate-200 hover:shadow-xl transition-shadow">
                            <Zap className="w-12 h-12 text-slate-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">İnovasyon</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Sürekli öğrenme ve gelişimle, en son teknolojileri projelerimize entegre ediyoruz.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-xl transition-shadow">
                            <Award className="w-12 h-12 text-indigo-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Kalite</h3>
                            <p className="text-slate-700 leading-relaxed">
                                ISO sertifikaları ve uluslararası standartlara tam uyumlu süreçler.
                            </p>
                        </div>
                    </div>
                </div>

                <ContentSection
                    title="Ürünler & İnovasyon"
                    badge="Ürünlerimiz"
                    reverse
                    content={
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Human Capital Management (HCM)</h4>
                                <p>
                                    İşe alımdan performansa ve bordroya kadar tüm çalışan yaşam döngüsünü yönetmek için kapsamlı bir platform. Özellikle Perakende ve Lojistik gibi yüksek sirkülasyonlu sektörler için özel olarak tasarlanmıştır.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Praxilla</h4>
                                <p>
                                    Çeviklik ve karmaşık operasyonel ihtiyaçlar için tasarlanmış, bize ait kurumsal kaynak planlama ve yönetim çözümü.
                                </p>
                            </div>
                        </div>
                    }
                    image={
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                                alt="Innovation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 to-indigo-600/90 flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <span className="text-5xl font-bold mb-4 block">1997'den Beri</span>
                                    <span className="text-2xl font-light">İnovasyon</span>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        </>
    )
}
