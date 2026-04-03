import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { CASE_STUDIES } from "@/data/case-studies"
import { CaseStudyCard } from "@/components/resources/CaseStudyCard"
import { AnimatedDiv, ScaleIn } from "@/components/ui/AnimatedElements"
import Image from "next/image"

export default function SuccessStoriesPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ══════════════════════════════════════════════════════
                HERO — Premium Soft Blue Corporate
            ══════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-16 pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 min-h-[40vh] flex items-center">
                {/* Immersive Background Effects (Light Mode) */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Light dynamic glows */}
                    <div className="absolute -top-40 right-[0%] w-[800px] h-[800px] rounded-full bg-blue-100/50 blur-[120px]" />
                    <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[100px]" />

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                </div>

                <Container className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* LEFT COLUMN: Typography */}
                        <AnimatedDiv className="max-w-2xl">
                            <h1 className="text-corporate-dark font-black tracking-tight leading-[1.1] text-5xl lg:text-[4.5rem] mb-8">
                                Teknoloji İle<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-secondary to-blue-500">
                                    Dönüşen Kurumlar
                                </span>
                            </h1>

                            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-normal max-w-lg mb-10">
                                Finans, savunma ve telekomünikasyonun lider markalarıyla hayata geçirdiğimiz, <strong className="text-slate-800 font-bold">teknoloji yığınlarıyla kanıtlanmış</strong> dijital dönüşüm projeleri.
                            </p>
                        </AnimatedDiv>

                        {/* RIGHT COLUMN: Image Layout */}
                        <ScaleIn className="hidden lg:block relative h-[400px] w-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-50" />
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/images/industries/I53A6435.jpg"
                                        alt="Başarı Hikayeleri"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                                
                            </div>
                        </ScaleIn>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════
                PROJECT GRID
            ══════════════════════════════════════════════════════ */}
            <Section background="default" className="py-16 md:py-24">
                <Container>
                    {/* Section header */}
                    <div className="flex items-end justify-between mb-12 flex-wrap gap-4 pb-6 border-b border-slate-100">
                        <div>
                            <Heading variant="h2" className="text-slate-900 font-black text-3xl mb-1.5 tracking-tight">
                                Tüm Projeler
                            </Heading>
                            <Text variant="small" className="text-slate-400 font-medium">
                                {CASE_STUDIES.length} proje — her biri gereksinim, çözüm ve teknoloji yığınıyla belgelenmiş
                            </Text>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-blue-500 inline-block shrink-0" />Yazılım</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-slate-400 inline-block shrink-0" />Altyapı</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-emerald-500 inline-block shrink-0" />Yönetilen Hizmet</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-amber-400 inline-block shrink-0" />Eğitim</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {CASE_STUDIES.map((study, index) => (
                            <CaseStudyCard key={study.id} study={study} index={index} />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
