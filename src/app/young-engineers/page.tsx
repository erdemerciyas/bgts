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
                            {/* Sticker Badge */}
                            <motion.div
                                initial={{ scale: 0, rotate: -20 }}
                                animate={{ scale: 1, rotate: -6 }}
                                className="bg-yellow-400 text-black px-6 py-2 font-black text-xl uppercase tracking-tighter border-4 border-black mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-3 transition-transform cursor-default select-none"
                            >
                                Yeni Dönem Başladı! 🚀
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.85] flex flex-col gap-2">
                                <span className="relative inline-block z-10">GELECEĞİ</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 animate-gradient-x italic transform -skew-x-12">
                                    KODLA.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 max-w-xl mb-12 font-bold leading-relaxed tracking-tight">
                                Sıradan bir staj değil. <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg">Gerçek projeler</span>,
                                <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-lg mx-1">modern teknoloji</span> ve
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-lg mx-1">sınırsız eğlence</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-start">
                                <Link href="#application-form">
                                    <Button size="xl" className="bg-black text-white hover:bg-slate-800 rounded-none border-2 border-black px-12 h-16 text-lg font-black shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                                        BAŞVURUNU YAP
                                    </Button>
                                </Link>
                                <Link href="#tracks">
                                    <Button size="xl" variant="outline" className="bg-white text-black border-2 border-black rounded-none px-12 h-16 text-lg font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                                        PROGRAMI GÖR
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
                                        <div className="font-black text-lg leading-none">200+</div>
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
                                #LifeAtBGTS
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-none">
                                Koddan Fazlası. <br />
                                <span className="text-violet-600 italic">Kültür.</span>
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-bold text-sm">Join the Community</span>
                                <span className="text-xs text-slate-500">1.2k+ Members</span>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Scroll Snap Container - Styled as Stories */}
                    <div className="flex gap-8 overflow-x-auto pb-16 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {[
                            { img: "/images/culture/culture-1.jpg", tag: "@Hackathon", title: "Kodlama Maratonu", color: "bg-blue-600" },
                            { img: "/images/culture/culture-2.jpg", tag: "@Mentorship", title: "Usta-Çırak", color: "bg-violet-600" },
                            { img: "/images/culture/culture-3.jpg", tag: "@HappyHour", title: "Cuma Neşesi", color: "bg-pink-600" },
                            { img: "/images/culture/culture-5.jpg", tag: "@TechTalks", title: "Sahne Senin", color: "bg-emerald-600" },
                            { img: "/images/culture/culture-6.jpg", tag: "@Global", title: "Dünya Çapında", color: "bg-cyan-600" },
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
                                    <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                        <span>Beğenildi</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 3. TRACKS: Asymmetric Grid */}
            <section id="tracks" className="py-24 bg-slate-50 relative border-y-2 border-black">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
                        <div className="max-w-xl">
                            <h2 className="text-6xl font-black text-slate-900 mb-6 relative">
                                <span className="relative z-10">Senin Yolun.</span>
                                <span className="absolute bottom-2 left-0 w-full h-6 bg-yellow-300 -z-0 transform -skew-x-12" />
                            </h2>
                            <p className="text-xl text-slate-700 font-bold">
                                Seçimini yap, geleceğini şekillendir. Hangi alanda uzmanlaşmak istiyorsun?
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <MousePointer2 className="w-16 h-16 text-black animate-bounce" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* CARD 1 */}
                        <div className="group bg-blue-50 border-4 border-black p-8 rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all relative">
                            <div className="w-16 h-16 bg-blue-600 text-white border-2 border-black flex items-center justify-center mb-6 text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                &lt;/&gt;
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">Yazılım</h3>
                            <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                                Full-stack gelişim. React, Node.js, .NET Core. Kodunla dünyayı değiştir.
                            </p>
                            <ul className="space-y-3 font-bold text-slate-800">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Modern Stack</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Architecture</li>
                            </ul>
                        </div>

                        {/* CARD 2 */}
                        <div className="group bg-violet-50 border-4 border-black p-8 rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all relative lg:-mt-12">
                            <div className="absolute -top-6 right-6 rotate-12 bg-yellow-400 text-black px-4 py-1 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
                                POPÜLER
                            </div>
                            <div className="w-16 h-16 bg-violet-600 text-white border-2 border-black flex items-center justify-center mb-6 text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                QA
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">Test & Analiz</h3>
                            <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                                Kalite senin işin. Otomasyon, analiz ve kusursuz deneyimler yarat.
                            </p>
                            <ul className="space-y-3 font-bold text-slate-800">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Automation</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Analytics</li>
                            </ul>
                        </div>

                        {/* CARD 3 */}
                        <div className="group bg-emerald-50 border-4 border-black p-8 rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all relative">
                            <div className="w-16 h-16 bg-emerald-600 text-white border-2 border-black flex items-center justify-center mb-6 text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                OPS
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">Teknoloji</h3>
                            <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                                Altyapının kahramanı ol. Cloud, DevOps ve büyük sistemler.
                            </p>
                            <ul className="space-y-3 font-bold text-slate-800">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> DevOps</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Cloud Native</li>
                            </ul>
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

                            <p className="text-xl text-slate-400 font-medium max-w-md">
                                Formu doldur, yeteneğini göster. Seni tanımak için sabırsızlanıyoruz.
                            </p>

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
