import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    Server, Activity, Database, Code, Cpu, Globe, Shield, ShoppingBag,
    CheckCircle2, ArrowRight, Terminal, FileText, PlayCircle, Linkedin, Briefcase
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
        <div className="flex">
            <div className="w-[40%] bg-slate-50 p-10 border-r border-slate-100 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>TEKNOLOJİ SERVİSLERİ</h3>
                <div className="space-y-8">
                    <Link href="/services/managed-services" className={STYLES.linkGroup}>
                        <Server className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Veri Merkezi & Uygulama</h4><p className={STYLES.itemDesc}>Platform ve uygulama katmanlarında uzman yönetilen hizmetler.</p></div>
                            <Image src="/images/navigation/services/bgts-data-center-infrastructure.png" alt="Data Center" width={96} height={64} className={STYLES.imageThumbnail} />
                        </div>
                    </Link>
                    <Link href="/services/managed-services" className={STYLES.linkGroup}>
                        <Activity className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Yönetilen Hizmetler</h4><p className={STYLES.itemDesc}>Yapay zeka destekli kesintisiz IT desteği ve operasyonel verimlilik.</p></div>
                            <Image src="/images/navigation/services/bgts-managed-it-services.png" alt="Managed Services" width={96} height={64} className={STYLES.imageThumbnail} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-[60%] bg-white p-10 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>YAZILIM GELİŞTİRME</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                    {[{ title: "Veri Hizmetleri", desc: "Büyük veri ve analitik altyapılar.", img: "/images/navigation/services/bgts-big-data-analytics-services.png", icon: Database }, { title: "DevOps & SRE", desc: "CI/CD ve güvenilir teslimat.", img: "/images/navigation/services/bgts-devops-sre-services.png", icon: Code }, { title: "Power Platform", desc: "Modern mimarisel çözümler.", img: "/images/navigation/services/bgts-power-platform-solutions.png", icon: Activity }, { title: "Yapay Zeka", desc: "Otomasyon ve akıllı öngörüler.", img: "/images/navigation/services/bgts-artificial-intelligence-automation.png", icon: Cpu }].map(s => (
                        <Link key={s.title} href="/services" className={STYLES.linkGroup}>
                            <s.icon className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-3"><div className="flex-1"><h4 className={STYLES.itemTitle}>{s.title}</h4><p className={STYLES.itemDesc}>{s.desc}</p></div><Image src={s.img} alt={s.title} width={96} height={64} className={STYLES.imageThumbnail} /></div>
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
        <div className="bg-white py-3 text-center border-t border-gray-100">
            <Link href="/industries" className={STYLES.standardLink}>
                TÜM SEKTÖRLERİ İNCELE <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
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
        <div className="flex min-h-[400px]">
            <div className="w-[30%] bg-sky-50 p-10 flex flex-col justify-start">
                <div className="mb-auto">
                    <h3 className="font-black text-2xl text-slate-900 mb-6 uppercase tracking-tight">BİLGİ MERKEZİ</h3>
                    <p className="text-slate-600 text-lg italic leading-relaxed mb-8 font-serif">“Dijital dönüşüm, mühendislik ve sektör odaklı çözümler hakkında güncel bilgileri keşfedin.”</p>
                    <Link href="/resources" className={STYLES.standardLink}>İçerikleri İncele <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-sm h-32 w-full relative"><Image src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=400&q=80" alt="Servers" fill className="object-cover" /></div>
            </div>
            <div className="w-[30%] bg-white p-10 border-r border-gray-100 flex flex-col justify-center">
                <ul className="space-y-6">
                    {[{ name: "İnfografik", icon: FileText }, { name: "Webinar", icon: PlayCircle }, { name: "Başarı Hikayeleri", icon: CheckCircle2 }, { name: "LinkedIn", icon: Linkedin }, { name: "İş İlanlarımız", icon: Briefcase }].map((link) => (
                        <li key={link.name}>
                            <Link href="/resources" className="group flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                                <span className="p-2 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors"><ArrowRight className="w-4 h-4" /></span>
                                <span className="font-bold text-lg">{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-[40%] bg-[#f0fdf4] p-10 flex flex-col justify-start relative overflow-hidden">
                <div className="mb-auto">
                    <h4 className="font-black text-xl text-slate-900 mb-2">Qlik Cloud Veri Analitiği</h4>
                    <Link href="/resources" className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors">Hemen Kayıt Ol <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </div>
                <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-md mt-6 bg-white group cursor-pointer hover:shadow-xl transition-shadow"><Image src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&q=80" alt="Qlik Event" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"><span className="text-white font-bold text-sm bg-blue-600 px-3 py-1 rounded-full mb-1">Webinar</span></div></div>
                <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none"><Shield className="w-64 h-64 text-green-800" /></div>
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
            {/* COL 1 */}
            <div className="w-[28%] bg-cyan-50/50 p-10 border-r border-cyan-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <h4 className={STYLES.itemTitle}>Genç Yetenek Programları</h4>
                    <p className={STYLES.itemDescItalic}>“Kariyerinin başındaysan, seni hızla geliştirecek programlarımızdan haberdar ol.”</p>
                    <ul className="space-y-4 mt-4">
                        {["IT Genç Yetenek Programları", "Uzun Dönem Yaz Stajları", "Bootcamp Programları"].map(l => (
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

                    <Link href="/careers" className={STYLES.highlightLink.replace("text-cyan-700", "text-cyan-600")}>
                        <span className="w-0 h-0 border-l-[6px] border-l-cyan-600 border-y-[4px] border-y-transparent"></span>
                        Eğitim Takvimini İncele
                    </Link>
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
