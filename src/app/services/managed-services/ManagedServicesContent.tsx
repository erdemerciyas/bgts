"use client"

import { useState } from "react"
import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import {
    Server, Activity, ShieldCheck, Clock, CheckCircle2,
    Cloud, Database, Globe, Rocket, Terminal,
    BarChart3, Users, Zap, Search, Layout, Lock,
    Bot, Smartphone, Video, FileText, UserCheck,
    GraduationCap, LayoutDashboard, Layers, AppWindow,
    Anchor, Map, Star
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

export default function ManagedServicesContent() {
    const [activeTab, setActiveTab] = useState('phase1')
    const [activeSection, setActiveSection] = useState('')
    const [isManualScroll, setIsManualScroll] = useState(false)

    // Scroll Spy Effect
    useEffect(() => {
        const handleScroll = () => {
            if (isManualScroll) return;

            const sections = [
                'expertise',
                'cloud-platforms',
                'microsoft365',
                'iceberg',
                'roadmap',
                'value-add'
            ];

            // Offset for header height (approx 100px) + Extra buffer for sticky nav
            const scrollPosition = window.scrollY + 180;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isManualScroll]);

    return (
        <div className="bg-white min-h-screen font-sans">

            {/* Sticky Sub-Navigation */}
            <div className="sticky top-[80px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
                <Container>
                    <nav className="flex items-center justify-between overflow-x-auto no-scrollbar">
                        <ul className="flex items-center gap-2 py-3 min-w-max">
                            {[
                                { label: "Hizmetler", href: "#expertise", icon: Layers },
                                { label: "Platformlar", href: "#cloud-platforms", icon: Cloud },
                                { label: "Microsoft 365", href: "#microsoft365", icon: AppWindow },
                                { label: "Değer Yaklaşımı", href: "#iceberg", icon: Anchor },
                                { label: "Bulut Yolculuğu", href: "#roadmap", icon: Map },
                                { label: "Faydalar", href: "#value-add", icon: Star },
                            ].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.querySelector(item.href);
                                            if (element) {
                                                setIsManualScroll(true);
                                                setActiveSection(item.href);

                                                const offset = 160;
                                                const elementPosition = element.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.scrollY - offset;

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: "smooth"
                                                });

                                                // Reset manual scroll after animation approx time
                                                setTimeout(() => setIsManualScroll(false), 1000);
                                            }
                                        }}
                                        className={cn(
                                            "flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 border",
                                            activeSection === item.href
                                                ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105"
                                                : "bg-transparent text-slate-600 border-transparent hover:bg-slate-100 hover:text-slate-900"
                                        )}
                                    >
                                        <item.icon className={cn("w-4 h-4", activeSection === item.href ? "text-white" : "text-slate-400 group-hover:text-slate-600")} />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="pl-4 border-l border-slate-200 hidden md:block">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-lg hover:shadow-slate-900/20"
                            >
                                Teklif Al
                            </a>
                        </div>
                    </nav>
                </Container>
            </div>

            {/* Hero Section */}
            <Hero
                title="Çoklu Bulut (Multi-Cloud) Yönetim ve Danışmanlık"
                subtitle="Azure, AWS ve Google Cloud ortamlarınız için uçtan uca strateji, migrasyon ve 7/24 proaktif yönetim hizmetleri."
                badge="Cloud Consultancy"
                className="bg-slate-900"
                backgroundImage="/images/headers/yonetilen-bulut-hizmetleri.png"
            />

            {/* Tech Marquee */}
            <div className="bg-slate-950 py-6 border-b border-slate-800 overflow-hidden relative z-20">
                <div className="flex relative">
                    <motion.div
                        className="flex gap-16 items-center whitespace-nowrap px-8"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-400 font-medium text-sm hover:text-blue-400 transition-colors cursor-default">
                                <tech.icon className="w-5 h-5" />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>



            {/* Expertise Grid - Bulut Çözümlerimiz */}
            <Section id="expertise" className="py-20 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Bulut Çözümlerimiz</Heading>
                        <Text variant="large" className="text-slate-600">Dijital dönüşümünüzü hızlandıran kapsamlı hizmet portföyü.</Text>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Search, title: "Stratejik Danışmanlık", desc: "Bulut Adaptasyon Çerçevesi (CAF) ile yol haritası belirleme." },
                            { icon: Rocket, title: "Migrasyon & Modernizasyon", desc: "Lift & Shift, Re-platforming ile güvenli bulut taşıma." },
                            { icon: Clock, title: "7/24 Yönetilen Hizmetler", desc: "SLA garantili izleme, incident management ve optimizasyon." },
                            { icon: BarChart3, title: "FinOps & Maliyet", desc: "Maliyet optimizasyonu ve gereksiz kaynak temizliği." },
                            { icon: ShieldCheck, title: "Güvenlik & Uyumluluk", desc: "CSPM, KVKK/GDPR uyumluluğu ve güvenlik sıkılaştırma." },
                            { icon: Activity, title: "DevOps & Otomasyon", desc: "CI/CD pipeline, IaC ve Kubernetes orkestrasyonu." },
                            { icon: Database, title: "Backup & DR", desc: "Veri kaybını önleyen yedekleme ve felaket kurtarma." },
                            { icon: CheckCircle2, title: "Well-Architected Review", desc: "Mimari performans, güvenlik ve maliyet denetimi." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl border border-slate-100 bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Cloud Platforms */}
            <Section id="cloud-platforms" className="py-20 bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Global Bulut Yetkinliklerimiz</Heading>
                        <Text variant="large" className="text-slate-600">Dünyanın lider bulut sağlayıcıları ile derinlemesine uzmanlık.</Text>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Azure */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-blue-600 mb-6 font-bold text-2xl flex items-center gap-3">
                                <Cloud className="w-8 h-8" /> Microsoft Azure
                            </div>
                            <p className="text-slate-600 mb-6">Microsoft Gold Partner yetkinliği ile Azure ortamlarınız için uçtan uca çözümler.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Azure Arc: Hibrit yönetim</li>
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Azure DevOps: CI/CD</li>
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> AVD: Virtual Desktop</li>
                            </ul>
                        </div>

                        {/* AWS */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-amber-500 mb-6 font-bold text-2xl flex items-center gap-3">
                                <Cloud className="w-8 h-8" /> AWS
                            </div>
                            <p className="text-slate-600 mb-6">AWS sertifikalı uzman kadromuz ile esnek ve ölçeklenebilir altyapılar.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Organizations: Hesap yönetimi</li>
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-amber-500" /> EKS & Lambda: Modernizasyon</li>
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-amber-500" /> RDS & Aurora: Database</li>
                            </ul>
                        </div>

                        {/* Google Cloud */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-red-500 mb-6 font-bold text-2xl flex items-center gap-3">
                                <Cloud className="w-8 h-8" /> Google Cloud
                            </div>
                            <p className="text-slate-600 mb-6">Veri analitiği ve yapay zeka odaklı Google Cloud projeleriniz için destek.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-red-500" /> BigQuery: Veri ambarı</li>
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-red-500" /> GKE: Kubernetes</li>
                                <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-red-500" /> Anthos: Multi-cloud</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Microsoft 365 Section */}
            <Section id="microsoft365" className="py-20 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Microsoft 365 & Modern Work</Heading>
                        <Text variant="large" className="text-slate-600">Yapay zeka destekli işbirliği ve uçtan uca cihaz yönetimi.</Text>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Copilot */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Bot className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">M365 Copilot</h4>
                            <p className="text-slate-600 mb-4">İş süreçlerinize üretken yapay zekayı entegre edin.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Lisanslama Analizi</li>
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> User Adoption</li>
                            </ul>
                        </div>

                        {/* Intune */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Smartphone className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">Intune (Endpoint)</h4>
                            <p className="text-slate-600 mb-4">Mobil ve masaüstü cihazlarınızı buluttan yönetin.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600" /> MDM & MAM</li>
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Autopilot Kurulum</li>
                            </ul>
                        </div>

                        {/* Teams */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Video className="w-8 h-8 text-purple-600" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">Teams & Viva</h4>
                            <p className="text-slate-600 mb-4">Hibrit çalışma için kesintisiz iletişim platformu.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Phone System</li>
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Meeting Rooms</li>
                            </ul>
                        </div>

                        {/* Security */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Lock className="w-8 h-8 text-slate-700" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">Security & Identity</h4>
                            <p className="text-slate-600 mb-4">Kimlik tabanlı güvenlik ve tehdit koruması.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-slate-700" /> Defender XDR</li>
                                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-slate-700" /> Entra ID (Azure AD)</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Iceberg Section */}
            <Section id="iceberg" className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-sm mb-6 border border-blue-500/30">
                                YÖNETİLEN HİZMET DEĞERİ
                            </div>
                            <Heading variant="h2" className="mb-6 text-white">Yüzeyin Altındaki <br />Gerçek Güç</Heading>
                            <Text variant="large" className="text-slate-300 mb-10">
                                Bulut yönetimi sadece sunucuları açık tutmak değildir. Biz, görünmeyen riskleri yönetir ve fırsatları açığa çıkarırız.
                            </Text>

                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-2 text-blue-300 font-bold">
                                        <Activity className="w-5 h-5" /> GÖRÜNEN HİZMET
                                    </div>
                                    <p className="text-slate-300">7/24 İzleme, Hata Giderme, Raporlama</p>
                                </div>
                                <div className="p-6 rounded-xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-4 text-white font-bold">
                                        <Database className="w-5 h-5" /> DERİN UZMANLIK
                                    </div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {["Mimari Optimizasyon", "Proaktif Güvenlik", "Maliyet Mühendisliği", "Compliance (ISO 27001)"].map((x, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-blue-400" /> {x}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-full bg-gradient-to-b from-blue-400/20 to-transparent absolute -top-20 -right-20 blur-3xl"></div>
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-6 font-mono text-sm">
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                                        <span className="text-slate-400">Total Savings</span>
                                        <span className="text-green-400 font-bold">+$12,450 / mo</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                                        <span className="text-slate-400">Security Score</span>
                                        <span className="text-blue-400 font-bold">98/100</span>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-2">
                                            <span className="text-slate-500">Resource Optimization</span>
                                            <span className="text-slate-300">94%</span>
                                        </div>
                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[94%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Roadmap Section */}
            <Section id="roadmap" className="py-20 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Bulut Dönüşüm Yol Haritası</Heading>
                        <Text variant="large" className="text-slate-600">İhtiyaç analizinden sürekli optimizasyona uzanan yapılandırılmış süreç.</Text>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 border-b border-slate-200">
                        {[
                            { id: 'phase1', label: 'FAZ-I: Keşif & Planlama' },
                            { id: 'phase2', label: 'FAZ-II: Geçiş & Modernizasyon' },
                            { id: 'phase3', label: 'FAZ-III: Yönetim & Optimizasyon' },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-6 py-4 font-bold text-sm md:text-base border-b-2 transition-all duration-300",
                                    activeTab === tab.id
                                        ? "border-blue-600 text-blue-600"
                                        : "border-transparent text-slate-500 hover:text-slate-800"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[300px]">
                        {activeTab === 'phase1' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-8">
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <Search className="w-8 h-8 text-blue-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">Analiz</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Mevcut Altyapı Envanteri</li>
                                        <li>• Uygulama Bağımlılık Analizi</li>
                                        <li>• Performans Gereksinimleri</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <Layout className="w-8 h-8 text-indigo-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">Strateji</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Cloud Adoption Framework</li>
                                        <li>• Göç Yöntemi Seçimi (6R)</li>
                                        <li>• TCO (Maliyet) Analizi</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <Terminal className="w-8 h-8 text-cyan-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">Tasarım</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Landing Zone Tasarımı</li>
                                        <li>• Ağ & Güvenlik Mimarisi</li>
                                        <li>• Proof of Concept (PoC)</li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                        {activeTab === 'phase2' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-8">
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <TruckIcon className="w-8 h-8 text-blue-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">Migrasyon</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Veri Tabanı Taşıma</li>
                                        <li>• Sunucu Replikasyonu</li>
                                        <li>• Uygulama Dağıtımı</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">Test & Doğrulama</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Yük ve Performans Testleri</li>
                                        <li>• Güvenlik Taramaları</li>
                                        <li>• Kullanıcı Kabul Testleri</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <Rocket className="w-8 h-8 text-cyan-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">Go-Live</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Kesinti (Cutover) Planı</li>
                                        <li>• Canlıya Geçiş</li>
                                        <li>• Hypercare Desteği</li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                        {activeTab === 'phase3' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-8">
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <Activity className="w-8 h-8 text-blue-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">İzleme</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• 7/24 Proaktif Monitoring</li>
                                        <li>• Log Yönetimi</li>
                                        <li>• Anomali Tespiti</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">FinOps</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Maliyet Raporlama</li>
                                        <li>• Kaynak Boyutlandırma</li>
                                        <li>• Atıl Kaynak Temizliği</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <Zap className="w-8 h-8 text-cyan-600 mb-4" />
                                    <h4 className="font-bold text-lg mb-4">İnovasyon</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• Serverless Dönüşüm</li>
                                        <li>• Containerizasyon (K8s)</li>
                                        <li>• DevOps Olgunlaştırma</li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </Container>
            </Section>

            {/* Value Added Services */}
            <Section id="value-add" className="py-20 bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Sizi Öne Geçiren Avantajlar</Heading>
                        <Text variant="large" className="text-slate-600">Standart bulut hizmetlerinin ötesinde sunduğumuz ek değerler.</Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Şeffaf Faturalama", desc: "Karmaşık bulut faturalarını sizin için basitleştiriyor, departman bazlı maliyet takibi sağlıyoruz.", icon: FileText },
                            { title: "Dedike Danışman (TAM)", desc: "Teknik Hesap Yöneticiniz ile düzenli toplantılar ve stratejik yönlendirmeler.", icon: UserCheck },
                            { title: "Eğitim & Workshop", desc: "Ekibiniz için bulut teknolojileri eğitimleri ve uygulamalı workshoplar.", icon: GraduationCap },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-white">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Customer Success / Dashboard */}
            <Section id="csm" className="py-20 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl h-[350px] flex items-center justify-center relative overflow-hidden group">
                                <div className="text-center">
                                    <LayoutDashboard className="w-16 h-16 text-slate-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-slate-500 font-bold text-lg">Cloud Governance Dashboard</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/50 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Heading variant="h2" className="mb-6 text-slate-900">Bulut Yönetim Paneli</Heading>
                            <Text variant="large" className="text-slate-600 mb-8">
                                Tüm bulut envanteriniz ve maliyetleriniz tek bir ekranda.
                            </Text>
                            <ul className="space-y-4">
                                {[
                                    { text: "Multi-Cloud Görünürlük (Azure, AWS, GCP)", title: "Tek Panel" },
                                    { text: "Risk durumunuzu anlık takip edin", title: "Güvenlik Skoru" },
                                    { text: "Sürpriz faturalara son verin", title: "Bütçe Alarmları" },
                                    { text: "Denetimlere her zaman hazır olun", title: "Compliance Raporları" },
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <strong className="block text-slate-900">{item.title}</strong>
                                            <span className="text-slate-600 text-sm">{item.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA / Contact Section */}
            <Section id="contact" className="py-20 bg-blue-900 text-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Heading variant="h2" className="mb-6 text-white">Bulut Potansiyelinizi Açığa Çıkarın</Heading>
                            <Text variant="large" className="text-blue-100 mb-8">
                                Uzmanlarımızla görüşün, size en uygun bulut stratejisini birlikte belirleyelim.
                            </Text>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-300" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Dedike Danışman</div>
                                        <div className="text-blue-200 text-sm">Size özel teknik hesap yöneticisi.</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
                                        <Lock className="w-6 h-6 text-blue-300" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Güvenli Geçiş Garantisi</div>
                                        <div className="text-blue-200 text-sm">Sıfır veri kaybı ile migration.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Adınız Soyadınız" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800" />
                                    <input type="email" placeholder="Kurumsal E-posta" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800" />
                                </div>
                                <input type="text" placeholder="Şirket Adı" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800" />
                                <textarea placeholder="Projeniz hakkında kısa bilgi..." rows={4} className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800"></textarea>
                                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                                    Ücretsiz Analiz Başlat
                                </button>
                            </form>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}

function TruckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
        </svg>
    )
}

const TECH_STACK = [
    { name: "Azure", icon: Cloud },
    { name: "AWS", icon: Cloud },
    { name: "Google Cloud", icon: Cloud },
    { name: "Kubernetes", icon: CheckCircle2 },
    { name: "Docker", icon: Server },
    { name: "Terraform", icon: Terminal },
    { name: "Ansible", icon: Terminal },
    { name: "Prometheus", icon: Activity },
    { name: "Grafana", icon: BarChart3 },
    { name: "CloudFlare", icon: ShieldCheck },
]
