"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import { AccordionItem, AccordionGroup } from "@/components/ui/Accordion"
import { Shield, Target, Cpu, Lock, CheckCircle2, Award, FileCheck, Zap } from "lucide-react"

export default function DefensePage() {
    return (
        <>
            <div className="bg-white min-h-screen text-slate-900">
                <Breadcrumb
                    items={[
                        { label: "Sektörler", href: "/industries", icon: Shield },
                        { label: "Savunma Sanayi", href: "/industries/defense", icon: Target }
                    ]}
                />

                <Hero
                    title="Savunma Sanayi Çözümleri"
                    subtitle="Kritik görev operasyonları için güvenilir, yüksek performanslı ve güvenli yazılım çözümleri."
                    badge="Savunma & Havacılık"
                    className="bg-blue-950"
                    backgroundImage="https://images.unsplash.com/photo-1596324263156-c73ae8449c0d?auto=format&fit=crop&q=80"
                    pattern="grid"
                />

                <div className="container mx-auto px-6 py-20">
                    {/* Standards Compliance */}
                    <div className="grid md:grid-cols-4 gap-6 mb-24">
                        <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center group">
                            <FileCheck className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">IEEE 12207</h4>
                            <p className="text-slate-500 text-sm">Software Life Cycle</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center group">
                            <FileCheck className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">IEEE 15288</h4>
                            <p className="text-slate-500 text-sm">Systems Engineering</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center group">
                            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">ISO 29119</h4>
                            <p className="text-slate-500 text-sm">Software Testing</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center group">
                            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">ISO 27001</h4>
                            <p className="text-slate-500 text-sm">Information Security</p>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <ContentSection
                        title="Kritik Görev Mühendisliği"
                        badge="Genel Bakış"
                        content={
                            <div className="space-y-6 text-lg">
                                <p className="text-slate-600">
                                    Savunma projelerinde öncelikli hedefimiz, güvenilir, yüksek performanslı ve güvenli yazılım çözümleri sunmaktır. Gömülü yazılımlardan web ve bulut tabanlı sistemlere kadar tüm geliştirme yaşam döngüsünü yöneterek, kritik görev yazılımlarının sahada doğru, hızlı ve hatasız çalışmasını sağlıyoruz.
                                </p>
                                <p className="text-slate-600">
                                    Çalışmalarımızı <strong className="text-blue-700">IEEE 12207, 15288 ve 42020</strong> standartlarına tam uyumlu olarak yürütüyoruz. Bu sayede gereksinim analizinden mimari tasarımına, geliştirme ve teste kadar her adımda izlenebilirlik ve doğrulama sağlıyoruz.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                        <Target className="w-8 h-8 text-blue-600 mb-3" />
                                        <h4 className="font-bold text-slate-900 mb-2">Görev Odaklı</h4>
                                        <p className="text-slate-500 text-sm">Kritik görev sistemleri için özel çözümler</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                        <Lock className="w-8 h-8 text-blue-600 mb-3" />
                                        <h4 className="font-bold text-slate-900 mb-2">Güvenlik Öncelikli</h4>
                                        <p className="text-slate-500 text-sm">Askeri güvenlik standartlarına uyum</p>
                                    </div>
                                </div>
                            </div>
                        }
                        image={
                            <div className="bg-slate-50 text-slate-400 p-10 h-full flex flex-col justify-center items-center rounded-2xl border border-slate-200">
                                <Shield className="w-32 h-32 mb-6 text-slate-300" />
                                <h4 className="text-2xl font-bold mb-2 text-slate-400">Kritik Görev</h4>
                                <p className="text-center text-slate-400">Güvenilir & Hızlı</p>
                            </div>
                        }
                    />

                    {/* Detailed Capabilities */}
                    <div className="bg-slate-50 py-20 mb-24 rounded-3xl border border-slate-100">
                        <h2 className="text-3xl font-bold mb-10 text-center font-heading text-slate-900">Teknik Kapasiteler & Standartlar</h2>
                        <div className="max-w-4xl mx-auto px-6">
                            <AccordionGroup>
                                <AccordionItem title="C4I & Simülasyon Yazılımları">
                                    <div className="space-y-4">
                                        <p className="text-slate-700"><strong className="text-slate-900">Komuta & Kontrol:</strong> Gerçek zamanlı veri işleme, sensör füzyonu, taktik veri linkleri ve görev planlama fonksiyonları.</p>
                                        <p className="text-slate-700"><strong className="text-slate-900">Simülasyon:</strong> Davranış motoru geliştirme, modelleme ve eğitim senaryosu oluşturma.</p>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 mt-2">
                                            <Target className="w-4 h-4" /> <span>Standartlaştırılmış doğrulama süreçleri.</span>
                                        </div>
                                    </div>
                                </AccordionItem>

                                <AccordionItem title="Gömülü Sistemler & Güvenlik">
                                    <div className="space-y-4">
                                        <p className="text-slate-700">Düşük seviye sürücülerin, kontrol yazılımlarının ve RTOS/FPGA tabanlı sistemlerin geliştirilmesi.</p>
                                        <p className="text-slate-700"><strong className="text-slate-900">Güvenli Kodlama:</strong> OWASP ve askeri güvenlik politikalarına uyum. Statik/Dinamik kod analizi ve zafiyet taraması.</p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-white p-4 rounded-lg border border-slate-200">
                                                <Cpu className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">RTOS</h5>
                                                <p className="text-xs text-slate-500">Real-time OS</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-slate-200">
                                                <Lock className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">Secure Coding</h5>
                                                <p className="text-xs text-slate-500">Static analysis</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>

                                <AccordionItem title="İş Analizi & CONOPS">
                                    <div className="space-y-4">
                                        <p className="text-slate-700">Paydaş ihtiyaçlarından kavramsal tasarıma kadar kapsamlı analiz.</p>
                                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                            <li><strong className="text-slate-900">Görev Analizi:</strong> IIBA uyumlu metodolojiler.</li>
                                            <li><strong className="text-slate-900">Süreç Modelleme:</strong> BPMN, UML, SysML, ArchiMate.</li>
                                            <li><strong className="text-slate-900">CONOPS:</strong> Ortak anlayış için operasyonel konsept dokümantasyonu.</li>
                                        </ul>
                                    </div>
                                </AccordionItem>

                                <AccordionItem title="Test & Doğrulama (V-Model)">
                                    <div className="space-y-4">
                                        <p className="text-slate-700">Hizmetlerimiz <strong className="text-slate-900">ISO 29119 ve IEEE 829</strong> standartlarına göre tasarlanmıştır.</p>
                                        <p className="text-slate-700">Fonksiyonel testler, Sistem Entegrasyonu, Otomasyon ve saha dayanıklığı için Yük/Stres testleri.</p>
                                        <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                                            <div className="flex-1 min-w-[140px] bg-white p-4 rounded-lg border border-slate-200">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">Unit Tests</h5>
                                                <p className="text-xs text-slate-500">Component level</p>
                                            </div>
                                            <div className="flex-1 min-w-[140px] bg-white p-4 rounded-lg border border-slate-200">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">Integration</h5>
                                                <p className="text-xs text-slate-500">System level</p>
                                            </div>
                                            <div className="flex-1 min-w-[140px] bg-white p-4 rounded-lg border border-slate-200">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">System Tests</h5>
                                                <p className="text-xs text-slate-500">End-to-end</p>
                                            </div>
                                            <div className="flex-1 min-w-[140px] bg-white p-4 rounded-lg border border-slate-200">
                                                <CheckCircle2 className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">Stress Tests</h5>
                                                <p className="text-xs text-slate-500">High load</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>

                                <AccordionItem title="Savunma için DevOps">
                                    <div className="space-y-4">
                                        <p className="text-slate-700">Air-gapped veya yüksek güvenlikli ortamlarla uyumlu Güvenli CI/CD boru hatları.</p>
                                        <p className="text-slate-700">Jenkins/GitLab entegrasyonu, ölçeklenebilir mikro servisler için Kubernetes orkestrasyonu ve otomatik test kapıları.</p>
                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-4">
                                            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <Zap className="w-5 h-5 text-blue-600" /> Güvenli DevOps Pipeline
                                            </h5>
                                            <div className="space-y-3 text-sm text-slate-600">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                    <span>Code → Build → Test → Deploy</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                    <span>Automated security scanning</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                    <span>Compliance checks</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>

                                <AccordionItem title="BT Altyapısı & Veri Merkezi">
                                    <div className="space-y-4">
                                        <p className="text-slate-700">Güvenli ağlar (LAN/WAN), sunucu/depolama sistemleri ve felaket kurtarma planlarının tasarımı ve yönetimi.</p>
                                        <p className="text-slate-700"><strong className="text-slate-900">ISO 20000 ve ISO 27001</strong> uyumlu yönetilen hizmetler.</p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-white p-4 rounded-lg border border-slate-200">
                                                <Cpu className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">Secure Networks</h5>
                                                <p className="text-xs text-slate-500">LAN/WAN/VLAN</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-slate-200">
                                                <Shield className="w-6 h-6 text-blue-600 mb-2" />
                                                <h5 className="font-bold text-slate-900 text-sm">Data Center</h5>
                                                <p className="text-xs text-slate-500">Tier 3 certified</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                            </AccordionGroup>
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 p-8 rounded-2xl border border-indigo-700 hover:shadow-2xl transition-all duration-300 text-white shadow-lg">
                            <Target className="w-12 h-12 text-blue-300 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Kritik Görev Odaklı</h3>
                            <p className="text-blue-100 leading-relaxed">
                                Savunma standartlarına tam uyumlu, güvenilir ve hatasız sistemler.
                            </p>
                            <ul className="space-y-2 mt-4 text-sm text-blue-200">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-blue-300" />
                                    <span>IEEE 12207/15288 uyumlu</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-blue-300" />
                                    <span>ISO 29119 test standartları</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:shadow-2xl transition-all duration-300 text-white shadow-lg">
                            <Lock className="w-12 h-12 text-slate-300 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Güvenlik Öncelikli</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Askeri güvenlik standartlarına uygun, güvenli yazılım geliştirme süreçleri.
                            </p>
                            <ul className="space-y-2 mt-4 text-sm text-slate-400">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-slate-500" />
                                    <span>ISO 27001 uyumlu</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-slate-500" />
                                    <span>OWASP güvenlik standartları</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl border border-blue-500 hover:shadow-2xl transition-all duration-300 text-white shadow-lg">
                            <Award className="w-12 h-12 text-indigo-200 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Kalite Sertifikalı</h3>
                            <p className="text-indigo-100 leading-relaxed">
                                Uluslararası standartlara tam uyumlu, kalite odaklı süreçler.
                            </p>
                            <ul className="space-y-2 mt-4 text-sm text-indigo-100">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-200" />
                                    <span>ISO 20000 ITSM</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-200" />
                                    <span>ISO 27001 ISMS</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
