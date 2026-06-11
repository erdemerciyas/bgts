// Icons are resolved in the client components because passing React components from Server to Client is not supported.

export const getHomeContent = (dict?: any) => {
    const sDict = dict?.servicesSummary || {};
    const dDict = dict?.deliveryModels || {};

    const iDict = dict?.industries || {};

    return {
        servicesSummary: {
            // "badge" is static or can be moved to dictionary later if needed
            badge: "Hizmetlerimiz",
            heading: sDict.heading || "Kurumsal Ölçekte\nGüvenilir Teknoloji Ortağınız",
            description: sDict.description || "30+ yıllık deneyimimiz ve 1000+ proje tecrübemizle, operasyonlarınızı güvenle büyütüyoruz.",
            ctaText: sDict.ctaText || "İş Modellerimizi Keşfedin",
            image: "/images/home/bgts-oduller.jpg",
            sections: [
                {
                    id: "software-development",
                    title: sDict.sections?.[0]?.title || "Yazılım Geliştirme",
                    description: sDict.sections?.[0]?.description || "Java, .NET ve modern frontend teknolojileriyle, kurumunuzun ihtiyaçlarına özel, ölçeklenebilir ve güvenli yazılım çözümleri tasarlıyoruz.",
                    features: sDict.sections?.[0]?.features || ["Mikroservis Mimarisi", "API-First Yaklaşım"],
                    ctaLink: "/services/software-development",
                    ctaText: sDict.sections?.[0]?.ctaText || "Çözümleri Keşfedin",
                    image: "/images/home/yazilim-gelistirme.jpg",
                    theme: "dark" // #0A1628
                },
                {
                    id: "devops",
                    title: sDict.sections?.[1]?.title || "DevOps & Cloud",
                    description: sDict.sections?.[1]?.description || "Otomatik dağıtım süreçleri (CI/CD) ve bulut modernizasyonu ile yazılım teslimat hızınızı ve kalitenizi artırarak operasyonel verimlilik sağlıyoruz.",
                    features: sDict.sections?.[1]?.features || ["Kubernetes & Konteyner", "Cloud-Native Dönüşüm"],
                    ctaLink: "/services/managed-services",
                    ctaText: sDict.sections?.[1]?.ctaText || "Çözümleri Keşfedin",
                    image: "/images/home/devops-cozumleri.jpg",
                    theme: "corporate" // corporate-dark
                },
                {
                    id: "managed-services",
                    title: sDict.sections?.[2]?.title || "Yönetilen Hizmetler",
                    description: sDict.sections?.[2]?.description || "İşletmenizin uzun vadeli hedeflerine ulaşmasına yardımcı olmak, sürdürülebilir büyüme ve rekabet avantajı sağlamak için özelleştirilmiş stratejik planlar oluşturuyor ve uyguluyoruz.",
                    features: sDict.sections?.[2]?.features || ["7/24 İzleme & Destek", "AIOps & Otomasyon"],
                    ctaLink: "/services/managed-services",
                    ctaText: sDict.sections?.[2]?.ctaText || "Çözümleri Keşfedin",
                    image: "/images/home/yonetilen-hizmetler.jpg",
                    theme: "corporate" // corporate-dark
                }
            ]
        },
        deliveryModels: {
            heading: dDict.heading || "Esnek İş Modelleri",
            description: dDict.description || "İhtiyaçlarınıza özel esnek çalışma modelleri ile uçtan uca proje teslimatı veya çevik takım ölçeklendirmesi.",
            models: [
                {
                    id: "turnkey",
                    title: dDict.models?.[0]?.title || "Anahtar Teslim (TurnKey)",
                    description: dDict.models?.[0]?.description || "Projelerinizi baştan sona üstlenir, tüm süreci tek noktadan yönetiriz.",
                    features: dDict.models?.[0]?.features || ["Sabit Bütçe & Zaman", "Tek Sorumluluk Noktası", "Uçtan Uca Teslimat"],
                    ctaText: dDict.models?.[0]?.ctaText || "Detaylı Bilgi Alın",
                    ctaLink: "/contact",
                    variant: "light"
                },
                {
                    id: "time-material",
                    title: dDict.models?.[1]?.title || "Efor Bazlı (Time & Material)",
                    description: dDict.models?.[1]?.description || "İhtiyacınıza göre esnek ekiplerle hızlı ölçeklenir, projelerinize anında destek sağlarız.",
                    features: dDict.models?.[1]?.features || ["Esnek Ölçeklendirme", "Tam Kontrol & Şeffaflık", "Hızlı Adaptasyon"],
                    ctaText: dDict.models?.[1]?.ctaText || "Ekibinizi Kurun",
                    ctaLink: "/contact",
                    variant: "dark"
                }
            ]
        },
        industries: {
            heading: iDict.heading || "Uzmanlaştığımız Sektörler",
            description: iDict.description || "Finans, telekom, perakende ve savunma sektörlerinde yüksek ölçekli sistemler geliştiriyor ve yönetiyoruz.",
            items: [
                {
                    title: iDict.items?.[0]?.title || "Bankacılık & Finans",
                    description: iDict.items?.[0]?.description || "Fintech entegrasyonları ve yüksek hacimli işlem altyapılarıyla güvenli, hızlı ve regülasyon uyumlu sistemler geliştiriyoruz.",
                    link: "/industries/banking",
                    image: "/images/home/bankacilik-sektoru.jpg",
                    icon: "BarChart"
                },
                {
                    title: iDict.items?.[1]?.title || "Perakende",
                    description: iDict.items?.[1]?.description || "Müşteri deneyimini güçlendiren ve operasyonel verimliliği artıran dijital platformlar ve veri odaklı çözümler geliştiriyoruz.",
                    link: "/industries/retail-telecom",
                    image: "/images/home/perakende-sektoru.jpg",
                    icon: "Users"
                },
                {
                    title: iDict.items?.[2]?.title || "Telekomünikasyon",
                    description: iDict.items?.[2]?.description || "Yüksek trafikli sistemler ve 5G dönüşüm süreçleri için ölçeklenebilir, kesintisiz ve performans odaklı altyapılar sunuyoruz.",
                    link: "/industries/retail-telecom",
                    image: "/images/home/telekomunikasyon-sektoru.jpg",
                    icon: "Globe"
                },
                {
                    title: iDict.items?.[3]?.title || "Savunma Sanayi",
                    description: iDict.items?.[3]?.description || "Kritik sistemler için yüksek güvenlik standartlarına sahip, dayanıklı ve sürdürülebilir yazılım ve altyapı çözümleri sunuyoruz.",
                    link: "/industries/defense",
                    image: "/images/home/savunma-sanayi.jpg",
                    icon: "ShieldCheck"
                }
            ]
        }
    };
};

