import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    Server, Activity, Database, Code, Cpu, Globe, Shield, ShoppingBag,
    CheckCircle2, ArrowRight, Terminal, FileText, PlayCircle, Linkedin, Briefcase,
    Zap, Bot, Landmark, TrendingUp, Radio, ShieldAlert
} from "lucide-react"
import { STYLES } from "./data"

export const ServicesMenu = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Hizmetler menüsü"
    >
        <div className="flex min-h-[400px]">
            {/* Yazılım Geliştirme - Column 1 */}
            <div className="w-1/2 bg-[#f8fafc] p-6 border-r border-slate-100 flex flex-col">
                <h3 className={STYLES.columnHeader.replace("mb-6", "mb-3")}>YAZILIM GELİŞTİRME</h3>
                <div className="grid gap-1 mt-1">
                    <Link href="/services/software-development#banking" className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                <Landmark className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm">Bankacılık & Finans</h4>
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">Yüksek performanslı işlem altyapıları.</p>
                            </div>
                        </div>
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-white ml-2">
                            <Image src="/images/navigation/industries/bgts-banking-finance.png" alt="Bankacılık" fill className="object-contain p-1" />
                        </div>
                    </Link>
                    <Link href="/services/software-development#trading" className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm">E-Trading & Market Data</h4>
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">Düşük gecikmeli borsacılık çözümleri.</p>
                            </div>
                        </div>
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-white ml-2">
                            <Image src="/images/navigation/industries/bgts-retail-ecommerce.png" alt="Trading" fill className="object-contain p-1" />
                        </div>
                    </Link>
                    <Link href="/services/software-development#telecom" className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                <Radio className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm">Telekom & İletişim</h4>
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">Dijital iletişim platformları.</p>
                            </div>
                        </div>
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-white ml-2">
                            <Image src="/images/navigation/industries/bgts-telecom-digital-channels.png" alt="Telekom" fill className="object-contain p-1" />
                        </div>
                    </Link>
                    <Link href="/services/software-development#fraud" className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm">Fraud & Risk</h4>
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">AI destekli güvenlik doğrulama.</p>
                            </div>
                        </div>
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-white ml-2">
                            <Image src="/images/navigation/industries/bgts-defense-industry.png" alt="Fraud" fill className="object-contain p-1" />
                        </div>
                    </Link>
                    <Link href="/services/software-development#bigdata" className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                <Database className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm">Büyük Veri</h4>
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">Gerçek zamanlı veri işleme.</p>
                            </div>
                        </div>
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-white ml-2">
                            <Image src="/images/navigation/services/bgts-big-data-analytics-services.png" alt="Big Data" fill className="object-contain p-1" />
                        </div>
                    </Link>
                    <Link href="/services/software-development#ai" className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm">Yapay Zeka</h4>
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">AI-First mimari çözümler.</p>
                            </div>
                        </div>
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-white ml-2">
                            <Image src="/images/navigation/services/bgts-artificial-intelligence-automation.png" alt="AI" fill className="object-contain p-1" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* MSP Section - Column 2 */}
            <div className="w-1/2 bg-blue-50/40 p-6 flex flex-col">
                <h3 className={STYLES.columnHeader.replace("mb-6", "mb-3")}>MSP & YÖNETİLEN HİZMETLER</h3>

                <div className="grid gap-1 mt-1">
                    {[
                        { title: "Veri Merkezi", desc: "Tier-3 standartlarında altyapı.", icon: Server, href: "/services/managed-services", img: "/images/navigation/services/bgts-data-center-infrastructure.png" },
                        { title: "Desktop Support App", desc: "Son kullanıcı destek çözümleri.", icon: Terminal, href: "/services", img: "/images/navigation/services/bgts-desktop-support.png" },
                        { title: "ITSM as a Service", desc: "IT hizmet süreç yönetimi.", icon: FileText, href: "/services", img: "/images/navigation/services/bgts-itsm-service.png" },
                        { title: "SCCM as a Service", desc: "Merkezi yama ve envanter.", icon: Database, href: "/services", img: "/images/navigation/services/bgts-sccm-service.png" },
                        { title: "Monitoring as a Service", desc: "7/24 proaktif izleme.", icon: Activity, href: "/services", img: "/images/navigation/services/bgts-monitoring-service.png" },
                        { title: "DevOps as a Service", desc: "CI/CD ve otomasyon.", icon: Code, href: "/services/devops", img: "/images/navigation/services/bgts-devops-sre-services.png" },
                    ].map((item, i) => (
                        <Link key={i} href={item.href} className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm">{item.title}</h4>
                                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                                </div>
                            </div>
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-white ml-2">
                                <Image src={item.img} alt={item.title} fill className="object-contain p-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
)

export const IndustriesMenu = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Sektörler menüsü"
    >
        <div className="flex">
            <div className="w-[50%] bg-blue-50/50 p-10 border-r border-blue-100 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>KURUMSAL & SAVUNMA</h3>
                <div className="space-y-10">
                    <Link href="/industries/banking" className={STYLES.linkGroup}>
                        <Globe className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Bankacılık & Finans</h4><p className={STYLES.itemDesc}>Dijital kanallar ve regülasyon uyumu için uçtan uca çözümler.</p></div>
                            <Image src="/images/navigation/industries/bgts-banking-finance.png" alt="Banking" width={96} height={64} className={STYLES.imageThumbnail} />
                        </div>
                    </Link>
                    <Link href="/industries/defense" className={STYLES.linkGroup}>
                        <Shield className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Savunma Sanayi</h4><p className={STYLES.itemDesc}>15288 & 12207 standartlarına uygun kritik görev sistemleri.</p></div>
                            <Image src="/images/navigation/industries/bgts-defense-industry.png" alt="Defense" width={96} height={64} className={STYLES.imageThumbnail} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-[50%] bg-[#f8f9fa] p-10 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>TİCARİ & TELEKOM</h3>
                <div className="space-y-10">
                    <Link href="/industries/retail-telecom" className={STYLES.linkGroup}>
                        <Server className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Telekomünikasyon</h4><p className={STYLES.itemDesc}>OSS/BSS ve dijital kanal platformlarında 7/24 erişilebilirlik.</p></div>
                            <Image src="/images/navigation/industries/bgts-telecom-digital-channels.png" alt="Telecom" width={96} height={64} className={STYLES.imageThumbnail} />
                        </div>
                    </Link>
                    <Link href="/industries/retail-telecom" className={STYLES.linkGroup}>
                        <ShoppingBag className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Perakende & E-Ticaret</h4><p className={STYLES.itemDesc}>Omnichannel yapılar ve yüksek hacimli işlem yönetimi.</p></div>
                            <Image src="/images/navigation/industries/bgts-retail-ecommerce.png" alt="Retail" width={96} height={64} className={STYLES.imageThumbnail} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </motion.div>
)

export const ProductsMenu = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Ürünler menüsü"
    >
        <div className="flex">
            <div className="w-1/2 bg-cyan-50/50 p-10 border-r border-cyan-100 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>KURUMSAL ÇÖZÜMLER</h3>
                <div className="space-y-10">
                    <Link href="/products" className={STYLES.linkGroup}>
                        <CheckCircle2 className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                        <div className="flex justify-between items-start gap-3"><div className="flex-1"><h4 className={STYLES.itemTitle}>HCM Platformu</h4><p className={STYLES.itemDescItalic}>“İK operasyonlarınızı uçtan uca dijitalleştiren HCM platformumuzla verimlilik kazanımlarını maksimize ediyoruz.”</p></div><Image src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&q=80" alt="HCM" width={96} height={64} className={STYLES.imageThumbnail} /></div>
                    </Link>
                    <Link href="/products" className={STYLES.linkGroup}>
                        <CheckCircle2 className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                        <div className="flex justify-between items-start gap-3"><div className="flex-1"><h4 className={STYLES.itemTitle}>PRAXILA</h4><p className={STYLES.itemDescItalic}>“Yeni nesil otomasyon ve operasyon yönetimi platformumuz Praxila&apos;yı son aşamaya getiriyoruz.”</p></div><Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80" alt="Praxila" width={96} height={64} className={STYLES.imageThumbnail} /></div>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 bg-[#f5f2f0] p-10 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>SEKTÖREL UYGULAMALAR</h3>
                <div className="space-y-10">
                    <Link href="/products" className={STYLES.linkGroup}>
                        <CheckCircle2 className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                        <div className="flex justify-between items-start gap-3"><div className="flex-1"><h4 className={STYLES.itemTitle}>Sistem Entegrasyonu</h4><p className={STYLES.itemDescItalic}>“Yazılım geliştirme ve entegrasyon yetkinlikleriyle operatörlerin dijital platformlarını güvenli hale getiriyoruz.”</p></div><Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80" alt="Integration" width={96} height={64} className={STYLES.imageThumbnail} /></div>
                    </Link>
                    <Link href="/products" className={STYLES.linkGroup}>
                        <CheckCircle2 className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                        <div className="flex justify-between items-start gap-3"><div className="flex-1"><h4 className={STYLES.itemTitle}>Perakende Çözümleri</h4><p className={STYLES.itemDescItalic}>“Perakende sektörüne özel masaüstü destek ve kurumsal uygulamalar geliştirerek operasyon verimliliğini artırıyoruz.”</p></div><Image src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&q=80" alt="Retail Solutions" width={96} height={64} className={STYLES.imageThumbnail} /></div>
                    </Link>
                </div>
            </div>
        </div>
    </motion.div>
)

export const TalentMenu = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Genç mühendisler menüsü"
    >
        <div className="flex min-h-[440px]">
            <div className="w-1/4 bg-[#ecfeff] p-10 flex flex-col justify-start border-r border-[#cffafe]">
                <div className="mb-auto"><div className="flex items-center gap-2 mb-6"><Code className="w-6 h-6 text-cyan-600" /><h4 className={STYLES.columnHeader.replace("mb-6", "mb-0")}>YAZILIM PROFESYONELLERİ</h4></div><p className={STYLES.itemDesc.replace("text-[13px]", "text-[14px]")}>Gerçek projeler üzerinde çalışarak modern yazılım geliştirme pratiklerini uçtan uca deneyimleme fırsatı sunar.</p></div>
                <div className={cn(STYLES.imageCard, "border-cyan-100 h-32 mt-6")}><Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Software" fill className="object-cover" /></div>
            </div>
            <div className="w-1/4 bg-[#fbf7f4] p-10 flex flex-col justify-start border-r border-[#eeeae6]">
                <div className="mb-auto"><div className="flex items-center gap-2 mb-6"><Terminal className="w-6 h-6 text-amber-600" /><h4 className={STYLES.columnHeader.replace("mb-6", "mb-0")}>TEKNOLOJİ UZMANLARI</h4></div><p className={STYLES.itemDesc.replace("text-[13px]", "text-[14px]")}>Kurumsal sistemlerin işletimi, destek ve sürekliliğine odaklanan teknoloji servis süreçlerini sahada öğrenmeyi sağlar.</p></div>
                <div className={cn(STYLES.imageCard, "border-amber-100 h-32 mt-6")}><Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80" alt="Tech" fill className="object-cover" /></div>
            </div>
            <div className="w-1/4 bg-[#f1f5f9] p-10 flex flex-col justify-start border-r border-[#e2e8f0]">
                <div className="mb-auto"><div className="flex items-center gap-2 mb-6"><CheckCircle2 className="w-6 h-6 text-blue-600" /><h4 className={STYLES.columnHeader.replace("mb-6", "mb-0")}>TEST ve ANALİZ UZMANLARI</h4></div><p className={STYLES.itemDesc.replace("text-[13px]", "text-[14px]")}>Planlama, koordinasyon ve teslim süreçlerini deneyimleyerek proje yönetiminin temel yetkinliklerini kazandırır.</p></div>
                <div className={cn(STYLES.imageCard, "border-slate-200 h-32 mt-6")}><Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Test" fill className="object-cover" /></div>
            </div>
            <div className="w-1/4 bg-white p-10 flex flex-col justify-start text-center relative overflow-hidden">
                <div className="mb-auto">
                    <h4 className="font-black text-2xl text-slate-900 mb-2 mt-4">Sen de Katıl!</h4>
                    <p className="text-slate-500 text-sm mb-6">Geleceğin teknolojisini tasarlayan ekibin bir parçası ol.</p>
                    <Link href="/hr#talent" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">BAŞVUR</Link>
                </div>
                <div className={cn(STYLES.imageCard, "h-32 mt-6 shadow-md border-0 group cursor-pointer")}><Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80" alt="Join Us" fill className="object-cover transition-transform duration-700 group-hover:scale-110" /></div>
            </div>
        </div>
    </motion.div>
)

