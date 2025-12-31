"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CultureCard from "@/components/ui/CultureCard"
import TestimonialCard from "@/components/ui/TestimonialCard"
import { AccordionItem, AccordionGroup } from "@/components/ui/Accordion"
import { Users, GraduationCap, Briefcase, Zap, Heart, Target, Award, Building2, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function HRPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Kariyer", href: "/hr", icon: Briefcase }
                    ]}
                />

                <Hero
                    title="BGTS'de Kariyer"
                    subtitle="Açık iletişim, takım ruhu ve üretme heyecanı üzerine kurulu bir kültüre katılın."
                    badge="Bize Katılın"
                    align="left"
                    className="bg-indigo-900"
                    backgroundImage="https://images.unsplash.com/photo-1521791165422-a0954674710f?auto=format&fit=crop&q=80"
                />

                <div className="container mx-auto px-6 py-16">

                    {/* Culture Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold mb-10 text-center font-heading text-slate-900">Kültürümüz</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <CultureCard
                                title="Açık İletişim"
                                description="Şeffaf geri bildirim ve erişilebilir liderlik. Her fikir değerlidir ve her ses duyulur."
                                icon={MessageSquare}
                                color="blue"
                                delay={0}
                            />
                            <CultureCard
                                title="Çevik Takımlar"
                                description="Hızlı hareket eden, işbirlikçi squad yapıları. Esneklik ve adaptasyon yeteneği."
                                icon={Zap}
                                color="indigo"
                                delay={0.1}
                            />
                            <CultureCard
                                title="Hibrit Çalışma"
                                description="Ofis ve uzaktan çalışma için esnek modeller. İş-yaşam dengesini önemsiyoruz."
                                icon={Briefcase}
                                color="slate"
                                delay={0.2}
                            />
                            <CultureCard
                                title="Sürekli Öğrenme"
                                description="Eğitimlere ve sertifikalara sınırsız erişim. Gelişim bir yaşam tarzıdır."
                                icon={GraduationCap}
                                color="blue"
                                delay={0.3}
                            />
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                                Çalışanlara Sunduğumuz
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Profesyonel gelişiminiz ve kişisel refahınız için kapsamlı faydalar
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300">
                                <GraduationCap className="w-12 h-12 text-indigo-600 mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Eğitim Bütçesi</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Yıllık eğitim bütçesi ile sertifikalar, konferanslar ve kurslar için tam destek.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                                <Heart className="w-12 h-12 text-blue-600 mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Sağlık Sigortası</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Kapsamlı sağlık sigortası ve aile sağlığı programları ile refahınızı güvence altına alıyoruz.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300">
                                <Target className="w-12 h-12 text-indigo-600 mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Kariyer Planlama</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Net kariyer yolları ve düzenli performans değerlendirmeleri ile şeffaf ilerleme.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border-2 border-slate-200 hover:shadow-2xl transition-all duration-300">
                                <Zap className="w-12 h-12 text-slate-600 mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Esnek Çalışma</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Hibrit çalışma modelleri ve esnek saatler ile iş-yaşam dengesi.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                                <Award className="w-12 h-12 text-blue-600 mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Performans Ödülleri</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Başarılarınızı tanıyor ve düzenli ödüller ile motivasyonu yüksek tutuyoruz.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300">
                                <Users className="w-12 h-12 text-indigo-600 mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Takım Etkinlikleri</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Düzenli takım etkinlikleri, sosyal aktiviteler ve şirket tatilleri.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Young Talent Programs */}
                    <ContentSection
                        title="Genç Yetenek Programları"
                        badge="Geleceğin Liderleri"
                        content={
                            <div className="space-y-6">
                                <p>Kariyerinin başındaysan, seni hızla geliştirecek teknik programlarımızla teknoloji dünyasına güçlü bir adım atabilirsin.</p>

                                <AccordionGroup>
                                    <AccordionItem title="IT Genç Yetenek Programı">
                                        <div className="space-y-3">
                                            <p>Java, Python, .NET, React ve Bulut teknolojilerini kapsayan kapsamlı bir eğitim kampı. Deneyimli mentorlarla gerçek iş projelerinde uygulamalı deneyim kazanın.</p>
                                            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                                                <li>Uygulamalı projeler</li>
                                                <li>Kıdemli uzmanlardan mentorluk</li>
                                                <li>Tam zamanlı rollere geçiş imkanı</li>
                                                <li>Competitive maaş ve faydalar</li>
                                            </ul>
                                        </div>
                                    </AccordionItem>
                                    <AccordionItem title="Uzun Dönem & Yaz Stajları">
                                        <div className="space-y-3">
                                            <p>Üniversite öğrencileri için pratik deneyim kazanma, ekip içinde sorumluluk alma ve iş hayatına erken adım atma fırsatı. Teslimat ekiplerimizin aktif bir parçası olun.</p>
                                            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                                                <li>Gerçek proje deneyimi</li>
                                                <li>Mentor desteği</li>
                                                <li>Esnek çalışma saatleri</li>
                                                <li>Staj maaşı</li>
                                            </ul>
                                        </div>
                                    </AccordionItem>
                                    <AccordionItem title="Bootcamp Programları">
                                        <div className="space-y-3">
                                            <p>Yazılım, Veri Bilimi ve Bulut çözümleri alanlarında kısa sürede büyük ilerleme sağlayan, belirli becerilere yönelik yoğun eğitim yolları.</p>
                                            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                                                <li>Yoğun, uygulamalı eğitim</li>
                                                <li>Sektör uzmanları tarafından eğitim</li>
                                                <li>Sertifika fırsatları</li>
                                                <li>İşe yerleşme desteği</li>
                                            </ul>
                                        </div>
                                    </AccordionItem>
                                </AccordionGroup>
                            </div>
                        }
                        className="bg-transparent py-0"
                        image={
                            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                                    alt="Young Talent"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 flex items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <GraduationCap className="w-20 h-20 mx-auto mb-6" />
                                        <h4 className="text-3xl font-bold mb-2">Geleceğin Mühendisleri</h4>
                                        <p className="text-xl">Seninle birlikte büyüyoruz</p>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Career Paths */}
                    <ContentSection
                        reverse
                        title="Kariyer Yolları"
                        badge="Gelişim"
                        content={
                            <div className="space-y-4">
                                <p>Her çalışanın yolculuğu kendine özgüdür. Biz, hem <strong>Teknik</strong> hem de <strong>Yönetsel</strong> kariyer yolları sunuyoruz.</p>
                                <AccordionGroup>
                                    <AccordionItem title="Teknik Yol">
                                        <div className="space-y-3">
                                            <p>İnsan yönetimine geçiş yapmadan; Mimari, DevOps veya uzmanlaşmış geliştirme alanlarında derinlemesine uzmanlaşın.</p>
                                            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                                                <li>Junior → Mid → Senior → Lead → Principal</li>
                                                <li>Uzmanlık alanları seçme özgürlüğü</li>
                                                <li>Teknik liderlik fırsatları</li>
                                                <li>Global proje deneyimi</li>
                                            </ul>
                                        </div>
                                    </AccordionItem>
                                    <AccordionItem title="Yönetsel Yol">
                                        <div className="space-y-3">
                                            <p>Liderlik gelişim programlarımız aracılığıyla takım yönetimi, strateji ve organizasyonel büyüme konularına odaklanın.</p>
                                            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                                                <li>Team Lead → Engineering Manager → Director</li>
                                                <li>Liderlik eğitimleri</li>
                                                <li>Stratejik karar alma yetkileri</li>
                                                <li>Çapraz fonksiyonel projeler</li>
                                            </ul>
                                        </div>
                                    </AccordionItem>
                                </AccordionGroup>
                            </div>
                        }
                        image={
                            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-10 h-full flex items-center justify-center rounded-2xl text-white">
                                <div className="text-center">
                                    <Target className="w-24 h-24 mx-auto mb-6 opacity-80" />
                                    <h4 className="text-3xl font-bold mb-4">Şeffaf İlerleme</h4>
                                    <p className="text-lg text-indigo-100">Net KPI'lar ve düzenli geri bildirim döngüleri</p>
                                </div>
                            </div>
                        }
                    />

                    {/* Testimonials Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                                Ekip Arkadaşlarımız Ne Diyor?
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                BGTS ekibinin bir parçası olan mühendislerimizin deneyimleri
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <TestimonialCard
                                quote="BGTS'de kariyerime başladığımdan beri, sürekli öğrenme ve gelişim fırsatları buldum. Mentorluk programı gerçekten hayat değiştiriyor."
                                author="Ahmet Yılmaz"
                                role="Senior Software Engineer"
                                rating={5}
                                color="blue"
                                delay={0}
                            />
                            <TestimonialCard
                                quote="Genç yetenek programı sayesinde üniversiteden mezun olur olmaz iş hayatına atabildim. Gerçek projelerde çalışmak inanılmaz bir deneyim."
                                author="Zeynep Demir"
                                role="Software Engineer"
                                rating={5}
                                color="slate"
                                delay={0.1}
                            />
                            <TestimonialCard
                                quote="Buradaki çalışma kültürü gerçekten özel. Herkes birbirini destekliyor ve birlikte başarıyoruz. Hibrit çalışma modeli de çok iyi."
                                author="Mehmet Kaya"
                                role="DevOps Engineer"
                                rating={5}
                                color="indigo"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    {/* Office Culture Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                                Çalışma Ortamımız
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Modern ofislerimiz, ekip aktiviteleri ve çalışma kültürümüz
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-3757708ee34b?auto=format&fit=crop&q=80"
                                    alt="Office Environment"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h4 className="text-2xl font-bold mb-2">Modern Ofisler</h4>
                                        <p className="text-blue-100">Rahat ve verimli çalışma alanları</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Team Collaboration"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h4 className="text-2xl font-bold mb-2">Takım Ruhu</h4>
                                        <p className="text-indigo-100">Birlikte başarıyoruz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
