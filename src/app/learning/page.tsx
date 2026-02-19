"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { motion } from "framer-motion"
import {
    Award, BookOpen, Users, BrainCircuit, Mic2, MonitorPlay,
    ArrowRight, Sparkles, Trophy, Code, Cloud, ShieldCheck
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

export default function LearningPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-10 left-20 w-[350px] h-[350px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">

                        <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            Öğrenmek Bir <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                Yaşam Biçimi
                            </span>
                        </motion.h1>

                        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Kendine yatırım yapmak hem bireysel hem de kurumsal başarı için vazgeçilmezdir.
                            Sürekli öğrenmeyi kültürümüzün bir parçası haline getiriyoruz.
                        </motion.p>

                        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <Link
                                href="https://www.linkedin.com/company/bilgeadam/jobs/"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                            >
                                Bize Katıl <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#learning-details"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all border border-white/10"
                            >
                                Eğitimleri Keşfet
                            </Link>
                        </motion.div>
                    </div>


                </Container>
            </section>

            {/* ═══════════ SECTION 1: SERTİFİKA & ONLİNE EĞİTİM ═══════════ */}
            <section id="learning-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-6.jpg"
                                        alt="Online Eğitim ve Sertifikalar"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Sertifika Destekleri ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Online Eğitim</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Çalışanlarımızın mesleki uzmanlıklarını derinleştirebilmeleri için Cloud, Agile, güvenlik ve yazılım alanlarında sertifika programlarını aktif olarak destekliyoruz.
                            </p>
                            <div className="grid gap-3">
                                {[
                                    { icon: Award, title: "Sertifikasyon", desc: "Uluslararası standartlarda yetkinlik belgelendirme desteği.", color: "from-emerald-500 to-teal-600" },
                                    { icon: MonitorPlay, title: "Sınırsız Erişim", desc: "Global online eğitim platformlarına tam üyelik ile özgür öğrenme.", color: "from-blue-500 to-indigo-600" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100/50 hover:shadow-md transition-all">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shrink-0`}>
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

            {/* ═══════════ SECTION 2: LİDERLİK ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Geleceğin Liderlerini <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Yetiştiriyoruz</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Mevcut ve potansiyel liderlerimizin yetkinliklerini güçlendirmek amacıyla yapılandırılmış liderlik gelişim programları ve birebir mentorluk süreçleri sunuyoruz.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { num: "1", title: "Stratejik Düşünme", desc: "Karar alma ve ekip yönetimi becerilerini geliştiren özel modüller." },
                                    { num: "2", title: "Birebir Mentorluk", desc: "Deneyimli liderlerle yürütülen koçluk seansları." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-rose-100/50 hover:shadow-md transition-all">
                                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shrink-0 font-black text-sm">
                                            {item.num}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-3.jpg"
                                        alt="Liderlik Toplantısı"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 3: TOPLULUK ═══════════ */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-1.jpg"
                                        alt="Topluluk Etkinliği"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                İç Teknik Topluluklar & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Paylaşım</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Bilgi paylaştıkça çoğalır. Çalışanlarımızın deneyimlerini aktardığı düzenli oturumlar ile öğrenmeyi kolektif bir deneyime dönüştürüyor ve ekipler arası bağları güçlendiriyoruz.
                            </p>
                            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-2xl border border-indigo-100/50">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Teknik Derinlik</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Tech-talks, workshoplar ve case-study analizleri ile organizasyon genelinde teknik know-how'ı canlı tutuyoruz.
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