export const ResourcesMenu = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Bilgi merkezi menüsü"
    >
        <div className="flex min-h-[460px]">
            {/* COL 1 - Intro */}
            <div className="w-[28%] bg-sky-50/60 p-10 flex flex-col justify-start border-r border-sky-100">
                <div className="mb-auto">
                    <h3 className="font-black text-2xl text-slate-900 mb-4 uppercase tracking-tight">BİLGİ MERKEZİ</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        “Dijital dönüşüm, mühendislik ve sektör odaklı çözümler hakkında güncel bilgileri keşfedin.”
                    </p>
                    <Link href="/resources" className={STYLES.highlightLink.replace("text-cyan-700", "text-sky-700")}>
                        <span className="w-0 h-0 border-l-[6px] border-l-sky-600 border-y-[4px] border-y-transparent"></span>
                        Tüm İçerikleri İncele
                    </Link>
                </div>
                <div className={cn(STYLES.imageCard, "mt-6 h-40")}>
                    <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" alt="Knowledge" fill className="object-cover" />
                </div>
            </div>

            {/* COL 2 - Success Stories */}
            <div className="w-[24%] bg-[#fff0f5] p-10 border-r border-pink-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <h4 className={STYLES.itemTitle}>Başarı Hikayeleri</h4>
                    <p className={STYLES.itemDesc}>
                        Global projelerde fark yaratan çalışanlarımız ve başarıya ulaşan danışanlarımızın ilham veren kariyer yolculukları.
                    </p>
                    <div className="mt-6 p-4 bg-white/60 rounded-xl border border-pink-200/50">
                        <p className="text-xs text-slate-500 italic mb-2">"BGTS ile kariyerimde yeni bir sayfa açtım."</p>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-pink-200"></div>
                            <span className="text-xs font-bold text-slate-700">Ahmet Y. - Senior Dev.</span>
                        </div>
                    </div>
                </div>
                <Link href="/resources/success-stories" className="mt-6 flex items-center text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors">
                    Tüm Hikayeleri Oku <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>

            {/* COL 3 - LinkedIn & Infographics */}
            <div className="w-[24%] bg-[#f0f9ff] p-10 border-r border-blue-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <div className="mb-8">
                        <h4 className={STYLES.itemTitle}>LinkedIn</h4>
                        <Link href="https://www.linkedin.com/company/bilgeadam/" target="_blank" className="flex items-center gap-2 mt-3 group bg-blue-600 text-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                            <Linkedin className="w-5 h-5" />
                            <span className="text-sm font-bold">Bizi Takip Edin</span>
                            <ArrowRight className="w-4 h-4 ml-auto opacity-70 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/hr/jobs" className="flex items-center gap-2 mt-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors ml-1">
                            <Briefcase className="w-3 h-3" /> Açık Pozisyonlar
                        </Link>
                    </div>

                    <div>
                        <h4 className={STYLES.itemTitle}>İnfografikler</h4>
                        <p className={STYLES.itemDesc}>Sektörel veriler ve teknoloji trendleri.</p>
                        <Link href="/resources/infographics" className="mt-2 inline-flex text-xs font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-all">
                            İncele
                        </Link>
                    </div>
                </div>
            </div>

            {/* COL 4 - Events */}
            <div className="w-[24%] bg-[#f8fafc] p-10 flex flex-col justify-start text-center relative overflow-hidden">
                <div className="mb-auto text-left z-10 relative">
                    <h4 className={STYLES.itemTitle}>Etkinlikler & Webinar</h4>
                    <p className="text-slate-500 text-xs mb-4">Kaçırmamanız gereken teknoloji buluşmaları.</p>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                        <div className="relative h-24 w-full">
                            <Image src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&q=80" alt="Event" fill className="object-cover" />
                            <div className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">WEBINAR</div>
                        </div>
                        <div className="p-3">
                            <h5 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-blue-600 transition-colors">Qlik Cloud Veri Analitiği</h5>
                            <span className="text-[10px] text-slate-400 mt-1 block">15 Ekim 2025 • 14:00</span>
                        </div>
                    </div>

                    <Link href="https://www.linkedin.com/company/bilgeadam/events/?viewAsMember=true" target="_blank" className="mt-4 inline-flex items-center text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors">
                        Tüm Etkinlikler <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    </motion.div>
)

