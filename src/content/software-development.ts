import {
    Landmark,
    TrendingUp,
    Radio,
    ShieldAlert,
    Database,
    Cpu,
    RefreshCw,
    Layers,
    GitBranch,
    Lock
} from "lucide-react";

export const SOFTWARE_DEV_CONTENT = {
    hero: {
        title: "Yazılım Geliştirme",
        subtitle: "Finans, Telekom ve Kritik Altyapılar için Yüksek Performanslı Çözümler",
        badge: "Özel Yazılım Çözümleri",
        backgroundImage: "/images/headers/yazilim-gelistirme-ve-inovasyon.jpg"
    },
    sectoralDomains: [
        {
            id: "banking",
            title: "Bankacılık & Finansal Sistemler",
            subtitle: "Finansal Yazılım Çözümleri",
            icon: Landmark,
            image: "/images/services/bankacilik-finans-yazilim-cozumleri.png",
            description: "Bankacılık ve finans sektörüne özel regülasyonlara uyumlu, yüksek güvenlikli ve yüksek performanslı yazılım çözümleri geliştiriyoruz.",
            features: [
                {
                    title: "Kredi, Risk ve Tahsilat Süreçleri",
                    description: "Kredi risk izleme, sorunlu kredi yönetimi, tahsilat ve tasfiye süreçleri, müşteri sınıflama (1–5), yasal takip ve varlık yönetim şirketine devir süreçleri gibi uçtan uca finansal iş akışlarını kapsıyoruz."
                },
                {
                    title: "Mevduat, Teminat ve Dış Ticaret",
                    description: "Mevduat, teminat yönetimi, kampanya yönetimi ve dış ticaret ihracat işlemleri için ölçeklenebilir ve entegre sistemler sunuyoruz."
                }
            ]
        },
        {
            id: "trading",
            title: "E-Trading & Market Data & Düşük Gecikmeli Sistemler",
            subtitle: "Low-Latency Finansal Altyapılar",
            icon: TrendingUp,
            image: "/images/services/trading-market-data-sistemleri.png",
            description: "Finansal piyasalara yönelik düşük gecikmeli (low-latency), yüksek hacimli işlem altyapıları tasarlıyoruz.",
            features: [
                {
                    title: "Market Data & FIX Ekosistemi",
                    description: "FIX protokolü, pricing ve hedging altyapıları, gerçek zamanlı market-data işleme ve performans kritik sistemlerde uzmanlığa sahibiz."
                },
                {
                    title: "Yüksek Trafik ve Ölçeklenebilirlik",
                    description: "Yüksek trafik altında kararlılığını koruyan, ölçeklenebilir mimariler geliştiriyoruz."
                }
            ]
        },
        {
            id: "telecom",
            title: "Telekom & Dijital İletişim Platformları",
            subtitle: "Dijital Kanal Platformları",
            icon: Radio,
            image: "/images/services/telekom-dijital-iletisim.png",
            description: "Failover routing, yüksek trafik dayanıklılığı ve mobil-first mimariler ile kritik iletişim süreçlerini güvence altına alıyoruz.",
            features: [
                {
                    title: "Çok Kanallı İletişim Çözümleri",
                    description: "SMS, OTP, Viber, WhatsApp ve çok kanallı kampanya orkestrasyonu çözümleri sunuyoruz."
                },
                {
                    title: "Yüksek Trafik & Telco Entegrasyonları",
                    description: "Failover routing, yüksek trafik dayanıklılığı, telco charging/billing entegrasyonları ve mobil-first mimariler ile kritik iletişim süreçlerini güvence altına alıyoruz."
                }
            ]
        },
        {
            id: "fraud",
            title: "Fraud & Risk & AI Destekli Doğrulama Sistemleri",
            subtitle: "AI Destekli Güvenlik Sistemleri",
            icon: ShieldAlert,
            image: "/images/services/fraud-risk-ve-guvenlik.png",
            description: "Gerçek zamanlı doğrulama, anomali tespiti ve sahtekârlık önleme çözümleriyle finansal ve operasyonel riskleri minimize ediyoruz.",
            features: [
                {
                    title: "Fraud Detection & Risk Scoring",
                    description: "Fraud detection, risk scoring ve rule-engine tabanlı karar mekanizmalarını AI destekli modellerle birleştiriyoruz."
                },
                {
                    title: "Gerçek Zamanlı Doğrulama",
                    description: "Gerçek zamanlı doğrulama, anomali tespiti ve sahtekârlık önleme çözümleriyle finansal ve operasyonel riskleri minimize ediyoruz."
                }
            ]
        }
    ],
    technicalDomains: [
        {
            id: "bigdata",
            title: "Büyük Veri & Gerçek Zamanlı Veri İşleme",
            subtitle: "Gerçek Zamanlı Veri İşleme",
            icon: Database,
            image: "/images/services/buyuk-veri-analitigi.png",
            description: "Büyük hacimli verileri gerçek zamanlı işleyen, ölçeklenebilir ve dayanıklı veri altyapıları kuruyoruz.",
            features: [
                {
                    title: "Streaming & Dağıtık Veri Mimarileri",
                    description: "Kafka, Spark ve streaming tabanlı mimariler ile büyük hacimli verileri gerçek zamanlı işleyen platformlar kuruyoruz."
                },
                {
                    title: "Event-Driven & High Availability",
                    description: "Dağıtık, event-driven ve high-availability mimariler sayesinde ölçeklenebilir ve dayanıklı veri altyapıları oluşturuyoruz."
                }
            ]
        },
        {
            id: "ai",
            title: "Yapay Zekâ & AI-First Mimari Çözümleri",
            subtitle: "AI-First Mimari Çözümleri",
            icon: Cpu,
            image: "/images/services/yapay-zeka-cozumleri.png",
            description: "Kurumsal sistemlerinize entegre, güvenli ve sürdürülebilir yapay zekâ çözümleri sunuyoruz.",
            features: [
                {
                    title: "AI-First Yaklaşım",
                    description: "AI-first yaklaşımıyla RAG sistemleri, LLM entegrasyonları, embedding ve agent tabanlı yapılar geliştiriyoruz."
                },
                {
                    title: "Kurumsal AI Entegrasyonları",
                    description: "Kurumsal sistemlerinize entegre, güvenli ve sürdürülebilir yapay zekâ çözümleri sunuyoruz."
                }
            ]
        },
        {
            id: "modernization",
            title: "Yazılım Modernizasyonu & Mikroservis Dönüşümü",
            subtitle: "Mikroservis Dönüşümü",
            icon: RefreshCw,
            image: "/images/services/yazilim-modernizasyonu.png",
            description: "Legacy sistemlerinizi modern mimarilere taşıyor, performans ve maliyet optimizasyonu sağlıyoruz.",
            features: [
                {
                    title: "Legacy Dönüşüm",
                    description: "Legacy sistemlerinizi modern mimarilere taşıyor, mikroservis dönüşüm projelerini uçtan uca yönetiyoruz."
                },
                {
                    title: "Performans & Ölçeklenebilirlik",
                    description: "Performans optimizasyonu, sistem modernizasyonu, ölçeklenebilirlik ve maliyet optimizasyonu konularında danışmanlık ve uygulama desteği sağlıyoruz."
                }
            ]
        }
    ],
    capabilities: {
        title: "Yazılım Geliştirme Hizmetleri",
        subtitle: "Modern Yazılım Mimarileri, DevOps ve Güvenlik Odaklı Yaklaşımımız",
        items: [
            {
                icon: Layers,
                title: "Modern Yazılım Mimarileri",
                features: [
                    {
                        title: "Mimari Yaklaşım",
                        text: "DDD, API-first, mikroservis ve event-driven mimarilerle ölçeklenebilir ve sürdürülebilir sistemler tasarlıyoruz."
                    },
                    {
                        title: "Kalite & Sürdürülebilirlik",
                        text: "Clean Architecture ve SOLID prensipleriyle uzun ömürlü yazılım çözümleri üretiyoruz."
                    }
                ]
            },
            {
                icon: GitBranch,
                title: "DevOps Uyumlu Yazılım Geliştirme",
                features: [
                    {
                        title: "CI/CD & Deployment",
                        text: "CI/CD pipeline’ları, test otomasyonu, containerized deployment (Docker, Kubernetes) ve observability çözümleri ile yazılım yaşam döngüsünü uçtan uca yönetiyoruz."
                    }
                ]
            },
            {
                icon: Lock,
                title: "Güvenlik & Regülasyon Uyumlu Geliştirme",
                features: [
                    {
                        title: "Uçtan Uca Güvenlik",
                        text: "OWASP, API security, IAM, rate-limit, HSM entegrasyonu, zaman damgası ve e-imza çözümleri ile güvenliği yazılımın merkezine alıyoruz."
                    }
                ]
            }
        ]
    }
};
