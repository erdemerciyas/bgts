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
                                    </p>
                                    <p className="font-semibold text-blue-700">
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

                {/* Uçtan Uca Yetkinlik & İstatistikler */}
                <Section className="bg-slate-50">
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <Heading variant="h2" className="mb-4">Uçtan Uca Yetkinlik</Heading>
                            <Text variant="large">
                                1997 yılındaki kuruluşumuzdan bu yana istikrarlı bir şekilde büyüyen organizasyonumuz,
                                bugün güçlü kadrosuyla sektörün kritik oyuncularıyla sağlam iş birlikleri yürütmektedir.
                            </Text>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <div className="text-4xl font-bold text-slate-900 mb-2">1997</div>
                                <Text className="text-slate-500">Yılından Beri Sektörde</Text>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
                                    <Layers className="w-8 h-8" />
                                </div>
                                <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
                                <Text className="text-slate-500">Gerçekleştirilen Proje</Text>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div className="text-4xl font-bold text-slate-900 mb-2">Uçtan Uca</div>
                                <Text className="text-slate-500">Proje Geliştirme Kabiliyeti</Text>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Detailed Service Sections */}

                {/* 1. Temel Bankacılık Çözümleri */}
                <DetailedServiceSection
                    title="Temel Bankacılık Çözümleri"
                    description="Kredi yönetiminden mevduat işlemlerine, yasal takiplerden şube operasyonlarına kadar bankacılığın omurgasını oluşturan sistemlerde uçtan uca modernizasyon ve geliştirme hizmeti sunuyoruz."
                    icon={Wallet}
                    items={[
                        {
                            title: "Kredi ve Tahsis Yönetimi",
                            desc: "Bireysel, Ticari ve KOBİ kredileri için tahsis, kullandırım, ödeme planı oluşturma ve yapılandırma süreçleri."
                        },
                        {
                            title: "Teminat ve Nakit Yönetimi",
                            desc: "Merkezi teminat yönetimi, nakit akışı planlama, hazine FX işlemleri ve türev ürün modülleri."
                        },
                        {
                            title: "Mevduat ve Hesap İşlemleri",
                            desc: "Vadeli/Vadesiz hesaplar, Kredili Mevduat Hesabı (KMH) ve dinamik faiz/komisyon yapıları."
                        },
                        {
                            title: "Yasal Takip ve Sorunlu Krediler",
                            desc: "Gecikmiş alacaklar, yasal takip süreçleri, idari takip ve tahsilat performans yönetimi."
                        },
                        {
                            title: "Yasal Uyumluluk ve Raporlama",
                            desc: "E-Fatura, E-Haciz entegrasyonları, vergi modülleri ve BDDK/TCMB uyumlu raporlama altyapıları."
                        },
                        {
                            title: "Şube ve Kanal Yönetimi",
                            desc: "Gişe işlemleri (Para yatırma/çekme), dijital talimat yönetimi ve başvuru sahteciliği önleme sistemleri."
                        }
                    ]}
                />

                {/* 2. Ödeme Sistemleri Teknolojileri */}
                <DetailedServiceSection
                    title="Ödeme Sistemleri Teknolojileri"
                    description="Kartlı ödemelerden dijital cüzdanlara, POS yönetiminden takas sistemlerine kadar güvenli ve hızlı ödeme altyapıları tasarlıyoruz."
                    icon={CreditCard}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Kart İhraç (Issuing)",
                            desc: "Kredi kartı, banka kartı ve ön ödemeli kartların yaşam döngüsü yönetimi, basım ve stok takibi."
                        },
                        {
                            title: "Üye İşyeri (Acquiring)",
                            desc: "POS, Sanal POS ve ÖKC entegrasyonları, üye işyeri yönetimi ve komisyon hesaplama motorları."
                        },
                        {
                            title: "Alternatif Ödeme ve E-Cüzdan",
                            desc: "Dijital cüzdan altyapıları, QR kod ile ödeme ve kapalı devre ödeme sistemleri."
                        },
                        {
                            title: "Takas ve Mutabakat",
                            desc: "Bankalararası Kart Merkezi (BKM), Takasnet ve uluslararası şema (Visa/Mastercard) takas entegrasyonları."
                        },
                        {
                            title: "Dijital Müşteri Edinimi",
                            desc: "Uzaktan müşteri edinimi (Onboarding), biyometrik doğrulama ve KYC (Müşterini Tanı) süreçleri."
                        },
                        {
                            title: "Kart İş Geliştirme",
                            desc: "Sadakat programları, kampanya yönetimi, taksitlendirme ve ödül puan sistemleri."
                        }
                    ]}
                />

                {/* 3. Finansal Teknoloji & Altyapı Modernizasyonu */}
                <DetailedServiceSection
                    title="Finansal Teknoloji & Modernizasyon"
                    description="Geleceğin finans dünyasına uyum sağlamanız için altyapı modernizasyonu, veri analitiği ve dijital kanal çözümleri sunuyoruz."
                    icon={Server}
                    items={[
                        {
                            title: "Altyapı Modernizasyonu",
                            desc: "Monolitik bankacılık uygulamalarının mikroservis mimarisine dönüşümü ve konteynerizasyon süreçleri."
                        },
                        {
                            title: "Veri ve Analitik",
                            desc: "Büyük veri işleme, müşteri segmentasyonu, risk analitiği ve yapay zeka destekli karar destek sistemleri."
                        },
                        {
                            title: "Dijital Kanallar",
                            desc: "İnternet ve mobil bankacılık uygulamaları için güvenli, kullanıcı dostu API ve arayüz geliştirmeleri."
                        },
                        {
                            title: "Süreç Otomasyonu (RPA)",
                            desc: "Operasyonel verimliliği artırmak için rutin bankacılık işlemlerinin robotik süreç otomasyonu ile yönetimi."
                        },
                        {
                            title: "Açık Bankacılık",
                            desc: "PSD2 uyumlu API geçitleri, üçüncü parti sağlayıcı (TPP) entegrasyonları ve servis bankacılığı (BaaS)."
                        }
                    ]}
                />

                {/* Çalışma Modeli & Sürdürülebilirlik */}
                <Section className="bg-gradient-to-b from-slate-50 to-white">
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
                                <Heading variant="h2" className="mb-6">Odağımız: Güçlü Ekip, Sürdürülebilir Destek</Heading>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">Uzman Teknik Kadro</h4>
                                            <p className="text-slate-600">
                                                Yazılım mühendisi, analist, test mühendisi ve mimar rollerinden oluşan yetkin ekiplerimizle;
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
                                                Sektöre özel yetiştirilmiş yeni yetenekleri ekosistemimize kazandırıyor,
                                                projelerimizin sürdürülebilirliğini ve bilgi birikiminin devamlılığını uzun vadede güvence altına alıyoruz.
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