export const CareersMenu = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Kariyer menüsü"
    >
        <div className="flex min-h-[500px]">
            {/* COL 1 - Toplumsal Katkı */}
            <div className="w-[28%] bg-cyan-50/50 p-10 border-r border-cyan-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <h4 className={STYLES.itemTitle}>Toplumsal Katkı</h4>
                    <p className={STYLES.itemDescItalic}>“Geleceği şekillendiren yeteneklerin gelişimine ve topluma değer katmaya odaklanıyoruz.”</p>
                    <ul className="space-y-4 mt-4">
                        {["Eğitim & Staj", "Burs Programları", "Sosyal Sorumluluk"].map(l => (
                            <li key={l} className={STYLES.highlightLink}>
                                <span className="w-0 h-0 border-l-[6px] border-l-cyan-500 border-y-[4px] border-y-transparent"></span>
                                {l}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cn(STYLES.imageCard, "mt-6")}><Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" alt="Students" fill className="object-cover" /></div>
            </div>
            {/* COL 2 */}
            <div className="w-[24%] bg-[#fff0f5] p-10 border-r border-pink-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <h4 className={STYLES.itemTitle}>Çalışma Kültürü</h4>
                    <p className={STYLES.itemDesc}>
                        Ortak değerler ve güçlü ekip ruhuyla, çalışan deneyimini merkeze alan, gelişimi teşvik eden ve sürdürülebilir başarıyı birlikte inşa eden bir çalışma kültürü oluştururuz.
                    </p>
                </div>
                <div className={cn(STYLES.imageCard, "mt-6")}><Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80" alt="Culture" fill className="object-cover" /></div>
            </div>
            {/* COL 3 */}
            <div className="w-[24%] bg-[#f0f9ff] p-10 border-r border-blue-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <h4 className={STYLES.itemTitle}>Kariyer Yolları</h4>
                    <p className={STYLES.itemDesc}>
                        Potansiyelinizi ortaya çıkaran, gelişiminizi destekleyen ve net, şeffaf kariyer adımlarıyla ilerlemenizi sağlayan kariyer yolları oluştururuz.
                    </p>
                </div>
                <div className={cn(STYLES.imageCard, "mt-6")}><Image src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80" alt="Career" fill className="object-cover" /></div>
            </div>
            {/* COL 4 */}
            <div className="w-[24%] bg-[#f8fafc] p-10 flex flex-col justify-start text-center relative overflow-hidden">
                <div className="mb-auto">
                    <h4 className={STYLES.itemTitle}>Eğitim ve Sürekli Öğrenme</h4>
                    <p className="text-slate-500 text-xs italic mb-8">“Kendine yatırım yapmak bizim için önemlidir.”</p>
                </div>
                <div className={cn(STYLES.imageCard, "mt-6")}><Image src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&q=80" alt="Education" fill className="object-cover" /></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#0891b2" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.4,34.5C60.6,46.1,50.3,55.7,38.5,62.8C26.7,69.9,13.4,74.5,-0.6,75.5C-14.6,76.5,-30.8,73.9,-43.3,66.1C-55.8,58.3,-64.6,45.3,-71.3,31.4C-78,17.5,-82.6,2.7,-79.9,-10.8C-77.2,-24.3,-67.2,-36.5,-55.9,-44.8C-44.6,-53.1,-32,-57.5,-19.9,-60.9C-7.8,-64.3,3.8,-66.7,16.2,-70.7C28.6,-74.7,41.8,-80.3,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>
        </div>
    </motion.div>
)
