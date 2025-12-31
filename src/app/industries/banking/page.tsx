"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CaseStudyCard from "@/components/ui/CaseStudyCard"
import { Building2, CreditCard, PieChart, TrendingUp, Award, ShieldCheck, Zap } from "lucide-react"

export default function BankingPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Sektörler", href: "/industries", icon: Building2 },
                        { label: "Bankacılık & Finans", href: "/industries/banking", icon: PieChart }
                    ]}
                />

                <Hero
                    title="Bankacılık & Finans"
                    subtitle="Bankalar, sigorta şirketleri ve fintechler için uçtan uca dijital dönüşüm."
                    badge="Fintech"
                    className="bg-blue-900"
                    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                />

                <div className="container mx-auto px-6 py-20">
                    {/* Success Metrics */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-8 rounded-2xl text-white text-center hover:shadow-2xl transition-shadow">
                            <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h4 className="text-4xl font-bold mb-2">100+</h4>
                            <p className="text-blue-100">Teslim Edilen Proje</p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-8 rounded-2xl text-white text-center hover:shadow-2xl transition-shadow">
                            <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h4 className="text-4xl font-bold mb-2">%99.9</h4>
                            <p className="text-slate-100">Sistem Uptime</p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-700 to-indigo-800 p-8 rounded-2xl text-white text-center hover:shadow-2xl transition-shadow">
                            <ShieldCheck className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h4 className="text-4xl font-bold mb-2">ISO 27001</h4>
                            <p className="text-indigo-100">Güvenlik Sertifikası</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white text-center hover:shadow-2xl transition-shadow">
                            <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h4 className="text-4xl font-bold mb-2">25+</h4>
                            <p className="text-blue-100">Yıllık Deneyim</p>
                        </div>
                    </div>

                    {/* Strategic Partnership */}
                    <ContentSection
                        title="Stratejik Teknoloji Ortağı"
                        badge="Uzmanlık"
                        content={
                            <div className="space-y-6">
                                <p className="text-lg">
                                    25 yılı aşkın deneyimimizle, Türkiye'nin önde gelen bankaları ve sigorta şirketleri için dijital dönüşüm ajandalarını hayata geçiriyoruz. Derin sektör bilgimiz sayesinde, iş kritik sistemler için güvenilir, ölçeklenebilir çözümler sunuyoruz.
                                </p>
                                <p className="text-lg">
                                    Biz sadece bir tedarikçi değiliz; süreci sahiplenen uzun vadeli bir teknoloji ortağıyız.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                            <CreditCard className="w-5 h-5 text-blue-600" /> Temel Bankacılık
                                        </h4>
                                        <p className="text-slate-600">Modernizasyon & Migrasyon</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                            <PieChart className="w-5 h-5 text-slate-600" /> Veri & Analitik
                                        </h4>
                                        <p className="text-slate-600">Risk, Dolandırıcılık & Raporlama</p>
                                    </div>
                                </div>
                            </div>
                        }
                        image={
                            <div className="bg-gradient-to-br from-slate-700 to-blue-800 p-10 h-full flex items-center justify-center rounded-2xl text-white">
                                <div className="text-center">
                                    <Building2 className="w-24 h-24 mx-auto mb-6 opacity-80" />
                                    <h3 className="text-3xl font-bold mb-2">100+</h3>
                                    <p className="text-blue-100 text-xl">Teslim Edilen Proje</p>
                                </div>
                            </div>
                        }
                    />

                    {/* Success Stories */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 font-heading text-slate-900">
                                Başarı Hikayeleri
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Türkiye'nin önde gelen finans kuruluşlarıyla gerçekleştirdiğimiz projeler
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CaseStudyCard
                                title="Dijital Bankacılık Platformu"
                                description="Önde gelen bir banka için uçtan uca dijital bankacılık platformu geliştirdik. Mobil ve web kanallarını entegre ederek müşteri deneyimini dönüştürdük."
                                client="Türkiye'nin Önde Gelen Bankası"
                                image="https://images.unsplash.com/photo-1563986768609-322da13575f2b?auto=format&fit=crop&q=80"
                                href="/industries/banking"
                                metrics={[
                                    { label: "Kullanıcı", value: "5M+", icon: TrendingUp },
                                    { label: "İşlem", value: "10M+/gün", icon: Zap },
                                    { label: "Uptime", value: "%99.9", icon: ShieldCheck }
                                ]}
                                color="blue"
                                delay={0}
                            />
                            <CaseStudyCard
                                title="Açık Bankacılık API"
                                description="Büyük ölçekli açık bankacılık API platformu. Fintech şirketleri ve üçüncü taraf geliştiriciler için güvenli ve ölçeklenebilir API erişimi sağladık."
                                client="Fintech Lideri"
                                image="https://images.unsplash.com/photo-1551288049-be3daa4af4b?auto=format&fit=crop&q=80"
                                href="/industries/banking"
                                metrics={[
                                    { label: "API Call", value: "100M+/ay", icon: Zap },
                                    { label: "Partner", value: "50+", icon: Building2 },
                                    { label: "Response", value: "<50ms", icon: TrendingUp }
                                ]}
                                color="indigo"
                                delay={0.1}
                            />
                            <CaseStudyCard
                                title="Risk Yönetim Sistemi"
                                description="Gerçek zamanlı risk analizi ve dolandırıcılık tespiti sistemi. Yapay zeka destekli algoritmalarla finansal riskleri proaktif olarak yönetiyoruz."
                                client="Sigorta Şirketi"
                                image="https://images.unsplash.com/photo-1554224155-6726b3fa944?auto=format&fit=crop&q=80"
                                href="/industries/banking"
                                metrics={[
                                    { label: "Accuracy", value: "%99.5", icon: Award },
                                    { label: "Alert", value: "Saniyeler", icon: Zap },
                                    { label: "Reduction", value: "%80", icon: TrendingUp }
                                ]}
                                color="slate"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    {/* Specialized Domains */}
                    <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-3xl p-16 mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 font-heading text-slate-900">
                                Özelleştirilmiş Alanlar
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Finans sektöründe uzmanlaştığımız hizmet alanları
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Ödeme Sistemleri", items: ["Issuing / Acquiring", "Dijital Cüzdanlar", "POS Entegrasyonu", "Çip Uygulamaları"], color: "blue" },
                                { title: "Dijital Bankacılık", items: ["Mobil/Web Kanalları", "IVR Çözümleri", "Müşteri Kabulü (Onboarding)", "Dijital Varlıklar"], color: "indigo" },
                                { title: "Kurumsal & Hazine", items: ["Nakit Yönetimi", "Dış Ticaret", "Krediler", "Faktoring"], color: "slate" },
                                { title: "Veri & Risk", items: ["DWH Modelleme", "Yasal Raporlama", "Dolandırıcılık Tespiti (Fraud)", "Kredi Skorlama"], color: "blue" },
                                { title: "Sigortacılık", items: ["Hasar Yönetimi", "Hayat/Emeklilik", "Poliçe Yönetimi", "Aktüeryal Sistemler"], color: "indigo" },
                                { title: "Altyapı", items: ["Middleware", "Bulut Migrasyonu", "Güvenlik & IAM", "Yüksek Erişilebilirlik"], color: "slate" }
                            ].map((domain, i) => (
                                <div key={domain.title} className={`bg-${domain.color}-50 p-6 rounded-xl border-2 border-${domain.color}-200 hover:bg-${domain.color}-100 transition-colors`}>
                                    <h3 className={`text-xl font-bold mb-4 text-${domain.color}-900`}>{domain.title}</h3>
                                    <ul className="space-y-2">
                                        {domain.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-${domain.color}-600`}></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
