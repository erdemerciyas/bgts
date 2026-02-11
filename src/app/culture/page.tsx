"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { MessageCircle, Globe, Zap, Heart, Users, GraduationCap, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function CulturePage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="Çalışma Kültürü"
                subtitle="Bizde kültür; açık iletişim, takım ruhu ve üretme heyecanı üzerine kuruludur."
                badge="Kariyer & Yaşam"
                className="bg-slate-900"
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            />

            {/* Intro & Highlights */}
            <Section className="pb-0 pt-20">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <Heading variant="h2" className="mb-8 text-slate-900 leading-tight">
                            Bizde kültür; açık iletişim, takım ruhu ve <span className="text-pink-600">üretme heyecanı</span> üzerine kuruludur.
                        </Heading>
                        <Text className="text-xl text-slate-600 leading-relaxed mb-12">
                            Çalışma kültürümüz; şeffaf iletişim, güçlü takım ruhu ve üretme heyecanını merkezine alır. Çalışanlarımızın en verimli şekilde çalışabilmesi için hibrit ve esnek çalışma modelleri sunuyor; ofisten veya uzaktan rahatça çalışabilecekleri bir ortam oluşturuyoruz.
                        </Text>

                        {/* Key Pillars */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Globe, label: "Hibrit Çalışma" },
                                { icon: Zap, label: "Agile Yapı" },
                                { icon: Heart, label: "Samimi Ortam" },
                                { icon: Users, label: "Sosyal Topluluk" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
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
                {/* 1. İletişim & Ortam */}
                <Section className="bg-white">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
                                        alt="Açık İletişim"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-blue-600 tracking-wider text-sm uppercase">İletişim & Ortam</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Açık İletişim ve Destekleyici Ortam</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Kültürümüz; samimi, yaratıcı ve destekleyici bir atmosfer üzerine kuruludur. Fikirlerin özgürce paylaşıldığı, katkıların değer gördüğü bir iş ortamı yaratırız.
                                </Text>
                                <div className="grid gap-4">
                                    <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="mt-1"><MessageCircle className="w-5 h-5 text-blue-600" /></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Şeffaf İletişim</h4>
                                            <p className="text-sm text-slate-600 mt-1">Her seviyede hızlı, doğrudan ve erişilebilir iletişim.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="mt-1"><Heart className="w-5 h-5 text-red-600" /></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Samimi Atmosfer</h4>
                                            <p className="text-sm text-slate-600 mt-1">Yaratıcılığı teşvik eden, herkesin fikrinin değer gördüğü bir ortam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* 2. Çalışma Modeli */}
                <Section className="bg-slate-50">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-green-600 tracking-wider text-sm uppercase">Çalışma Modeli</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Esnek Çalışma ve Agile Yapı</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Ekiplerimiz Agile yapılarda organize olur. Bu sayede projelerde hızlı ilerler, daha fazla iş birliği yapar ve değişen ihtiyaçlara kolayca uyum sağlarız.
                                </Text>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-5 rounded-xl border border-green-100 shadow-sm">
                                        <Zap className="w-8 h-8 text-amber-500 mb-3" />
                                        <h4 className="font-bold text-slate-900 mb-1">Agile Metodoloji</h4>
                                        <p className="text-sm text-slate-500">Hızlı adaptasyon ve sürekli gelişim döngüsü.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-green-100 shadow-sm">
                                        <Globe className="w-8 h-8 text-green-500 mb-3" />
                                        <h4 className="font-bold text-slate-900 mb-1">Uzaktan Erişim</h4>
                                        <p className="text-sm text-slate-500">Güçlü dijital altyapı ile özgür çalışma imkanı.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                                        alt="Agile Çalışma"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* 3. Sosyal & Gelişim */}
                <Section className="bg-white">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
                                        alt="Sosyal Etkinlikler"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-purple-600 tracking-wider text-sm uppercase">Biz Bir Aileyiz</span>
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Topluluklar ve İnsana Yatırım</Heading>
                                <Text className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Çeşitli topluluklar, sosyal etkinlikler ve gönüllülük projeleri ile çalışanlarımızın hem kişisel hem de sosyal gelişimlerini destekler, ekip bağlılığını güçlendiririz.
                                </Text>
                                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-100">
                                    <div className="flex gap-4 items-start">
                                        <GraduationCap className="w-8 h-8 text-indigo-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Sürekli Gelişim</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                Bizim için en değerli yatırım insandır. Gelişim programları, mentorluk ve sosyal projelerle çalışanlarımızın yanındayız.
                                            </p>
                                            <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                Bize Katıl <ArrowUpRight className="w-4 h-4" />
                                            </button>
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
