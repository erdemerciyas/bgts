"use client"

import Hero from "@/components/ui/Hero"
import { Shield, Lock, Radio, Crosshair, Server, FileCheck, CheckCircle2, ShieldCheck, FileText, Code, Settings, Database, Cloud, Network, Activity, LifeBuoy, Users, Layers, Cpu } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"

export default function DefensePage() {
    return (
        <>
            <div className="bg-white min-h-screen">

                <Hero
                    title="Milli Savunma İçin Kritik ve Güvenilir Teknolojiler"
                    subtitle="TSK ve savunma sanayi ekosistemi için 15288, 12207 ve 42020 standartlarına uygun, güvenli ve yüksek performanslı yazılım ve altyapı çözümleri."
                    badge="Savunma & Havacılık"
                    className="bg-slate-900"
                    backgroundImage="/images/headers/savunma-sanayi-teknolojileri.png"
                />

                {/* Genel Bakış */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Savunma Sanayi Odaklı Yaklaşım</Heading>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        Savunma sanayi projelerinde öncelikli hedefimiz, <strong className="text-blue-700">güvenilir, yüksek performanslı ve güvenli</strong> yazılım çözümleri sunmaktır.
                                        Kritik görev yazılımlarının sahada doğru, hızlı ve hatasız çalışmasını sağlamak için gömülü yazılımlardan web ve bulut tabanlı sistemlere kadar tüm geliştirme süreçlerini bütüncül şekilde yönetiyoruz.
                                    </p>
                                    <p>
                                        Yazılım geliştirme ve tasarım faaliyetlerinde <strong className="text-slate-900">15288, 12207 ve 42020</strong> standartlarına uygun süreçleri işletiyoruz.
                                        Gereksinim analizinden mimari tasarım, geliştirme ve doğrulama süreçlerine kadar her adımda izlenebilirlik sağlıyoruz.
                                    </p>
                                    <div className="flex gap-4 mt-6">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700">
                                            <ShieldCheck className="w-4 h-4 text-blue-600" />
                                            20000 BT Hizmet Yönetimi
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700">
                                            <Lock className="w-4 h-4 text-blue-600" />
                                            27001 Bilgi Güvenliği
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/industries/defense/gorev-kritik-sistemler-aviyonik.png"
                                    alt="Defense Technology"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Detailed Services Sections */}

                {/* 1. İş Analizi Hizmetleri */}
                <DetailedServiceSection
                    title="İş Analizi Hizmetleri"
                    description="Savunma projelerinde gereksinimlerin doğru anlaşılması, operasyonel modellemelerin gerçekleştirilmesi ve izlenebilirliğin sağlanması amacıyla kapsamlı iş analizi hizmetleri sunuyoruz."
                    icon={FileText}
                    items={[
                        {
                            title: "Misyon Bazlı İhtiyaç Analizi",
                            desc: "IIBA uyumlu metodolojilerle paydaş gereksinimlerini topluyor, iş hedeflerini belgeliyor ve operasyonel senaryolarla doğruluyoruz."
                        },
                        {
                            title: "Operasyonel Senaryo ve Süreç Modelleme",
                            desc: "BPMN, UML, SysML ve ArchiMate kullanarak iş süreçlerini, sistem davranışlarını ve kurumsal mimariyi modelliyoruz."
                        },
                        {
                            title: "İşletim Kavramı (ConOps) Üretimi",
                            desc: "Sistemin operasyonel kullanımını ve görev senaryolarını tanımlayan, tüm paydaşlar için ortak anlayış sağlayan ConOps dokümanları hazırlıyoruz."
                        },
                        {
                            title: "Kavramsal Tasarım ve Fizibilite",
                            desc: "15288 ve 12207 standartlarıyla entegre, teknik ve maliyet odaklı fizibilite ve kavramsal tasarım çalışmaları."
                        },
                        {
                            title: "Gereksinim Çıkartımı ve Dokümantasyon",
                            desc: "Paydaş, Sistem ve Alt Sistem gereksinimlerini izlenebilir (RTM) ve test edilebilir şekilde dokümante ediyoruz."
                        }
                    ]}
                />

                {/* 2. Yazılım Geliştirme Hizmetleri */}
                <DetailedServiceSection
                    title="Yazılım Geliştirme Hizmetleri"
                    description="Modern yazılım yaşam döngüsü ve doğrulama süreçlerine uygun, 12207 standardında C++, Java, C# dilleriyle bütüncül mühendislik desteği."
                    icon={Code}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Yazılım Mimari Tasarımı",
                            desc: "42010 ve 42020 uyumlu; gerçek zamanlı, modüler ve güvenli mimari tasarımlar. UML/SysML modelleme."
                        },
                        {
                            title: "Bilgi Sistem Yazılımları",
                            desc: "Operasyonel yönetim, kayıt sistemleri, büyük veri ve loglama ihtiyaçlarına yönelik kurumsal çözümler."
                        },
                        {
                            title: "Komuta Kontrol Yazılımları",
                            desc: "Gerçek zamanlı veri işleme, sensör füzyonu, taktik veri linkleri ve simülasyon/davranış motoru geliştirme."
                        },
                        {
                            title: "Gömülü Sistem Yazılımları",
                            desc: "RTOS, FPGA ve mikrodenetleyiciler için sürücü ve görev yazılımları. Askeri standartlara uygun doğrulama."
                        },
                        {
                            title: "Güvenli Kodlama ve Askeri Standartlar",
                            desc: "Secure Coding, OWASP ve askeri politikalara uygun, statik analiz ve zafiyet taramalarıyla güçlendirilmiş kodlama."
                        },
                        {
                            title: "Yazılım Geliştirme Modeli",
                            desc: "İhtiyaca göre Agile/Scrum (Esnek) veya Şelale/V-Model (Doğrulama Odaklı) proje yönetim yaklaşımları."
                        }
                    ]}
                />

                {/* 3. Test ve Doğrulama Hizmetleri */}
                <DetailedServiceSection
                    title="Test ve Doğrulama Hizmetleri"
                    description="Sistem ve yazılımların gereksinimlere uygunluğunu 29119 ve 829 standartları çerçevesinde garanti altına alıyoruz."
                    icon={CheckCircle2}
                    items={[
                        {
                            title: "İşlev ve Sistem Testleri",
                            desc: "Bileşen, entegrasyon ve sistem seviyesinde işlevsellik doğrulama testleri."
                        },
                        {
                            title: "Otomasyon Testleri",
                            desc: "Tekrarlanabilirliği ve hızı artıran, sürekli entegrasyona dahil otomatik test senaryoları."
                        },
                        {
                            title: "Performans, Güvenlik ve Dayanıklılık",
                            desc: "Yük, stres, dayanıklılık ve güvenlik testleri ile kritik görev koşullarında kararlılık garantisi."
                        },
                        {
                            title: "Kabul Test Planlaması",
                            desc: "Kullanıcı ihtiyaçlarına ve operasyonel senaryolara dayalı kapsamlı kabul test planları."
                        },
                        {
                            title: "Dokümantasyon ve Raporlama",
                            desc: "İzlenebilir, doğrulanabilir ve karar destek süreçlerini besleyen detaylı test raporlaması."
                        }
                    ]}
                />

                {/* 4. DevOps Hizmetleri */}
                <DetailedServiceSection
                    title="DevOps Hizmetleri"
                    description="Geliştirme ve operasyon süreçlerini entegre ederek hızlı, güvenilir ve izlenebilir yazılım teslimatı sağlıyoruz."
                    icon={Settings}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Geliştirme Araçları",
                            desc: "Git, Jira, Azure DevOps ile kaynak kod yönetimi, iş takibi ve ekip koordinasyonu."
                        },
                        {
                            title: "Sürekli İnşa (CI) ve Dağıtım (CD)",
                            desc: "Jenkins, Azure DevOps pipeline'ları ile otomatik derleme, test ve dağıtım süreçleri."
                        },
                        {
                            title: "Otomatik Test Entegrasyonu",
                            desc: "CI/CD hattına entegre birim ve statik analiz testleri ile erken hata tespiti."
                        },
                        {
                            title: "Sürüm ve Dağıtım Yönetimi",
                            desc: "Güvenli sürüm kontrolü, otomatik dağıtım politikaları ve rollback mekanizmaları."
                        },
                        {
                            title: "Konteyner ve Kubernetes",
                            desc: "Docker ve Kubernetes ile ölçeklenebilir, taşınabilir mikrosistem mimarileri."
                        }
                    ]}
                />

                {/* 5. BT Altyapı Hizmetleri */}
                <DetailedServiceSection
                    title="BT Altyapı Hizmetleri"
                    description="Güvenli, ölçeklenebilir ve yönetilebilir altyapı çözümleriyle operasyonel sürekliliği sağlıyoruz."
                    icon={Server}
                    items={[
                        {
                            title: "Altyapı Tasarımı ve Yönetimi",
                            desc: "Tüm yaşam döngüsünü kapsayan, yüksek kullanılabilirlikli sistem tasarımı ve yönetimi."
                        },
                        {
                            title: "Ağ ve İletişim Altyapısı",
                            desc: "Yüksek güvenlikli LAN/WAN tasarımları, firewall ve güvenli iletişim protokolleri."
                        },
                        {
                            title: "Sunucu ve Depolama Sistemleri",
                            desc: "Fiziksel/Sanal sunucu kümeleri ve güvenli, ölçeklenebilir depolama mimarileri."
                        },
                        {
                            title: "Yedekleme ve Felaket Kurtarma",
                            desc: "İş sürekliliği için replikasyon, otomatik yedekleme ve felaket kurtarma planları."
                        },
                        {
                            title: "Veri Merkezi Tasarımı",
                            desc: "Enerji verimliliği ve fiziksel güvenlik odaklı veri merkezi mimari danışmanlığı."
                        }
                    ]}
                />

                {/* 6. Yönetilen BT Hizmetleri */}
                <DetailedServiceSection
                    title="Yönetilen BT Hizmetleri"
                    description="20000 ve 27001 standartlarında, 7/24 izlenen ve yönetilen güvenli operasyonel hizmetler."
                    icon={Activity}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Operasyonel Yük Yönetimi",
                            desc: "Sunucu ve ağ altyapısının günlük bakım, yönetim ve optimizasyonu (Ansible, Puppet)."
                        },
                        {
                            title: "İzleme (Monitoring)",
                            desc: "7/24 Nagios, Zabbix gibi araçlarla proaktif sistem ve servis izleme."
                        },
                        {
                            title: "Performans ve Kapasite",
                            desc: "Sürekli performans analizi, raporlama ve geleceğe yönelik kapasite planlaması."
                        },
                        {
                            title: "Güvenlik Yönetimi",
                            desc: "Firewall, IDS/IPS yönetimi, log analizi ve proaktif tehdit tespiti."
                        },
                        {
                            title: "Yardım Masası",
                            desc: "Kullanıcı talepleri için SLA tabanlı 1. ve 2. seviye teknik destek."
                        },
                        {
                            title: "Olay ve Değişiklik Yönetimi",
                            desc: "ITIL uyumlu incident ve change management süreçleri."
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

function StandardCard({ code, title }: { code: string, title: string }) {
    return (
        <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700">
            <FileCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
                <div className="font-bold text-white text-sm">{code}</div>
                <div className="text-xs text-slate-400">{title}</div>
            </div>
        </div>
    )
}
