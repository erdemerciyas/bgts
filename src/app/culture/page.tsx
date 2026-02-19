"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { motion } from "framer-motion"
import {
    MessageCircle, Globe, Zap, Heart, Users, GraduationCap,
    ArrowRight, Sparkles, Coffee, Gamepad2, Music, PartyPopper
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

export default function CulturePage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-10 left-20 w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">

                        <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            Sadece Çalışmıyor, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400">
                                Birlikte Büyüyoruz
                            </span>
                        </motion.h1>

                        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Açık iletişim, takım ruhu ve üretme heyecanı — kültürümüzün DNA'sı.
                            Hibrit ve esnek çalışma modelleri ile herkesin en verimli olduğu ortamda çalışmasını destekliyoruz.
                        </motion.p>

                        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <Link
                                href="https://www.linkedin.com/company/bilgeadam/jobs/"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                            >
                                Aramıza Katıl <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#culture-details"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all border border-white/10"
                            >
                                Kültürümüzü Keşfet
                            </Link>
                        </motion.div>
                    </div>


                </Container>
            </section>

            {/* ═══════════ PHOTO MOSAIC ═══════════ */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { src: "/images/culture/culture-1.jpg", span: "col-span-1 row-span-1" },
                            { src: "/images/culture/culture-2.jpg", span: "col-span-1 row-span-1" },
                            { src: "/images/culture/culture-3.jpg", span: "col-span-2 row-span-1" },
                            { src: "/images/culture/culture-4.jpg", span: "col-span-2 row-span-1" },
                            { src: "/images/culture/culture-5.jpg", span: "col-span-1 row-span-1" },
                            { src: "/images/culture/culture-6.jpg", span: "col-span-1 row-span-1" },
                        ].map((img, i) => (
                            <div key={i} className={`${img.span} relative h-48 rounded-2xl overflow-hidden group`}>
                                <Image
                                    src={img.src}
                                    alt={`BGTS Kültür ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* ═══════════ SECTION 1: İLETİŞİM & ORTAM ═══════════ */}
            <section id="culture-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-7.jpg"
                                        alt="Açık İletişim"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Açık İletişim ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Destekleyici Ortam</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Kültürümüz; samimi, yaratıcı ve destekleyici bir atmosfer üzerine kuruludur. Fikirlerin özgürce paylaşıldığı, katkıların değer gördüğü bir iş ortamı yaratırız.
                            </p>
                            <div className="grid gap-3">
                                {[
                                    { icon: MessageCircle, title: "Şeffaf İletişim", desc: "Her seviyede hızlı, doğrudan ve erişilebilir iletişim.", color: "blue" },
                                    { icon: Heart, title: "Samimi Atmosfer", desc: "Yaratıcılığı teşvik eden, herkesin fikrinin değer gördüğü bir ortam.", color: "pink" },
                                ].map((item, i) => (
                                    <div key={i} className={`flex gap-4 p-4 bg-${item.color}-50/50 rounded-xl border border-${item.color}-100/50 hover:shadow-md transition-all`}>
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 text-white flex items-center justify-center shrink-0`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 2: ESNek ÇALIŞMA ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Esnek Çalışma ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Agile Yapı</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Ekiplerimiz Agile yapılarda organize olur. Bu sayede projelerde hızlı ilerler, daha fazla iş birliği yapar ve değişen ihtiyaçlara kolayca uyum sağlarız.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">Agile Metodoloji</h4>
                                    <p className="text-sm text-slate-500">Hızlı adaptasyon ve sürekli gelişim döngüsü.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">Uzaktan Erişim</h4>
                                    <p className="text-sm text-slate-500">Güçlü dijital altyapı ile özgür çalışma imkanı.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-8.jpg"
                                        alt="Agile Çalışma"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 3: SOSYAL & GELİŞİM ═══════════ */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-2.jpg"
                                        alt="Sosyal Etkinlikler"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Topluluklar ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">İnsana Yatırım</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Çeşitli topluluklar, sosyal etkinlikler ve gönüllülük projeleri ile çalışanlarımızın hem kişisel hem de sosyal gelişimlerini destekler, ekip bağlılığını güçlendiririz.
                            </p>

                            {/* Social Activities Grid */}
                            <div className="grid grid-cols-4 gap-3 mb-8">
                                {[
                                    { icon: Coffee, label: "Kahve Sohbeti", color: "from-amber-500 to-orange-500" },
                                    { icon: Gamepad2, label: "Game Nights", color: "from-violet-500 to-purple-500" },
                                    { icon: Music, label: "Müzik Kulübü", color: "from-pink-500 to-rose-500" },
                                    { icon: PartyPopper, label: "Kutlamalar", color: "from-blue-500 to-indigo-500" },
                                ].map((activity, i) => (
                                    <div key={i} className="text-center group cursor-default">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activity.color} text-white flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                                            <activity.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">{activity.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-violet-50 to-pink-50 p-6 rounded-2xl border border-violet-100/50">
                                <div className="flex gap-4 items-start">
                                    <GraduationCap className="w-7 h-7 text-violet-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Sürekli Gelişim</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Bizim için en değerli yatırım insandır. Gelişim programları, mentorluk ve sosyal projelerle çalışanlarımızın yanındayız.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>


        </div>
    )
}
