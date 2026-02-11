"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Activity, Bell, LineChart, CheckCircle2, Server, Eye, Zap, BarChart2, TrendingDown, Users, ShieldCheck } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/AccordionComponent"

export default function MonitoringPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="Yönetilen Zabbix & 7/24 NOC İzleme"
                subtitle="Sadece izlemiyoruz; iyileştiriyor ve yönetiyoruz. Operasyonel mükemmellik için 360° görünürlük."
                badge="MSP Hizmetleri"
                className="bg-emerald-900"
                backgroundImage="/images/headers/msp/Monitoring.png"
            />

            {/* 3 Adımda Operasyonel Mükemmellik */}
            <Section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <Heading variant="h2" className="text-slate-900 mb-4">3 Adımda Operasyonel Mükemmellik</Heading>
                        <Text variant="large" className="text-slate-600">Süreçlerinizi standardize ediyor ve sürekli iyileştiriyoruz.</Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 relative z-10">
                                <Eye className="w-7 h-7 text-emerald-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-3 relative z-10">1. İzleme & Müdahale</Heading>
                            <Text className="text-slate-600 relative z-10">
                                7/24 gözlem ve anlık olay yönetimi. Sorunları kullanıcılarınızdan önce tespit edip ilk müdahaleyi gerçekleştiriyoruz.
                            </Text>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 relative z-10">
                                <Zap className="w-7 h-7 text-teal-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-3 relative z-10">2. Geliştirme</Heading>
                            <Text className="text-slate-600 relative z-10">
                                Alarm gürültüsünü (Noise) azaltma ve kök sebep analizleri. Otomasyon scriptleri ile kendi kendini iyileştiren sistemler.
                            </Text>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 relative z-10">
                                <BarChart2 className="w-7 h-7 text-cyan-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-3 relative z-10">3. Yönetim & Analitik</Heading>
                            <Text className="text-slate-600 relative z-10">
                                Kapasite planlama ve trend analizleri. İş ve teknik perspektiften (Service Tree) raporlama.
                            </Text>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Gerçek Bir NOC Nasıl Çalışmalı? */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                Gerçek Bir NOC Nasıl Çalışmalı?
                            </Heading>
                            <Text variant="large" className="text-slate-600 mb-6">
                                "Sunucu ayakta mı?" sorusu 10 yıl öncesinde kaldı. Modern NOC, "İş servisi çalışıyor mu ve son kullanıcı etkileniyor mu?" sorusuna yanıt verir.
                            </Text>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">1</div>
                                    <div>
                                        <Heading variant="h4" className="text-slate-900 mb-1">Servis Ağacı Tasarımı</Heading>
                                        <Text className="text-slate-600 text-sm">IT altyapısını, Hizmet (Business) diliyle haritalıyoruz. C-Level için iş sürekliliği, Mühendisler için teknik bağımlılık haritası.</Text>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">2</div>
                                    <div>
                                        <Heading variant="h4" className="text-slate-900 mb-1">Akıllı Eskalasyon</Heading>
                                        <Text className="text-slate-600 text-sm">Her alarm herkesi uyandırmaz. Sistem önce self-healing dener, başarısız olursa doğru uzmanı (DBA, Network vs.) uyarır.</Text>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">3</div>
                                    <div>
                                        <Heading variant="h4" className="text-slate-900 mb-1">Sorun Oluşmadan Çözüm</Heading>
                                        <Text className="text-slate-600 text-sm">Örneğin disk %90 dolduğunda operatör beklemeden otomatik temizlik scriptleri devreye girer.</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg">
                            <Heading variant="h3" className="text-slate-900 mb-6 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-emerald-600" /> Neden Biz?
                            </Heading>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-slate-50 rounded-xl">
                                    <div className="text-3xl font-black text-slate-900 mb-1">210+</div>
                                    <div className="text-xs text-slate-600 font-bold uppercase">Uzman Kadro</div>
                                </div>
                                <div className="text-center p-4 bg-slate-50 rounded-xl">
                                    <div className="text-3xl font-black text-slate-900 mb-1">%90+</div>
                                    <div className="text-xs text-slate-600 font-bold uppercase">L1 Çözüm Başarısı</div>
                                </div>
                                <div className="text-center p-4 bg-slate-50 rounded-xl">
                                    <div className="text-3xl font-black text-slate-900 mb-1">%98.6</div>
                                    <div className="text-xs text-slate-600 font-bold uppercase">Aynı Gün Çözüm</div>
                                </div>
                                <div className="text-center p-4 bg-slate-50 rounded-xl">
                                    <div className="text-3xl font-black text-slate-900 mb-1">&lt;%1.3</div>
                                    <div className="text-xs text-slate-600 font-bold uppercase">Re-bound Oranı</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Neden Daha Ekonomik? */}
            <Section className="py-20 bg-slate-900 text-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Heading variant="h2" className="text-white mb-6">Neden Daha Ekonomik?</Heading>
                            <Text variant="large" className="text-slate-300 mb-8">
                                7/24 izleme yapmak için en az 5-6 kişilik bir ekip kurmanız gerekir. Bizimle çalışarak bu maliyeti %80'e varan oranlarda düşürün.
                            </Text>
                            <ul className="space-y-4">
                                {[
                                    "Vardiya Maliyeti (7/24 için en az 5 personel)",
                                    "Eğitim & Turnover Riskleri",
                                    "Yönetim Eforu (İzin, Hastalık vs.)",
                                    "Yazılım ve Donanım Lisans Maliyetleri"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center">
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                            <TrendingDown className="w-4 h-4 text-red-400" />
                                        </div>
                                        <Text className="text-slate-300">{item}</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
                            <Heading variant="h3" className="text-white mb-6">Maliyet Avantajı</Heading>
                            <div className="space-y-6">
                                <div className="p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                                    <Heading variant="h4" className="text-emerald-300 mb-2">Paylaşımlı (Shared) Ekip</Heading>
                                    <Text className="text-slate-300 text-sm">
                                        Uzman havuzumuz birden fazla müşteriyi izler. 7/24 uzman maliyetini paylaşırsınız.
                                    </Text>
                                </div>
                                <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                                    <Heading variant="h4" className="text-blue-300 mb-2">Dedike (Dedicated) Ekip</Heading>
                                    <Text className="text-slate-300 text-sm">
                                        Sadece sizin ortamınızı izleyen özel personel atanır. İK ve yönetim yükü bizdedir.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Hizmet Paketleri */}
            <Section className="py-20">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Hizmet Paketleri</Heading>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <div className="border border-slate-200 rounded-3xl p-8 hover:border-emerald-500 transition-colors">
                            <Heading variant="h3" className="text-slate-900 mb-2">Starter</Heading>
                            <Text className="text-slate-600 text-sm mb-6">50 Host'a kadar başlangıç paketi.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7/24 Otomatik İzleme</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> E-posta Bildirimleri</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Haftalık Rapor</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Uzaktan NOC Desteği</div>
                            </div>
                        </div>

                        {/* Professional */}
                        <div className="border-2 border-emerald-500 rounded-3xl p-8 relative shadow-xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold">Önerilen</div>
                            <Heading variant="h3" className="text-slate-900 mb-2">Professional</Heading>
                            <Text className="text-slate-600 text-sm mb-6">200 Host'a kadar işletmeler için.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> SMS & E-posta Bildirimleri</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Günlük & Haftalık Rapor</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Özel Dashboard Tasarımı</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 8x5 Destek Ekibi</div>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="border border-slate-200 rounded-3xl p-8 hover:border-emerald-500 transition-colors">
                            <Heading variant="h3" className="text-slate-900 mb-2">Enterprise</Heading>
                            <Text className="text-slate-600 text-sm mb-6">Sınırsız ölçek ve tam yönetim.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sınırsız Host</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7/24 Aktif NOC Ekibi</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real-time PowerBI Raporları</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Olay & Kriz Yönetimi</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Sıkça Sorulan Sorular</Heading>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Zabbix lisans ücreti var mı?</AccordionTrigger>
                                <AccordionContent>
                                    Hayır, Zabbix açık kaynak kodlu (Open Source) bir yazılımdır ve lisans maliyeti yoktur. Sadece yönetilen hizmet ve uzmanlık için ödeme yaparsınız.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Verilerimiz güvenli mi?</AccordionTrigger>
                                <AccordionContent>
                                    Evet, tüm izleme verileri sizin altyapınızda veya güvenli VPN tünelleri üzerinden şifreli olarak taşınır. KVKK ve ISO standartlarına tam uyum sağlanır.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Mevcut bir Zabbix kurulumum var, yönetimi devredebilir miyim?</AccordionTrigger>
                                <AccordionContent>
                                    Kesinlikle. Mevcut yapınızı analiz edip, optimizasyon çalışmalarını gerçekleştirdikten sonra yönetimi devralabiliriz.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>7/24 Müdahale dahil mi?</AccordionTrigger>
                                <AccordionContent>
                                    Enterprise paketimizde 7/24 aktif müdahale ve NOC hizmeti dahildir. Diğer paketlerde otomatik bildirim ve mesai saatleri içinde destek sunulur.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
