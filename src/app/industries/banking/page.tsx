"use client"

import Hero from "@/components/ui/Hero"
import { Building2, ShieldCheck, TrendingUp, Users, Wallet, CreditCard, PieChart, Activity, Globe, ArrowRight, Server, Database, Smartphone, FileText, Briefcase, UserCheck, Layers, BadgeCheck, Zap, Lock, CheckCircle2, Target, BarChart3, Code, Landmark, Shield, Cpu, Banknote, ChevronRight, Search, Award, Settings, MonitorPlay, CheckSquare, Fingerprint } from "lucide-react"
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


const solutionAreas = [
    "Ana Bankacılık", "Dijital Bankacılık", "Ödeme Sistemleri", "Kartlı Sistemler",
    "Yapay Zeka (AI)", "Veri Analitik", "SRE & DevOps", "Sistem Altyapı",
    "Kurumsal Güvenlik", "Test Otomasyon", "Leasing & Faktoring & Filo", "Sigorta",
    "Bireysel & Ticari Krediler", "Portföy & Yatırım", "Kredi Risk", "Müşteri ve CRM",
    "Çağrı Merkezi Uygulamaları", "İnsan Kaynakları", "Kurumsal Çözümler", "Dijital Varlıklar",
    "Proje Yönetimi", "UI/UX Tasarım"
]

const coreBankingItems = [
    { title: "Teminat Yönetimi Projesi", icon: Shield, desc: "Kredilerin teminat süreçlerinin tam entegrasyonu ve izlenebilirliği." },
    { title: "Vadeli ve Kredili Mevduat", icon: Banknote, desc: "Bireysel ve kurumsal mevduat hesaplamalarının otomasyonu." },
    { title: "Bireysel ve Ticari Krediler", icon: Wallet, desc: "Tahsis kullandırım, ödeme planı ve sorunlu kredi yönetimi." },
    { title: "Nakit Yönetimi & Hazine", icon: PieChart, desc: "Borsa entegrasyonları, fon hareketleri ve portföy izleme." },
    { title: "Şube Kanal Yönetimi", icon: Building2, desc: "Şubeden para çekme/yatırma ve dijital talimat adaptasyonları." },
    { title: "Vergi ve Fatura Dönüşümü", icon: FileText, desc: "Devlet sistemleriyle entegre e-fatura, vergi ve doğrudan tahsilat." },
]

const paymentItems = [
    { title: "Kart Ürünleri ve Basım", icon: CreditCard, desc: "Kredi, banka ve ön ödemeli kartların yaşam döngüsü yönetimi." },
    { title: "POS Ürün Entegrasyonu", icon: Smartphone, desc: "Sanal ve fiziksel POS terminallerine yazılım desteği." },
    { title: "Issuing & Acquiring", icon: Zap, desc: "Ödeme sistemlerinde provizyon, takas ve mutabakat sistemleri." },
    { title: "Takasnet Modernizasyonu", icon: Server, desc: "Bankalar arası hızlı takas ve provizyon akış altyapıları." },
    { title: "E-Cüzdan & Onboarding", icon: Fingerprint, desc: "Hızlı Müşterilenme (KYC) ve sadakat sistemleri entegrasyonu." },
]

