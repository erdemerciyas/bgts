import type { Locale } from "@/i18n-config";

export interface SearchItem {
    title: string;
    description: string;
    /** English title shown when locale is 'eng' */
    titleEn?: string;
    /** English description shown when locale is 'eng' */
    descriptionEn?: string;
    href: string;
    category: "Hizmet" | "Sektör" | "Ürün" | "Kariyer" | "Kurumsal";
    /** Category label per locale */
    categoryLabel?: { tr: string; eng: string };
    tags?: string[];
}

/** Localized category labels */
export const CATEGORY_LABELS: Record<SearchItem["category"], { tr: string; eng: string }> = {
    "Hizmet": { tr: "Hizmet", eng: "Service" },
    "Sektör": { tr: "Sektör", eng: "Industry" },
    "Ürün": { tr: "Ürün", eng: "Product" },
    "Kariyer": { tr: "Kariyer", eng: "Career" },
    "Kurumsal": { tr: "Kurumsal", eng: "Corporate" },
};

/** Get the display title for a search item based on locale */
export function getSearchTitle(item: SearchItem, locale: Locale): string {
    return locale === "eng" && item.titleEn ? item.titleEn : item.title;
}

/** Get the display description for a search item based on locale */
export function getSearchDescription(item: SearchItem, locale: Locale): string {
    return locale === "eng" && item.descriptionEn ? item.descriptionEn : item.description;
}

/** Get the localized category label */
export function getSearchCategoryLabel(item: SearchItem, locale: Locale): string {
    return CATEGORY_LABELS[item.category][locale] ?? item.category;
}

/** Popular search suggestions per locale */
export const POPULAR_SEARCHES: Record<"tr" | "eng", string[]> = {
    tr: ["Yazılım Geliştirme", "Kariyer", "Yapay Zeka", "DevOps", "İletişim"],
    eng: ["Software Development", "Career", "Artificial Intelligence", "DevOps", "Contact"],
};

/** No-results message per locale */
export const SEARCH_NO_RESULTS: Record<"tr" | "eng", { title: string; desc: (q: string) => string }> = {
    tr: { title: "Sonuç Bulunamadı", desc: (q) => `"${q}" ile ilgili bir içerik eşleşmedi. Lütfen farklı anahtar kelimeler deneyin.` },
    eng: { title: "No Results Found", desc: (q) => `No content matched "${q}". Please try different keywords.` },
};

export const SEARCH_PLACEHOLDER: Record<"tr" | "eng", string> = {
    tr: "Aramak istediğiniz konuyu yazın...",
    eng: "Type what you're looking for...",
};

export const SEARCH_FOOTER: Record<"tr" | "eng", { select: string; close: string }> = {
    tr: { select: "Enter", close: "Esc" },
    eng: { select: "Enter", close: "Esc" },
};

