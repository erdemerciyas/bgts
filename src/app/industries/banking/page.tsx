"use client"

import Hero from "@/components/ui/Hero"
import { Building2, ShieldCheck, TrendingUp, Users, Wallet, CreditCard, PieChart, Activity, Globe, ArrowRight, Server, Database, Smartphone, FileText, Briefcase, UserCheck, Layers, BadgeCheck, Zap, Lock, CheckCircle2, Target, BarChart3, Code, Landmark, Shield, Cpu, Banknote, ChevronRight } from "lucide-react"
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
    "Temel Bankacılık Uygulamaları",
    "Ödeme Sistemleri ve Kartlı Çözümler",
    "Yatırım Bankacılığı",
    "Hazine",
    "Dijital Bankacılık Kanalları",
    "CRM, IVR Çözümleri",
    "Veri & Analitik, Risk ve Müşteri Analitiği",
    "Kurumsal Uygulamalar (Muhasebe, Tedarik Zinciri, İç Portaller)",
    "İnsan Kaynakları (İK) Sistemleri",
    "Altyapı Modernizasyonu ve Entegrasyon Projeleri"
]

const coreBankingItems = [
    { title: "Teminat Yönetimi Projesi", icon: Shield },
    { title: "Vadeli Mevduat", icon: Banknote },
    { title: "Bireysel, Kobi ve Ticari Krediler", icon: Wallet, desc: "İş birlikleri, tahsis kullandırım, ödeme planı, sorunlu kredi yönetimi, yasal takip." },
    { title: "Nakit Yönetimi Çözümleri Projesi", icon: PieChart },
    { title: "Hazine FX ve Türev Ürünler", icon: TrendingUp },
    { title: "Kredili Mevduat", icon: Banknote },
    { title: "Şube Kanal Yönetimi", icon: Building2, desc: "Dijital Talimat Proje, Para Çekme Yatırma Projesi." },
    { title: "Başvuru Sahteciliği Projesi", icon: ShieldCheck },
    { title: "Gayrinakdi Ürünler Projesi", icon: FileText },
    { title: "Vergi ve Fatura Modülleri", icon: FileText },
    { title: "E-Fatura, E-Haciz Entegrasyon Projeleri", icon: Layers },
]

