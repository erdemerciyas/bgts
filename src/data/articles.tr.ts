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
    date: "2026-06-24",
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
    date: "2026-05-11",
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
    date: "2026-07-02",
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
    date: "2026-07-01",
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
    date: "2026-07-07",
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
    date: "2026-06-02",
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
  {
    id: "yapay-zeka-modelleri-finansal-risk",
    title: "Yapay Zeka Modelleri Finansal Risk Oluşturabilir mi?",
    author: "Alper Önsoy",
    excerpt:
      "Yapay zeka kullanımının finansal kontrolü günümüzün en önemli ve kontrol altına alınmaya çalışılan konusu olmasına rağmen popüler AI modelleri davranış biçimleri ve model güncellemelerini duyurmadan, kontrolsüz olarak yaparak bu konuya destek olmak yerine kurumların finansal stabilitesine gizli ve büyüyen bir tehdit olmayı tercih ediyorlar.",
    coverImage: "/images/articles/yapay-zeka-modelleri-finansal-risk/cover.jpeg",
    date: "2026-07-14",
    category: "Yapay Zeka",
    readTime: 3,
    body: `
## Yapay Zeka Modelleri Finansal Risk Oluşturabilir mi?

Yapay zeka kullanımının finansal kontrolü günümüzün en önemli ve kontrol altına alınmaya çalışılan konusu olmasına rağmen popüler AI modelleri davranış biçimleri ve model güncellemelerini duyurmadan, kontrolsüz olarak yaparak bu konuya destek olmak yerine kurumların finansal stabilitesine gizli ve büyüyen bir tehdit olmayı tercih ediyorlar.

Aslında bu çift taraflı bir ticari anlaşmaya tek taraflı ve habersiz bir müdahale anlamına da geliyor ve büyük ölçekte bir kurumun bütçesini ciddi derecede sarsabiliyor.

Bunun yanında, farklı kurumların C seviyeleri ile yaptığımız sohbetlerde, tümü yapay zekanın finansal yönetişimi ile ilgili önemli adımlar atmış olsalar da,bu tek taraflı değişim konusunu nasıl kontrol edecekleri konusu net değil ve buradan ciddi goller yiyorlar.

Bilişim teknolojileri alanında yapay zekaya ayrılan bütçe payı 2025’te ortalama %26 olarak ölçülürken, 2028 başı itibari ile %55 olacağı ön görülüyor (Gartner), durum böyleyken bu konu basit bir “BT olayı” olmaktan yönetim kurulu seviyesinde bir finansal risk haline gelmiş durumda.

### Ana Tehlikeler:

- Yapay Zeka lider model sağlayıcılarının duyurmadan yaptığı değişiklikler, kurumlarda hiç kimsenin sorumluluk alanına girmeyen bir finansal risk doğuruyor.
- Yüksek hacimli yapay zeka iş akışlarında, üreticinin yaptığı minik bir model güncellemesi bile bir çeyreğin bütçesini bir gün içinde tüketebiliyor (sektörde örnekleri çokça var.)
- Ürün yönetimi süreçlerindeki geleneksel finansal maliyet ve ROI hesaplaması, ürünün içinde yapay  zeka kullanıldığı an belirsizlikten dolayı çalışamaz hale geliyor.
- Üreticilerle ya da müşterilerle yapılan kontratlar bu değişimler için finansal bir koruma sağlamıyor, finansal risk yapay zeka modelini kullanarak çözüm / ürün üreten kurumun üzerine kalıyor.

### Ne Yapılmalı?

- Öncelikle bu riskin yönetimi mühendislik ekiplerine, teknik kadrolara bırakılmamalı. Teknik ve finansal görüşe sahip bir üst seviye yönetici ya da C seviyesi tarafından denetlenecek bir süreç kurulmalı.
- Çeyreklik yönetim kurulu sunumlarında standart finansal metriklerin yanına yapay zeka modellerinin “davranış değişikliği riski” özeti eklenmeli.
- Finansal limitlerin dışına çıkılıp çıkılmadığı “çıktı bazlı testlere” bağlanmalı. Örneğin, “Bir müşteri churn tahmin modelinde “churn olasılığı” çıktısı %18 ile %25 arasında olmalıdır” , “Bir fiyat optimizasyonu modelinde önerilen fiyatın birim maliyete oranı X ile Y arasında kalmalıdır”, Token tüketimi veya API maliyeti, belirli bir işleme başına maksimum Z TL’yi aşmamalıdır” gibi aralıklar tanımlanır, süreç her çalıştığında bu aralıkta olup olmadığı kontrol edilir.
- Otomatik bir bütçe tavanı devreye girer, o iş akışı geçici olarak durdurulabilir ya da daha ucuz bir modele düşülür, Human in the Loop tetiklenir ve yönetim kuruluna raporlanır. Çıktı bazlı test ile beraber, modelin “içinde ne değişti” diye uğraşmak yerine “işimize ve cebimize ne kadar zarar veriyor” diye bakılır. Böylece modeldeki değişim teknik bir sorun olmaktan çıkarılıp, doğrudan finansal risk kontrolü haline getirilir. Kurumlar yapay zekayı daha fazla benimsedikçe, öngörülebilirlik ve finansal kontrol yetenekleri rekabet avantajlarının temel unsurlarından biri haline geliyor. Bu konuyu yönetemeyen şirketlerin, yönetebilenlerden ciddi şekilde ayrışacağı ön görülüyor.
`,
    cardTags: ["AI Governance", "FinOps", "AI"],
    cardQuote: "Yapay Zeka Modelleri Finansal Risk Oluşturabilir mi?",
    cardQuoteHighlight: "Yapay Zeka",
    cardTheme: "blue",
  },
  {
    id: "yapay-zeka-yoneticileri-ne-nereye",
    title: "Yapay Zeka, Yöneticileri “Ne?” den “Nereye?” Vizyonuna Değiştiriyor",
    author: "Alper Önsoy",
    excerpt:
      "Geçenlerde büyük kurumlardan birindeki yönetici bir arkadaşım “her 30 dakikada bir, birileri bana kontrol etmem için yapay zeka ile ürettiği bir çözümü getiriyor” diye yakındı.",
    coverImage: "/images/articles/yapay-zeka-yoneticileri-ne-nereye/cover.jpeg",
    date: "2026-07-30",
    category: "Yapay Zeka",
    readTime: 3,
    body: `
## Yapay Zeka, Yöneticileri “Ne?” den “Nereye?” Vizyonuna Değiştiriyor

Geçenlerde büyük kurumlardan birindeki yönetici bir arkadaşım “her 30 dakikada bir, birileri bana kontrol etmem için yapay zeka ile ürettiği bir çözümü getiriyor” diye yakındı.

Yapay zeka kişisel çaba ile üretilen nokta atışı çözümleri o kadar arttırdı ki, bu konu yöneticiler için yeni bir dar boğaz olma noktasına geldi. Herkes hevesli, herkes kendine güveniyor, “üretimin anahtarı” insanların kişisel olarak eline verilmiş gibi. Çalışanların hevesini kırmamak, yönetişime uygun davranmak, işe yararlığı sorgulamak ve kurumsal kriterleri korumak arasında yöneticilerin takvimleri bir anda doldu.

Geleneksel yönetim süreci çok basitti, yönetici bir görev delege ederdi ve bir sonraki hafta görevin durumu ile ilgili konforlu, kontrollü bir toplantı gerçekleştirirdi.

Ancak yapay zeka bu takvimi altüst etti. Yapay zeka sayesinde görevler o kadar hızlı tamamlanıyor ki, tüm sürecin hızı, yöneticinin biten işe ne kadar zamanda geri besleme vereceğine kilitlendi.

Atlassian’ın bu konudaki bir raporunda üretim takımlarında çalışanların %87’sinin “herkes o kadar üretim modunda ki, ekipler koordine olmak için gereken enerji ve zamanı bulamıyorlar” düşüncesine sahip olduğunu belirtiyor.

Artık bir işin olmasını en ufak detaya kadar tarif etmenize gerek yok, bilginin değeri her geçen gün azalıyor. Ancak şu an en önemli konulardan biri ekiplerinizin sahip oldukları üretim hızı ile “nereye” yöneldiğini kontrol etmek.

Yapay zekanın getirdiği bu üretim hızı ile hangi temel probleme çözüm buluyoruz? Hangi önemli değişimlere sebep oluyoruz? Başarıyı nasıl ölçeceğiz?

Ve en önemli sorulardan biri de, yapay zekanın ürettiği bir dünyada “başarıdan / başarısızlıktan kim sorumlu olacak?”

Ekipleri büyük resme konsantre tutmak yöneticilerin şu an en önemli görevleri arasında, taktiksel konulardan çok direksiyonun başına geçip rotayı doğru tutabilmek çok önemli.

BetteUp’ın bir araştırmasına göre AI eğitimi alan yöneticilerin %54’ü “yapay zeka ile üretilen içeriklerin çok ağdalı ancak gerçek hissiyatından çok uzak olduğu” konusunda yorumda bulunmuşlar. Birçok yönetici “iyi içeriğin ne olduğu” konusunda çalışanlarına yön vermek zorunda.

MSCI’da Quantitative Research'de Executive Director olarak görev yapan Hamed Faquiryan’ın çok hoşuma giden bir cümlesi var: “Ekibime kesin bir kural koydum: Yapay Zeka’nın ürettiği içerikleri en ufak detayına kadar kendileri de okuyup altına imzalarını atmadan benimle paylaşamazlar. Çünkü o görevi onlara vermek yerine bir LLM’den ben de isteyebilirdim, paylaştığımız her şeyin arkasında durabilmeliyiz”

Yöneticilerin geniş bir bağlama ihtiyacı var, ancak en çok önem taşıyan işlerde derinliğe de ihtiyacı var. Yapay Zeka özetlerine fazla bel bağlayan yöneticiler ciddi bir tuzağa düşüyor olabilir. Superhuman’da Veri Bilimi Direktörü Dr. Stefanie Tignor’un “Çoğu bağlamda yapay zeka özetlerini işe yaramaz buluyorum. Her şeyi aynı seviyeye indiriyorlar: kalitesiz içerik de, yüksek kaliteli iş de aynı şekilde özetleniyor. Sonuçta ortaya çıkan şey çok genel ve yüzeysel kalıyor; ne üzerine harekete geçmemi sağlıyor ne de bana yeni bir şey katıyor” ifadesine birçoğunuzun katılacağını tahmin ediyorum.

Bilgiyi yalnızca özetlemesi için yapay zekâya sormak yerine, hangi işlerin daha dikkatli incelemeyi hak ettiğini anlamak için kullanmamızı öneriyor Dr. Tignor. “Göstergeleri tarayarak önemli projelere ait bağlantıları öne çıkaran otomatik bir haftalık özet sistemi kurdum” diye ekliyor ve “yapay zekâya, derinlemesine incelemem gerektiğini bildiğim beş ayrı, spesifik değerli bulguyu bulduruyorum” diyor.

Dr. Tignor’a göre yüksek etki potansiyeli taşıyan işleri işaret eden sinyaller şunlar: istatistiksel olarak anlamlı metrik hareketleri, Slack’te paylaşılan ve çok fazla yorum alan projeler, birden fazla yönetici sunumunda yer alan veri noktaları ve toplantı notlarında uzun uzun tartışılan çalışmalar.

İşler yakın zamanda yavaşlamayacak, aksine hızlanarak devam edecek. Klasik yönetici taktikleri uygulayanlar, zaman ve efor olarak etkisiz kalarak oyunun dışında kalma tehlikesi içinde olacaklar.

Bu yeni dönemde üretileni yönetmekten çok enerjisini üretenlere yön verip önlerini açan yöneticiler kazanacak.
`,
    cardTags: ["AI Strategy", "Leadership", "AI Governance"],
    cardQuote: "Yapay zeka çağında yöneticilerin rolü yeniden şekilleniyor.",
    cardQuoteHighlight: "Yapay zeka",
    cardTheme: "violet",
  },
  {
    id: "karar-muhendisligi",
    title: "Yapay zeka çağının yeni becerisi: Karar mühendisliği",
    author: "Ömer Yavuz",
    excerpt:
      "Bir müşteri \"paketim hasarlı geldi, iade istiyorum\" diye yazıyor.",
    coverImage: "/images/articles/karar-muhendisligi/cover.png",
    date: "2026-09-24",
    category: "Yapay Zeka",
    readTime: 7,
    body: `
## Yapay zeka çağının yeni becerisi: Karar mühendisliği

Bir müşteri "paketim hasarlı geldi, iade istiyorum" diye yazıyor.

Bugünün yapay zeka asistanı buna özenli, uzun bir paragrafla cevap verir. Oysa yazılımın aslında ihtiyacı olan şey üç karar: Talep hangi ekibe gitmeli? Önceliği ne? İade incelemesi gerekiyor mu?

Bu fark küçük görünüyor ama yapay zekayla nasıl çalıştığımızı değiştirebilir.

### Prompt, bağlam, döngü… Sırada ne var?

Son üç yılda yapay zekayla çalışmanın her aşamasına bir "mühendislik" adı verdik.

Önce prompt mühendisliğini öğrendik, yani modele ne söylediğimizi: rol ver, örnek göster, adım adım düşünmesini iste.

Sonra bunun yetmediğini gördük ve 2025'te bağlam mühendisliği konuşulmaya başlandı, yani modelin neyi gördüğü. Ona hangi bilgiyi hangi sırayla verdiğimiz, ne sorduğumuz kadar önemliydi.

Haziran 2026'da bir adım daha atıldı ve döngü mühendisliği (loop engineering) adı kondu. Ajanlar araç kullanıp kendi sonuçlarını okuyabilir hale gelince soru, tek bir prompt'u iyi yazmaktan ajanın döngüsünü tasarlamaya kaydı: Ajanı ne yönlendirecek, işini kim kontrol edecek, ne zaman yeniden deneyecek, ne zaman duracak?

Bu sorulara dikkat edin. Bir sonraki adım ne olmalı? İş bitti mi? Tekrar denemeli mi? Bir insana mı gitmeli? Hepsi birer karar. Döngü iskeletse, kararlar onun eklemleri.

Üç becerinin de ortak bir varsayımı vardı: Bu kararları metin üreten bir model verecek, biz de o metni ayrıştıracaktık.

15 Eylül 2026'da bu varsayımı sarsan bir gelişme yaşandı.

### Konuşmayan bir yapay zeka: Jev

Diogo Almeida, OpenAI'da ChatGPT'nin arkasındaki talimat takibi araştırmasında çalışmış bir isim. Kurduğu TypeSafe AI, yaklaşık iki yıl gizli modda çalıştıktan sonra ilk modelini duyurdu: Jev.

Jev metin üretmiyor. Şirket onu Kahneman'ın hızlı ve sezgisel "Sistem 1" düşüncesinden esinlenerek "System One modeli" olarak konumlandırıyor. Mimarinin ayrıntılarını paylaşmadı; TechCrunch, altta açık ağırlıklı bir dil modeli olabileceğinden şüphelenildiğini yazdı. Kesin olan şu: Jev'e bir durum ve önceden tanımlanmış sorular veriyorsunuz, o da her seçenek için bir olasılık döndürüyor.

Hasarlı paket örneğine dönersek: Jev üç kararı tek çağrıda, her birinin ne kadar olası olduğuyla birlikte veriyor. Yazılım bu sayılarla doğrudan bir sonraki adıma geçiyor. Ayrıştırılacak, doğrulanacak bir metin yok. Nitekim ilk kullanımlarından biri tam olarak bir döngü kararı: bir ajanın hedefine gerçekten ulaşıp ulaşmadığını her turda kontrol eden doğrulayıcı.

Şirket, Jev'in öncü dil modellerinden 40 ila 200 kat hızlı olduğunu söylüyor. Bağımsız bir testte Claude Haiku 4.5'e karşı ölçülen fark yaklaşık 3 kat hız ve 12 kat maliyetti. Büyük bir fark, ama iki yüz kat değil.

Şirket dışından gelen en ilginç veri LangChain'den geldi. Jev'i bir ajanın çıktısını puanlayan "hakem" olarak GPT-5.6 ve Claude Sonnet 4.6 ile karşılaştırdılar. Beş senaryonun her birini 100'er kez puanlattılar. Jev'in geçti/kaldı kararı her tekrarda insan değerlendiriciyle örtüştü; LLM hakemlerde bu oran GPT-5.6 Terra'da %99,8, Luna'da %96,4, Claude Sonnet 4.6'da %80 oldu. Asıl fark tutarlılıktaydı: Jev'in puanlarındaki dalgalanma LLM hakemlerinkinden 92 ila 913 kat düşüktü.

İki not düşmek gerek. LLM'ler varsayılan sıcaklık ayarlarıyla çalıştırıldı, bu da dalgalanmalarını artırır. Ve LangChain'in kendi uyarısıyla bu, tek ajan ve beş senaryoyla yapılmış erken bir test. Yazılarındaki en önemli cümle ise bence şu: Tutarlı bir hakem de tutarlı biçimde yanılabilir. Buna birazdan döneceğim.

### "Bu zaten sınıflandırma değil mi?"

Deneyimli bir veri bilimci burada haklı bir itiraz yapar: Talepleri sınıflandırmayı yıllardır yapıyoruz. 2019'dan beri eğitim gerektirmeyen (zero-shot) sınıflandırıcılar var; 50-100 etiketli örnekle eğitilen basit modeller de çoğu işi görüyor.

Doğru, problem de çözüm ailesi de eski. 2019'un zero-shot sınıflandırıcıları da görevi çalışma anında alıyordu, bugünün LLM'leri de. Jev'i farklı kılan üç şeyin birleşimi: Çıktı serbest metin değil, önceden tanımlanmış seçeneklerden biri. Aynı durum üzerine onlarca soru paralel ve birbirinden bağımsız soruluyor. Ve cevapları birleştirip nihai kararı vermek modelin içinde değil, sizin kodunuzda oluyor. Sonuncusu en önemlisi: Kararın mantığı modelin içinden çıkıp tasarlanabilen, sürümlenebilen ve test edilebilen bir şeye dönüşüyor.

Ve tasarım işi, onu yapacak birini gerektiriyor.

### Karar mühendisliği

Ben bu işe karar mühendisliği demeyi öneriyorum.

Kelimenin kendisi yeni değil; karar zekası (decision intelligence) adıyla kurum düzeyinde karar süreçlerini modellemek için kullanılıyor. Benim önerdiğim daha dar: tek tek otomatik kararların tasarımı. Soru tasarımını, özellik mühendisliğini, eşik seçimini ve insana devri ayrı işler olarak değil, tek bir iş olarak ele almak. Ve bunu prompt, bağlam ve döngü mühendisliğinin ardından gelen halka olarak görmek.

Karar mühendisi altı soruyu cevaplar:

- Hangi kararların verilmesi gerekiyor ve her biri hangi alt sorulara bölünmeli?
- Her karar için seçenekler neler ve bir "hiçbiri" seçeneği var mı?
- Seçeneklerin sırası ya da ifadesi değişince karar değişiyor mu?
- Modelin ne kadar emin olması yeterli?
- Belirsiz durumlarda insan nasıl devreye girecek?
- Kararın izi sürülebiliyor mu ve soru değiştiğinde yeniden doğrulanıyor mu?

Bu sorular Jev'e özgü değil. Bir LLM'le ya da klasik bir sınıflandırıcıyla karar verirken de aynılarını cevaplamanız gerekir. Jev'in yaptığı, onları görünür kılmak: Metin üretmeyen bir model, kararı tasarlamadan kullanılamaz.

Aşağıdaki gözlemlerin çoğunu AgentConn'un kapsamlı derlemesinden aldım; benim katkım onları bir disiplinin adı altında toplamak.

Bunun neden ayrı bir beceri olduğuna dair iyi bir işaret, bağımsız bir kimlik avı testinden geldi. Jev'e 2.000 e-posta için tek bir genel soru sorulduğunda doğruluk %62,6'da kaldı; Claude Haiku 4.5 %81,3 aldı. Test yazarı ardından kararı beş somut sinyale böldü ve bu sinyallerin nasıl birleştirileceğini 1.000 etiketli e-postayla öğretti; kalan 1.000 e-postada Jev %95'e çıktı. Aynı düzenekte Haiku %93,2 aldı; fark istatistiksel olarak anlamlı değildi. Aynı testte yalnızca sistem prompt'unu değiştirmek, LLM'lerin kimlik avı yakalama oranını %27 ile %96 arasında oynattı.

Bu sonuçlar aynı cetvelle ölçülmedi, veri seti sentetik ve bazı düzenekler veri görüldükten sonra kuruldu. Ama ders sağlam: Hangi modeli kullanırsanız kullanın, sonucu model seçimi kadar kararın nasıl kurulduğu belirliyor. Ve aynı testte basit bir kural filtresi %91,8 aldı. Bazen en iyi karar mühendisliği, modeli hiç kullanmamaya karar vermektir.

Başka gözlemler de aynı yöne işaret ediyor. Seçeneklerin sırasını değiştirmek Jev'in olasılıklarını belirgin biçimde değiştirebiliyor. Geçerli cevabı olmayan bir soruda ise model yine de seçeneklerden birini döndürüyor: Tanımsız bir cevap uyduramaz, ama "hiçbiri" seçeneği yoksa yanlış olanı seçer.

### Karar ucuzladıkça: Jevons etkisi

1865'te İngiliz ekonomist William Stanley Jevons ilginç bir şey fark etti: Buhar makineleri kömürü daha verimli kullanmaya başladıkça İngiltere'nin kömür tüketimi azalmadı, tam tersine arttı. Bir kaynak ucuzladığında, onu kullanmaya değer bulduğumuz alanlar çoğalır.

Tesadüf değil: Jev'in adı da Jevons'a bir gönderme.

Bugün pek çok şirket yapay zekayı yalnızca büyük ve önemli kararlar için kullanıyor, çünkü her çağrının bir maliyeti var. Ama karar vermek neredeyse bedava hale geldiğinde tablo değişir. Bir işlemin sahte olup olmadığı, hangi destek taleplerinin üst seviyeye taşınması gerektiği, on binlerce kaydın hangilerinin bir politikaya uyduğu gibi, bugün otomatikleştirmeye değer bulmadığımız binlerce küçük karar otomatikleşmeye başlayacak.

Bu kararların her biri birileri tarafından tasarlanmak zorunda.

### Makine ne zaman karar vermeli, insan ne zaman?

Jev her kararla birlikte bir güven tahmini veriyor. Eşiği siz belirliyorsunuz: Güven yüksekse yazılım kendi başına hareket ediyor, düşükse işi bir insana gönderiyor. Bir e-postayı klasörlemek için yüzde 70 yeterli olabilir; bir kredi başvurusunu reddetmek için yüzde 99 bile az gelebilir.

LangChain'in uyarısı burada önem kazanıyor: Tutarlı bir hakem de tutarlı biçimde yanılabilir. Eşik koymanın ön koşulu, güven skorunun gerçekten bir anlamı olması. Şirket Jev'in skorlarının kalibre olduğunu söylüyor ama bunu gösteren veri yayınlamadı. Bağımsız testlerin sonuçları karışık: Kimlik avı testinde olasılıklar bazı soru tiplerinde fazla, bazılarında az özgüvenli çıktı. Sahte iş ilanı tespitinde ise skorlar dürüst çıktı, ama 0,9 eşiğinde model 53 dolandırıcılığın yalnızca 7'sini yakaladı.

Bu yüzden karar mühendisinin ilk işi eşik seçmek değil, ölçmek. Modeli bir süre mevcut sürecin yanında çalıştırır ve iki şeye bakarsınız: 0,9 güvenle verilen kararların gerçekten yüzde 90'ı doğru mu, ve bu güvene ulaşan kararlar işin ne kadarını kapsıyor? Eşik bu veriden çıkar, tahminden değil.

Karar mühendisi, makinenin nerede durup insana devredeceğini belirleyen kişidir.

### Henüz erken, ama yön belli...

Jev henüz erken erişim aşamasında ve heyecanı frenlemek gerekiyor. "Halüsinasyon yapmaz" iddiası yalnızca çıktının biçimi için geçerli: Jev tanımlanmamış bir seçenek uyduramaz, ama tanımlı seçeneklerden yanlış olanı seçebilir. Şirket, ana sayfasındaki hız ve maliyet rakamlarının gerçek dünyada beklenebilecek kazancın üst ucunda olduğunu kendisi söylüyor; bu rakamların geldiği testleri de kendi ekibi hazırlamış.

Yani Jev'in kendisi başarılı olur ya da olmaz. Ama işaret ettiği yön bence net. Prompt mühendisliği modele ne söyleyeceğimizi, bağlam mühendisliği neyi göstereceğimizi, döngü mühendisliği ajanın nasıl döneceğini tasarlamayı öğretti. Sıradaki beceri, o döngünün her adımında hangi kararın, hangi seçenekler arasından, ne kadar güvenle verileceğini tasarlamak. Hangi model o kararı verirse versin.

Kendi iş akışınıza bakın: "Bu nereye gitmeli", "bu acil mi", "bu onaylanmalı mı" diye verdiğiniz kararların çoğu muhakemenizi değil, doğru tasarlanmış bir sistemi bekliyor.
`,
    cardTags: ["AI", "Decision Engineering"],
    cardQuote: "Yapay zeka çağının yeni becerisi: Karar mühendisliği",
    cardQuoteHighlight: "Karar mühendisliği",
    cardTheme: "cyan",
  },
  {
    id: "bce-yapay-zeka-kodlama-ajanlari",
    title: "Yapay zeka kodlama ajanınız bütçesini arama yaparak harcıyor. Bunu çözdük ve açık kaynak yaptık.",
    author: "BGTS",
    excerpt:
      "6 dilde 12 açık kaynak repodan alınan 600 gerçek değişikliği iki yapay zekâ kodlama ajanından geçirdik: Cursor ve OpenCode. Her biri bir kez tek başına, bir kez de önünde BGTS Context Engine (BCE) ile çalıştı. Aynı görevler, aynı modeller.",
    coverImage: "/images/articles/bce-yapay-zeka-kodlama-ajanlari/cover.png",
    date: "2026-10-09",
    category: "Yapay Zeka",
    readTime: 41,
    body: `
## Yapay zeka kodlama ajanınız bütçesini arama yaparak harcıyor. Bunu çözdük ve açık kaynak yaptık.

### Aynı 600 pull request. Aynı modeller. Ortalama %64 daha düşük maliyet.

6 dilde 12 açık kaynak repodan alınan 600 gerçek değişikliği iki yapay zekâ kodlama ajanından geçirdik: Cursor ve OpenCode. Her biri bir kez tek başına, bir kez de önünde BGTS Context Engine (BCE) ile çalıştı. Aynı görevler, aynı modeller.

- Cursor (grok-4.7-high-fast): %60 daha düşük maliyet, %88 daha az araç çağrısı, %78 daha az token, %35 daha hızlı.
- OpenCode (GLM 5.3 Flash): %67 daha düşük maliyet, %90 daha az araç çağrısı, %88 daha az token, %37 daha hızlı.

Kalite düşmedi: ajanların değişikliğin dokunduğu dosyaları bulma oranı (recall) ortalama %92,4'ten %92,7'ye çıktı.

BCE, MIT lisansıyla açık kaynak: github.com/bgts-ai-org/bgts-context-engine

### Problem: ajanlar çalışmadan önce arıyor

Bugünün kodlama ajanları her göreve reponuzu tanımadan başlıyor. Klasörleri listeliyor, grep'liyor, bir dosya açıp yine grep'liyorlar. Her adım modele giden ayrı bir tur; her arama sonucu da sonraki her turda yeniden gönderiliyor. Token faturası bu yüzden adım sayısından hızlı büyüyor.

Aynı 600 görevde Cursor tek başınayken görev başına 17,4 araç çağrısı yaptı; bunların 9,1'i arama, 6'sı dosya okumasıydı. BCE ile görev başına arama 0,06'ya indi; 600 görevin 583'ünde hiç arama yapılmadı.

### Fikir: haritayı ajana en başta verin

BCE repoyu bir kez kod grafına çeviriyor ve ajanın ilk sorusunu cevaplıyor: bu görevin dokunduğu kod nerede? Cevap, dosya ve satır bilgisiyle birkaç sembol. Ajan aramak yerine doğrulanmış konumları açıyor.

Üç adımda çalışıyor: çapa (yedi kaynak görevin ne hakkında olduğuna oy veriyor), açıl, sonra daral(graf yürüyüşü, aritmetik skor, en iyi 20 aday) ve isteğe bağlı yeniden sıralama (küçük bir karar modeli dosyaları eler, hiç dosya ekleyemez). Ayrıntılar aşağıdaki Teknik Detay Raporu'nda.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image5.png)

BCE baştan sona nasıl çalışıyor.

### Teknik Detay Raporu

### Özet

Yapay zeka kodlama ajanlarının en pahalı ve en hataya açık adımı, kod yazmak değil, neyi okuyacağına karar vermektir. Bugün bu soruya verilen yaygın cevap, dosyaları parçalara bölüp gömme (embedding) vektörleri üzerinden benzerlik araması yapmaktır. Bu yaklaşım kurulumu ucuz, ama belirli bir biçimde yanlıştır: soruya benzeyen metni döndürür, davranışa katılan kodu değil.

BGTS Context Engine (kısaca BCE) bu problemi farklı bir zeminden ele alır. Repoları semboller, çağrılar, referanslar, tip hiyerarşileri, HTTP route'ları ve diller arası köprülerden oluşan bir kod grafına indeksler; bir görev metnini bu grafı gezerek yanıtlar. Getirme yolunda dil modeli, saat ya da rastgelelik yoktur: aynı görev metni, aynı commit üzerinde, bayt bayt aynı sıralamayı döndürür. Embedding yalnızca tek bir yerde, görev metninin tanıdık hiçbir şeyi adlandırmadığı durumlarda giriş noktası bulmak için kullanılır ve sıralamayı asla doğrudan belirlemez.

Bu makalede motorun mimarisini, iki geçişli indeksleme hattını, tek bir PostgreSQL üzerinde birleşen graf–vektör–tam metin depolamasını, yedi kaynaklı çapa (anchor) keşfini, sürümlenmiş skorlama formülünü, K-monotonik daraltma algoritmasını, token bütçesine duyarlı paketlemeyi ve sıralamanın üzerine isteğe bağlı olarak eklenen olasılıksal bağlam seçici katmanını ayrıntılı olarak inceliyoruz. Yol boyunca projenin ölçüm metodolojisini, denenip bırakılan fikirleri ve gerçek dünyada karşılaşılan performans tuzaklarını da paylaşıyoruz.

### 1. Giriş: Ajanın okuma problemi

Tanımadığı bir repoda çalışan bir ajanı düşünün. Kullanıcı şunu yazıyor:

"Toplantı webhook'undaki login timeout'u düzelt."

Ajanın değişiklik yapabilmesi için önce şu soruların cevabını bilmesi gerekir: Webhook isteğini hangi fonksiyon karşılıyor? Oturum süresi nerede belirleniyor? Bu değeri kim okuyor, kim yazıyor? Değişiklik yapılırsa hangi çağıranlar etkilenir?

Bu soruların hepsinin kesin bir cevabı vardır ve bu cevap yapısaldır. handleLogin, refreshSession'ı çağırır; refreshSession, SESSION_TTL'i okur; SESSION_TTL'e ise tam olarak tek bir yerde değer atanır. Bu bir graf gezinmesidir.

Ajanlar bu yapıya sahip olmadığında iki yoldan birine sapar. Ya grep ve glob ile repoda uzun uzun dolaşır ve her turda bağlam penceresini arama çıktısıyla doldurur ya da bir vektör veritabanından "timeout" kelimesine benzeyen beş dosya alır. İlki pahalıdır; ikincisi ise yanıltıcıdır, çünkü timeout'tan bahseden beş dosya, onu ayarlayan tek fonksiyonu ve değiştirildiğinde bozulacak üç çağıranı içermeyebilir.

BCE, bu boşluğu doldurmak için tasarlanmış bir bağlam motorudur. Kod üretmez, kod düzenlemez, belirli bir ajan çerçevesine bağlı değildir. Yaptığı tek şey, "bu görev için neyi okumalıyım?" sorusuna sıralanmış, bütçelenmiş, gerekçesi ekli ve yeniden üretilebilir bir cevap vermektir.

### 2. Embedding tabanlı RAG neden yetmiyor?

Embedding tabanlı getirmenin (Retrieval-Augmented Generation) sorunu kalitesiz olması değil,yanlış soruya cevap vermesidir. Vektör benzerliği "bu metin şu metne ne kadar benziyor?" sorusunu yanıtlar. Oysa bir değişiklik görevinde asıl soru "bu davranışa hangi kod katılıyor?" sorusudur.

Bu farkın üç somut sonucu vardır:

- Yapısal ilişkiler kaybolur. Bir sabitin değerini atayan fonksiyon ile o sabiti yalnızca log mesajında okuyan fonksiyon, metin olarak birbirine benzer görünebilir. Ancak hata genellikle değeri yazan yerdedir, okuyan yer çoğu zaman yalnızca sonuçtur.
- Testler öne çıkar. Bir görev açıklaması, neredeyse her zaman onu doğrulayan testlere benzer. "Yetkilendirme kontrolü ve uygun hata yanıtları" ifadesinin en yakın komşuları genellikle on tane test fonksiyonudur.
- Cevap hesap veremez. Vektör araması neden o sonucu döndürdüğünü açıklayamaz. Bir ajan hatalı bir değişiklik yaptığında, ona ne söylendiğini ve neden söylendiğini geriye dönük olarak incelemek mümkün olmaz.

Öte yandan bir dil sunucusu (language server) kesin ilişkileri bilir ama yalnızca açık olan projeyle sınırlıdır ve bir göreve göre sıralama yapmaz. BCE bu iki dünyanın arasında durur: dil sunucusu gibi kesin ve yeniden üretilebilir, embedding araması gibi repo çapında ve diller arası.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image6.png)

Embedding RAG, Language server, BGTS Context Engine

### 3. Temel ilke: Deterministik çizgi

BCE'nin tasarımındaki kararların büyük kısmı tek bir sert sınırdan türer: deterministik çizgi.

Bağlam paketini üreten her şey deterministiktir: ayrıştırma (parsing), graf inşası, graf genişletme, skorlama, daraltma ve paketleme. Aynı commit ve aynı görev girdiğinde aynı baytlar çıkar. Bu, yalnızca "modeli kullanmıyoruz" demekle sağlanmaz; sırasız iterasyon, saat bağımlılığı ve eşitlik durumlarının belirsiz çözülmesi de bilinçli olarak dışlanır. Örneğin:

- Her graf gezinme sorgusu ORDER BY symbol_id ile biter; PostgreSQL aksi halde sıra garantisi vermez.
- Skorlar sıralamadan önce altı ondalığa yuvarlanır ve adaylar (-score, symbol_id) anahtarıyla sıralanır. Böylece eşit skorları her seferinde aynı biçimde sembol kimliği çözer.
- Genişlemede her sınır (frontier) sıralı işlenir; çapalar sözlük sırasıyla verilir, önerilme sıralarının hiçbir ağırlığı yoktur.

Olasılıksal olan her şey ise çizginin dışındadır: paketi tüketen ajan ve isteğe bağlı olarak çapa öneren embedding sağlayıcısı. İkisi de hangi alt grafın inceleneceğini etkileyebilir; ama o alt grafın nasıl sıralanıp paketleneceğini etkilemez.

Bu kısıtın bedeli vardır, ama kazancı daha büyüktür: motor hata ayıklanabilir hale gelir. Bir ajan kötü bir değişiklik yaptığında, ona verilen bağlam birebir yeniden oynatılabilir, yanlış sembolü yüzeye çıkaran aşama tespit edilebilir ve o aşama düzeltilebilir. Olasılıksal bir getiriciyle aynı inceleme genellikle bir omuz silkmeyle biter. audit_log tablosunun anlamlı olmasının sebebi de budur: bir ajana tam olarak ne söylendiğini kaydetmek, ancak o söylenen şey yeniden üretilebiliyorsa değer taşır.

Çizgiyi bilinçli olarak geçen tek bir aşama vardır: sıralamadan sonra çalışan, varsayılan olarak kapalı ve açıkça işaretlenmiş bağlam seçici. Ona Bölüm 9'da ayrıntılı olarak döneceğiz.

### 4. Mimariye genel bakış

Motor, kesin olandan yoruma dayalı olana doğru ilerleyen üç katmandan oluşur:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image7.png)

Diyagram (4. Mimariye genel bakış)

Katman 1 tek bir doğru cevabı olan soruları yanıtlar: Bu sembol nerede tanımlı? Onu kim çağırıyor? Neyden kalıtım alıyor? Bunlar graf aramalarıdır; ya cevabı bulurlar ya da bulamadıklarını söylerler.

Katman 2 benzerlik sorularını yanıtlar: "Bu açıklamaya benzeyen semboller", "bu kod parçasına benzeyen kod". Hibrit arama, sözcüksel (lexical) ve semantik sonuçları sabit 0,55 / 0,45 oranında harmanlar ve küçük bir yapısal eşitlik bozucu ekler. Böylece adı birebir eşleşen bir sembol, yalnızca benzer okunan bir şey tarafından asla geride bırakılmaz.

Katman 3 ise bir ajanın gerçekten sorduğu soruyu yanıtlar: Bu görev verildiğinde neyi okumalıyım?Getirme hattı burada çalışır ve kullanıcı bazlı repo kapsamını uygulayan tek katman da budur.

Her katman, iki taşıma üzerinden sunulan tek bir Python fonksiyon kümesidir. REST üzerinden POST /v1/get-context-for-task ile MCP aracı get_context_for_task aynı fonksiyonu aynı argümanlarla çağırır ve aynı yükü döndürür. Aralarında kayma olabilecek ikinci bir gerçekleme yoktur.

Kaynak kod da bu ayrımı yansıtır:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image8.png)

Dizin, Sorumluluk

Proje yaklaşık 18 bin satır Python kaynağı, 35 test dosyasına yayılmış 350'ye yakın test ve ayrı bir ön yüz test paketiyle birlikte gelir. Python 3.11+ hedeflenir; MIT lisanslıdır.

### 5. İndeksleme: Repodan kod grafına

### 5.1 İki geçiş

Dosyalar arası referanslar tek bir dosyaya bakarak çözülemez. Bu yüzden indeksleme iki geçişte yapılır.

Birinci geçiş, dosya başına. Tree-sitter kaynak dosyayı ayrıştırır; dile özgü bir sağlayıcı (provider) ağacı dolaşır ve File, Symbol, Module, Route ve DesignNote düğümlerini, dosyadan çıkmadan görebildiği tüm kenarlarla birlikte üretir. Yerel olarak çözemediği referansları dosyanın import ve export bilgileriyle birlikte "çözülmemiş" olarak kaydeder. Bu parça (fragment) grafa yazılır ve bir embedding sağlayıcısı yapılandırılmışsa sembol metinleri vektörlenir.

İkinci geçiş, repo çapında. Linker, tüm parçaların export'larından global bir (paket, ad) → symbol_id tablosu kurar ve çözülmemiş referansları dosyalar arası CALLS, REFERENCES, INHERITS ve IMPLEMENTS kenarlarına dönüştürür. Bunu yaparken isimden tahmin yürütmez; her dosyanın gerçek import bağlarını sırasıyla izler:

- Açık bağlar (from m import x, adlandırılmış JS import'ları, Java tekil tip import'ları),
- Modül nesnesi bağları (import m, import * as m, Go paket import'ları; m.f() gibi nitelikli kullanım m modülü içinde çözülür),
- Aynı paket alanı (Go dizin paketi, Java/C# paket ve namespace'leri),
- Joker import'lar (from m import *, C# using), en son ve sıralı modül düzeninde.

Çözülemeyen bir referans için asla yer tutucu düğüm üretilmez; referans düşürülür. Ardından varsa SCIP çıktısı birleştirilir ve son olarak diller arası köprü çıkarıcısı çalışır.

### 5.2 Graf şeması

Graf altı düğüm etiketi ve dokuz kenar tipinden oluşur:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image9.png)

Kenar, Yön, Anlam

Getirme kalitesinin büyük bölümünü kenarlar üzerindeki iki özellik taşır:

- ref_kind: Referansın gerçekte ne yaptığı: define, write, read veya pass. Yalnızca bir kullanımın var olduğunu değil, nasıl bir kullanım olduğunu kaydeder.
- provenance: Kenarın nasıl kurulduğu. scip gerçek bir derleyici indeksinden gelir ve kesindir; treesitter sözdiziminden gelir ve neredeyse her zaman doğrudur; heuristic ise örüntü eşleşmesinden gelir ve iyi bir tahmindir. Skorlama bunlara farklı ağırlık verir ve her yanıt bu dağılımı raporlar; böylece bir cevabın ne kadarının tahmine dayandığı görülebilir.

### 5.3 Dil desteği

Python, JavaScript ve TypeScript yerleşik olarak gelir; Java, C# ve Go langs ekiyle kurulur. İsteğe bağlı sağlayıcılar yalnızca gramerleri başarıyla import edilebiliyorsa kaydedilir; eksik bir gramer hata değil, "bu dil indekslenmiyor" anlamına gelir.

Her dilin kendine has nüansları ciddiyetle ele alınmıştır. Birkaç örnek:

- TypeScript'te değeri arrow function olan bir const tanımı function olarak indekslenir; aksi halde modern kodun büyük kısmı bir sabit yığını gibi görünürdü. type takma adları ve enum'lar da birer semboldür, çünkü type WorkspaceStatus = 'SETUP' | 'ACTIVE' | … gibi bir birleşim tipi, durumla ilgili bir görevin cevabının yaşadığı yerdir.
- Java'da iç içe tipler kendi container zincirleriyle (LocalCache.Segment.lookup) ayrı semboller olur. Guava'daki 13 bin metodun 5.100'ü iç içe tiplerdeydi ve bu değişiklikten önce hiçbiri indekslenmiyordu.
- C#'ta #if / #else bölgelerindeki bildirimler indekslenir. Gramerin ayrıştıramadığı dosyalar (bir ifadeyi bölen #if, tanımlayıcı olarak kullanılan async, collection expression'lar…) bayt bayt onarılıp yeniden ayrıştırılır; onarılmış ağaç yalnızca daha az hata içeriyorsa kullanılır ve konumlar her zaman orijinal kaynaktan okunur. EF Core'da sembolsüz dosya sayısı 64'ten 9'a indi, PowerShell'de ise 8.900 yeni sembol ortaya çıktı.
- Go'da kalıtım olmadığı için INHERITS / IMPLEMENTS üretilmez; arayüz karşılama yapısaldır ve iki tarafın sözdiziminde de görünmez.

Her sembol, en fazla 24.000 karakterle sınırlanmış tam bildirim metnini arama metni olarak taşır. Bu metin graf özelliği olarak saklanmaz; tam metin arama dokümanını ve parçalanmış embedding'leri besler. Böylece bir bileşenin altmışıncı satırındaki bir toast mesajı da hem sözcüksel hem semantik aramayla bulunabilir.

Yeni bir dil eklemek yalnızca iki dosyaya dokunmayı gerektirir: LanguageProvider'dan türeyen bir sağlayıcı sınıfı ve kayıt defterine (registry) bir satır. Çıkarıcı, linker, indeksleyici ve upserter kayıt defterini soyut olarak tüketir.

### 5.4 HTTP route'ları, tasarım notları ve diller arası köprüler

Route çıkarımı, bir hata raporundaki yolun doğrudan handler'a çözülmesini sağlar. FastAPI, Flask, Express, NestJS, Spring, ASP.NET ve Gin tanınır. Handler'ın dekoratörün yanında adlandırılmış bir bildirim olduğu çerçevelerde ROUTES_TO kenarı route'u handler'a bağlar. Böylece POST /api/v1/meetings/{id}/webhook gibi bir ifade, görev metninde geçtiği anda ilgili fonksiyona ulaşır.

Tasarım notları: WHY, NOTE, HACK, XXX, TODO veya FIXME ile başlayan yorumlar DesignNote düğümüne dönüşür ve en yakın sembole EXPLAINS kenarıyla bağlanır. Bunlardan gerçekten önemli olanı WHY:'dır. Kodun neden öyle olduğunu açıklayan bir yorum, grafın yanıtlayamayacağı soruyu yanıtlar; bağlam paketine taşınması da bir ajanın bilinçli bir geçici çözümü "düzeltmesini" engeller.

Diller arası köprüler: React Native ve Expo, tek bir mantıksal çağrıyı iki dile böler. JavaScript NativeModules.Foo.bar() çağırır, bar ise Objective-C, Swift veya Kotlin'de tanımlıdır. Hiçbir tekil ayrıştırıcı iki tarafı birden görmez; dolayısıyla çağrı grafında tam da ilginç hataların yaşadığı yerde bir delik oluşur. Köprü çıkarıcısı RCT_EXPORT_METHOD, @objc, Expo'nun Function("name") / AsyncFunction("name") tanımları ve olay kanalları gibi örüntüleri tarar ve iki uç da zaten sembol olarak mevcutsa provenance: heuristic ile bir CALLS kenarı üretir. Bunlar çözümleme değil isim eşleşmesi olduğu için en düşük güven ağırlığını alırlar.

### 5.5 SCIP ile kesinlik yükseltmesi

scip-python veya scip-typescript PATH üzerindeyse indeksleyici bunları çalıştırır ve sonucu birleştirir. SCIP gerçek bir tip denetleyicisinden gelir; dolayısıyla sözdiziminin çözemediğini çözer: dokuz farklı process fonksiyonu olan bir kod tabanında hangisinin gerçekten çağrıldığı gibi. Etkisi iki yönlüdür: ayrıştırıcının zaten bulduğu kenarların kaynağı treesitter'dan scip'e yükselir (skoru artar) ve ayrıştırıcının hiç bulamadığı belirsizliksiz eşleşmeler için yeni kenarlar eklenir. SCIP bir zorunluluk değil, bir kalite yükseltmesidir.

### 5.6 Sembol kimliği

Bir sembolün kimliği, dil, paket, namespace, tür, ad ve imzanın BLAKE2b özetinden türetilir:

{dil}::{paket}::{namespace}::{ad}#{blake2b-16}

Özet, dosya yolunu ve satır numarasını bilinçli olarak içermez. Sonuç olarak bir fonksiyon dosyalar arasında taşındığında, üstündeki kod kaydığında veya yeniden biçimlendirildiğinde aynı kimliği korur; görev geçmişi ve embedding'ler geçerliliğini sürdürür. İmza özete dahil olduğu için overload'lar birbirinden ayrışır. Yeniden adlandırma ise yeni bir kimlik üretir; bu da doğru davranıştır, çünkü adı değişen bir fonksiyon artık farklı bir semboldür ve ona eski geçmişi sessizce taşımak yanlış olurdu.

Okunabilir ön ek hata ayıklamaya yardım eder; container'ı olan bir üyenin kimliği, container'ının kimliğinden türetilebilir bir ön ek taşır. Skorlama motoru bu özelliği, üyeleri zaten sıralanmış container'ları tespit etmek için kullanır (Bölüm 7.4).

### 5.7 Artımlı yeniden indeksleme

Yeniden indeksleme, son indekslenen commit ile hedef arasındaki git diff --name-status çıktısıyla yönlendirilir. Değişen her dosyanın alt grafı ve embedding'leri silinip yeniden kurulur. Değişmeyen dosyalar ise yalnızca bellekte yeniden ayrıştırılır, çünkü linker'ın değişen dosyalara işaret eden kenarları yeniden bağlayabilmesi için global isim tablosuna ihtiyacı vardır. Kenar yazma işlemleri MERGE ile yapıldığından idempotenttir; değişmemiş bir dosya üzerinde indekslemeyi tekrar çalıştırmak yeni düğüm üretmez.

Bu yapı, bce reindex komutunu bir post-merge kancasına ya da varsayılan dal üzerindeki bir CI adımına koymayı doğal hale getirir. İndeksin çalışma ağacının gerisinde kalması ise her yanıtta commit_mismatch olarak görünür.

İndeksleyici ayrıca son 500 commit içinde her dosyaya dokunan commit sayısını (file_churn) kaydeder. Bu, yalnızca indekslenen commit'in atalarından hesaplanır; dolayısıyla bir PR'ın taban commit'inde alınmış bir anlık görüntü, PR'ın kendi commit'lerini asla görmez. Bu ayrıntı, ölçümlerin geleceği sızdırmaması için kritiktir.

### 6. Depolama: Tek PostgreSQL, tek pg_dump

Projenin en önemli operasyonel kararı, her şeyin tek bir PostgreSQL 16 örneğinde yaşamasıdır:

- Apache AGE property graph'ı saklar ve Cypher sorgularını yanıtlar.
- pgvector sembol ve dosya embedding'lerini HNSW indeksiyle saklar.
- Düz tablolar repoları, görevleri, görev geçmişini, kullanıcıları, kapsamları, denetim kaydını ve iş kuyruğunu tutar.
- Üretilmiş bir tsvector sütunu (symbol_fts) sözcüksel aramayı sağlar; pg_trgm GIN indeksleri ise sembol gövdeleri içinde parça aramayı bir indeks sorgusuna dönüştürür.

Alternatif, yani bir graf veritabanının yanında bir vektör veritabanı ve onların yanında bir PostgreSQL, çalıştırılacak üç sistem, üç ayrı yedekleme hikâyesi ve bir sembol ile onun embedding'i arasında hiçbir işlemsel (transactional) sınır olmaması demektir. BCE'de tek bir bağlantı bir Cypher gezinmesini, bir vektör aramasını ve bir SQL birleştirmesini yanıtlar; tek bir pg_dump tüm indeksi yakalar.

### 6.1 Tam metin dokümanının tasarımı

symbol_fts üzerindeki ağırlıklı doküman, getirme kalitesinin sessiz kahramanlarından biridir

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image10.png)

Ağırlık, İçerik

Burada english yerine simple yapılandırması bilinçli olarak seçilmiştir: tanımlayıcılar İngilizce kelime değildir ve getUserById'yi köklemenin kimseye faydası yoktur. Sıralama ts_rank ile uzunluk normalizasyonu kullanılarak yapılır; böylece 300 satırlık bir bileşen, 3 satırlık bir yardımcıyı salt kelime sayısıyla geçemez.

### 6.2 Parçalanmış embedding'ler

Bir embedding penceresinden (2.000 karakter, 200 karakter örtüşme, en fazla 12 pencere) uzun bir sembol birden çok satır olarak saklanır. Her parça aynı başlığı (ad, tür, yol, imza, docstring) ve gövdenin bir penceresini taşır. En yakın komşu araması bu satırları, sembolün en iyi parçasının sırasında tek bir sembole indirger. Her satır, kendisini üreten modeli <model>-<boyut> biçiminde kaydeder; farklı modellerin vektörleri karşılaştırılabilir olmadığı için bu, sağlayıcı değiştirildiğinde bayat bir indeksin tespit edilmesini sağlar.

### 6.3 Gerçek ölçekte öğrenilen performans dersleri

Projenin değişiklik geçmişi, Apache AGE'yi büyük repolarda çalıştırmanın öğretici tuzaklarla dolu olduğunu gösteriyor. Üç tanesi özellikle dikkat çekici:

- Etiketsiz MATCH. Kenar yazımları uç noktaları etiket belirtmeden eşleştiriyordu (MATCH (a {gid}), (b {gid})). AGE bunu tüm etiket tabloları üzerinde bir Append olarak planlar; 20 bin sembollük bir grafta kenar başına 30–50 ms'ye mal oluyordu (netty: 74 dakika). Çözüm, uç nokta etiketlerini parçanın kendi düğümlerinden ya da kenar tipinden türetmekti (CALLS her zaman Symbol → Symbol'dür). Kenar başına maliyet ~2,4 ms'ye indi.
- Genel (generic) planlar. psycopg beş çalıştırmadan sonra ifadeyi sunucu tarafında hazırlar ve PostgreSQL o andaki satır tahminlerine göre genel bir plana yerleşir. Bu plan, graf henüz yüz düğüm içerirken seçiliyor ve indeksleme işlemi içinde bir daha hiç yeniden planlanmıyordu. Bağlantılar artık plan_cache_mode = force_custom_plan ile çalışıyor: 6.000 sembol 170 saniye yerine 49 saniyede indeksleniyor.
- Bütün kenar tablosunu sıralayan merge join. Etiket tabloları tek bir indeksleme işlemi içinde dolduğu için istatistikleri yoktu ve AGE'nin @> operatörü sabit seçicilik varsayıyordu. Planlayıcı, kenar varlık kontrolünü her kenar için tüm kenar tablosunun sıralı taraması ve sıralamasıyla yapıyordu; netty'de bu 372 GB geçici dosya demekti. İndeksleme süresince oturum bazında enable_mergejoin ve enable_hashjoin kapatılarak kontrol tek bir indeks sorgusuna indirildi ve hiç geçici dosya yazılmaz hale geldi.

Okuma tarafında da benzer bir ders var: WHERE s.symbol_id IN $ids biçimi AGE'de taramaya dönüşürken, UNWIND $ids AS sid MATCH (s:Symbol {symbol_id: sid}) biçimi her kimlik için indekse gider ve yaklaşık on kat daha hızlıdır. Derece ve çağrı bayrakları ise Cypher yerine doğrudan kenar etiket tablolarından SQL ile okunur: 400 sembollük bir havuz için 15–30 saniyeden 20–40 milisaniyeye.

### 7. Getirme hattı: Bir cümleden sıralı bir sembol kümesine

Getirme hattı, "toplantı webhook'undaki login timeout'u düzelt" gibi bir cümleyi, her birine bir gerekçe eklenmiş küçük ve sıralı bir sembol kümesine dönüştürür. Sıralama, bir graf üzerinde aritmetiktir:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image11.png)

Diyagram (7. Getirme hattı: Bir cümleden sıralı bir sembol kümesine)

### 7.1 Çapalar: Yedi bağımsız tanık

Bir çapa, motorun görevin hakkında olduğundan emin olduğu bir semboldür. Yedi kaynak birbirinden bağımsız olarak çapa önerir ve her çapa, onu hangi kaynakların önerdiğini ve her birinin ne kadar kanıt getirdiğini [0, 1] aralığında bir güç değeri olarak hatırlar.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image12.png)

Kaynak, Neye bakar, Tavan güç

Güçler bir noisy-OR ile birleştirilir:

güç = 1 − ∏ᵢ (1 − sᵢ)

Sözcüksel 0,5 ile semantik 0,6 birleşince 0,8 olur; açık bir isim diğerlerinden bağımsız olarak 1,0 verir; tek başına kalmış yaygın bir terim ise 0,2 civarında kalır. Bir sembolü zirveye taşıyan şey tanıkların uyuşmasıdır; tek bir zayıf oy aşağı akışta geçilebilir.

Bu tablonun arkasında, sahada karşılaşılan hatalardan damıtılmış bir dizi kural var:

Bir açık isim ancak spesifik olduğu kadar değerlidir. MongoDbService tek bir şeyi adlandırır. Content veya ExternalId ise bir düzine ilgisiz DTO özelliğini. Her birini kesinlik olarak kabul etmek, her biri kendi çağıranlarını ve dosyasını genişleten bir düzine tam güçlü çapa demekti. Bu yüzden açık kanıt √eşleşme_sayısı'na bölünür ve sekizden fazla sembolle eşleşen bir isim tamamen düşürülür. MongoDbService.CancelAsync gibi nitelikli bir referans o tipin içinde çözülür ve çıplak kuyruk ayrıca önerilmez; yazar repodaki diğer üç CancelAsync'ten bahsetmemiştir.

Hangi kelimeler sayılır? Görev metni Unicode farkındalıklı bir kelime örüntüsüyle bölünür ("toplantı" tek kelimedir; İ, i'ye katlanır) ve İngilizce ile Türkçe işlev kelimelerinin yanı sıra hata raporu dolgu kelimelerinden ("fix", "missing", "check", "proper"…) oluşan bir durak listesinden geçirilir. Bunun ötesinde küçük bir Türkçe → İngilizce genel ürün sözlüğü vardır: "toplantı" → meeting, "takvim" → calendar, "bildirim" → notification. Ekli biçimler bir Türkçe ek zinciri kontrolüyle tanınır; böylece serial ya da listener gibi kelimelere dokunulmaz. Gerekçe basittir: Türkçe konuşan bir ekip görevi Türkçe, tanımlayıcıları ise İngilizce yazar. Görev metnindeki URL'ler hiçbir terim üretmez; bir PR bağlantısı her göreve https github com pull eklemiyordu artık.

Sözcüksel kanal, terim başına isabet değil kapsama ölçer. Bir sembolün sözcüksel gücü, görevin içerik terimlerinden kaçını kapsadığına, terimin nadirliğine ve terimin nerede eşleştiğine bağlıdır: tam addaki bir isabet 1,0, ad parçalarında 0,9, container ya da yol kelimelerinde 0,6, yalnızca imza, docstring veya gövdede 0,35 sayılır. Bu katmanlama, tüm gövdeler dokümana girdikten sonra zorunlu hale geldi; aksi halde uzun bir bileşen, herhangi bir görevin kelimelerinin yarısıyla bir yerlerde eşleşip o kelimelerle adlandırılmış yardımcıları geride bırakıyordu.

İsimler şeyi bulur, kullanım ise şeyi kullanan yerleri. "Ham localStorage anahtarını okuyan her yer" diyen bir görev, localStorage adlı bir sembol hakkında değildir; o kelimeyi gövdesinde barındıran otuz bileşen hakkındadır ve hiçbiri onun adını taşımaz. usage kaynağı görevin kendi kod parçalarını trigram indeksiyle sembol gövdelerinde arar; gücü eşleşme sayısıyla düşer:

s(usage) = 0,8 · √(1 − eşleşme / havuz)

14 sembolde geçen 'token' her biri için güçlü kanıttır; 267 sembolde geçen projectId gürültüdür ve düşürülür.

Grafın göremediği bağlantıyı veri üzerinden izlemek. impact kaynağı, baskın çapaların (birleşik gücü ≥ 0,9 olan en güçlü beş çapa) çağıranlarına bir sekmelik bozulmuş komşu muamelesi yerine kendi çapa kanıtlarını verir. Daha ilginci, aralarında hiçbir kenar olmayan sembolleri de bağlar: ['monitoring-executions'] anahtarını geçersiz kılan bir yardımcı ile o anahtar altında sorgu kaydeden hook yalnızca bir string paylaşır. Baskın çapanın gövdesindeki ad alanlı literaller (ayırıcı, rakam ya da camelCase kambur içerenler) diğer gövdelerde aranır. Kırk tarih biçimlendiricinin alıntıladığı 'en-US' bir gelenektir ve hiçbir şey önermez; üç kayıt noktasının alıntıladığı bir sorgu anahtarı ise her birini önerir.

Testler çapa değildir. Test dosyalarındaki semboller sözcüksel, semantik, usage ve impact kaynaklarınca atlanır. Önemli bir ayrıntı: bu filtre sorgudan sonra değil, sorgunun içinde (AND NOT is_test) uygulanır. Sembollerinin %60'ı test olan Guava veya EF Core gibi repolarda sonradan filtreleme, terim havuzunu test metotlarıyla dolduruyor, üretim sembollerini hiç havuza sokmuyor ve her terimi doymuş gibi gösteriyordu.

### 7.2 Genişletme: Sabit şekilli bir yürüyüş

Her çapadan, görevden bağımsız sabit bir şablon yürütülür. Şeklin görevle değişmemesi, genişlemeyi yeniden üretilebilir kılan şeydir.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image13.png)

Yön, Kenar, Derinlik

Çağıranların iki, çağrılanların bir sekme gitmesi bilinçlidir: bir fonksiyonu değiştirdiğinizde bozulan kod onun yukarısındadır ve genellikle beklediğinizden bir seviye daha uzaktadır. Fonksiyonun çağırdıkları ise çoğunlukla zaten elinizde olan gövdeden okunabilecek ayrıntılardır. IMPORTS burada bilinçli olarak gezilmez; dosya seviyesinde bir kenar olduğu için önemli sembolleri değil, bütün modülleri içeri çekerdi.

İki ek kural genişlemeyi hem kaliteli hem ucuz tutar:

- Yalnızca iyi kanıtlanmış çapalar yürütülür. Genişleme, gücü ≥ 0,3 olan çapalardan ve bunların en güçlü 20 tanesinden yapılır. Daha zayıf çapalar havuzda mesafe 0'da kalır ama komşuluklarını içeri sürüklemez. Bu bir filtre değil, bir bütçedir.
- Kanıt yürüyüşle birlikte taşınır. Her düğüm, kendisine ulaşan en iyi çapanın gücünün her sekmede 0,6 ile çarpılmış halini (source_strength) kaydeder. Modelin bir numaralı isabetinin komşusu 0,54 taşırken, atılabilir bir 0,2'lik sözcüksel isabetin komşusu 0,12 taşır.

Her sınır tek bir sorgudur; düğüm başına sorgu yapılmaz. Bu sayede uzun bir PR açıklaması ~48 saniyeden 2 saniyenin altına indi.

### 7.3 Öznitelikler

Genişleme sırasında bulunan her düğüm şu özniteliklere sahip bir aday olur: graf mesafesi, derece, referans türü (define / write / read / pass), kenar kaynağı, yaprak olup olmadığı, görev sinyali (sembolün adının veya tüm anlamlı parçalarının görevin içerik kelimeleri arasında geçip geçmediği; kısmi eşleşmeye kısmi kredi), çapa gücü, ulaşan kanıt gücü, sembol türü, test olup olmadığı, embedding modelinin listesindeki sırası ve dosyasının churn değeri.

Burada altı çizilmesi gereken bir nokta var: embedding modeli skora yalnızca sırasıyla katkıda bulunur, asla bir benzerlik sayısıyla değil. Benzerlik sayısı modelin adayları yeniden sıralamasına izin verirdi; bu da motorun devretmediği tek şeydir.

### 7.4 Skorlama: Sürümlenmiş bir formül

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image14.png)

Diyagram (7.4 Skorlama: Sürümlenmiş bir formül)

Alt ağırlıklar şöyledir:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image15.png)

ref_kind, Ağırlık, provenance, Ağırlık, Tür önceliği, Ağırlık

Ağırlıklar src/bce/core/scoring/engine.py içindeki ScoreWeights veri sınıfında yaşar ve her yanıta scoring-v4 olarak damgalanır. Bunlar çalışma zamanı yapılandırması değildir; sürümlenmiş bir sabittir. Çünkü bir bağlam paketi yalnızca aynı ağırlıklarla üretilmiş başka bir paketle karşılaştırılabilir. Ağırlıkları değiştiren bir PR, SCORE_WEIGHTS_VERSION'ı da değiştirmeli ve bce bench üzerindeki etkisini göstermelidir.

Formüldeki her terimin arkasında ölçülmüş bir gerekçe var:

- Referans türü en ağır terimdir. Bir değeri tanımlayan ya da yazan yer, hatanın genellikle yaşadığı yerdir; yalnızca okuyan ya da aktaran yer çoğu zaman aşağı akıştır. define'ı pass'ten beş kat ağır tutmak, geniş çapta okunan bir sabitin onu ayarlayan tek fonksiyonu gölgede bırakmasını engeller.
- Bilinmeyen, bilineni asla geçemez. Bir CALLS ya da kardeş kenarıyla ulaşılan adayın referans türü ve kenar kaynağı yoktur; en zayıf bilinen değerler gibi skorlanır. Kanıt yokluğu ödüllendirilmez.
- Çapa bonusu kanıtla ölçeklenir. İlk sürüm her çapaya düz +5,0 veriyordu. Doğal dilde yazılmış görevler düzinelerce tek kelimelik çapa üretince bu taban havuzu iki ayrık banda bölüyordu: her çapa 7,3'ün üzerinde, her komşu 4,9'un altında. Sonuç, kanıttan bağımsız olarak en yüksek dereceli çapalardı ve gerçekten değişmesi gereken fonksiyonlar 25. ile 478. sıralar arasında kalıyordu.
- Yakınlık ve referans türü kanıtla ölçeklenir. Content gibi jenerik bir isimden çıkan bir define kenarı, modelin en iyi isabetinden çıkan bir define kenarıyla aynı değerde olmamalıdır.
- Tür önceliği değişiklik noktasını işaret eder. Bir görevin tarif ettiği değişiklik neredeyse her zaman bir metot veya fonksiyon gövdesine düşer; sınıflar, arayüzler ve constructor'lar o gövdenin yaşadığı yerdir. Bu terim olmadan dönen sembollerin %28'i container'dı; yeniden oynatılan diff'lerde ise bu oran %10'du. Ek olarak, ilk 2N içinde bir üyesi bulunan container'dan 1,5 puan düşülür: üyelerinden biri zaten sıralanmışsa sınıf aynı bilgiyi tekrarlar ve bir slot harcar.
- Merkezîlik log ölçeklidir ve derece 20'de doyar. Bir logger ya da temel sınıf her şeye dokunur ve hiçbir şeyi açıklamaz. Ağırlık bilinçli olarak küçüktür (0,6).
- Churn önceliği canlı kodu tortudan ayırır: diff'ler, daha önce diff'lerin düştüğü yerlere düşer.

Örnek bir hesap. Gücü 0,9 olan, adı görevde geçen, derecesi 4 olan, modelin bir numaralı isabeti olan ve dosyasına son pencerede 5 commit dokunmuş bir metot çapasını düşünelim (mesafe 0; referans türü ve kenar kaynağı bilinmiyor):

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image16.png)

Terim, Hesap, Katkı

Aynı çapadan bir define referansıyla, tree-sitter kenarı üzerinden bir sekmede ulaşılan, derecesi 2 olan ve adı görevde geçmeyen bir metot ise yaklaşık 5,47 alır (kanıt 0,9 · 0,6 = 0,54). Fark büyüktür ama aşılamaz değildir: komşunun adı görevde geçseydi, 2,5 puanlık görev sinyaliyle zayıf bir çapayı rahatlıkla geride bırakırdı. Formülün tasarım amacı tam da budur.

### 7.5 Kapsam filtresi ve daraltma

Kapsam filtresi skorlamadan sonra, daraltmadan önce çalışır. Bu sıralama önemlidir: beş reponun ikisine erişimi olan bir çağıran, global ilk sekizden geriye kalanları değil, kendi en iyi sekiz sonucunu alır.

Daraltma, cevabı her seferinde bir slot olmak üzere iki akıştan inşa eder: embedding modelinin sıraları ve motorun skor sıralaması. Ortaya çıkan liste K-monotoniktir: narrow(havuz, n), tam olarak narrow(havuz, n + 1)'in ilk n elemanıdır. Yani daha uzun bir liste istemek, kısa listenin içerdiği bir sembolü asla kaybettirmez ve K=20'lik bir koşu K=10'a kesilebilir. Önceki orantılı bütçeler bu özelliğe sahip değildi; 40 PR'lık yeniden oynatmada bir PR, K=10'da %100'den K=20'de %50 recall'a düşmüştü.

i. slot şu kurallarla doldurulur:

- Profilin koruma (guard) sıraları içindeyken modelin bir sonraki sırası alınır.
- Birinci pozisyon her zaman modelin bir numarasıdır; model, isimleri değil anlamı okuyan tek kanaldır ve MRR burada belirlenir.
- Şimdiye kadarki seçimlerin i · rezerv_payı'ndan azı modele aitse, modelin bir sonraki sırası alınır. Motorun seçtiği ama modelin de sıraladığı bir aday bu paya sayılır; iki kanalın uzlaştığı bir seçim, rezervin zaten korumak istediği şeydir.
- Aksi halde motorun en iyi adayı alınır; ancak çeşitlilik sınırları uygulanır: ilk on slotta dosya başına ⌈i · 0,6⌉ sembol, sonrasında her on slotta bir fazlası; aynı container'ın üyeleri için ⌈i · 0,3⌉; container'lar için toplamda ⌈i · 0,2⌉.

Dosya sınırının on slottan sonra incelmesi, uzun bir cevabın ne için istendiğini yansıtır: kimse elli sembolü userPreferences.ts'nin on dördüncü yardımcısını okumak için istemez; bir localStorage anahtarına dokunulan her yeri görmek için ister.

Rezerv payı ve koruma değeri getirme profilinden gelir ve embedding modeline göre otomatik seçilir. Voyage profili pay 0,5 ve koruma 0 ile çalışır. Jina-code ise doğru isabetlerini 1–15 arası sıralara yaydığı için 10'luk bir korumaya ihtiyaç duyar: PR yeniden oynatmasında recall@20 %35,7'den %38,2'ye, holdout üzerinde %27,8'den %34,9'a çıktı. Profil değişikliği saklanan veriyi değiştirmez; yeniden indeksleme değil, yalnızca sorgu tarafının yeniden çalıştırılmasıdır.

### 7.6 Paketleme: Uzaklaştıkça ucuzlayan detay

Seçilen adaylar varsayılan 1.500 token'lık bir bütçeye (dört karakter ≈ bir token) yerleştirilir. Detay seviyesi mesafeyle azalır:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image17.png)

Mesafe, Detay, İçerik

Gerçekten ilgili yirmi sembolün 1.500 token'a sığması, yani bir ajanın her turda taşıyabileceği kadar kısa bir paket elde edilmesi bu sayede mümkün olur. Bütçe bilinçli olarak kısa tutulmuştur, çünkü ajan bağlamı her turda yeniden gönderir: 4.000 token'lık bütçe, ek bir kazanç sağlamadan her turda ~4 bin token taşıyordu.

Gövdeler ve docstring'ler genişleme veya skorlama sırasında değil, yalnızca seçilen adaylar için yüklenir. Bir öğe sığmazsa reference seviyesinde yeniden denenir; yine sığmazsa atlanır ve yürüyüş devam eder. Böylece en üstteki büyük bir fonksiyon, altındaki her şeyi aç bırakamaz. Yanıt used_tokens, included ve skipped alanlarını raporlar; çağıran "başka bir şey yoktu" ile "vardı ama sığmadı" arasındaki farkı görebilir. Her öğe ayrıca file_id ve line taşır; ajan sembolü aramak yerine dosyayı doğrudan açar.

### 7.7 Kapsama ve güven

Her yanıt bir kapsama (coverage) bloğu taşır. Bu blok, bir ajanın paketi güvenip güvenmemeye karar verebilmesi ve bir insanın bir cevabın neden zayıf kaldığını anlayabilmesi için vardır: kaç kaynağın katkı verdiği, kaç güçlü ve doğrulanmış çapa olduğu, seçimin ne kadarının zayıf tek kaynaklı çapalardan veya test kodundan oluştuğu, adayların ne kadarının bir çapaya bağlı olmadığı, birinci ile ikinci arasındaki skor farkı, bir hub sembolün sızıp sızmadığı (touches_god_node) ve indeksin istenen commit'in gerisinde olup olmadığı (commit_mismatch).

Bunlar tek bir etikete indirgenir:

- low: Hiçbir çapa 0,35 gücüne ulaşmıyor ve hiçbiri doğrulanmamış; ya da seçimin yarısından fazlası zayıf tek kaynaklı çapa veya test; ya da tek kaynak var ve fark 0,5'in altında veya adayların yarısından fazlası yetim.
- high: Birinci aday güvenilir bir çapa, seçimin en az %60'ı güvenilir çapalar ya da doğrudan komşuları, en fazla dörtte biri zayıf çapa ve birinci ikinciden en az 0,5 önde.
- medium: Geri kalan her şey.

low bir başarısızlık değildir. Motorun bir şey bulduğunu ama doğrulayamadığını söylemesidir; bu da tam olarak bir ajanın düzenlemeye başlamak yerine bir soru sorması veya görev tarifini genişletmesi gereken andır.

Örnek bir yanıt şöyle görünür:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image18.png)

Diyagram (7.7 Kapsama ve güven)

Bu yanıtta bir vektör veritabanının veremeyeceği üç şey vardır: motorun neden oraya baktığını ve hangi bağımsız kaynakların hemfikir olduğunu söyleyen anchors; bir güven raporu olan coverage; ve graf mesafesiyle azalan detail_level.

### 8. Embedding'in yeri

Embedding, BCE'de bir tohumdur, cevap değil. Yalnızca grafın tanımadığı bir görev metninde giriş noktası bulmak için kullanılır. Üç sağlayıcı gelir:

- hashing (varsayılan): Token özetleri üzerinde deterministik aritmetik. Her token BLAKE2b ile özetlenir, özetin bir kısmı vektör boyutunda bir indeks, bir biti de işaret belirler; sonuç birim küreye normalize edilir. API anahtarı yoktur, ağ yoktur, makineler arasında bayt bayt aynıdır. Semantik recall'u gerçek bir modelden zayıftır, ama motorun kutudan çıktığı gibi çalışmasını ve ölçümlerin tekrarlanabilir olmasını sağlar.
- voyage: Voyage AI'ın barındırılan voyage-code-3 / voyage-code-4 modelleri (1.024 boyut).
- openai: OpenAI uyumlu /v1/embeddings protokolünü konuşan herhangi bir sunucu (vLLM, TEI, Ollama). jina-code-embeddings-1.5b gibi açık bir model bu yolla kurum içinde çalışır; jina-code ailesinin talimat önekleri otomatik eklenir, istenenden geniş vektörler Matryoshka yöntemiyle kırpılıp yeniden normalize edilir.

Burada dikkat çekici bir tasarım tercihi var: Voyage seçilip anahtar verilmediğinde motor sessizce hashing'e düşmez, açık bir yapılandırma hatası verir. Çünkü en yakın komşu araması saklanan model sütununu filtrelemez; sorgu anında yerine konmuş bir kodlayıcı Voyage vektörleriyle karşılaştırılır ve bir hata yerine "kendinden emin saçmalık" döndürürdü.

Sorgu anında embedding servisi yanıt vermezse (varsayılan 10 saniye, iki deneme), arama araçları sözcüksel ve yapısal çapalarla yanıt verir ve bunu coverage içinde düşen güven olarak gösterir. Ajan, MCP zaman aşımını geçecek kadar bekletilmez.

### 9. Bağlam seçici: Çizgiyi bilinçli olarak geçmek

### 9.1 Problem

Uzun bir cevap, bir değişikliğin dokunduğu şeylerin daha fazlasını bulur, ama onları gömer. 12 repo ve 6 dilden 600 birleştirilmiş değişiklik üzerinde K=50'lik bir cevap, değişen dosyaların %94,4'ünü buldu (K=20'de %91,0); ancak bunları ortalama ~20 farklı dosyaya yaydı ve bunların ~18'i gürültüydü. Motorun kendi sıralaması birinci dosyada görevlerin %75'inde haklıydı, ama çok dosyalı bir değişikliğin ikinci ve üçüncü dosyası ilk 50 içinde herhangi bir yerde olabiliyordu. Ajana 50 sembolün tamamını vermek, motorun tasarruf etmek için var olduğu token bütçesini harcamak demekti.

### 9.2 Yaklaşım

Bağlam seçici, daraltmadan sonra K sıralı aday üzerinde çalışır ve bir System One karar modelineparalel olarak iki istek gönderir:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image19.png)

İstek, Soru, Tip, Cevap

Karar modeli üretilmiş metin değil, her soru için bir olasılık içeren tipli bir cevap döndürür; ayrıştırılacak bir şey ve ödenecek çıktı token'ı yoktur. Sabit bir politika cevapları katmanlara dönüştürür:

- full: Motorun birinci dosyası ve p ≥ 0,5 olan her dosya. Sembolleri normal detayda paketlenir; 1'in altında skorlananlar (ilgisiz) düşer, ama her dosya en iyi sembolünü korur.
- stub: p ≥ 0,05 olan dosyalar, toplamda en fazla 12 dosya. Her biri yol - N aday sembol: a, b, c biçiminde ~40 token'lık tek bir satır olur. Ajan dosyanın var olduğunu bilir ve gerekirse açabilir.
- Geri kalan her şey atılır.

Full dosyalar round-robin sırayla dizilir: her full dosyanın en iyi sembolü, herhangi bir dosyanın ikinci sembolünden önce gelir. Böylece dar bir bütçe bütün dosyaları değil derinliği keser. Stub'ların maliyeti ise yürüyüşten önce bütçeden ayrılır (en fazla %40).

### 9.3 Modeller

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image20.png)

BCE_SELECTOR, Model, Çalıştığı yer, Dosya recall @50, Token, Gecikme

Jev referans modeldir; eşikler onun olasılıkları üzerinde uydurulmuştur. Ancak görev metni ve aday sembollerin 240 karakterlik alıntıları kurum sınırının dışına çıkar; bu, motorun sorgu anında üçüncü bir tarafa kaynak kod gönderdiği tek yerdir. decider-4b, Jev'e en yakın açık ağırlıklı alternatiftir: 1,2 puan daha düşük recall'a karşılık hiçbir şey dışarı çıkmaz ve sorgu başına fatura yoktur.

### 9.4 Ölçülen etki ve seçim süreci

600 görev üzerinde K=50'de Jev ile: ajana verilen token 8.310'dan 1.714'e (%−79), listelenen farklı dosya sayısı 20,5'ten 10,9'a (2,3 full + 8,5 stub), dosya recall'u 94,4'ten 93,4'e; ilk 20 sembol içindeki recall ise 91,0'dan 92,5'e yükseldi. Birinci dosyanın doğru olduğu görev sayısı 450'den 493'e, MRR 0,826'dan 0,858'e çıktı. Seçici sorguya ~575 ms ekledi, ama sorgunun tamamı yine de hızlandı, çünkü daha az gövde yükleniyor ve işleniyordu.

Politika keyfi seçilmedi. Önbelleğe alınmış K=50 cevapları çevrimdışı yeniden oynatılarak, ağır ve çok dosyalı görevlere ağırlık verilmiş 50 görevlik bir örneklem üzerinde ilk beş dosyanın recall'u karşılaştırıldı: motor sırası 64,7; skor farkı sezgiseli 64,4; Voyage rerank-2.5 dosyalar üzerinde 64,0, semboller üzerinde 69,1; Jev noul 75,1; Jev score 75,6. Belirleyici fark şuydu: cross-encoder skorları kalibre edilmiş olasılıklar değildir, dolayısıyla görevler arasında tek bir eşik çalışmaz. Jev'in olasılıkları kalibredir; bir görevin kaç dosya alacağına sabit bir N yerine bir eşiğin karar vermesine izin veren de budur.

### 9.5 Başarısızlık davranışı ve determinizm sınırı

Seçici asla bir aday eklemez; yalnızca motorun sıraladıkları arasında düşürür, indirger ve yeniden sıralar. Hata veya zaman aşımında sıralanmış öğeler değiştirilmeden paketlenir ve coverage.selector.status "error" olur; yalnızca sembol isteği başarısız olursa dosyalar sembol budaması olmadan katmanlanır ("partial"). Kısacası seçici her durumda fail-open'dır.

Jev bit düzeyinde deterministik değildir: aynı isteği tekrar göndermek olasılıkları ortalama ~0,01, en fazla 0,14 kaydırır. 50 görev × 3 koşuda birinci dosya görevlerin %96–98'inde, full katman kümesi ~%90'ında aynı kaldı; stub sınırı görevlerin %20–40'ında bir iki dosya oynadı, ama oynayan 29 dosyanın hiçbiri değişikliğin dokunduğu bir dosya değildi. Recall üç koşu arasında en fazla 0,6 puan değişti. Model bu yüzden sabitlenmiştir (typesafe/jev-1.13) ve BCE_SELECTOR=off ya da bce context --no-select, bayt bayt aynı paketi geri getirir.

Güven etiketi (confidence) seçici çalışmadan önce, sıralama üzerinden hesaplanır; seçici onu değiştirmez.

### 10. Ajanlarla bütünleşme

### 10.1 MCP yüzeyi

MCP kataloğu REST yüzeyinden bilinçli olarak daha dardır. Bir ajana düzinelerce örtüşen getirme aracı verildiğinde daha kötü seçim yapar; bu yüzden yalnızca birbirini tekrar etmeyen sekiz salt okunur araç sunulur: get_context_for_task, hybrid_search, resolve_symbol, find_references, get_call_graph, expand_blast_radius, get_index_job, list_index_jobs. BCE_MCP_ALLOW_WRITE=true ile iki indeksleme aracı (index_repo, reindex_repo) eklenir; bunlar işi senkron yapmaz, bir kuyruğa iş bırakır, çünkü tam bir indeksleme herhangi bir ajanın araç çağrısı zaman aşımından uzun sürer. Kuyruk satırları FOR UPDATE SKIP LOCKED ile alınır; böylece bir API sunucusu ve bir MCP sunucusu aynı veritabanını güvenle paylaşabilir.

get_context_for_task, ajanın ilk başvurması gereken araçtır. İpucu alanları (explicit_symbols, route_paths, history_file_ids, component_repo_ids) bir çağıranın elindeki en yüksek kaldıraçtır: bilinen tek bir sembol adı ya da bir stack trace'ten gelen route yolu, bir tahmini kesinliğe dönüştürür ve raporlanan güveni genellikle bir seviye yükseltir.

Her araç aynı zarfı döndürür: payload dilden bağımsız sözleşmedir; message ise locale'e göre (İngilizce veya Türkçe) çevrilen, insanlar için yazılmış ve ayrıştırılmaması gereken bir metindir.

### 10.2 Kural ve kanca: Ölçümün öğrettikleri

Projenin en öğretici bulgularından biri, MCP sunucusunun tek başına bir ajanı kötüleştirebileceğidir. React/TypeScript bir kod tabanında 14 görev üzerinde yapılan ajan benchmark'ında, sunucuya erişimi olan bir Cursor ajanı grafa geç (bir grep turundan sonra) ya da görev başına sekiz kez soruyordu ve aldığı cevapta dosya veya satır yoktu.

Durumu iki değişiklik tersine çevirdi:

- Ajana şunu söyleyen bir kural: get_context_for_task'ı ilk iş olarak çağır, döndürdüğü dosya:satır girdilerini doğrulanmış konum say ve onları grep ile arama, listelendi diye bir dosyayı düzenleme.
- Grafın cevabını ajanın ilk turundan önce vermek.

İkisiyle birlikte, aynı model ve makinede aynı 14 görevde: toplam token %−20, grep/glob çıktısı %−46, model turu %−13; düz ajanın 72/73'üne karşı 73/73 kontrol geçti ve %23 daha az satır değişti.

Bu bulgu ürün davranışına dönüştürüldü. bce cursor-init, projeye .cursor/mcp.json dosyasını ve alwaysApply bir kuralı yazar. bce claude-init ise .mcp.json, CLAUDE.md içinde işaretli bir bölüm ve bce precontext komutunu çalıştıran bir UserPromptSubmit kancası yazar: kanca her istemde grafı bir kez sorgular ve sonucu ajana ilk turundan önce additionalContext olarak verir. Cursor'ın istem kancası bağlam ekleyemediği için orada bu işi kural üstlenir. Kanca da fail-open'dır: ulaşılamayan bir veritabanı, engellenmiş bir istem değil, bağlamsız bir istem demektir.

### 11. Kendini açıklayan bir arayüz

/ui altındaki web arayüzü wheel içinde gelir ve ayrı bir dağıtım gerektirmez. React ve TypeScript ile yazılmıştır; İngilizce ve Türkçe katalogları vardır. Bir gösterge paneli değildir. İkinci sekmesi, gerçek bir get_context_for_task çağrısını POST /v1/ui/context-trace üzerinden gerçek hatta karşı aşama aşama yeniden oynatır: çapaların yanması, genişlemenin dışa doğru yayılması, adayların skorlanıp kesilmesi. Getirme şaşırtıcı bir şey döndürdüğünde, nerede yanlış gittiğini izlemek skorları okumaktan çok daha hızlıdır. Determinizm burada da kendini gösterir: oynatılan iz, ajanın gerçekte aldığı cevapla aynıdır.

### 12. Ölçme metodolojisi

Projenin belki de en olgun tarafı ölçüme yaklaşımıdır. README'nin ifadesiyle: getirme kalitesi iddiaları, hangi görev kümesinde ölçüldüğü bilinmeden değersizdir; bu yüzden bir skor tablosu değil, ölçüm aracının kendisi gelir.

bce bench, kullanıcının elle hazırladığı bir vaka dosyası üzerinde çalışır: her vaka bir görev metni ve onu yanıtladığına inanılan symbol_id'lerden oluşur. Rapor recall, precision, precision@1, MRR, medyan ve p95 gecikme verir. Skorlardan daha önemli iki geç/kal kontrolü içerir: determinism_ok (her vaka tekrar tekrar koşulur ve bayt bayt aynı sırayı döndürmek zorundadır) ve rls_ok (kapsamlı bir kullanıcıyla koşulan vaka, o kullanıcının okuyamayacağı bir repoyu yüzeye çıkarmamalıdır).

bce bench-prs, birleştirilmiş pull request'leri yeniden oynatır: görev PR'ın başlığı ve açıklamasıdır, doğru cevap PR'ın gerçekten değiştirdiği sembollerdir ve veritabanı repoyu PR'ın taban commit'inde indeksler. Motor, aynı sorgu üzerindeki ham embedding sıralamasıyla karşılaştırılır. Her doğru sembol için onu içeri getiren kanal ve kaybolduğu aşama (not_reached, narrowed_out, returned) izlenir. En önemlisi, PR'lar bir ayar yarısına ve bir holdout yarısına bölünür; her sabit yalnızca ayar yarısında uydurulur ve holdout üzerinde bir kez ölçülür. Proje bunu açıkça söyler: bir getirme motorunu raporladığınız vakalara göre ayarlamak, yalnızca o vakaları tarif eden bir sayı üretir.

Bu disiplin, değişiklik geçmişinde denenip bırakılan fikirlerin listesinde de görülür:

- Görevi cümlelere bölüp cümle başına semantik sıralamaları birleştirmek: tüm metinle yapılan tek sorgu, 127 beklenen dosyadan 89'unu ilk 100'de bulurken birleştirme 87'sini buldu ve başı bozdu (semantik hit@1 30'da 19'dan 14'e).
- Kelime çifti bonusunu nadirliğe göre ölçeklemek: K=50'de hiçbir yerde kazanç yok, K=20'de her dilde rastgele yer değişiklikleri.
- Daha dik semantik sıra bozunmaları (8 / 10 / 15): recall@20'yi ve semantik tutmayı düşürdü.
- Daraltmada bir skor marjı kapısı ve güçlü açık çapaların birinci slotu ele geçirmesi: ilki etkisizdi, ikincisi uzun PR açıklamalarında üst sıraları doldurdu.
- Grafik komşular için slot rezervi: kanıt ölçekli skorlama gerçek bir komşunun zayıf bir çapayı zaten geçmesine izin verdiği için rezerv yalnızca recall kaybettiriyordu.

Ölçümle yönlendirilen gelişimin somut bir sonucu: v0.3.0'da React/TypeScript bir ön yüzde 30 doğal dil görevi üzerinde makro dosya recall'u 82,0'dan 99,6'ya çıktı. Eski hattın K=50'de kaçırdığı 31 dosyanın 27'si aday havuzuna hiç girmemişti; kanıtları, hiçbir şeyin indekslemediği yerlerdeydi: 10 KB'lık bir panelin ortasındaki bir localStorage.getItem('token'), bir type birleşiminin üyeleri, bir sayfanın altmışıncı satırındaki bir toast mesajı. Çözüm, bu görevlere uydurulmuş bir şey değil, tüm sembolü aranabilir kılmak ve usage / path / impact kaynaklarını eklemek oldu.

### 13. Güvenlik modeli

BCE güvenlik sınırları konusunda alışılmadık derecede açık sözlüdür:

- Motorun kendi kimlik doğrulaması yoktur ve önünde bunu yapan bir katman bekler.
- Kullanıcı bazlı repo kapsamı (X-BCE-User başlığı ve scopes tablosu) yalnızca Katman 3'te uygulanır. Katman 1 ve 2, indeksleme ve iş uç noktaları ve /v1/ui/* altındaki her şey, porta ulaşabilen herkese indekslenmiş her repoyu sunar.
- X-BCE-User olduğu gibi güvenilir; öndeki katman kullanıcıyı doğrulamalı ve başlığı ezmelidir.
- Satır seviyesi güvenlik (RLS) politikaları ikinci bir savunma hattıdır, canlı uygulama yolu değil; uygulama bce.user_id oturum değişkenini set etmez. AGE grafı RLS kapsamında değildir.
- MCP stdio sunucusu sistem yetkisiyle çalışır ve her repoyu görebilir; her güven sınırı için ayrı bir süreç çalıştırılmalıdır.
- İndekslemek kaynağı saklamak demektir; veritabanına indekslediği kaynak kadar özen gösterilmelidir.
- Uzak indeksleme token'ı tek bir git çağrısı süresince URL'ye enjekte edilir, ardından origin sıfırlanır; token .git/config'e asla yazılmaz ve hata mesajlarından maskelenir.
- Loglar token, password, secret, api_key gibi alanlarda maskelenir; ancak DEBUG seviyesi istek ve yanıt gövdelerini, yani bu motor için kaynak kodu yazar. Üretimde INFO'da kalınmalıdır.

### 14. Kurulum ve işletim

Tipik bir kurulum dört adımdan oluşur:

- Tek veritabanında Apache AGE + pgvector ile PostgreSQL 16 docker compose -f deploy/docker-compose.yml up -d
- Kur ve migrasyonları uygula pip install bgts-context-engine cp .env.example .env bce migrate
- Bir repoyu indeksle bce index --repo /path/to/your/repo --name my-service
- Sor bce context --task "toplanti webhook'undaki login timeout'u duzelt"

Ardından bce serve REST API'yi (/docs) ve web arayüzünü (/ui) sunar; bce serve-mcp ise editörün kendi başlattığı stdio MCP sunucusudur. Hazır imaj Apache AGE'yi pgvector/pgvector:pg16 üzerine derler, çünkü ikisini birden içeren genel bir imaj yoktur. AGE çoğu yönetilen PostgreSQL hizmetinde (RDS, Cloud SQL) bulunmadığı için pratikte veritabanını kendiniz barındırmanız gerekir.

İşletim notları arasında üç tanesi öne çıkıyor: büyük repolarda shared_buffers'ı artırmak (HNSW eklemeleri graf indeks sayfalarını kovmasın diye; 2 GB ya da makine belleğinin dörtte biri), büyük repoları birer birer indekslemek ve indeksleme sırasında konteynere docker exec ile dokunmamak. Sonuncusu ilginç bir tuzaktır: Compose kurulumunda PostgreSQL konteynerin 1 numaralı sürecidir; yetim kalıp beklenmedik bir kodla çıkan bir yardımcı süreç postmaster tarafından "çökmüş sunucu süreci" olarak toplanır, tüm backend'ler öldürülür ve saatlerdir süren tek işlemlik indeksleme geri alınır.

### 15. Sınırlamalar ve yol haritası

Proje kendi sınırlarını da açıkça listeler:

- Her katmanda kapsam denetimi henüz yoktur; Katman 1 ve 2 filtrelenmez. Bu kapanana kadar API bir proxy arkasında durmalıdır.
- MCP için streamable HTTP taşıması yoktur; bugün sunucu ajanın yanında stdio ile koşar. Uzak taşıma, tek bir indeksin tüm ekibe hizmet etmesini sağlayacaktır.
- Daha fazla dil: En çok istenenler Rust, Kotlin ve PHP. Köprü çıkarıcısı Objective-C, Swift ve Kotlin taraflarını tanısa da bu diller için sağlayıcı olmadığından yerel bildirimler ancak bir sağlayıcı eklenirse sembol olur.
- Daha geniş SCIP alımı: Bugün yalnızca Python ve TypeScript için SCIP çalıştırılır.
- Yayımlanmış bir ölçüm kümesi: Açık repolar üzerinde açık bir görev kümesi, sonuçların projeler arasında karşılaştırılabilmesini sağlayacaktır.
- Seçici eşikleri Jev üzerinde uydurulmuştur; decider modelleri için yeniden uydurma henüz yapılmamıştır ve decider'lar için tekrar koşu (determinizm) testi yoktur.

### 16. Sonuç

BGTS Context Engine'in temel iddiası basit ama güçlüdür: bir kodlama ajanının ihtiyaç duyduğu bağlam, metin benzerliği değil, kod yapısı sorusudur ve bu sorunun kesin bir cevabı vardır. Proje bu iddiayı üç ilke üzerine kurar:

- Determinizm ürünün kendisidir. Aynı görev, aynı commit, aynı sıralama. Bu, motoru hata ayıklanabilir, denetlenebilir ve ölçülebilir kılar. Katkı rehberi bunu en baştan söyler: aynı görevin farklı sonuç döndürmesine yol açan bir değişiklik, açık bir opt-in bayrağı olmadan birleştirilmez.
- Her cevap kendini açıklar. Hangi kaynakların hemfikir olduğu, her kenarın nereden geldiği, güvenin ne olduğu ve indeksin güncel olup olmadığı her yanıtın parçasıdır.
- Olasılık, çizginin dışında ve açıkça işaretli durur. Embedding yalnızca sıra verir; karar modeli yalnızca sıralanmış adaylar arasında keser, asla ekleme yapmaz, hata durumunda sıralamaya geri düşer ve kendini raporlar.

Teknik olarak dikkat çekici olan, bu ilkelerin soyut kalmaması, her birinin bir ölçümle, bir holdout kümesiyle ve çoğu zaman da denenip bırakılmış bir alternatifle desteklenmesidir. Tek bir PostgreSQL içinde graf, vektör ve tam metin aramasını birleştiren mimari operasyonel yükü en aza indirirken, gerçek ölçekte karşılaşılan planlayıcı tuzaklarının sabırla çözülmesi sistemin üretim ortamına hazır olduğunu gösteriyor.

Ajanlar daha büyük ve daha tanıdık olmayan kod tabanlarında çalıştıkça, "neyi okumalıyım?" sorusu "ne yazmalıyım?" sorusu kadar önemli hale gelecek. BCE bu soruya bir tahminle değil, bir grafın üzerinde yürünebilir, yeniden oynatılabilir ve itiraz edilebilir bir cevapla yaklaşıyor.

### Nasıl ölçtük

Her görev, projenin gerçekten birleştirdiği bir değişiklik. Ajana geliştiricinin cümlesi veriliyor ve değişikliğin hangi dosyalarda yapıldığını bulması isteniyor. Ajan geçmişi silinmiş bir kopyada çalışıyor, yani cevabı git log ile bulamıyor.

Her görev her ajanda iki kez koştu: bir kez ajan tek başına, bir kez de en başta MCP üzerinden BCE'ye sorarak. BCE'nin cevabından sonra ajan normal araçlarını kullanmaya devam etti.

### Kurulum

- Görevler: 6 dilde 12 açık kaynak repodan 600 birleşmiş değişiklik, repo başına 50 Python: flask, requests JavaScript: express, axios TypeScript: nest, vite Java: guava, netty C#: efcore, PowerShell Go: gin, prometheus
- Ajanlar ve modeller: Cursor CLI ile grok-4.7-high-fast; OpenCode ile GLM 5.3 Flash (OpenRouter)
- Adım: ajanın yaptığı araç çağrıları
- Token: cache'lenmiş girdi dahil tüm tokenlar
- Maliyet: iki ajan için de aynı fiyat kartıyla (OpenRouter GLM 5.3 Flash), cache okuma indirimi uygulanarak
- Süre: görevi bitirme süresi (duvar saati)
- Kalite (recall): değişikliğin dokunduğu dosyaların ajanın cevabında bulunma oranı

### Sonuçlar

Görev başına ortalama, ajan tek başına → BCE ile:

- Token: Cursor 264 bin → 59 bin (−%78), OpenCode 196 bin → 24 bin (−%88)
- Araç çağrısı: Cursor 17,4 → 2,0 (−%88), OpenCode 11,3 → 1,1 (−%90)
- Arama ve dosya okuma: Cursor 9,1 arama ve 6 okuma → 0,06 arama ve 0 okuma; OpenCode 7,0 arama ve 4,3 okuma → 0,1 arama ve 0,02 okuma. Hiç arama yapılmayan görev: Cursor'da 600'de 583, OpenCode'da 597'de 570
- Model turu: Cursor 9,1 → 3,0 (−%67), OpenCode 8,3 → 2,1 (−%75)
- Süre: Cursor 65 sn → 42 sn (−%35), OpenCode 132 sn → 83 sn (−%37, düzeltilmiş; notlara bakın)
- Maliyet: Cursor −%60, OpenCode −%67
- Kalite: recall Cursor'da %95,6 → %92,9, OpenCode'da %89,2 → %92,5; iki ajanın ortalaması %92,4 → %92,7

### Token nereden düşüyor?

Düşüşün büyük kısmı cache okumasından geliyor. Ajan tek başınayken her turda büyüyen bağlamı yeniden okuyor; BCE ile iş 2–3 turda bitiyor.

- Cache okuma: Cursor −%86, OpenCode −%97
- Önbelleksiz girdi: Cursor −%46, OpenCode −%47
- Çıktı (reasoning dahil): Cursor −%34, OpenCode −%50

Maliyetin tokendan daha az düşmesinin nedeni de bu: düşen tokenın çoğu ucuz cache okuması. Tek başına koşuda cache okuması faturanın yaklaşık %40'ını oluşturuyor.

### Kazanç nerede büyüyor?

- Görev zorlaştıkça: token düşüşü kolay görevlerde %71 / %68, orta görevlerde %76 / %87, zor görevlerde %83 / %93 (Cursor / OpenCode).
- Ajan tek başına çok token harcadıkça: en pahalı repolarda kazanç en büyük. guava'da %86 / %90, efcore'da %85 / %94; en ucuz repo gin'de %58 / %68.
- Her dilde: 6 dilin hepsinde düşüş Cursor'da %70–83, OpenCode'da %80–92.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image21.png)

Repo, zorluk ve dil bazında token düşüşü.

### Notlar

- OpenCode süresi düzeltilmiş. BCE koşuları sırasında makinenin belleği dolmuştu (16 GB, %99). MCP sunucusunun açılması ve BCE çağrısının beklemesi sağlıklı değerlere çekildi; ham ölçümde OpenCode BCE ile %16 daha yavaş. Cursor süreleri ölçüldüğü gibi.
- OpenCode, BCE ile 600 görevin 597'sini tamamladı. İki koşu, ikisinin de tamamladığı 597 görev üzerinden karşılaştırıldı.
- Cursor maliyeti, Cursor'ın ölçtüğü tokenların aynı fiyat kartıyla hesaplanmasıdır; Cursor'ın kendi faturası değildir.

### Deneyin

BCE kendi makinenizde, tek bir PostgreSQL veritabanıyla ve varsayılan olarak API anahtarı olmadan çalışıyor:

docker compose -f deploy/docker-compose.yml up -d

# PostgreSQL 16 + Apache AGE + pgvector

pip install "bgts-context-engine[mcp]"

bce migrate

bce index --repo /path/to/your/repo --name my-service

bce context --task "fix the login timeout in the meeting webhook"

Sonra ajanınızı bağlayın. Cursor ya da Claude Code tek komutla kuruluyor; VS Code, OpenCode ve diğer MCP istemcileri bce serve-mcp çalıştırıyor:

bce cursor-init --repo-id my-service # Cursor

bce claude-init --repo-id my-service # Claude Code

Katkı vermenin üç yolu:

- Repoya yıldız verin ve BCE'yi iyi bildiğiniz bir repoda deneyin.
- Kendiniz ölçün. Ajanınızı kendi görevlerinizde BCE'li ve BCE'siz çalıştırın, ne gördüğünüzü bize anlatın.
- Dil ekleyin. Python, JavaScript, TypeScript, Java, C# ve Go hazır; en çok istenenler Rust, Kotlin ve PHP.

BCE'yi kendi altyapınızda, repolarınıza göre ayarlanmış olarak mı istiyorsunuz?

bg-ai@bgts.com adresine yazın.

### github.com/bgts-ai-org/bgts-context-engine

### Kaynaklar ve ileri okuma

- README (Türkçe) ve README (İngilizce)
- Mimari: deterministik çizgi, üç katman, indeksleme
- Getirme: çapalar, genişletme, her skorlama ağırlığı, güven
- Seçici modeller: Jev, decider-2b ve decider-4b
- Veri modeli: düğüm etiketleri, kenar tipleri, tablolar, sembol kimliği
- MCP ve API: her araç ve uç nokta, CLI
- Diller: ayrıştırıcıların çıkardıkları ve yeni dil ekleme
- Dağıtım: yapılandırma, işler, yedekleme, ölçüm
- Değişiklik günlüğü: her sürümün ölçülmüş gerekçeleriyle birlikte
- Güvenlik politikası
- Proje sitesi: bgts-ai-org.github.io/bce-microsite
- Kaynak kod: github.com/bgts-ai-org/bgts-context-engine
`,
    cardTags: ["AI Coding", "Context Engineering", "Open Source"],
    cardQuote: "Yapay zeka kodlama ajanınız bütçesini arama yaparak harcıyor.",
    cardQuoteHighlight: "arama yaparak harcıyor",
    cardTheme: "green",
  },
  {
    id: "yapay-zeka-maliyetleri-nasil-optimize-edilir",
    title: "Yapay Zeka Maliyetleri Nasıl Optimize Edilir?",
    author: "Alper Önsoy",
    excerpt:
      "Yapay Zeka konusunda öncü kurumlardan biri olarak içeride önemli bir grup teknoloji ve çözümlere odaklanırken, hatırı sayılır bir grup da yapay zeka yönetişimi alanına odaklanıyor, bu aynı zamanda önemli danışmanlık alanlarımızdan biri.",
    coverImage: "/images/articles/yapay-zeka-maliyetleri-nasil-optimize-edilir/cover.jpeg",
    date: "2026-10-20",
    category: "Yapay Zeka",
    readTime: 3,
    body: `
## Yapay Zeka Maliyetleri Nasıl Optimize Edilir?

Yapay Zeka konusunda öncü kurumlardan biri olarak içeride önemli bir grup teknoloji ve çözümlere odaklanırken, hatırı sayılır bir grup da yapay zeka yönetişimi alanına odaklanıyor, bu aynı zamanda önemli danışmanlık alanlarımızdan biri.

Yönetişimin birçok alanı var elbet, ancak "maliyet optimizasyonu" en önemli başlıklardan biri. Bu konuya çok odaklanıyoruz, özellikle finans ve savunma sektörlerindeki büyük müşterilerimizde verdiğimiz danışmanlık hizmetlerinde en popüler konulardan biri her zaman yapay zeka maliyet yönetimi mühendisliği.

Gartner'ın yakın zamanda bu konuda paylaştığı "AI Inference Cost Reduction Ladder" isimli makale ilgimi çekti. Maliyet yönetim sürecini "Rent > Trim > Route > Engineer > Adopt > Distill > Own" basamaklarında ele alıyor, her basamakta maliyet değerlendirmesi ve bir sonraki basamak için kriterleri özetliyor.

Gartner’a göre doğru senaryolarda son üç basamak, kalan inference maliyetinde %25–50 (Adopt), %80–97 (Distill) ve %70–90 (Own) seviyelerinde tasarruf sağlayabiliyor.

Bu modele göre, önce token/context, routing, caching, batching ve model seçimi gibi ilk dört basamağın tüketilmesi gerekiyor; ancak bundan sonra Adopt > Distill > Own aşamalarına geçiliyor.

Asıl ilginç kırılım “Distill” katmanında, en çok çalışan agentic task’leri frontier modelden alınan çıktılarla eğitilmiş küçük, domain-specific modellere taşımak. Gartner bunun belirli task’lerde %80–97 maliyet azaltımı sağlayabileceğini belirtiyor.

Ama her kurumun kendi modelini geliştirmesi gerekmiyor, “buy first, fine-tune” yaklaşımını öne çıkarıyor; yani önce mevcut bir özel model + LoRA/QLoRA ile başlamak, ancak data/workflow gerçekten farklıysa sıfırdan distillation’a gitmek daha anlamlı.

Rung 7 ise teknoloji kararından çok bir hacim kararı, self-hosting ancak sürekli yüksek trafik, stabil workload ve yeterli MLOps kabiliyeti varsa anlamlı. Gartner’ın verdiği önemli eşiklerden biri aylık 500M token’ın altında veya workload mix sürekli değişiyorsa self-hosting’in değer yok edebileceği.

Makalenin sonunda da maliyet perspektifinden kurumların takip etmesini önerdiği KPI'lar özetlenmiş, kendi KPI'larınızı oluştururken faydalanmak isteyebilirsiniz diye paylaşıyorum:

Öncü Göstergeler — Aylık olarak izlenmeli

- Özellik bazında tamamlanan görev başına maliyet
- 1 milyon token başına harmanlanmış maliyet ($)
- Frontier seviyelerindeki modellerde kullanılan tokenların payı (hedef: azalması)
- Görev başına token sayısı
- Önbellek isabet oranı (Cache Hit Rate)
- Döngünün her aşamasında değerlendirmeyi başarıyla geçenlerin oranı (Evaluation Pass Rate)

Gecikmeli Göstergeler — Çeyreklik olarak izlenmeli

- AI COGS’nin gelire oranı (AI kaynaklı mal/hizmet maliyetlerinin toplam gelir içindeki payı)
- Özellik bazında brüt kâr marjı
- Maliyet azaltma girişimi başına geri ödeme süresi (Payback Period)

![](/images/articles/yapay-zeka-maliyetleri-nasil-optimize-edilir/image23.jpeg)
`,
    cardTags: ["AI Cost Engineering", "AI Governance"],
    cardQuote: "Yapay Zeka Maliyetleri Nasıl Optimize Edilir?",
    cardQuoteHighlight: "Yapay Zeka Maliyetleri",
    cardTheme: "orange",
  },
];
