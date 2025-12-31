"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { Globe, Users, Award, Briefcase } from "lucide-react"

export default function AboutPage() {
    return (
        <>
            <Hero
                title="Hakkımızda"
                subtitle="1,400'den fazla mühendisimizle, 1997'den beri dijital dönüşüme liderlik eden global bir teknoloji gücüyüz."
                badge="Biz Kimiz"
                className="bg-slate-50"
            />

            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <span className="block text-4xl font-bold text-blue-700 mb-2">1,400+</span>
                        <span className="text-slate-600 font-medium">Mühendis</span>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <span className="block text-4xl font-bold text-blue-700 mb-2">25+</span>
                        <span className="text-slate-600 font-medium">Yıllık Deneyim</span>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <span className="block text-4xl font-bold text-blue-700 mb-2">100+</span>
                        <span className="text-slate-600 font-medium">Kurumsal Müşteri</span>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <span className="block text-4xl font-bold text-blue-700 mb-2">Global</span>
                        <span className="text-slate-600 font-medium">Varlık</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <h2 className="text-3xl font-bold text-slate-900 font-heading">Misyonumuz</h2>
                        <p>
                            Finans, Savunma, Telekom ve Perakende sektörlerindeki kuruluşlar için stratejik teknoloji ortağı olmak en büyük hedefimizdir. Biz sadece proje teslim etmiyoruz; ölçeklenebilirliği, güvenliği ve sürdürülebilirliği güvence altına alarak süreci sahipleniyoruz.
                        </p>
                        <p>
                            Türkiye'deki merkezimizden global ofislerimize kadar, en karmaşık mühendislik problemlerini çözmek için çeşitliliğe sahip yetenek havuzumuzdan güç alıyoruz.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-blue-600" />
                                <span>Global Teslimat</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="w-5 h-5 text-blue-600" />
                                <span>Kalite Sertifikalı</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-blue-600" />
                                <span>Elit Yetenekler</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-5 h-5 text-blue-600" />
                                <span>Uçtan Uca Çözümler</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl h-96 flex items-center justify-center p-12 text-center text-slate-400">
                        {/* Görsel alanı */}
                        <span className="text-xl">Ofis / Ekip Görseli</span>
                    </div>
                </div>
            </div>

            <ContentSection
                title="Ürünler & İnovasyon"
                badge="Ürünlerimiz"
                reverse
                content={
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Human Capital Management (HCM)</h4>
                            <p>
                                İşe alımdan performansa ve bordroya kadar tüm çalışan yaşam döngüsünü yönetmek için kapsamlı bir platform. Özellikle Perakende ve Lojistik gibi yüksek sirkülasyonlu sektörler için özel olarak tasarlanmıştır.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Praxilla</h4>
                            <p>
                                Çeviklik ve karmaşık operasyonel ihtiyaçlar için tasarlanmış, bize ait kurumsal kaynak planlama ve yönetim çözümü.
                            </p>
                        </div>
                    </div>
                }
                image={
                    <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-10 h-full flex items-center justify-center rounded-2xl text-white">
                        <span className="text-4xl font-bold text-white/90 text-center">1997'den Beri<br />İnovasyon</span>
                    </div>
                }
            />
        </>
    )
}
