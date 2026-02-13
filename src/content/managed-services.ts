import {
    Server, Activity, ShieldCheck, Clock, CheckCircle2,
    Cloud, Database, Globe, Rocket, Terminal,
    BarChart3, Users, Zap, Search, Layout, Lock,
    Bot, Smartphone, Video, FileText, UserCheck,
    GraduationCap, LayoutDashboard, Layers, AppWindow,
    Anchor, Map, Star, Monitor, HeartHandshake, LineChart,
    Cpu, RefreshCw, LayoutGrid, ShieldAlert, GitBranch, Infinity, Code2
} from "lucide-react";

export const MANAGED_SERVICES_CONTENT = {
    hero: {
        title: "MSP & Yönetilen Hizmetler",
        subtitle: "Uçtan uca altyapı yönetimi, 7/24 izleme ve bulut danışmanlığı ile operasyonel mükemmelliği yakalayın.",
        badge: "Managed Services Provider",
        backgroundImage: "/images/headers/yonetilen-bulut-hizmetleri.jpg"
    },
    // MSP Services (Individual Verticals)
    sectoralDomains: [
        {
            id: "data-center",
            title: "Veri Merkezi Yönetimi",
            subtitle: "Altyapı & Operasyon",
            description: "30 yıllık mühendislik deneyimiyle, kritik veri merkezi altyapılarınızın (Sunucu, Depolama, Sanallaştırma, Yedekleme) uçtan uca yönetimini sağlıyoruz. Tier-3 standartlarında işletim prosedürleri, proaktif kapasite planlama ve donanım yaşam döngüsü yönetimiyle, sistemlerinizin %99.99 erişilebilirlikte çalışmasını garanti ediyoruz. Sadece ışıkları açık tutmuyor; performans darboğazlarını oluşmadan tespit ediyor ve modernize ediyoruz.",
            image: "/images/headers/msp/Veri-Merkezi.png",
            icon: Server,
            features: [
                {
                    title: "Proaktif İzleme & L2/L3 Müdahale",
                    description: "7/24 kesintisiz monitoring ile anomali tespiti, olay yönetimi ve kök sebep analizleri (RCA) ile kalıcı çözümler."
                },
                {
                    title: "Kapasite & Performans Yönetimi",
                    description: "Darboğaz analizleri, kaynak kullanım trendleri ve yatırım planlaması için stratejik raporlama."
                },
                {
                    title: "Yedekleme & İş Sürekliliği",
                    description: "Düzenli restore testleri, off-site yedekleme stratejileri ve felaket kurtarma (DR) senaryolarının yönetimi."
                }
            ]
        },
        {
            id: "monitoring",
            title: "7/24 İzleme & NOC",
            subtitle: "Gözlem & Analiz",
            description: "BGTS NOC (Network Operations Center), altyapınızı sadece 'up/down' olarak değil, iş servisleri ve kullanıcı deneyimi perspektifinden izler. Zabbix, Prometheus, Grafana ve ELK Stack gibi modern araçlarla oluşturduğumuz 'Single Pane of Glass' (Tek Ekran) yapısı sayesinde, binlerce metrik anlık olarak analiz edilir. Yapay zeka destekli olay korelasyonu ile gürültüyü (alert fatigue) azaltır, gerçek sorunlara odaklanırız.",
            image: "/images/headers/msp/Monitoring.png",
            icon: Activity,
            features: [
                {
                    title: "Servis Ağacı (Service Mapping)",
                    description: "Kritik iş süreçlerinin (Örn: Fatura Ödeme, E-Ticaret Sepet) altyapı bileşenleriyle haritalanması ve etki analizi."
                },
                {
                    title: "Akıllı Eskalasyon & Bildirim",
                    description: "Vardiya planlarına entegre, SMS/Call/Email/Teams üzerinden doğru uzmana anında bildirim ve eskalasyon yönetimi."
                },
                {
                    title: "Otonom İyileştirme (Self-Healing)",
                    description: "Tanımlı senaryolarda (servis restart, disk temizliği vb.) otomatik aksiyon alan botlar ile insan müdahalesiz çözüm."
                }
            ]
        },
        {
            id: "desktop-support",
            title: "Son Kullanıcı ve Cihaz Yönetimi",
            subtitle: "Workplace Services",
            description: "Çalışanlarınızın üretkenliğini maksimize eden, sorunsuz bir dijital çalışma ortamı sunuyoruz. Geleneksel 'Helpdesk' anlayışının ötesinde; VIP destek, varlık yönetimi, imaj standardizasyonu ve uzaktan güvenli çalışma çözümleri sağlıyoruz. Kullanıcılarınız ofiste, evde veya sahada olsun; cihazlarının güvenliği, güncelliği ve performansı bizim sorumluluğumuzda.",
            image: "/images/headers/msp/Desktop-Support.png",
            icon: Monitor,
            features: [
                {
                    title: "Süreç & Envanter Danışmanlığı",
                    description: "IT varlıklarının (Asset) satın alımdan emekliliğe kadar takibi, maliyet optimizasyonu ve süreç iyileştirme."
                },
                {
                    title: "Modern Cihaz Yönetimi (UEM)",
                    description: "SCCM, Intune ve Jamf ile işletim sistemi dağıtımı, uygulama paketleme ve güvenlik politikalarının merkezi yönetimi."
                },
                {
                    title: "Gelişmiş Kullanıcı Desteği",
                    description: "SLA garantili çağrı karşılama, uzaktan bağlantı ile hızlı çözüm ve yerinde destek hizmetlerinin hibrit yönetimi."
                }
            ]
        },
        {
            id: "itsm",
            title: "ITSM as a Service",
            subtitle: "Süreç Yönetimi",
            description: "BT operasyonlarınızı kaostan kurtarıp, ölçülebilir ve denetlenebilir bir hizmet yapısına dönüştürüyoruz. ITIL v4 standartlarında sunduğumuz Hizmet Yönetimi (ITSM) çözümleriyle; talep, olay, problem ve değişim süreçlerinizi dijitalleştiriyoruz. Service Desk ekiplerimiz, sadece çağrı karşılamakla kalmaz, kullanıcı memnuniyetini ve çözüm kalitesini artıran birer çözüm ortağı gibi çalışır.",
            image: "/images/headers/msp/ITSM.png",
            icon: ClipboardList,
            features: [
                {
                    title: "Service Desk & SPOC",
                    description: "Kullanıcılar için Tek İletişim Noktası (SPOC). Çağrı, e-posta ve portal üzerinden gelen taleplerin merkezi yönetimi."
                },
                {
                    title: "Incident & Problem Management",
                    description: "Tekrarlayan sorunların kök neden analizleri (RCA) ile kalıcı olarak giderilmesi ve 'Known Error' veritabanı oluşturulması."
                },
                {
                    title: "ITIL Süreç Danışmanlığı",
                    description: "Mevcut süreçlerin olgunluk analizi, SLA/OLA tanımları, hizmet kataloğu tasarımı ve sürekli hizmet iyileştirme (CSI)."
                }
            ]
        },
        {
            id: "sccm",
            title: "SCCM & SRE Hizmetleri",
            subtitle: "Otomasyon & Güvenlik",
            description: "Binlerce istemci ve sunucudan oluşan yapınızı manuel yönetmek imkansızdır. Microsoft Endpoint Configuration Manager (MECM/SCCM) ve modern SRE (Site Reliability Engineering) disiplinleriyle; yama yönetimi, yazılım dağıtımı ve uyumluluk denetimlerini tam otomasyona bağlıyoruz. Güvenlik açıklarını (Vulnerability) siber saldırganlardan önce kapatıyor, sistemlerinizi 'Sıfır Güven' (Zero Trust) mimarisine hazırlıyoruz.",
            image: "/images/headers/msp/SCCM-SRE.png",
            icon: RefreshCw,
            features: [
                {
                    title: "Gelişmiş Zafiyet Yönetimi",
                    description: "İşletim sistemi ve 3. parti uygulamaların (Adobe, Chrome, Java vb.) düzenli taranması ve güvenlik yamalarının otomatik geçilmesi."
                },
                {
                    title: "Compliance & Uyumluluk",
                    description: "KVKK, ISO 27001 ve şirket içi güvenlik politikalarına (GPO/Baseline) uyumluluğun sürekli denetlenmesi ve raporlanması."
                },
                {
                    title: "Lisans & Envanter Optimizasyonu",
                    description: "Yazılım kullanım istatistikleri (Metering) ile gereksiz lisans maliyetlerinin önlenmesi ve detaylı donanım envanteri."
                }
            ]
        },
        {
            id: "devops",
            title: "DevOps as a Service",
            subtitle: "Yazılım Yaşam Döngüsü",
            description: "Yazılım geliştirme hızınızı artırırken, operasyonel kararlılıktan ödün vermeyin. CI/CD pipeline kurulumu, konteyner orkestrasyonu (Kubernetes/OpenShift) ve 'Infrastructure as Code' (IaC) yaklaşımlarıyla; kodun commit anından production ortamına kadar olan yolculuğunu otomatize ediyoruz. DevSecOps pratikleriyle, güvenlik taramalarını geliştirme sürecinin doğal bir parçası haline getiriyoruz.",
            image: "/images/headers/msp/DevOps-Altyapi.png",
            icon: GitBranch,
            features: [
                {
                    title: "CI/CD & Release Otomasyonu",
                    description: "Jenkins, Azure DevOps veya GitLab üzerinde; test, build ve deployment süreçlerinin standardizasyonu ve otomatikleştirilmesi."
                },
                {
                    title: "Konteyner & Kubernetes Yönetimi",
                    description: "K8s kümelerinin kurulumu, ölçeklendirilmesi, güvenliği ve Service Mesh (Istio/Linkerd) ile mikroservis iletişimi."
                },
                {
                    title: "DevSecOps & Code Quality",
                    description: "SonarQube ile statik kod analizi, konteyner imaj taramaları ve güvenlik testlerinin pipeline'a entegrasyonu."
                }
            ]
        }
    ],
    // Managed Services (High Level Themes)
    technicalDomains: [
        {
            id: "cloud-management",
            title: "Çoklu Bulut Yönetimi",
            subtitle: "Cloud Services",
            description: "Bulutun esnekliğini, kurumsal disiplinle birleştiriyoruz. AWS, Azure ve Google Cloud platformlarında; mimari tasarım, migrasyon ve 7/24 yönetim hizmetleri sunuyoruz. Cloud Adoption Framework (CAF) prensipleriyle; maliyetlerinizi optimize ediyor (FinOps), güvenlik duruşunuzu güçlendiriyor (SecOps) ve operasyonel yükü ekibinizin üzerinden alıyoruz.",
            image: "/images/headers/yonetilen-bulut-hizmetleri.jpg",
            icon: Cloud,
            features: [
                {
                    title: "Stratejik Danışmanlık & Migrasyon",
                    description: "Mevcut iş yüklerinin analizi, 6R stratejisiyle (Rehost, Refactor vb.) buluta taşıma ve hibrit mimari kurguları."
                },
                {
                    title: "FinOps & Maliyet Optimizasyonu",
                    description: "Atıl kaynakların tespiti, Reserved Instance/Savings Plan yönetimi ve bütçe sapmalarının anlık takibi."
                },
                {
                    title: "Security & Compliance (CSPM)",
                    description: "Bulut ortamlarının CIS Benchmark ve GDPR/KVKK standartlarına göre sürekli taranması ve güvenlik sıkılaştırma."
                }
            ]
        },
        {
            id: "microsoft-365",
            title: "Microsoft 365 & Modern Work",
            subtitle: "Produktivite",
            description: "Çalışanlarınıza zaman ve mekan bağımsız, güvenli ve verimli bir çalışma deneyimi sunun. Microsoft 365 ekosistemini (Teams, SharePoint, Exchange) en verimli şekilde yönetiyoruz. Copilot entegrasyonlarıyla yapay zekayı iş süreçlerinize katıyor, Intune ve Entra ID (Azure AD) ile kimlik ve cihaz güvenliğinizi 'Sıfır Güven' prensibiyle sağlıyoruz.",
            image: "/images/headers/msp/Desktop-Support.png",
            icon: AppWindow,
            features: [
                {
                    title: "M365 Copilot & AI Entegrasyonu",
                    description: "Ofis uygulamalarında üretken yapay zeka kullanımı, prompt mühendisliği ve iş akışı otomasyonları."
                },
                {
                    title: "Intune & Uç Nokta Güvenliği",
                    description: "Mobil cihaz (MDM) ve uygulama (MAM) yönetimi, koşullu erişim politikaları ve veri sızıntısı önleme (DLP)."
                },
                {
                    title: "Identity & Access Management",
                    description: "MFA, SSO ve şifresiz oturum açma (Passwordless) kurgularıyla kimlik güvenliğinin modernizasyonu."
                }
            ]
        }
    ],
    capabilities: {
        title: "Neden BGTS MSP?",
        subtitle: "Sadece bir hizmet sağlayıcı değil, operasyonel mükemmellik ortağınızız.",
        items: [
            {
                title: "Uzman Kadro",
                icon: Users,
                features: [
                    { title: "210+ Uzman", text: "Çoklu dil desteği sunan merkezi MSP ekibi." },
                    { title: "Sertifikalı Mühendisler", text: "Microsoft, AWS, Google Cloud ve ITIL sertifikalı uzmanlar." }
                ]
            },
            {
                title: "Yüksek Performans",
                icon: Zap,
                features: [
                    { title: "%90+ L1 Çözüm", text: "Olayların büyük çoğunluğunu ilk seviyede çözüyoruz." },
                    { title: "Aynı Gün Çözüm", text: "%98.6 oranında sorunları yarına bırakmıyoruz." }
                ]
            },
            {
                title: "Teknoloji Odaklı",
                icon: Cpu,
                features: [
                    { title: "AI Destekli Operasyon", text: "Otomatik iyileştirme ve anomali tespiti." },
                    { title: "Şeffaf Raporlama", text: "PowerBI ile anlık ve detaylı performans takibi." }
                ]
            }
        ]
    }
};

// Start of Selection
import { ClipboardList } from "lucide-react";
// End of Selection
