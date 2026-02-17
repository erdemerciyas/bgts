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

                {/* Floating Emojis */}
                <div className="absolute top-24 right-28 text-3xl animate-bounce hidden lg:block" style={{ animationDelay: '0.2s' }}>📚</div>
                <div className="absolute top-40 right-14 text-2xl animate-bounce hidden lg:block" style={{ animationDelay: '0.7s' }}>🎓</div>
                <div className="absolute bottom-32 left-20 text-2xl animate-bounce hidden lg:block" style={{ animationDelay: '1.1s' }}>💡</div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-semibold tracking-wide">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span>BGTS Akademi</span>
                        </motion.div>

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

                    {/* Certification Badges */}
                    <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
                        {[
                            { icon: Cloud, label: "Cloud Sertifika", desc: "AWS, Azure, GCP" },
                            { icon: Code, label: "Yazılım Eğitimi", desc: "Full Stack" },
                            { icon: ShieldCheck, label: "Güvenlik", desc: "CISSP, CEH" },
                            { icon: Trophy, label: "Agile & PM", desc: "Scrum, PMP" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors">
                                <item.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                                <div className="text-sm font-black text-white">{item.label}</div>
                                <div className="text-xs text-slate-400 font-medium">{item.desc}</div>
                            </div>
                        ))}
                    </motion.div>
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
                                {/* Floating Badge */}
                                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 hidden lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Sertifikasyon</div>
                                            <div className="text-xs text-slate-500">Tam burs desteği</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold tracking-wider uppercase mb-6">
                                <Award className="w-3.5 h-3.5" />
                                Teknik Uzmanlık
                            </div>
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-xs font-bold tracking-wider uppercase mb-6">
                                <BrainCircuit className="w-3.5 h-3.5" />
                                Liderlik & Koçluk
                            </div>
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
                                {/* Floating Badge */}
                                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-slate-100 hidden lg:block">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">🎤</span>
                                        <span className="font-bold text-slate-900 text-xs">Tech Talks</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="lg:w-1/2 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-6">
                                <Mic2 className="w-3.5 h-3.5" />
                                Kolektif Öğrenme
                            </div>
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

            {/* ═══════════ CTA ═══════════ */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10 text-center max-w-4xl">
                    <motion.div {...fadeUp}>
                        <div className="text-4xl mb-6">🎓</div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">
                            Sürekli Öğrenmenin <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Parçası Ol</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Sertifikalar, mentorluk programları ve teknik topluluklar ile kariyerini bir üst seviyeye taşı.
                        </p>
                        <Link
                            href="https://www.linkedin.com/company/bilgeadam/jobs/"
                            target="_blank"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full text-lg shadow-xl hover:scale-105 transition-all"
                        >
                            Açık Pozisyonları Gör <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </Container>
            </section>
        </div>
    )
}
