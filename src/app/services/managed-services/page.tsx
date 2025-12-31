"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { Server, Activity, ShieldCheck, Clock } from "lucide-react"

export default function ManagedServicesPage() {
    return (
        <>
            <Hero
                title="Yönetilen Hizmetler"
                subtitle="Operasyonel mükemmellik ve SRE güvenilirliği ile kritik altyapı yönetimi."
                badge="Teknoloji Servisleri"
                className="bg-blue-50"
            />

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <Server className="w-12 h-12 text-blue-600 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Platform Yönetimi</h3>
                        <p className="text-slate-600">Veri Merkezi Platformları, Veritabanı sistemleri ve Ara Katman (Middleware) uygulamalarının tam yönetimi.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <Activity className="w-12 h-12 text-blue-600 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">AIOps İzleme</h3>
                        <p className="text-slate-600">Gelişmiş gözlemlenebilirlik araçları kullanılarak akıllı gürültü azaltma ve otomatik olay çözümü.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">SRE Disiplini</h3>
                        <p className="text-slate-600">Hizmet Seviyesi Hedeflerine (SLO) ve hata bütçesi yönetimine odaklanan güvenilirlik mühendisliği.</p>
                    </div>
                </div>
            </div>

            <ContentSection
                title="Operasyonel Mükemmellik"
                badge="Kanıtlanmış Başarı"
                content={
                    <div className="space-y-4">
                        <p>
                            Operasyonlarımız **%100 ITIL uyumlu** ve şeffaftır. İlk Çağrıda Çözüm (FCR) odaklı **7/24** ekiplerimiz, olayların büyük çoğunluğunu ilk seviyede çözer.
                        </p>
                        <p>
                            Karmaşık, çok sağlayıcılı ortamların bile sorunsuz çalışmasını sağlamak için ITSM süreç otomasyonunu derin hizmet analizi ile birleştiriyoruz.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 mt-6">
                            <li className="flex items-center gap-3 font-semibold text-slate-700">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div> Yüksek FCR Oranları
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-slate-700">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div> 7/24 Erişilebilirlik
                            </li>
                        </ul>
                    </div>
                }
                image={
                    <div className="bg-slate-900 text-white p-12 rounded-2xl h-full flex flex-col justify-center items-center text-center">
                        <Clock className="w-24 h-24 text-blue-400 mb-6" />
                        <h4 className="text-3xl font-bold">7 / 24</h4>
                        <p className="text-slate-400">Kesintisiz Operasyon Kapsamı</p>
                    </div>
                }
            />

            <ContentSection
                reverse
                title="Yönetilen Masaüstü (MDS)"
                badge="İş Yeri Teknolojileri"
                content={
                    <div className="space-y-4">
                        <p className="text-lg">
                            Masaüstü, laptop ve mobil cihazlardan oluşan son kullanıcı ortamınızı <strong>AIOps ve Otomasyon</strong> ile güçlendiriyoruz. Sorunları kullanıcılar fark etmeden çözen "Self-Healing" yeteneklerimizle, kesintisiz bir çalışan deneyimi sunuyoruz.
                        </p>
                        <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm mt-4">
                            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-600" /> Proaktif & Akıllı Destek
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>AIOps Bilet Yönetimi:</strong> Yapay zeka destekli otomatik sınıflandırma ve yönlendirme.</li>
                                <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>Self-Healing:</strong> Disk alanı, servis hataları gibi sorunların otomatik tespiti ve onarımı.</li>
                                <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>Uçtan Uca Destek:</strong> Windows, MacOS ve Mobil cihazlar için uzaktan veya yerinde destek.</li>
                            </ul>
                        </div>
                    </div>
                }
                image={
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-10 h-full flex items-center justify-center rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
                        <div className="relative z-10 text-center">
                            <h4 className="text-4xl font-bold mb-2">AIOps</h4>
                            <p className="text-blue-100">Akıllı Masaüstü Yönetimi</p>
                        </div>
                    </div>
                }
            />
        </>
    )
}
