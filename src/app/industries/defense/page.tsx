"use client"

import Hero from "@/components/ui/Hero"
import { Shield, Lock, Radio, Crosshair, Server, FileCheck, CheckCircle2, ShieldCheck, FileText, Code, Settings, Database, Cloud, Network, Activity, LifeBuoy, Users, Layers, Cpu, ArrowRight, Target, Eye, Zap, BarChart3, HardDrive, Wrench } from "lucide-react"
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

const standards = [
    { code: "ISO 15288", title: "Sistem Yaşam Döngüsü" },
    { code: "ISO 12207", title: "Yazılım Yaşam Döngüsü" },
    { code: "ISO 42020", title: "Mimari Değerlendirme" },
    { code: "ISO 20000", title: "BT Hizmet Yönetimi" },
    { code: "ISO 27001", title: "Bilgi Güvenliği" },
    { code: "ISO 29119", title: "Test Standartları" },
]

const serviceSections = [
    {
        id: "is-analizi",
        title: "İş Analizi Hizmetleri",
        description: "Savunma projelerinde gereksinimlerin doğru anlaşılması, operasyonel modellemelerin gerçekleştirilmesi ve izlenebilirliğin sağlanması amacıyla kapsamlı iş analizi hizmetleri sunuyoruz.",
        icon: FileText,
        color: "from-blue-600 to-blue-800",
        accentColor: "blue",
        items: [
            { title: "Misyon Bazlı İhtiyaç Analizi", desc: "IIBA uyumlu metodolojilerle paydaş gereksinimlerini topluyor, iş hedeflerini belgeliyor ve operasyonel senaryolarla doğruluyoruz.", icon: Target },
            { title: "Operasyonel Senaryo ve Süreç Modelleme", desc: "BPMN, UML, SysML ve ArchiMate kullanarak iş süreçlerini, sistem davranışlarını ve kurumsal mimariyi modelliyoruz.", icon: Layers },
            { title: "İşletim Kavramı (ConOps) Üretimi", desc: "Sistemin operasyonel kullanımını ve görev senaryolarını tanımlayan, tüm paydaşlar için ortak anlayış sağlayan ConOps dokümanları hazırlıyoruz.", icon: FileCheck },
            { title: "Kavramsal Tasarım ve Fizibilite", desc: "15288 ve 12207 standartlarıyla entegre, teknik ve maliyet odaklı fizibilite ve kavramsal tasarım çalışmaları.", icon: Eye },
            { title: "Gereksinim Çıkartımı ve Dokümantasyon", desc: "Paydaş, Sistem ve Alt Sistem gereksinimlerini izlenebilir (RTM) ve test edilebilir şekilde dokümante ediyoruz.", icon: FileText },
        ]
    },
    {
        id: "yazilim",
        title: "Yazılım Geliştirme Hizmetleri",
        description: "Modern yazılım yaşam döngüsü ve doğrulama süreçlerine uygun, 12207 standardında C++, Java, C# dilleriyle bütüncül mühendislik desteği.",
        icon: Code,
        color: "from-slate-700 to-slate-900",
        accentColor: "slate",
        items: [
            { title: "Yazılım Mimari Tasarımı", desc: "42010 ve 42020 uyumlu; gerçek zamanlı, modüler ve güvenli mimari tasarımlar. UML/SysML modelleme.", icon: Layers },
            { title: "Bilgi Sistem Yazılımları", desc: "Operasyonel yönetim, kayıt sistemleri, büyük veri ve loglama ihtiyaçlarına yönelik kurumsal çözümler.", icon: Database },
            { title: "Komuta Kontrol Yazılımları", desc: "Gerçek zamanlı veri işleme, sensör füzyonu, taktik veri linkleri ve simülasyon/davranış motoru geliştirme.", icon: Radio },
            { title: "Gömülü Sistem Yazılımları", desc: "RTOS, FPGA ve mikrodenetleyiciler için sürücü ve görev yazılımları. Askeri standartlara uygun doğrulama.", icon: Cpu },
            { title: "Güvenli Kodlama ve Askeri Standartlar", desc: "Secure Coding, OWASP ve askeri politikalara uygun, statik analiz ve zafiyet taramalarıyla güçlendirilmiş kodlama.", icon: Lock },
            { title: "Yazılım Geliştirme Modeli", desc: "İhtiyaca göre Agile/Scrum (Esnek) veya Şelale/V-Model (Doğrulama Odaklı) proje yönetim yaklaşımları.", icon: Settings },
        ]
    },
    {
        id: "test",
        title: "Test ve Doğrulama Hizmetleri",
        description: "Sistem ve yazılımların gereksinimlere uygunluğunu 29119 ve 829 standartları çerçevesinde garanti altına alıyoruz.",
        icon: CheckCircle2,
        color: "from-emerald-600 to-emerald-800",
        accentColor: "emerald",
        items: [
            { title: "İşlev ve Sistem Testleri", desc: "Bileşen, entegrasyon ve sistem seviyesinde işlevsellik doğrulama testleri.", icon: CheckCircle2 },
            { title: "Otomasyon Testleri", desc: "Tekrarlanabilirliği ve hızı artıran, sürekli entegrasyona dahil otomatik test senaryoları.", icon: Zap },
            { title: "Performans, Güvenlik ve Dayanıklılık", desc: "Yük, stres, dayanıklılık ve güvenlik testleri ile kritik görev koşullarında kararlılık garantisi.", icon: BarChart3 },
            { title: "Kabul Test Planlaması", desc: "Kullanıcı ihtiyaçlarına ve operasyonel senaryolara dayalı kapsamlı kabul test planları.", icon: FileCheck },
            { title: "Dokümantasyon ve Raporlama", desc: "İzlenebilir, doğrulanabilir ve karar destek süreçlerini besleyen detaylı test raporlaması.", icon: FileText },
        ]
    },
    {
        id: "devops",
        title: "DevOps Hizmetleri",
        description: "Geliştirme ve operasyon süreçlerini entegre ederek hızlı, güvenilir ve izlenebilir yazılım teslimatı sağlıyoruz.",
        icon: Settings,
        color: "from-violet-600 to-violet-800",
        accentColor: "violet",
        items: [
            { title: "Geliştirme Araçları", desc: "Git, Jira, Azure DevOps ile kaynak kod yönetimi, iş takibi ve ekip koordinasyonu.", icon: Code },
            { title: "Sürekli İnşa (CI) ve Dağıtım (CD)", desc: "Jenkins, Azure DevOps pipeline'ları ile otomatik derleme, test ve dağıtım süreçleri.", icon: Zap },
            { title: "Otomatik Test Entegrasyonu", desc: "CI/CD hattına entegre birim ve statik analiz testleri ile erken hata tespiti.", icon: CheckCircle2 },
            { title: "Sürüm ve Dağıtım Yönetimi", desc: "Güvenli sürüm kontrolü, otomatik dağıtım politikaları ve rollback mekanizmaları.", icon: Layers },
            { title: "Konteyner ve Kubernetes", desc: "Docker ve Kubernetes ile ölçeklenebilir, taşınabilir mikrosistem mimarileri.", icon: Cloud },
        ]
    },
    {
        id: "altyapi",
        title: "BT Altyapı Hizmetleri",
        description: "Güvenli, ölçeklenebilir ve yönetilebilir altyapı çözümleriyle operasyonel sürekliliği sağlıyoruz.",
        icon: Server,
        color: "from-blue-700 to-indigo-900",
        accentColor: "indigo",
        items: [
            { title: "Altyapı Tasarımı ve Yönetimi", desc: "Tüm yaşam döngüsünü kapsayan, yüksek kullanılabilirlikli sistem tasarımı ve yönetimi.", icon: Wrench },
            { title: "Ağ ve İletişim Altyapısı", desc: "Yüksek güvenlikli LAN/WAN tasarımları, firewall ve güvenli iletişim protokolleri.", icon: Network },
            { title: "Sunucu ve Depolama Sistemleri", desc: "Fiziksel/Sanal sunucu kümeleri ve güvenli, ölçeklenebilir depolama mimarileri.", icon: HardDrive },
            { title: "Yedekleme ve Felaket Kurtarma", desc: "İş sürekliliği için replikasyon, otomatik yedekleme ve felaket kurtarma planları.", icon: Database },
            { title: "Veri Merkezi Tasarımı", desc: "Enerji verimliliği ve fiziksel güvenlik odaklı veri merkezi mimari danışmanlığı.", icon: Server },
        ]
    },
    {
        id: "yonetilen-bt",
        title: "Yönetilen BT Hizmetleri",
        description: "20000 ve 27001 standartlarında, 7/24 izlenen ve yönetilen güvenli operasyonel hizmetler.",
        icon: Activity,
        color: "from-amber-600 to-orange-800",
        accentColor: "amber",
        items: [
            { title: "Operasyonel Yük Yönetimi", desc: "Sunucu ve ağ altyapısının günlük bakım, yönetim ve optimizasyonu (Ansible, Puppet).", icon: Settings },
            { title: "İzleme (Monitoring)", desc: "7/24 Nagios, Zabbix gibi araçlarla proaktif sistem ve servis izleme.", icon: Eye },
            { title: "Performans ve Kapasite", desc: "Sürekli performans analizi, raporlama ve geleceğe yönelik kapasite planlaması.", icon: BarChart3 },
            { title: "Güvenlik Yönetimi", desc: "Firewall, IDS/IPS yönetimi, log analizi ve proaktif tehdit tespiti.", icon: Shield },
            { title: "Yardım Masası", desc: "Kullanıcı talepleri için SLA tabanlı 1. ve 2. seviye teknik destek.", icon: LifeBuoy },
            { title: "Olay ve Değişiklik Yönetimi", desc: "ITIL uyumlu incident ve change management süreçleri.", icon: Activity },
        ]
    },
]

