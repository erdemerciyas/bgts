"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import StatsCard from "@/components/ui/StatsCard"
import Timeline from "@/components/ui/Timeline"
import { Globe, Users, Award, Briefcase, Rocket, Target, Zap, Building2, Calendar } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"

export default function AboutPage() {
    return (
        <>
            <div className="bg-white min-h-screen">

                <Hero
                    title="Hakkımızda"
                    subtitle="1,400'den fazla mühendisimizle, 1997'den beri dijital dönüşüme liderlik eden global bir teknoloji gücüyüz."

                    className="bg-blue-900"
                    backgroundImage="/images/culture/culture-8.jpg"
                />

                {/* Stats Section with Animated Cards */}
                <Section className="py-20 pb-0">
                    <Container>
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
                            <div className="space-y-6">
                                <Heading variant="h2" className="text-slate-900">Misyonumuz</Heading>
                                <Text variant="large" className="text-slate-700">
                                    Finans, Savunma, Telekom ve Perakende sektörlerindeki kuruluşlar için stratejik teknoloji ortağı olmak en büyük hedefimizdir. Biz sadece proje teslim etmiyoruz; ölçeklenebilirliği, güvenliği ve sürdürülebilirliği güvence altına alarak süreci sahipleniyoruz.
                                </Text>
                                <Text variant="large" className="text-slate-700">
                                    Türkiye&apos;deki merkezimizden global ofislerimize kadar, en karmaşık mühendislik problemlerini çözmek için çeşitliliğe sahip yetenek havuzumuzdan güç alıyoruz.
                                </Text>
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
                                    src="/images/culture/culture-4.jpg"
                                    alt="Team Working"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <Heading variant="h4" className="mb-2 text-white">Birlikte Başarıyoruz</Heading>
                                        <Text className="text-blue-100">Tutkulu ekibimizle geleceği inşa ediyoruz</Text>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="mb-24">
                            <div className="text-center mb-16">
                                <Heading variant="h2" className="text-slate-900 mb-4">Yolculuğumuz</Heading>
                                <Text className="text-slate-600 max-w-2xl mx-auto">1997&apos;den günümüze sürekli büyüme ve inovasyon hikayemiz</Text>
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
                                <Heading variant="h4" className="text-slate-900 mb-3">Misyon Odaklı</Heading>
                                <Text className="text-slate-700">
                                    Müşterilerimizin başarısı bizim başarımızdır. Her projede değer yaratmaya odaklanıyoruz.
                                </Text>
                            </div>
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border-2 border-slate-200 hover:shadow-xl transition-shadow">
                                <Zap className="w-12 h-12 text-slate-600 mb-6" />
                                <Heading variant="h4" className="text-slate-900 mb-3">İnovasyon</Heading>
                                <Text className="text-slate-700">
                                    Sürekli öğrenme ve gelişimle, en son teknolojileri projelerimize entegre ediyoruz.
                                </Text>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-xl transition-shadow">
                                <Award className="w-12 h-12 text-indigo-600 mb-6" />
                                <Heading variant="h4" className="text-slate-900 mb-3">Kalite</Heading>
                                <Text className="text-slate-700">
                                    ISO sertifikaları ve uluslararası standartlara tam uyumlu süreçler.
                                </Text>
                            </div>
                        </div>
                    </Container>

                    <ContentSection
                        title="Ürünler & İnovasyon"

                        reverse
                        content={
                            <div className="space-y-6">
                                <div>
                                    <Heading variant="h4" className="text-slate-900 mb-2">Human Capital Management (HCM)</Heading>
                                    <Text>
                                        İşe alımdan performansa ve bordroya kadar tüm çalışan yaşam döngüsünü yönetmek için kapsamlı bir platform. Özellikle Perakende ve Lojistik gibi yüksek sirkülasyonlu sektörler için özel olarak tasarlanmıştır.
                                    </Text>
                                </div>
                                <div>
                                    <Heading variant="h4" className="text-slate-900 mb-2">Praxilla</Heading>
                                    <Text>
                                        Çeviklik ve karmaşık operasyonel ihtiyaçlar için tasarlanmış, bize ait kurumsal kaynak planlama ve yönetim çözümü.
                                    </Text>
                                </div>
                            </div>
                        }
                        image={
                            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="/images/culture/culture-6.jpg"
                                    alt="BGTS Products and Innovation"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        }
                    />
                </Section>
            </div>
        </>
    )
}
