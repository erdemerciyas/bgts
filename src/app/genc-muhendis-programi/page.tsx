"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import {
    Code, BarChart3, Server, ArrowRight, CheckCircle2,
    Users, Award, Rocket, GraduationCap, BriefcaseBusiness,
    FileSearch, BookOpen, Layers, Terminal, Zap, Target,
    TrendingUp, ChevronRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ApplicationForm from "@/components/hr/ApplicationForm"
import { motion } from "framer-motion"
import {
    AnimatedDiv, FadeInRight,
    ScaleIn, StaggerContainer, StaggerItem
} from "@/components/ui/AnimatedElements"

export default function YoungEngineersPage() {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
            <section className="relative min-h-[90vh] flex items-center bg-[#060B18] overflow-hidden">
                {/* Cinematic image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
                        alt="Genç Mühendisler Ekibi"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060B18] via-[#060B18]/60 to-[#060B18]" />
                </div>

                {/* Animated gradient orbs */}
                <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-blob" />
                <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-4000" />

                {/* Grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

                <Container className="relative z-10 pt-28 pb-32">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="font-heading text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8"
                            >
                                Geleceği İnşa Eden<br />
                                <span className="relative inline-block mt-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                                        Mühendisler
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-400/60 via-cyan-300/40 to-transparent" />
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <p className="text-slate-400 max-w-xl mb-10 text-lg md:text-xl leading-relaxed font-medium">
                                    Gerçek projelerde aktif rol al, modern teknolojilerle üret,
                                    deneyimli mentorların rehberliğinde kariyerine{" "}
                                    <span className="text-white font-semibold">güçlü bir başlangıç</span> yap.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link href="#application-form">
                                    <Button size="xl" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-full px-10 h-14 text-base font-bold shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.03] transition-all group">
                                        Hemen Başvur
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
                                    </Button>
                                </Link>
                                <Link href="#tracks">
                                    <Button size="xl" variant="outline" className="bg-white/[0.04] text-white border-white/10 rounded-full px-10 h-14 text-base font-bold hover:bg-white/[0.08] hover:border-white/20 transition-all backdrop-blur-sm">
                                        Programları İncele
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right: Terminal-style card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block lg:col-span-5"
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-violet-500/20 rounded-2xl blur-xl" />
                                <div className="relative bg-[#0d1224] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="flex items-center gap-2 px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.06]">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                        </div>
                                        <span className="text-xs text-slate-500 font-mono ml-2">kariyer.bgts.com.tr</span>
                                    </div>
                                    <div className="p-6 font-mono text-sm space-y-4 min-h-[320px]">
                                        <div>
                                            <span className="text-emerald-400">$</span>{" "}
                                            <span className="text-slate-300">bgts init</span>{" "}
                                            <span className="text-blue-400">--program</span>{" "}
                                            <span className="text-cyan-300">genc-muhendis</span>
                                        </div>
                                        <div className="text-slate-500">
                                            <span className="text-yellow-400/80">&#9656;</span> Teknik müfredat yükleniyor...
                                        </div>
                                        <div className="text-slate-500">
                                            <span className="text-yellow-400/80">&#9656;</span> Mentor eşleştirmesi yapılıyor...
                                        </div>
                                        <div className="text-slate-500">
                                            <span className="text-yellow-400/80">&#9656;</span> Proje ortamı hazırlanıyor...
                                        </div>
                                        <div className="mt-2 p-4 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20">
                                            <div className="flex items-center gap-2 text-emerald-400 mb-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span className="font-semibold">Hazır!</span>
                                            </div>
                                            <div className="text-slate-400 text-xs leading-relaxed">
                                                3 program &middot; 12 hafta eğitim &middot; 1:1 mentorluk &middot; gerçek projeler
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400">$</span>
                                            <span className="text-slate-300">basvur</span>
                                            <span className="text-blue-400">--hemen</span>
                                            <span className="inline-block w-2.5 h-5 bg-blue-400/80 animate-pulse ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>

            </section>

            {/* ═══ FLOATING METRICS STRIP ═══ */}
            <div className="relative z-20 -mt-16">
                <Container>
                    <AnimatedDiv className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { val: "3", label: "Program", desc: "Yazılım, Test, Altyapı", icon: Layers, accent: "blue" },
                            { val: "12", label: "Hafta", desc: "Yapılandırılmış eğitim", icon: BookOpen, accent: "violet" },
                            { val: "1:1", label: "Mentorluk", desc: "Kıdemli rehberlik", icon: Users, accent: "cyan" },
                            { val: "100%", label: "Gerçek Proje", desc: "Canlı sistemler", icon: Rocket, accent: "emerald" },
                        ].map((s, i) => {
                            const accentMap: Record<string, { border: string, bg: string, text: string, glow: string }> = {
                                blue: { border: "border-blue-200 hover:border-blue-400", bg: "bg-blue-500", text: "text-blue-600", glow: "shadow-blue-500/10 hover:shadow-blue-500/20" },
                                violet: { border: "border-violet-200 hover:border-violet-400", bg: "bg-violet-500", text: "text-violet-600", glow: "shadow-violet-500/10 hover:shadow-violet-500/20" },
                                cyan: { border: "border-cyan-200 hover:border-cyan-400", bg: "bg-cyan-500", text: "text-cyan-600", glow: "shadow-cyan-500/10 hover:shadow-cyan-500/20" },
                                emerald: { border: "border-emerald-200 hover:border-emerald-400", bg: "bg-emerald-500", text: "text-emerald-600", glow: "shadow-emerald-500/10 hover:shadow-emerald-500/20" },
                            }
                            const a = accentMap[s.accent]
                            return (
                                <div
                                    key={i}
                                    className={`group relative bg-white rounded-2xl border ${a.border} p-5 lg:p-6 shadow-lg ${a.glow} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                                >
                                    <div className={`absolute top-0 left-0 right-0 h-1 ${a.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-9 h-9 rounded-lg ${a.bg} text-white flex items-center justify-center`}>
                                            <s.icon className="w-4.5 h-4.5" />
                                        </div>
                                        <span className={`text-3xl lg:text-4xl font-bold ${a.text} font-heading leading-none`}>
                                            {s.val}
                                        </span>
                                    </div>
                                    <div className="text-sm font-bold text-slate-800">{s.label}</div>
                                    <div className="text-xs text-slate-400 font-medium mt-0.5">{s.desc}</div>
                                </div>
                            )
                        })}
                    </AnimatedDiv>
                </Container>
            </div>

            {/* ═══════════════════════ 2. KÜLTÜR ═══════════════════════ */}
            <Section className="!pt-20 lg:!pt-28 !pb-12 lg:!pb-16">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <AnimatedDiv className="lg:col-span-5 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-br from-blue-100/80 to-cyan-100/60 rounded-[20px] -z-10" />
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[4/5]">
                                        <Image
                                            src="/images/culture/culture-1.jpg"
                                            alt="BGTS Genç Mühendisler Kültürü"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                                    {/* Floating glass quote */}
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5">
                                            <p className="text-white/90 font-medium text-sm leading-relaxed italic">
                                                &ldquo;Sadece kod yazmayı değil, birlikte üretmeyi ve sürekli gelişmeyi öğreniyorsun.&rdquo;
                                            </p>
                                            <div className="flex items-center gap-2 mt-3">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
                                                <span className="text-white/60 text-xs font-semibold">Genç Mühendis, 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDiv>

                        <FadeInRight className="lg:col-span-7 order-1 lg:order-2">
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-3xl md:!text-[2.5rem] !font-bold !leading-tight">
                                Uygulamalı Öğrenim,<br />Güçlü Mühendislik Kültürü
                            </Heading>
                            <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                <p>
                                    Genç Mühendis Programı&apos;nda{" "}
                                    <strong className="text-slate-800">gerçek uygulamalara</strong> dokunarak modern teknolojilerle üretme ve gelişme fırsatı bulursun. Deneyimli mentorların rehberliğinde{" "}
                                    <strong className="text-slate-800">sürekli gelişim</strong>{" "}
                                    odaklı bir ortamda çalışırsın.
                                </p>
                            </div>

                            {/* Feature mini-grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { icon: Target, title: "Gerçek Projeler", desc: "Canlı sistemlerde geliştirme" },
                                    { icon: Users, title: "1:1 Mentorluk", desc: "Kıdemli mühendis rehberliği" },
                                    { icon: Zap, title: "Tech Talks", desc: "Haftalık teknik sunumlar" },
                                    { icon: TrendingUp, title: "Kariyer Yolu", desc: "Tam zamanlı pozisyon fırsatı" },
                                ].map((f, i) => (
                                    <div key={i} className="group flex items-start gap-3 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                                            <f.icon className="w-4.5 h-4.5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">{f.title}</div>
                                            <div className="text-xs text-slate-400 font-medium mt-0.5">{f.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeInRight>
                    </div>
                </Container>
            </Section>

            {/* Culture photo strip */}
            <div className="pb-12 lg:pb-20">
                <Container>
                    <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                        {[
                            { img: "/images/culture/culture-1.jpg", title: "Hackathon", tag: "Yarışma" },
                            { img: "/images/culture/culture-2.jpg", title: "Mentorluk", tag: "Gelişim" },
                            { img: "/images/culture/culture-5.jpg", title: "Tech Talks", tag: "Öğrenme" },
                            { img: "/images/culture/culture-3.jpg", title: "Takım", tag: "Kültür" },
                        ].map((story, i) => (
                            <StaggerItem
                                key={i}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-default"
                            >
                                <Image
                                    src={story.img}
                                    alt={story.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <span className="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-bold uppercase tracking-wider mb-2">
                                        {story.tag}
                                    </span>
                                    <h3 className="text-white font-bold text-sm font-heading">{story.title}</h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Container>
            </div>

            {/* ═══════════════════════ 3. PROGRAM KARTLARI ═══════════════════════ */}
            <section id="tracks" className="relative py-24 lg:py-32 bg-[#060B18] overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

                <Container className="relative z-10">
                    <AnimatedDiv className="max-w-2xl mb-16">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Hangi yola<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                çıkmak istiyorsun?
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium max-w-lg">
                            Seçimini yap, geleceğini şekillendir. Tüm programlar modern süreçlere tam entegrasyonu hedefler.
                        </p>
                    </AnimatedDiv>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
                        {[
                            {
                                id: "track-software",
                                icon: Code,
                                title: "Yazılım Geliştirme",
                                desc: "Uçtan uca ürün geliştirme deneyimi ile modern yazılım mühendisliği yetkinlikleri kazan.",
                                items: [
                                    "Modern backend & frontend geliştirme",
                                    "API tasarımı ve veri yönetimi",
                                    "Test süreçleri ve kod kalitesi",
                                    "Agile & Scrum ile proje geliştirme",
                                ],
                                accent: "blue",
                                gradient: "from-blue-500 to-blue-600",
                            },
                            {
                                id: "track-test",
                                icon: BarChart3,
                                title: "Test & İş Analizi",
                                desc: "Projelerin kalitesini ve sürdürülebilirliğini sağlayan test ve analiz uzmanlığı kazan.",
                                items: [
                                    "Test süreçleri ve kalite güvencesi",
                                    "Manuel ve otomasyon testleri",
                                    "İş analizi ve gereksinim yönetimi",
                                    "Test senaryosu ve dokümantasyon",
                                ],
                                accent: "violet",
                                gradient: "from-violet-500 to-violet-600",
                            },
                            {
                                id: "track-infrastructure",
                                icon: Server,
                                title: "Altyapı Teknolojileri",
                                desc: "Ölçeklenebilir ve güvenilir sistem altyapıları tasarlama ve yönetme yetkinliği kazan.",
                                items: [
                                    "Linux ve sistem yönetimi",
                                    "CI/CD, DevOps ve otomasyon",
                                    "Cloud platformları (AWS, Azure, GCP)",
                                    "Monitoring, logging ve takip",
                                ],
                                accent: "emerald",
                                gradient: "from-emerald-500 to-emerald-600",
                            },
                        ].map((program, i) => {
                            const colorMap: Record<string, { check: string, iconBg: string, hoverBorder: string }> = {
                                blue: { check: "text-blue-400", iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20", hoverBorder: "hover:border-blue-500/30" },
                                violet: { check: "text-violet-400", iconBg: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20", hoverBorder: "hover:border-violet-500/30" },
                                emerald: { check: "text-emerald-400", iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20", hoverBorder: "hover:border-emerald-500/30" },
                            }
                            const c = colorMap[program.accent]
                            return (
                                <AnimatedDiv
                                    key={program.id}
                                    delay={i * 0.1}
                                    id={program.id}
                                    className={`group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] ${c.hoverBorder} p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                                >
                                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-6 transition-colors`}>
                                        <program.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                                        {program.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium mb-6 leading-relaxed">
                                        {program.desc}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {program.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300 font-medium">
                                                <CheckCircle2 className={`w-4 h-4 ${c.check} shrink-0 mt-0.5`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="#application-form"
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-white transition-colors group/link"
                                    >
                                        Başvur
                                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                                    </Link>
                                </AnimatedDiv>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════ 4. SÜREÇ / ROADMAP ═══════════════════════ */}
            <Section className="!py-24 lg:!py-32" background="muted">
                <Container>
                    <AnimatedDiv className="max-w-2xl mx-auto text-center mb-16">
                        <Heading variant="h2" className="mb-5 !text-3xl md:!text-4xl !font-bold">
                            Programa Katılım Adımları
                        </Heading>
                        <Text variant="large" className="text-slate-400">
                            Başvurudan projeye dahil olmaya kadar net ve şeffaf adımlarla ilerle.
                        </Text>
                    </AnimatedDiv>

                    <div className="max-w-4xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Başvuru",
                                desc: "Online başvuru formunu doldur, CV'ni yükle ve ilk adımını at.",
                                icon: FileSearch,
                                accent: "blue",
                            },
                            {
                                step: "02",
                                title: "Değerlendirme",
                                desc: "Teknik yetkinlik ve motivasyon değerlendirmesine katıl.",
                                icon: Users,
                                accent: "violet",
                            },
                            {
                                step: "03",
                                title: "Eğitim Dönemi",
                                desc: "12 haftalık yapılandırılmış eğitim programı ve birebir mentorluk.",
                                icon: GraduationCap,
                                accent: "cyan",
                            },
                            {
                                step: "04",
                                title: "Projeye Dahil",
                                desc: "Gerçek projelerde aktif mühendis olarak çalışmaya başla.",
                                icon: BriefcaseBusiness,
                                accent: "emerald",
                            },
                        ].map((item, i) => {
                            const colorMap: Record<string, { bg: string, text: string, line: string }> = {
                                blue: { bg: "bg-blue-500", text: "text-blue-600", line: "from-blue-500" },
                                violet: { bg: "bg-violet-500", text: "text-violet-600", line: "from-violet-500" },
                                cyan: { bg: "bg-cyan-500", text: "text-cyan-600", line: "from-cyan-500" },
                                emerald: { bg: "bg-emerald-500", text: "text-emerald-600", line: "from-emerald-500" },
                            }
                            const c = colorMap[item.accent]
                            return (
                                <ScaleIn key={i} delay={i * 0.08} className="relative flex items-start gap-6 lg:gap-8 group">
                                    {/* Vertical connector */}
                                    <div className="flex flex-col items-center shrink-0">
                                        <div className={`w-12 h-12 rounded-xl ${c.bg} text-white flex items-center justify-center shadow-lg relative z-10`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        {i < 3 && (
                                            <div className={`w-px h-16 bg-gradient-to-b ${c.line} to-transparent opacity-30`} />
                                        )}
                                    </div>

                                    <div className={`pb-10 ${i === 3 ? "pb-0" : ""}`}>
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <span className={`text-xs font-bold ${c.text} tracking-wide uppercase`}>
                                                Adım {item.step}
                                            </span>
                                        </div>
                                        <h4 className="font-heading text-lg font-bold text-slate-800 mb-1.5">{item.title}</h4>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">{item.desc}</p>
                                    </div>
                                </ScaleIn>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* ═══════════════════════ 5. BAŞVURU FORMU ═══════════════════════ */}
            <section id="application-form" className="relative bg-[#060B18] py-24 lg:py-32 overflow-hidden">
                {/* Orbs */}
                <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] bg-blue-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <AnimatedDiv className="space-y-8 lg:sticky lg:top-24">
                            <div>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                                    Kariyerine{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        Güçlü Başla
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-base leading-relaxed max-w-lg font-medium">
                                    Formu doldur, CV&apos;ni yükle ve Genç Mühendis Programı&apos;na ilk adımını at.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                <h4 className="font-bold text-sm text-white mb-4 flex items-center gap-2 font-heading uppercase tracking-wide">
                                    <Terminal className="w-4 h-4 text-blue-400" /> Başvuru İpuçları
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "CV'nin güncel olduğundan emin ol.",
                                        "Projelerinden ve deneyimlerinden bahset.",
                                        "Seni neyin heyecanlandırdığını kısaca yaz.",
                                    ].map((tip, i) => (
                                        <li key={i} className="flex gap-3 text-slate-400 text-sm font-medium">
                                            <span className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
                                                {i + 1}
                                            </span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-4 p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/10">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <p className="text-sm text-slate-400 font-medium">
                                    Başvurular sürekli değerlendirmeye alınır. En kısa sürede geri dönüş yapılır.
                                </p>
                            </div>
                        </AnimatedDiv>

                        <FadeInRight className="bg-white text-slate-900 p-2 rounded-2xl shadow-2xl shadow-black/20">
                            <ApplicationForm />
                        </FadeInRight>
                    </div>
                </Container>
            </section>
        </div>
    )
}
