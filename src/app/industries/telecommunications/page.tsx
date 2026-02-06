"use client"

import Hero from "@/components/ui/Hero"
import { Smartphone, Wifi, Server, Radio, Database, Globe, Layers, Activity, Lock, Cpu, Cloud, Zap } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"

export default function TelecomPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Hero
                    title="Telekomünikasyon & Dijital Platform Hizmetleri"
                    subtitle="Yüksek trafikli ağlar ve kritik servisler için uçtan uca dijital platform yönetimi, güçlü entegrasyonlar ve 7/24 operasyonel mükemmeliyet."
                    badge="Connected Future"
                    className="bg-slate-900"
                    backgroundImage="/images/headers/devops-ve-altyapi-hizmetleri.jpg"
                />

                {/* Genel Bakış */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Telekom Sektörüne Özel Dijital Platform ve MSP Hizmetleri</Heading>
                                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Telekom sektörünün yüksek trafik, çoklu kanal yönetimi ve kesintisiz hizmet beklentileri;
                                        güçlü entegrasyonlar, stabil altyapı ve 7/24 operasyonel mükemmeliyet gerektirir.
                                    </p>
                                    <p>
                                        Bu alanda uzun yıllara dayanan deneyimimizle, Türkiye’nin lider operatörlerinin merkezi sistemleri,
                                        içerik platformları ve saha iletişim uygulamaları için uçtan uca teknoloji hizmetleri sunuyoruz.
                                    </p>
                                    <p className="font-semibold text-indigo-700">
                                        Operatörlerin dijital platformlarını daha güvenli, hızlı, ölçeklenebilir ve operasyonel olarak sürdürülebilir hale getiriyoruz.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
                                    alt="Telecom Infrastructure"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Detaylı Çözümler */}
                <DetailedServiceSection
                    title="Dijital Platform ve Yazılım Geliştirme"
                    description="Merkez, bayi ve saha ekipleri arasındaki iletişimi güçlendiren ölçeklenebilir, modern yazılım platformları."
                    icon={Layers}
                    items={[
                        {
                            title: "Kurumsal Uygulamalar",
                            desc: "Merkez ve saha iletişimi, çağrı merkezi ve portal çözümleri için özel geliştirilmiş uygulamalar."
                        },
                        {
                            title: "Modern Teknolojiler",
                            desc: "SharePoint, .NET, React ve SQL tabanlı, yüksek hacimli veri akışlarını yönetebilen ölçeklenebilir mimariler."
                        },
                        {
                            title: "Karmaşık Entegrasyonlar",
                            desc: "Farklı sistemlerin birbiriyle konuştuğu, özel iş ihtiyaçlarına yönelik entegrasyon yapıları."
                        },
                        {
                            title: "Kesintisiz İşletim",
                            desc: "Geliştirilen platformların bakım, güncelleme ve kesintisiz çalışma garantisi."
                        }
                    ]}
                />

                <DetailedServiceSection
                    title="İçerik ve Portal Yönetimi"
                    description="Yüzlerce içeriğin ve dokümanın hızlı, güvenli ve organize bir şekilde yönetilmesini sağlayan altyapılar."
                    icon={Database}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Hızlı İçerik Yönetimi",
                            desc: "Editör ekipleri için özel bileşenler ve servis tabanlı içerik akışları."
                        },
                        {
                            title: "Custom Workflow Yapıları",
                            desc: "Onay ve yayın süreçlerini otomatize eden özelleştirilmiş iş akışları."
                        },
                        {
                            title: "SharePoint Altyapı Yönetimi",
                            desc: "Dev, Test, Stg, Prod ortamlarında komple kurulum, farm yönetimi ve güncellemeler."
                        },
                        {
                            title: "Operasyonel Bakım",
                            desc: "Portal altyapılarının düzenli bakımı ve performans optimizasyonu."
                        }
                    ]}
                />

                <DetailedServiceSection
                    title="Operasyon Yönetimi ve Entegrasyon"
                    description="Telekom ekosistemindeki tüm paydaşları bir araya getiren güvenli bilgi akışı servisleri."
                    icon={Activity}
                    items={[
                        {
                            title: "Ekosistem Entegrasyonu",
                            desc: "Merkez, saha ve bayi ağının ortak platform üzerinden doküman ve duyurulara erişimi."
                        },
                        {
                            title: "Bilgi Akışı Güvenliği",
                            desc: "Paydaşlar arasındaki veri trafiğinin güvenli ve kesintisiz sağlanması."
                        },
                        {
                            title: "Merkezi Servis Yapıları",
                            desc: "Arka planda çalışan servisler ile farklı uygulamaların tek çatı altında uyumu."
                        },
                        {
                            title: "İş Süreçleri Yönetimi",
                            desc: "Operasyonel iş süreçlerinin dijital ortamda takibi ve yönetimi."
                        }
                    ]}
                />

                <DetailedServiceSection
                    title="MSP, Sunucu Yönetimi ve 7/24 Operasyon"
                    description="Kritik veri merkezi altyapılarınız için uzman ekiplerle kesintisiz yönetim ve destek hizmetleri."
                    icon={Server}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Veri Merkezi Danışmanlığı",
                            desc: "Operatör veri merkezlerinde görev yapan uzman danışman ekipler."
                        },
                        {
                            title: "Sistem Yönetimi",
                            desc: "Linux, Windows, sanallaştırma, veritabanı ve yedekleme alanlarında L1-L2 seviyesinde yönetim."
                        },
                        {
                            title: "7/24 Operasyonel Destek",
                            desc: "Kritik sistemlerin performans, güvenlik ve kapasite takiplerinin 7/24 yapılması."
                        },
                        {
                            title: "Süreklilik Garantisi",
                            desc: "Servis kesintilerini minimize eden proaktif izleme ve müdahale süreçleri."
                        }
                    ]}
                />

            </div>
        </>
    )
}

function DetailedServiceSection({ title, description, icon: Icon, items, bg = "bg-white" }: { title: string, description: string, icon: any, items: { title: string, desc: string }[], bg?: string }) {
    return (
        <Section className={bg}>
            <Container>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                    <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-200">
                                <Icon className="w-8 h-8" />
                            </div>
                            <Heading variant="h2" className="text-2xl lg:text-3xl text-slate-900">{title}</Heading>
                        </div>
                        <Text className="text-slate-600 leading-relaxed text-lg">
                            {description}
                        </Text>
                        <div className="h-1 w-20 bg-indigo-600 rounded-full mt-6"></div>
                    </div>
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
