"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Compass, BarChart3, RefreshCw, Rocket, Target, Users, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function CareerPathsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="Kariyer Yolları"
                subtitle="Her çalışanın gelişim yolculuğu farklıdır ve kişiye özeldir."
                badge="Kariyer & Gelişim"
                className="bg-slate-900"
                backgroundImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
            />

            {/* Intro & Highlights */}
            <Section className="pb-0 pt-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <Heading variant="h2" className="mb-8 text-slate-900 leading-tight">
                            Her çalışanın kariyer yolculuğu <span className="text-blue-600">kendine özgüdür.</span>
                        </Heading>
                        <Text className="text-xl text-slate-600 leading-relaxed mb-12">
                            Her çalışanın kariyer yolculuğunun kendine özgü olduğuna inanıyoruz. Bu nedenle çalışanlarımıza kendi hızlarında gelişebilecekleri, potansiyellerini ortaya koyabilecekleri esnek ve sürdürülebilir kariyer yolları sunuyoruz.
                        </Text>

                        {/* Key Pillars */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Compass, label: "Kariyer Yolları" },
                                { icon: BarChart3, label: "Performans" },
                                { icon: RefreshCw, label: "Rotasyon" },
                                { icon: Rocket, label: "Gelişim" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                {/* 1. Teknik ve Yönetsel */}
                <Section className="bg-white">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                                        alt="Teknik ve Yönetsel Kariyer"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                        <Compass className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-blue-600 tracking-wider text-sm uppercase">Kariyer Yolları</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Teknik ve Yönetsel Kariyer Yolları</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Çalışanlarımıza uzmanlıklarını derinleştirebilecekleri teknik kariyer yolları ile ekip ve organizasyon yönetimine odaklanabilecekleri yönetsel kariyer yolları sunuyoruz.
                                </Text>
                                <ul className="space-y-4">
                                    {[
                                        "Uzmanlık odaklı dikey gelişim",
                                        "Liderlik ve yönetim odaklı yatay gelişim",
                                        "Bireysel hedeflere uygun esnek planlama"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                <Target className="w-3.5 h-3.5" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* 2. Şeffaf Performans */}
                <Section className="bg-slate-50">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-purple-600 tracking-wider text-sm uppercase">Performans Yönetimi</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Şeffaf Performans Sistemi</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Performans yönetiminde açıklık ve adaleti esas alıyoruz. Net hedefler, düzenli geri bildirimler ve ölçülebilir kriterler sayesinde çalışanlarımız gelişim alanlarını net bir şekilde görebilir.
                                </Text>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-1">Net Hedefler</h4>
                                        <p className="text-sm text-slate-500">Ölçülebilir ve ulaşılabilir OKR yaklaşımı.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-1">Geri Bildirim</h4>
                                        <p className="text-sm text-slate-500">Düzenli 1:1 görüşmeler ve mentorluk.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
                                        alt="Performans Görüşmesi"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* 3. Rotasyon */}
                <Section className="bg-white">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                                        alt="Ekip Çalışması ve Rotasyon"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                                        <RefreshCw className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-amber-600 tracking-wider text-sm uppercase">Fırsatlar</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Proje Geçişleri & Rotasyonlar</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Farklı ekiplerde ve projelerde görev alma imkânı sunarak çalışanlarımızın deneyim alanlarını genişletmelerini destekliyoruz.
                                </Text>
                                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                    <div className="flex gap-4">
                                        <Users className="w-8 h-8 text-amber-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Bütüncül Perspektif</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Proje geçişleri, yeni bakış açıları kazandırırken yetkinlik gelişimini hızlandırır ve organizasyon genelinde daha geniş bir vizyon sağlar.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* 4. Terfi */}
                <Section className="bg-slate-900 text-white">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-white/10 text-white rounded-xl backdrop-blur-sm">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-blue-200 tracking-wider text-sm uppercase">İlerleme</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-white">Terfi ve Gelişim Fırsatları</Heading>
                                <Text className="text-lg text-slate-300 leading-relaxed mb-8">
                                    Yetkinlik, performans ve potansiyel odaklı terfi yaklaşımımızla çalışanlarımızın emeklerinin karşılığını alabilecekleri şeffaf bir ilerleme sistemi sunuyoruz.
                                </Text>
                                <button className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all">
                                    Açık Pozisyonları İncele
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                                        alt="Kariyer Gelişimi"
                                        fill
                                        className="object-cover opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>
        </div>
    )
}
