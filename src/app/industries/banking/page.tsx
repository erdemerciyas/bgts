"use client"

import Hero from "@/components/ui/Hero"
import { Building2, ShieldCheck, TrendingUp, Users, Wallet, CreditCard, PieChart, Activity, Globe, ArrowRight, Server, Database, Smartphone, FileText, Briefcase, UserCheck, Layers, BadgeCheck, Zap, Lock } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"

export default function BankingPage() {
    return (
        <>
            <div className="bg-white min-h-screen">

                <Hero
                    title="Bankacılık ve Sigorta Sektöründe Dijital Dönüşüm"
                    subtitle="İş ortaklarımızın dijital dönüşüm ajandalarını uçtan uca hayata geçiriyor, güvenilir ve ölçeklenebilir teknoloji çözümleri sunuyoruz."
                    badge="Sektörel Çözümler"
                    className="bg-slate-900"
                    backgroundImage="/images/headers/proje-yapim-sekillerimiz.jpg"
                />

                {/* Genel Bakış */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Genel Bakış</Heading>
                                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Bankacılık ve sigorta sektöründeki iş ortaklarımız ile, dijital dönüşüm ajandalarını uçtan uca hayata geçiriyoruz.
                                        Alanında uzman, finans tecrübesi yüksek teknik ekiplerimizle; iş sürekliliği kritik olan sistemler için
                                        güvenilir, ölçeklenebilir ve sürdürülebilir yazılım ve altyapı çözümleri sunuyoruz.
                                    </p>
                                    <p>
                                        İş ortaklarımızın stratejik hedeflerini ve önceliklerini merkeze alarak, ihtiyaçlarını analiz ediyor ve
                                        bu ihtiyaçlara en uygun metodoloji ve teslim modeliyle projeleri hayata geçiriyoruz.
                                        Dijital dönüşüm yolculuğunda yalnızca bir tedarikçi değil, süreci sahiplenen uzun vadeli bir teknoloji iş ortağı olarak konumlanıyoruz.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                                    alt="Banking Overview"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Bankacılık ve Sigorta Odaklı Uçtan Uca Yetkinlik */}
                <Section className="bg-slate-50">
                    <Container>
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <Heading variant="h2" className="mb-8">Bankacılık ve Sigorta Odaklı Uçtan Uca Yetkinlik</Heading>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    1997 yılındaki kuruluşumuzdan bu yana istikrarlı bir şekilde büyüyen organizasyonumuz,
                                    bugün güçlü kadrosuyla özel ve kamu bankaları, sigorta şirketleri ve ödeme sistemleri
                                    alanında faaliyet gösteren kurumlarla uzun yıllara dayanan sağlam iş birlikleri yürütmektedir.
                                </p>
                                <p>
                                    Gerçekleştirdiğimiz 100’ün üzerinde proje ile; temel bankacılık, dijital kanallar,
                                    ödeme sistemleri ile veri ve analitik çözümleri başta olmak üzere finans ekosisteminin
                                    kritik iş alanlarında aktif rol alıyoruz.
                                </p>
                                <p>
                                    Sektöre özgü iş süreçlerine olan derin hâkimiyetimiz sayesinde; mevcut sistemlerin
                                    modernizasyonundan sıfırdan proje ve ürün geliştirme süreçlerine kadar her aşamada
                                    hızlı, doğru ve sürdürülebilir çözümler sunuyoruz.
                                </p>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Finans Ekosistemine Özelleştirilmiş Çözümler (Summary List) */}
                <Section className="pb-0">
                    <Container>
                        <div className="mb-12">
                            <Heading variant="h2" className="mb-6 text-slate-900">Finans Ekosistemine Özelleştirilmiş Çözümler</Heading>
                            <Text className="text-slate-600 text-lg mb-8">
                                Bankacılık ve sigortaya temas eden tüm alanlarda uçtan uca proje geliştirme kabiliyetine sahibiz.
                                Bu geniş yetkinliklerimiz ile kurumların hem bugünkü ihtiyaçlarına hem de gelecekteki dönüşüm hedeflerine değer katan çözümler sunuyoruz.
                            </Text>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                                {[
                                    "Temel Bankacılık Uygulamaları",
                                    "Ödeme Sistemleri ve Kartlı Çözümler",
                                    "Yatırım Bankacılığı",
                                    "Hazine",
                                    "Dijital Bankacılık Kanalları",
                                    "CRM, IVR Çözümleri",
                                    "Veri & Analitik, Risk ve Müşteri Analitiği",
                                    "Kurumsal Uygulamalar (Muhasebe, Tedarik Zinciri, İç Portaller)",
                                    "İnsan Kaynakları (İK) Sistemleri",
                                    "Altyapı Modernizasyonu ve Entegrasyon Projeleri"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <BadgeCheck className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="font-medium text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Detailed Service Sections */}

                {/* 1. Temel Bankacılık Uygulamaları */}
                <DetailedServiceSection
                    title="Temel Bankacılık Uygulamaları"
                    description="Bankacılığın omurgasını oluşturan sistemlerde, teminattan krediye, nakit yönetiminden yasal takibe kadar uçtan uca çözümler."
                    icon={Wallet}
                    items={[
                        {
                            title: "Teminat Yönetimi Projesi",
                            desc: ""
                        },
                        {
                            title: "Vadeli Mevduat",
                            desc: ""
                        },
                        {
                            title: "Bireysel, Kobi ve Ticari Krediler",
                            desc: "İş birlikleri, tahsis kullandırım, ödeme planı, sorunlu kredi yönetimi, yasal takip."
                        },
                        {
                            title: "Nakit Yönetimi Çözümleri Projesi",
                            desc: ""
                        },
                        {
                            title: "Hazine FX ve Türev Ürünler",
                            desc: ""
                        },
                        {
                            title: "Kredili Mevduat",
                            desc: ""
                        },
                        {
                            title: "Şube Kanal Yönetimi",
                            desc: "Dijital Talimat Proje, Para Çekme Yatırma Projesi."
                        },
                        {
                            title: "Başvuru Sahteciliği Projesi",
                            desc: ""
                        },
                        {
                            title: "Gayrinakdi Ürünler Projesi",
                            desc: ""
                        },
                        {
                            title: "Vergi ve Fatura Modülleri",
                            desc: ""
                        },
                        {
                            title: "E-Fatura, E-Haciz Entegrasyon Projeleri",
                            desc: ""
                        }
                    ]}
                />

                {/* 2. Ödeme Sistemleri */}
                <DetailedServiceSection
                    title="Ödeme Sistemleri"
                    description="Kartlı ödemelerden dijital cüzdanlara, POS yönetiminden takas sistemlerine kadar güvenli altyapılar."
                    icon={CreditCard}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Kart Ürünleri",
                            desc: ""
                        },
                        {
                            title: "Kart İş Geliştirme, Basım",
                            desc: ""
                        },
                        {
                            title: "Pos Ürün Entegrasyonu",
                            desc: ""
                        },
                        {
                            title: "Issuing",
                            desc: ""
                        },
                        {
                            title: "Acquiring",
                            desc: ""
                        },
                        {
                            title: "Takasnet",
                            desc: ""
                        },
                        {
                            title: "Müşteri Onboarding",
                            desc: ""
                        },
                        {
                            title: "E-Cüzdan",
                            desc: ""
                        }
                    ]}
                />

                {/* Odağımız: Güçlü Ekip, Sürdürülebilir Destek */}
                <Section className="bg-gradient-to-b from-white to-slate-50">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                        alt="Team Collaboration"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <Heading variant="h2" className="mb-6">Odağımız; Güçlü Ekip, Sürdürülebilir Destek</Heading>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">Uzman Teknik Kadro</h4>
                                            <p className="text-slate-600">
                                                Yazılım mühendisi, analist, test mühendisi ve mimar rollerinden oluşan ekiplerimizle;
                                                anahtar teslim, time & material veya hibrit çalışma modellerini başarıyla hayata geçiriyoruz.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 text-green-600">
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">Genç Mühendis Programı</h4>
                                            <p className="text-slate-600">
                                                Ayrıca Genç Mühendis Programımız ile sektöre özel yetiştirilmiş yeni yetenekleri ekosistemimize kazandırıyor,
                                                projelerimizin sürdürülebilirliğini uzun vadede güvence altına alıyoruz.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

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

function Target(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}
