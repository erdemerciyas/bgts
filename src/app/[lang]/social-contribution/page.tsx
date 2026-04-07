import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import { Users, Lightbulb, Target, HandHeart, TreePine } from "lucide-react"
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"

export default async function SocialContributionPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang as Locale)
    const d = dict.socialContribution

    return (
        <div className="bg-white min-h-screen">

            {/* HERO */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-pink-950 text-white min-h-[600px] lg:min-h-[700px]">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-4 left-2 w-[290px] lg:w-[400px] rounded-2xl rotate-[-6deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 overflow-hidden">
                        <Image src="/images/collage/kolage3.jpg" alt="" width={1024} height={576} className="w-full h-auto block" />
                    </div>
                    <div className="absolute top-6 right-[2%] w-[140px] lg:w-[190px] rounded-2xl rotate-[4deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 overflow-hidden">
                        <Image src="/images/collage/kolage1.jpg" alt="" width={768} height={1108} className="w-full h-auto block" />
                    </div>
                    <div className="absolute top-[40%] left-2 w-[270px] lg:w-[350px] rounded-2xl rotate-[3deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 overflow-hidden">
                        <Image src="/images/collage/kolage4.jpg" alt="" width={1024} height={683} className="w-full h-auto block" />
                    </div>
                    <div className="absolute top-[38%] right-[1%] w-[230px] lg:w-[300px] rounded-2xl rotate-[-5deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 overflow-hidden">
                        <Image src="/images/collage/kolage.jpg" alt="" width={1204} height={803} className="w-full h-auto block" />
                    </div>
                    <div className="absolute bottom-[2%] left-[5%] w-[130px] lg:w-[175px] rounded-2xl rotate-[5deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 overflow-hidden">
                        <Image src="/images/collage/kolage2.jpg" alt="" width={768} height={1152} className="w-full h-auto block" />
                    </div>
                    <div className="absolute bottom-[2%] right-[3%] w-[240px] lg:w-[310px] rounded-2xl rotate-[-3deg] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-white/15 overflow-hidden">
                        <Image src="/images/collage/kolage5.jpg" alt="" width={1024} height={683} className="w-full h-auto block" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-rose-950/40 to-pink-950/50" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            {d.hero.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400">
                                {d.hero.highlight}
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            {d.hero.subtitle}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Education & Internship */}
            <section id="social-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                {d.education.heading}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    {d.education.headingHighlight}
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">{d.education.body}</p>
                            <div className="space-y-3">
                                {[Lightbulb, Target, Users].map((Icon, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-xl hover:bg-blue-50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed">{d.education.items[i]}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50">
                                <p className="text-blue-800 font-medium text-sm italic">&quot;{d.education.quote}&quot;</p>
                            </div>
                        </AnimatedDiv>
                        <AnimatedDiv className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image src="/images/culture/culture-3.jpg" alt={d.education.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Scholarships */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image src="/images/social/scholarship.jpg" alt={d.scholarship.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        </AnimatedDiv>
                        <AnimatedDiv className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                {d.scholarship.heading}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                    {d.scholarship.headingHighlight}
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">{d.scholarship.body}</p>
                            <div className="space-y-3">
                                {[Users, Target, Lightbulb].map((Icon, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-emerald-50/50 rounded-xl hover:bg-emerald-50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed">{d.scholarship.items[i]}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100/50">
                                <p className="text-emerald-800 font-medium text-sm italic">&quot;{d.scholarship.quote}&quot;</p>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Social Responsibility */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                {d.social.heading}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                                    {d.social.headingHighlight}
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">{d.social.body}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <HandHeart className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">{d.social.focusTitle}</h4>
                                    <p className="text-sm text-slate-500">{d.social.focusDesc}</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <TreePine className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">{d.social.approachTitle}</h4>
                                    <p className="text-sm text-slate-500">{d.social.approachDesc}</p>
                                </div>
                            </div>
                            <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100/50">
                                <p className="text-rose-800 font-medium text-sm italic">&quot;{d.social.quote}&quot;</p>
                            </div>
                        </AnimatedDiv>
                        <AnimatedDiv className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image src="/images/collage/kolage3.jpg" alt={d.social.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

        </div>
    )
}