const caseStudies = [
    {
        title: "Kredi Ödeme Planı Servis Dönüşümü",
        desc: "Mainframe (MFDC) bağımlılıklarından arındırılarak açık sistem mimarisine (ARK) taşınan, modern ve ölçeklenebilir ödeme planı altyapısı.",
        icon: Server,
        tech: ["ARK", "GRPC", "DB2", "Microservices"]
    },
    {
        title: "Şubeden Para Çekme & Yatırma",
        desc: "Mikroservis mimarisiyle tasarlanan, Şube ve ATM kanalından para işlemlerini ve altın alımını tek ekranda toplayan kanal yönetimi.",
        icon: Code,
        tech: ["Java 17", "Spring Boot", "React", "OpenShift"]
    },
    {
        title: "Reasürans ARK Transformasyonu",
        desc: "19 Ekranın ve 13 tablonun Mainframe ortamından açık sistemlere dönüştürülmesi. Güçlü monitoring ve altyapı otomasyonu.",
        icon: Layers,
        tech: ["Java Fullstack", "ARK", "ODI", "Monitoring"]
    },
    {
        title: "E-Fatura Entegrasyon Projesi",
        desc: "E-faturaların iç sistemlere otomatik entegrasyonu ve uçtan uca izlenebilir onayı. EFA ekranları ile uyumlu yapı.",
        icon: FileText,
        tech: ["ARK", "EFA", "GRPC"]
    },
    {
        title: "CV Parsing & Kariyer Eklentisi",
        desc: "LinkedIn ve Kariyer.net özgeçmişlerinin NLP yöntemleriyle parse edilerek İK sistemine otomatik (Autofill) aktarılması projesi.",
        icon: UserCheck,
        tech: ["LinkedIn API", "CV Parsing", "Turnkey"]
    },
    {
        title: "Ofis Rezervasyon ve Planlama",
        desc: "Hibrit banka çalışanları için masa/ofis rezervasyonlarını yönetebilecekleri, güvenli ve kullanıcı dostu planlama web uygulaması.",
        icon: MonitorPlay,
        tech: ["Web App", "Turnkey", "UI/UX"]
    },
    {
        title: "Super Banker & Super Search",
        desc: "Müşteri (TCKN, VKN, MARS No) ve uygulama aramalarını tek bir platformda birleştiren, dinamik ve kişiselleştirilebilir bankacılık asistanı.",
        icon: Search,
        tech: ["GRPC", "Merkezi Arama", "Dashboard"]
    },
    {
        title: "KGF & IVR Projeleri",
        desc: "Kredi Garanti Fonu entegrasyonu ile teminat süreçlerinin otomatikleştirilmesi ve Çağrı Merkezi IVR akışlarının modernizasyonu.",
        icon: ShieldCheck,
        tech: ["IVR", "Kredi Garanti Fonu", "Test Otomasyon"]
    }
]

