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
        title: "Yazılım Geliştirme",
        description: "Büyük Veri, AI, Modernizasyon, Bankacılık ve Telekom çözümleri.",
        href: "/services/software-development",
        category: "Hizmet",
        tags: ["kodlama", "app", "web", "mobile", "uygulama", "yazılım"]
    },
    {
        title: "Yönetilen Hizmetler (MSP)",
        description: "Veri merkezi yönetimi, 7/24 izleme, ITSM, SRE ve DevOps as a Service.",
        href: "/services/managed-services",
        category: "Hizmet",
        tags: ["support", "destek", "bakım", "monitoring", "hosting", "cloud", "sunucu"]
    },
    {
        title: "DevOps & SRE",
        description: "CI/CD süreçleri, otomasyon ve bulut mühendisliği hizmetleri.",
        href: "/services/devops",
        category: "Hizmet",
        tags: ["otomasyon", "pipeline", "docker", "kubernetes", "jenkins"]
    },

    // Sektörler
    {
        title: "Bankacılık ve Finans",
        description: "Dijital kanallar ve regülasyon uyumu için uçtan uca çözümler.",
        href: "/industries/banking",
        category: "Sektör",
        tags: ["banka", "fintech", "ödeme", "finans"]
    },
    {
        title: "Savunma Sanayi",
        description: "MIL-STD ve IEEE standartlarına uygun görev kritik sistemler.",
        href: "/industries/defense",
        category: "Sektör",
        tags: ["askeri", "güvenlik", "defence", "savunma"]
    },
    {
        title: "Telekomünikasyon",
        description: "OSS/BSS ve dijital iletişim altyapıları.",
        href: "/industries/telecommunications",
        category: "Sektör",
        tags: ["gsm", "internet", "iletişim", "telekom"]
    },
    {
        title: "Perakende & E-Ticaret",
        description: "Omnichannel yapılar ve yüksek hacimli işlem yönetimi.",
        href: "/industries/retail",
        category: "Sektör",
        tags: ["mağaza", "e-ticaret", "perakende", "retail"]
    },

    // Ürünler
    {
        title: "AI Hiring Assistant",
        description: "Yapay zeka ile işe alım süreçlerini hızlandıran platform.",
        href: "/products/ai-hiring-assistant",
        category: "Ürün",
        tags: ["yapay zeka", "işe alım", "mülakat", "hr"]
    },
    {
        title: "CV Converter",
        description: "Dağınık CV formatlarını standart hale getiren akıllı araç.",
        href: "/products/cv-converter",
        category: "Ürün",
        tags: ["cv", "özgeçmiş", "dönüştürme"]
    },
    {
        title: "Cortex",
        description: "Yazılım yaşam döngüsünü AI agent'larla otomatikleştiren platform.",
        href: "/products/cortex",
        category: "Ürün",
        tags: ["sdlc", "otomasyon", "ai", "yapay zeka"]
    },
    {
        title: "HCM Platformu",
        description: "İnsan Kaynakları yönetimini uçtan uca dijitalleştiren platform.",
        href: "/products/hcm",
        category: "Ürün",
        tags: ["insan kaynakları", "hr", "bordro", "izin"]
    },
    {
        title: "Praxila",
        description: "Yeni nesil otomasyon ve operasyon yönetimi platformu.",
        href: "/products/praxila",
        category: "Ürün",
        tags: ["otomasyon", "operasyon", "yönetim"]
    },
    {
        title: "MeetSense",
        description: "Toplantıları AI ile kaydeden, analiz eden ve kurumsal hafızaya dönüştüren platform.",
        href: "/products/meetsense",
        category: "Ürün",
        tags: ["toplantı", "meeting", "ai", "kayıt", "analiz"]
    },
    {
        title: "Doc2Bot",
        description: "Kurum içi bilgi bankanızı akıllı bir AI asistana dönüştüren platform.",
        href: "/products/doc2bot",
        category: "Ürün",
        tags: ["chatbot", "doküman", "bilgi bankası", "ai"]
    },
    {
        title: "DocMind",
        description: "Kod tabanından otomatik teknik dokümantasyon üreten araç.",
        href: "/products/docmind",
        category: "Ürün",
        tags: ["dokümantasyon", "kod", "teknik", "otomatik"]
    },

    // Kariyer
    {
        title: "Genç Mühendis Programı",
        description: "Yeni mezunlar için yazılım, test ve altyapı eğitim programları.",
        href: "/genc-muhendis-programi",
        category: "Kariyer",
        tags: ["staj", "bootcamp", "yeni mezun", "genç mühendis", "program"]
    },
    {
        title: "Kariyer Yolları",
        description: "Potansiyelinizi ortaya çıkaran net ve şeffaf kariyer haritaları.",
        href: "/career-paths",
        category: "Kariyer",
        tags: ["kariyer", "terfi", "gelişim", "yol haritası"]
    },
    {
        title: "Eğitim ve Gelişim",
        description: "Sürekli öğrenme ve profesyonel gelişim fırsatları.",
        href: "/learning",
        category: "Kariyer",
        tags: ["eğitim", "öğrenme", "akademi", "gelişim"]
    },
    {
        title: "Kültür",
        description: "Çalışma ortamımız, değerlerimiz ve ekip ruhu.",
        href: "/culture",
        category: "Kariyer",
        tags: ["kültür", "çalışma", "ortam", "değerler"]
    },
    {
        title: "Sürdürülebilir Değer Programı",
        description: "Eğitim, sürdürülebilirlik ve sosyal sorumluluk projelerimiz.",
        href: "/social-contribution",
        category: "Kariyer",
        tags: ["sosyal", "sorumluluk", "sürdürülebilir", "toplumsal"]
    },

    // Kurumsal
    {
        title: "Hakkımızda",
        description: "BGTS'nin vizyonu, misyonu ve global varlığı.",
        href: "/about",
        category: "Kurumsal",
        tags: ["şirket", "biz kimiz", "hakkında", "vizyon"]
    },
    {
        title: "İletişim",
        description: "Ofis adresleri, telefon ve e-posta bilgileri.",
        href: "/contact",
        category: "Kurumsal",
        tags: ["adres", "telefon", "mail", "ulaşım"]
    },
    {
        title: "İş Ortakları",
        description: "Microsoft, AWS, ServiceNow gibi teknoloji ortaklıklarımız.",
        href: "/partnerships",
        category: "Kurumsal",
        tags: ["partner", "ortaklık", "microsoft", "aws"]
    },
    {
        title: "Başarı Hikayeleri",
        description: "Gerçek projeler, gerçek sonuçlar ve ilham veren kariyerler.",
        href: "/resources/success-stories",
        category: "Kurumsal",
        tags: ["başarı", "hikaye", "proje", "referans"]
    },
    {
        title: "İnfografikler",
        description: "Sektörel veriler ve trend analizleri.",
        href: "/resources/infographics",
        category: "Kurumsal",
        tags: ["veri", "istatistik", "grafik", "infografik"]
    },
];
