"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Award, BookOpen, Users, BrainCircuit, Mic2, MonitorPlay } from "lucide-react"
import Image from "next/image"

export default function LearningPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="Eğitim & Sürekli Gelişim"
                subtitle="Kendine yatırım yapmak bizim için önemlidir."
                badge="Gelişim Akademisi"
                className="bg-slate-900"
                backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            />

            {/* Intro & Highlights */}
            <Section className="pb-0 pt-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <Heading variant="h2" className="mb-8 text-slate-900 leading-tight">
                            Kendine yatırım yapmak hem bireysel hem de <span className="text-indigo-600">kurumsal başarı</span> için vazgeçilmezdir.
                        </Heading>
                        <Text className="text-xl text-slate-600 leading-relaxed mb-12">
                            Bu nedenle çalışanlarımızın sürekli öğrenmesini ve gelişmesini destekleyen kapsamlı eğitim ve gelişim fırsatları sunuyoruz. Yazılım ve altyapı teknolojilerinde uzmanlaşmayı teşvik ediyor, öğrenmenin sürekliliğini kültürümüzün bir parçası haline getiriyoruz.
                        </Text>

                        {/* Key Pillars */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Award, label: "Sertifika Desteği" },
                                { icon: MonitorPlay, label: "Online Eğitim" },
                                { icon: BrainCircuit, label: "Liderlik Programı" },
                                { icon: Users, label: "Mentorluk" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Feature Sections - Zig Zag */}
            <div className="space-y-0">
                {/* 1. Teknik Gelişim */}
                <Section className="bg-white">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
                                        alt="Online Eğitim ve Sertifikalar"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-indigo-600 tracking-wider text-sm uppercase">Teknik Uzmanlık</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Sertifika Destekleri ve Online Eğitim</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Çalışanlarımızın mesleki uzmanlıklarını derinleştirebilmeleri için Cloud, Agile, güvenlik ve yazılım alanlarında sertifika programlarını aktif olarak destekliyoruz.
                                </Text>
                                <div className="grid gap-4">
                                    <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="mt-1"><Award className="w-5 h-5 text-indigo-600" /></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Sertifikasyon</h4>
                                            <p className="text-sm text-slate-600 mt-1">Uluslararası standartlarda yetkinlik belgelendirme desteği.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="mt-1"><MonitorPlay className="w-5 h-5 text-blue-600" /></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Sınırsız Erişim</h4>
                                            <p className="text-sm text-slate-600 mt-1">Global online eğitim platformlarına tam üyelik ile özgür öğrenme.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* 2. Liderlik */}
                <Section className="bg-slate-50">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
                                        <BrainCircuit className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-rose-600 tracking-wider text-sm uppercase">Liderlik & Koçluk</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Geleceğin Liderlerini Yetiştiriyoruz</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Mevcut ve potansiyel liderlerimizin yetkinliklerini güçlendirmek amacıyla yapılandırılmış liderlik gelişim programları ve birebir mentorluk süreçleri sunuyoruz.
                                </Text>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                                            <span className="font-bold text-xs">1</span>
                                        </div>
                                        <p className="text-slate-700"><strong className="text-slate-900">Stratejik Düşünme:</strong> Karar alma ve ekip yönetimi becerilerini geliştiren özel modüller.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                                            <span className="font-bold text-xs">2</span>
                                        </div>
                                        <p className="text-slate-700"><strong className="text-slate-900">Birebir Mentorluk:</strong> Deneyimli liderlerle yürütülen koçluk seansları.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                                        alt="Liderlik Toplantısı"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-rose-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* 3. Topluluk */}
                <Section className="bg-white">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
                                        alt="Topluluk Etkinliği"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                                        <Mic2 className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-emerald-600 tracking-wider text-sm uppercase">Kolektif Öğrenme</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">İç Teknik Topluluklar & Paylaşım</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Bilgi paylaştıkça çoğalır. Çalışanlarımızın deneyimlerini aktardığı düzenli oturumlar ile öğrenmeyi kolektif bir deneyime dönüştürüyor ve ekipler arası bağları güçlendiriyoruz.
                                </Text>
                                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                    <div className="flex gap-4">
                                        <Users className="w-8 h-8 text-emerald-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Teknik Derinlik</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Tech-talks, workshoplar ve case-study analizleri ile organizasyon genelinde teknik know-how'ı canlı tutuyoruz.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>
        </div>
    )
}
