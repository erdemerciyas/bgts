"use client"

import Hero from "@/components/ui/Hero"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import { GraduationCap, BookOpen, Heart, Users, Lightbulb, Target } from "lucide-react"
import Image from "next/image"

export default function SocialContributionPage() {
    return (
        <main>
            <Hero
                title="Toplumsal Katkı"
                subtitle="Geleceği şekillendiren yeteneklerin gelişimine ve topluma değer katmaya odaklanıyoruz."
                backgroundImage="/images/culture/culture-7.jpg"
            />

            {/* Intro Section */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <Text className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
                            BGTS olarak yalnızca teknoloji ve yetenek geliştirmeye değil, topluma kalıcı değer üretmeye de odaklanıyoruz.
                            Geleceği şekillendiren yeteneklerin gelişimini desteklerken, eşit fırsatlar yaratmayı ve sürdürülebilir etki sağlamayı önceliklendiriyoruz.
                        </Text>
                    </div>
                </Container>
            </Section>

            {/* Eğitim & Staj Section */}
            <Section id="education" className="bg-slate-50 scroll-mt-32">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
                                <GraduationCap size={32} />
                            </div>
                            <Heading variant="h2" className="mb-6">Eğitim & Staj</Heading>
                            <Text className="mb-6 text-lg text-slate-600">
                                Eğitim ve staj programlarımızla, gençlerin iş hayatına daha donanımlı ve özgüvenli adımlar atmasını destekliyoruz.
                            </Text>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-blue-100 p-1 rounded-full h-fit">
                                        <Lightbulb className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <Text className="text-slate-600">Öğrencilerin teorik bilgilerini pratikle buluşturabilecekleri öğrenme ortamları sunarız.</Text>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-blue-100 p-1 rounded-full h-fit">
                                        <Target className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <Text className="text-slate-600">Gerçek iş süreçlerini deneyimleyebilecekleri staj imkânları sağlarız.</Text>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-blue-100 p-1 rounded-full h-fit">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <Text className="text-slate-600">Genç yeteneklerin potansiyellerini keşfetmelerine ve kariyer yönlerini netleştirmelerine katkı sağlarız.</Text>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-white rounded-xl border border-blue-100 shadow-sm">
                                <Text className="font-medium text-blue-800">
                                    "Amacımız, gençlerin yalnızca bugüne değil geleceğe de hazır bireyler olarak yetişmelerine destek olmaktır."
                                </Text>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/culture/culture-3.jpg"
                                alt="Eğitim ve Staj"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Burs Programları Section */}
            <Section id="scholarships" className="bg-white scroll-mt-32">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/social/scholarship.png"
                                alt="Burs Programları"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
                                <BookOpen size={32} />
                            </div>
                            <Heading variant="h2" className="mb-6">Burs Programları</Heading>
                            <Text className="mb-6 text-lg text-slate-600">
                                Burs programlarımız, eğitim hayatını sürdürürken desteğe ihtiyaç duyan öğrencilerin yanında olmayı hedefler.
                            </Text>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-emerald-100 p-1 rounded-full h-fit">
                                        <Users className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <Text className="text-slate-600">Eğitimde fırsat eşitliğine katkı sağlamayı amaçlarız.</Text>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-emerald-100 p-1 rounded-full h-fit">
                                        <Target className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <Text className="text-slate-600">Maddi engellerin öğrenme yolculuğunun önüne geçmemesini hedefleriz.</Text>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-emerald-100 p-1 rounded-full h-fit">
                                        <Lightbulb className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <Text className="text-slate-600">Başarılı ve istekli öğrencilerin gelişimlerini sürdürülebilir şekilde destekleriz.</Text>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-emerald-100 shadow-sm">
                                <Text className="font-medium text-emerald-800">
                                    "Burs programlarını, yalnızca finansal destek değil; geleceğe yapılan uzun vadeli bir yatırım olarak görürüz."
                                </Text>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Sosyal Sorumluluk Section */}
            <Section id="responsibility" className="bg-slate-50 scroll-mt-32">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 mb-6">
                                <Heart size={32} />
                            </div>
                            <Heading variant="h2" className="mb-6">Sosyal Sorumluluk</Heading>
                            <Text className="mb-6 text-lg text-slate-600">
                                Toplumsal sorumluluk çalışmalarımız, sosyal fayda üretmeyi ve içinde bulunduğumuz ekosisteme katkı sağlamayı merkeze alır.
                            </Text>
                            <div className="grid gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <Heading variant="h4" className="mb-3 text-rose-700">Odak Alanlarımız</Heading>
                                    <Text className="text-slate-600">Eğitim, gençlik ve toplumsal gelişim odaklı projeleri kapsar.</Text>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <Heading variant="h4" className="mb-3 text-rose-700">Yaklaşımımız</Heading>
                                    <Text className="text-slate-600">Gönüllülük bilincini ve kolektif sorumluluk anlayışını destekler, uzun vadeli ve sürdürülebilir etki yaratmayı hedefleriz.</Text>
                                </div>
                            </div>
                            <div className="mt-8 p-6 bg-white rounded-xl border border-rose-100 shadow-sm">
                                <Text className="font-medium text-rose-800">
                                    "BGTS için sosyal sorumluluk, dönemsel projelerden öte; kurumsal kültürün doğal bir parçasıdır."
                                </Text>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/culture/culture-5.jpg"
                                alt="Sosyal Sorumluluk"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-slate-900 text-white text-center">
                <Container>
                    <Heading variant="h2" className="mb-6 text-white">Topluma Değer Üreten Bir Yaklaşım</Heading>
                    <Text className="text-slate-300 max-w-3xl mx-auto text-lg">
                        Toplumsal Katkı yaklaşımımız; insana yatırım yapan, gençleri güçlendiren ve sürdürülebilir fayda yaratan bir vizyonla hareket eder.
                    </Text>
                </Container>
            </Section>
        </main>
    )
}