const paymentItems = [
    { title: "Kart Ürünleri", icon: CreditCard, desc: "" },
    { title: "Kart İş Geliştirme, Basım", icon: Cpu, desc: "" },
    { title: "Pos Ürün Entegrasyonu", icon: Smartphone, desc: "" },
    { title: "Issuing", icon: Zap, desc: "" },
    { title: "Acquiring", icon: BarChart3, desc: "" },
    { title: "Takasnet", icon: Server, desc: "" },
    { title: "Müşteri Onboarding", icon: UserCheck, desc: "" },
    { title: "E-Cüzdan", icon: Wallet, desc: "" },
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
                <Section className="pt-24">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div {...fadeUp}>

                                <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                    Finans Sektöründe Güvenilir Teknoloji Ortağı
                                </Heading>
                                <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Bankacılık ve sigorta sektöründeki iş ortaklarımız ile, dijital dönüşüm ajandalarını uçtan uca hayata geçiriyoruz.
                                        Alanında uzman, finans tecrübesi yüksek teknik ekiplerimizle; iş sürekliliği kritik olan sistemler için
                                        güvenilir, ölçeklenebilir ve sürdürülebilir yazılım ve altyapı çözümleri sunuyoruz.
                                    </p>
                                    <p>
                                        İş ortaklarımızın stratejik hedeflerini ve önceliklerini merkeze alarak, ihtiyaçlarını analiz ediyor ve
                                        bu ihtiyaçlara en uygun metodoloji ve teslim modeliyle projeleri hayata geçiriyoruz.
                                        Dijital dönüşüm yolculuğunda yalnızca bir tedarikçi değil, süreci sahiplenen uzun vadeli bir teknoloji iş ortağı olarak konumlanıyoruz.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl -z-10" />
                                    <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/industries/I53A6435.jpg"
                                            alt="Banking Overview"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* Uçtan Uca Yetkinlik - Premium Corporate */}
                <Section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
                    {/* Subtle Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[200px] opacity-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-100 rounded-full blur-[150px] opacity-20 pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Headline & Key Metrics */}
                            <motion.div {...fadeUp} className="lg:sticky lg:top-32 lg:self-start">

                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    Bankacılık ve Sigorta Odaklı<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Derin Yetkinlik</span>
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                    1997 yılındaki kuruluşumuzdan bu yana istikrarlı bir şekilde büyüyen organizasyonumuz, bugün güçlü kadrosuyla finans ekosisteminin kritik iş alanlarında aktif rol almaktadır.
                                </p>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { value: "100+", label: "Proje" },
                                        { value: "27+", label: "Yıl Deneyim" },
                                        { value: "6+", label: "İş Ortağı" },
                                    ].map((m, i) => (
                                        <div key={i} className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <div className="text-2xl font-black text-slate-900">{m.value}</div>
                                            <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right: Content Cards */}
                            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="space-y-5">
                                {[
                                    {
                                        icon: Landmark,
                                        title: "Güçlü İş Birlikleri",
                                        desc: "Özel ve kamu bankaları, sigorta şirketleri ve ödeme sistemleri alanında faaliyet gösteren kurumlarla uzun yıllara dayanan sağlam iş birlikleri yürütmekteyiz.",
                                        color: "blue",
                                    },
                                    {
                                        icon: Layers,
                                        title: "Geniş Proje Portföyü",
                                        desc: "Gerçekleştirdiğimiz 100'ün üzerinde proje ile; temel bankacılık, dijital kanallar, ödeme sistemleri ile veri ve analitik çözümleri başta olmak üzere finans ekosisteminin kritik iş alanlarında aktif rol alıyoruz.",
                                        color: "violet",
                                    },
                                    {
                                        icon: Target,
                                        title: "Sektörel Hâkimiyet",
                                        desc: "Sektöre özgü iş süreçlerine olan derin hâkimiyetimiz sayesinde; mevcut sistemlerin modernizasyonundan sıfırdan proje ve ürün geliştirme süreçlerine kadar her aşamada hızlı, doğru ve sürdürülebilir çözümler sunuyoruz.",
                                        color: "emerald",
                                    },
                                ].map((card, i) => {
                                    const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
                                        blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "hover:border-blue-200" },
                                        violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "hover:border-violet-200" },
                                        emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "hover:border-emerald-200" },
                                    }
                                    const c = colorMap[card.color]
                                    return (
                                        <div key={i} className={`bg-white rounded-2xl p-7 border border-slate-100 ${c.border} shadow-sm hover:shadow-lg transition-all group`}>
                                            <div className="flex items-start gap-5">
                                                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                                                    <card.icon className={`w-6 h-6 ${c.icon}`} />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h4>
                                                    <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* Finans Ekosistemine Özelleştirilmiş Çözümler */}
                <Section>
                    <Container>
                        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">

                            <Heading variant="h2" className="mb-4 !text-4xl !font-bold">
                                Finans Ekosistemine Özelleştirilmiş Çözümler
                            </Heading>
                            <Text className="text-slate-600 text-lg">
                                Bankacılık ve sigortaya temas eden tüm alanlarda uçtan uca proje geliştirme kabiliyetine sahibiz.
                                Bu geniş yetkinliklerimiz ile kurumların hem bugünkü ihtiyaçlarına hem de gelecekteki dönüşüm hedeflerine değer katan çözümler sunuyoruz.
                            </Text>
                        </motion.div>

                        <motion.div {...fadeUp} className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                            {solutionAreas.map((item, i) => (
                                <div key={i} className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                        <BadgeCheck className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="font-semibold text-slate-800 text-sm leading-snug">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </Container>
                </Section>

                {/* Temel Bankacılık Uygulamaları - Premium Section */}
                <Section className="bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" />
                    <Container>
                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Left: Sticky Header */}
                            <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                                            <Wallet className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Temel Bankacılık Uygulamaları</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            Bankacılığın omurgasını oluşturan sistemlerde, teminattan krediye, nakit yönetiminden yasal takibe kadar uçtan uca çözümler.
                                        </p>

                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Project Cards Grid */}
                            <div className="lg:col-span-8">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {coreBankingItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                                    <item.icon className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                                                    {item.desc && <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Ödeme Sistemleri - Premium Section */}
                <Section className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-violet-600 to-blue-600" />
                    <Container>
                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Left: Sticky Header */}
                            <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-2xl p-8 text-white shadow-xl shadow-violet-200 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                                            <CreditCard className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Ödeme Sistemleri</h3>
                                        <p className="text-violet-100 leading-relaxed">
                                            Kartlı ödemelerden dijital cüzdanlara, POS yönetiminden takas sistemlerine kadar güvenli altyapılar.
                                        </p>

                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Project Cards Grid */}
                            <div className="lg:col-span-8">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {paymentItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="bg-white rounded-xl p-5 border border-slate-200 hover:border-violet-200 hover:shadow-md transition-all group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-violet-50 group-hover:bg-violet-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                                    <item.icon className="w-5 h-5 text-violet-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 group-hover:text-violet-700 transition-colors">{item.title}</h4>
                                                    {item.desc && <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>


            </div>
        </>
    )
}
