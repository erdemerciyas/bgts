import React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { CheckCircle2, Bot, ShieldAlert, Code2, Server, FileText, Activity, AlertTriangle, ArrowRight, Cpu } from "lucide-react"

export default function CortexPage() {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                                BGTS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cortex</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Yazılım geliştirme yaşam döngüsünü yapay zeka destekli agent'larla otomatikleştiren kurumsal platform. Kod inceleme, test yazma, hata düzeltme ve dokümantasyon analizi artık otopilotta.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    Hemen Demo İsteyin <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link
                                    href="#features"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-white/40"
                                >
                                    Agent'ları Keşfet
                                </Link>
                            </div>
                        </div>

                        {/* Right Side Visual Element */}
                        <div className="flex-1 relative w-full max-w-xl hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-[3rem] blur-3xl mix-blend-screen transform rotate-12"></div>
                            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-800/40 backdrop-blur-md flex items-center justify-center group">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                                <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                                    <Cpu className="w-24 h-24 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500 ease-out" />
                                    <h3 className="text-2xl font-bold text-white mb-2">AI-Driven SDLC</h3>
                                    <p className="text-slate-400 text-sm">Cortex platformu ile geliştirme süreçlerinizi %40'a kadar hızlandırın.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ÇÖZÜLEN PROBLEMLER SECTION */}
            <Section background="glazed" id="features">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-corporate-dark mb-6">Geleneksel Süreçlerdeki Darboğazları Aşın</Heading>
                        <Text variant="lead" className="text-slate-600">
                            Cortex ile yazılım ekiplerinizin yükünü hafifletin ve hata payını sıfıra indirin.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">İnceleme</span>
                                </div>
                                <Heading variant="h3" className="mb-2 text-corporate-dark">REVIEWER Agent</Heading>
                                <Text variant="default" className="text-slate-600 mb-6">Otomatik PR inceleme yapar, kod kalitesini ve güvenlik açıklarını analiz eder.</Text>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Çözülen Problem</p>
                                <p className="text-sm text-slate-700 font-medium">Manuel kod inceleme darboğazları</p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-50/80 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform shadow-sm">
                                        <Code2 className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">Geliştirme</span>
                                </div>
                                <Heading variant="h3" className="mb-2 text-corporate-dark">DEVELOPER Agent</Heading>
                                <Text variant="default" className="text-slate-600 mb-6">Standart kalitede bug fix üretir ve otomatik PR oluşturur (Sadece P2-P4 arası).</Text>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Çözülen Problem</p>
                                <p className="text-sm text-slate-700 font-medium">Tutarsız ve zaman alan hata düzeltmeleri</p>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50/80 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform shadow-sm">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">Analiz</span>
                                </div>
                                <Heading variant="h3" className="mb-2 text-corporate-dark">GAP_ANALYZER</Heading>
                                <Text variant="default" className="text-slate-600 mb-6">Dokümantasyon ile gerçek kod arasındaki uyumsuzlukları tespit eder ve raporlar.</Text>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Çözülen Problem</p>
                                <p className="text-sm text-slate-700 font-medium">Dokümantasyon ve kod uyumsuzlukları</p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50/80 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shadow-sm">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">Test</span>
                                </div>
                                <Heading variant="h3" className="mb-2 text-corporate-dark">TESTER Agent</Heading>
                                <Text variant="default" className="text-slate-600 mb-6">Verilen kaynak kod için otomatik unit test yazar ve kod kalitesini artırır.</Text>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Çözülen Problem</p>
                                <p className="text-sm text-slate-700 font-medium">Eksik test kapsamları ve manuel test yazımı</p>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50/80 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform shadow-sm">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">Planlama</span>
                                </div>
                                <Heading variant="h3" className="mb-2 text-corporate-dark">REQUIREMENTS</Heading>
                                <Text variant="default" className="text-slate-600 mb-6">Confluence'dan PBI ve test senaryolarını otomatik yapılandırır.</Text>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Çözülen Problem</p>
                                <p className="text-sm text-slate-700 font-medium">Zaman alan manuel gereksinim çıkarma süreci</p>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-amber-50/80 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform shadow-sm">
                                        <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">Kontrol</span>
                                </div>
                                <Heading variant="h3" className="mb-2 text-corporate-dark">Human in the Loop</Heading>
                                <Text variant="default" className="text-slate-600 mb-6">Kritik işlemlerde ve merge kararlarında mutlaka insan onayı gerektirir.</Text>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Çözülen Problem</p>
                                <p className="text-sm text-slate-700 font-medium">Kontrolsüz ve risk barındıran tam otomasyon</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* AGENT DETAYLARI SECTION */}
            <Section background="default" id="agents">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-corporate-dark">Yapay Zeka Ekibinizle Tanışın</Heading>
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {[
                            { title: "REVIEWER — Kod İncelemeci", desc: "Bitbucket'ta PR açıldığında otomatik tetiklenir. Kod kalitesini analiz eder.", output: "PR üzerinde yorum (rapor) bırakır.", rules: "Merge yapamaz.", icon: Bot },
                            { title: "TESTER — Test Yazıcı", desc: "Verilen kaynak kod için otomatik unit test yazar.", output: "Test dosyaları + PR oluşturur.", rules: "Commit öncesi insan onayı gerektirir.", icon: CheckCircle2 },
                            { title: "DEVELOPER — Geliştirici", desc: "Jira'da P2-P4 öncelikli bug'lar için otomatik kod düzeltmesi yapar.", output: "Bug fix kodu + PR.", rules: "PR onayı zorunludur. Yeni özellik YAZAMAZ, P1'e DOKUNAMAZ.", icon: Code2 },
                            { title: "PLANNER — Planlamacı", desc: "Karmaşık görevleri alt görevlere parçalar, uygulama planı oluşturur.", output: "Yapılandırılmış plan dokümanı.", rules: "E2E pipeline'da ilk adım olarak çalışır.", icon: Activity },
                            { title: "INDEXER — İndeksleyici", desc: "Kaynak kodu, Jira tasklarını ve Confluence'ı Qdrant'a indexler.", output: "Aranabilir vektör verileri.", rules: "Diğer agent'ların arama yapması için temel oluşturur.", icon: Server },
                            { title: "GAP_ANALYZER — Boşluk Analizcisi", desc: "Dokümantasyon ile gerçek kod arasındaki uyumsuzluğu bulur.", output: "Uyumsuzluk detay raporu.", rules: "INDEXER'ın çalışmış olması gerekir.", icon: FileText },
                            { title: "MFE_DEVELOPER — Frontend Geliştirici", desc: "React bileşenlerini ve Storybook hikayelerini otomatik üretir.", output: "React component + Storybook + PR.", rules: "İnsan onayı zorunludur.", icon: Code2 },
                            { title: "REQUIREMENTS_ANALYST — Gereksinim Analisti", desc: "Confluence sayfalarından PBI ve test case'leri otomatik çıkarır.", output: "Gereksinim listesi ve test senaryoları.", rules: "Manuel dokümanları yapısal hale getirir.", icon: Activity }
                        ].map((agent, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-corporate-blue/30 transition-colors">
                                <div className="shrink-0 w-12 h-12 bg-corporate-blue/10 text-corporate-blue rounded-xl flex items-center justify-center">
                                    <agent.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <Heading variant="h4" className="mb-2 text-corporate-dark">{agent.title}</Heading>
                                    <Text variant="default" className="text-slate-600 mb-1"><strong>Ne Yapar:</strong> {agent.desc}</Text>
                                    <Text variant="default" className="text-slate-600 mb-2"><strong>Çıktı:</strong> {agent.output}</Text>
                                    <Text variant="small" className="text-slate-500 italic">Kural: {agent.rules}</Text>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* GÜVENLİK KURALLARI SECTION */}
            <Section background="navy">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-black text-white">Kesin Güvenlik Kuralları</h2>
                            <p className="text-lg text-slate-300">
                                Cortex, operasyonlarınızı kolaylaştırırken sistem güvenliğini ve insan kontrolünü daima merkeze alır.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors cursor-pointer">
                                    <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">P1 Bug'lar Engellendi</h4>
                                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Sadece insanlar çözebilir, agent asla kritik P1 hatalara dokunamaz.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors cursor-pointer">
                                    <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Yeni Özellik Geliştirme Engellendi</h4>
                                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Agent sadece mevcut kodda bug fix yapabilir, sıfırdan feature yazamaz.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors cursor-pointer">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Merge Yapamaz</h4>
                                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Agent sadece Pull Request açar, merge kararı tamamen insana aittir.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors cursor-pointer">
                                    <Activity className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Maliyet Takibi</h4>
                                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Her agent çalıştırmasında token kullanımı ve maliyet titizlikle kaydedilir.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl"></div>
                                <div className="w-full h-[400px] bg-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center text-slate-400 border border-slate-700/50 relative">
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                                    <ShieldAlert className="w-24 h-24 mb-6 opacity-30 text-white z-10" />
                                    <p className="text-lg font-medium text-slate-300 z-10">Human-in-the-Loop Mimarisi</p>
                                    <p className="text-sm mt-2 max-w-xs mx-auto z-10">Tüm kritik karar noktalarında insan onayı zorunludur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
