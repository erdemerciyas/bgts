"use client"

import Hero from "@/components/ui/Hero"
import { ShoppingCart, Star, Users, Briefcase, BarChart3, ShieldCheck, Zap, Headphones, Settings, Database, Activity } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"

export default function RetailPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Hero
                    title="Akıllı Perakende & E-Ticaret Dönüşümü"
                    subtitle="E-ticaret ve perakende operasyonlarınızı B2B portallar, gelişmiş İK çözümleri ve 7/24 yönetilen hizmetler ile geleceğe taşıyoruz."
                    badge="Perakende 4.0"
                    className="bg-slate-900"
                    backgroundImage="/images/headers/perakende-ve-telekom-cozumleri.jpg"
                />

                {/* Genel Bakış */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Perakende Sektöründe Sürdürülebilirlik</Heading>
                                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Teknolojinin hızlı gelişmesi ile büyüyen e-ticaret sektöründe en önemli sorun, mevcut yapının
                                        (web sitesi veya mobil uygulamanın) güvenlik açığı oluşmadan sürdürülebilirliği ve değişen taleplere
                                        hızlı yazılım çözümleri çıkartma ihtiyacıdır.
                                    </p>
                                    <p>
                                        Ürün yelpazesini firma olarak arttırmak akabinde ciddi lojistik ve depolama sorunlarını da getirmektedir.
                                        Bundan dolayı birçok e-ticaret firması B2B çalışma mantığı ile müşterilerine ulaşmayı tercih etmektedir.
                                    </p>
                                    <p className="font-semibold text-blue-700">
                                        BGTS olarak geliştirdiğimiz B2B destek portalları ile e-ticaret ortam sahibi firmaların
                                        eğitim ve gelişim maliyetlerinde ciddi bütçe tasarrufu yapmalarını sağlıyoruz.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1556740758-90de2929450a?auto=format&fit=crop&q=80"
                                    alt="Retail Strategic Overview"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Detaylı Çözümler */}
                <DetailedServiceSection
                    title="E-Ticaret ve B2B Çözümleri"
                    description="İş ortaklarınızın platformunuzu en verimli şekilde kullanması için özelleştirilmiş portallar ve eğitim altyapıları sunuyoruz."
                    icon={ShoppingCart}
                    items={[
                        {
                            title: "B2B Destek Portalları",
                            desc: "Merkezi e-ticaret platformunun iş ortakları tarafından etkili kullanımı için özel destek ve eğitim portalları."
                        },
                        {
                            title: "Maliyet Tasarrufu",
                            desc: "Eğitim ve gelişim maliyetlerini optimize eden, kendi kendine öğrenen (self-service) bilgi bankaları."
                        },
                        {
                            title: "Acil Durum Yönetimi",
                            desc: "Operasyonel sorunlarda anlık müdahale ve çözüm sağlayan destek modülleri."
                        },
                        {
                            title: "Entegrasyon Yetkinliği",
                            desc: "Mevcut e-ticaret platformlarının iş ortakları sistemleriyle sorunsuz entegrasyonu."
                        }
                    ]}
                />

                <DetailedServiceSection
                    title="İK ve Çalışan Deneyimi (HR Tech)"
                    description="Sektördeki yüksek çalışan sirkülasyonunu yönetmek ve aidiyeti artırmak için yapay zeka destekli İK çözümleri."
                    icon={Users}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Sirkülasyon Yönetimi",
                            desc: "Turnover oranlarını düşürmeye yönelik çalışan bağlılığı ve memnuniyet analizleri."
                        },
                        {
                            title: "Uçtan Uca İK Süreçleri",
                            desc: "Performans Değerlendirme, Eğitim, İşe Alım, Bordro ve Özlük hakları takibi."
                        },
                        {
                            title: "HR/AI Çözümleri",
                            desc: "Çalışan sorun ve taleplerine yapay zeka ile anında yanıt veren akıllı asistanlar."
                        },
                        {
                            title: "Kariyer ve Gelişim",
                            desc: "Çalışanların kişisel gelişimlerini destekleyen eğitim ve kariyer planlama modülleri."
                        }
                    ]}
                />

                <DetailedServiceSection
                    title="Teknoloji ve Altyapı (DevOps & ITSM)"
                    description="Ölçeklenebilir, güvenli ve global standartlarda yönetilen teknoloji altyapıları."
                    icon={Settings}
                    items={[
                        {
                            title: "Ölçeklenebilir Altyapı",
                            desc: "Kullanıcı sayılarındaki artışı karşılayan, yüksek yük altında bile sorunsuz çalışan DevOps mimarileri."
                        },
                        {
                            title: "Global ITSM Uyumluluğu",
                            desc: "ITIL ve ISO27001 standartlarında süreç yönetimi, SLA takibi ve çözüm üretimi."
                        },
                        {
                            title: "Gelişmiş Raporlama",
                            desc: "PowerBI ve Qlik entegrasyonları ile yönetici ve operasyonel gösterge panelleri (Dashboards)."
                        },
                        {
                            title: "7/24 Kesintisiz Hizmet",
                            desc: "Perakendenin dinamik yapısına uygun, tüm bileşenlerin anlık takibi ve hızlı müdahale."
                        }
                    ]}
                />

                <DetailedServiceSection
                    title="Yönetilen Hizmetler ve NOC"
                    description="Sistemlerinizin sağlığını 7/24 izleyen, güncelleyen ve koruyan profesyonel operasyon merkezi."
                    icon={Activity}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Servis Bazlı İzleme",
                            desc: "Zabbix ve NOC modelleri ile servis ağacı tabanlı detaylı sistem izleme."
                        },
                        {
                            title: "Uç Nokta Yönetimi (SCCM)",
                            desc: "Kurumsal uygulama dağıtımı, yama yönetimi, işletim sistemi imajları ve ajan sağlığı takibi."
                        },
                        {
                            title: "Lisans ve Uyumluluk",
                            desc: "Yazılım lisans yönetimi, kullanım ölçümleme ve kurumsal uyumluluk raporlaması."
                        },
                        {
                            title: "Son Kullanıcı Desteği",
                            desc: "ITIL standartlarında yerinde veya uzaktan profesyonel son kullanıcı destek hizmetleri."
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
                            <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                                <Icon className="w-8 h-8" />
                            </div>
                            <Heading variant="h2" className="text-2xl lg:text-3xl text-slate-900">{title}</Heading>
                        </div>
                        <Text className="text-slate-600 leading-relaxed text-lg">
                            {description}
                        </Text>
                        <div className="h-1 w-20 bg-blue-600 rounded-full mt-6"></div>
                    </div>
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
