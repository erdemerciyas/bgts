"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { AccordionItem, AccordionGroup } from "@/components/ui/Accordion"
import { Users, GraduationCap, Briefcase, Zap } from "lucide-react"

export default function HRPage() {
    return (
        <>
            <Hero
                title="BGTS'de Kariyer"
                subtitle="Açık iletişim, takım ruhu ve üretme heyecanı üzerine kurulu bir kültüre katılın."
                badge="Bize Katılın"
                align="left"
                className="bg-gradient-to-br from-slate-50 to-blue-50"
            />

            <div className="container mx-auto px-6 py-16">

                {/* Culture Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-10 text-center font-heading text-slate-900">Kültürümüz</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Users, title: "Açık İletişim", desc: "Şeffaf geri bildirim ve erişilebilir liderlik." },
                            { icon: Zap, title: "Çevik Takımlar", desc: "Hızlı hareket eden, işbirlikçi squad yapıları." },
                            { icon: Briefcase, title: "Hibrit Çalışma", desc: "Ofis ve uzaktan çalışma için esnek modeller." },
                            { icon: GraduationCap, title: "Sürekli Öğrenme", desc: "Eğitimlere ve sertifikalara sınırsız erişim." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-center">
                                <item.icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
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
                                        </ul>
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="Uzun Dönem & Yaz Stajları">
                                    <p>Üniversite öğrencileri için pratik deneyim kazanma, ekip içinde sorumluluk alma ve iş hayatına erken adım atma fırsatı. Teslimat ekiplerimizin aktif bir parçası olun.</p>
                                </AccordionItem>
                                <AccordionItem title="Bootcamp Programları">
                                    <p>Yazılım, Veri Bilimi ve Bulut çözümleri alanlarında kısa sürede büyük ilerleme sağlayan, belirli becerilere yönelik yoğun eğitim yolları.</p>
                                </AccordionItem>
                            </AccordionGroup>
                        </div>
                    }
                    className="bg-transparent py-0"
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
                                    İnsan yönetimine geçiş yapmadan; Mimari, DevOps veya uzmanlaşmış geliştirme alanlarında derinlemesine uzmanlaşın.
                                </AccordionItem>
                                <AccordionItem title="Yönetsel Yol">
                                    Liderlik gelişim programlarımız aracılığıyla takım yönetimi, strateji ve organizasyonel büyüme konularına odaklanın.
                                </AccordionItem>
                            </AccordionGroup>
                        </div>
                    }
                    image={
                        <div className="bg-slate-100 w-full h-full flex flex-col items-center justify-center p-8 text-center rounded-2xl">
                            <div className="text-4xl mb-4">🚀</div>
                            <h4 className="text-xl font-bold text-slate-900">Şeffaf İlerleme</h4>
                            <p className="text-sm mt-2 text-slate-500">Net KPI'lar ve düzenli geri bildirim döngüleri.</p>
                        </div>
                    }
                />

            </div>
        </>
    )
}
