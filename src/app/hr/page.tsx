"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CultureCard from "@/components/ui/CultureCard"
import TestimonialCard from "@/components/ui/TestimonialCard"
import { Users, Heart, Star, Target, Zap, Smile, BookOpen, Coffee, Award, PlayCircle } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

export default function HRPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Kurumsal", href: "/about", icon: Users },
                        { label: "İnsan Kaynakları", href: "/hr", icon: Heart }
                    ]}
                />

                <Hero
                    title="Yeteneklerinize Değer Veriyoruz"
                    subtitle="Tutkulu, yenilikçi ve sürekli öğrenen bir ekibin parçası olun. Kariyerinizi bizimle şekillendirin."
                    badge="Kariyer"
                    className="bg-rose-600"
                    backgroundImage="/images/hr/hr-hero.png"
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
                            />
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

                {/* Young Talent */}
                <ContentSection
                    title="Genç Yetenek Programı"
                    badge="Gelecek Burada"
                    content={
                        <div className="space-y-6">
                            <Text variant="large">
                                Üniversite öğrencileri ve yeni mezunlar için tasarladığımız <strong className="text-rose-600">BGTS Future Stars</strong> programı ile sektöre güçlü bir başlangıç yapın.
                            </Text>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <Text className="text-slate-700">Gerçek projelerde deneyim</Text>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <Text className="text-slate-700">Mentorluk desteği</Text>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <Text className="text-slate-700">Teknik ve soft-skill eğitimleri</Text>
                                </li>
                            </ul>
                            <button className="bg-rose-600 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/30">
                                Başvur
                            </button>
                        </div>
                    }
                    image={
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                                alt="Young Talent"
                                fill
                                className="object-cover"
                            />
                        </div>
                    }
                />

                {/* Testimonials */}
                <Section>
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
            </div>
        </>
    )
}
