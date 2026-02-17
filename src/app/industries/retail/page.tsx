"use client"

import Hero from "@/components/ui/Hero"
import { ShoppingCart, Star, Users, Briefcase, BarChart3, ShieldCheck, Zap, Headphones, Settings, Database, Activity, ArrowRight, CheckCircle2, Package, Truck, Globe, Code, Eye, Brain, BookOpen, Award, Monitor, HardDrive, FileText, Network, Layers } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

const serviceSections = [
    {
        id: "eticaret-b2b",
        title: "E-Ticaret ve B2B Çözümleri",
        description: "İş ortaklarınızın platformunuzu en verimli şekilde kullanması için özelleştirilmiş portallar ve eğitim altyapıları sunuyoruz.",
        icon: ShoppingCart,
        color: "from-orange-500 to-orange-700",
        items: [
            { title: "B2B Destek Portalları", desc: "Merkezi e-ticaret platformunun iş ortakları tarafından etkili kullanımı için özel destek ve eğitim portalları.", icon: Globe },
            { title: "Maliyet Tasarrufu", desc: "Eğitim ve gelişim maliyetlerini optimize eden, kendi kendine öğrenen (self-service) bilgi bankaları.", icon: BarChart3 },
            { title: "Acil Durum Yönetimi", desc: "Operasyonel sorunlarda anlık müdahale ve çözüm sağlayan destek modülleri.", icon: Zap },
            { title: "Entegrasyon Yetkinliği", desc: "Mevcut e-ticaret platformlarının iş ortakları sistemleriyle sorunsuz entegrasyonu.", icon: Network },
        ]
    },
    {
        id: "ik-hr-tech",
        title: "İK ve Çalışan Deneyimi (HR Tech)",
        description: "Sektördeki yüksek çalışan sirkülasyonunu yönetmek ve aidiyeti artırmak için yapay zeka destekli İK çözümleri.",
        icon: Users,
        color: "from-violet-600 to-violet-800",
        items: [
            { title: "Sirkülasyon Yönetimi", desc: "Turnover oranlarını düşürmeye yönelik çalışan bağlılığı ve memnuniyet analizleri.", icon: BarChart3 },
            { title: "Uçtan Uca İK Süreçleri", desc: "Performans Değerlendirme, Eğitim, İşe Alım, Bordro ve Özlük hakları takibi.", icon: Layers },
            { title: "HR/AI Çözümleri", desc: "Çalışan sorun ve taleplerine yapay zeka ile anında yanıt veren akıllı asistanlar.", icon: Brain },
            { title: "Kariyer ve Gelişim", desc: "Çalışanların kişisel gelişimlerini destekleyen eğitim ve kariyer planlama modülleri.", icon: BookOpen },
        ]
    },
    {
        id: "devops-itsm",
        title: "Teknoloji ve Altyapı (DevOps & ITSM)",
        description: "Ölçeklenebilir, güvenli ve global standartlarda yönetilen teknoloji altyapıları.",
        icon: Settings,
        color: "from-blue-600 to-blue-800",
        items: [
            { title: "Ölçeklenebilir Altyapı", desc: "Kullanıcı sayılarındaki artışı karşılayan, yüksek yük altında bile sorunsuz çalışan DevOps mimarileri.", icon: Code },
            { title: "Global ITSM Uyumluluğu", desc: "ITIL ve ISO27001 standartlarında süreç yönetimi, SLA takibi ve çözüm üretimi.", icon: ShieldCheck },
            { title: "Gelişmiş Raporlama", desc: "PowerBI ve Qlik entegrasyonları ile yönetici ve operasyonel gösterge panelleri (Dashboards).", icon: Monitor },
            { title: "7/24 Kesintisiz Hizmet", desc: "Perakendenin dinamik yapısına uygun, tüm bileşenlerin anlık takibi ve hızlı müdahale.", icon: Activity },
        ]
    },
    {
        id: "yonetilen-noc",
        title: "Yönetilen Hizmetler ve NOC",
        description: "Sistemlerinizin sağlığını 7/24 izleyen, güncelleyen ve koruyan profesyonel operasyon merkezi.",
        icon: Activity,
        color: "from-emerald-600 to-emerald-800",
        items: [
            { title: "Servis Bazlı İzleme", desc: "Zabbix ve NOC modelleri ile servis ağacı tabanlı detaylı sistem izleme.", icon: Eye },
            { title: "Uç Nokta Yönetimi (SCCM)", desc: "Kurumsal uygulama dağıtımı, yama yönetimi, işletim sistemi imajları ve ajan sağlığı takibi.", icon: HardDrive },
            { title: "Lisans ve Uyumluluk", desc: "Yazılım lisans yönetimi, kullanım ölçümleme ve kurumsal uyumluluk raporlaması.", icon: FileText },
            { title: "Son Kullanıcı Desteği", desc: "ITIL standartlarında yerinde veya uzaktan profesyonel son kullanıcı destek hizmetleri.", icon: Headphones },
        ]
    },
]