export default function BankingPage() {
    return (
        <>
            <div className="bg-white min-h-screen">

                <Hero
                    title="Bankacılık ve Sigorta Sektöründe Dijital Dönüşüm"
                    subtitle="İş ortaklarımızın dijital dönüşüm ajandalarını uçtan uca hayata geçiriyor, güvenilir ve ölçeklenebilir teknoloji çözümleri sunuyoruz."
                    className="bg-slate-900"
                    backgroundImage="/images/headers/proje-yapim-sekillerimiz.jpg"
                />




                {/* Genel Bakış - Premium Split */}
                <Section className="pt-24 lg:pt-32">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div {...fadeUp}>

                                <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                    Finans Sektöründe Güvenilir Teknoloji Ortağı
                                </Heading>
                                <div className="space-y-5 text-slate-600 text-[17px] leading-relaxed">
                                    <p>
                                        Türkiye'nin <strong className="text-blue-700 font-semibold">en büyük 10 bankasının 8'i</strong> ile güvene dayalı iş ortaklıkları yürütüyor, finans sektöründeki 10 yılı aşkın köklü tecrübemizle sektöre yön veriyoruz.
                                        Projelerde görev yapan <strong className="text-blue-700 font-semibold">550+ kişilik</strong> uzman finans ekibimizle, iş sürekliliği kritik olan sistemler için
                                        güvenilir, ölçeklenebilir ve sürdürülebilir teknoloji çözümleri sunuyoruz.
                                    </p>
                                    <p>
                                        İş ortaklarımızın stratejik hedeflerini merkeze alarak, Bilişim 500 araştırmasına göre finans ve bankacılık yazılımlarında <strong>5 yıldır peş peşe ilk 5'te</strong> yer almanın gururunu yaşıyoruz. Dijital dönüşüm yolculuğunda yalnızca bir tedarikçi değil, süreci sahiplenen uzun vadeli bir teknoloji iş ortağı olarak konumlanıyoruz.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl -z-10" />
                                    <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/industries/I53A6435.jpg"
                                            alt="Banking Overview"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                                <div className="text-center">
                                                    <div className="text-2xl font-black text-white">100+</div>
                                                    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Başarılı Proje</div>
                                                </div>
                                                <div className="text-center border-l border-white/20">
                                                    <div className="text-2xl font-black text-white">550+</div>
                                                    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Uzman Çalışan</div>
                                                </div>
                                                <div className="text-center border-l border-white/20">
                                                    <div className="text-2xl font-black text-white">8/10</div>
                                                    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Lider Banka</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>


                {/* Genişletilmiş Hizmet Modeli (3 Pillars) */}
                <Section className="bg-slate-50 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 rounded-l-[100px] pointer-events-none" />
                    <Container className="relative z-10">
                        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">Uçtan Uca Değer Yaratan Servisler</span>
                            <Heading variant="h2" className="mb-4 !text-4xl !font-bold text-slate-900">
                                360 Derece Teknoloji Çözüm Modeli
                            </Heading>
                            <Text className="text-slate-600 text-lg">
                                Kurumların eşsiz ihtiyaçlarına esnek iş modelleriyle (Turnkey, T&M, Hibrit) cevap veren kapsamlı hizmet portföyümüz.
                            </Text>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Pillar 1 */}
                            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform group">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform">
                                    <Code className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Yazılım Geliştirme</h3>
                                <p className="text-slate-500 mb-6 text-[15px] leading-relaxed">
                                    Dijital dönüşüm yolculuğunuzu hızlandırmak için çevik ve güvenilir web/mobil uygulamalar, platform geliştirmeleri ve iş analizi süreçleri.
                                </p>
                                <ul className="space-y-3">
                                    {["Web & Mobil Uygulamalar", "Platform & Ürün Geliştirme", "İş Analizi & UX Tasarım", "Yazılım Test Otomasyonları"].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Pillar 2 */}
                            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform group">
                                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-violet-200 group-hover:scale-110 transition-transform">
                                    <Server className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Teknoloji Servisleri</h3>
                                <p className="text-slate-500 mb-6 text-[15px] leading-relaxed">
                                    Kritik alanları kapsayan yönetilen hizmetlerimiz ile altyapınızı izliyor, yönetiyor ve iş sürekliliğinizi güvence altına alıyoruz.
                                </p>
                                <ul className="space-y-3">
                                    {["İşletim Sistemleri & Veritabanları", "DevOps & Middleware Gelişimi", "Bulut ve Sanallaştırma", "Altyapı İzleme ve Cihaz Yönetimi"].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Pillar 3 */}
                            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform group">
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-emerald-200 group-hover:scale-110 transition-transform">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Genç Mühendisler</h3>
                                <p className="text-slate-500 mb-6 text-[15px] leading-relaxed">
                                    Finans sektörünün ihtiyaç duyduğu yazılım ve altyapı yeteneklerini yetiştiriyor, kendi çalışanlarınıza yeni yetkinlikler kazandırıyoruz.
                                </p>
                                <ul className="space-y-3">
                                    {["Kampüs Etkileşimi & Seçim", "Eğitim ve Gelişim Kampları", "Sektör Odaklı Mentorluk", "Projelerde İstihdam"].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </Container>
                </Section>


                {/* Finans Ekosistemine Özelleştirilmiş Çözümler */}
                <Section>
                    <Container>
                        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">

                            <Heading variant="h2" className="mb-4 !text-4xl !font-bold">
                                Kapsamlı Bankacılık Uzmanlık Alanları
                            </Heading>
                            <Text className="text-slate-600 text-lg">
                                Bankacılık ve sigortaya temas eden tüm alanlarda uçtan uca proje geliştirme kabiliyetine sahibiz. Güçlü Domain tecrübemiz ile projeleri güvenle tamamlıyoruz.
                            </Text>
                        </motion.div>

                        <motion.div {...fadeUp} className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                            {solutionAreas.map((item, i) => (
                                <div key={i} className="group bg-white py-3 px-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-3 cursor-default">
                                    <div className="w-7 h-7 bg-blue-50/50 group-hover:bg-blue-100/50 rounded flex items-center justify-center shrink-0 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                                    </div>
                                    <span className="font-semibold text-slate-700 group-hover:text-slate-900 text-[13px] leading-snug transition-colors">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </Container>
                </Section>

                {/* Temel Bankacılık ve Ödeme Sistemleri - Combined Premium Sections */}
                <Section className="bg-slate-50 relative overflow-hidden py-24">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />

                    <Container>
                        {/* Core Banking */}
                        <div className="grid lg:grid-cols-12 gap-12 mb-20">
                            <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                            <Wallet className="w-8 h-8 text-white drop-shadow-md" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">Temel Bankacılık</h3>
                                        <p className="text-blue-100/90 leading-relaxed text-[15px]">
                                            Bankacılığın omurgasını oluşturan sistemlerde, teminattan krediye, nakit yönetiminden yasal takibe kadar kritik, yüksek işlemli, ve hatasız çözüm portföyü.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="lg:col-span-8">
                                <div className="grid md:grid-cols-2 gap-5">
                                    {coreBankingItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                                        >
                                            <div className="flex flex-col gap-4">
                                                <div className="w-12 h-12 bg-blue-50/50 border border-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                                                    <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{item.title}</h4>
                                                    <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-slate-200 my-20" />

                        {/* Payment Systems */}
                        <div className="grid lg:grid-cols-12 gap-12">
                            <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                <div className="bg-gradient-to-br from-violet-600 to-indigo-800 rounded-3xl p-8 text-white shadow-2xl shadow-violet-900/20 relative overflow-hidden">
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                            <CreditCard className="w-8 h-8 text-white drop-shadow-md" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">Ödeme Sistemleri</h3>
                                        <p className="text-violet-100/90 leading-relaxed text-[15px]">
                                            Kartlı ödemelerden dijital cüzdanlara, POS yönetiminden takas sistemlerine kadar güvenli ve regülasyonlara %100 uyumlu altyapılar.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="lg:col-span-8">
                                <div className="grid md:grid-cols-2 gap-5">
                                    {paymentItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-900/5 transition-all group"
                                        >
                                            <div className="flex flex-col gap-4">
                                                <div className="w-12 h-12 bg-violet-50/50 border border-violet-100 group-hover:bg-violet-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                                                    <item.icon className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{item.title}</h4>
                                                    <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Başarı Hikayeleri - Premium Wide Grid */}
                <Section className="bg-[#0B0F25] text-white relative overflow-hidden py-24">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
                    <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
                    <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

                    <Container className="relative z-10">
                        <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-20">
                            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Kanıtlanmış Deneyim</span>
                            <Heading variant="h2" className="mb-6 !text-4xl md:!text-5xl !font-black text-white leading-tight">
                                Karmaşık Finansal Projelerde Endüstri Beklentilerini Aşan Başarı Hikayeleri
                            </Heading>
                            <Text className="text-slate-400 text-lg md:text-xl">
                                Ana bankacılık sistemlerinden dijital modernizasyona kadar, sektör lideri kurumlar için gerçekleştirdiğimiz gerçek vaka analizleri.
                            </Text>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {caseStudies.map((caseStudy, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-slate-800/40 backdrop-blur-md border border-slate-700/60 rounded-3xl p-7 hover:bg-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,180,216,0.1)] transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500">
                                        <caseStudy.icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-cyan-100 transition-colors">{caseStudy.title}</h4>
                                    <p className="text-slate-400 text-[14px] leading-relaxed mb-8 flex-grow">
                                        {caseStudy.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-700/50 pt-5">
                                        {caseStudy.tech.map((t, idx) => (
                                            <span key={idx} className="text-[10px] uppercase tracking-wider font-bold bg-slate-900 border border-slate-700 text-cyan-300 px-3 py-1.5 rounded-full shadow-inner">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </Section>

            </div>
        </>
    )
}
