import React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import {
    ArrowRight, Users, Award, BookOpen, ClipboardCheck,
    GraduationCap, FileCheck, BarChart3, Video, Globe,
    Wallet, CalendarClock, Receipt, FileText, HelpCircle,
    Briefcase, Layers
} from "lucide-react"

/* ── Brand Colors: Orange · Green · Blue · Purple ─── */
const brandColors = {
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hoverBorder: "hover:border-orange-300", hoverText: "group-hover:text-orange-600" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", hoverBorder: "hover:border-green-300", hoverText: "group-hover:text-green-600" },
    blue: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200", hoverBorder: "hover:border-sky-300", hoverText: "group-hover:text-sky-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hoverBorder: "hover:border-purple-300", hoverText: "group-hover:text-purple-600" },
}
const colorCycle = [brandColors.orange, brandColors.green, brandColors.blue, brandColors.purple]

/* ── Module Data ────────────────────────────────────── */
const modules = [
    { title: "Temel İK ve Organizasyon", desc: "Organizasyon yapısı, personel kartları ve özlük bilgilerinin merkezi yönetimi.", icon: Users },
    { title: "Yetenek Yönetimi", desc: "Çalışan potansiyellerinin belirlenmesi, yedekleme planları ve kariyer haritaları.", icon: Award },
    { title: "Performans", desc: "Hedef bazlı değerlendirme, 360° geri bildirim ve OKR yönetimi.", icon: BarChart3 },
    { title: "İşe Alım ve Uyum", desc: "Aday takip, mülakat süreçleri ve onboarding iş akışları.", icon: ClipboardCheck },
    { title: "Eğitim ve Gelişim Planı", desc: "Eğitim kataloğu, sınıf yönetimi, e-öğrenme entegrasyonu.", icon: GraduationCap },
    { title: "Sınav", desc: "Yetkinlik ve bilgi ölçme sınavları, otomatik puanlama.", icon: FileCheck },
    { title: "Değerlendirme ve Anket", desc: "Çalışan memnuniyeti, bağlılık ve iklim anketleri.", icon: BookOpen },
    { title: "Online Toplantı", desc: "WebRTC tabanlı görüntülü toplantılar ve entegre takvim.", icon: Video },
    { title: "İK Portal", desc: "Self-servis çalışan portalı, izin talepleri ve bildirimler.", icon: Globe },
    { title: "Masraf Yönetimi", desc: "Masraf girişi, onay süreçleri ve muhasebe entegrasyonu.", icon: Wallet },
    { title: "İşgücü Analitiği ve Planlaması", desc: "Stratejik işgücü planlaması, trend analizi ve dashboard.", icon: Layers },
    { title: "Ücret ve Yan Haklar", desc: "Ücret yapısı, terfi/zam simülasyonu ve tazminat yönetimi.", icon: Briefcase },
    { title: "Zaman ve Devamlılık", desc: "Mesai takibi, vardiya planlama ve devamsızlık yönetimi.", icon: CalendarClock },
    { title: "Bordro ve Teşvik", desc: "Yasal uyumlu bordro hesaplama, SGK ve teşvik raporlaması.", icon: Receipt },
    { title: "Doküman Yönetimi", desc: "Merkezi belge arşivi, sürüm kontrolü ve dijital imza.", icon: FileText },
    { title: "Sorun ve Talep Yönetimi", desc: "Çalışan talep/şikâyet sistemi, SLA takibi ve raporlama.", icon: HelpCircle },
]

