"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { FileText, ClipboardList, BarChart3, CheckCircle2, Settings, List, Shuffle, ShieldCheck, Phone, Zap } from "lucide-react"

export default function ItsmPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="ITSM as a Service"
                subtitle="BT operasyonlarınızı dünya standartlarında (ITIL) yönetin, izleyin ve sürekli iyileştirin."
                badge="MSP Hizmetleri"
                className="bg-teal-900"
                backgroundImage="/images/headers/msp/ITSM.png"
            />

            {/* Hizmet Genel Bakış */}
            <Section className="py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                Kurumsal IT Süreç Yönetimi
                            </Heading>
                            <Text variant="large" className="text-slate-600 mb-6">
                                Karmaşık BT süreçlerinizi sadeleştiriyoruz. ITSM hizmetlerimizle olay, problem ve değişim yönetimini
                                standartlaştırarak hizmet kalitenizi artırıyor ve maliyetlerinizi düşürüyoruz.
                            </Text>
                            <ul className="space-y-4">
                                {[
                                    "ITIL v4 Uyumlu Süreçler",
                                    "Merkezi Servis Masası (Service Desk)",
                                    "Otomatik İş Akışları ve Onay Mekanizmaları",
                                    "SLA Bazlı Hizmet Raporlama"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-teal-600" />
                                        </div>
                                        <Text className="text-slate-700 font-medium">{item}</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <ClipboardList className="w-8 h-8 text-teal-600 mb-4" />
                                <Heading variant="h4" className="text-slate-900 mb-2">Service Desk</Heading>
                                <Text className="text-slate-600 text-sm">Tek noktadan iletişim ve talep yönetimi.</Text>
                            </div>
                            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <Settings className="w-8 h-8 text-teal-600 mb-4" />
                                <Heading variant="h4" className="text-slate-900 mb-2">Incident Mgmt</Heading>
                                <Text className="text-slate-600 text-sm">Kesintilerin hızlı çözümü ve iş sürekliliği.</Text>
                            </div>
                            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <Shuffle className="w-8 h-8 text-teal-600 mb-4" />
                                <Heading variant="h4" className="text-slate-900 mb-2">Change Mgmt</Heading>
                                <Text className="text-slate-600 text-sm">Risk analizi ile kontrollü değişim yönetimi.</Text>
                            </div>
                            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <ShieldCheck className="w-8 h-8 text-teal-600 mb-4" />
                                <Heading variant="h4" className="text-slate-900 mb-2">Problem Mgmt</Heading>
                                <Text className="text-slate-600 text-sm">Kök sebep analizi ve kalıcı çözümler.</Text>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Danışmanlık Hizmetleri */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <div className="text-center mb-16">
                        <Heading variant="h2" className="text-slate-900 mb-4">ITSM Danışmanlık Hizmetleri</Heading>
                        <Text className="text-slate-600">Süreçlerinizi modernize etmeniz için uçtan uca rehberlik sunuyoruz.</Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <FileText className="w-6 h-6 text-indigo-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-4">ITIL Danışmanlığı</Heading>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></div>Süreç Tasarımı ve İyileştirme</li>
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></div>Olgunluk Analizi (Maturity Assessment)</li>
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></div>KPI ve Metrik Belirleme</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Settings className="w-6 h-6 text-blue-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-4">BSM Araç Kurulumu</Heading>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>ServiceNow, Jira Service Management kurulumu</li>
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>Workflow ve Süreç Dizaynı</li>
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>Service Catalog Oluşturma</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                                <List className="w-6 h-6 text-teal-600" />
                            </div>
                            <Heading variant="h3" className="text-slate-900 mb-4">CMDB Kurulumu</Heading>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>Varlık İlişkilendirme ve Haritalama</li>
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>Otomatik Keşif (Discovery) Entegrasyonu</li>
                                <li className="flex items-start gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></div>Veri Kalitesi ve Tutarlılığı</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Hizmet Paketleri */}
            <Section className="py-20">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Hizmet Paketleri</Heading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {/* Standard */}
                        <div className="border border-slate-200 rounded-3xl p-6 hover:border-teal-500 transition-colors flex flex-col">
                            <Heading variant="h4" className="text-slate-900 mb-2">Standard</Heading>
                            <Text className="text-slate-600 text-xs mb-4">Temel izleme ve destek.</Text>
                            <div className="space-y-2 mb-6 flex-1">
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> 8x5 Uzaktan Destek</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Temel Sistem İzleme</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Aylık Raporlama</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Yama Yönetimi</div>
                            </div>
                        </div>

                        {/* Professional */}
                        <div className="border border-teal-500 bg-teal-50/50 rounded-3xl p-6 relative flex flex-col">
                            <Heading variant="h4" className="text-slate-900 mb-2">Professional</Heading>
                            <Text className="text-slate-600 text-xs mb-4">Büyüyen işletmeler için.</Text>
                            <div className="space-y-2 mb-6 flex-1">
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> 7/24 Uzaktan Destek</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Gelişmiş Performans İzleme</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Haftalık Raporlama</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Güvenlik Taramaları</div>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="border border-slate-200 rounded-3xl p-6 hover:border-teal-500 transition-colors flex flex-col">
                            <Heading variant="h4" className="text-slate-900 mb-2">Enterprise</Heading>
                            <Text className="text-slate-600 text-xs mb-4">Tam kapsamlı yönetim.</Text>
                            <div className="space-y-2 mb-6 flex-1">
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> 7/24 Öncelikli Destek</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Dedike Mühendis</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Anlık Dashboard</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> DevOps & DR</div>
                            </div>
                        </div>

                        {/* ITSM Plus */}
                        <div className="border border-slate-200 rounded-3xl p-6 hover:border-teal-500 transition-colors flex flex-col">
                            <Heading variant="h4" className="text-slate-900 mb-2">ITSM Plus</Heading>
                            <Text className="text-slate-600 text-xs mb-4">Süreç odaklı yönetim.</Text>
                            <div className="space-y-2 mb-6 flex-1">
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> 7/24 Service Desk</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Sınırsız Çağrı Açma</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> ITIL Danışmanlığı</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Varlık Yönetimi</div>
                            </div>
                        </div>

                        {/* NOC Support */}
                        <div className="border border-slate-200 rounded-3xl p-6 hover:border-teal-500 transition-colors flex flex-col">
                            <Heading variant="h4" className="text-slate-900 mb-2">NOC Support</Heading>
                            <Text className="text-slate-600 text-xs mb-4">7/24 operasyon merkezi.</Text>
                            <div className="space-y-2 mb-6 flex-1">
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> 7/24 IVR Karşılama</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> ASA (Yanıt Süresi) Garantisi</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> L1 Problem Çözümü</div>
                                <div className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Eskalasyon Yönetimi</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
