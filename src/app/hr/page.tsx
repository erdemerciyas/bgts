"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Link from "next/link"
import CultureCard from "@/components/ui/CultureCard"
import { Button } from "@/components/ui/Button"
import TestimonialCard from "@/components/ui/TestimonialCard"
import { Users, Heart, Star, Target, Zap, Smile, BookOpen, Coffee, Award, PlayCircle, Code, BarChart3, Server, CheckCircle2, FileText, Sparkles, Rocket, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

export default function HRPage() {
    return (
        <div className="bg-white min-h-screen">

            <Hero
                title="Yeteneklerinize Değer Veriyoruz"
                subtitle="Tutkulu, yenilikçi ve sürekli öğrenen bir ekibin parçası olun. Kariyerinizi bizimle şekillendirin."
                badge="Kariyer"
                className="bg-rose-600"
                backgroundImage="/images/culture/culture-1.jpg"
            />

            {/* Culture Values */}
            <Section>
                <Container>
                    <Heading variant="h2" className="text-center mb-4">Değerlerimiz</Heading>
                    <Text variant="lead" className="text-center mb-16 max-w-2xl mx-auto">
                        Bizi biz yapan, çalışma şeklimizi ve kararlarımızı yönlendiren temel prensiplerimiz.
                    </Text>

                    <div className="grid md:grid-cols-3 gap-8">
                        <CultureCard
                            title="İnovasyon Tutkusu"
                            description="Sürekli gelişim ve yeni teknolojileri keşfetme arzusu DNA'mızda var. Hata yapmaktan korkmadan deneriz."
                            icon={Zap}
                            color="blue"
                            delay={0}
                        />
                        <CultureCard
                            title="Birlikte Başarı"
                            description="Takım çalışmasına inanırız. Birbirimizi destekler, bilgiyi paylaşır ve başarıyı birlikte kutlarız."
                            icon={Users}
                            color="purple"
                            delay={0.1}
                        />
                        <CultureCard
                            title="İnsan Odaklılık"
                            description="Çalışanlarımızın mutluluğu ve gelişimi önceliğimizdir. Adil, kapsayıcı ve saygılı bir ortam sunarız."
                            icon={Heart}
                            color="orange"
                            delay={0.2}
                        />
                    </div>
                </Container>
            </Section>

            {/* Life at BGTS - Gallery Section */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center mb-12">
                        <Heading variant="h2" className="mb-4">BGTS&apos;de Yaşam</Heading>
                        <Text className="text-slate-600 max-w-2xl mx-auto">
                            Sadece çalışmıyoruz; birlikte üretiyor, eğleniyor ve büyüyoruz. İşte ofisimizden ve ekibimizden kareler.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                        {/* Large item on the left */}
                        <div className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/culture/culture-2.jpg"
                                alt="BGTS Office Life"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">Birlikte Üretim Kültürü</span>
                            </div>
                        </div>

                        {/* Top right item 1 */}
                        <div className="relative rounded-2xl overflow-hidden group min-h-[200px]">
                            <Image
                                src="/images/culture/culture-3.jpg"
                                alt="BGTS Team Meeting"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Top right item 2 */}
                        <div className="relative rounded-2xl overflow-hidden group min-h-[200px]">
                            <Image
                                src="/images/culture/culture-5.jpg"
                                alt="Social Events"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Bottom right wide item */}
                        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group min-h-[200px]">
                            <Image
                                src="/images/culture/culture-6.jpg"
                                alt="Engineering Team"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">Global Mühendislik Ekibi</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Benefits */}
            <Section className="bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-center mb-16">Neden BGTS?</Heading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: BookOpen, title: "Sürekli Eğitim", desc: "Udemy, Pluralsight üyelikleri ve sertifika destekleri." },
                            { icon: Coffee, title: "Esnek Yan Haklar", desc: "Özel sağlık sigortası, yemek kartı ve spor desteği." },
                            { icon: Smile, title: "Mutlu Ofis", desc: "Ergonomik çalışma ortamı, playstation köşesi ve happy hour'lar." },
                            { icon: Target, title: "Kariyer Gelişimi", desc: "Net kariyer yolu ve düzenli performans geri bildirimleri." }
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <Heading variant="h4" className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</Heading>
                                <Text variant="small" className="text-slate-600">{benefit.desc}</Text>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Young Engineers Teaser */}
            <Section className="bg-slate-900 py-24 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <Container className="relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-bold text-sm tracking-wide mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        GENÇ YETENEKLER
                    </span>

                    <Heading variant="h2" className="text-white text-4xl md:text-5xl mb-6">
                        Geleceği Kodlamaya Hazır Mısın?
                    </Heading>

                    <Text className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        Sıradan bir staj veya iş başlangıcı değil. Gerçek projeler, modern teknolojiler ve sınırsız gelişim dünyasının kapılarını arala.
                    </Text>

                    <div className="flex justify-center">
                        <Link href="/young-engineers" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Programı İncele <Rocket className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* --- YOUNG ENGINEERS MERGED SECTION END --- */}

            {/* Life at BGTS / Why Join */}
            <Section className="bg-white py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-bold text-sm tracking-wide">
                                <Globe className="w-4 h-4" />
                                YAŞAM TARZI
                            </span>
                            <Heading variant="h2" className="text-slate-900 text-4xl leading-tight">
                                Sadece Bir İş Değil, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Tutku.</span>
                            </Heading>
                            <Text variant="lead" className="text-slate-600">
                                BGTS'de mühendislik, kod yazmaktan fazlasıdır. Birlikte öğrenir, birlikte eğlenir ve geleceği birlikte inşa ederiz.
                            </Text>

                            <div className="space-y-6 pt-4">
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Rocket className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-1">Hızlı Kariyer Yolu</h4>
                                        <p className="text-slate-600 leading-relaxed">Performans odaklı net ilerleme adımları ve düzenli geri bildirimlerle yerinde sayma, sürekli yüksel.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-violet-600 transition-colors duration-300">
                                        <Globe className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-1">Global Vizyon</h4>
                                        <p className="text-slate-600 leading-relaxed">Uluslararası standartlarda projeler ve dünya çapında teknolojilerle sınırlarını zorla.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                <div className="flex -space-x-4">
                                    {[2, 3, 5, 6].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white relative overflow-hidden shadow-sm">
                                            <Image src={`/images/culture/culture-${i}.jpg`} alt="Team" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-slate-900">+50 Genç Yetenek</p>
                                    <p className="text-slate-500">Seninle tanışmayı bekliyor.</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Right Side */}
                        <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 rotate-1 hover:rotate-0 transition-all duration-700 group border-8 border-white bg-slate-100">
                            <Image
                                src="/images/headers/kariyer-gelisim-firsatlari.jpg"
                                alt="Life at BGTS"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-10 left-10 right-10 text-white transform group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full" />
                                <p className="font-bold text-3xl mb-3">Ofisimizden Kareler</p>
                                <p className="text-slate-300 text-lg">Maslak, İstanbul — Teknoloji Üssü</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Testimonials */}
            <Section className="bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-center mb-12">Çalışanlarımız Ne Diyor?</Heading>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TestimonialCard
                            quote="BGTS'de çalışmak, sürekli öğrenmek ve gelişmek demek. Burada fikirlerinize değer veriliyor ve inisiyatif almanız destekleniyor."
                            author="Ayşe Yılmaz"
                            role="Senior Software Engineer - 3 Yıl"
                            rating={5}
                            color="purple"
                        />
                        <TestimonialCard
                            quote="Samimi ve destekleyici bir çalışma ortamı var. Hem profesyonel hem de kişisel gelişimim için harika bir yer."
                            author="Mehmet Demir"
                            role="DevOps Engineer - 1.5 Yıl"
                            rating={5}
                            color="blue"
                        />
                    </div>
                </Container>
            </Section>

            {/* General CTA / Contact */}
            <Section className="bg-slate-50 border-t border-slate-200">
                <Container className="text-center">
                    <Heading variant="h2" className="mb-6">Başka Bir Pozisyon mu Arıyorsunuz?</Heading>
                    <Text className="max-w-2xl mx-auto mb-8 text-slate-600">
                        Açık pozisyonlarımızı LinkedIn üzerinden takip edebilir veya genel başvuru için bize ulaşabilirsiniz.
                    </Text>
                    <Link href="https://linkedin.com" target="_blank">
                        <Button size="lg" variant="outline" className="gap-2">
                            LinkedIn'de Bizi Takip Edin <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </Container>
            </Section>
        </div >
    )
}
