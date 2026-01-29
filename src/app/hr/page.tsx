"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import CultureCard from "@/components/ui/CultureCard"
import TestimonialCard from "@/components/ui/TestimonialCard"
import ApplicationForm from "@/components/hr/ApplicationForm"
import { Users, Heart, Star, Target, Zap, Smile, BookOpen, Coffee, Award, PlayCircle, Code, BarChart3, Server, CheckCircle2, FileText } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

export default function HRPage() {
    return (
        <div className="bg-white min-h-screen">

            <Hero
                title="Yeteneklerinize Değer Veriyoruz"
                subtitle="Tutkulu, yenilikçi ve sürekli öğrenen bir ekibin parçası olun. Kariyerinizi bizimle şekillendirin."
                badge="Kariyer"
                className="bg-rose-600"
                backgroundImage="/images/headers/bgts-genc-yetenekler.jpg"
            />

            {/* Culture Values */}
            <Section>
                <Container>
                    <Heading variant="h2" className="text-center mb-4">Değerlerimiz</Heading>
                    <Text variant="lead" className="text-center mb-16 max-w-2xl mx-auto">
                        Bizi biz yapan, çalışma şeklimizi ve kararlarımızı yönlendiren temel prensiplerimiz.
                    </Text>

                    <div className="grid md:grid-cols-3 gap-8">
                        <CultureCard
                            title="İnovasyon Tutkusu"
                            description="Sürekli gelişim ve yeni teknolojileri keşfetme arzusu DNA'mızda var. Hata yapmaktan korkmadan deneriz."
                            icon={Zap}
                            color="blue"
                            delay={0}
                        />
                        <CultureCard
                            title="Birlikte Başarı"
                            description="Takım çalışmasına inanırız. Birbirimizi destekler, bilgiyi paylaşır ve başarıyı birlikte kutlarız."
                            icon={Users}
                            color="purple"
                            delay={0.1}
                        />
                        <CultureCard
                            title="İnsan Odaklılık"
                            description="Çalışanlarımızın mutluluğu ve gelişimi önceliğimizdir. Adil, kapsayıcı ve saygılı bir ortam sunarız."
                            icon={Heart}
                            color="orange"
                            delay={0.2}
                        />
                    </div>
                </Container>
            </Section>

            {/* Benefits */}
            <Section className="bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-center mb-16">Neden BGTS?</Heading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: BookOpen, title: "Sürekli Eğitim", desc: "Udemy, Pluralsight üyelikleri ve sertifika destekleri." },
                            { icon: Coffee, title: "Esnek Yan Haklar", desc: "Özel sağlık sigortası, yemek kartı ve spor desteği." },
                            { icon: Smile, title: "Mutlu Ofis", desc: "Ergonomik çalışma ortamı, playstation köşesi ve happy hour'lar." },
                            { icon: Target, title: "Kariyer Gelişimi", desc: "Net kariyer yolu ve düzenli performans geri bildirimleri." }
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <Heading variant="h4" className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</Heading>
                                <Text variant="small" className="text-slate-600">{benefit.desc}</Text>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* --- YOUNG ENGINEERS MERGED SECTION START --- */}

            {/* Intro Section */}
            <div id="young-engineers">
                <Section>
                    <Container>
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wide mb-4">
                                GENÇ MÜHENDİS PROGRAMI
                            </span>
                            <Heading variant="h2">Teorinin Ötesine Geçin</Heading>
                            <Text variant="lead">
                                BGTS Genç Mühendis Programı, teorinin ötesine geçerek gerçek projelerde sorumluluk alan,
                                kurumsal yapılarda değer üretmenin ne demek olduğunu sahada öğrenen mühendisler yetiştirir.
                            </Text>
                            <Text className="text-slate-600">
                                Bugüne kadar özellikle bankacılık ve finans başta olmak üzere, teknolojiyle dönüşen birçok sektörde
                                çok sayıda genç mühendisimizi uzun vadeli pozisyonlara yerleştirdik. Bu programın odağında yalnızca
                                işe yerleşmek değil; mühendis gibi düşünmeyi, problem çözmeyi ve değer üretmeyi öğrenmek yer alır.
                            </Text>
                        </div>
                    </Container>
                </Section>

                {/* Tracks Section */}
                <Section className="bg-slate-50">
                    <Container>
                        <div className="text-center mb-16">
                            <Heading variant="h2">Uzmanlık Alanları</Heading>
                            <Text className="text-slate-600 mt-4">
                                Programımız üç ana yapıdan oluşur, her biri farklı yetkinliklere odaklanır.
                            </Text>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Track 1: Software */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow group">
                                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Code className="w-7 h-7 text-cyan-600" />
                                </div>
                                <Heading variant="h4" className="mb-4">Yazılım Profesyonelleri</Heading>
                                <Text className="text-sm text-slate-600 mb-6 flex-1">
                                    Gerçek projeler üzerinde çalışarak modern yazılım geliştirme pratiklerini uçtan uca deneyimleyin.
                                </Text>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Güncel yazılım teknolojileri",
                                        "Kodlama standartları ve mimari",
                                        "Ekip içi çalışma kültürü",
                                        "Kurumsal projelerde aktif rol"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Track 2: Test & Analysis */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow group">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <BarChart3 className="w-7 h-7 text-blue-600" />
                                </div>
                                <Heading variant="h4" className="mb-4">Test ve Analiz Uzmanları</Heading>
                                <Text className="text-sm text-slate-600 mb-6 flex-1">
                                    Planlama, koordinasyon ve teslim süreçlerini deneyimleyerek proje yönetimini sahada öğrenin.
                                </Text>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Uçtan uca test ve analiz süreçleri",
                                        "Analitik düşünme ve problem çözme",
                                        "Kalite odaklı bakış açısı",
                                        "Kritik finansal sistem deneyimi"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Track 3: Technology */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow group">
                                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Server className="w-7 h-7 text-amber-600" />
                                </div>
                                <Heading variant="h4" className="mb-4">Teknoloji Uzmanları</Heading>
                                <Text className="text-sm text-slate-600 mb-6 flex-1">
                                    Kurumsal sistemlerin işletimi, destek ve sürekliliğine odaklanan teknoloji süreçlerini yönetin.
                                </Text>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Kurumsal IT altyapıları",
                                        "Operasyon ve destek süreçleri",
                                        "Teknoloji yönetimi temelleri",
                                        "Sistem sürekliliği ve güvenliği"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Why Join Section */}
                <ContentSection
                    title="Bu Program Sana Ne Katacak?"
                    badge="Fırsatlar"
                    content={
                        <div className="space-y-6">
                            <Text variant="large">
                                <strong className="text-blue-600">BGTS Future Stars</strong> ile sadece teknik bilgi değil, profesyonel bir duruş ve vizyon kazanmanız için yanınızdayız.
                            </Text>
                            <div className="grid gap-6">
                                <div className="flex gap-4">
                                    <div className="bg-green-50 p-3 rounded-lg h-fit">
                                        <Target className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h5" className="mb-2">Kariyer Hızlandırma</Heading>
                                        <Text className="text-sm text-slate-600">
                                            Okulda öğrendiklerini gerçek hayatta uygulayarak yaşıtlarından bir adım önde başla.
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-purple-50 p-3 rounded-lg h-fit">
                                        <Users className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h5" className="mb-2">Güçlü Network</Heading>
                                        <Text className="text-sm text-slate-600">
                                            Sektörün önde gelen profesyonelleriyle çalışma ve mentorluk alma şansı.
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    image={
                        <Image
                            src="/images/headers/kariyer-gelisim-firsatlari.jpg"
                            alt="Young Engineers Working"
                            fill
                            className="object-cover"
                        />
                    }
                />
            </div>

            {/* --- YOUNG ENGINEERS MERGED SECTION END --- */}

            {/* Testimonials */}
            <Section className="bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-center mb-12">Çalışanlarımız Ne Diyor?</Heading>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TestimonialCard
                            quote="BGTS'de çalışmak, sürekli öğrenmek ve gelişmek demek. Burada fikirlerinize değer veriliyor ve inisiyatif almanız destekleniyor."
                            author="Ayşe Yılmaz"
                            role="Senior Software Engineer - 3 Yıl"
                            rating={5}
                            color="purple"
                        />
                        <TestimonialCard
                            quote="Samimi ve destekleyici bir çalışma ortamı var. Hem profesyonel hem de kişisel gelişimim için harika bir yer."
                            author="Mehmet Demir"
                            role="DevOps Engineer - 1.5 Yıl"
                            rating={5}
                            color="blue"
                        />
                    </div>
                </Container>
            </Section>

            {/* Application Form Section */}
            <Section className="bg-blue-900">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-6">
                            <Heading variant="h2" className="text-white">Geleceğe İlk Adımı Atın</Heading>
                            <Text className="text-blue-100 text-lg">
                                Genç Mühendis Programı'na başvurarak kariyerinizde fark yaratacak bir deneyime başlayın.
                                Hemen formu doldurun, sizi tanıyalım.
                            </Text>
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Özgeçmişini Hazırla</h4>
                                        <p className="text-sm text-blue-200">PDF veya Word formatında güncel CV'nizi yükleyin.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Hızlı Süreç</h4>
                                        <p className="text-sm text-blue-200">Başvurunuzu inceliyor ve en kısa sürede dönüş yapıyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ApplicationForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
