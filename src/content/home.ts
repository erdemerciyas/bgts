import { BarChart, Users, Globe, ShieldCheck } from "lucide-react";

export const HOME_CONTENT = {
    hero: {
        title: "Business & Global Technology Solutions",
        subtitle: "Kritik yazılım projeleri, yönetilen hizmetler ve dijital dönüşüm çözümleriyle kurumunuzun stratejik teknoloji ortağıyız.",
        badge: "Global Teknoloji Ortağı",
        ctaText: "Hizmetleri Keşfedin",
        ctaLink: "/services",
        videoSrc: "https://play.vidyard.com/TrGTy95HjNi21m7LAtH5e8?autoplay=1&embed_button=0&viral_sharing=0&loop=1&controls=0&muted=1"
    },
    socialProof: {
        title: "Türkiye'nin En Büyük Kurumlarının Güvenilir İş Ortağı",
        logos: [
            { name: "Akbank", src: "" },
            { name: "Türk Telekom", src: "" },
            { name: "Aselsan", src: "" },
            { name: "Trendyol", src: "" },
            { name: "Migros", src: "" },
            { name: "Vodafone", src: "" },
            { name: "Ziraat Bankası", src: "" },
            { name: "Turkcell", src: "" },
            { name: "Garanti BBVA", src: "" },
            { name: "TurkNet", src: "" },
            { name: "Mercedes-Benz", src: "" }
        ]
    },
    servicesSummary: {
        badge: "Hizmetlerimiz",
        heading: "Kanıtlanmış Sonuçlarla\nGüvenilir Teknoloji Ortağınız",
        description: "25 yılı aşkın deneyimimizle, işletmelerin sürdürülebilir büyüme elde etmelerini, operasyonları optimize etmelerini ve benzersiz ihtiyaçlarına göre uyarlanmış stratejik teknoloji danışmanlığı ile karlılığı artırmalarını sağlıyoruz.",
        ctaText: "Tüm Hizmetlerimizi İnceleyin",
        image: "/images/home/kurumsal-teknoloji-danismanligi.jpg",
        sections: [
            {
                id: "managed-services",
                title: "Yönetilen Hizmetler",
                description: "İşletmenizin uzun vadeli hedeflerine ulaşmasına yardımcı olmak, sürdürülebilir büyüme ve rekabet avantajı sağlamak için özelleştirilmiş stratejik planlar oluşturuyor ve uyguluyoruz.",
                features: ["7/24 İzleme & Destek", "AIOps & Otomasyon"],
                ctaLink: "/services/managed-services",
                ctaText: "Çözümleri Keşfedin",
                image: "/images/home/yonetilen-hizmetler.jpg",
                theme: "corporate" // corporate-primary
            },
            {
                id: "software-development",
                title: "Yazılım Geliştirme",
                description: "Java, .NET ve modern frontend teknolojileriyle, kurumunuzun ihtiyaçlarına özel, ölçeklenebilir ve güvenli yazılım çözümleri tasarlıyoruz.",
                features: ["Mikroservis Mimarisi", "API-First Yaklaşım"],
                ctaLink: "/services/software-development",
                ctaText: "Çözümleri Keşfedin",
                image: "/images/home/yazilim-gelistirme.jpg",
                theme: "dark" // #0A1628
            },
            {
                id: "devops",
                title: "DevOps & Cloud",
                description: "Otomatik dağıtım süreçleri (CI/CD) ve bulut modernizasyonu ile yazılım teslimat hızınızı ve kalitenizi artırarak operasyonel verimlilik sağlıyoruz.",
                features: ["Kubernetes & Konteyner", "Cloud-Native Dönüşüm"],
                ctaLink: "/services/devops",
                ctaText: "Çözümleri Keşfedin",
                image: "/images/home/devops-cozumleri.jpg",
                theme: "corporate" // corporate-primary
            }
        ]
    },
    deliveryModels: {
        badge: "Esnek İş Modelleri",
        heading: "Nasıl Çalışıyoruz?",
        description: "İhtiyaçlarınıza özel esnek çalışma modelleri ile uçtan uca proje teslimatı veya çevik takım ölçeklendirmesi.",
        models: [
            {
                id: "turnkey",
                title: "Anahtar Teslim (TurnKey)",
                description: "Projenizi A'dan Z'ye biz yönetelim. Sabit kapsamlı projeleriniz için analiz, tasarım, geliştirme ve test süreçlerini üstleniyoruz.",
                features: ["Sabit Bütçe & Zaman", "Tek Sorumluluk Noktası", "Uçtan Uca Teslimat"],
                ctaText: "Detaylı Bilgi Alın",
                ctaLink: "/services/software-development",
                variant: "light"
            },
            {
                id: "time-material",
                title: "Efor Bazlı (Time & Material)",
                description: "Kendi ekibinizi bizim uzmanlarımızla güçlendirin. Çevik süreçlerinize anında uyum sağlayan elit mühendisler.",
                features: ["Esnek Ölçeklendirme", "Tam Kontrol & Şeffaflık", "Hızlı Adaptasyon"],
                ctaText: "Ekibinizi Kurun",
                ctaLink: "/services/software-development",
                variant: "dark"
            }
        ]
    },
    industries: {
        badge: "Sektörler",
        heading: "Hizmet Verdiğimiz Sektörler",
        description: "Finans, savunma, perakende ve telekom gibi kritik sektörlerde; işletmelerin büyümesini destekleyen, operasyonları optimize eden ve dijital dönüşüm yolculuklarını hızlandıran stratejik çözümler sunuyoruz.",
        items: [
            {
                title: "Bankacılık & Finans",
                description: "Modernizasyon, açık bankacılık ve fintech entegrasyonlarıyla riskleri yönetirken karlılığı artırıyoruz.",
                link: "/industries/banking",
                image: "/images/home/bankacilik-sektoru.jpg",
                icon: BarChart
            },
            {
                title: "Perakende",
                description: "Müşteri deneyimini iyileştirmek ve tedarik zincirini optimize etmek için e-ticaret ve omnichannel stratejileri.",
                link: "/industries/retail-telecom",
                image: "/images/home/perakende-sektoru.jpg",
                icon: Users
            },
            {
                title: "Telekomünikasyon",
                description: "5G ve dijital dönüşüm ile rekabetçi ölçeklenme ve teknolojik inovasyonu yakalayın.",
                link: "/industries/retail-telecom",
                image: "/images/home/telekomunikasyon-sektoru.jpg",
                icon: Globe
            },
            {
                title: "Savunma Sanayi",
                description: "Kritik görev sistemleri ve gömülü yazılımlarla üst düzey güvenlik standartları ve regülasyon uyumu.",
                link: "/industries/defense",
                image: "/images/home/savunma-sanayi.jpg",
                icon: ShieldCheck
            }
        ]
    },
    careers: {
        badge: "Kariyer & Kültür",
        heading: "Geleceği Birlikte Şekillendirelim",
        description: "Şeffaf iletişim, takım ruhu ve sürekli öğrenme tutkusuyla büyüyen global bir aileyiz. Genç Yetenek Programlarımız ve her seviyeye uygun kariyer yollarımızla potansiyelini keşfet.",
        image: "/images/home/kariyer-ve-kultur.jpg",
        programs: [
            { title: "Genç Yetenekler", desc: "Staj, Bootcamp ve Eğitim programları.", type: "secondary" },
            { title: "Kariyer Yolları", desc: "Teknik ve Yönetsel şeffaf ilerleme.", type: "tertiary" }
        ],
        ctaText: "Kariyer Fırsatları",
        ctaLink: "/hr",
        badgeText: "Great Place to Work",
        badgeDesc: "Çalışan odaklı kültürümüzle sektörde fark yaratıyoruz."
    }
};
