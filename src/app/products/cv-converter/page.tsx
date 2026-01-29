import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { FileText, UploadCloud, Edit3, CheckSquare, ArrowRight, LayoutTemplate } from "lucide-react"

export default function CvConverterPage() {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold tracking-wide">
                                <LayoutTemplate className="w-4 h-4" />
                                <span>CV Standardizasyonu</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                Tüm CV'ler <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Tek Bir Formatta</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Farklı kaynaklardan gelen CV'leri otomatik olarak kurumunuzun standart formatına dönüştürün. Dağınıklığı ortadan kaldırın, aday veritabanınızı düzenli tutun.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:scale-105"
                                >
                                    Bilgi Alın <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link
                                    href="#features"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/10"
                                >
                                    Nasıl Çalışır?
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full aspect-video lg:aspect-square max-w-xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 rounded-2xl blur-2xl"></div>
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm group">
                                <Image
                                    src="/images/products/cv-converter/image4.png"
                                    alt="CV Converter Dashboard"
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* PROBLEM / SOLUTION */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Karmaşık CV Formatlarıyla Vakit Kaybetmeyin</h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Adaylardan gelen Word, PDF, Canva veya PowerPoint formatındaki CV'ler, İK süreçlerinde veri bütünlüğünü bozar ve karşılaştırma yapmayı zorlaştırır.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <div className="mt-1 text-red-500"><LayoutTemplate className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-red-900">Standart Olmayan Veri</h4>
                                        <p className="text-sm text-red-700 mt-1">Her adayın özgeçmişi farklı bir düzende, aradığınızı bulmak zor.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center py-2">
                                    <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0" />
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                                    <div className="mt-1 text-green-500"><CheckSquare className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-green-900">CV-Converter Çözümü</h4>
                                        <p className="text-sm text-green-700 mt-1">Tüm formatları tek bir yapıya dönüştürür, eksik bilgileri tamamlamanıza olanak tanır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                                <FileText className="w-10 h-10 text-slate-400 mb-4" />
                                <span className="font-bold text-slate-700">PDF Formatı</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                                <FileText className="w-10 h-10 text-slate-400 mb-4" />
                                <span className="font-bold text-slate-700">Word Belgesi</span>
                            </div>
                            <div className="col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white flex flex-col items-center text-center shadow-lg shadow-blue-200">
                                <CheckSquare className="w-12 h-12 text-white mb-4" />
                                <span className="font-bold text-xl">Standart Kurumsal CV</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEATURES GRID */}
            <section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">Öne Çıkan Özellikler</h2>
                        <p className="text-slate-600 text-lg">
                            CV dönüşüm ve yönetim süreçlerinizi kolaylaştıran araçlar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                                <UploadCloud className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Toplu İşlem & Takip</h3>
                            <p className="text-slate-600">
                                Yüzlerce CV'yi aynı anda sisteme yükleyin. Yükleme durumunu, başarı ve hata oranlarını tek ekrandan anlık olarak takip edin.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                                <LayoutTemplate className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Akıllı Dönüştürme</h3>
                            <p className="text-slate-600">
                                Gelişmiş parsing algoritmaları ile karmaşık CV tasarımlarını bile başarıyla analiz eder ve standart şablona oturtur.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6 text-teal-600">
                                <Edit3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Veri Düzenleme</h3>
                            <p className="text-slate-600">
                                Otomatik dönüştürülen CV'ler üzerinde manuel düzeltmeler yapabilir, eksik sertifika veya proje bilgilerini kolayca ekleyebilirsiniz.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <Container className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">CV Havuzunuzu Düzenlemeye Başlayın</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        CV-Converter ile veri karmaşasına son verin, İK operasyonlarınıza hız ve düzen katın.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
                    >
                        Hemen Başvurun
                    </Link>
                </Container>
            </section>
        </div>
    )
}