export default function RetailPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Hero
                    title="Akıllı Perakende & E-Ticaret Dönüşümü"
                    subtitle="E-ticaret ve perakende operasyonlarınızı B2B portallar, gelişmiş İK çözümleri ve 7/24 yönetilen hizmetler ile geleceğe taşıyoruz."
                    className="bg-slate-900"
                    backgroundImage="/images/headers/perakende-ve-telekom-cozumleri.jpg"
                />

                {/* Genel Bakış - Premium Split */}
                <Section className="pt-24 pb-20">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div {...fadeUp}>
                                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                                    <ShoppingCart className="w-4 h-4" /> E-Ticaret & Perakende
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                    Perakende Sektöründe Sürdürülebilirlik
                                </Heading>
                                <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Teknolojinin hızlı gelişmesi ile büyüyen e-ticaret sektöründe en önemli sorun, mevcut yapının
                                        (web sitesi veya mobil uygulamanın) güvenlik açığı oluşmadan sürdürülebilirliği ve değişen taleplere
                                        hızlı yazılım çözümleri çıkartma ihtiyacıdır.
                                    </p>
                                    <p>
                                        Ürün yelpazesini firma olarak arttırmak akabinde ciddi lojistik ve depolama sorunlarını da getirmektedir.
                                        Bundan dolayı birçok e-ticaret firması B2B çalışma mantığı ile müşterilerine ulaşmayı tercih etmektedir.
                                    </p>
                                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-100">
                                        <p className="font-semibold text-orange-800 text-base">
                                            BGTS olarak geliştirdiğimiz B2B destek portalları ile e-ticaret ortam sahibi firmaların
                                            eğitim ve gelişim maliyetlerinde ciddi bütçe tasarrufu yapmalarını sağlıyoruz.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl -z-10 opacity-60" />
                                    <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src="/images/industries/I53A6435.jpg"
                                            alt="Retail Strategic Overview"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                    </div>
                                    {/* Floating Stats */}
                                    <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
                                        {[
                                            { icon: Package, label: "B2B Portal" },
                                            { icon: Truck, label: "Lojistik" },
                                            { icon: Star, label: "HR/AI" },
                                        ].map((s, i) => (
                                            <div key={i} className="bg-white rounded-xl p-3 shadow-lg border border-slate-100 flex flex-col items-center text-center">
                                                <s.icon className="w-5 h-5 text-orange-600 mb-1" />
                                                <span className="text-xs font-bold text-slate-700">{s.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* Service Sections */}
                {serviceSections.map((section, sectionIdx) => {
                    const isAlt = sectionIdx % 2 !== 0
                    return (
                        <Section key={section.id} className={`relative overflow-hidden ${isAlt ? 'bg-slate-50' : 'bg-white'}`}>
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${section.color}`} />
                            <Container>
                                <div className="grid lg:grid-cols-12 gap-12">
                                    {/* Left: Sticky Header Card */}
                                    <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                        <div className={`bg-gradient-to-br ${section.color} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                            <div className="relative z-10">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                                                    <section.icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                                <p className="text-white/80 leading-relaxed text-sm">{section.description}</p>
                                                <div className="mt-6 pt-6 border-t border-white/20">
                                                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        <span>{section.items.length} Çözüm Alanı</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right: Cards Grid */}
                                    <div className="lg:col-span-8">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {section.items.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all group"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                                            <item.icon className="w-5 h-5 text-orange-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 group-hover:text-orange-700 transition-colors mb-1">{item.title}</h4>
                                                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Section>
                    )
                })}

                {/* CTA Section */}
                <Section className="bg-slate-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[200px] opacity-10 pointer-events-none" />
                    <Container className="relative z-10">
                        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                E-Ticaret Operasyonlarınız İçin<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Dijital Dönüşüm Ortağınız</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                                B2B portallardan HR/AI çözümlerine, DevOps altyapılarından 7/24 NOC hizmetlerine kadar perakende ekosisteminizi güçlendiriyoruz.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl"
                            >
                                Projelerinizi Konuşalım
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </Container>
                </Section>

            </div>
        </>
    )
}
