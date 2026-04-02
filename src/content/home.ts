import { BarChart, Users, Globe, ShieldCheck } from "lucide-react";

export const HOME_CONTENT = {
    servicesSummary: {
        badge: "Hizmetlerimiz",
        heading: "Kurumsal Ölçekte\nGüvenilir Teknoloji Ortağınız",
        description: "30+ yıllık deneyimimiz ve 1000+ proje tecrübemizle, operasyonlarınızı güvenle büyütüyoruz.",
        ctaText: "İş Modellerimizi Keşfedin",
        image: "/images/home/bgts-oduller.jpg",
        sections: [
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
                theme: "corporate" // corporate-dark
            },
            {
                id: "managed-services",
                title: "Yönetilen Hizmetler",
                description: "İşletmenizin uzun vadeli hedeflerine ulaşmasına yardımcı olmak, sürdürülebilir büyüme ve rekabet avantajı sağlamak için özelleştirilmiş stratejik planlar oluşturuyor ve uyguluyoruz.",
                features: ["7/24 İzleme & Destek", "AIOps & Otomasyon"],
                ctaLink: "/services/managed-services",
                ctaText: "Çözümleri Keşfedin",
                image: "/images/home/yonetilen-hizmetler.jpg",
                theme: "corporate" // corporate-dark
            }
        ]
    },
    deliveryModels: {
        heading: "Esnek İş Modelleri",
        description: "İhtiyaçlarınıza özel esnek çalışma modelleri ile uçtan uca proje teslimatı veya çevik takım ölçeklendirmesi.",
        models: [
            {
                id: "turnkey",
                title: "Anahtar Teslim (TurnKey)",
                description: "Projelerinizi baştan sona üstlenir, tüm süreci tek noktadan yönetiriz.",
                features: ["Sabit Bütçe & Zaman", "Tek Sorumluluk Noktası", "Uçtan Uca Teslimat"],
                ctaText: "Detaylı Bilgi Alın",
                ctaLink: "/contact",
                variant: "light"
            },
            {
                id: "time-material",
                title: "Efor Bazlı (Time & Material)",
                description: "İhtiyacınıza göre esnek ekiplerle hızlı ölçeklenir, projelerinize anında destek sağlarız.",
                features: ["Esnek Ölçeklendirme", "Tam Kontrol & Şeffaflık", "Hızlı Adaptasyon"],
                ctaText: "Ekibinizi Kurun",
                ctaLink: "/contact",
                variant: "dark"
            }
        ]
    },
    industries: {
        heading: "Uzmanlaştığımız Sektörler",
        description: "Finans, telekom, perakende ve savunma sektörlerinde yüksek ölçekli sistemler geliştiriyor ve yönetiyoruz.",
        items: [
            {
                title: "Bankacılık & Finans",
                description: "Fintech entegrasyonları ve yüksek hacimli işlem altyapılarıyla güvenli, hızlı ve regülasyon uyumlu sistemler geliştiriyoruz.",
                link: "/industries/banking",
                image: "/images/home/bankacilik-sektoru.jpg",
                icon: BarChart
            },
            {
                title: "Perakende",
                description: "Müşteri deneyimini güçlendiren ve operasyonel verimliliği artıran dijital platformlar ve veri odaklı çözümler geliştiriyoruz.",
                link: "/industries/retail-telecom",
                image: "/images/home/perakende-sektoru.jpg",
                icon: Users
            },
            {
                title: "Telekomünikasyon",
                description: "Yüksek trafikli sistemler ve 5G dönüşüm süreçleri için ölçeklenebilir, kesintisiz ve performans odaklı altyapılar sunuyoruz.",
                link: "/industries/retail-telecom",
                image: "/images/home/telekomunikasyon-sektoru.jpg",
                icon: Globe
            },
            {
                title: "Savunma Sanayi",
                description: "Kritik sistemler için yüksek güvenlik standartlarına sahip, dayanıklı ve sürdürülebilir yazılım ve altyapı çözümleri sunuyoruz.",
                link: "/industries/defense",
                image: "/images/home/savunma-sanayi.jpg",
                icon: ShieldCheck
            }
        ]
    }
};