export default function DefensePage() {
    return (
        <>
            <div className="bg-white min-h-screen">

                <Hero
                    title="Milli Savunma İçin Kritik ve Güvenilir Teknolojiler"
                    subtitle="TSK ve savunma sanayi ekosistemi için 15288, 12207 ve 42020 standartlarına uygun, güvenli ve yüksek performanslı yazılım ve altyapı çözümleri."
                    className="bg-slate-900"
                    backgroundImage="/images/headers/savunma-sanayi-teknolojileri.jpg"
                />



                {/* Genel Bakış - Premium Split */}
                <Section className="pt-24">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div {...fadeUp}>

                                <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                    Savunma Sanayi Odaklı Yaklaşım
                                </Heading>
                                <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Savunma sanayi projelerinde öncelikli hedefimiz, <strong className="text-blue-700">güvenilir, yüksek performanslı ve güvenli</strong> yazılım çözümleri sunmaktır.
                                        Kritik görev yazılımlarının sahada doğru, hızlı ve hatasız çalışmasını sağlamak için gömülü yazılımlardan web ve bulut tabanlı sistemlere kadar tüm geliştirme süreçlerini bütüncül şekilde yönetiyoruz.
                                    </p>
                                    <p>
                                        Yazılım geliştirme ve tasarım faaliyetlerinde <strong className="text-slate-900">15288, 12207 ve 42020</strong> standartlarına uygun süreçleri işletiyoruz.
                                        Gereksinim analizinden mimari tasarım, geliştirme ve doğrulama süreçlerine kadar her adımda izlenebilirlik sağlıyoruz.
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-8">
                                    <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                        <ShieldCheck className="w-4 h-4 text-blue-400" />
                                        20000 BT Hizmet Yönetimi
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                        <Lock className="w-4 h-4 text-blue-400" />
                                        27001 Bilgi Güvenliği
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl -z-10 opacity-60" />
                                    <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src="/images/industries/defense/gorev-kritik-sistemler-aviyonik.png"
                                            alt="Defense Technology"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
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

                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right: Project Cards Grid */}
                                    <div className="lg:col-span-8">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {section.items.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 bg-slate-100 group-hover:bg-slate-200 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                                            <item.icon className="w-5 h-5 text-slate-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">{item.title}</h4>
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



            </div>
        </>
    )
}
