export type ArticleCardTheme = "blue" | "green" | "orange" | "violet" | "rose" | "cyan";

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
  cardTags: string[];
  cardQuote: string;
  cardQuoteHighlight: string;
  cardTheme: ArticleCardTheme;
}

export const ARTICLES_TR: Article[] = [
  {
    id: "kurumlarda-yapay-zeka",
    title: "Kurumlarda Yapay Zeka İnisiyatifi C Seviyesinde Kime Emanet Ediliyor?",
    author: "Alper Önsoy",
    excerpt:
      "Kurumlardaki en stratejik konulardan biri olan yapay zekanın üst yönetim seviyesinde kime emanet edilmesi gerektiği sorusu, birçok büyük kurumda önemli bir soru işareti oluşturuyor. CDO'lar, CIO'lar, COO'lar ve CFO'lar arasındaki yetki-sorumluluk dengesizliği, yapay zeka projelerinin başarısını doğrudan etkiliyor.",
    coverImage: "/images/articles/kurumlarda-yapay-zeka.jpg",
    date: "2026-03-18",
    category: "Yapay Zeka",
    readTime: 4,
    cardTags: ["AI Governance", "C-Suite", "AI Roles"],
    cardQuote: "Kurumlarda Yapay Zeka İnisiyatifi Kime Emanet Edilmeli?",
    cardQuoteHighlight: "Yapay Zeka",
    cardTheme: "blue",
    body: `## Kurumların Yapay Zeka İnisiyatifi C Seviyesinde Kime Emanet Ediliyor?

Kurumlardaki en stratejik ve en zor konulardan biri olan yapay zekanın üst yönetim seviyesinde kime emanet edilmesi gerektiği sorusu, birçok büyük kurumda ilk günden beri önemli bir soru işareti olmuştur.

> "Birçok büyük kuruma baktığımızda, ilk dönemlerde CDO'lara emanet edilen yapay zeka inisiyatifinin; teknik zorluklar aşılamayınca CIO'lara, yapay zekanın 'değer üretmeyen teknik oyuncak' algısına dönüşmesiyle iş değerinin maksimize edildiği COO'lara, maliyet ve yönetişim sorunları baş gösterdiğinde ise son dönemde CFO'lara kaydığını görüyoruz."

### CDO'ların Zorlu Durumu

Yeni nesil yönetim organizasyonlarında tam da bu iş için kurumların dijital dönüşümünden sorumlu CDO'lar bulunuyor. Ancak bu modelde en sık raporlanan problem, sorumluluk ve yetki dengesizliğinin ortaya çıkmasıdır. Genelde bünyelerinde büyük mühendislik ve iş birimlerini barındırmayan CDO'lar, kurumlarda daha köklü CIO'larla "altyapı/güvenlik" ve süreç sahibi COO'larla "bu işin süreç kontrolü kimde olacak" çekişmesinde güçsüz kalıyor.

Şirketlerdeki yapay zeka vizyonunun sahibi olan CDO'lar, çoğu kurumda CIO ve COO'lar tarafından yeterince desteklenmiyor ve süreci uçtan uca yönetemiyor. Sonuç olarak, mimari ve teknoloji perspektifinden CIO tarafından desteklenmeyen, öne de COO tarafından çekilmeyen CDO'ya bağlı yapay zeka projeleri, birer slayt gösterisi olarak kalıp sahaya inememe riskiyle karşı karşıya kalıyor.

### CIO Perspektifi: Teknoloji Odaklı Yaklaşım

CIO'lar genelde yapay zekaya altyapı, entegrasyon ve siber güvenlik odaklı bir "teknoloji katmanı" olarak bakan bir yaklaşım sergiliyor. SLA ve BT süreçleri konusunda katı olması gereken CIO'ların buradaki en büyük operasyonel zorluğu, diğer ekiplerdeki yapay zeka uzmanlarının ihtiyaç duyduğu **fail fast** yaklaşımına izin verememeleri olarak ortaya çıkıyor.

Bir diğer problem ise teknolojiye fazla odaklanıp maliyet ve yönetişim tarafını genelde göz ardı etmeleri. Bu alandaki bir diğer risk de ortaya çıkan yapay zeka teknoloji çözümünün "iş değerinden" yoksun olması. Kurumların çoğu, çalışan bir yapay zeka teknolojisine sahip olsa da bu çözümü nasıl satacağını, fiyatlayacağını ve değere dönüştüreceğini bilemiyor. Yapay zekanın CIO'ya bağlı olduğu birçok kurum bu zorluğu yaşıyor.

### COO Perspektifi: İş Odaklı Yaklaşım

İş katmanında yer alan COO'lar, yapay zekanın işe entegre edildiği nokta olarak konumlandırılıyor. Ancak "işimin hangi alanında yapay zekayı nasıl kullanırım?" sorusunun cevabını, iş bakış açısı zayıf olan CIO'lardan alamayan COO'lar; CIO seviyesinde ele alınan kurumsal yapı yerine, kendi işini daha hızlı halledebileceği küçük ve hızlı, ancak maliyet ve yönetişimi iyi planlanmamış çözümlerle ilerliyor.

COO genetiğinde bulunan "iş yürüsün" refleksi, ciddi veri sızıntılarına veya teknik borçlara yol açabiliyor.

### CFO'lara Kayan Yönetişim

Son dönemde birçok global büyük kurumda yapay zeka inisiyatiflerinin CFO'lara bağlandığını görüyoruz. Bunun temel nedeni, yapay zekanın en riskli iki alan olarak görülen **"maliyet"** ve **"yönetişim"** başlıklarıdır.

Dev teknoloji firmalarının yapay zeka maliyetleri konusunda geri adım attıklarını açıklamasından sonra birçok kurum aynı noktada olduğunu itiraf etti. Ağustos ayında devreye girecek AB Yapay Zeka Yasası sonrasında yönetişim, daha da önemli başlıklardan biri olacak.

İlk dönemlerde yapay zekanın "yönetişim" tarafı — aslında olması gerektiği gibi — başta CDO'larda, ikinci olarak CIO'larda ele alınmış olsa da, zaman içinde bu bakış açısı risk, denetim ve uyumluluk perspektifine kaydı. Suistimal, yolsuzluk ve cezai risk yönetimi konularının yapay zeka alanında iyice öne çıkması da yönetişimin CDO/CIO'lardan CFO'lara kaymasına katkıda bulundu.

Maliyetin yanı sıra yönetişimin de CFO'lara devredilmesinin riskleri arasında; teknik yönetişim, hukuki mülkiyet, modelin temiz veriyle beslenmesi ve denetim odaklı rol modelinden gelen CFO'ların, yapay zekanın ihtiyaç duyduğu hareket alanını kısıtlayarak kurumu rekabette geride bırakması sayılabilir.

### Sonuç: Otonom AI Yönetim Kurulu

Belki de çözüm, organizasyonu tek bir güce teslim etmek değil; CDO'nun vizyonu, CIO'nun teknolojisi ve CFO'nun risk süzgeciyle beslenen **otonom bir AI yönetim kurulu** kurgulamaktır.`,
  },
  {
    id: "llm-lerden-dslm-lere-donusum",
    title: "LLM'lerden DSLM'lere Dönüşüm: Alan Bazlı Dil Modellerinin Yükselişi",
    author: "Alper Önsoy",
    excerpt:
      "Yapay zeka artık en çok veriye erişen LLM'lerden alan bazlı dil modellerine (DSLM) doğru evriliyor. Yüksek maliyetli ve yeterince regüle edilmeyen LLM'lerden, yapay zeka marketplace'lerinde sunulacak SLM'lere geçiş süreci kurumlar için maliyet ve verimlilik avantajları sağlıyor.",
    coverImage: "/images/articles/llm-lerden-dslm-lere-donusum.jpg",
    date: "2026-03-08",
    category: "Yapay Zeka",
    readTime: 3,
    cardTags: ["AI Insight"],
    cardQuote: "DSLM ve SLM mimarileri, yapay zekada yeni dönemin temelini oluşturuyor.",
    cardQuoteHighlight: "yapay zekada",
    cardTheme: "green",
    body: `## Yüksek Maliyetli ve Yeterince Regüle Edilmeyen LLM'lerden DSLM'lere Dönüşüm

Yapay zeka artık "en çok veriye erişen ve çok konuda bilgi veren LLM'lerden" alan bazlı dil modellerine (DSLM) doğru evriliyor. Ağustos ayında yürürlüğe girmesi beklenen regülasyonlar da bu dönüşümü hızlandıracak. Regülasyonların konuyu giderek daha da sıkılaştırmasıyla, 2027 sonunda modellerin %50'sinin alan bazlı olacağı öngörülüyor (bugün bu oran %1 civarında).

### DSLM Modellerinin Avantajları

Analizlerini takip ettiğim sektör analisti Errol Rasit'in bu hafta yayınladığı analizde ve ardından gerçekleştirdiği video konferansta; DSLM modellerini benimseyen kurumların, yüksek doğruluk, artırılmış güvenilirlik ve maliyet avantajı sayesinde kendi özel verilerinden ve sektörel içgörülerinden maksimum verim alabileceği derinlemesine değerlendirildi.

Özellikle sektörel bilgiyle donatılmış Küçük Dil Modeli (SLM) mimarilerinin, genel modellere kıyasla **%90'a varan düşük maliyet** ve ciddi oranda enerji tasarrufu sağladığı belirtiliyor.

### Yapay Zeka Marketplace'leri

İşletmeler birden fazla özelleşmiş modeli birbirine bağlayıp (chaining) kullandıkça, yapay zeka marketplace'leri kritik bir önem kazanacak. Bu platformlar, denetlenmiş özel modellerin ve veri setlerinin tedarik edildiği merkezi noktalar olarak maliyetleri düşürecek, verimliliği artıracak ve DSLM odaklı inovasyonun önünü açacak.

Yani marketplace'lerde tahmin edildiği gibi yalnızca agent'lar değil, spesifik veri setleri de satılacak. Örneğin bir diyet merkezi açacaksanız, önünde agentic bir çözümü ve arkasında o alana özel bir SLM bulunan hazır bir paket satın alabileceksiniz.

### BGTS'nin Öncü Deneyimi

Biz de bunun öncü örneklerinden biri olarak, şu an MSP hizmeti sunduğumuz müşteriler için kullandığımız AIOps çözümlerimizin %90'ında; tüm MSP müşterilerimizden konsolide ettiğimiz ve özel verilerden arındırdığımız yerel **"Operasyonel Excellence SLM'imizi"** kullanıyoruz. Bu sayede hizmet verdiğimiz kurumlar, MSP framework'ümüz içinde AIOps çözümlerimizden güvenle faydalanabiliyor.`,
  },
  {
    id: "pazarlamanin-yeni-musterisi-yapay-zeka-ajanalari",
    title: "Pazarlamanın Yeni Müşterisi: Yapay Zeka Ajanları",
    author: "Alper Önsoy",
    excerpt:
      "Yapay zeka ajanlarının kendi aralarında alışveriş yapmasını sağlayan protokoller her geçen gün gelişiyor. Uyum sağlayamayan markalar, müşteriyle bağını koparıp yalnızca büyük yapay zeka modellerinin sipariş geçtiği arka plan depolarına dönüşme riski taşıyor.",
    coverImage: "/images/articles/pazarlamanin-yeni-musterisi-yapay-zeka-ajanlari.jpg",
    date: "2026-03-25",
    category: "Yapay Zeka",
    readTime: 3,
    cardTags: ["Agentic Commerce"],
    cardQuote: "Pazarlamanın Yeni Müşterisi: Yapay Zeka Ajanları",
    cardQuoteHighlight: "Yapay Zeka",
    cardTheme: "orange",
    body: `## Pazarlamanın Yeni Müşterisi: Yapay Zeka Ajanları

Harvard Business Review'de Kartik Hosanagar'ın bir yazısını, Türkiye'nin önde gelen e-ticaret kuruluşlarından birinin CEO'suyla yaptığımız sohbetle birleştirince zihnimde küçük ama etkisi büyük, oldukça ilginç noktalar belirdi.

### Walmart ve AI Ajanlarının Ticareti

Walmart, ürünlerinin popüler yapay zeka modelleri üzerinden satışı konusunda şu an lider görünüyor; hatta OpenAI ve Google ile bu işin modelini de tasarlıyor. Yapay zeka ajanlarının kendi aralarında alışveriş yapmasını sağlayan **ACP ve UCP protokolleri** her geçen gün gelişiyor.

Uyum sağlayamayan markalar, müşteriyle bağını koparıp yalnızca büyük yapay zeka modellerinin sipariş geçtiği arka plan depolarına dönüşme riski taşıyor.

### Pazarlamanın Yeniden Tanımlanması

"Pazarlama" dediğimiz şeyin kuralları en baştan yazılıyor. Örneğin, onlarca yıldır kullandığımız 19,99 TL gibi aciliyet hissi yaratan pazarlama taktikleri ya da nöropazarlama oyunları, bir yapay sinir ağı (ANN) için hiçbir şey ifade etmeyecek.

> "Karar verici bir yapay zeka ajanı olduğunda, özenle hazırladığınız o ürün sayfasını, müşteri yorumlarını veya güven logolarını bir insan asla görmeyecek." — Kartik Hosanagar

### Tek Chat Ekranı Geleceği

Gartner, uzun süre önce "Yapay zeka ön yüzü bitirecek; tüm bireysel ve kurumsal uygulamaların ön yüzü bir chat ekranı olacak" konulu bir makale yayınlamıştı. Telefonunuzda yüzlerce uygulama olmayacak, tek bir chat ekranı olacak. İş yerinizde kurumsal uygulamalar olmayacak, yine tek bir chat ekranı olacak.

Bu gerçek, e-ticaret için de geçerli olacak. Zaman içinde şu an sipariş verdiğiniz arayüzler yok olacak; yerini yapay zeka ajanınız alacak.

### Düşünülmesi Gereken Soru

Kısacası, e-ticaret dünyasında yapay zeka yalnızca yeni bir satış kanalı değil; Netflix'in eğlence sektörünü baştan tasarlaması gibi büyük bir sistemsel değişim.

Tüm bunları birleştirdiğimde aklımda şu soru var: **Her gün kullandığınız ve sizi belki de dünyada en iyi tanıyan, zayıflıklarınızı, ilgi alanlarınızı, korkularınızı ve sağlık durumunuzu bilen cep telefonunuzdaki yapay zeka modeliniz bir "satışçı"ya dönüştüğünde sizi nasıl manipüle edebilir — bunu hiç düşündünüz mü?**`,
  },
  {
    id: "ai-governance-101",
    title: "AI Governance 101",
    author: "Erdoğan Bilici",
    excerpt:
      "Yapay zeka yönetişiminin temel prensiplerini, regülasyon gereksinimlerini ve kurumsal AI politikalarının oluşturulmasını ele alan kapsamlı bir rehber. AB Yapay Zeka Yasası ve global yönetişim standartları ışığında kurumların izlemesi gereken yol haritası.",
    coverImage: "/images/articles/ai-governance-101.jpg",
    date: "2026-03-22",
    category: "Yönetişim",
    readTime: 5,
    cardTags: ["AI Governance", "Regülasyon"],
    cardQuote: "Yapay zeka yönetişimi, sürdürülebilir kullanımın temel çerçevesi.",
    cardQuoteHighlight: "Yapay zeka yönetişimi",
    cardTheme: "violet",
    body: `## AI Governance 101

### Risk, Şeffaflık ve Sorumluluk Dengesi

Yapay zeka artık yalnızca teknik ekiplerin veya inovasyon birimlerinin konusu değil. Kurumsal dünyada çalışan her bireyin işinin ve gündelik hayatının bir parçası haline gelen yapay zekanın, bir otorite tarafından kontrol edilmesi ve denetlenmesi önemli bir gereksinim haline geldi. Günümüzde işletmeler yapay zekayı verimlilik artışı, müşteri deneyimi, karar destek mekanizmaları ve yeni iş modelleri için kullanırken; aynı anda güven, hesap verebilirlik, veri kalitesi, etik ilkeler ve mevzuat uyumu gibi başlıklarla da yüzleşiyor. Tam bu noktada yapay zeka yönetişimi, yalnızca bir kontrol mekanizması değil; sürdürülebilir ve güvenilir kullanımın temel çerçevesi haline geliyor.

### Yapay Zeka Yönetişimi Neden Önemli?

Yapay zeka sistemleri, klasik yazılımlardan farklı olarak veriyle öğrenen, bağlama göre değişken sonuçlar üreten ve zaman zaman açıklanması zor kararlar alabilen yapılar olarak karşımıza çıkıyor. Bu nedenle yönetişim ihtiyacı yalnızca teknik bir gereksinim değildir. Modelin hangi veriyle eğitildiği, çıktılarının ne kadar adil olduğu, hangi risk seviyesinde değerlendirildiği ve insan denetiminin nasıl konumlandığı gibi sorular, artık yapay zekayı kullanan her kurumun gündeminin merkezine yerleşti. Özellikle yüksek etkili kullanım senaryolarında yönetişim eksikliği hem itibar kaybına hem de hukuki sonuçlara yol açabilir.

### Güçlü Bir AI Governance Yaklaşımının Temel İlkeleri

- **Şeffaflık:** Yapay zeka sisteminin hangi amaçla kullanıldığı, nasıl çalıştığı ve çıktılarının nasıl yorumlanacağı mümkün olduğunca açık olmalıdır.
- **Hesap verebilirlik:** Yapay zeka sistemlerinden doğan sonuçlar için organizasyon içinde açık rol ve sorumluluklar tanımlanmalıdır.
- **İnsan denetimi:** Özellikle kritik karar alanlarında nihai değerlendirme tamamen otomasyona bırakılmamalıdır.
- **Adillik ve ayrımcılığın önlenmesi:** Eğitim verisi ve model çıktıları önyargı riskine karşı düzenli olarak gözden geçirilmelidir.
- **Gizlilik ve veri yönetişimi:** Kullanılan verinin kalitesi, kaynağı, erişim yetkileri ve mevzuat uyumu birlikte yönetilmelidir.
- **Güvenlik ve dayanıklılık:** Modellerin kötüye kullanım, manipülasyon ve beklenmeyen hata senaryolarına karşı korunması gerekir.

### Regülasyonlar Bu Alanı Nasıl Şekillendiriyor?

Küresel ölçekte bakıldığında yapay zeka yönetişimi, etik ilkelerden çıkarak somut mevzuat ve standartlarla desteklenen bir alana dönüşüyor.

**Avrupa Birliği'nin AI Act yaklaşımı**, yapay zeka uygulamalarını risk düzeyine göre sınıflandırarak yüksek riskli kullanım alanlarında daha sıkı yükümlülükler öngörüyor. 2026 yılında kanunlaşması beklenen bu yaklaşım; şeffaflık, kayıt tutma, insan gözetimi, risk yönetimi ve uygunluk süreçlerini kurumsal sorumluluğun parçası haline getiriyor.

**ISO 42001**, 2023'te yayımlanan yapay zeka yönetim sistemi için ilk uluslararası standarttır. ISO 27001 bilgi güvenliği yönetim sistemi standardından esinlenerek üretilmiş olup kurumların yapay zeka yönetişimi için yapması gerekenleri tanımlar; sertifikayla da bunu kanıtlamasını sağlar.

### Kurumlar AI Governance İçin Nereden Başlamalı?

- Yapay zeka uygulama envanterini çıkarmalıdır
- Her kullanım senaryosu, etki ve kritikliğine göre risk analizine dahil edilmelidir
- Veri kalitesi, model performansı ve olası önyargılar düzenli olarak test edilmelidir
- Hukuk, bilgi güvenliği, veri yönetimi ve iş birimlerinin dahil olduğu yönetişim komiteleri oluşturulmalıdır
- Çalışanlara yapay zeka okuryazarlığı ve sorumlu kullanım eğitimleri verilmelidir
- Kritik karar süreçlerinde insan onayı ve itiraz mekanizmaları tanımlanmalıdır

### Sonuç

Önümüzdeki dönemde yapay zekadan değer üretmek isteyen kurumlar için asıl farkı yaratacak konu, yalnızca daha gelişmiş modeller kullanmak olmayacak. Asıl rekabet avantajı, bu teknolojileri güvenilir, açıklanabilir, izlenebilir ve sorumlu bir çerçevede yönetebilmekten geçecek. Yapay zeka yönetişimi bu nedenle bir engel olarak görülmemeli; inovasyonu sürdürülebilir kılan, uzun vadede gerçek katma değer ve güven inşa etmeye odaklanan stratejik bir yönetim katmanı olarak değerlendirilmelidir. Doğru kurgulandığında hem regülasyonlara uyumu kolaylaştırır hem de çalışanlar, müşteriler ve paydaşlar nezdinde güven inşa eder.`,
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
    cardTags: ["AIOps", "Otomasyon"],
    cardQuote: "Yapay zeka araçları, teknik ekibi rutinin prangalarından kurtarır.",
    cardQuoteHighlight: "Yapay zeka",
    cardTheme: "rose",
    body: `## Akıllı Otomasyon Teknik Ekibi Nasıl Özgürleştirir?

Yönetilen hizmetler ekosisteminde, müşteri memnuniyetinin kazanıldığı veya kaybedildiği en kritik cephe genellikle çağrı merkezi ve "İlk Temasta Çözüm" (FCR) ekipleridir. Günümüzde birçok kurum, yapay zekayı bir maliyet kısmına aracı veya insan kaynağının alternatifi olarak görme yanılgısına düşüyor. Oysa gerçek başarı formülü çok daha farklı bir vizyona dayanıyor: **Yapay zeka araçları, teknik ekibi yerinden etmek için değil; onları rutinin prangalarından kurtarıp özgürleştirmek için vardır.**

AI destekli bir operasyonun, tüm hizmet kalitesine nasıl bir çarpan etkisi yaptığını üç temel başlıkta inceleyelim.

### 1. Tekrarlayan Taleplerin Elenmesi: "Görevlerin" Otomasyonu

BT servis masalarının en büyük enerji hırsızları; şifre sıfırlama, basit klasör yetkilendirmeleri veya VPN bağlantı sorunları gibi yüksek hacimli ancak düşük karmaşıklıktaki standart işlerdir. Bu noktada akıllı sesli ve yazılı botların devreye girmesi operasyonel bir devrim yaratır.

Stanford Üniversitesi'nin önde gelen yapay zeka araştırmacılarından Andrew Ng'nin bu konudaki temel tespiti teknoloji liderleri için bir pusula niteliğindedir:

> "Yapay zeka meslekleri değil, o mesleklerin içindeki tekrarlayan görevleri otomatikleştirir."

FCR ekiplerini günde yüzlerce kez aynı şifre sıfırlama işlemini yapmaktan kurtardığınızda, onların sahip olduğu asıl potansiyeli ortaya çıkarmak için ilk adımı atmış olursunuz.

### 2. Analitik Görevlere Odaklanma: İnsanın Gerçek Katma Değeri

Rutin iş yükü üzerinden kalkan bir teknik ekip ne yapar? İşte sihir tam da burada başlar. Basit taleplerle boğuşmayan uzmanlar; daha karmaşık altyapı sorunlarına, kök neden analizlerine (RCA) ve kalıcı sistem iyileştirmelerine odaklanma fırsatı bulur.

MIT'li dünyaca ünlü ekonomist ve yazar Daron Acemoğlu, teknolojinin çalışma hayatına etkisi üzerine yaptığı araştırmalarda **"insanı güçlendiren (empowering) teknolojilerin"** önemini vurgular. Acemoğlu'na göre teknoloji yalnızca insan emeğini ikame etmemeli; aksine çalışanın daha karmaşık, analitik ve yüksek değerli yeni görevler üstlenmesini sağlamalıdır.

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
    date: "2026-03-12",
    category: "Güvenlik",
    readTime: 3,
    cardTags: ["Siber Güvenlik", "AI Agents"],
    cardQuote: "Saldırganlar artık uygulamaları değil, yapay zeka ajanlarını hedefliyor.",
    cardQuoteHighlight: "yapay zeka ajanlarını",
    cardTheme: "cyan",
    body: `## Bilgisayar Virüslerinden "Malicious MCP Server" Çağına

Siber güvenlik tehditleri zaman içinde ciddi bir evrim geçirdi:

- **1990'lar:** Bilgisayar virüsleri dosyalara bulaşıyordu.
- **2000'ler:** Ağ üzerinden yayılan worm'lar geldi.
- **2010'lar:** Ransomware'ler kurumları kilitledi.
- **2020'ler:** Saldırganlar artık uygulamaları değil, **yapay zeka ajanlarını** hedeflemeye başladı.

Yeni risk alanlarından biri: **Malicious MCP (Model Context Protocol) Server'lar.**

### MCP Server'lar Neden Hedef?

Bugün birçok yapay zeka ajan sistemi; araçlara, API'lere, veritabanlarına ve operasyonel sistemlere MCP üzerinden bağlanıyor. Bu da MCP server'ları, geçmişteki "makro virüsleri" veya "zararlı tarayıcı eklentileri" gibi yeni bir saldırı yüzeyine dönüştürüyor.

### Evrim Nasıl Oldu?

Eskiden saldırganın amacı:
- Dosyayı bozmak
- Sistemi ele geçirmek
- Ağ içinde yayılmak

Bugün ise amaç:
- Yapay zeka ajanının karar mekanizmasını manipüle etmek
- Bağlam zehirlenmesi (context poisoning) yapmak
- Sahte araç yanıtı üretmek
- Gizli veriyi prompt zinciri üzerinden dışarı çıkarmak
- Ajanı yanlış aksiyon almaya yönlendirmek

Yani artık saldırı yalnızca "işletim sistemine" değil, **"karar veren modele"** yapılıyor.

### Neden Kritik?

Bir kötü niyetli MCP server şunları yapabilir:
- Sahte olay verisi döndürmek
- Operasyon ekiplerini yanlış yönlendirmek
- Ajanın yetki yükseltmesi (privilege escalation) yapmasına neden olmak
- Prompt injection taşıyan yanıt üretmek
- Güvenilir araç gibi davranarak veri sızdırmak

Bu, geçmişte zararlı DLL'lerin, truva atı tarayıcı eklentilerinin ve sahte paket depolarının yarattığı etkinin yapay zeka çağındaki karşılığı olabilir.

### Önümüzdeki Dönemde Ne Göreceğiz?

Büyük ihtimalle şu yapılar standart hale gelecek:

- **Güvenilir MCP kayıt defteri** yapıları
- **MCP imzalama / sertifika** mekanizmaları
- **Araç korumalı alanı (tool sandboxing)**
- **Sıfır güven yapay zeka ajanı** mimarileri
- **Çalışma zamanı politika uygulaması**
- **Ajan davranış denetimi**

Çünkü artık soru şu değil: "Bu kod güvenli mi?" Soru artık şu: **"Bu yapay zeka ajanı hangi kaynağa güveniyor?"**`,
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
    cardTags: ["MSP", "Müşteri Başarısı"],
    cardQuote: "Gerçek başarı, standart sözleşme şartlarının ötesinden geçer.",
    cardQuoteHighlight: "Gerçek başarı",
    cardTheme: "blue",
    body: `## SLA Rakamlarının Ötesi: Müşterilere "Katma Değerli" İşler Üretmek

Bir BT hizmetinin başarılı sayılması için yalnızca Hizmet Seviyesi Anlaşması (SLA) başarı oranlarının yeşil olması ve olay-talep (incident-to-request) oranlarının hedeflenen seviyelerde tutulması yeterli mi? Çoğu zaman hayır.

Müşteri Başarısı Yönetimi alanındaki deneyimlerimiz bize, asıl başarının standart sözleşme şartlarının ötesine geçip müşterinin iş hedeflerine doğrudan katkı sağlayan "katma değerli" işler üretmekten geçtiğini gösterdi.

Peki, yönetilen hizmetlerde reaktif bir tedarikçiden proaktif bir iş ortağına dönüşmek ve bu katma değeri yaratmak için nerelere odaklanmalıyız?

### 1. Veriyi Stratejik Bir Tavsiyeye Dönüştürmek

Yalnızca geçmişi raporlayan standart metriklerin ötesine geçmeliyiz. Örneğin, veri analizlerinde "assignment group" alanını kullanarak yaptığımız derinlemesine incelemeler, darboğazları tespit etmemizi sağlıyor. Aynı şekilde, lokasyon bazlı iş yükü analizleri yaparak hangi bölgelerde çağrı hacimlerinin artacağını önceden öngörebilir ve kaynak planlamasını buna göre şekillendirebiliriz.

**Veriyi eyleme dönüştürmek, müşteriye sunulabilecek en büyük katma değerdir.**

### 2. Otomasyon ve Yapay Zeka ile Rutini Kırmak (ve Beklentiyi Aşmak)

Yapay zeka ve otomasyonu yalnızca birer maliyet düşürme aracı olarak görmemek gerekiyor. Bu teknolojileri BT destek operasyonlarına entegre ettiğimizde, aslında en değerli kaynağımız olan insanı özgürleştiriyoruz.

Bunu güncel bir örnekle somutlaştırmak isterim: Mevcutta 5x8 masaüstü destek anlaşmamız olan bir projemizde, kullanıcı deneyimini bir üst seviyeye taşımak için **yapay zeka destekli bir şifre sıfırlama çağrı merkezi botunu** devreye alıyoruz. Bu adım sayesinde FCR (İlk Temasta Çözüm) ekibinin rutin şifre sıfırlama işlemleri için harcadığı zamanı ciddi oranda azaltıyoruz.

Daha da önemlisi, müşterimize kontrat kapsamının çok ötesine geçerek **7x24 kesintisiz çalışan bir şifre sıfırlama sistemi** sunmuş oluyoruz. Tekrarlayan basit talepler otomatikleştirildiğinde, teknik ekip çok daha karmaşık ve analitik görevlere odaklanma fırsatı buluyor.

### 3. Oyunlaştırma (Gamification) ile Dinamizmi Artırmak

Hizmet kalitesinin kalbinde motivasyonu yüksek ekipler yatar. Destek operasyonlarına oyunlaştırma (gamification) mekaniklerini dahil etmek, hem iç motivasyonu besliyor hem de operasyonel hedeflere ulaşmayı daha keyifli ve sürdürülebilir bir hale getiriyor.

Unutmamalıyız ki, **motive olmuş bir teknik ekip, müşteriye sağlanan değerin en önemli taşıyıcısıdır.**

### Sonuç

Özetle, CSM rolü yangın söndürmenin çok daha ötesinde; teknolojiyi, veriyi ve insan kaynağını uyum içinde yöneterek müşterinin masasında **stratejik bir değer yaratma sanatıdır.**`,
  },
];
