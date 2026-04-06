import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading } from "@/components/ui/Typography"
import { ContactForm } from "@/components/forms/ContactForm"
import Image from "next/image"
import Link from "next/link"
import { AnimatedDiv, ScaleIn } from "@/components/ui/AnimatedElements"
import {
    Globe, Award, ShieldCheck, Lightbulb, ArrowRight
} from "lucide-react"
import { LocationsMap } from "./LocationsMap"

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══ HERO ═══ */}
            <Hero
                title="Hakkımızda"
                subtitle="Bizi biz yapan kültürümüzden besleniyor, eklektik yapımızla inovasyonu harmanlayarak bilgi okyanusunda emin adımlarla rotamızı çiziyoruz."
                backgroundImage="/images/headers/bgts-hakkimizda-ekip.jpg"
                className="bg-slate-900"
            />


            {/* ═══ FLOATING STATS BAR — overlaps hero bottom ═══ */}
            <div className="relative z-20 -mt-16 px-4 lg:px-0">
                <Container>
                    <AnimatedDiv
                        className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-100"
                    >
                        {[
                            { val: "30", unit: "Yıl", label: "Deneyim" },
                            { val: "3000+", unit: "", label: "Proje" },
                            { val: "14", unit: "", label: "Aktif Ülke" },
                            { val: "850+", unit: "", label: "Uzman" },
                            { val: "100+", unit: "", label: "Partner" },
                        ].map((s, i) => (
                            <div key={i} className="py-8 px-6 text-center group hover:bg-blue-50/50 transition-colors first:rounded-l-2xl last:rounded-r-2xl">
                                <div className="text-3xl lg:text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform inline-block">{s.val}<span className="text-lg font-bold">{s.unit}</span></div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">{s.label}</div>
                            </div>
                        ))}
                    </AnimatedDiv>
                </Container>
            </div>


            {/* ═══ GENEL BAKIŞ — Asymmetric Split ═══ */}
            <Section className="pt-24 lg:pt-32">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <AnimatedDiv className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl -z-10" />
                                <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="/images/culture/culture-1.jpg" alt="BGTS Kültür" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">
                                                &ldquo;1997&apos;den bu yana edindiğimiz kurumsal deneyim ve sektörel uzmanlığımızla geleceğin teknolojilerine yön vermeye devam ediyoruz.&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv delay={0.2} className="lg:col-span-7">
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                Dijital Dönüşümün<br />Güvenilir Adresi
                            </Heading>
                            <div className="space-y-5 text-slate-600 text-[17px] leading-relaxed">
                                <p>
                                    Uygulama Geliştirme, Veri Analitiği, Sistem Altyapıları, Güvenlik ve Uyumluluk ile Yazılım süreçlerimizi modern iş mimarisine dayalı platformlar üzerinden yürütür, kurumunuzun
                                    <strong className="text-blue-700 font-semibold"> dijital dönüşümünü vizyoner</strong> bir bakış açısıyla tasarlar, en ileri teknoloji ile hayata geçirir ve destekleriz.
                                </p>
                                <p>
                                    Hizmet ağımızı uluslararası standartlarda daha ileriye taşımak için özveriyle çalışıyor, her yeni projede dünün bilgi birikimini bugünün dehasıyla harmanlıyor; geleceğin teknolojilerine yön vermek adına sektörel liderliğimizi sürdürüyoruz.
                                </p>
                            </div>

                            {/* Inline feature chips */}
                            <div className="flex flex-wrap gap-3 mt-8">
                                {["Yazılım Geliştirme", "Veri Analitiği", "Sistem Altyapıları", "Güvenlik & Uyumluluk", "DevOps", "Yapay Zeka"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </Section>


            {/* ═══ FULL-WIDTH IMAGE BREAK ═══ */}
            <div className="relative h-[300px] lg:h-[400px] my-8 lg:my-16 overflow-hidden">
                <Image src="/images/culture/culture-3.jpg" alt="Çalışma Kültürü" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent" />
                <Container className="relative z-10 h-full flex items-center">
                    <AnimatedDiv className="max-w-xl text-white">
                        <Heading variant="h2" className="!text-3xl md:!text-4xl !font-black text-white mb-4">
                            Kanıtlanmış Uzmanlık
                        </Heading>
                        <p className="text-blue-100/90 text-lg leading-relaxed mb-6">
                            Bilişim 500 araştırmasına göre finans ve bankacılık yazılımlarında 5 yıldır peş peşe ilk 5'te yer almanın gururunu yaşıyoruz.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all text-sm">
                            Detaylı Bilgi <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </AnimatedDiv>
                </Container>
            </div>


            {/* ═══ ŞİRKET DEĞERLERİ — Sticky Sidebar + Scrolling Cards (like Banking) ═══ */}
            <Section className="bg-slate-50 relative overflow-hidden py-24">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sticky Left Panel */}
                        <AnimatedDiv className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
                                <div className="relative z-10">
                                    <span className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-4 block">Temel Prensipler</span>
                                    <h3 className="text-3xl font-bold mb-4">Şirket Değerleri</h3>
                                    <p className="text-blue-100/90 leading-relaxed text-[15px]">
                                        Sürdürülebilir büyüme, yenilikçi anlayış ve müşteri odaklılık standartlarımızın en önemli temel prensipleridir.
                                    </p>
                                </div>
                            </div>
                        </AnimatedDiv>

                        {/* Scrolling Value Cards */}
                        <div className="lg:col-span-8">
                            <div className="grid md:grid-cols-2 gap-5">
                                {[
                                    { icon: ShieldCheck, title: "Kalite", desc: "Hizmetlerimizde en yüksek kalite standartlarını sunmayı hedefler, müşteri odaklı yaklaşımımızla uluslararası platformlarda başarıyı güvence altına alırız.", color: "blue" },
                                    { icon: Lightbulb, title: "Sürekli İnovasyon", desc: "Geçmişin deneyimini geleceğin vizyonuyla harmanlıyor; teknolojiyi ilk kullanan ve sektörel standartları belirleyen oyuncu olmayı hedefliyoruz.", color: "violet" },
                                    { icon: Globe, title: "Küresel Uzmanlık", desc: "Dünyanın dört bir yanındaki ofislerimizle uluslararası standartlarda işbirlikleri ve çözümler sunarak küresel pazarda büyüyoruz.", color: "emerald" },
                                    { icon: Award, title: "Gurur Duyuyoruz", desc: "Başarılarımızın her zaman en iyi referans olacağına inanıyor, sağladığımız katma değer ve ödüllerle motivasyonumuzu artırıyoruz.", color: "amber" },
                                ].map((v, i) => (
                                    <AnimatedDiv
                                        key={i}
                                        delay={i * 0.05}
                                        className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className={`w-12 h-12 bg-${v.color}-50/50 border border-${v.color}-100 group-hover:bg-${v.color}-600 rounded-xl flex items-center justify-center shrink-0 transition-colors`}>
                                                <v.icon className={`w-6 h-6 text-${v.color}-600 group-hover:text-white transition-colors`} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{v.title}</h4>
                                                <p className="text-[14px] text-slate-500 leading-relaxed">{v.desc}</p>
                                            </div>
                                        </div>
                                    </AnimatedDiv>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>


            {/* ═══ İŞ ORTAKLARI — Dark Premium Section ═══ */}
            <div className="relative bg-[#0F1B2D] py-24 overflow-hidden">
                {/* Decorative orbs */}
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

                <Container className="relative z-10">
                    <AnimatedDiv className="text-center max-w-2xl mx-auto mb-14">
                        <Heading variant="h2" className="!text-3xl md:!text-4xl !font-bold text-white mb-4">İş Ortaklıkları</Heading>
                        <p className="text-slate-400 text-[15px] leading-relaxed">Güçlü ekosistemimiz, sektörün liderleriyle olan entegre işbirliklerimize dayanır.</p>
                    </AnimatedDiv>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { src: "/logos/partners/microsoft-logo.webp", alt: "Microsoft" },
                            { src: "/logos/partners/aws-partner.webp", alt: "AWS Partner" },
                            { src: "/logos/partners/atlassian-logo.webp", alt: "Atlassian" },
                            { src: "/logos/partners/servicenow-partner.png", alt: "ServiceNow" },
                            { src: "/logos/partners/redhat-partner.png", alt: "Red Hat" },
                            { src: "/logos/partners/qlik-partner.png", alt: "Qlik Partner" },
                            { src: "/logos/partners/mendix-logo.webp", alt: "Mendix" },
                            { src: "/logos/partners/4me-partner.webp", alt: "4me Partner" },
                            { src: "/logos/partners/temenos-partner.jpg", alt: "Temenos" },
                        ].map((p, i) => (
                            <AnimatedDiv
                                key={i}
                                delay={i * 0.04}
                                className="flex items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 p-4 h-40"
                            >
                                <div className="relative w-full h-full">
                                    <Image src={p.src} alt={p.alt} fill className="object-contain" />
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ═══ SERTİFİKASYONLAR — Warm Light Section ═══ */}
            <div className="relative py-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 overflow-hidden">
                {/* Subtle mesh pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)", backgroundSize: "32px 32px" }} />

                <Container className="relative z-10">
                    <AnimatedDiv className="text-center max-w-2xl mx-auto mb-14">
                        <Heading variant="h2" className="!text-3xl md:!text-4xl !font-bold text-slate-900 mb-4">Sertifikasyonlar</Heading>
                        <p className="text-slate-500 text-[15px] leading-relaxed">Uluslararası standartlarda sunduğumuz hizmetlerin kalitesi yetkili denetim kuruluşları tarafından onaylanmaktadır.</p>
                    </AnimatedDiv>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                        {[
                            { src: "/logos/certifications/iso-9001.png", label: "Kalite Yönetim Sistemleri" },
                            { src: "/logos/certifications/iso-27001.png", label: "Bilgi Güvenliği Yönetim Sistemleri" },
                            { src: "/logos/certifications/iso-20000.png", label: "Servis Yönetimi" },
                            { src: "/logos/certifications/iso-15504.png", label: "Süreç Değerlendirme" },
                            { src: "/logos/certifications/iso-27701.png", label: "Gizlilik Bilgi Yönetimi" },
                            { src: "/logos/certifications/iso-12207.png", label: "Yazılım Yaşam Döngüsü" },
                        ].map((cert, i) => (
                            <ScaleIn
                                key={i}
                                delay={i * 0.06}
                                className="flex flex-col items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="relative w-24 h-24 mb-4">
                                    <Image src={cert.src} alt={cert.label} fill className="object-contain" />
                                </div>
                                <span className="text-[11px] text-slate-500 font-semibold leading-tight">{cert.label}</span>
                            </ScaleIn>
                        ))}
                    </div>
                </Container>
            </div>


            {/* ═══ REFERANSLAR — Infinite Scrolling Marquee ═══ */}
            <div className="border-y border-slate-100 py-16 bg-slate-50/50 overflow-hidden">
                <Container>
                    <AnimatedDiv className="text-center mb-10">
                        <Heading variant="h3" className="!text-2xl !font-bold text-slate-900">Başlıca Referanslarımız</Heading>
                    </AnimatedDiv>
                </Container>

                {/* Marquee Row 1 */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee gap-12 items-center whitespace-nowrap">
                        {[
                            "BASF", "booking-com", "BurganBank_Logo", "coca-cola", "dhl", "honda",
                            "hsbc", "hyundaiassan", "ibm-1", "ing-bank", "intel", "jti", "karcher",
                            "BASF", "booking-com", "BurganBank_Logo", "coca-cola", "dhl", "honda",
                            "hsbc", "hyundaiassan", "ibm-1", "ing-bank", "intel", "jti", "karcher",
                        ].map((logo, i) => (
                            <div key={i} className="relative w-28 h-12 shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                                <Image src={`/logos/references/${logo}.png`} alt={logo} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Marquee Row 2 — reverse direction */}
                <div className="relative w-full overflow-hidden mt-8">
                    <div className="flex animate-marquee-reverse gap-12 items-center whitespace-nowrap">
                        {[
                            "kpmg", "lseg-1", "mercedes-benz", "microsoft", "mox", "nike",
                            "peek-cloppenburg", "rabobank", "rbs", "samsung", "standart-chartered", "vodafone", "warner-bros",
                            "kpmg", "lseg-1", "mercedes-benz", "microsoft", "mox", "nike",
                            "peek-cloppenburg", "rabobank", "rbs", "samsung", "standart-chartered", "vodafone", "warner-bros",
                        ].map((logo, i) => (
                            <div key={i} className="relative w-28 h-12 shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                                <Image src={`/logos/references/${logo}.png`} alt={logo} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* ═══ KONUMLAR — Interactive Map ═══ */}
            <LocationsMap />


            {/* ═══ BİZE ULAŞIN — Premium Split with Image ═══ */}
            <Section className="pt-24 lg:pt-32">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <AnimatedDiv className="lg:col-span-5">
                            <Heading variant="h2" className="mb-6 !text-4xl !font-bold text-slate-900">
                                Geleceği Birlikte<br />Tasarlayalım
                            </Heading>
                            <p className="text-slate-600 text-[17px] leading-relaxed mb-10">
                                İhtiyaçlarınıza özel stratejik çözüm ortaklığı için bizimle iletişime geçin. Uzman ekibimiz en kısa sürede projeniz için hazır olacaktır.
                            </p>
                            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/images/culture/culture-8.jpg" alt="BGTS Ofis" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5">
                                    <div className="grid grid-cols-2 gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                        <div className="text-center">
                                            <div className="text-lg font-black text-white">+90 444 3330</div>
                                            <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Destek Hattı</div>
                                        </div>
                                        <div className="text-center border-l border-white/20">
                                            <div className="text-lg font-black text-white">7/24</div>
                                            <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Uzman Desteği</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv delay={0.2} className="lg:col-span-7">
                            <ContactForm />
                        </AnimatedDiv>
                    </div>
                </Container>
            </Section>

        </div>
    )
}
