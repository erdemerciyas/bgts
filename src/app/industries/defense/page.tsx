"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { AccordionItem, AccordionGroup } from "@/components/ui/Accordion"
import { Shield, Target } from "lucide-react"

export default function DefensePage() {
    return (
        <>
            <Hero
                title="Savunma Sanayi Çözümleri"
                subtitle="Kritik görev operasyonları için güvenilir, yüksek performanslı ve güvenli yazılım çözümleri."
                badge="Savunma & Havacılık"
                className="bg-slate-900 text-white"
                pattern="grid"
            />

            {/* Summary Section */}
            <ContentSection
                title="Kritik Görev Mühendisliği"
                badge="Genel Bakış"
                content={
                    <div className="space-y-4 text-lg">
                        <p>
                            Savunma projelerinde öncelikli hedefimiz, güvenilir, yüksek performanslı ve güvenli yazılım çözümleri sunmaktır. Gömülü yazılımlardan web ve bulut tabanlı sistemlere kadar tüm geliştirme yaşam döngüsünü yöneterek, kritik görev yazılımlarının sahada doğru, hızlı ve hatasız çalışmasını sağlıyoruz.
                        </p>
                        <p>
                            Çalışmalarımızı <strong>IEEE 12207, 15288 ve 42020</strong> standartlarına tam uyumlu olarak yürütüyoruz. Bu sayede gereksinim analizinden mimari tasarıma, geliştirme ve teste kadar her adımda izlenebilirlik ve doğrulama sağlıyoruz.
                        </p>
                    </div>
                }
                image={
                    <div className="h-full flex items-center justify-center bg-slate-800 text-slate-400 p-10 rounded-2xl border border-slate-700">
                        <Shield className="w-32 h-32" />
                    </div>
                }
            />

            {/* Detailed Capabilities (Accordions) */}
            <div className="container mx-auto px-6 py-20 bg-slate-50">
                <h2 className="text-3xl font-bold mb-10 text-center font-heading text-slate-900">Teknik Kabiliyetler & Standartlar</h2>

                <div className="max-w-4xl mx-auto">
                    <AccordionGroup>
                        <AccordionItem title="C4I & Simülasyon Yazılımları">
                            <div className="space-y-4">
                                <p><strong>Komuta & Kontrol:</strong> Gerçek zamanlı veri işleme, sensör füzyonu, taktik veri linkleri ve görev planlama fonksiyonları.</p>
                                <p><strong>Simülasyon:</strong> Davranış motoru geliştirme, modelleme ve eğitim senaryosu oluşturma.</p>
                                <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                                    <Target className="w-4 h-4" /> <span>Standartlaştırılmış doğrulama süreçleri.</span>
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Gömülü Sistemler & Güvenlik">
                            <div className="space-y-4">
                                <p>Düşük seviye sürücülerin, kontrol yazılımlarının ve RTOS/FPGA tabanlı sistemlerin geliştirilmesi.</p>
                                <p><strong>Güvenli Kodlama:</strong> OWASP ve askeri güvenlik politikalarına uyum. Statik/Dinamik kod analizi ve zafiyet taraması.</p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="İş Analizi & CONOPS">
                            <div className="space-y-4">
                                <p>Paydaş ihtiyaçlarından kavramsal tasarıma kadar kapsamlı analiz.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Görev Analizi:</strong> IIBA uyumlu metodolojiler.</li>
                                    <li><strong>Süreç Modelleme:</strong> BPMN, UML, SysML, ArchiMate.</li>
                                    <li><strong>CONOPS:</strong> Ortak anlayış için operasyonel konsept dokümantasyonu.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Test & Doğrulama (V-Model)">
                            <div className="space-y-4">
                                <p>Hizmetlerimiz <strong>ISO 29119 ve IEEE 829</strong> standartlarına göre tasarlanmıştır.</p>
                                <p>Fonksiyonel testler, Sistem Entegrasyonu, Otomasyon ve saha dayanıklılığı için Yük/Stres testleri.</p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Savunma için DevOps">
                            <div className="space-y-4">
                                <p>Air-gapped veya yüksek güvenlikli ortamlarla uyumlu Güvenli CI/CD boru hatları.</p>
                                <p>Jenkins/GitLab entegrasyonu, ölçeklenebilir mikro servisler için Kubernetes orkestrasyonu ve otomatik test kapıları.</p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="BT Altyapısı & Veri Merkezi">
                            <div className="space-y-4">
                                <p>Güvenli ağlar (LAN/WAN), sunucu/depolama sistemleri ve felaket kurtarma planlarının tasarımı ve yönetimi.</p>
                                <p><strong>ISO 20000 ve ISO 27001</strong> uyumlu yönetilen hizmetler.</p>
                            </div>
                        </AccordionItem>
                    </AccordionGroup>
                </div>
            </div>
        </>
    )
}
