import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { CheckCircle2, Bot, FileText, Video, Users, ArrowRight } from "lucide-react"
import { ZoomableImage } from "@/components/ui/ZoomableImage"

export default function AiHiringPage() {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8 text-center lg:text-left">

                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                İşe Alımda <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Yapay Zeka Devrimi</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                AI Hiring Assistant ile işe alım süreçlerinizi hızlandırın, aday-ilan uyumunu maksimize edin ve video mülakat analizleriyle en doğru yeteneği saniyeler içinde keşfedin.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
                                >
                                    Hemen Demo İsteyin <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link
                                    href="#features"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/10"
                                >
                                    Özellikleri Keşfet
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full max-w-xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-2xl blur-2xl"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
                                <Image
                                    src="/images/products/ai-hiring/hero-image.png"
                                    alt="AI Hiring Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* KEY FEATURES GRID */}
            <section id="features" className="py-24 bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">İşe Alım Sürecinizi Uçtan Uca Yönetin</h2>
                        <p className="text-slate-600 text-lg">
                            Manuel süreçleri otomatize eden, veriye dayalı kararlar almanızı sağlayan güçlü özellikler.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Otomatik İlan Oluşturma</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Sadece pozisyon adını girin veya bir dosya yükleyin. Yapay zeka, gereksinimleri ve iş tanımını saniyeler içinde sizin için hazırlasın.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Akıllı Aday Eşleştirme</h3>
                            <p className="text-slate-600 leading-relaxed">
                                İlanlarınız için en uygun adayları, adaylarınız için en uygun ilanları otomatik olarak listeleyin. Skorlama sistemiyle en iyiyi bulun.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Bot className="w-7 h-7 text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Chatbot Asistanı</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Aday profilleri hakkında sorular sorun. "Bu aday hangi teknolojilerde güçlü?", "Liderlik vasfı var mı?" gibi sorulara anında yanıt alın.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">CV Analizi & Puanlama</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yüklenen CV'leri teknik yetkinlik, deneyim ve dil gibi kriterlere göre analiz edin. Objektif ve sayısal bir değerlendirme raporu alın.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Video className="w-7 h-7 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Video Mülakat Analizi</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Mülakat kayıtlarını izlemeye son. Yapay zeka, konuşmaları metne döker, soruları ayrıştırır ve adayın yanıtlarını analiz eder.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Soru Havuzu Oluşturma</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Pozisyona ve adaya özel mülakat soruları üretin. Teknik ve yetkinlik bazlı sorularla mülakat kalitenizi artırın.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* DEEP DIVE SECTION */}
            <section className="py-24 overflow-hidden">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-xl rounded-full"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                                <Image
                                    src="/images/products/ai-hiring/image3.png"
                                    alt="Job Posting Detail"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">İlan Oluşturma Hiç Bu Kadar Kolay Olmamıştı</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Geleneksel ilan hazırlama süreçlerindeki zaman kaybını unutun. AI Hiring Assistant, yüklediğiniz kısa notlardan veya dosyalardan yola çıkarak, profesyonel, detaylı ve SEO uyumlu iş ilanları oluşturur.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
                                    <span className="text-slate-700 font-medium">Otomatik yetkinlik ve gereksinim listeleme</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
                                    <span className="text-slate-700 font-medium">Aday havuzundan anında eşleşme önerileri</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
                                    <span className="text-slate-700 font-medium">Çoklu dil desteği ile global ilanlar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>


        </div>
    )
}
