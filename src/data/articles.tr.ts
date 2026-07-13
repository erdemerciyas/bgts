export interface Article {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  readTime: number;
  body: string;
}

export const ARTICLES_TR: Article[] = [
  {
    id: "kurumlarda-yapay-zeka",
    title: "Kurumlarda Yapay Zeka İnisiyatifi C Seviyesinde Kime Emanet Ediliyor?",
    author: "Alper Önsoy",
    excerpt:
      "Kurumlardaki en stratejik konulardan biri olan Yapay Zeka'nın üst yönetim seviyesinde kime emanet edilmesi gerektiği sorusu, birçok büyük kurumda önemli bir soru işareti. CDO'lar, CIO'lar, COO'lar ve CFO'lar arasındaki yetki-sorumluluk dengesizliği, Yapay Zeka projelerinin başarısını doğrudan etkiliyor.",
    coverImage: "/images/articles/kurumlarda-yapay-zeka.jpg",
    date: "2025-01-15",
    category: "Yapay Zeka",
    readTime: 4,
    body: `## Kurumların Yapay Zeka İnisiyatifi C Seviyesinde Kime Emanet Ediliyor?

Kurumlardaki en stratejik ve en zor konulardan biri olan Yapay Zeka'nın üst yönetim seviyesinde kime emanet edilmesi gerektiği sorusu, birçok büyük kurumda ilk günden beri önemli bir soru işareti oldu.

> "Birçok büyük kuruma baktığımızda ilk dönemler CDO'lara emanet edilen Yapay Zeka inisiyatifi, teknik zorluklar aşılamayınca CIO'lara, Yapay Zeka'nın 'değer üretmeyen teknik oyuncak' noktasına gelmesiyle iş değerinin maksimize olduğu COO'lara, maliyet ve yönetişim sorumları baş gösterildiğinde ise son dönemde CFO'lara emanet edildiğini görüyoruz."

### CDO'ların Zorlu Durumu

Yeni nesil yönetim organizasyonlarında tam da bu iş için, kurumların dijital dönüşümünden sorumlu CDO'lar var. Ancak bu modeldeki problemlerin başında "sorumluluk ve yetki" dengesizliği ortaya çıkması olarak raporlanıyor. Genelde bünyelerinde büyük mühendislik ve iş birimlerini barındırmayan CDO'lar, kurumlarda daha köklü CIO'larla "altyapı/güvenlik" ve süreç sahibi COO'larla "bu işin süreç kontrolü kimde olacak" savaşında güçsüz durumda kalıyor.

Şirketlerdeki Yapay Zeka vizyonunun sahibi olan CDO'lar çoğu kurumda CIO / COO'lar tarafından yeteri kadar desteklenmiyor ve süreci uçtan uca yönetemiyor. Sonuç olarak mimari ve teknoloji perspektifinden CIO tarafından desteklenmeyen, önden de COO tarafından çekilmeyen CDO'ya bağlı Yapay Zeka projeleri birer slayt gösterisi olarak kalıp sahaya hiç inmeme riski ile karşı karşıya kalıyor.

### CIO Perspektifi: Teknoloji Odaklı Yaklaşım

CIO'lar genelde Yapay Zeka'yı altyapı, entegrasyon ve siber güvenlik odaklı bir "teknoloji katmanı" olarak gören yaklaşım sergiliyorlar. SLA ve BT süreçleri konusunda katı olması gereken CIO'ların buradaki en büyük operasyonel zorluğu diğer ekiplerdeki Yapay Zeka uzmanlarının ihtiyaç duyduğu **fail fast** yaklaşımına izin verememesi olarak ortaya çıkıyor.

Bir diğer problem de teknolojiye fazla odaklanıp maliyet ve yönetişim tarafını genelde kaçırmaları. Bu alandaki bir diğer risk de ortaya çıkan Yapay Zeka teknoloji çözümünün "iş değerinden" yoksun olması. Kurumların çoğunun olduğu noktada, çalışan bir Yapay Zeka teknolojisi var, ancak bu çözümü nasıl satacağını, fiyatlayacağını ve nasıl değere dönüştüreceğini bilemiyorlar.

### COO Perspektifi: İş Odaklı Yaklaşım

İş katmanında yer alan COO'lar Yapay Zeka'nın işe entegre edildiği nokta olarak adresleniyor. Ancak "işimin hangi alanında Yapay Zeka'yı nasıl kullanırım?" sorusunun cevabını "iş bakış açısı" zayıf olan CIO'lardan alamayan COO'lar genelde CIO seviyesinde adreslenen kurumsal yapılan yerine kendi işini daha hızlı halledebileceği, hızlı, küçük ancak maliyet ve yönetişimi iyi planlanmamış çözümlerle ilerliyor.

COO genetiğinde bulunan "iş yürüsün" refleksi, ciddi veri sızıntılarına veya teknik borçlara yol açabiliyor.

### CFO'lara Kayan Yönetişim

Son dönemde birçok global büyük kurumda Yapay Zeka inisiyatiflerinin CFO'lara bağlandığını görüyoruz. Bunun en temel sebebinin, Yapay Zeka'nın en riskli olarak adreslenen iki alanı olan **"maliyet"** ve **"yönetişim"** olduğu raporlanıyor.

Dev teknoloji firmalarının yaptığı Yapay Zeka maliyeti konusundaki geri adım attıkları açıklamasından sonra birçok kurum aynı noktada olduğunu itiraf etti. Ağustos ayında devreye girecek AB Yapay Zeka yasaları sonrasında yönetişim daha da önemli başlıklardan biri olacak.

İlk zamanlar Yapay Zeka'nın "yönetişim" tarafı (aslında olması gerektiği gibi) başta CDO, ikinci olarak CIO'larda adreslense de, zaman içinde buradaki görüş risk, denetim ve uyumluluk perspektifine kaymış durumda. Suistimal, yolsuzluk ve cezai risk yönetimi konularının Yapay Zeka alanında iyice öne çıkması da yönetişimin CDO/CIO'lardan CFO'lara kaymasına katkıda bulundu.

Maliyetin yanında yönetişimin de CFO'lara verilmesinin riskleri ise teknik yönetişim, hukuki mülkiyet, modelin "temiz veri ile beslenmesi" ve denetim rol modelinden gelen CFO'ların Yapay Zeka'nın ihtiyacı olan oyun alanını kısıtlaması ve kurumu yarışta geride bırakması olarak raporlanıyor.

### Sonuç: Otonom AI Yönetim Kurulu

Belki de çözüm, organizasyonu tek bir güce teslim etmek değil, CDO'nun vizyonu, CIO'nun teknolojisi ve CFO'nun risk süzgeciyle beslenen, **otonom bir AI yönetim kurulu** kurgulamaktır.`,
  },
  {
    id: "llm-lerden-dslm-lere-donusum",
    title: "LLM'lerden DSLM'lere Dönüşüm: Alan Bazlı Dil Modellerinin Yükselişi",
    author: "Alper Önsoy",
    excerpt:
      "Yapay Zeka artık en çok veriye erişmiş olan LLM'lerden alan bazlı dil modellerine (DSLM) doğru evriliyor. Yüksek maliyetli ve regüle edilmeyen LLM'lerden, yapay zeka marketplace'lerinde sunulacak SLM'lere geçiş süreci kurumlar için maliyet ve verimlilik avantajları sağlıyor.",
    coverImage: "/images/articles/llm-lerden-dslm-lere-donusum.jpg",
    date: "2025-01-15",
    category: "Yapay Zeka",
    readTime: 3,
    body: `## Yüksek Maliyetli ve Regüle Edilmeyen LLM'lerden DSLM'lere Dönüşüm

Yapay Zeka artık "en çok veriye erişmiş olan ve çok konuda bilgi veren LLM'lerden" alan bazlı dil modellerine (DSLM) doğru evriliyor. Ağustos ayında çıkması beklenen regülasyonların da bunu zorlamaya başlayacağı, regülasyonların bu konuyu her geçen gün daha da zorlaştırarak **2027 sonunda modellerin %50'sinin alan bazlı modeller olacağı** ön görülüyor (an itibariyle bu rakam %1).

### DSLM Modellerinin Avantajları

Analizlerinden keyif aldığım sektör analistlerinden Errol Rasit'in bu hafta yayınladığı bir analizde ve devamında gerçekleştirdiği bir video konferansta DSLM modellerini benimseyen kurumların **yüksek doğruluk, artırılmış güvenilirlik ve maliyet avantajı** sayesinde, kendi özel verilerinden ve sektörel içgörülerinden maksimum verimi alabilecekleri konusu derinlemesine değerlendirdi.

Özellikle sektörel bilgiyle donatılmış Küçük Dil Modeli (SLM) mimarilerinin, genel modellere kıyasla **%90'a varan düşük maliyet** ve ciddi oranda enerji tasarrufu sağladığı belirtiliyor.

### Yapay Zeka Marketplace'leri

İşletmeler birden fazla özelleşmiş modeli birbirine bağlayıp (chaining) kullandıkça, Yapay Zeka Marketplace'leri kritik bir önem kazanacak. Bu platformlar denetlenmiş özel modellerin ve veri setlerinin tedarik edildiği merkezi noktalar olarak maliyetleri düşürecek, verimliliği artıracak ve DSLM odaklı inovasyonun önünü açacağı belirtiliyor.

Yani marketplace'lerde tahmin edildiği gibi sadece agent'lar değil, spesifik veri setleri de satılacak. Bir diyet merkezi açacaksanız, önünde agentic bir çözümü olan, arkasında o alana ait bir SLM'i olan hazır bir paket alabileceksiniz örneğin.

### BGTS'nin Öncü Deneyimi

Biz bunun öncü bir örneğini olarak şu an MSP hizmeti sunduğumuz müşteriler için kullandığımız kendi AIOps çözümlerimizin %90'ında tüm MSP müşterilerimizden konsolide ettiğimiz ve özel verilerden arındırdığımız kendi yerel **"Operasyonel Excellence SLM'imizi"** kullanıyoruz. Bu sayede hizmet verdiğimiz kurumlar güvenle AIOps çözümlerimizden MSP framework'ümüz içinde faydalanabiliyor.`,
  },
  {
    id: "pazarlamanin-yeni-musterisi-yapay-zeka-ajanalari",
    title: "Pazarlamanın Yeni Müşterisi: Yapay Zeka Ajanları",
    author: "Alper Önsoy",
    excerpt:
      "Yapay zeka ajanlarının kendi aralarında alışveriş yapmasını sağlayan protokoller her geçen gün gelişiyor. Uyum sağlayamayan markalar, müşteriyle bağını koparıp sadece büyük yapay zeka modellerinin sipariş geçtiği arka plan depolarına dönüşme riski taşıyor.",
    coverImage: "/images/articles/pazarlamanin-yeni-musterisi-yapay-zeka-ajanlari.jpg",
    date: "2025-02-10",
    category: "Yapay Zeka",
    readTime: 3,
    body: `## Pazarlamanın Yeni Müşterisi: Yapay Zeka Ajanları

Harvard Business Review'den Kartik Hosanagar'ın bir yazısını, Türkiye'den önde gelen e-ticaret kuruluşlarından birinin CEO'su ile yaptığımız bir sohbetle birleştirince zihnimde, ufak ama etkisi büyük oldukça ilginç noktalar belirdi.

### Walmart ve AI Ajanlarının Ticareti

Walmart, ürünlerinin popüler yapay zeka modelleri üzerinden satışı konusunda şu an lider gözüküyor, hatta OpenAI ve Google ile bu işin modelini de tasarlıyorlar. AI ajanlarının kendi aralarında alışveriş yapmasını sağlayan **ACP, UCP protokolleri** her geçen gün gelişiyor.

Uyum sağlayamayan markalar, müşteriyle bağını koparıp sadece büyük yapay zeka modellerinin sipariş geçtiği arka plan depolarına dönüşme riski taşıyor.

### Pazarlamanın Yeniden Tanımlanması

"Pazarlama" dediğimiz şeyin kuralları en baştan yazılıyor. Örneğin, onlarca yıldır kullandığımız 19.99 TL gibi aciliyet hissi yaratan pazarlama taktikleri ya da nöropazarlama oyunları bir yapay sinir ağı (ANN) için hiçbir şey ifade etmeyecek.

> "Karar verici bir yapay zeka ajanı olduğunda, özenle hazırladığınız o ürün sayfasını, müşteri yorumlarını veya güven logolarını bir insan asla görmeyecek." — Kartik Hosanagar

### Tek Chat Ekranı Geleceği

Gartner, uzun süre önce "Yapay Zeka ön yüzü bitirecek, tüm bireysel ve kurumsal uygulamaların ön yüzü bir chat ekranı olacak" konulu bir makale yayınlamıştı. Telefonunuzda yüzlerce uygulama olmayacak, tek bir chat ekranı olacak. İş yerinizde kurumsal uygulamalar olmayacak, tek bir chat ekranı olacak.

Bu gerçek, e-ticaret için de geçerli olacak. Zaman içinde şu an sipariş verdiğiniz arayüzler yok olacak, yerini yapay zeka ajanınız alacak.

### Düşünülmesi Gereken Soru

Kısaca, e-ticaret dünyasında yapay zeka sadece yeni bir satış kanalı değil, Netflix'in eğlence sektörünü baştan tasarlaması gibi büyük bir sistemsel değişim.

Tüm bunların birleştirdiğimde aklımda şu soru var: **Her gün kullandığınız ve sizi belki dünyada en iyi tanıyan, zaaflarınızı, ilgi alanlarınızı, korkularınızı, sağlık durumunuzu bilen cep telefonunuzdaki yapay zeka modeliniz bir "satışçı"ya dönüştüğünde sizi nasıl manipüle edebilir, bunu hiç düşündünüz mü?**`,
  },
  {
    id: "ai-governance-101",
    title: "AI Governance 101",
    author: "Erdoğan Bilici",
    excerpt:
      "Yapay zeka yönetişiminin temel prensiplerini, regülasyon gereksinimlerini ve kurumsal AI politikalarının oluşturulmasını ele alan kapsamlı bir rehber. AB Yapay Zeka Yasası ve global yönetişim standartları ışığında kurumların izlemesi gereken yol haritası.",
    coverImage: "/images/articles/ai-governance-101.jpg",
    date: "2025-02-20",
    category: "Yönetişim",
    readTime: 5,
    body: `## AI Governance 101

### Risk, Şeffaflık ve Sorumluluk Dengesi

Yapay zekâ artık yalnızca teknik ekiplerin veya inovasyon birimlerinin konusu değil. Kurumsal dünyada çalışan her bireyin işinin ve gündelik hayatının bir parçası haline gelen yapay zekânın, bir otorite tarafından kontrol edilmesi ve denetlenmesi önemli bir gereksinim olmuştur. Günümüzde işletmeler yapay zekâyı verimlilik artışı, müşteri deneyimi, karar destek mekanizmaları ve yeni iş modelleri için kullanırken; aynı anda güven, hesap verebilirlik, veri kalitesi, etik ilkeler ve mevzuat uyumu gibi başlıklarla da yüzleşiyor. Tam bu noktada yapay zekâ yönetişimi, sadece bir kontrol mekanizması değil; sürdürülebilir ve güvenilir kullanımın temel çerçevesi hâline geliyor.

### Yapay Zekâ Yönetişimi Neden Önemli?

Yapay zekâ sistemleri, klasik yazılımlardan farklı olarak veriyle öğrenen, bağlama göre değişken sonuçlar üreten ve zaman zaman açıklanması zor kararlar alabilen yapılar olarak karşımıza çıkıyor. Bu nedenle yönetişim ihtiyacı yalnızca teknik bir ihtiyaç değildir. Modelin hangi veriyle eğitildiği, çıktılarının ne kadar adil olduğu, hangi risk seviyesinde değerlendirildiği ve insan denetiminin nasıl konumlandığı gibi sorular artık yapay zekâyı kullanan her kurumun gündeminin merkezine yerleşmiştir. Özellikle yüksek etkili kullanım senaryolarında, yönetişim eksikliği hem itibar kaybına hem de hukuki sonuçlara yol açabilir.

### Güçlü Bir AI Governance Yaklaşımının Temel İlkeleri

- **Şeffaflık:** Yapay zekâ sisteminin hangi amaçla kullanıldığı, nasıl çalıştığı ve çıktılarının nasıl yorumlanacağı mümkün olduğunca açık olmalıdır.
- **Hesap verebilirlik:** AI sistemlerinden doğan sonuçlar için organizasyon içinde açık rol ve sorumluluklar tanımlanmalıdır.
- **İnsan denetimi:** Özellikle kritik karar alanlarında nihai değerlendirme tamamen otomasyona bırakılmamalıdır.
- **Adillik ve ayrımcılığın önlenmesi:** Eğitim verisi ve model çıktıları önyargı riskine karşı düzenli olarak gözden geçirilmelidir.
- **Gizlilik ve veri yönetişimi:** Kullanılan verinin kalitesi, kaynağı, erişim yetkileri ve mevzuat uyumu birlikte yönetilmelidir.
- **Güvenlik ve dayanıklılık:** Modellerin kötüye kullanım, manipülasyon ve beklenmeyen hata senaryolarına karşı korunması gerekir.

### Regülasyonlar Bu Alanı Nasıl Şekillendiriyor?

Küresel ölçekte bakıldığında yapay zekâ yönetişimi, etik ilkelerden çıkarak somut mevzuat ve standartlarla desteklenen bir alana dönüşüyor.

**Avrupa Birliği'nin AI Act yaklaşımı**, yapay zekâ uygulamalarını risk düzeyine göre sınıflandırarak yüksek riskli kullanım alanlarında daha sıkı yükümlülükler öngörüyor. 2026 yılında kanunlaşması beklenen bu yaklaşım; şeffaflık, kayıt tutma, insan gözetimi, risk yönetimi ve uygunluk süreçlerini kurumsal sorumluluğun parçası hâline getiriyor.

**ISO 42001**, 2023'te yayımlanan yapay zeka yönetim sistemi için ilk uluslararası standart. ISO 27001 bilgi güvenliği yönetim sistemi standardından esinlenerek üretilmiş ve kurumların yapay zeka yönetişimi için yapması gerekenleri tanımlar, sertifikayla da bunu kanıtlamasını sağlar.

### Kurumlar AI Governance İçin Nereden Başlamalı?

- AI uygulama envanterini çıkarmalıdır
- Her kullanım senaryosu, etki ve kritikliğine göre risk analizine dahil edilmelidir
- Veri kalitesi, model performansı ve olası önyargılar düzenli olarak test edilmelidir
- Hukuk, bilgi güvenliği, veri yönetimi ve iş birimlerinin dahil olduğu yönetişim komiteleri oluşturulmalıdır
- Çalışanlara yapay zekâ okuryazarlığı ve sorumlu kullanım eğitimleri verilmelidir
- Kritik karar süreçlerinde insan onayı ve itiraz mekanizmaları tanımlanmalıdır

### Sonuç

Önümüzdeki dönemde yapay zekâdan değer üretmek isteyen kurumlar için asıl farkı yaratacak konu yalnızca daha gelişmiş modeller kullanmak olmayacak. Asıl rekabet avantajı, bu teknolojileri güvenilir, açıklanabilir, izlenebilir ve sorumlu bir çerçevede yönetebilmekten geçecek. Yapay zeka yönetişimi bu nedenle bir engel olarak görülmek yerine, inovasyonu sürdürülebilir kılan, uzun vadede gerçek katma değer ve güven inşa etmeye odaklanan stratejik bir yönetim katmanı olarak görülmelidir. Doğru kurgulandığında hem regülasyonlara uyumu kolaylaştırır hem de çalışanlar, müşteriler ve paydaşlar nezdinde güven inşa eder.`,
  },
  {
    id: "akilli-otomasyon",
    title: "Akıllı Otomasyon Teknik Ekibi Nasıl Özgürleştirir?",
    author: "Sinan Demirci",
    excerpt:
      "Yönetilen hizmetler ekosisteminde yapay zeka araçları, teknik ekibi yerinden etmek için değil, onları rutinin prangalarından kurtarıp özgürleştirmek için var. Tekrarlayan taleplerin otomasyonu, analitik görevlere odaklanma ve 7/24 kesintisiz müşteri deneyimi.",
    coverImage: "/images/articles/akilli-otomasyon.png",
    date: "2025-02-05",
    category: "Otomasyon",
    readTime: 4,
    body: `## Akıllı Otomasyon Teknik Ekibi Nasıl Özgürleştirir?

Yönetilen hizmetler ekosisteminde, müşteri memnuniyetinin kazanıldığı veya kaybedildiği en kritik cephe genellikle çağrı merkezi ve "İlk Temasta Çözüm" (FCR) ekipleridir. Günümüzde birçok kurum, yapay zekayı bir maliyet kısma aracı veya insan kaynağının alternatifi olarak görme yanılgısına düşüyor. Oysa gerçek başarı formülü çok daha farklı bir vizyona dayanıyor: **Yapay zeka (AI) araçları, teknik ekibi yerinden etmek için değil, onları rutinin prangalarından kurtarıp özgürleştirmek için vardır.**

AI destekli bir operasyonun, tüm hizmet kalitesine nasıl bir çarpan etkisi yaptığını üç temel başlıkta inceleyelim.

### 1. Tekrarlayan Taleplerin Elenmesi: "Görevlerin" Otomasyonu

BT servis masalarının en büyük enerji hırsızları; şifre sıfırlama, basit klasör yetkilendirmeleri veya VPN bağlantı sorunları gibi yüksek hacimli ancak düşük karmaşıklıktaki standart işlerdir. Bu noktada akıllı sesli ve yazılı botların devreye girmesi operasyonel bir devrim yaratır.

Stanford Üniversitesi'nin önde gelen yapay zeka araştırmacılarından Andrew Ng'nin bu konudaki temel tespiti teknoloji liderleri için bir pusula niteliğindedir:

> "Yapay zeka meslekleri değil, o mesleklerin içindeki tekrarlayan görevleri otomatikleştirir."

FCR ekiplerini günde yüzlerce kez aynı şifre sıfırlama işlemini yapmaktan kurtardığınızda, onların sahip olduğu asıl potansiyeli ortaya çıkarmak için ilk adımı atmış olursunuz.

### 2. Analitik Görevlere Odaklanma: İnsanın Gerçek Katma Değeri

Rutin iş yükü üzerinden kalkan bir teknik ekip ne yapar? İşte sihir tam da burada başlar. Basit taleplerle boğuşmayan uzmanlar; daha karmaşık altyapı sorunlarına, kök neden analizlerine (RCA) ve kalıcı sistem iyileştirmelerine odaklanma fırsatı bulur.

MIT'den dünyaca ünlü ekonomist ve yazar Daron Acemoğlu, teknolojinin çalışma hayatına etkisi üzerine yaptığı araştırmalarda **"insanı güçlendiren (empowering) teknolojilerin"** önemini vurgular. Acemoğlu'na göre teknoloji sadece insan emeğini ikame etmemeli; aksine çalışanın daha karmaşık, analitik ve yüksek değerli yeni görevler üstlenmesini sağlamalıdır.

Yönetilen hizmetlerde de akıllı otomasyon tam olarak bu "güçlendirici" etkiyi yaratır. Teknik ekipler yangın söndürmeyi bırakıp, o yangının bir daha çıkmamasını sağlayacak mimari iyileştirmeleri tasarlayan stratejistlere dönüşürler.

### 3. Zamanın Ötesinde Hizmet: 7/24 Kesintisiz Müşteri Deneyimi

Yapay zeka destekli bir operasyon, müşteriye sağlanan esnekliği standart mesai saatlerinin veya kısıtlı vardiya planlarının ötesine taşır.

- **Anında Yanıt:** Kullanıcılar bir sorunu bildirdiklerinde bekleme süreleri saniyelere iner.
- **Sürekli Çözüm:** Gece yarısı veya hafta sonu fark etmeksizin standart talepler (örneğin kilitlenen bir hesabın açılması) anında çözüme kavuşur.
- **Proaktif İletişim:** Olası bir bölgesel kesintide AI botları, kullanıcılara anında bilgi vererek çağrı yığılmalarını (call storm) engeller.

### Geleneksel ve Akıllı Operasyon Karşılaştırması

Aşağıdaki tablo, vizyon değişiminin operasyonel çıktılara nasıl yansıdığını açıkça göstermektedir:

| Metrik / Özellik | Geleneksel FCR Yaklaşımı | Akıllı Otomasyon (AI) Destekli Yaklaşım |
|---|---|---|
| Kapasite ve Süre | Mesai saatleri veya kısıtlı vardiyalar | 7/24 kesintisiz ve anlık müdahale |
| Çalışan Odak Noktası | Tekrarlayan işler (şifre, yetki vb.) | Kök neden analizi ve kalıcı sistem iyileştirmeleri |
| Müşteri Deneyimi | Kuyrukta bekleme ve gecikmeli çözümler | Sıfır bekleme süresi ile anında self-servis imkanı |
| Hizmet Sağlayıcı Rolü | Kriz anında devreye giren reaktif destek | Riski öngören ve optimize eden stratejik iş ortağı |`,
  },
  {
    id: "malicious-server-cagi",
    title: "Bilgisayar Virüslerinden Malicious MCP Server Çağına",
    author: "Sinan Demirci",
    excerpt:
      "1990'lardaki bilgisayar virüslerinden 2020'lerde AI ajanlarını hedefleyen saldırılara kadar siber güvenlik tehditlerinin evrimi. Malicious MCP Server'lar, yapay zeka ajanlarının karar mekanizmalarını manipüle eden yeni nesil saldırı yüzeyleri olarak ortaya çıkıyor.",
    coverImage: "/images/articles/malicious-server-cagi.jpg",
    date: "2025-01-15",
    category: "Güvenlik",
    readTime: 3,
    body: `## Bilgisayar Virüslerinden "Malicious MCP Server" Çağına

Siber güvenlik tehditleri onlar içinde ciddi bir evrim geçirdi:

- **1990'lar:** Bilgisayar virüsleri dosyalara bulaşıyordu.
- **2000'ler:** Ağ üzerinden yayılan worm'lar geldi.
- **2010'lar:** Ransomware'ler kurumları kilitledi.
- **2020'ler:** Saldırganlar artık uygulamaları değil, **AI ajanlarını** hedeflemeye başladı.

Yeni risk alanlarından biri: **Malicious MCP (Model Context Protocol) Server'lar.**

### MCP Server'lar Neden Hedef?

Bugün birçok AI agent sistemi; araçlara, API'lere, veritabanlarına ve operasyonel sistemlere MCP üzerinden bağlanıyor. Bu da MCP server'ları, geçmişteki "makro virüsleri" veya "zararlı browser extension"ları gibi yeni bir saldırı yüzeyine dönüştürüyor.

### Evrim Nasıl Oldu?

Eskiden saldırganın amacı:
- Dosyayı bozmak
- Sistemi ele geçirmek
- Ağ içinde yayılmak

Bugün ise amaç:
- AI ajanının karar mekanizmasını manipüle etmek
- Context poisoning yapmak
- Sahte tool response üretmek
- Gizli veriyi prompt zinciri üzerinden dışarı çıkarmak
- Agent'ı yanlış aksiyon almaya yönlendirmek

Yani artık saldırı sadece "işletim sistemine" değil, **"karar veren modele"** yapılıyor.

### Neden Kritik?

Bir malicious MCP server şunları yapabilir:
- Sahte incident verisi döndürmek
- Operasyon ekiplerini yanlış yönlendirmek
- Agent'ın privilege escalation yapmasına neden olmak
- Prompt injection taşıyan response üretmek
- Güvenilir tool gibi davranarak veri sızdırmak

Bu tam olarak, geçmişte zararlı DLL'lerin, trojan browser plugin'lerinin, fake package repository'lerin yarattığı etkinin AI çağındaki karşılığı olabilir.

### Önümüzdeki Dönemde Ne Göreceğiz?

Büyük ihtimalle şu yapılar standart hale gelecek:

- **Trusted MCP Registry** yapıları
- **MCP signing / certificate** mekanizmaları
- **Tool sandboxing**
- **Zero Trust AI Agent** mimarileri
- **Runtime policy enforcement**
- **Agent davranış denetimi**

Çünkü artık soru şu değil: "Bu kod güvenli mi?" Soru artık şu: **"Bu AI agent hangi kaynağa güveniyor?"**`,
  },
  {
    id: "sla",
    title: "SLA Rakamlarının Ötesi: Müşterilere Katma Değerli İşler Üretmek",
    author: "Sinan Demirci",
    excerpt:
      "Bir BT hizmetinin başarılı sayılması için yalnızca SLA başarı oranlarının yeşil olması yeterli değil. Reaktif bir tedarikçiden proaktif bir iş ortağına dönüşmek için veri analitiği, otomasyon ve oyunlaştırma stratejilerini ele alıyoruz.",
    coverImage: "/images/articles/sla.png",
    date: "2025-02-15",
    category: "Altyapı",
    readTime: 3,
    body: `## SLA Rakamlarının Ötesi: Müşterilere "Katma Değerli" İşler Üretmek

Bir BT hizmetinin başarılı sayılması için yalnızca Hizmet Seviyesi Anlaşması (SLA) başarı oranlarının yeşil olması ve olay-talep (incident-to-request) oranlarının hedeflenen seviyelerde tutulması yeterli mi? Çoğu zaman hayır.

Müşteri Başarısı Yönetimi olarak deneyimlerimiz bize, asıl başarının standart sözleşme şartlarının ötesine geçip müşterinin iş hedeflerine doğrudan katkı sağlayan "katma değerli" işler üretmekten geçtiğini gösterdi.

Peki, yönetilen hizmetlerde reaktif bir tedarikçiden proaktif bir iş ortağına dönüşmek ve bu katma değeri yaratmak için nerelere odaklanmalıyız?

### 1. Veriyi Stratejik Bir Tavsiyeye Dönüştürmek

Sadece geçmişi raporlayan standart metriklerin ötesine geçmeliyiz. Örneğin, veri analizlerinde "assignment group" alanını kullanarak yaptığımız derinlemesine incelemeler, darboğazları tespit etmemizi sağlıyor. Aynı şekilde, lokasyon bazlı iş yükü analizleri yaparak hangi bölgelerde çağrı hacimlerinin artacağını önceden öngörebilir ve kaynak planlamasını buna göre şekillendirebiliriz.

**Veriyi eyleme dönüştürmek, müşteriye sunulabilecek en büyük katma değerdir.**

### 2. Otomasyon ve Yapay Zeka ile Rutini Kırmak (ve Beklentiyi Aşmak)

Yapay zeka ve otomasyonu sadece birer maliyet düşürme aracı olarak görmemek gerekiyor. Bu teknolojileri BT destek operasyonlarına entegre ettiğimizde, aslında en değerli kaynağımız olan insanı özgürleştiriyoruz.

Bunu güncel bir örnekle somutlaştırmak isterim: Mevcutta 5x8 masaüstü destek anlaşmamız olan bir projemizde, kullanıcı deneyimini bir üst seviyeye taşımak adına **yapay zeka destekli bir şifre sıfırlama çağrı merkezi botunu** devreye alıyoruz. Bu adım sayesinde FCR (İlk Temasta Çözüm) ekibinin rutin şifre sıfırlama işlemleri için harcadığı zamanı ciddi oranda azaltıyoruz.

Daha da önemlisi, müşterimize kontrat kapsamının çok ötesine geçerek **7x24 kesintisiz çalışan bir şifre sıfırlama sistemi** sunmuş oluyoruz. Tekrarlayan basit talepler otomatikleştirildiğinde, teknik ekip çok daha karmaşık ve analitik görevlere odaklanma fırsatı buluyor.

### 3. Oyunlaştırma (Gamification) ile Dinamizmi Artırmak

Hizmet kalitesinin kalbinde motivasyonu yüksek ekipler yatar. Destek operasyonlarına oyunlaştırma (gamification) mekaniklerini dahil etmek, hem iç motivasyonu besliyor hem de operasyonel hedeflere ulaşmayı daha keyifli ve sürdürülebilir bir hale getiriyor.

Unutmamalıyız ki, **motive olmuş bir teknik ekip, müşteriye sağlanan değerin en önemli taşıyıcısıdır.**

### Sonuç

Özetle CSM rolü, yangın söndürmenin çok daha ötesinde; teknolojiyi, veriyi ve insan kaynağını uyum içinde yöneterek müşterinin masasında **stratejik bir değer yaratma sanatıdır.**`,
  },
];