export const SEARCH_ITEMS: SearchItem[] = [
    // Hizmetler
    {
        title: "Yazılım Geliştirme",
        description: "Büyük Veri, AI, Modernizasyon, Bankacılık ve Telekom çözümleri.",
        titleEn: "Software Development",
        descriptionEn: "Big Data, AI, Modernization, Banking and Telecom solutions.",
        href: "/services/software-development",
        category: "Hizmet",
        tags: ["kodlama", "app", "web", "mobile", "uygulama", "yazılım", "modernizasyon", "büyük veri", "big data", "yapay zeka", "ai", "software", "development", "coding", "application", "java", ".net", "frontend", "backend", "mikroservis", "microservice", "api"]
    },
    {
        title: "Yönetilen Hizmetler (MSP)",
        description: "Veri merkezi yönetimi, 7/24 izleme, ITSM, SRE ve DevOps as a Service.",
        titleEn: "Managed Services (MSP)",
        descriptionEn: "Data center management, 24/7 monitoring, ITSM, SRE and DevOps as a Service.",
        href: "/services/managed-services",
        category: "Hizmet",
        tags: ["support", "destek", "bakım", "monitoring", "hosting", "cloud", "sunucu", "managed", "msp", "veri merkezi", "data center", "itsm", "7/24", "izleme", "yönetilen"]
    },
    {
        title: "DevOps & SRE",
        description: "CI/CD süreçleri, otomasyon ve bulut mühendisliği hizmetleri.",
        titleEn: "DevOps & SRE",
        descriptionEn: "CI/CD pipelines, automation and cloud engineering services.",
        href: "/services/managed-services",
        category: "Hizmet",
        tags: ["otomasyon", "pipeline", "docker", "kubernetes", "jenkins", "ci/cd", "sre", "bulut", "cloud", "devops", "automation", "konteyner", "container", "k8s"]
    },

    // Sektörler
    {
        title: "Bankacılık ve Finans",
        description: "Dijital kanallar ve regülasyon uyumu için uçtan uca çözümler.",
        titleEn: "Banking & Finance",
        descriptionEn: "End-to-end solutions for digital channels and regulatory compliance.",
        href: "/industries/banking",
        category: "Sektör",
        tags: ["banka", "fintech", "ödeme", "finans", "kredi", "mevduat", "yatırım", "banking", "finance", "bank", "payment", "credit", "investment"]
    },
    {
        title: "Savunma Sanayi",
        description: "MIL-STD ve IEEE standartlarına uygun görev kritik sistemler.",
        titleEn: "Defense Industry",
        descriptionEn: "Mission-critical systems compliant with MIL-STD and IEEE standards.",
        href: "/industries/defense",
        category: "Sektör",
        tags: ["askeri", "güvenlik", "defence", "savunma", "havacılık", "simülasyon", "defense", "military", "security", "aviation", "simulation", "mil-std"]
    },
    {
        title: "Telekomünikasyon",
        description: "OSS/BSS ve dijital iletişim altyapıları.",
        titleEn: "Telecommunications",
        descriptionEn: "OSS/BSS and digital communication infrastructures.",
        href: "/industries/telecommunications",
        category: "Sektör",
        tags: ["gsm", "internet", "iletişim", "telekom", "telecommunications", "telecom", "oss", "bss", "dijital iletişim"]
    },
    {
        title: "Perakende & E-Ticaret",
        description: "Omnichannel yapılar ve yüksek hacimli işlem yönetimi.",
        titleEn: "Retail & E-Commerce",
        descriptionEn: "Omnichannel structures and high-volume transaction management.",
        href: "/industries/retail",
        category: "Sektör",
        tags: ["mağaza", "e-ticaret", "perakende", "retail", "ecommerce", "e-commerce", "omnichannel", "online satış"]
    },
    {
        title: "Diğer Sektörler",
        description: "Enerji, sağlık, lojistik ve daha fazlası için teknoloji çözümleri.",
        titleEn: "Other Industries",
        descriptionEn: "Technology solutions for energy, healthcare, logistics and more.",
        href: "/industries/retail-telecom",
        category: "Sektör",
        tags: ["enerji", "sağlık", "lojistik", "energy", "healthcare", "logistics", "diğer", "other", "üretim", "manufacturing"]
    },

    // Ürünler
    {
        title: "AI Hiring Assistant",
        description: "Yapay zeka ile işe alım süreçlerini hızlandıran platform.",
        titleEn: "AI Hiring Assistant",
        descriptionEn: "Platform that accelerates recruitment processes with artificial intelligence.",
        href: "/products/ai-hiring-assistant",
        category: "Ürün",
        tags: ["yapay zeka", "işe alım", "mülakat", "hr", "ai hiring", "recruitment", "interview", "talent acquisition", "cv", "aday"]
    },
    {
        title: "CV Converter",
        description: "Dağınık CV formatlarını standart hale getiren akıllı araç.",
        titleEn: "CV Converter",
        descriptionEn: "Smart tool that standardizes messy CV formats.",
        href: "/products/cv-converter",
        category: "Ürün",
        tags: ["cv", "özgeçmiş", "dönüştürme", "resume", "converter", "standardize", "format"]
    },
    {
        title: "Cortex",
        description: "Yazılım yaşam döngüsünü AI agent'larla otomatikleştiren platform.",
        titleEn: "Cortex",
        descriptionEn: "Platform that automates the software development lifecycle with AI agents.",
        href: "/products/cortex",
        category: "Ürün",
        tags: ["sdlc", "otomasyon", "ai", "yapay zeka", "automation", "software lifecycle", "ai agents", "jira", "confluence", "code generation"]
    },
    {
        title: "HCM Platformu",
        description: "İnsan Kaynakları yönetimini uçtan uca dijitalleştiren platform.",
        titleEn: "HCM Platform",
        descriptionEn: "Platform that digitalizes Human Resources management end-to-end.",
        href: "/products/hcm",
        category: "Ürün",
        tags: ["insan kaynakları", "hr", "bordro", "izin", "ik", "performans", "human capital", "human resources", "payroll", "leave", "performance"]
    },
    {
        title: "Praxilla",
        description: "Yeni nesil otomasyon ve operasyon yönetimi platformu.",
        titleEn: "Praxilla",
        descriptionEn: "Next-generation automation and operations management platform.",
        href: "/products/praxilla",
        category: "Ürün",
        tags: ["otomasyon", "operasyon", "yönetim", "automation", "operations", "management", "it operations", "itop", "monitoring"]
    },
    {
        title: "MeetSense",
        description: "Toplantıları AI ile kaydeden, analiz eden ve kurumsal hafızaya dönüştüren platform.",
        titleEn: "MeetSense",
        descriptionEn: "Platform that records, analyzes and converts meetings into corporate memory with AI.",
        href: "/products/meetsense",
        category: "Ürün",
        tags: ["toplantı", "meeting", "ai", "kayıt", "analiz", "transcript", "minutes", "kurumsal hafıza", "corporate memory", "meeting notes"]
    },
    {
        title: "Doc2Bot",
        description: "Kurum içi bilgi bankanızı akıllı bir AI asistana dönüştüren platform.",
        titleEn: "Doc2Bot",
        descriptionEn: "Platform that turns your internal knowledge base into a smart AI assistant.",
        href: "/products/doc2bot",
        category: "Ürün",
        tags: ["chatbot", "doküman", "bilgi bankası", "ai", "document", "knowledge base", "rag", "llm", "asistan", "assistant"]
    },
    {
        title: "DocMind",
        description: "Kod tabanından otomatik teknik dokümantasyon üreten araç.",
        titleEn: "DocMind",
        descriptionEn: "Tool that automatically generates technical documentation from codebase.",
        href: "/products/docmind",
        category: "Ürün",
        tags: ["dokümantasyon", "kod", "teknik", "otomatik", "documentation", "code", "technical", "auto generate", "api docs"]
    },

    // Kariyer
    {
        title: "Kariyer Yolları",
        description: "Potansiyelinizi ortaya çıkaran net ve şeffaf kariyer haritaları.",
        titleEn: "Career Paths",
        descriptionEn: "Clear and transparent career maps that unlock your potential.",
        href: "/career-paths",
        category: "Kariyer",
        tags: ["kariyer", "terfi", "gelişim", "yol haritası", "career", "promotion", "growth", "roadmap", "staj", "intern", "açık pozisyon", "open positions", "iş başvurusu", "genç mühendis", "young engineer"]
    },
    {
        title: "Eğitim ve Gelişim",
        description: "Sürekli öğrenme ve profesyonel gelişim fırsatları.",
        titleEn: "Learning & Development",
        descriptionEn: "Continuous learning and professional development opportunities.",
        href: "/learning",
        category: "Kariyer",
        tags: ["eğitim", "öğrenme", "akademi", "gelişim", "learning", "education", "academy", "training", "sertifika", "certification", "upskill"]
    },
    {
        title: "Çalışma Kültürü",
        description: "Çalışma ortamımız, değerlerimiz ve ekip ruhu.",
        titleEn: "Work Culture",
        descriptionEn: "Our work environment, values and team spirit.",
        href: "/culture",
        category: "Kariyer",
        tags: ["kültür", "çalışma", "ortam", "değerler", "culture", "work", "environment", "values", "agile", "esnek çalışma", "remote", "hibrit", "ekip"]
    },
    {
        title: "Yerini Al (Sürdürülebilir Değer Programı)",
        description: "Eğitim, sürdürülebilirlik ve sosyal sorumluluk projelerimiz.",
        titleEn: "Take Your Place (Sustainable Value Program)",
        descriptionEn: "Education, sustainability and social responsibility projects.",
        href: "/social-contribution",
        category: "Kariyer",
        tags: ["sosyal", "sorumluluk", "sürdürülebilir", "toplumsal", "social", "responsibility", "sustainability", "burs", "scholarship", "topluluk", "community", "csr"]
    },

    // Kurumsal
    {
        title: "Hakkımızda",
        description: "BGTS'nin vizyonu, misyonu ve global varlığı.",
        titleEn: "About Us",
        descriptionEn: "BGTS's vision, mission and global presence.",
        href: "/about",
        category: "Kurumsal",
        tags: ["şirket", "biz kimiz", "hakkında", "vizyon", "about", "company", "who we are", "vision", "mission", "tarihçe", "history", "liderlik", "leadership"]
    },
    {
        title: "İletişim",
        description: "Ofis adresleri, telefon ve e-posta bilgileri.",
        titleEn: "Contact",
        descriptionEn: "Office addresses, phone and email information.",
        href: "/contact",
        category: "Kurumsal",
        tags: ["adres", "telefon", "mail", "ulaşım", "contact", "address", "phone", "email", "ofis", "office", "bize ulaşın"]
    },
    {
        title: "İş Ortakları",
        description: "Microsoft, AWS, ServiceNow gibi teknoloji ortaklıklarımız.",
        titleEn: "Partnerships",
        descriptionEn: "Technology partnerships with Microsoft, AWS, ServiceNow and more.",
        href: "/partnerships",
        category: "Kurumsal",
        tags: ["partner", "ortaklık", "microsoft", "aws", "partnerships", "servicenow", "atlassian", "qlik", "oracle", "teknoloji ortağı"]
    },
    {
        title: "Başarı Hikayeleri",
        description: "Gerçek projeler, gerçek sonuçlar ve ilham veren kariyerler.",
        titleEn: "Success Stories",
        descriptionEn: "Real projects, real results and inspiring careers.",
        href: "/resources/success-stories",
        category: "Kurumsal",
        tags: ["başarı", "hikaye", "proje", "referans", "success", "story", "case study", "project", "reference", "müşteri", "customer"]
    },
    {
        title: "İnfografikler",
        description: "Sektörel veriler ve trend analizleri.",
        titleEn: "Infographics",
        descriptionEn: "Industry data and trend analyses.",
        href: "/resources/infographics",
        category: "Kurumsal",
        tags: ["veri", "istatistik", "grafik", "infografik", "infographics", "data", "statistics", "chart", "trend", "analiz"]
    },
];
