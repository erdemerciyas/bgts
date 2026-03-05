"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import {
    Code, BarChart3, Server, Globe, Rocket, Zap,
    Sparkles, MessageCircle, Heart, Share2,
    ArrowRight, CheckCircle2, Play, Users, Award,
    Sticker, MousePointer2
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ApplicationForm from "@/components/hr/ApplicationForm"
import { motion } from "framer-motion"

const Marquee = ({ text }: { text: string }) => {
    return (
        <div className="relative flex overflow-x-hidden bg-slate-950 text-white py-4 -rotate-1 shadow-xl z-20 mx-[-20px]">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center text-xl font-black uppercase tracking-widest">
                {Array(10).fill(text).map((t, i) => (
                    <span key={i} className="flex items-center gap-4">
                        {t} <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default function YoungEngineersPage() {


    return (
        <div className="bg-white min-h-screen text-slate-900 selection:bg-yellow-300 overflow-x-hidden">

            {/* 1. HERO: POP & BOLD */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
                {/* Mesh Gradients */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px] opacity-20 animate-pulse mix-blend-multiply pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-violet-500 rounded-full blur-[150px] opacity-20 animate-pulse delay-1000 mix-blend-multiply pointer-events-none" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="flex flex-col items-start text-left">

                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.85] flex flex-col gap-2">
                                <span className="relative inline-block z-10">GELECEĞİ</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 animate-gradient-x italic transform -skew-x-12">
                                    KODLA.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 max-w-xl mb-12 font-bold leading-relaxed tracking-tight">
                                Genç Mühendis Programı, <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg">gerçek uygulamalara</span> dokunarak <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-lg mx-1">modern teknolojilerle</span> üretme ve gelişme fırsatı sunar. Öğrenirken <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-lg mx-1">değer yaratırsın</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-start">
                                <Link href="#application-form">
                                    <Button size="xl" className="bg-black text-white hover:bg-slate-800 rounded-none border-2 border-black px-12 h-16 text-lg font-black shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                                        BAŞVURU
                                    </Button>
                                </Link>
                                <Link href="#tracks">
                                    <Button size="xl" variant="outline" className="bg-white text-black border-2 border-black rounded-none px-12 h-16 text-lg font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                                        PROGRAM
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right: Image Composition */}
                        <div className="hidden lg:block relative h-[600px]">
                            {/* Main Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="absolute top-8 right-0 w-[380px] h-[460px] rounded-3xl overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                                    alt="Genç Mühendisler Ekibi"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Secondary Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-12 left-0 w-[260px] h-[300px] rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(124,58,237,1)] z-20 rotate-[-3deg]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                                    alt="Hackathon"
                                    fill
                                    className="object-cover"
                                />
                                {/* Tag on Image */}
                                <div className="absolute bottom-4 left-4 bg-violet-500 text-white text-xs font-black px-3 py-1.5 rounded-full z-10">
                                    #Hackathon
                                </div>
                            </motion.div>


                            {/* Stats Glassmorphism Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0 }}
                                className="absolute top-[55%] right-[55%] bg-white/80 backdrop-blur-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 z-30 rounded-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
                                        <Users className="w-5 h-5 text-black" />
                                    </div>
                                    <div>
                                        <div className="font-black text-lg leading-none">600+</div>
                                        <div className="text-[10px] font-bold text-slate-500 uppercase">Genç Mühendis</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* MARQUEE */}
            <Marquee text="INNOVATION • PASSION • FUTURE • CODE • COMMUNITY • GROWTH • " />

            {/* 2. SOCIAL VIBE: "Stories" & Culture */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-50" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 rounded-full blur-xl opacity-50" />

                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
                        <div>
                            <span className="bg-violet-100 text-violet-700 font-bold px-4 py-2 text-sm uppercase mb-4 inline-block border-2 border-violet-200">
                                #LIFE@BGT
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-none mb-6">
                                Koddan Fazlası. <br />
                                <span className="text-violet-600 italic">Kültür.</span>
                            </h2>
                            <div className="bg-white border-2 border-black p-4 inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(139,92,246,1)] hover:rotate-0 transition-all cursor-default">
                                <p className="text-lg text-slate-800 font-bold max-w-lg leading-snug">
                                    <span className="bg-blue-100 text-blue-700 px-1">Uygulamalı öğrenimle</span> gerçek projelere dokunur, <span className="bg-yellow-100 text-yellow-700 px-1">sürekli gelişim</span> ve güçlü takım ruhuyla <span className="underline decoration-wavy decoration-violet-500 underline-offset-4">birlikte üretiriz.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Scroll Snap Container - Styled as Stories */}
                    <div className="flex gap-8 overflow-x-auto pb-16 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {[
                            { img: "/images/culture/culture-1.jpg", tag: "@Hackathon", title: "Gerçek projeler", color: "bg-blue-600" },
                            { img: "/images/culture/culture-2.jpg", tag: "@MENTORSHIP", title: "Sürekli gelişim", color: "bg-violet-600" },
                            { img: "/images/culture/culture-5.jpg", tag: "@TechTalks", title: "Uygulamalı öğrenim", color: "bg-emerald-600" },
                            { img: "/images/culture/culture-3.jpg", tag: "@HappyHour", title: "Takım ruhu", color: "bg-pink-600" },
                        ].map((story, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, rotate: 2 }}
                                className="snap-center shrink-0 w-[320px] h-[480px] relative group rounded-3xl overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer bg-white"
                            >
                                <Image
                                    src={story.img}
                                    alt={story.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                                <div className="absolute top-6 left-6 rotate-[-5deg]">
                                    <span className={`px-4 py-2 ${story.color} text-white font-black uppercase text-sm border-2 border-white shadow-md transform group-hover:rotate-0 transition-transform`}>
                                        {story.tag}
                                    </span>
                                </div>

                                <div className="absolute bottom-8 left-6 right-6 text-white p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    <h3 className="text-2xl font-black mb-1">{story.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 3. TRACKS: Stacked Detailed Cards */}
            <section id="tracks" className="py-24 bg-slate-50 relative border-y-2 border-black">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
                        <div className="max-w-2xl">
                            <h2 className="text-6xl font-black text-slate-900 mb-6 relative">
                                <span className="relative z-10">Yetiştirme Programlarımız.</span>
                                <span className="absolute bottom-2 left-0 w-full h-6 bg-yellow-300 -z-0 transform -skew-x-12" />
                            </h2>
                            <p className="text-xl text-slate-700 font-bold">
                                Seçimini yap, geleceğini şekillendir. Tüm programlarımız modern süreçlere tam entegrasyonu hedefler.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <MousePointer2 className="w-16 h-16 text-black animate-bounce" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-16">
                        {/* PROGRAM 1: YAZILIM */}
                        <div id="track-software" className="group bg-blue-50 border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative transition-all hover:-translate-y-2 hover:-rotate-1 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] duration-300 cursor-default">
                            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-400 text-black px-6 py-2 font-black text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 -rotate-3 group-hover:rotate-0 transition-all">
                                KOD YAZ, ETKİ YARAT 💻
                            </div>
                            <div className="flex items-center gap-6 mb-8 mt-4">
                                <div className="w-20 h-20 shrink-0 bg-blue-600 text-white border-4 border-black flex items-center justify-center text-4xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
                                    <Code className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">Yazılımcı Yetiştirme Programı</h3>
                            </div>

                            <p className="text-lg md:text-xl text-slate-700 font-bold mb-10 leading-relaxed border-l-4 border-blue-600 pl-6">
                                Yeni Mezun Yazılımcı Yetiştirme Programı, genç mühendisleri yalnızca teknik bilgi ile donatmakla kalmayıp, problem çözme yetkinliği, ekip uyumu ve profesyonel çalışma disiplinini geliştirmeyi hedefler. Program, katılımcıları gerçek iş problemleri üzerinde çalıştırarak ve sprint bazlı projelere entegre ederek, modern yazılım geliştirme süreçlerine hazır hale getirir.
                            </p>

                            <div className="grid md:grid-cols-2 gap-10 mb-10">
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="bg-yellow-400 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold">1</span>
                                        Program İçeriği
                                    </h4>
                                    <ul className="space-y-4 font-bold text-slate-700">
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /> Algoritma ve veri yapıları, Nesne Yönelimli Programlama ve Clean Code</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /> Backend ve frontend geliştirme</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /> Veritabanı yönetimi ve API tasarımı</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /> Test süreçleri ve temel CI/CD uygulamaları</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /> Agile & Scrum metodolojisi ve code review kültürü</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="bg-yellow-400 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold">2</span>
                                        Yaklaşım
                                    </h4>
                                    <ul className="space-y-4 font-bold text-slate-700">
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Teoriyi pratiğe dönüştüren uygulamalı öğrenim</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Gerçek projeler üzerinden deneyim kazandırma</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Sürekli geri bildirim ve mentorluk desteği</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Teknik yetkinlik ile birlikte sorumluluk ve sahiplenme bilinci kazandırma</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Katılımcının potansiyelini erken aşamada keşfetme ve geliştirme</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-black p-6 relative overflow-hidden">
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50 pointer-events-none" />
                                <h4 className="text-xl font-black text-blue-800 mb-2">Program Hedefi</h4>
                                <p className="text-slate-800 font-semibold relative z-10">
                                    Program, üretken, sorumluluk sahibi ve modern yazılım süreçlerine tam entegre olabilen profesyoneller yetiştirmeyi amaçlar. Katılımcılar, program sonunda hem teknik hem de davranışsal yetkinlikler kazanmış olarak kariyerlerine güçlü bir başlangıç yaparlar.
                                </p>
                            </div>
                        </div>

                        {/* PROGRAM 2: TEST & ANALIST */}
                        <div id="track-test" className="group bg-violet-50 border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] duration-300 cursor-default">
                            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-yellow-400 text-black px-6 py-2 font-black text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 rotate-3 animate-pulse group-hover:animate-none group-hover:rotate-6 transition-all">
                                POPÜLER 🔥
                            </div>
                            <div className="flex items-center gap-6 mb-8 mt-4">
                                <div className="w-20 h-20 shrink-0 bg-violet-600 text-white border-4 border-black flex items-center justify-center text-4xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
                                    <BarChart3 className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">Test ve Analist Yetiştirme Programı</h3>
                            </div>

                            <p className="text-lg md:text-xl text-slate-700 font-bold mb-10 leading-relaxed border-l-4 border-violet-600 pl-6">
                                Yeni Mezun Test ve Analist Yetiştirme Programı, genç mühendisleri ve yeni mezunları yalnızca teknik bilgi ile donatmakla kalmayıp, problem çözme yetkinliği, iş analizi becerisi ve profesyonel çalışma disiplinini geliştirmeyi hedefler. Program, katılımcıları gerçek iş senaryoları üzerinde çalıştırarak ve proje süreçlerine entegre ederek, modern test ve analiz süreçlerine hazır hale getirir.
                            </p>

                            <div className="grid md:grid-cols-2 gap-10 mb-10">
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="bg-yellow-400 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold">1</span>
                                        Program İçeriği
                                    </h4>
                                    <ul className="space-y-4 font-bold text-slate-700">
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" /> Temel yazılım ve iş süreçleri bilgisi</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" /> Test metodolojileri ve kalite standartları</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" /> Test planı ve test senaryosu hazırlama</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" /> Fonksiyonel, entegrasyon ve kullanıcı kabul testleri</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" /> Test otomasyonu ve temel araç kullanımı</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" /> İş analizi, gereksinim toplama ve dokümantasyon</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-0.5" /> Agile & Scrum metodolojisi ve sprint süreçlerine katkı</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="bg-yellow-400 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold">2</span>
                                        Yaklaşım
                                    </h4>
                                    <ul className="space-y-4 font-bold text-slate-700">
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Teoriyi pratiğe dönüştüren uygulamalı öğrenim</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Gerçek iş senaryoları ve projeler üzerinden deneyim kazandırma</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Sürekli geri bildirim ve mentorluk desteği</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Teknik yetkinlik ile birlikte sorumluluk ve sahiplenme bilinci kazandırma</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Katılımcının potansiyelini erken aşamada keşfetme ve geliştirme</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-black p-6 relative overflow-hidden">
                                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-violet-200 rounded-full blur-2xl opacity-50 pointer-events-none" />
                                <h4 className="text-xl font-black text-violet-800 mb-2">Program Hedefi</h4>
                                <p className="text-slate-800 font-semibold relative z-10">
                                    Program, üretken, sorumluluk sahibi ve modern test & analiz süreçlerine tam entegre olabilen profesyoneller yetiştirmeyi amaçlar. Katılımcılar, program sonunda hem teknik hem de davranışsal yetkinlikler kazanmış olarak kariyerlerine güçlü bir başlangıç yaparlar.
                                </p>
                            </div>
                        </div>

                        {/* PROGRAM 3: ALTYAPI / DEVOPS */}
                        <div id="track-infrastructure" className="group bg-emerald-50 border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative transition-all hover:-translate-y-2 hover:-rotate-1 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] duration-300 cursor-default">
                            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-emerald-400 text-black px-6 py-2 font-black text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 -rotate-2 group-hover:rotate-0 transition-all">
                                SİSTEM SENSİN ⚙️
                            </div>
                            <div className="flex items-center gap-6 mb-8 mt-4">
                                <div className="w-20 h-20 shrink-0 bg-emerald-600 text-white border-4 border-black flex items-center justify-center text-4xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
                                    <Server className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">Altyapı Teknolojileri Yetiştirme</h3>
                            </div>

                            <p className="text-lg md:text-xl text-slate-700 font-bold mb-10 leading-relaxed border-l-4 border-emerald-600 pl-6">
                                Yeni Mezun DevOps & Cloud Native Yetiştirme Programı, genç mühendisleri ve yeni mezunları yalnızca teknik bilgi ile donatmakla kalmayıp, problem çözme yetkinliği, altyapı yönetimi becerisi ve profesyonel çalışma disiplinini geliştirmeyi hedefler. Program, katılımcıları gerçek iş senaryoları ve altyapı projeleri üzerinde çalıştırarak, modern DevOps ve Cloud Native süreçlerine hazır hale getirir.
                            </p>

                            <div className="grid md:grid-cols-2 gap-10 mb-10">
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="bg-yellow-400 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold">1</span>
                                        Program İçeriği
                                    </h4>
                                    <ul className="space-y-4 font-bold text-slate-700">
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" /> Linux ve temel sistem yönetimi</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" /> CI/CD pipeline tasarımı ve otomasyonu</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" /> Container teknolojileri (Docker, Kubernetes)</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" /> Cloud platformları (AWS, Azure, GCP) ve servisleri</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" /> Monitoring, logging ve alert sistemleri</li>
                                        <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" /> Infrastructure as Code (Terraform, Ansible vb.)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                        <span className="bg-yellow-400 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold">2</span>
                                        Yaklaşım
                                    </h4>
                                    <ul className="space-y-4 font-bold text-slate-700">
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Teoriyi pratiğe dönüştüren uygulamalı öğrenim</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Gerçek altyapı projeleri üzerinden deneyim kazandırma</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Sürekli geri bildirim ve mentorluk desteği</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Teknik yetkinlik ile birlikte sorumluluk ve sahiplenme bilinci kazandırma</li>
                                        <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" /> Katılımcının potansiyelini erken aşamada keşfetme ve geliştirme</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-black p-6 relative overflow-hidden">
                                <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-200 rounded-full blur-2xl opacity-50 pointer-events-none" />
                                <h4 className="text-xl font-black text-emerald-800 mb-2">Program Hedefi</h4>
                                <p className="text-slate-800 font-semibold relative z-10">
                                    Program, üretken, sorumluluk sahibi ve modern DevOps & Cloud Native süreçlerine tam entegre olabilen profesyoneller yetiştirmeyi amaçlar. Katılımcılar, program sonunda hem teknik hem de davranışsal yetkinlikler kazanmış olarak kariyerlerine güçlü bir başlangıç yaparlar.
                                </p>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            {/* 4. APPLICATION FORM SECTION */}
            <div id="application-form" className="relative bg-slate-950 py-32 text-white overflow-hidden">
                {/* Background Noise/Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8 sticky top-24">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-block bg-pink-500 text-white font-black px-4 py-1 text-lg rotate-[-2deg]"
                            >
                                SON AŞAMA 🏁
                            </motion.div>

                            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                                ŞİMDİ <br /> <span className="text-blue-500">BAŞLA.</span>
                            </h2>

                            <div className="p-8 border-2 border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-sm">
                                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <Sparkles className="text-yellow-400" /> İpuçları
                                </h4>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                                        <span>CV'nin güncel olduğundan emin ol.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                                        <span>Projelerinden bahsetmeyi unutma.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                                        <span>Kısa notunda seni neyin heyecanlandırdığını yaz.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white text-slate-900 p-2 rounded-3xl"
                        >
                            <ApplicationForm />
                        </motion.div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
