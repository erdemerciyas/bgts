"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CaseStudyCard from "@/components/ui/CaseStudyCard"
import { ShoppingBag, Signal, Globe, Zap, Users, CheckCircle2, TrendingUp } from "lucide-react"

export default function RetailTelecomPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Sektörler", href: "/industries", icon: Globe },
                        { label: "Perakende & Telekom", href: "/industries/retail-telecom", icon: ShoppingBag }
                    ]}
                />

                <Hero
                    title="Perakende & Telekom"
                    subtitle="Yüksek hacimli, tüketici odaklı sektörler için ölçeklenebilir, yüksek performanslı çözümler."
                    badge="Yüksek Hacim"
                    className="bg-indigo-900"
                    backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80"
                />

                <div className="container mx-auto px-6 py-20">
                    {/* Retail Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 font-heading text-slate-900">
                                E-Ticaret & Perakende
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Hızla büyüyen e-ticaret sektöründe; sürdürülebilirlik, güvenlik ve değişen taleplere hızlı yanıt verme zorluklarını çözüyoruz.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <CaseStudyCard
                                title="Trendyol Uyumlu B2B"
                                description="E-ticaret devinin binlerce iş ortağıyla sorunsuz etkileşim kurmasını sağlayan, destek portalı gibi çalışan merkezi bir B2B platformu geliştirdik."
                                client="Trendyol"
                                image="https://images.unsplash.com/photo-1556740737-0e9d516b3e3?auto=format&fit=crop&q=80"
                                href="/industries/retail-telecom"
                                metrics={[
                                    { label: "İş Ortağı", value: "10K+", icon: Users },
                                    { label: "İşlem", value: "100K+/gün", icon: Zap },
                                    { label: "Uptime", value: "%99.9", icon: CheckCircle2 }
                                ]}
                                color="indigo"
                                delay={0}
                            />
                            <CaseStudyCard
                                title="Coca-Cola Dağıtım"
                                description="Yüksek hacimli operasyonlar için yönetilen hizmetler (SCCM, Zabbix) ve sürekli hizmet sağlığı için NOC modeli sağladık."
                                client="Coca-Cola"
                                image="https://images.unsplash.com/photo-1556761175-997279832a0?auto=format&fit=crop&q=80"
                                href="/industries/retail-telecom"
                                metrics={[
                                    { label: "Lokasyon", value: "50+", icon: Globe },
                                    { label: "İş Gücü", value: "500+", icon: Users },
                                    { label: "Uptime", value: "%99.95", icon: CheckCircle2 }
                                ]}
                                color="blue"
                                delay={0.1}
                            />
                        </div>
                    </div>

                    {/* Telecom Section */}
                    <ContentSection
                        reverse
                        title="Telekomünikasyon"
                        badge="Telekom"
                        content={
                            <div className="space-y-6">
                                <p className="text-lg">
                                    Türkiye'nin önde gelen operatörleri için çağrı merkezleri, saha ekipleri ve bayiler tarafından kullanılan dijital platformları yönetiyoruz. Odağımız, <strong className="text-indigo-600">doğru bilginin doğru kişiye anında</strong> ulaşmasını sağlamaktır.
                                </p>
                                <div className="space-y-6 mt-6">
                                    <div className="bg-white p-6 rounded-xl border-2 border-indigo-200 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                            <Signal className="w-5 h-5 text-indigo-600" /> Dijital Platform & İçerik Yönetimi
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Kampanya ve cihaz bilgilerinin güncel kalmasını sağlayan, saha ekibi iletişimine yönelik SharePoint tabanlı portaller.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-slate-600" /> MSP & Altyapı
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Linux/Windows/Veritabanları için L1/L2 operasyon yönetimi, kapasite planlama ve yedekleme yönetimi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                        image={
                            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white p-10 h-full flex items-center justify-center rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                    <Signal className="w-64 h-64 absolute -right-10 -bottom-10" />
                                </div>
                                <div className="relative z-10 text-center">
                                    <Globe className="w-32 h-32 mx-auto mb-6" />
                                    <h4 className="text-4xl font-bold mb-2">Milyonları Bağlıyoruz</h4>
                                    <p className="text-xl text-indigo-100">Uçtan Uca Telekom Çözümleri</p>
                                </div>
                            </div>
                        }
                    />

                    {/* Key Capabilities */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 font-heading text-slate-900">
                                Temel Kapasitelerimiz
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Perakende ve telekom sektörlerinde uzmanlaştığımız çözüm alanları
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300">
                                <ShoppingBag className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">E-Ticaret Platformu</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    B2B/B2C platformları, omnichannel stratejileri
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border-2 border-slate-200 hover:shadow-2xl transition-all duration-300">
                                <Users className="w-12 h-12 text-slate-600 mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">İş Gücü Optimizasyonu</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    AI destekli WFM ve planlama sistemleri
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                                <Signal className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Telekom Platformu</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    OSS/BSS ve dijital kanal yönetimi
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300">
                                <Zap className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">MSP Hizmetleri</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    7/24 operasyon ve altyapı yönetimi
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Success Metrics */}
                    <div className="bg-gradient-to-br from-indigo-50 to-slate-100 rounded-3xl p-16 mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 font-heading text-slate-900">
                                Başarı Metrikleri
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Sektörde kanıtlanmış başarılarımız
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-600/30">
                                    <TrendingUp className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">%99.9</h3>
                                <p className="text-slate-600">Ortalama Uptime</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-600/30">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">50M+</h3>
                                <p className="text-slate-600">Günlük İşlem</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/30">
                                    <ShoppingBag className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">100+</h3>
                                <p className="text-slate-600">Başarı Hikayesi</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-600/30">
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">%95</h3>
                                <p className="text-slate-600">Müşteri Memnuniyeti</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
