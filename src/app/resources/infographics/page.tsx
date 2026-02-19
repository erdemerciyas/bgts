"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import { Users, UserPlus, Star, Award, Briefcase, Globe, TrendingUp, UserCheck, MapPin, Building2, PersonStanding } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function InfographicsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Custom Hero Section */}
            <Section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B0F25]">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                </div>

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-bold mb-8">
                                <Globe className="w-4 h-4" />
                                Bilgi Merkezi
                            </div>
                            <Heading variant="h1" className="text-white text-5xl lg:text-7xl font-black mb-6 leading-tight">
                                Verinin <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Gücünü Keşfet</span>
                            </Heading>
                            <Text variant="large" className="text-slate-300 mb-10 max-w-lg text-lg leading-relaxed">
                                Sektörel içgörüler, büyüme rakamları ve insan kaynakları istatistikleriyle BGTS dünyasının derinliklerine inin.
                            </Text>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 h-12 shadow-lg shadow-blue-900/20">
                                    İncelemeye Başla
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right Visual - Abstract Charts Composition */}
                        <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center perspective-1000">
                            {/* Floating Elements Animation */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative w-full h-full"
                            >
                                {/* Main Chart Card */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[220px] bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-3 w-20 bg-white/20 rounded-full" />
                                        <div className="h-6 w-16 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full flex items-center justify-center">+125%</div>
                                    </div>
                                    <div className="flex items-end gap-3 h-[100px] justify-between">
                                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className="w-8 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md opacity-90"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Stat Card 1 */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[10%] right-[10%] bg-white p-4 rounded-2xl shadow-xl shadow-blue-900/20 border border-slate-100 max-w-[160px]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div className="text-2xl font-black text-slate-900">1.8K</div>
                                    </div>
                                    <div className="text-xs font-bold text-slate-500">Toplam Çalışan</div>
                                </motion.div>

                                {/* Floating Stat Card 2 */}
                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-[15%] left-[5%] bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700 max-w-[180px]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <div className="text-2xl font-black text-white">1000+</div>
                                    </div>
                                    <div className="text-xs font-bold text-slate-400">Tamamlanan Proje</div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Infographic 1: Recruitment Statistics */}
            <Section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10" />

                <Container>
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
                            <UserPlus className="w-4 h-4" />
                            İşe Alım ve Gelişim
                        </div>
                        <Heading variant="h2" className="text-slate-900 mb-6">
                            Yetenek Kazanımı ve Kariyer Gelişimi
                        </Heading>
                        <Text variant="large" className="text-slate-600">
                            Her ay büyüyen ekibimiz ve çalışan memnuniyeti odaklı yaklaşımımızla sektördeki en iyi yetenekleri bünyemize katıyoruz.
                        </Text>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {/* Stat 1 */}
                        <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-blue-50 hover:shadow-xl transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Users className="w-24 h-24 text-blue-600" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">1000+</div>
                                <div className="h-1 w-12 bg-blue-200 mb-4 rounded-full" />
                                <h3 className="font-bold text-slate-800 text-lg mb-2">Aylık Mülakat</h3>
                                <p className="text-slate-500 text-sm">Her ay 1000'den fazla adayla mülakat gerçekleştiriyoruz.</p>
                            </div>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-blue-50 hover:shadow-xl transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <UserCheck className="w-24 h-24 text-emerald-600" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-4xl lg:text-5xl font-black text-emerald-500 mb-2">%36</div>
                                <div className="h-1 w-12 bg-emerald-200 mb-4 rounded-full" />
                                <h3 className="font-bold text-slate-800 text-lg mb-2">Çalışan Tavsiyesi</h3>
                                <p className="text-slate-500 text-sm">Ekibimizin %36'sı çalışan tavsiyesiyle aramıza katılıyor.</p>
                            </div>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-blue-50 hover:shadow-xl transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Star className="w-24 h-24 text-amber-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-4xl lg:text-5xl font-black text-amber-500 mb-2">%94</div>
                                <div className="h-1 w-12 bg-amber-200 mb-4 rounded-full" />
                                <h3 className="font-bold text-slate-800 text-lg mb-2">Mülakat Deneyimi</h3>
                                <p className="text-slate-500 text-sm">Adayların %94'ü mülakat deneyimini “üstün” olarak değerlendiriyor.</p>
                            </div>
                        </motion.div>

                        {/* Stat 4 */}
                        <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-blue-50 hover:shadow-xl transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <TrendingUp className="w-24 h-24 text-violet-600" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-4xl lg:text-5xl font-black text-violet-600 mb-2">200+</div>
                                <div className="h-1 w-12 bg-violet-200 mb-4 rounded-full" />
                                <h3 className="font-bold text-slate-800 text-lg mb-2">Gelişim</h3>
                                <p className="text-slate-500 text-sm">Son 3 ayda 200'e yakın danışmanımız 27 farklı kategoride kendini geliştirdi.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="mt-12 text-center">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-8 font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-blue-600 hover:bg-blue-700"
                        >
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7408814201223249920"
                                target="_blank"
                            >
                                Kaynağı Görüntüle (LinkedIn) <Globe className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Infographic 2: Team Structure */}
            <Section className="py-20 bg-slate-50 relative">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
                                <Building2 className="w-4 h-4" />
                                Ekip Yapısı
                            </div>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                BilgeAdam Teknoloji'de Ekip Kalitesine İnanıyoruz
                            </Heading>
                            <Text variant="large" className="text-slate-600 mb-8">
                                Alanında uzman mühendislerden oluşan kadromuzla, farklı şehirlerde çalışan yetenekleri ortak bir vizyon etrafında buluşturuyoruz. Güçlü ekip yapımızın, yüksek müşteri memnuniyetinin temelini oluşturduğunu çok iyi biliyoruz.
                            </Text>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                                    <div>
                                        <div className="text-5xl font-black text-slate-900">1800</div>
                                        <div className="text-slate-500 font-medium mt-1">Toplam Çalışan</div>
                                    </div>
                                    <div className="h-12 w-px bg-slate-200" />
                                    <div>
                                        <div className="text-5xl font-black text-indigo-600">1400</div>
                                        <div className="text-slate-500 font-medium mt-1">Mühendis</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                                        <PersonStanding className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Genç ve Dinamik Kadro</div>
                                        <div className="text-slate-600 text-sm">25-34 yaş arası <span className="font-bold text-slate-900">1081</span> çalışan</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {/* Gender Distribution */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200"
                            >
                                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-indigo-600" /> Fırsat Eşitliği
                                </h3>

                                <div className="space-y-6">
                                    {/* General Stats */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 font-medium text-slate-600">
                                            <span>Genel Dağılım</span>
                                            <span>%33 Kadın</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                                            <div className="h-full bg-rose-400 w-[33%]" />
                                            <div className="h-full bg-blue-500 w-[67%]" />
                                        </div>
                                        <div className="flex justify-between text-xs mt-2 text-slate-400">
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-400" /> Kadın</span>
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Erkek (%67)</span>
                                        </div>
                                    </div>

                                    {/* Leadership Stats */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 font-medium text-slate-600">
                                            <span>Yönetici Dağılımı</span>
                                            <span>%36 Kadın</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                                            <div className="h-full bg-rose-500 w-[36%]" />
                                            <div className="h-full bg-blue-600 w-[64%]" />
                                        </div>
                                        <div className="flex justify-between text-xs mt-2 text-slate-400">
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500" /> Kadın Yönetici</span>
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-600" /> Erkek Yönetici (%64)</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Geo Distribution */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200"
                            >
                                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-indigo-600" /> Coğrafi Dağılım
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <div className="text-3xl font-black text-indigo-600 mb-1">%40</div>
                                        <div className="text-sm font-bold text-slate-800">İstanbul Dışı Çalışan</div>
                                        <div className="text-xs text-slate-500 mt-1">68 Farklı İl (Remote)</div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <div className="text-3xl font-black text-indigo-600 mb-1">150</div>
                                        <div className="text-sm font-bold text-slate-800">Yurtdışı Çalışan</div>
                                        <div className="text-xs text-slate-500 mt-1">Dünyanın 4 Farklı Noktası</div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-indigo-600" />
                                        <div className="text-sm text-slate-600">
                                            İnsan ve Teknoloji odağında <span className="font-bold text-slate-900">1000+ IT projesi</span> gerçekleştirdik.
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-8 font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-blue-600 hover:bg-blue-700"
                        >
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7408814201223249920"
                                target="_blank"
                            >
                                Kaynağı Görüntüle (LinkedIn) <Globe className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
