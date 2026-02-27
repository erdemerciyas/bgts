export interface CaseStudy {
    id: string;
    title: string;
    requirement: string;
    solution: string;
    projectType?: string;
    sector?: string;
    technologies?: string[];
    category?: "yazilim" | "altyapi" | "yonetilen-hizmet" | "egitim";
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: "case-study-1",
        title: "Ofis Rezervasyon ve Planlama Çözümü",
        requirement: "Banka, haftada bir gün ofis lokasyonundan olmak üzere uyguladığı hibrit çalışma düzeni kapsamındaki çalışanlarının çalışma planlamalarını yapabilmelerine ihtiyaç duyuyordu.",
        solution: "Hibrit çalışanların uzaktan çalışma planlarını izleyebilmesi ve yönetebilmesini için ofis rezervasyon ve planlama web uygulaması geliştirildi.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["ASP.NET", "ASP.NET Web API", "ASP.NET WebForms", "C#", "JavaScript", "Backbone.js", "SQL Server"]
    },
    {
        id: "case-study-2",
        title: "CV Parsing & LinkedIn Entegrasyonu",
        requirement: "Kariyer.net ve LinkedIn platformları üzerinden aday özgeçmişlerinin sisteme yüklenmesini, adayla ilgili bilgilerin bu özgeçmişlerden elde edilmesi ve oluşturulan form üzerindeki ilgili alanlara doldurulması isteniyordu.",
        solution: "Müşteri talebi doğrultusunda projenin mevcut teknolojilerine uyumlu çalışacak bir ekip kurarak; LinkedIn entegrasyonu, Kariyer.net CV Parsing işlemi ve Autofill çalışmaları tamamlandı.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["ASP.NET", "C#", "LinkedIn API", "Kariyer.net API", "SQL Server"]
    },
    {
        id: "case-study-3",
        title: "Hayat Sigortası ve Karşılık Rezerv Uygulamaları",
        requirement: "Günlük hesaplama ve karşılaştırma kontrol süreçlerinin otonom hale getirilmesi ve süreçlerin iyileştirilmesi ihtiyacı ile uygulama ortamında yazılması gerekliydi.",
        solution: "Sigorta rezerv hesaplama uygulamasının mevcut haliyle karşılayamadığı ihtiyaçların giderilmesi ile uygulama yenilendi. Hesaplama sonuçlarının günlük olarak veritabanında tutulması ve bu verilerin ay sonunda sabitlenmesi sağlandı. Poliçe bazında rezervlerin online hesaplanması ve listelenmesini sağlayan bir uygulama geliştirildi.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Oracle DB", "Spring Boot", "Microservices"]
    },
    {
        id: "case-study-4",
        title: "Bireysel Emeklilik Planları Projesi",
        requirement: "Son kullanıcıya hizmet edecek olan Bireysel Emeklilik Sistemi plan ekranlarının tasarım ve fonksiyonel olarak yenilenmesi isteniyordu. Ayrıca dönüşümünün yapılması ihtiyacı vardı.",
        solution: "Tüm ekranların iyileştirme analizi için gerekli eforlar ve tasarım ekranları, müşterinin IT birimi tarafından verildi. 4 Yazılım geliştirici ve 2 analist ile daha önce hayat sigortası projesinden deneyimli kaynakların da olduğu bir ekip kuruldu.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Framework", "Oracle DB"]
    },
    {
        id: "case-study-5",
        title: "Saha Satış Mobil Uygulaması",
        requirement: "Banka; saha satış ve müşteri yönetimi ekiplerinin müşteri bilgilerini takip edebilecekleri bir mobil uygulamaya ihtiyaç duyuyordu.",
        solution: "5 kişilik ekibimizin geliştirdiği mobil uygulama ile çalışanların, ziyaret ettikleri bölgede mevcut ve potansiyel müşterileri harita üzerinde görebilmeleri ve görüşme planlamasını buna göre yapabilmeleri sağlandı. Ayrıca müşteri hakkındaki genel ve banka geçmişi ile bilgilere erişip inceleyebilmelerine olanak verildi.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["React Native", "ASP.NET Web API", "C#", "SQL Server", "Google Maps API", "RESTful API"]
    },
    {
        id: "case-study-6",
        title: "Senetör - Rehinmen Platformu",
        requirement: "Banka, kendi müşterilerine ait senet ve araç rehin işlemlerini tekli ve toplu olarak ekleyip/düzenleyip/silebilecekleri ve bu bilgilerin devlete ait servisleri beslemelerini sağlayacak proje talebinde bulundu.",
        solution: "Toplu olarak senet girişi yapılabilecek, senet bilgileri güncellenebilecek, araç rehin, önrehin ve muvafakatname oluşturulabilecek, yapılan bu işlemlerin devlete ait Risk Merkezi, Noterler Birliği Servisleri ve Merkezi Fatura Kayıt Sistemlerine anlık veya planlı olarak iletilmesini sağlayan bir uygulama geliştirildi. Ayrıca bankanın tüm senet ve rehin işlem süreçleri otomatikleştirildi.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["ASP.NET", "C#", "SQL Server", "Web Services", "Risk Merkezi API", "Noterler Birliği API", "MKFS Entegrasyonu"]
    },
    {
        id: "case-study-7",
        title: "Sözleşme ve Onay Portalı",
        requirement: "Web ortamında hizmet veren süreçlerin SharePoint ortamında yazılması isteniyordu.",
        solution: "Müşterinin web ortamında kullandığı Etik Hat, Sözleşme ve Fırsat Onay modülleri, 5 kişilik bir ekip tarafından SharePoint ortamına aktarıldı.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Microsoft SharePoint", "SharePoint Framework (SPFx)", "TypeScript", "Power Automate", "Microsoft 365"]
    },
    {
        id: "case-study-8",
        title: "Kariyer Portalı Dönüşüm",
        requirement: "Banka çalışanlarının kendi kariyer süreçlerini takip edebilecekleri ve yönetecekleri mevcut portalın daha kullanışlı ve fonksiyonel geliştirmeler ile yenilenmesine ihtiyaç duyuluyordu.",
        solution: "Yazılım Ürün grubundan 4 kaynağımız ile danışmanlık hizmeti sağlandı. Kariyer portalı Dijital dönüşüm platformuna taşınarak modernize edildi.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "Platform", "Spring Boot", "Angular", "Oracle DB", "RESTful API"]
    },
    {
        id: "case-study-9",
        title: "İK Uygulamaları Bütçe Modülü",
        requirement: "Kurumsal Uygulamalar ekibi tarafından yazılması hedeflenen bütçe modülü kapsamında çalışanların ve ekiplerin bütçelenmesini otonom bir sisteme geçirerek, İK'nın çalışan bütçelemesini proje ve ekip bazlı yapabilmesini sağlayacak bir uygulama geliştirilmesi gerekiyordu.",
        solution: "Projede yazılım ürün grubundan 1 takım lideri, 2 Java Yazılım geliştirici ve 1 analistten oluşan takımımız, banka ekipleri ile birlikte çalışıyor. Proje ve ekip bazlı bütçeleme sistemi başarıyla hayata geçirildi.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "Spring Boot", "Oracle DB", "RESTful API", "Angular"]
    },
    {
        id: "case-study-10",
        title: "Portföy Yönetimi Dönüşüm",
        requirement: "Hazine biriminin kullandığı bu kritik uygulama; gün içinde Trader yöneticilerinin işlemlerinin takip edildiği ve gün sonunda değerlendirmelerin yapıldığı fonlama modülü ekranlarından oluşuyor. Proje kapsamında hem teknoloji dönüşümü hem de iş süreçlerinde iyileştirmeler bekleniyor.",
        solution: "4 takımın birlikte çalıştığı projedeki 13 kişilik 2 takımımız; Domain deneyimine sahip, kıdemli analist ve Java yazılım geliştiricilerden kuruldu. Mevcut yapıda mobil kaynaklardan beslenen bir mimari oluşturulurken, borsa entegrasyonunun yanı sıra fon hareketleri izleme, fon ve nakit akışı gibi ekranların daha kullanışlı tasarlanması, süreçlerin iyileştirilmesi için çalışılıyor.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Oracle DB", "Borsa Entegrasyonu", "Microservices"]
    },
    {
        id: "case-study-11",
        title: "Takasnet Dijital Dönüşüm",
        requirement: "Takas ve Mutabakat Sistemi, Türkiye'de faaliyet gösteren katılımcı bankalara ait kartlarla, katılımcı bankalara ait üye işyerlerinde gerçekleştirilen işlemlerin provizyon ve takas akışlarının yürütüldüğü sistemdir. Bankanın bu sistemle entegre çalışan mevcut uygulamasını Dijital dönüşüm kapsamında yenilemesi gerekiyordu.",
        solution: "Modernizasyon projesine 6 kişilik hibrit ekibimizle destek veriyoruz. Takas akışları ve provizyon süreçleri dijital dönüşüm odaklı yapıya taşınarak sistem güvenilirliği ve ölçeklenebilirliği artırıldı.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Oracle DB", "Takasnet API"]
    },
    {
        id: "case-study-12",
        title: ".NET Danışmanlığı & Modül Geliştirme",
        requirement: "Banka iştirak şirketinin talepleri doğrultusunda, halihazırda kullanılan .NET tabanlı uygulamaların revizyonunu ve yenilenmesi isteniyordu. Ayrıca İK ekiplerinin ihtiyaçlarını karşılamak üzere sıfırdan iki yeni modül hazırlanması talep edildi.",
        solution: "Kullanılan iç uygulamalarda istenen geliştirmeler yapıldı. İK için CV başvuru ve istek/şikayet modülleri sıfırdan yazılarak, canlıya alındı. Ek geliştirmelerin de tamamlanmasıyla birlikte bakım/destek süreci kapsamındaki hizmetimiz devam ediyor.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: [".NET", "ASP.NET MVC", "C#", "Entity Framework", "SQL Server", "Angular"]
    },
    {
        id: "case-study-13",
        title: "SwapAgent İşlevsellik Artırma",
        requirement: "SwapAgent platformu için ileri düzey işlevlerin geliştirilmesi gerekiyordu. Dinamik bir finansal ortamda sağlam ve ölçeklenebilir çözümler sağlanması bekleniyordu.",
        solution: "Yeni özellikleri sorunsuz bir şekilde geliştirmek ve entegre etmek için Java uzmanlığından yararlanıldı. Özel gereksinimleri anlamak ve karşılamak için SwapAgent ekibiyle yakın işbirliği yapıldı. Platformun ölçeklenebilirliği ve performansı sağlandı.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "Spring Boot", "Microservices", "RESTful API", "Docker", "Oracle DB"]
    },
    {
        id: "case-study-14",
        title: "Reasürans Dijital Transformasyon Projesi",
        requirement: "Reasürans modüllerin analizinin yapılması, tabloların açık sisteme alınması, ekran ve batchlerde otomasyonların hazırlanması ve dijital dönüşük odaklı platformda yeniden yazılması. 19 Ekranın dönüşümü gerçekleşiyor. Bu kapsamda 19 ekrana ek olarak 8 batch ve 13 tablonun açık sisteme alınıyor.",
        solution: "Ekranlar ve batchler yeni platforma taşındı, Mainframe'den açık sisteme dönüşüm projesi yapıldı. Kritik noktalar için monitoring alarmlar oluşturuldu. Raporlar ODI ile oluşturuldu. 10 kişilik takım: 1 Data Developer, 1 Architect, 2 İş Analisti, 3 Fullstack (Java) Developer, 1 Test Uzmanı, 1 PM, 1 Dev Team Lead.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "Platform", "Mainframe Dönüşüm", "Oracle Data Integrator (ODI)", "Spring Batch", "Oracle DB", "Monitoring"]
    },
    {
        id: "case-study-15",
        title: "Sigortacılık Hayat Dışı Ürünler & Dijital Dönüşümü",
        requirement: "Hayat sigortası dışı Elementer sigorta ürünlerinde Eureko sigorta ve banka ile çalışan dijital kanaldan satış ekranları ve sigorta acentelerinin kullandığı acente ekranlarının yeni teknolojiler ile dönüştürülmesi gerekiyordu.",
        solution: "Müşteri bilgilerinin ayrı tutulabilmesi için iki farklı yapı geliştirildi. Eureko sigorta ile asenkron çalışan bir yapı oluşturuldu. Mobil, web ve kredi ürünleri ile entegrasyonları da dahil olmak üzere yoğun entegrasyon noktası bulunan bir proje gerçekleştirildi. 2 Fullstack (Java) Developer ve 2 İş Analisti.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "Platform", "Spring Boot", "Angular", "RESTful API", "Asenkron Mesajlaşma", "Oracle DB"]
    },
    {
        id: "case-study-16",
        title: "Kredi Ödeme Planı Servis Dönüşümü",
        requirement: "Bankacılık uygulamalarında kullanılan ve mainframe ortamında çalışan Ödeme Planı Genel Servisi'nin, açık sistem mimarisine taşınması ihtiyacı bulunuyordu. BILCODEP ödeme planı servisinin mevcut bağımlılıklarının analiz edilmesi, performans ve sürdürülebilirlik açısından açık sistemlerle uyumlu hale getirilmesi hedefleniyordu.",
        solution: "BILCODEP ödeme planı servisinin kullandığı tüm bağımlılıklar detaylı olarak analiz edildi. gRPC ve MFDC servis entegrasyonları ile DB2 veritabanı çağrıları, açık sistem mimarisine uygun olacak şekildeChannel ve business katmanlarında yeniden geliştirildi. Servis, mainframe bağımlılıklarından arındırılarak modern ve ölçeklenebilir bir mimariye taşındı.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "DB2", "MFDC Servisleri", "Mainframe Dönüşüm", "Microservices"]
    },
    {
        id: "case-study-17",
        title: "Vergi & Fatura Servisleri Projesi",
        requirement: "Bankanın Mobil ve İnternet Şube'de yer alan fatura ve vergi ödeme ekranlarının, mevcut mainframe bağımlılıklarının azaltılarak güncel teknolojilerle yeniden ele alınması ihtiyacı bulunuyordu. Altyapının güçlendirilmesi, sürdürülebilirliğin artırılması ve teknik olarak daha kolay yönetilebilir bir yapıya dönüştürülmesi hedefleniyordu.",
        solution: "Fatura ve vergi ödeme ekranları, mainframe bağımlılıkları azaltılacak şekilde yeniden tasarlanarak modern teknolojilerle geliştirildi. Ödeme süreçleri teknik olarak daha yönetilebilir, ölçeklenebilir ve güçlü bir yapıya kavuşturularak Garanti BBVA Mobil ve İnternet Şube kullanıcılarının hizmetine sunuldu.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Mainframe Dönüşüm", "RESTful API", "Oracle DB"]
    },
    {
        id: "case-study-18",
        title: "E-Fatura Entegrasyon Projesi",
        requirement: "Bankaya kesilen e-faturaların aracı firma üzerinden alınarak iç sistemlere entegre edilmesi, onay süreçlerinin yönetilmesi, ilgili modüllere aktarılması ve uçtan uca izlenebilmesi ihtiyacı bulunuyordu. Bu süreçlerin EFA ekranları ve mimarisi ile uyumlu şekilde çalışması hedefleniyordu.",
        solution: "Aracı firma üzerinden iletilen e-faturaların iç sistemlere alınmasını sağlayan entegrasyon geliştirildi. E-faturaların onay süreçleri, diğer modüllere aktarımı ve izlenebilirliği EFA ekranları ve yapısına uygun olacak şekilde tasarlanarak hayata geçirildi. Böylece e-fatura süreçleri merkezi, izlenebilir ve yönetilebilir bir yapıya kavuşturuldu.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "EFA Ekranları", "E-Fatura API", "Spring Boot", "Oracle DB"]
    },
    {
        id: "case-study-19",
        title: "Doğrudan Tahsilat Sistemi (DTS) Projesi",
        requirement: "Doğrudan Tahsilat Sistemi (DTS) ve Tedarikçi Finansmanı Sistemi (TFS) kapsamında yürütülen yüksek hacimli ve kritik finansal operasyonların, modern bankacılık mimarileri ile dijitalleştirilmesi ihtiyacı bulunuyordu. Mevcut yapıların daha güvenilir, ölçeklenebilir ve sürdürülebilir bir altyapıya dönüştürülmesi ihtiyacı bulunuyordu.",
        solution: "DTS ve TFS süreçleri, modern bankacılık mimarilerine uygun şekilde yeniden ele alınarak dijitalleştirildi. Gerçekleştirilen dönüşüm ile yüksek hacimli finansal işlemler için güvenilir bir altyapı oluşturulurken, bankanın operasyonel verimliliğini ve müşteri deneyimini ileri seviyeye taşıyacak bir yapı hayata geçirildi.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Oracle DB", "Microservices", "High-Availability"]
    },
    {
        id: "case-study-20",
        title: "Super Banker — Merkezi Arama & Dashboard Projesi",
        requirement: "Müşteri ve uygulama aramalarının farklı sistemler üzerinden yürütülmesi, operasyonel verimliliği düşürmekte ve kullanıcı deneyimini olumsuz etkilemekteydi. Ayrıca kullanıcıların rol ve yetkilerine göre farklılaşan ana ekran ihtiyaçlarının merkezi ve yönetilebilir bir yapı ile karşılanması gereksinimi bulunuyordu.",
        solution: "Müşteri ve uygulama aramalarını tek bir merkezi arama altyapısında toplayan, girilen veriye göre (TCKN, VKN, MARS No vb.) arama tipini otomatik olarak belirleyen dinamik bir search mekanizması geliştirildi. Bununla birlikte rol ve sub-role bazlı dashboard şablonları ile kural setleri backend tarafında modellenerek, kullanıcı yetkilerine göre kişiselleştirilebilir ana ekran konfigürasyonları sunuldu.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Elasticsearch", "Role-Based Access Control", "Angular"]
    },
    {
        id: "case-study-21",
        title: "Şubeden Para Çekme / Yatırma & Altın Alım Projesi",
        requirement: "Şube ve ATM kanalından para çekme ve para yatırma işleminin yine Şube Kanalından Hurda altın alım ve hediye çeki işleminin tek ekran üzerinden yönetilmesini ve mikroservis mimarisiyle kullanıcı deneyimini iyileştirerek yeniden geliştirilmesi hedeflenmektedir.",
        solution: "Projemiz için, 4 analist, 2 test otomasyon ve 8 yazılımcı ile ekip kuruldu. Mevcut akışın çıkarılması için eski sistem Cobol reverse çalışmaları başladı. ToBe tasarım belirlendi ve GT microservis mimarisi olarak ARK'da geliştirildi. Java 17, Spring Boot, Oracle, RabbitMQ, React temelli ekran ve backend servisleri geliştirildi. Bitbucket, Jenkins, OpenShift, Kibana ve Dynatrace ile serve izlendi.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java 17", "Spring Boot", "React", "gRPC", "Oracle DB", "RabbitMQ", "Jenkins", "OpenShift", "Kibana", "Dynatrace", "Cobol Reverse"]
    },
    {
        id: "case-study-22",
        title: "IVR (Interaktif Sesli Yanıt) Modernizasyon Projesi",
        requirement: "Bankada kullanılan mevcut IVR altyapısının, artan müşteri etkileşim hacmi ve değişen iş ihtiyaçlarını karşılayabilmesi için modern bir mimariye taşınması gereksinimi bulunuyordu. Mevcut çağrı akışlarının daha esnek, ölçeklenebilir ve yönetilebilir hale getirilmesi, müşteri deneyiminin iyileştirilmesi ve operasyonel verimliliğin artırılması hedefleniyordu.",
        solution: "IVR altyapısı modern mimariye taşınarak süreçler yeniden tasarlandı. Entegrasyonlar ve çağrı akışları, esnek ve ölçeklenebilir bir yapı oluşturacak şekilde geliştirildi. Gerçekleştirilen dönüşüm ile müşteri deneyimi iyileştirilirken, operasyonel verimlilik ve sistem sürdürülebilirliği artırıldı.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "IVR Platform", "VoIP", "Spring Boot", "Microservices"]
    },
    {
        id: "case-study-23",
        title: "KGF (Kredi Garanti Fonu) Entegrasyon Projesi",
        requirement: "Kredi başvuru ve teminat süreçlerinin mevcut durumda manuel, dağınık ve operasyonel yükü yüksek şekilde yürütülmesi; süreçlerde gecikmelere, hata riskine ve sınırlı izlenebilirliğe yol açmaktaydı. KGF sistemleri ile bankacılık uygulamaları arasında entegre, otomatik ve standart bir yapı kurulması gerekiyordu.",
        solution: "KGF ile bankacılık uygulamalarının entegrasyonu ve teminat süreçleri otomatikleştirildi. Manuel yürütülen KGF bildirim süreçleri otomatik hale getirildi. Proje takımı: 5 Developer, 1 İş Analisti, 1 Team Lead. 6 ay geliştirme + 1 ay bakım ile Şubat 2026'da tamamlandı.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "KGF API Entegrasyonu", "Spring Boot", "Test Otomasyonu", "Oracle DB"]
    },
    {
        id: "case-study-24",
        title: "Muhasebe Modülü Projesi",
        requirement: "Banka iştiraklerinin Muhasebe ihtiyaçlarını giderecek kapsamlı bir uygulama projesi ihtiyacı bulunuyordu. Posting, muhasebe yaratma talebi ve kurulması, test işlemlerinin yönetimi gibi kritik süreçleri kapsıyor. Mevcut muhasebe sistemlerinin hesap hareketleri ekranlarının platformuna dönüşümü gerçekleştiriliyor.",
        solution: "Proje, Artica tarafı için Finans Uygulamaları ekibi liderliğinde başlatıldı ve microservice mimarisi kullanılarak geliştirildi. Hesap hareketleri ekranları ve Posting süreçleri platformuna taşındı.",
        projectType: "Turnkey Proje",
        sector: "Finans Sektörü",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Microservices", "Spring Boot", "Oracle DB"]
    },
    {
        id: "case-study-25",
        title: "İşletim Sistemi Yönetimi ve Monitoring",
        requirement: "Banka; işletim sistemi, veritabanı ve Linux/Unix yönetiminin yanı sıra Middleware hizmetine ihtiyaç duyuyordu.",
        solution: "SLA ve çözüm süreleri belirlenmiş yıllık kontratlı yönettiğimiz 8 kişilik ekibimiz ile işletim sistemi, veritabanı, Linux ve Middleware katmanlarının yönetimini sağlıyoruz.",
        projectType: "Yönetilen Hizmet",
        sector: "Finans Sektörü",
        category: "yonetilen-hizmet",
        technologies: ["Linux / Unix", "Windows Server", "Middleware Yönetimi", "Oracle DB Yönetimi", "SIT", "SLA Takibi", "Monitoring"]
    },
    {
        id: "case-study-26",
        title: "Cihaz ve İstemci Yönetimi (15.000 Cihaz)",
        requirement: "Bankanın, farklı işletim sistemleriyle çalışan cihazların ve istemcilerin takip ve yönetim gereksinimi bulunmaktaydı.",
        solution: "Projede toplam 15.000 adet cihaz takibi ve yönetimi için 7 kaynağımız çalışmaktadır. 2 kişi mobil, 2 kişi MacOS, 3 kişi de Windows cihaz yönetiminden sorumludur.",
        projectType: "Yönetilen Hizmet",
        sector: "Finans Sektörü",
        category: "yonetilen-hizmet",
        technologies: ["Microsoft Intune", "JAMF (MacOS)", "MDM", "SIT", "Windows Device Management", "iOS / Android Yönetimi"]
    },
    {
        id: "case-study-27",
        title: "Veri Merkezi Taşıma Planlama",
        requirement: "Bankanın veri merkezinin taşınmasının planlaması ve bu süreçte proje danışmanlığı verilmesi gerekiyordu.",
        solution: "11 kişilik ekiple hizmet verilen proje, kaynaklarımızın bankanın iç kadrolarına yerleştirilmesiyle tamamlandı. Veri merkezinin fiziksel ve mantıksal taşıma süreçleri eksiksiz yönetildi.",
        projectType: "Yönetilen Hizmet",
        sector: "Finans Sektörü",
        category: "altyapi",
        technologies: ["Veri Merkezi Yönetimi", "Network Mimarisi", "ITIL", "Proje Yönetimi", "Disaster Recovery"]
    },
    {
        id: "case-study-28",
        title: "Windows Server 2012 ➜ 2019 Migration",
        requirement: "Mevcut Windows Server 2012 işletim sistemi üzerinde bulunan uygulamaların Windows Server 2019 sunuculara taşınması ve uygulamaların yeni sunucular üzerinde çalışır hale getirilmesi isteniyordu.",
        solution: "Tüm Windows Server 2012 işletim sistemine sahip sunucular Windows Server 2019 işletim sistemine yükseltildi. 3 kişilik ekibimizle 565 sunucunun taşıma süreçleri 10 aylık sürede tamamlandı. Projenin 2. fazında 2 yıl kontratlı yönetilen hizmet modeli ile devam edildi.",
        projectType: "Yönetilen Hizmet",
        sector: "Finans Sektörü",
        category: "altyapi",
        technologies: ["Windows Server 2019", "PowerShell", "SCCM", "Migration Tools", "Active Directory", "Hyper-V"]
    },
    {
        id: "case-study-29",
        title: "Windows Server 2016 ➜ 2019 Migration",
        requirement: "Mevcut Windows Server 2016 işletim sistemi üzerinde bulunan uygulamaların Windows Server 2019 sunuculara taşınması ve uygulamaların yeni sunucular üzerinde çalışır hale getirilmesi isteniyordu.",
        solution: "Ocak 2024'te 3 kişi ile başlayan projenin yönetilen hizmet modeli ile 24 ayda tamamlanması planlanmaktadır.",
        projectType: "Yönetilen Hizmet",
        sector: "Finans Sektörü",
        category: "altyapi",
        technologies: ["Windows Server 2019", "PowerShell", "SCCM", "Migration Tools", "Active Directory"]
    },
    {
        id: "case-study-30",
        title: "4me ITSM Platformu",
        requirement: "ITIL4 standartlarına uygun bir uygulama kurulması ve tüm hizmetlerin/süreçlerin işletilebilmesi talep edildi. Tüm son kullanıcıların Chatbot yardımıyla kendi isteklerini karşılayabilmesi ve süreçlerin/entegrasyonların otomatikleştirilmesi de istendi.",
        solution: "4me kullanarak tüm yaşam döngüsünün tek bir uygulama üzerinden yönetilmesi ve bütün ekip/paydaşların sürecin parçası olması sağlandı. Otomasyon kullanılarak, harcanan eforlar azaltıldı ve hizmet kalitesi yükseltildi. Hizmet performans KPI raporları ile hizmet kalitesi ölçülebilir standartlara getirildi.",
        projectType: "Yönetilen Hizmet",
        sector: "Finans Sektörü",
        category: "yonetilen-hizmet",
        technologies: ["4me ITSM", "ITIL 4", "Chatbot Entegrasyonu", "Process Automation", "KPI Dashboard", "API Entegrasyonu"]
    },
    {
        id: "case-study-31",
        title: "DevOps & CI/CD Kolaylaştırılmış Operasyonlar",
        requirement: "Dağıtım ve yönetim süreçlerini geliştirmek için verimli DevOps uygulamalarına ihtiyaç duyuluyordu. Görev açısından kritik finansal hizmetlerin yüksek düzeyde kullanılabilirliğinin ve performansının sağlaması isteniyordu.",
        solution: "Dağıtımları otomatikleştirmek ve operasyonları kolaylaştırmak için DevOps Best Practices uygulandı. Sürekli entegrasyon ve sürekli dağıtım (CI/CD) işlem hatlarından yararlanıldı. Yüksek kullanılabilirlik ve iyileştirilmiş platform performansı elde edildi.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "altyapi",
        technologies: ["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "OpenShift", "Terraform", "Ansible"]
    },
    {
        id: "case-study-32",
        title: "SwapAgent Uygulama Desteği ve İzleme",
        requirement: "SwapAgent uygulamalarının 7/24 kullanılabilirliğinin ve güvenilirliğinin sağlanması talep edildi. Kesinti süresini en aza indirmek için her türlü sorunun hızlı tespiti ve çözümü de istendi.",
        solution: "Güçlü uygulama desteği ve izleme mekanizmaları oluşturuldu. Sorunları proaktif bir şekilde belirlemek ve çözmek için gerçek zamanlı izleme araçları kullanıldı. Yüksek sistem güvenilirliği elde edildi ve kesinti süresi en aza indirildi.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "altyapi",
        technologies: ["Prometheus", "Grafana", "ELK Stack", "PagerDuty", "Dynatrace", "Real-Time Monitoring"]
    },
    {
        id: "case-study-slide34-a",
        title: "Future Core Banking — Data & Digital Skills Gelişim Programı",
        requirement: "Banka, IT alanında görev yapmayan çalışanlarının dijital bilgi ve farkındalığını artırmayı hedefliyordu. Veri analizi, iş analizi, Qliksense, proje yönetimi, Agile süreç yönetimi, risk yönetimi, makine öğrenmesi ve SQL alanlarında bilgi seviyesinin artırılması gerekiyordu.",
        solution: "Bankanın iş ailesi ve hedeflenen uzmanlık alanlarına uygun eğitim tasarımları yapıldı, eğitim kataloğu oluşturuldu, teknik ekiplerle profil analizi yapıldı ve eğitim takvimi planlandı. Ağırlıklı olarak Microsoft tabanlı eğitimlerden oluşan ve 2 yıl süren programda 350 IT çalışanına eğitim ve kariyer planlama hizmeti verildi.",
        projectType: "Eğitim & Gelişim",
        sector: "Finans Sektörü",
        category: "egitim",
        technologies: ["Microsoft Azure", "Qliksense", "SQL", "Machine Learning", "Agile/Scrum", "Proje Yönetimi"]
    },
    {
        id: "case-study-slide35",
        title: "Banker to Developer — Yazılım Kariyer Dönüşüm Programı",
        requirement: "Bankanın kendi akademisi ve Microsoft iş ortaklığı ile şube çalışanlarından kariyerine yazılım alanında devam etmek isteyenler için bir gelişim programı planlanması gerekiyordu. Türkiye'nin farklı illerinden başvuran ve IT alanında görev yapmayan 250 çalışan arasından sınavla 20 kişi seçilmiştir.",
        solution: "Katılımcılar program sonunda Intertech açık yazılım pozisyonlarında değerlendirilmiştir. Microsoft iş ortaklığı ile TBB üyesi banka çalışanlarına yazılım yetkinlikleri kazandırmak için düzenlenen programın sonunda şube çalışanlarına, kariyerlerine yazılım alanında devam etme fırsatları sunulmuştur.",
        projectType: "Eğitim & Gelişim",
        sector: "Finans Sektörü",
        category: "egitim",
        technologies: ["Microsoft Azure", ".NET", "C#", "SQL", "Yazılım Geliştirme Temelleri"]
    },
    {
        id: "case-study-slide36-a",
        title: "Bankacılar için DevOps Gelişim Programı",
        requirement: "DevOps teknolojilerini ve DevOps konseptini tanıtmak ve ilgili alanlarda farkındalık yaratmak için bankaların BT departmanlarında görev yapan, IT farkındalığı olan ve DevOps alanında kariyer hedefi olan çalışanlara yönelik bir gelişim programı düzenlenmesi gerekiyordu.",
        solution: "3 yıldır düzenli olarak planlanan programda Azure, GIT, Docker/Container, PowerShell, Linux ve Python teknolojileri öğretilmektedir.",
        projectType: "Eğitim & Gelişim",
        sector: "Finans Sektörü",
        category: "egitim",
        technologies: ["Microsoft Azure", "Git", "Docker", "PowerShell", "Linux", "Python"]
    },
    {
        id: "case-study-slide36-b",
        title: "BT Genç Yetenekler — İşbaşı Uzmanlık Eğitimi",
        requirement: "Sigorta şirketinin İK Birimi tarafından yönetilen projede, yeni mezun alımlarında işbaşı yapmadan önce çalışanlara verilecek uzmanlık eğitimlerinin sunulması gerekiyordu.",
        solution: "3 yıldır iş analizi ve DevOps alanlarında birlikte çalışılmaktadır. Yeni mezunlara işe başlamadan önce kapsamlı teknik ve alan uzmanlığı eğitimleri sunulmaktadır.",
        projectType: "Eğitim & Gelişim",
        sector: "Finans Sektörü",
        category: "egitim",
        technologies: ["DevOps", "İş Analizi", "Azure", "Agile/Scrum"]
    },
    {
        id: "case-study-33",
        title: "Veriye Dayalı İçgörüler & Raporlama",
        requirement: "Veriye dayalı karar almayı güçlendirmek için kapsamlı raporlama yeteneklerine ihtiyaç duyuluyordu. Finansal verilerin doğru ve zamanında raporlanması amaçlanıyordu.",
        solution: "SwapAgent gereksinimlerine göre uyarlanmış özel raporlama çözümleri geliştirildi. Finansal verilerin doğruluğunu, güncelliğini ve erişilebilirliği sağlandı. Platform, veriye dayalı içgörülerle güçlendirildi.",
        projectType: "Time & Material",
        sector: "Finans Sektörü",
        category: "altyapi",
        technologies: ["Java", "Crystal Reports", "Oracle Business Intelligence", "SQL", "REST API", "Data Warehouse"]
    }
];
