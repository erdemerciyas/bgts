"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { motion } from "framer-motion"
import {
    GraduationCap, BookOpen, Heart, Users, Lightbulb, Target,
    ArrowRight, Sparkles, HandHeart, Globe2, TreePine
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

export default function SocialContributionPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-pink-950 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-10 left-20 w-[350px] h-[350px] bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">

                        <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            Geleceği Birlikte <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400">
                                Şekillendiriyoruz
                            </span>
                        </motion.h1>

                        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Yalnızca teknoloji ve yetenek geliştirmeye değil, topluma kalıcı değer üretmeye odaklanıyoruz.
                            Eşit fırsatlar yaratmayı ve sürdürülebilir etki sağlamayı önceliklendiriyoruz.
                        </motion.p>

                        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <Link
                                href="#social-details"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                            >
                                Projelerimizi Keşfet <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </motion.div>
                    </div>


                </Container>
            </section>

            {/* ═══════════ SECTION 1: EĞİTİM & STAJ ═══════════ */}
            <section id="social-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Gençlerin Geleceğine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Yatırım</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Eğitim ve staj programlarımızla, gençlerin iş hayatına daha donanımlı ve özgüvenli adımlar atmasını destekliyoruz.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { icon: Lightbulb, text: "Öğrencilerin teorik bilgilerini pratikle buluşturabilecekleri öğrenme ortamları sunarız." },
                                    { icon: Target, text: "Gerçek iş süreçlerini deneyimleyebilecekleri staj imkânları sağlarız." },
                                    { icon: Users, text: "Genç yeteneklerin potansiyellerini keşfetmelerine ve kariyer yönlerini netleştirmelerine katkı sağlarız." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-xl hover:bg-blue-50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50">
                                <p className="text-blue-800 font-medium text-sm italic">
                                    &quot;Amacımız, gençlerin yalnızca bugüne değil geleceğe de hazır bireyler olarak yetişmelerine destek olmaktır.&quot;
                                </p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/culture/culture-3.jpg"
                                        alt="Eğitim ve Staj"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 2: BURS PROGRAMLARI ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/social/scholarship.png"
                                        alt="Burs Programları"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Eğitimde <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Eşit Fırsat</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Burs programlarımız, eğitim hayatını sürdürürken desteğe ihtiyaç duyan öğrencilerin yanında olmayı hedefler.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { icon: Users, text: "Eğitimde fırsat eşitliğine katkı sağlamayı amaçlarız." },
                                    { icon: Target, text: "Maddi engellerin öğrenme yolculuğunun önüne geçmemesini hedefleriz." },
                                    { icon: Lightbulb, text: "Başarılı ve istekli öğrencilerin gelişimlerini sürdürülebilir şekilde destekleriz." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-emerald-50/50 rounded-xl hover:bg-emerald-50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100/50">
                                <p className="text-emerald-800 font-medium text-sm italic">
                                    &quot;Burs programlarını, yalnızca finansal destek değil; geleceğe yapılan uzun vadeli bir yatırım olarak görürüz.&quot;
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 3: SOSYAL SORUMLULUK ═══════════ */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Topluma <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Değer Katıyoruz</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Toplumsal sorumluluk çalışmalarımız, sosyal fayda üretmeyi ve içinde bulunduğumuz ekosisteme katkı sağlamayı merkeze alır.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <HandHeart className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">Odak Alanlarımız</h4>
                                    <p className="text-sm text-slate-500">Eğitim, gençlik ve toplumsal gelişim odaklı projeler.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <TreePine className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">Yaklaşımımız</h4>
                                    <p className="text-sm text-slate-500">Gönüllülük bilinci ve uzun vadeli sürdürülebilir etki.</p>
                                </div>
                            </div>
                            <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100/50">
                                <p className="text-rose-800 font-medium text-sm italic">
                                    &quot;BGTS için sosyal sorumluluk, dönemsel projelerden öte; kurumsal kültürün doğal bir parçasıdır.&quot;
                                </p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/culture/culture-5.jpg"
                                        alt="Sosyal Sorumluluk"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
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
