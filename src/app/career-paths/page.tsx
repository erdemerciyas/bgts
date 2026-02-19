"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { motion } from "framer-motion"
import {
    Compass, BarChart3, RefreshCw, Rocket, Target, Users,
    ArrowRight, ArrowUpRight, Sparkles, TrendingUp, GitBranch, Award
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

export default function CareerPathsPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-10 left-20 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">

                        <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            Kariyerini <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                                Sen Şekillendir
                            </span>
                        </motion.h1>

                        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Her çalışanın kariyer yolculuğu kendine özgüdür. Kendi hızında gelişebileceğin, potansiyelini ortaya koyabileceğin esnek ve sürdürülebilir kariyer yolları sunuyoruz.
                        </motion.p>

                        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <Link
                                href="https://www.linkedin.com/company/bilgeadam/jobs/"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                            >
                                Açık Pozisyonlar <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#career-details"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all border border-white/10"
                            >
                                Kariyer Yollarını Keşfet
                            </Link>
                        </motion.div>
                    </div>


                </Container>
            </section>

            {/* ═══════════ SECTION 1: TEKNİK & YÖNETSEL ═══════════ */}
            <section id="career-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-1.jpg"
                                        alt="Teknik ve Yönetsel Kariyer"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Teknik ve Yönetsel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Kariyer Yolları</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Çalışanlarımıza uzmanlıklarını derinleştirebilecekleri teknik kariyer yolları ile ekip ve organizasyon yönetimine odaklanabilecekleri yönetsel kariyer yolları sunuyoruz.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Uzmanlık odaklı dikey gelişim",
                                    "Liderlik ve yönetim odaklı yatay gelişim",
                                    "Bireysel hedeflere uygun esnek planlama"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl hover:bg-blue-50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center shrink-0">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 2: PERFORMANS ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Şeffaf <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Performans Sistemi</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Performans yönetiminde açıklık ve adaleti esas alıyoruz. Net hedefler, düzenli geri bildirimler ve ölçülebilir kriterler sayesinde çalışanlarımız gelişim alanlarını net bir şekilde görebilir.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-violet-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">Net Hedefler</h4>
                                    <p className="text-sm text-slate-500">Ölçülebilir ve ulaşılabilir OKR yaklaşımı.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-violet-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">Geri Bildirim</h4>
                                    <p className="text-sm text-slate-500">Düzenli 1:1 görüşmeler ve mentorluk.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-3.jpg"
                                        alt="Performans Görüşmesi"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 3: ROTASYON ═══════════ */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-4.jpg"
                                        alt="Ekip Çalışması ve Rotasyon"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Proje Geçişleri & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Rotasyonlar</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Farklı ekiplerde ve projelerde görev alma imkânı sunarak çalışanlarımızın deneyim alanlarını genişletmelerini destekliyoruz.
                            </p>
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100/50">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Bütüncül Perspektif</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Proje geçişleri, yeni bakış açıları kazandırırken yetkinlik gelişimini hızlandırır ve organizasyon genelinde daha geniş bir vizyon sağlar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 4: TERFİ ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Terfi ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Gelişim Fırsatları</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Yetkinlik, performans ve potansiyel odaklı terfi yaklaşımımızla çalışanlarımızın emeklerinin karşılığını alabilecekleri şeffaf bir ilerleme sistemi sunuyoruz.
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { icon: Award, label: "Yetkinlik", color: "from-emerald-500 to-teal-600" },
                                    { icon: BarChart3, label: "Performans", color: "from-blue-500 to-indigo-600" },
                                    { icon: Rocket, label: "Potansiyel", color: "from-violet-500 to-purple-600" },
                                ].map((item, i) => (
                                    <div key={i} className="text-center group cursor-default">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-5.jpg"
                                        alt="Kariyer Gelişimi"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>


        </div>
    )
}