/* ── Technology Data ────────────────────────────────── */
const technologies = [
    { name: "ASP.NET Core", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "Web API", color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "Swagger", color: "bg-green-100 text-green-700 border-green-200" },
    { name: "Node.js", color: "bg-green-100 text-green-700 border-green-200" },
    { name: "Redis", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { name: "RabbitMQ", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { name: "SignalR", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "WebRTC", color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "React Native", color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "Entity Framework", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "Docker", color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "Kubernetes", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "Git", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { name: "MongoDB", color: "bg-green-100 text-green-700 border-green-200" },
    { name: "SQL", color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "Elasticsearch", color: "bg-green-100 text-green-700 border-green-200" },
]

/* ── Page Component ─────────────────────────────────── */
export default function HcmPage() {
    return (
        <div className="bg-white">
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                {/* Multi-color glows matching brand */}
                <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-green-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-10 right-1/3 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-semibold tracking-wide">
                            <Users className="w-4 h-4" />
                            <span>Human Capital Management</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            HR Thema{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-purple-400">
                                HCM
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Kurumunuzun en değerli varlığı olan iş gücünün yönetilmesine stratejik
                            ve planlı bir yaklaşım getiren HRThema HCM, iş gücünüzü finansal ve
                            yönetimsel objektiften anlamak ve ele almak için tasarlanmıştır.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:scale-105"
                            >
                                Demo Talep Edin <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#modules"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/10"
                            >
                                Modülleri Keşfet
                            </Link>
                        </div>

                        {/* Key Stats — Each stat in a brand color */}
                        <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black text-orange-400">16</div>
                                <div className="text-sm text-slate-400 mt-1 font-medium">Entegre Modül</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black text-green-400">360°</div>
                                <div className="text-sm text-slate-400 mt-1 font-medium">İK Yönetimi</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black text-purple-400">16+</div>
                                <div className="text-sm text-slate-400 mt-1 font-medium">Teknoloji</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════ OVERVIEW ═══════════════════ */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                İnsan Sermayesi Yönetim Sistemi
                            </h2>
                            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    HRThema HCM, sunduğu modülleri ile <strong className="text-slate-900">tek bir güvenlik modeline</strong> ve
                                    benzer, entegre edilmiş kullanıcı deneyimine sahip <strong className="text-slate-900">uçtan uca bir HCM çözümüdür</strong>.
                                </p>
                                <p>
                                    İşe alımdan bordro süreçlerine, performans yönetiminden eğitim planlamasına kadar
                                    tüm İK operasyonlarını tek bir platformda birleştirerek, kurumunuzun insan kaynağını
                                    stratejik bir varlık olarak yönetmenize olanak tanır.
                                </p>
                            </div>
                        </div>

                        {/* Highlight cards — cycling brand colors */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Uçtan Uca Çözüm", desc: "İşe alımdan çıkışa kadar tüm İK süreçleri tek platformda.", icon: "🔗", c: brandColors.orange },
                                { label: "Tek Güvenlik Modeli", desc: "Merkezi yetkilendirme ve veri güvenliği altyapısı.", icon: "🛡️", c: brandColors.green },
                                { label: "Entegre Deneyim", desc: "Tüm modüllerde tutarlı ve modern kullanıcı arayüzü.", icon: "✨", c: brandColors.blue },
                                { label: "Mobil Uyumlu", desc: "React Native ile her yerden erişilebilir İK portalı.", icon: "📱", c: brandColors.purple },
                            ].map((item, i) => (
                                <div key={i} className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 ${item.c.hoverBorder} hover:shadow-md transition-all group`}>
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h4 className={`font-bold text-slate-900 mb-1 ${item.c.hoverText} transition-colors`}>{item.label}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════ VIDEO ═══════════════════ */}
            <section className="py-24 bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
                            HR Thema HCM in Aksiyon
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Platformumuzun sunduğu kapsamlı İK yönetim deneyimini keşfedin.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/me_Z2xoZhEo"
                                title="HR Thema HCM Tanıtım"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════ MODULES ═══════════════════ */}
            <section id="modules" className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
                            16 Entegre Modül, Tek Platform
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            HRThema HCM&apos;in sunduğu geniş modül yelpazesi ile İK operasyonlarınızı
                            uçtan uca dijitalleştirin.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {modules.map((mod, i) => {
                            const Icon = mod.icon
                            const c = colorCycle[i % 4]
                            return (
                                <div
                                    key={i}
                                    className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 ${c.hoverBorder} group cursor-default`}
                                >
                                    <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-6 h-6 ${c.text}`} />
                                    </div>
                                    <h3 className={`font-bold text-slate-900 mb-2 text-[15px] ${c.hoverText} transition-colors leading-tight`}>
                                        {mod.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {mod.desc}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════ TECHNOLOGY STACK ═══════════════════ */}
            <section className="py-24 bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
                            Güçlü Teknoloji Altyapısı
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            HR Thema HCM&apos;in arkasında en yeni teknolojileri barındırır. İlgili araçları
                            ve analitik verileri kullanarak problemleri derinlemesine inceleyebilir ve
                            kritik kararları teknoloji desteği ile verirsiniz.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {technologies.map((tech, i) => (
                            <div
                                key={i}
                                className={`px-5 py-3 rounded-xl font-bold text-sm border ${tech.color} hover:scale-105 transition-transform cursor-default shadow-sm`}
                            >
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════ CTA ═══════════════════ */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10 text-center max-w-4xl">
                    <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight">
                        İK Süreçlerinizi Dijitalleştirmeye Hazır mısınız?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        HR Thema HCM ile tanışın, insan kaynağınızı stratejik bir varlık olarak yönetin.
                        16 entegre modülün gücünü keşfedin.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-orange-500 via-green-500 to-purple-500 text-white font-bold rounded-full text-lg shadow-xl shadow-orange-500/20 hover:scale-105 transition-transform"
                    >
                        Demo ve Teklif Alın
                    </Link>
                </Container>
            </section>
        </div>
    )
}
