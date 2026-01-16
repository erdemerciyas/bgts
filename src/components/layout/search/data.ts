export interface SearchItem {
    title: string;
    description: string;
    href: string;
    category: "Hizmet" | "Sektör" | "Ürün" | "Kariyer" | "Kurumsal";
    tags?: string[];
}

export const SEARCH_ITEMS: SearchItem[] = [
    // Hizmetler
    {
        title: "Veri Merkezi & Altyapı",
        description: "Tier-3 standartlarında veri merkezi ve altyapı hizmetleri.",
        href: "/services/managed-services",
        category: "Hizmet",
        tags: ["hosting", "cloud", "sunucu", "datacenter"]
    },
    {
        title: "Yönetilen Hizmetler (MSP)",
        description: "7/24 proaktif izleme ve IT operasyon yönetimi.",
        href: "/services/managed-services",
        category: "Hizmet",
        tags: ["support", "destek", "bakım", "monitoring"]
    },
    {
        title: "Yazılım Geliştirme",
        description: "Kurumsal ve özel yazılım geliştirme çözümleri.",
        href: "/services/software-development",
        category: "Hizmet",
        tags: ["kodlama", "app", "web", "mobile", "uygulama"]
    },
    {
        title: "DevOps & SRE",
        description: "CI/CD süreçleri ve otomasyon hizmetleri.",
        href: "/services/devops",
        category: "Hizmet",
        tags: ["otomasyon", "pipeline", "docker", "kubernetes"]
    },

    // Sektörler
    {
        title: "Bankacılık ve Finans",
        description: "Finans sektörü için güvenli ve hızlı teknoloji çözümleri.",
        href: "/services/software-development#banking",
        category: "Sektör",
        tags: ["banka", "fintech", "ödeme"]
    },
    {
        title: "Savunma Sanayi",
        description: "Kritik görev sistemleri ve savunma teknolojileri.",
        href: "/industries/defense",
        category: "Sektör",
        tags: ["askeri", "güvenlik", "defence"]
    },
    {
        title: "Telekomünikasyon",
        description: "Yüksek ölçekli telekom ve iletişim altyapıları.",
        href: "/services/software-development#telecom",
        category: "Sektör",
        tags: ["gsm", "internet", "iletişim"]
    },

    // Kariyer
    {
        title: "Açık Pozisyonlar",
        description: "BGTS ekibine katılmak için güncel iş ilanları.",
        href: "/hr/jobs",
        category: "Kariyer",
        tags: ["iş", "ilan", "başvuru", "kariyer"]
    },
    {
        title: "Genç Yetenek Programı",
        description: "Yeni mezunlar ve öğrenciler için gelişim programları.",
        href: "/hr#talent",
        category: "Kariyer",
        tags: ["staj", "bootcamp", "yeni mezun"]
    },

    // Kurumsal
    {
        title: "Hakkımızda",
        description: "BGTS'nin vizyonu, misyonu ve tarihçesi.",
        href: "/about",
        category: "Kurumsal",
        tags: ["sirket", "biz kimiz"]
    },
    {
        title: "İletişim",
        description: "Bize ulaşın, ofislerimiz ve iletişim bilgileri.",
        href: "/contact",
        category: "Kurumsal",
        tags: ["adres", "telefon", "mail"]
    }
];
