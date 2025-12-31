"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { Code2, Database, Layout, Smartphone } from "lucide-react"

export default function SoftwareDevPage() {
    return (
        <>
            <Hero
                title="Yazılım Geliştirme Hizmetleri"
                subtitle="Kurumsal ihtiyaçlara özel, ölçeklenebilir, güvenli ve modern yazılım çözümleri."
                badge="Teknoloji Servisleri"
                className="bg-purple-50"
            />

            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Mühendislik Mükemmelliği</h2>
                        <div className="space-y-6 text-lg text-slate-600">
                            <p>
                                Sağlam mikroservis mimarileri oluşturmak için **Domain Driven Design (DDD)** ve API-first yaklaşımlarını benimsiyoruz. Geliştirme yaşam döngümüz, CI/CD boru hatları, otomatik testler ve kod kalite kapıları ile tam entegredir.
                            </p>
                            <p>
                                **Java/Spring Boot** arka uçlarından modern **React/Vue** ön yüzlerine kadar, karmaşık iş problemlerini çözmek için doğru araçları kullanıyoruz.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                            <Code2 className="w-8 h-8 text-purple-600 mb-3" />
                            <h4 className="font-bold text-slate-900">Backend</h4>
                            <p className="text-sm text-slate-500">Java, .NET, Node.js, Python</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                            <Layout className="w-8 h-8 text-pink-600 mb-3" />
                            <h4 className="font-bold text-slate-900">Frontend</h4>
                            <p className="text-sm text-slate-500">React, Angular, Vue.js</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                            <Database className="w-8 h-8 text-blue-600 mb-3" />
                            <h4 className="font-bold text-slate-900">Veri</h4>
                            <p className="text-sm text-slate-500">Oracle, PostgreSQL, Kafka</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                            <Smartphone className="w-8 h-8 text-slate-600 mb-3" />
                            <h4 className="font-bold text-slate-900">Mobil</h4>
                            <p className="text-sm text-slate-500">React Native, Flutter</p>
                        </div>
                    </div>
                </div>

                {/* Teslim Modelleri Section */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-heading mb-10 text-center text-slate-900">Proje Teslim Modellerimiz</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                                <span className="bg-green-100 text-green-700 p-2 rounded-lg text-sm">TurnKey</span>
                                Anahtar Teslim Projeler
                            </h3>
                            <p className="text-slate-600 mb-6 min-h-[48px]">
                                Kapsamı, süresi ve bütçesi net olarak belirlenmiş projeler için uçtan uca sorumluluk alıyoruz.
                            </p>
                            <ul className="space-y-3">
                                {["Sabit Bütçe & Zaman", "Tek Sorumluluk Noktası", "Minimum Müşteri Eforu", "Sonuç Odaklı Teslimat"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                                <span className="bg-blue-100 text-blue-700 p-2 rounded-lg text-sm">T&M</span>
                                Time & Material
                            </h3>
                            <p className="text-slate-600 mb-6 min-h-[48px]">
                                Değişken gereksinimlere sahip dinamik projeler için esnek kaynak yönetimi ve iş birliği modeli.
                            </p>
                            <ul className="space-y-3">
                                {["Esnek Kapsam Yönetimi", "Şeffaf Kaynak Takibi", "Agile İş Birliği", "Maksimum Kontrol"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ContentSection
                title="Yapay Zeka & İleri Teknolojiler"
                badge="İnovasyon"
                content={
                    <div className="space-y-4">
                        <p>
                            RAG sistemleri, LLM entegrasyonları ve AI-first mimariler kullanarak **Yapay Zekayı** iş süreçlerine entegre ediyoruz.
                        </p>
                        <p>
                            Uzmanlığımız, Kafka ile yüksek hacimli olay akışı (event streaming), dağıtık sistemler ve modern bulut tabanlı veritabanlarına kadar uzanır.
                        </p>
                    </div>
                }
                image={
                    <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 text-white p-10 h-full flex items-center justify-center rounded-2xl">
                        <span className="text-6xl font-bold">AI</span>
                    </div>
                }
            />
        </>
    )
}
