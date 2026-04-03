import {
    Server, Activity, ShieldCheck, Database, LayoutTemplate,
    Users, Settings, Lock, Cloud, AppWindow,
    Monitor, LineChart, Cpu, RefreshCw, LayoutGrid, ShieldAlert, GitBranch, Infinity
} from "lucide-react";

export const MANAGED_SERVICES_CONTENT = {
    hero: {
        title: "Yönetilen Hizmetler ve Danışmanlık",
        subtitle: "BT Operasyonlarınızı Bize Devredin. Siz İşinize Odaklanın. 400+ mühendis, 30 yılı aşkın sektör deneyimi ve 5.000+ sunucu ölçeğindeki operasyon kapasitesiyle uçtan uca yönetiyoruz.",
        tag: "BGTS Yönetilen Hizmetler",
        backgroundImage: "/images/headers/yonetilen-bulut-hizmetleri.jpg",
    },

    pillars: [
        {
            id: "p1",
            title: "MSP & Yönetilen Hizmetler",
            overview: {
                title: "BT Operasyonlarınızı Bize Devredin. Siz İşinize Odaklanın.",
                description: "400+ mühendis, 30 yılı aşkın sektör deneyimi ve 5.000+ sunucu ölçeğindeki operasyon kapasitesiyle veri merkezi platformlarından son kullanıcı desteğine kadar tüm BT operasyonlarınızı İzleme & Müdahale, Geliştirme & Katma Değer ve Yönetim & Analitik katmanlarında 7/24 yönetiyoruz.",
                stats: [
                    { value: "400+", label: "Mühendislik Ekibi", sub: "Mühendislik odaklı kadro" },
                    { value: "210", label: "7/24 NOC & FLR", sub: "Kesintisiz operasyon ekibi" },
                    { value: "55+", label: "Üretici Yetkinliği", sub: "Eskalasyon mühendisliği" },
                    { value: "30+", label: "Yıl Tecrübe", sub: "BilgeAdam ekosistemi" },
                    { value: "%90+", label: "İlk Katmanda Çözüm", sub: "FLR — veri merkezi olayları" },
                    { value: "%85+", label: "İlk Gün Çözüm", sub: "Same-day resolution" },
                    { value: "<%1.3", label: "Re-bound Oranı", sub: "Tekrarlayan çağrı" },
                    { value: "50+", label: "ITIL Sertifikalı", sub: "Danışman & mühendis" }
                ],
                model: {
                    title: "MSP Hizmet Modeli",
                    description: "BGTS Yönetilen Hizmetler modeli; teknik operasyonları dışarıdan yönetmekle sınırlı kalmaz. Altyapınızı tanır, süreçlerinizi geliştirir ve kurumunuzun büyümesine paralel ölçekleniriz. İlişki başlamadan önce alarm kalitesi, olay müdahalesi, otomasyon olgunluğu, gözlemlenebilirlik kapsamı ve SRE hazırlığını yapılandırılmış bir değerlendirmeyle analiz eder; bulguları ekibinizin de yönetimin de kullanabileceği somut bir rapor olarak sunarız. Sabit ve değişken maliyetleri öngörülebilir bir hizmet modeline dönüştürürken işe alım, eğitim ve elde tutma riskini de üstleniriz. Yalnızca arızayı değil; değişiklik ve talep süreçlerini de aynı olgunlukla, müşteriye özel SLA taahhütleri ve düzenli raporlarla şeffaf biçimde yönetiriz."
                },
                layersTitle: "Üst Seviye Hizmet Kapsamı — 3 Katmanlı MSP Modeli",
                layers: [
                    { title: "İzleme & Müdahale", description: "L0 Monitoring & Observability — Servis bazlı izleme, AIOps alarm korelasyonu, %62 alarm optimizasyonu. L1 İlk Katman Çözüm — 210 kişi, 7/24, %90+ FLR, %85+ ilk gün çözüm, <%1.3 re-bound. L2–L3 Eskalasyon — 55 üretici yetkinliği, kök sebep analizi, majör olay yönetimi." },
                    { title: "Geliştirme & Katma Değer", description: "Yapay Zeka — Ticket analizi, auto-remediation, KB üretimi, çağrı merkezi botu. Teknoloji Danışmanlığı — Blueprint, sağlık taramaları, otomasyon, patch & vulnerability yönetimi. ITSM/ITIL — 50+ ITIL sertifikalı danışman, ServiceNow, Jira ve BMC yetkinliği." },
                    { title: "Yönetim & Analitik", description: "Customer Success Management — Tek iletişim noktası, SLA/OLA uyum, hizmet sağlık skoru. Operasyonel Zeka — Dedike analitik departmanı, anomali tespiti, yük analizi, ham veriden operasyonel farkındalık. Stratejik Performans — C-Level raporlama, hizmet sürekliliği ve iş değeri katkı analizi." }
                ],
                komTitle: "Kurumsal Operasyon Merkezi",
                kom: [
                    { title: "Destek Katmanları", items: ["Dispatcher", "Destek Mühendisi", "Eskalasyon Mühendisi"] },
                    { title: "Katma Değerli Hizmetler", items: ["Otomasyon Mühendisi", "Optimizasyon Mühendisi", "Teknoloji Uzmanları"] },
                    { title: "Hizmet Yönetimi", items: ["Takım Lideri", "Hizmet Sunum Yöneticisi", "SLA Yöneticisi"] },
                    { title: "Servis Organizasyonu Tasarımı", items: ["ITSM Aracı Uzmanı", "ITIL Süreç Uzmanı"] }
                ],
                komTags: ["Çağrı Kalitesi Optimizasyonu", "Çağrı İzolasyonu", "Knowledge Base Üretimi", "Kontrat KPI Yönetimi", "Kriz Yönetimi", "Performans Yönetimi"],
                managementTitle: "Temel Yönetim Alanları",
                management: [
                    { title: "İşletim Sistemi Yönetimi", description: "Windows Server ve Linux sistemlerin kurulum, konfigürasyon ve yaşam döngüsü yönetimi; yama uyumluluğu, politika denetimi ve sürüm geçişleri dahil uçtan uca yönetilir." },
                    { title: "Mesajlaşma Yönetimi", description: "Microsoft Exchange, Skype for Business ve benzeri messaging platformlarının proaktif izleme, kapasite yönetimi ve servis sağlığı operasyonları; mail akışı ve kuyruk takibi ile sürekliliği güvence altına alıyoruz." },
                    { title: "Veritabanı Yönetimi", description: "Oracle, MSSQL ve PostgreSQL veritabanlarının performans izleme, yedekleme ve erişim yönetimi; uzman DBA ekibi ile 7/24 operasyonel destek sağlanır." },
                    { title: "Orta Katman Yönetimi", description: "Uygulama sunucuları, web servisleri ve API gateway katmanlarının konfigürasyon, güncelleme ve servis izleme operasyonları; iş uygulamalarının kesintisiz çalışması sağlanır." },
                    { title: "Sanallaştırma Yönetimi", description: "VMware vSphere, Hyper-V ve vROps platformlarında sanal makine yaşam döngüsü, kaynak havuzu optimizasyonu ve kapasite planlaması; fiziksel altyapının maksimum verimle işletilmesi sağlanır." }
                ],
                analyticsTitle: "Yönetim & Analitik",
                analytics: [
                    { title: "Customer Success Management", items: ["Tek iletişim noktası, tek özet", "SLA / OLA uyum ve hizmet kalitesi", "Hizmet sağlık skoru & risk göstergeleri", "Değer gerçekleşimi & benimseme düzeyi"] },
                    { title: "Operasyonel Zeka", items: ["Dedike analitik departmanı", "Yük analizi & standardizasyon", "Anomali tespiti & sapma analizi", "Ham veriden operasyonel farkındalık"] },
                    { title: "Stratejik Performans", items: ["C-Level hizmet seviyesi & deneyim skoru", "Hizmet sürekliliği & kesinti etki analizi", "Sürekli iyileştirme & önleyici aksiyon oranı", "Hizmetin iş değerine katkısı"] },
                    { title: "Proaktif Öngörüler", items: ["Talep & yük trend analizleri", "Operasyonel verimlilik raporlaması", "Sektör standartları ile kıyaslama", "İyileştirme fırsatları & aksiyon planı"] }
                ]
            },
            services: [
                {
                    id: "veri-merkezi",
                    title: "Veri Merkezi Yönetimi",
                    subtitle: "Destek Hizmeti",
                    description: "BGTS, kritik veri merkezi altyapılarınızda yer alan sunucu, depolama, sanallaştırma ve yedekleme sistemlerini uçtan uca yönetir. Proaktif izleme, kapasite analizi ve yapay zeka destekli operasyon yaklaşımı sayesinde oluşabilecek sorunlar erken aşamada tespit edilir, çağrılar etkin şekilde sınıflandırılır ve doğru eskalasyon süreçleriyle yönetilir.\n\nOperasyonel verimliliği artırmaya yönelik iyileştirici aksiyonların planlanması ve otomasyon süreçlerinin geliştirilmesi de hizmet kapsamına dahildir. Bu sayede kesintisiz hizmet sürekliliği sağlanırken sistem performansı ve operasyonel olgunluk sürekli artırılır.",
                    image: "/images/iso/server-room.jpg",
                    icon: Server,
                    tags: ["Çağrı Yönetimi", "Triaj", "Eskalasyon", "SLA Takibi", "7/24 Destek", "Raporlama", "ITSM", "Olay Yönetimi"],
                    features: [
                        {
                            title: "Çağrı Karşılama & Triaj",
                            description: "Veri merkezi kaynaklı tüm çağrıları 7/24 karşılıyor; öncelik, kategori ve etki alanını hızla belirleyerek doğru ekibe yönlendiriyoruz."
                        },
                        {
                            title: "Çözüm Takibi & Eskalasyon",
                            description: "Açık çağrıları SLA kapsamında izliyor; gerektiğinde ilgili tarafları devreye alıyor ve süreç boyunca müşteri bilgilendirmesini kesintisiz sürdürüyoruz."
                        },
                        {
                            title: "Raporlama & Trend Analizi",
                            description: "Çözüm süreleri, tekrarlayan sorunlar ve yoğunluk trendlerini düzenli raporlarla müşteriye sunuyor; operasyonel iyileştirme fırsatlarını görünür kılıyoruz."
                        }
                    ]
                },
                {
                    id: "noc",
                    title: "7/24 İzleme & NOC",
                    subtitle: "Yönetilen Hizmet",
                    description: "BGTS Network Operations Center (NOC), Zabbix, Prometheus, Grafana ve ELK Stack gibi modern izleme teknolojileriyle oluşturulan merkezi bir platforma dayanır. Tüm altyapı verileri tek ekranda (Single Pane of Glass) analiz edilirken yapay zeka destekli alarm analizi, operasyon ekiplerinin gerçek sorunlara odaklanmasını ve gereksiz alarm gürültüsünü minimize etmesini sağlar.\n\nOtomatik runbook'lar ve önleyici aksiyonlar sayesinde pek çok sorun alarm oluşmadan ya da ilk bildirimde otomatik olarak çözülür; manuel müdahale ihtiyacı sürekli azaltılır.",
                    image: "/images/iso/monitoring.jpg",
                    icon: Activity,
                    tags: ["Zabbix", "OpenTelemetry", "AIOps", "Alarm Konsolidasyon", "Servis Ağacı", "Self-Healing", "Sentetik İzleme", "L0/L1/L2/L3", "SLO Burn Rate", "7/24 NOC"],
                    features: [
                        {
                            title: "Alarm Konsolidasyon & Servis Ağaçları",
                            description: "Zabbix, Datadog, Grafana, CloudWatch, Prometheus, OpenTelemetry ve SNMP dahil tüm izleme kaynaklarını ortak bir şema altında normalize ediyoruz. Servis ağacı modeli sayesinde alarmlar doğrudan iş bağlamına oturtulur."
                        },
                        {
                            title: "AI Destekli Alarm Optimizasyonu",
                            description: "Dinamik eşik öğrenmesiyle alarmlar kurulum sırasında sabit bırakılan bir rakamı değil, servisin normal davranışından sapmaları ölçer. %63'e varan alarm hacmi düşüşü."
                        },
                        {
                            title: "Self-Healing Otomasyon",
                            description: "Tekrarlayan arıza kalıplarında otomatik kurtarma gerçekleşir. Başarılı çözümde ticket açılır ve anında kapanır; başarısız olursa mühendis devralır."
                        },
                        {
                            title: "Sentetik İzleme & NOC Organizasyonu",
                            description: "Kritik kullanıcı yolculukları API zinciri düzeyinde dışarıdan test edilir; CDN veya bölgesel sorunlar kullanıcı şikayetinden önce yakalanır."
                        }
                    ]
                },
                {
                    id: "euc",
                    title: "Son Kullanıcı & Cihaz Yönetimi",
                    subtitle: "Yönetilen Hizmet",
                    description: "Her işletimsel sorun, kullanıcılarınızın verimliliğini düşürür ve IT ekibinize operasyonel yük bindirir. BGTS, geleneksel helpdesk yaklaşımının ötesine geçerek kullanıcı deneyimini merkeze alan bir destek modeli sunar. Çalışanlarınız ofiste, evde veya sahada olsun; cihazlar merkezi olarak izlenir, yönetilir ve desteklenir.",
                    image: "/images/iso/helpdesk.jpg",
                    icon: Users,
                    tags: ["L1 / L2 / L3", "VIP Destek", "MDM", "Remote Support", "ITSM", "SLA"],
                    features: [
                        {
                            title: "L1–L3 Destek & VIP Hizmet",
                            description: "%85 ilk aramada çözüm oranı; VIP kullanıcılara özel izolasyon, loglama ve değişiklik yönetimi süreçleri."
                        },
                        {
                            title: "Merkezi Cihaz & Endpoint Yönetimi",
                            description: "Dizüstü, masaüstü ve mobil cihazların yaşam döngüsünü uçtan uca yönetiyor; standartlaşma ve güvenlik uyumluluğunu sağlıyoruz."
                        },
                        {
                            title: "Uzaktan Destek & Saha Hizmetleri",
                            description: "Ofis, ev veya saha bağımsız uzaktan müdahale kapasitesi; gerektiğinde yerinde teknik destek ekibi."
                        }
                    ]
                },
                {
                    id: "sccm",
                    title: "SCCM / Endpoint Yönetimi",
                    subtitle: "Yönetilen Hizmet",
                    description: "Güncelleme uyumluluğu düşük cihazlar, yazılım dağıtım sorunları ve yetersiz patch yönetimi güvenliği riske atar. BGTS, Microsoft Endpoint Configuration Manager (SCCM) ve Intune altyapınızın kurulumu, yönetimi ve sürekli optimizasyonunu uçtan uca hizmet modeliyle sunar.",
                    image: "/images/iso/endpoint.jpg",
                    icon: Monitor,
                    tags: ["SCCM / MECM", "Microsoft Intune", "Patch Management", "Software Deployment", "OS Image", "Compliance", "Envanter Yönetimi", "Windows Server Update"],
                    features: [
                        {
                            title: "Sunucu Yama Uyumluluğu & Dashboard",
                            description: "Yönetilen sunucuların güncelleme oranını gerçek zamanlı izliyor; Active Directory, Exchange ve SQL gibi kritik servisler için ayrı metrikler sunuyoruz."
                        },
                        {
                            title: "Güncelleme Sınıflandırma",
                            description: "Security ve OS güncellemelerini sınıflandırarak önceliklendirir; eksik yamaları otomatik dağıtım süreçleriyle en kısa sürede kapatırız."
                        },
                        {
                            title: "Yazılım Dağıtımı & OS İmaj Yönetimi",
                            description: "Standart imajlar ve task sequence'larla yeni kurulum süresini dakikalara indiririz."
                        }
                    ]
                },
                {
                    id: "itsm",
                    title: "ITSM as a Service",
                    subtitle: "Yönetilen Hizmet",
                    description: "ITSM araçları yetersiz yapılandırıldığında SLA'lar izlenemez olur. BGTS, 50+ ITIL sertifikalı danışmanıyla ServiceNow, Jira Service Manager ve BMC platformlarında ITIL tabanlı hizmet organizasyonunuzu tasarlar, iyileştirir ve olgunlaştırır.",
                    image: "/images/iso/itsm.jpg",
                    icon: LayoutGrid,
                    tags: ["ITIL v4", "ServiceNow", "Jira Service", "BMC", "50+ ITIL Sertifikalı", "SLA / OLA", "Servis Kataloğu", "CMDB", "Süreç İyileştirme"],
                    features: [
                        {
                            title: "Olay & Sorun Yönetimi",
                            description: "SLA'ya bağlı olay yönetimi; yapay zeka destekli kök neden analizi ile tekrarlayan sorunları kalıcı olarak ortadan kaldırıyoruz."
                        },
                        {
                            title: "SLA / OLA Modelleme & Servis Kataloğu",
                            description: "İhtiyaçlarınıza göre hizmet seviyelerini tasarlıyor ve servis ağaçları ile IT yönetimini şeffaflaştırıyoruz."
                        },
                        {
                            title: "CMDB & Süreç İyileştirme",
                            description: "Konfigürasyon yönetim veritabanı (CMDB) ile IT varlıklarını güncel tutuyoruz."
                        }
                    ]
                },
                {
                    id: "devops",
                    title: "DevOps as a Service",
                    subtitle: "Yönetilen Hizmet",
                    description: "Yazılım geliştirme ekipleri hızlı teslimat yaparken operasyon ekibi üzerindeki baskı artar. BGTS DevOps hizmeti, geliştirmeden production'a uzanan tüm yazılım teslimat zincirini otomasyon odaklı bir yapıya dönüştürür.",
                    image: "/images/iso/devops.jpg",
                    icon: GitBranch,
                    tags: ["Jenkins", "GitLab CI", "GitHub Actions", "Terraform", "Ansible", "Docker", "Kubernetes", "Infrastructure as Code", "DevSecOps"],
                    features: [
                        {
                            title: "CI/CD Pipeline Yönetimi",
                            description: "Otomatik derleme, test ve deploy süreçleriyle yazılım teslimat hızını ve tutarlılığını artırıyoruz."
                        },
                        {
                            title: "Infrastructure as Code",
                            description: "Terraform ve Ansible ile altyapıyı kod olarak yönetiyor; her ortamın tutarlı bir şekilde oluşturulmasını sağlıyoruz."
                        },
                        {
                            title: "Container & Kubernetes",
                            description: "Docker ve Kubernetes cluster yönetimiyle uygulamaların ölçeklenebilir ve taşınabilir biçimde çalışmasını sağlıyoruz."
                        }
                    ]
                },
                {
                    id: "sre",
                    title: "SRE as a Service",
                    subtitle: "Yönetilen Hizmet",
                    description: "Güvenilirlik, sonradan eklenen bir özellik değil baştan yerleştirilen bir çalışma felsefesidir. SLI/SLO/hata bütçesi tanımından kaos mühendisliğine, toil eliminasyonundan on-call yük optimizasyonuna kadar SRE disiplinini kurumunuza aktif bir mühendislik pratiği olarak yerleştiriyoruz.",
                    image: "/images/iso/sre.jpg",
                    icon: Infinity,
                    tags: ["SLO / SLI", "Hata Bütçesi", "Kaos Mühendisliği", "GameDay", "Toil Azaltma", "Kapasite Planlama", "Postmortem", "On-Call Optimizasyonu", "Observability"],
                    features: [
                        {
                            title: "Güvenilirlik Tanımı — SLI / SLO",
                            description: "Alarmlar keyfi metrik eşiklerini değil SLO tüketim hızını izler. Güvenilirlik ve yenilik hızı arasındaki dengeyi yönetiriz."
                        },
                        {
                            title: "Kaos Mühendisliği & Test",
                            description: "Kontrollü hata enjeksiyonu ve GameDay tatbikatlarıyla sisteminizin sorun karşısındaki gücünü test ederiz."
                        },
                        {
                            title: "Toil Mühendisliği",
                            description: "Tekrarlayan işleri ölçüyor ve adanmış bir otomasyon backlog'uyla azaltıyoruz."
                        }
                    ]
                },
                {
                    id: "dba",
                    title: "Veritabanı DBA Hizmetleri",
                    subtitle: "Yönetilen Hizmet",
                    description: "Veritabanı performans sorunları sessizce büyür ve kritik bir arıza anında fark edilir. BGTS, Oracle, MSSQL ve PostgreSQL gibi kurumsal veritabanlarınızı uzman ekibiyle 7/24 yönetir.",
                    image: "/images/iso/database.jpg",
                    icon: Database,
                    tags: ["Oracle DB", "MS SQL Server", "PostgreSQL", "MySQL", "Performance Tuning", "Backup & Recovery", "RTO / RPO", "HA / RAC"],
                    features: [
                        {
                            title: "Performans İzleme & Optimizasyon",
                            description: "Sorgu analizi, index yönetimi ve kaynak planlamasıyla veritabanı performansını sürekli optimize ediyoruz."
                        },
                        {
                            title: "Yedekleme & Kurtarma",
                            description: "Otomatik yedekleme planları ve düzenli kurtarma testleriyle veri kaybı riskini sıfıra yaklaştırıyoruz."
                        },
                        {
                            title: "Güvenlik & Erişim Yönetimi",
                            description: "Yetki matrisi, denetim logları ve şifreleme politikalarıyla güvenliği sağlıyoruz."
                        }
                    ]
                }
            ]
        },
        {
            id: "p2",
            title: "Teknoloji Danışmanlığı",
            overview: {
                title: "Doğru Teknolojiyi Doğru Şekilde Uygulayın",
                description: "Yeni sistem kurulumundan teknoloji güncellemesine, veri merkezi göçünden iş sürekliliği analizine kadar kurumsal BT altyapınızın tüm dönüşüm süreçlerini deneyimli mühendis ekibimizle yönetiyoruz. Anahtar teslim proje modelimiz ve yerinde destek kapasitemizle teknolojiyi doğru şekilde hayata geçiriyoruz.",
                layersTitle: "Danışmanlık Kapsam Alanları",
                layers: [
                    { title: "Sistem Kurulum & Anahtar Teslim Projeler", description: "Yeni teknoloji sistemlerinin mimari tasarımından devreye alımına kadar uçtan uca proje yönetimi sağlıyor; test, dokümantasyon ve eğitim dahil teslim ediyoruz." },
                    { title: "Teknoloji Güncelleme & Entegrasyon", description: "Mevcut altyapıyla uyumlu versiyon geçişleri ve platform entegrasyonları; iş sürekliliğini koruyarak teknolojik birikimi modernize ediyoruz." },
                    { title: "Optimizasyon & Sağlık Taramaları", description: "Sistem performans analizi, konfigürasyon gözden geçirme ve iyileştirme önerileriyle altyapının kapasitesini ve güvenilirliğini artırıyoruz." },
                    { title: "Veri Merkezi Göçü & Envanter Analizi", description: "Veri merkezi, sistem ve veri taşıma projelerini risk minimize edilerek yönetiyor; envanter analizi ile mevcut durumu ve boşlukları raporluyoruz." },
                    { title: "İş Sürekliliği & Eğitim", description: "İş sürekliliği analizleri ve yeni teknoloji eğitimleri ile atölye çalışmalarıyla kurumunuzun teknolojiyi etkin kullanma kapasitesini kalıcı olarak artırıyoruz." }
                ]
            },
            services: [
                {
                    id: "cloud",
                    title: "Çoklu Bulut Danışmanlığı",
                    subtitle: "Teknoloji Danışmanlığı",
                    description: "AWS, Azure ve Google Cloud platformlarında dağılmış altyapıları tek bir operasyon çerçevesinde birleştiriyoruz. Çoklu bulut stratejinizi iş gereksinimlerinize göre tasarlıyor; maliyet, güvenlik ve esneklik dengesini sürekli optimize ediyoruz.",
                    image: "/images/iso/cloud.jpg",
                    icon: Cloud,
                    tags: ["AWS", "Microsoft Azure", "Google Cloud", "Migration", "Kubernetes", "Terraform", "Landing Zone"],
                    features: [
                        {
                            title: "Bulut Mimari Tasarımı",
                            description: "İş gereksinimlerinize özel Well-Architected çerçeveyle bulut mimarinizi tasarlıyoruz."
                        },
                        {
                            title: "Göç & Modernizasyon",
                            description: "Legacy sistemlerin buluta taşınmasından container'laştırmaya yolculuğunuzda rehberlik ediyoruz."
                        },
                        {
                            title: "Çoklu Bulut Yönetimi",
                            description: "Vendor lock-in riskini minimize ederek farklı platformlar arasında yedeklilik sağlıyoruz."
                        }
                    ]
                },
                {
                    id: "finops",
                    title: "FinOps Çözümleri",
                    subtitle: "Teknoloji Danışmanlığı",
                    description: "Bulut faturası büyüdükçe harcamalar belirsizleşir. BGTS FinOps hizmeti, bulut maliyetlerini iş birimleri bazında şeffaflaştırır ve kaynak israfını tespit eder.",
                    image: "/images/iso/finops.jpg",
                    icon: LineChart,
                    tags: ["AWS Cost Explorer", "Azure Cost Mgmt", "Right-sizing", "Reserved Instance", "Savings Plan"],
                    features: [
                        {
                            title: "Maliyet Görünürlüğü & Tahsis",
                            description: "Kaynak etiketleme modeliyle her iş biriminin bulut maliyetini şeffaflaştırıyoruz."
                        },
                        {
                            title: "Optimizasyon & Tasarruf",
                            description: "Right-sizing ve plan analizleriyle ortalama %30 bulut maliyet tasarrufu sağlıyoruz."
                        },
                        {
                            title: "FinOps Kültürü & Yönetişim",
                            description: "Mühendislik ve finans ekiplerini aynı dili konuşturacak FinOps pratiklerini kuruma yerleştiriyoruz."
                        }
                    ]
                },
                {
                    id: "m365",
                    title: "Microsoft 365 & Modern Work",
                    subtitle: "Teknoloji Danışmanlığı",
                    description: "Microsoft 365, doğru yönetildiğinde güçlü bir dijital çalışma platformuna dönüşür. Ortamınızı uçtan uca yönetir; çalışanlarınız için kesintisiz deneyim sunarız.",
                    image: "/images/iso/m365.jpg",
                    icon: AppWindow,
                    tags: ["Microsoft Teams", "SharePoint", "Viva Suite", "Purview", "Defender for M365", "Conditional Access", "Exchange Online", "Entra ID"],
                    features: [
                        {
                            title: "Teams & Collaboration",
                            description: "Microsoft Teams, SharePoint ve Viva Suite'in kurumsal adoption sürecini yönetiyoruz."
                        },
                        {
                            title: "Güvenlik & Uyumluluk",
                            description: "Purview, Defender for M365 ve Conditional Access politikalarıyla kimlik ve veri güvenliğini sağlıyoruz."
                        },
                        {
                            title: "Lisans Optimizasyonu",
                            description: "Kullanılmayan özellikleri devreden çıkartıp lisans portföyünü optimize ediyoruz."
                        }
                    ]
                },
                {
                    id: "bcdr",
                    title: "Siber Kurtarma & İş Sürekliliği",
                    subtitle: "Teknoloji Danışmanlığı",
                    description: "BGTS, iş sürekliliği planlamasından izole siber kurtarma altyapısına kadar kurumunuzun dayanıklılığını gerçek senaryolarla test eder ve güvence altına alır.",
                    image: "/images/iso/bcdr.jpg",
                    icon: ShieldCheck,
                    tags: ["ISO 22301", "BCP", "DR Tasarımı", "RTO / RPO", "Ransomware Recovery", "Veeam", "Immutable Backup", "DR Tatbikat"],
                    features: [
                        {
                            title: "İş Sürekliliği Planı (BCP)",
                            description: "Kritik iş süreçlerini belirliyor; kesinti senaryolarına göre kurtarma stratejileri oluşturuyoruz."
                        },
                        {
                            title: "Siber Kurtarma & DR Tasarımı",
                            description: "Ransomware sonrası temiz ortama dönüşü sağlayan izole kurtarma altyapısı tasarlıyoruz."
                        },
                        {
                            title: "Tatbikat & RTO/RPO Doğrulama",
                            description: "Düzenli DR tatbikatlarıyla hedeflerinizi doğru ortamda sınıyoruz."
                        }
                    ]
                },
                {
                    id: "ai",
                    title: "Yapay Zeka & Otomasyon Danışmanlığı",
                    subtitle: "Teknoloji Danışmanlığı",
                    description: "BGTS, yapay zeka destekli otomasyon ve RPA çözümleriyle IT operasyonlarınızı akıllı hale getirir; çağrı merkezinden kök sebep analizine enerji ve zaman tasarrufu sağlar.",
                    image: "/images/iso/ai.jpg",
                    icon: Cpu,
                    tags: ["AIOps", "Auto-Remediation", "KB Üretimi", "Çağrı Merkezi Botu", "RPA", "UiPath", "Power Automate", "Problem Yönetimi", "LLM / GenAI"],
                    features: [
                        {
                            title: "Operasyonda Yapay Zeka",
                            description: "Otomatik çözüm önerisi ve ticket yük analizi ile operasyon kapasitenizi artırıyoruz."
                        },
                        {
                            title: "Akıllı Destek & KB Otomasyonu",
                            description: "Ticket'lardan otomatik Knowledge Base üretimi ile kurumsal hafızanızı genişletiyoruz."
                        },
                        {
                            title: "RPA & Süreç Otomasyonu",
                            description: "Ağır tekrarlayan iş akışlarını robotize ederek manuel hatayı minimize ediyoruz."
                        }
                    ]
                },
                {
                    id: "bakim",
                    title: "Bakım & Destek Hizmetleri",
                    subtitle: "Teknoloji Danışmanlığı",
                    description: "Plansız arızalar maliyetlidir; önlenebilir olanları ise gereksizdir. BGTS, sistemlerin sürekliliğini güvence altına alır.",
                    image: "/images/iso/support.jpg",
                    icon: Settings,
                    tags: ["Önleyici Bakım", "SLA", "7/24 Destek", "Saha Hizmetleri", "Garanti Yönetimi", "Firmware", "End-of-Life Planlama"],
                    features: [
                        {
                            title: "Periyodik Bakım",
                            description: "Donanım bileşenlerine aylık/üç aylık bakım planları ile müdahale uyguluyoruz."
                        },
                        {
                            title: "Uzaktan & Saha Destek",
                            description: "Zorlu durumlarda sertifikalı saha ekibi ile yerinde, normal durumlarda uzaktan hızlı çözümler sunarız."
                        },
                        {
                            title: "Yazılım Güncelleme Yönetimi",
                            description: "Firmware, sürücü güncellemelerini kontrollü biçimde uyguluyoruz."
                        }
                    ]
                }
            ]
        },
        {
            id: "p3",
            title: "Süreç Danışmanlığı",
            overview: {
                title: "Süreçlerinizi Olgunlaştırın, Verimliliğinizi Artırın",
                description: "BT süreçlerinizi uluslararası standartlara uygun hale getirerek verimlilik, izlenebilirlik ve sürdürülebilir operasyonel mükemmeliyet sağlıyoruz."
            },
            services: [
                {
                    id: "surec",
                    title: "Süreç Danışmanlığı Hizmetleri",
                    subtitle: "Süreç Danışmanlığı",
                    description: "BGTS, ITIL, COBIT ve ISO standartlarını referans alarak IT süreçlerinizin olgunluk seviyesini ölçer, boşlukları tespit eder ve operasyonel verimliliği kökten artırır.",
                    image: "/images/iso/process.jpg",
                    icon: RefreshCw,
                    tags: ["ITIL v4", "COBIT", "ISO 20000", "Süreç Tasarımı", "RACI", "KPI", "Gap Analizi", "Olgunluk"],
                    features: [
                        {
                            title: "Süreç Olgunluk Analizi",
                            description: "Mevcut durumunuzu değerlendiriyor; doğru iyileştirme yol haritasını kurguluyoruz."
                        },
                        {
                            title: "Süreç Tasarımı & Uygulama",
                            description: "Rollerin ve araç entegrasyonlarının tasarlanması ve hayata geçirilmesi."
                        },
                        {
                            title: "Sürekli İyileştirme & KPI",
                            description: "Süreçlerin performansını düzenli ölçerek verilere dayalı iyileştirme sağlarız."
                        }
                    ]
                }
            ]
        },
        {
            id: "p4",
            title: "Uyumluluk, Güvenlik & IT Olgunluk",
            overview: {
                title: "Güvenliği Güçlendirin, Dayanıklılığı İnşa Edin",
                description: "Güvenlik, uyumluluk ve olgunluk değerlendirmeleri ile mevcut durumunuzu analiz ediyor, riskleri azaltan ve kurumunuzu daha dayanıklı hale getiren yol haritaları oluşturuyoruz."
            },
            services: [
                {
                    id: "risk",
                    title: "Risk Değerlendirme & Azaltma",
                    subtitle: "Siber Güvenlik",
                    description: "BGTS, IT altyapınızdaki güvenlik ve operasyonel riskleri varlık envanteri ve tehdit modellemesiyle tespit eder, önceliklendirir.",
                    image: "/images/iso/risk.jpg",
                    icon: ShieldAlert,
                    tags: ["ISO 27001", "KVKK", "Risk Matrisi", "Tehdit Modelleme", "Varlık Envanteri", "NIST", "Kontrol Tasarımı"],
                    features: [
                        {
                            title: "Risk Analizi",
                            description: "Varlık envanteri ve tehdit modellemesi ile tüm altyapınızdaki riskleri analiz ederiz."
                        },
                        {
                            title: "Kontrol Tasarımı & Yol Haritası",
                            description: "Güvenlik kontrollerini ve planları oluşturup hayata geçirir, takibini sağlarız."
                        },
                        {
                            title: "Uyumluluk Gereklilikleri",
                            description: "ISO 27001, KVKK standartlarıyla organizasyonunuzdaki süreçleri uyumlu kılarız."
                        }
                    ]
                },
                {
                    id: "maturity",
                    title: "IT Olgunluk Değerlendirmesi",
                    subtitle: "Siber Güvenlik",
                    description: "BGTS, CMMI ve COBIT referansıyla IT organizasyonunuzun süreç, teknoloji ve insan boyutlarındaki olgunluğunu ölçer.",
                    image: "/images/iso/maturity.jpg",
                    icon: LayoutTemplate,
                    tags: ["CMMI", "COBIT", "ITIL", "Gap Analizi", "Benchmark", "Yol Haritası", "KPI"],
                    features: [
                        {
                            title: "Olgunluk Seviyesi Tespiti",
                            description: "Tüm operasyonel boyutlarda kapsamlı analiz yaparak mevcut durumunuzu kayıt altına alıyoruz."
                        },
                        {
                            title: "İyileştirme Yol Haritası",
                            description: "12-18 aylık somut olgunluk büyüme eylem planı sunuyoruz."
                        },
                        {
                            title: "Sektör Karşılaştırması",
                            description: "Sektör emsalleriyle Benchmark yapılarak rekabet durumunu analiz ediyoruz."
                        }
                    ]
                },
                {
                    id: "hardening",
                    title: "Sunucu ve Altyapı Sıkılaştırma",
                    subtitle: "Siber Güvenlik",
                    description: "Varsayılan yapılandırmalar izinsiz girişlere açıktır. BGTS, CIS Benchmark ve DISA STIG referansıyla sistemlerin saldırı yüzeyini kalıcı olarak daraltır.",
                    image: "/images/iso/sunucu.jpg",
                    icon: Lock,
                    tags: ["CIS Benchmark", "DISA STIG", "Windows Server", "Active Directory", "PAM", "Just-in-Time", "GPO", "Zero Trust"],
                    features: [
                        {
                            title: "İşletim Sistemi Sıkılaştırma",
                            description: "Gereksiz portları kapatır, sunucular üzerinde tam sertleşme sağlarız."
                        },
                        {
                            title: "Active Directory Güvenliği",
                            description: "AD eksikliklerini ve hatalarını tespit eder, güvenlik vektörlerini uygularız."
                        },
                        {
                            title: "Ayrıcalıklı Erişim & PAM",
                            description: "Yetkili erişimleri sıkı politikalara bağlayarak tehdit potansiyellerini yok ediyoruz."
                        }
                    ]
                }
            ]
        }
    ],

    capabilities: {
        title: "Neden BGTS MSP?",
        subtitle: "Geleneksel dış kaynak modellerinin ötesinde mühendislik gücü",
        items: []
    }
};
