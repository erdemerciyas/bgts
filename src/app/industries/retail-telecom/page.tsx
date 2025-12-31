"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { ShoppingBag, Signal, Globe, Zap, Users, CheckCircle2 } from "lucide-react"

export default function RetailTelecomPage() {
    return (
        <>
            <Hero
                title="Perakende & Telekom"
                subtitle="Yüksek hacimli, tüketici odaklı sektörler için ölçeklenebilir, yüksek performanslı çözümler."
                badge="Yüksek Hacim"
                className="bg-gradient-to-r from-orange-50 to-pink-50"
            />

            {/* Retail / E-Commerce Case Studies */}
            <ContentSection
                title="E-Ticaret & Perakende"
                badge="Başarı Hikayeleri"
                content={
                    <div className="space-y-8">
                        <p>
                            Hızla büyüyen e-ticaret sektöründe; sürdürülebilirlik, güvenlik ve değişen taleplere hızlı yanıt verme zorluklarını çözüyoruz. Pazar liderleri için eğitim maliyetlerini düşüren ve 7/24 kesintisiz hizmet sağlayan çözümler sunuyoruz.
                        </p>

                        <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                            <h4 className="text-lg font-bold text-orange-600 mb-2 flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5" /> Örnek: Trendyol Uyumlu B2B
                            </h4>
                            <p className="text-sm text-slate-600 mb-3">
                                E-ticaret devinin binlerce iş ortağıyla sorunsuz etkileşim kurmasını sağlayan, destek portalı gibi çalışan merkezi bir B2B platformu geliştirdik.
                            </p>
                            <ul className="text-sm space-y-1 text-slate-500">
                                <li>• İş ortağı eğitim maliyetlerinde önemli düşüş.</li>
                                <li>• Yüksek yük kapasitesi sağlayan DevOps çözümleri.</li>
                                <li>• İş gücü sirkülasyonunu yönetmek için özel İK/Yapay Zeka çözümleri.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                            <h4 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Örnek: Coca-Cola Dağıtım
                            </h4>
                            <p className="text-sm text-slate-600 mb-3">
                                Yüksek hacimli operasyonlar için yönetilen hizmetler (SCCM, Zabbix) ve sürekli hizmet sağlığı için NOC modeli sağladık.
                            </p>
                            <ul className="text-sm space-y-1 text-slate-500">
                                <li>• Ağaç tabanlı servis izleme.</li>
                                <li>• Yama yönetimi ve altyapı sağlığı.</li>
                                <li>• ITIL standartlarında uzaktan ve yerinde destek.</li>
                            </ul>
                        </div>
                    </div>
                }
                image={
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex-1 bg-orange-500 rounded-2xl flex items-center justify-center text-white p-8">
                            <div className="text-center">
                                <span className="text-5xl font-bold block mb-2">%99.9</span>
                                <span className="text-orange-100 uppercase tracking-widest text-sm">Uptime (Çalışma Süresi)</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-slate-900 rounded-2xl flex items-center justify-center text-white p-8">
                            <div className="text-center">
                                <Users className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                                <span className="font-bold">İş Gücü Optimizasyonu</span>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* Telecom */}
            <ContentSection
                reverse
                title="Telekomünikasyon"
                badge="Telekom"
                content={
                    <div className="space-y-4">
                        <p>
                            Türkiye'nin önde gelen operatörleri için çağrı merkezleri, saha ekipleri ve bayiler tarafından kullanılan dijital platformları yönetiyoruz. Odağımız, **doğru bilginin doğru kişiye anında** ulaşmasını sağlamaktır.
                        </p>
                        <div className="space-y-3 mt-6">
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Dijital Platform & İçerik Yönetimi</h4>
                                    <p className="text-sm text-slate-600">Kampanya ve cihaz bilgilerinin güncel kalmasını sağlayan, saha ekibi iletişimine yönelik SharePoint tabanlı portaller.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">MSP & Altyapı</h4>
                                    <p className="text-sm text-slate-600">Linux/Windows/Veritabanları için L1/L2 operasyon yönetimi, kapasite planlama ve yedekleme yönetimi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                image={
                    <div className="flex items-center justify-center h-full bg-blue-700 rounded-2xl text-white relative overflow-hidden">
                        <Signal className="w-40 h-40 opacity-20 absolute -right-10 -bottom-10" />
                        <div className="z-10 text-center p-8">
                            <Globe className="w-20 h-20 mx-auto mb-6" />
                            <h4 className="text-2xl font-bold">Milyonları Bağlıyoruz</h4>
                            <p className="text-blue-200 mt-2">Uçtan Uca Telekom Çözümleri</p>
                        </div>
                    </div>
                }
            />
        </>
    )
}
