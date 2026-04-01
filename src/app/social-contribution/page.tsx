import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import {
    GraduationCap, BookOpen, Heart, Users, Lightbulb, Target,
    ArrowRight, Sparkles, HandHeart, Globe2, TreePine
} from "lucide-react"

export default function SocialContributionPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-pink-950 text-white min-h-[600px] lg:min-h-[700px]">

                {/* Scattered collage photos */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-4 left-2 w-[260px] h-[180px] lg:w-[340px] lg:h-[240px] rounded-2xl rotate-[-6deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 bg-slate-900 overflow-hidden">
                        <Image src="/images/collage/kolage3.jpg" alt="" fill className="object-cover object-top" />
                    </div>
                    <div className="absolute top-8 right-[3%] w-[220px] h-[160px] lg:w-[300px] lg:h-[210px] rounded-2xl rotate-[4deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 bg-slate-900 overflow-hidden">
                        <Image src="/images/collage/kolage1.jpg" alt="" fill className="object-cover object-top" />
                    </div>
                    <div className="absolute top-[38%] left-2 w-[200px] h-[140px] lg:w-[280px] lg:h-[190px] rounded-2xl rotate-[3deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 bg-slate-900 overflow-hidden">
                        <Image src="/images/collage/kolage4.jpg" alt="" fill className="object-cover object-top" />
                    </div>
                    <div className="absolute top-[32%] right-[1%] w-[240px] h-[170px] lg:w-[320px] lg:h-[220px] rounded-2xl rotate-[-5deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 bg-slate-900 overflow-hidden">
                        <Image src="/images/collage/kolage.jpg" alt="" fill className="object-cover object-top" />
                    </div>
                    <div className="absolute bottom-[3%] left-[6%] w-[220px] h-[155px] lg:w-[310px] lg:h-[210px] rounded-2xl rotate-[5deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 bg-slate-900 overflow-hidden">
                        <Image src="/images/collage/kolage2.jpg" alt="" fill className="object-cover object-top" />
                    </div>
                    <div className="absolute bottom-[1%] right-[4%] w-[250px] h-[175px] lg:w-[330px] lg:h-[230px] rounded-2xl rotate-[-3deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 bg-slate-900 overflow-hidden">
                        <Image src="/images/collage/kolage5.jpg" alt="" fill className="object-cover object-top" />
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-rose-950/40 to-pink-950/50" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">

                        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            Sürdürülebilir Değer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400">
                                Programı
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Yalnızca teknoloji ve yetenek geliştirmeye değil, topluma kalıcı değer üretmeye odaklanıyoruz.
                            Eşit fırsatlar yaratmayı ve sürdürülebilir etki sağlamayı önceliklendiriyoruz.
                        </p>

                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 1: EĞİTİM & STAJ ═══════════ */}
            <section id="social-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2">

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
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2">
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
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 2: BURS PROGRAMLARI ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/social/scholarship.jpg"
                                        alt="Burs Programları"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2 order-1 lg:order-2">

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
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 3: SOSYAL SORUMLULUK ═══════════ */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2">

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
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/collage/kolage3.jpg"
                                        alt="Topluma Değer Katıyoruz"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>


        </div>
    )
}
