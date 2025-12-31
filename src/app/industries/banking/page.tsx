"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { Building2, CreditCard, PieChart } from "lucide-react"

export default function BankingPage() {
    return (
        <>
            <Hero
                title="Bankacılık & Finans"
                subtitle="Bankalar, sigorta şirketleri ve fintechler için uçtan uca dijital dönüşüm."
                badge="Fintech"
                className="bg-blue-50"
            />

            <ContentSection
                title="Stratejik Teknoloji Ortağı"
                badge="Uzmanlık"
                content={
                    <div className="space-y-4">
                        <p>
                            25 yılı aşkın deneyimimizle, Türkiye'nin önde gelen bankaları ve sigorta şirketleri için dijital dönüşüm ajandalarını hayata geçiriyoruz. Derin sektör bilgimiz sayesinde, iş kritik sistemler için güvenilir, ölçeklenebilir çözümler sunuyoruz.
                        </p>
                        <p>
                            Biz sadece bir tedarikçi değiliz; süreci sahiplenen uzun vadeli bir teknoloji ortağıyız.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-900"><CreditCard className="w-4 h-4 text-blue-600" /> Temel Bankacılık</h4>
                                <p className="text-sm text-slate-500">Modernizasyon & Migrasyon</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-900"><PieChart className="w-4 h-4 text-purple-600" /> Veri & Analitik</h4>
                                <p className="text-sm text-slate-500">Risk, Dolandırıcılık & Raporlama</p>
                            </div>
                        </div>
                    </div>
                }
                image={
                    <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 h-full rounded-2xl shadow-sm">
                        <Building2 className="w-24 h-24 text-slate-300 mb-4" />
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-2 text-slate-900">100+</h3>
                            <p className="text-slate-500">Teslim Edilen Proje</p>
                        </div>
                    </div>
                }
            />

            <div className="py-20 bg-slate-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 font-heading text-white">Özelleştirilmiş Alanlar</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Ödeme Sistemleri", items: ["Issuing / Acquiring", "Dijital Cüzdanlar", "POS Entegrasyonu", "Çip Uygulamaları"] },
                            { title: "Dijital Bankacılık", items: ["Mobil/Web Kanalları", "IVR Çözümleri", "Müşteri Kabulü (Onboarding)", "Dijital Varlıklar"] },
                            { title: "Kurumsal & Hazine", items: ["Nakit Yönetimi", "Dış Ticaret", "Krediler", "Faktoring"] },
                            { title: "Veri & Risk", items: ["DWH Modelleme", "Yasal Raporlama", "Dolandırıcılık Tespiti (Fraud)", "Kredi Skorlama"] },
                            { title: "Sigortacılık", items: ["Hasar Yönetimi", "Hayat/Emeklilik", "Poliçe Yönetimi", "Aktüeryal Sistemler"] },
                            { title: "Altyapı", items: ["Middleware", "Bulut Migrasyonu", "Güvenlik & IAM", "Yüksek Erişilebilirlik"] }
                        ].map((domain) => (
                            <div key={domain.title} className="p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-blue-100">{domain.title}</h3>
                                <ul className="space-y-2">
                                    {domain.items.map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
