"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Server, Activity, LineChart, Shield, Cpu, Zap, BarChart2, CheckCircle2, ArrowRight, BrainCircuit, Users, TrendingUp } from "lucide-react"

export default function DataCenterPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="Veri Merkezi Yönetimi ve İzleme Hizmetleri"
                subtitle="30 yıllık mühendislik deneyimi ile operasyonel mükemmelliği hedefleyen uçtan uca veri merkezi yönetimi."

                className="bg-blue-900"
                backgroundImage="/images/headers/msp/Veri-Merkezi.png"
            />

            {/* Üst Seviye Hizmet Kapsamı */}
            <Section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <Heading variant="h2" className="text-slate-900 mb-4">Üst Seviye Hizmet Kapsamı</Heading>
                        <Text variant="large" className="text-slate-600 max-w-2xl mx-auto">
                            Operasyonel süreçlerinizi üç temel fazda ele alarak sürdürülebilir başarı sağlıyoruz.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Activity className="w-7 h-7 text-blue-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-3">1. İzleme & Müdahale</Heading>
                            <Text className="text-slate-600 italic mb-4">"Yangını fark et, zamanında söndür!"</Text>
                            <Text className="text-slate-700">
                                Kesintisiz monitoring ve 7/24 anlık olay yönetimi ile sorunları büyümeden engelleyin. Erken uyarı sistemleri ve hızlı aksiyon planları.
                            </Text>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-indigo-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-3">2. Geliştirme & Katma Değer</Heading>
                            <Text className="text-slate-600 italic mb-4">"Hasarı anla, iyileştir!"</Text>
                            <Text className="text-slate-700">
                                Kök sebep analizleri (RCA) ve sürekli iyileştirme çalışmaları ile sisteminizi güçlendirin. Tekrarlayan sorunları otomasyonla çözün.
                            </Text>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                                <BarChart2 className="w-7 h-7 text-teal-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-3">3. Yönetim & Analitik</Heading>
                            <Text className="text-slate-600 italic mb-4">"Görselleştir, dar boğazları tespit et!"</Text>
                            <Text className="text-slate-700">
                                Veriye dayalı yönetim, kapasite planlama ve darboğaz analizleri ile geleceği öngörün. Stratejik kararlar için detaylı raporlama.
                            </Text>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Yönetim & Analitik Derinliği */}
            <Section className="py-20 bg-slate-900 text-white">
                <Container>
                    <div className="text-center mb-16">
                        <Heading variant="h2" className="text-white mb-4">Yönetim & Analitik Derinliği</Heading>
                        <Text className="text-slate-400">Operasyonel veriden stratejik vizyona uzanan 3 katmanlı yönetim modeli.</Text>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Operasyonel Zeka */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <BrainCircuit className="w-8 h-8 text-blue-400" />
                                <Heading variant="h3" className="text-white">Operasyonel Zeka</Heading>
                            </div>
                            <Text className="text-slate-400 italic mb-6">"Ham veriden operasyonel farkındalığa."</Text>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                    <div><span className="font-bold text-white">Dedike Analitik Departmanı:</span> <span className="text-slate-400 text-sm">Sadece veri analitiğine odaklanan uzman kadro.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                    <div><span className="font-bold text-white">Dikey Uzmanlık:</span> <span className="text-slate-400 text-sm">Sektörel bilgi birikimi ile veriyi işleme.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                    <div><span className="font-bold text-white">Proaktif Öngörüler:</span> <span className="text-slate-400 text-sm">Yük analizi ve kapasite tahminleme.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                    <div><span className="font-bold text-white">Anomali Tespiti:</span> <span className="text-slate-400 text-sm">Standarttan sapmaların otomatik tespiti.</span></div>
                                </li>
                            </ul>
                        </div>

                        {/* CSM */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-8 h-8 text-indigo-400" />
                                <Heading variant="h3" className="text-white">CSM (Müşteri Başarısı)</Heading>
                            </div>
                            <Text className="text-slate-400 italic mb-6">"Ölçülebilir ve sürdürülebilir değer üretimi."</Text>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                                    <div><span className="font-bold text-white">Tek İletişim Noktası:</span> <span className="text-slate-400 text-sm">Karmaşık süreçler yerine yalın iletişim.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                                    <div><span className="font-bold text-white">Hizmet Memnuniyeti:</span> <span className="text-slate-400 text-sm">Düzenli anketler ve deneyim ölçümü.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                                    <div><span className="font-bold text-white">SLA / OLA Uyum:</span> <span className="text-slate-400 text-sm">Taahhüt edilen hizmet kalitesinin şeffaf takibi.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                                    <div><span className="font-bold text-white">Sağlık Skoru:</span> <span className="text-slate-400 text-sm">Riskleri önceden gösteren metrikler.</span></div>
                                </li>
                            </ul>
                        </div>

                        {/* Stratejik Performans */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="w-8 h-8 text-teal-400" />
                                <Heading variant="h3" className="text-white">Stratejik Performans</Heading>
                            </div>
                            <Text className="text-slate-400 italic mb-6">"Görünürlükten stratejik aksiyona."</Text>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                                    <div><span className="font-bold text-white">C-Level Raporlama:</span> <span className="text-slate-400 text-sm">Yönetim kuruluna özel özet göstergeler.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                                    <div><span className="font-bold text-white">Hizmet Sürekliliği:</span> <span className="text-slate-400 text-sm">İş kesintilerinin finansal etki analizi.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                                    <div><span className="font-bold text-white">Talep Trendleri:</span> <span className="text-slate-400 text-sm">Gelecek projeksiyonları ve yük analizi.</span></div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                                    <div><span className="font-bold text-white">İş Değeri Katkısı:</span> <span className="text-slate-400 text-sm">Hizmetin ciro ve verimliliğe etkisi.</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Operasyonda Yapay Zeka */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
                                <Cpu className="w-4 h-4" /> AI Operations
                            </div>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                Operasyonda Yapay Zeka
                            </Heading>
                            <Text variant="large" className="text-slate-600 mb-6">
                                Ticket verisinden maksimum katma değer üretiyoruz. L1 desteğin ötesine geçerek, operasyonel yükünüzü yapay zeka ile hafifletiyoruz.
                            </Text>

                            <div className="space-y-6">
                                {[
                                    { title: "Çağrı Merkezi Botu", desc: "7/24 kesintisiz ilk karşılama ve yönlendirme." },
                                    { title: "Auto-Remediation", desc: "Tekrarlayan sorunlar için otomatik iyileştirme." },
                                    { title: "Kök Sebep Analizi", desc: "Problem yönetimi desteği ile kalıcı çözümler." },
                                    { title: "Workforce Analizi", desc: "Kaynak ve yetkinlik optimizasyonu." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <Heading variant="h4" className="text-slate-900 mb-1">{item.title}</Heading>
                                            <Text className="text-slate-600 text-sm">{item.desc}</Text>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg">
                            <Heading variant="h3" className="text-slate-900 mb-8 border-b border-slate-100 pb-4">Teknoloji Uzmanlığı & AIOps</Heading>
                            <ul className="space-y-4">
                                {[
                                    "BilgeAdam Zabbix Yönetim Paketleri",
                                    "Servis Bazlı İzleme / Servis Ağacı Modelleme",
                                    "Bütünleşik Monitoring Uzmanlığı",
                                    "Olay Korelasyonu & AI (Alarm Optimizasyonu)",
                                    "Auto Alarm Dispatching",
                                    "Etki Analizi & L0 Problem Yönetimi"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                                        <Activity className="w-5 h-5 text-blue-500" />
                                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Başarı Hikayeleri & Neden Biz */}
            <Section className="py-20 bg-blue-900 text-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <Heading variant="h2" className="text-white mb-8">Neden Biz? Rakamlarla Konuşuyoruz.</Heading>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-black text-blue-400 mb-2">210+</div>
                                    <div className="text-sm text-slate-300">Kişilik Dev Kadro. Çoklu dil desteği sunan merkezi MSP ekibi.</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-blue-400 mb-2">%90+</div>
                                    <div className="text-sm text-slate-300">FLR Çözüm Başarısı. Olayların %90'ını L1 seviyesinde çözüyoruz.</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-blue-400 mb-2">%98.6</div>
                                    <div className="text-sm text-slate-300">Aynı Gün Çözüm. Sorunları yarına bırakmıyoruz.</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-blue-400 mb-2">&lt;%1.3</div>
                                    <div className="text-sm text-slate-300">Re-bound. Çözülen sorunlar tekrar etmez.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Heading variant="h2" className="text-white mb-8">Gerçek Başarı Hikayeleri</Heading>
                            <div className="space-y-6">
                                {[
                                    { company: "Lider Telekom Operatörü", desc: "Çoklu müşteri ortamında servis bazlı izlemeye geçiş ve alarm optimizasyonu." },
                                    { company: "Perakende Devi", desc: "170.000 alarmdan 15.000 nitelikli alarma düşüş. SRE dönüşümü ve özelleştirilmiş mimari." },
                                    { company: "FMCG Sektör Lideri", desc: "%72 olan izleme kapsamını %99.8'e çıkardık. AI destekli alarm optimizasyonu." }
                                ].map((story, i) => (
                                    <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10">
                                        <Heading variant="h4" className="text-blue-300 mb-2">{story.company}</Heading>
                                        <Text className="text-white text-sm">{story.desc}</Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Sürekli İyileştirme Yolculuğu */}
            <Section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <Heading variant="h2" className="text-slate-900 mb-4">Sürekli İyileştirme Yolculuğu</Heading>
                        <Text className="text-slate-600">Alarm çöplüğünden stratejik içgörülere uzanan dönüşüm haritası.</Text>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                        {[
                            { title: "Altyapı", items: ["Varlık Keşfi (Discovery)", "Envanter & CMDB", "Topoloji Haritalama"] },
                            { title: "İzleme", items: ["Temel Monitoring", "Eşik Değer Ayarları", "Kritik Sistem Alarmları"] },
                            { title: "Alarm Yönetimi", items: ["%63 Alarm Azaltma", "Gürültü Temizliği", "Olay Korelasyonu"] },
                            { title: "Otomasyon", items: ["Auto Dispatching", "L0 Çözüm", "Oto-İyileştirme"] },
                            { title: "Dashboard", items: ["ISP Performans", "Canlı Operasyon", "Trend Analizi"] },
                            { title: "AIOps", items: ["Anomali Tespiti", "Predictive Maintenance", "Adaptif Eşikler"] },
                            { title: "Stratejik Değer", items: ["C-Level Raporlar", "Kapasite Planlama", "ROI Analizi"] },
                            { title: "İleri Güvenlik", items: ["SecOps", "Zafiyet Tarama", "Uyumluluk Denetimleri"] },
                        ].map((col, i) => (
                            <div key={i}>
                                <Heading variant="h4" className="text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                                    {col.title}
                                </Heading>
                                <ul className="space-y-2 pl-10 border-l-2 border-slate-100">
                                    {col.items.map((item, j) => (
                                        <li key={j} className="text-slate-600 text-sm">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
