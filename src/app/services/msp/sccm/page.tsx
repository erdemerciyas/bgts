"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Database, RefreshCw, LayoutGrid, ShieldAlert, Activity, Cpu, CheckCircle2, AppWindow } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/AccordionComponent"

export default function SccmPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="SCCM & SRE Hizmetleri"
                subtitle="Sıfır Dokunuşlu İstemci Yönetimi. IT operasyonlarınızı yangın söndürmekten, yangın önlemeye taşıyoruz."

                className="bg-cyan-900"
                backgroundImage="/images/headers/msp/SCCM-SRE.png"
            />

            {/* Reaktiften Proaktif Yapıya Dönüşüm */}
            <Section className="py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                Reaktiften Proaktif Yapıya Dönüşüm
                            </Heading>
                            <Text variant="large" className="text-slate-600 mb-8">
                                Geleneksel "bozulunca düzelt" yaklaşımını terk edin. Modern SRE disiplinleri ile sorunları
                                kullanıcılarınız fark etmeden tespit edip çözüyoruz.
                            </Text>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                    <div className="w-2 h-full bg-red-500 rounded-full"></div>
                                    <div>
                                        <Heading variant="h4" className="text-red-900 mb-1">Geleneksel (Reaktif)</Heading>
                                        <Text className="text-red-700 text-sm">Manuel yamalar, kullanıcı şikayetiyle başlayan süreçler, düşük görünürlük.</Text>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                                    <div className="w-2 h-full bg-green-500 rounded-full"></div>
                                    <div>
                                        <Heading variant="h4" className="text-green-900 mb-1">Modern (Proaktif)</Heading>
                                        <Text className="text-green-700 text-sm">Otonom iyileştirme, proaktif alarm, tam envanter hakimiyeti ve sıfır dokunuş.</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-3xl text-white">
                            <Heading variant="h3" className="text-white mb-6">Operasyonun Röntgenini Çekiyoruz</Heading>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <ShieldAlert className="w-6 h-6 text-cyan-400 mb-2" />
                                    <div className="font-bold text-sm">Gelişmiş Zafiyet Analizi</div>
                                    <div className="text-xs text-slate-300 mt-1">34,000+ nokta taraması</div>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <Activity className="w-6 h-6 text-cyan-400 mb-2" />
                                    <div className="font-bold text-sm">Ajan Sağlığı</div>
                                    <div className="text-xs text-slate-300 mt-1">%97+ başarı oranı</div>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <Cpu className="w-6 h-6 text-cyan-400 mb-2" />
                                    <div className="font-bold text-sm">Donanım Uyumluluğu</div>
                                    <div className="text-xs text-slate-300 mt-1">BSoD analizi</div>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <LayoutGrid className="w-6 h-6 text-cyan-400 mb-2" />
                                    <div className="font-bold text-sm">Lisans Yönetimi</div>
                                    <div className="text-xs text-slate-300 mt-1">Gereksiz maliyet önleme</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Hizmet Detayları */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Gelişmiş Yönetim Yetkinlikleri</Heading>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Heading variant="h4" className="text-slate-900 mb-4 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-cyan-600" /> Zafiyet Analizi
                            </Heading>
                            <Text className="text-slate-600 text-sm mb-4">
                                Sadece yama değil, gerçek bir risk yönetimi. CVE tabanlı analizlerle risk yüzeyinizi anlık ölçümlüyoruz.
                            </Text>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• 3. parti yazılım risk analizi (.zip, Zoom vs.)</li>
                                <li>• Aylık zafiyet azaltma trend takibi</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Heading variant="h4" className="text-slate-900 mb-4 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-cyan-600" /> Ajan Sağlığı
                            </Heading>
                            <Text className="text-slate-600 text-sm mb-4">
                                Güvenlik yatırımlarınızın (Qualys, Cortex XDR, DLP) sahada gerçekten çalışıp çalışmadığını denetliyoruz.
                            </Text>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• %97.71 Qualys görünürlüğü</li>
                                <li>• %95.75 Cortex XDR aktifliği</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Heading variant="h4" className="text-slate-900 mb-4 flex items-center gap-2">
                                <AppWindow className="w-5 h-5 text-cyan-600" /> Lisans Yönetimi
                            </Heading>
                            <Text className="text-slate-600 text-sm mb-4">
                                Office 365, Adobe gibi kritik uygulamaların kullanım ve güncellik durumlarını yönetiyoruz.
                            </Text>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• EOL (End of Life) ürün tespiti</li>
                                <li>• Lisans verimlilik analizi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-cyan-900 rounded-3xl p-12 text-white">
                        <Heading variant="h3" className="text-white mb-8 text-center">Teknoloji Yığınımız (SRE Stack)</Heading>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="font-bold text-cyan-200 mb-3">Modern Workplace</div>
                                <div className="text-sm text-white/80">Microsoft Intune<br />Autopilot<br />SCCM (MECM)</div>
                            </div>
                            <div>
                                <div className="font-bold text-cyan-200 mb-3">Apple & Mobile</div>
                                <div className="text-sm text-white/80">Jamf Pro<br />Apple Business Mgr.<br />Samsung Knox</div>
                            </div>
                            <div>
                                <div className="font-bold text-cyan-200 mb-3">Monitoring</div>
                                <div className="text-sm text-white/80">Grafana<br />Prometheus<br />Splunk / ELK</div>
                            </div>
                            <div>
                                <div className="font-bold text-cyan-200 mb-3">Service Mgmt</div>
                                <div className="text-sm text-white/80">Jira SM<br />ServiceNow<br />ManageEngine</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Hizmet Paketleri */}
            <Section className="py-20">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Hizmet Paketleri</Heading>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Destek */}
                        <div className="border border-slate-200 rounded-3xl p-8 hover:border-cyan-500 transition-colors">
                            <Heading variant="h3" className="text-slate-900 mb-2">Destek</Heading>
                            <Text className="text-slate-600 text-sm mb-6">Temel SRE ve İstemci Yönetimi.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> 8x5 Uzaktan Destek</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Yama Yönetimi</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Temel Antivirüs Yönetimi</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> MDM / Intune Yönetimi</div>
                            </div>
                        </div>

                        {/* Yönetim */}
                        <div className="border-2 border-cyan-500 rounded-3xl p-8 relative shadow-xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold">Popüler</div>
                            <Heading variant="h3" className="text-slate-900 mb-2">Yönetim</Heading>
                            <Text className="text-slate-600 text-sm mb-6">Kapsamlı operasyonel yönetim.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Intune & Autopilot Kurulumu</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Yazılım Dağıtımı</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Envanter Yönetimi</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> 7/24 SRE Operasyonu</div>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="border border-slate-200 rounded-3xl p-8 hover:border-cyan-500 transition-colors">
                            <Heading variant="h3" className="text-slate-900 mb-2">Enterprise</Heading>
                            <Text className="text-slate-600 text-sm mb-6">Tam kapsamlı yönetim.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> 7/24 SRE & Olay Müdahalesi</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> SLO/SLI & Error Budget</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Post-Mortem Analizleri</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Otomasyon Geliştirme</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Sıkça Sorulan Sorular</Heading>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>SRE nedir ve neden gerekli?</AccordionTrigger>
                                <AccordionContent>
                                    Site Reliability Engineering (SRE), sistemlerin güvenilir, ölçeklenebilir ve verimli çalışmasını sağlamak için yazılım mühendisliği prensiplerini operasyona uygular. Kesintileri minimuma indirir.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Mac ve Mobil cihazları da yönetiyor musunuz?</AccordionTrigger>
                                <AccordionContent>
                                    Evet, Apple (Jamf/Intune) ve Android (Enterprise) cihazlarınızın güvenliği, uygulama dağıtımı ve envanter yönetimi hizmet kapsamımızdadır.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Uzaktan çalışanlar için destek var mı?</AccordionTrigger>
                                <AccordionContent>
                                    Kesinlikle. Modern Management araçları (Intune, Autopilot) sayesinde çalışanlarınız ofise hiç gelmeden, kutudan çıkardıkları bilgisayarı şirket standartlarında kullanmaya başlayabilirler.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
