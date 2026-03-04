# BGTS - Business & Global Technology Solutions

![BGTS Cover](/public/images/headers/teknoloji-servisleri-genel.jpg)

BGTS (Business & Global Technology Solutions), kurumların dijital dönüşüm süreçlerine liderlik eden, modern ve yüksek performanslı bir teknoloji şirketidir. Bu proje, BGTS'nin kurumsal web varlığını en güncel web teknolojileriyle sunan, performans, güvenlik ve kullanıcı deneyimi odaklı bir platformdur.

## 🚀 Teknoloji Yığını (Tech Stack)

Proje, hız, ölçeklenebilirlik ve SEO uyumluluğu gözetilerek modern teknolojilerle geliştirilmiştir:

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router, Server Components)
- **Stil & Tasarım:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Programlama Dili:** [TypeScript](https://www.typescriptlang.org/)
- **İkon Seti:** [Lucide React](https://lucide.dev/)
- **Animasyonlar:** [Framer Motion](https://www.framer.com/motion/)
- **Font:** [Exo](https://fonts.google.com/specimen/Exo) (Google Fonts)
- **Form Yönetimi:** React Hook Form + Zod

## 🌟 Öne Çıkan Özellikler

### Tasarım ve Kullanıcı Deneyimi (UI/UX)
- **Modern & Kurumsal UI:** Marka kimliğini yansıtan özel renk paleti (`action-blue`, `slate-900`, `indigo`), cam efektleri (glassmorphism) ve temiz tipografi.
- **Dinamik Kahraman (Hero) Alanları:** Her sayfa için özel olarak üretilmiş, sektöre ve içeriğe uygun yüksek çözünürlüklü görseller ve slider yapıları.
- **Gelişmiş Navigasyon:** "Mega Menu" yapısı sayesinde hizmetlere (MSP, Yazılım, DevOps) ve sektörlere hızlı erişim.
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarda kusursuz çalışan esnek (fluid) yerleşimler.

### Yeni Eklenen Modüller (v0.3.0)
- **Bankacılık ve Finans (Kapsamlı Redesign):** PDF verileri ve standartlar doğrultusunda baştan aşağı yenilenmiş, interaktif uzmanlık alanları ve detaylı başarı hikayelerini barındıran premium endüstri sayfası (`/industries/banking`).
- **AI Hiring Assistant:** Yapay zeka destekli işe alım ürününün özelliklerini anlatan dinamik ürün sayfası (`/products/ai-hiring-assistant`).
- **İnfografikler Sayfası:** Veri görselleştirmesi ile zenginleştirilmiş istatistik sayfası (`/resources/infographics`).
- **Kariyer & Kültür:** Gerçek ofis fotoğrafları ve çalışan hikayeleriyle zenginleştirilmiş İK sayfaları.
- **Yönetilen Hizmetler (MSP):** Tüm IT hizmetlerinin tek çatı altında toplandığı detaylı hizmet kataloğu.

### Optimizasyonlar ve Temizlik (v0.4.0)
- **Codebase & Medya Temizliği:** Kullanılmayan sayfa bileşenleri (eski servis sayfaları) ve referans verilmeyen görseller projeden tamamen temizlendi.
- **Header & Mega Menu Revizyonu:** Sektörler, Hizmetler ve Ürünler menülerindeki ana linklerin yönlendirmeleri devreden çıkarıldı. Arayüz boşluk dengeleri (Mega Menu) iyileştirildi.

### Yapay Zeka Entegrasyonları (v0.5.0)
- **BGTS Dijital Asistan (Chatbot):** Vercel AI SDK ve Groq (Llama 3 70B) kullanılarak geliştirilmiş, şirket verileriyle eğitilmiş ve saniyeler içinde cevap veren yüksek performanslı otonom chatbot entegrasyonu tamamlandı. Sayfa yönlendirmeleri dinamik olarak gerçekleştirildi.

### Form ve E-posta Entegrasyonları (v0.6.0)
- **Nodemailer SMTP Altyapısı Eklendi:** Projeye Nodemailer entegre edilerek İletişim sayfasındaki form ve İnsan Kaynakları (Genç Mühendis) başvuru formu ile direkt e-posta gönderim özelliği kazandırıldı.
- **Dinamik CV Algılama ve Ekler:** İK Başvuru Formu üzerinden kullanıcıların `.pdf`, `.docx` gibi CV'lerini yükleyerek başvuru mailinin ekinde (attachment) iletilmesi sağlandı. Form geri bildirim mekanizmaları güçlendirildi.

### Yeni Kurumsal Çözümler ve İçerik Zenginleştirme (v0.8.0)
- **MeetSense AI Platformu:** Toplantıları AI ile kaydeden, analiz eden ve kurumsal hafızaya dönüştüren platformumuz için modern, kurumsal standartlarda premium bir ürün sayfası oluşturuldu (`/products/meetsense`). Mega Menü'ye entegrasyonu sağlandı.
- **Genç Mühendisler Akademisi (Kapsamlı Redesign):** Eğitim alanlarının (Yazılım, Test/Analiz, DevOps) yaklaşım ve hedefleri detaylandırılarak, "Stacked Layout" yapısında daha şık ve okunabilir bir görünüme (`/young-engineers`) kavuşturuldu.

### Yapay Zeka ve Uygulama İyileştirmeleri (v0.9.0)
- **Cortex AI SDLC Platformu:** Yazılım geliştirme süreçlerini (SDLC) otomatik hale getiren yeni AI platform sayfası (`/products/cortex`) yapılandırıldı.
- **Chatbot Bilgi Bankası:** BGTS dijital asistan (Llama 3 70B), MeetSense ve Cortex ürünleri hakkında bilgi sağlayabilecek şekilde güncellendi ve `.env` API sorunları çözüldü.
- **Hakkımızda Sayfası UI/UX:** Harita üzerindeki İstanbul ve Ankara merkez ofis iğneleri (pins) nabız efektiyle belirginleştirildi ve İş Ortakları alanındaki logo arka plan tasarımları cam efektinden beyaz zeminli premium görünüme geçirildi.

### UI & UX İyileştirmeleri (v0.10.0)
- **MeetSense Ürün Sayfası:** Hero alanı ve arka plan renkleri açık temaya (light theme) uygun olarak güncellendi. Kullanıcının dikkati dağılmaması adına hero kısmındaki etiket ve butonlar kaldırıldı.
- **Kültür Sayfası:** Agile ve Esnek Çalışma bölümündeki cover görseli projeye yeni eklenen `agile-esnek.png` ile yenilendi.

### Yeni Kurumsal Eklemeler & İyileştirmeler (v0.11.0)
- **İş Ortakları Sayfası:** `/partnerships` sayfasında yenilikçi, modern bir Hero alanı ve teknoloji partnerleri (Microsoft, AWS, ServiceNow vb.) için 3 boyutlu kurumsal kartlar eklendi.
- **Yönetilen Hizmetler (MSP) Görsel Revizyonu:** Önceden kullanılan karanlık temalı görseller, daha ferah, aydınlık ve 3 boyutlu izometrik teknoloji çizimleriyle değiştirilip yerel dizine (`/public/images/iso/`) taşındı.
- **Sürdürülebilir Değer Programı:** "Toplumsal Katkı" menü ve yönlendirmeleri "Sürdürülebilir Değer Programı" olarak güncellendi.
- **Genç Mühendisler Programı:** `/young-engineers` URL'i `/genc-muhendis-programi` olarak değiştirildi. Tasarım içindeki rozetler ('KOD YAZ, ETKİ YARAT' vb.) eğlenceli ve interaktif hover efektleriyle canlandırıldı.

### Hata Giderimleri & Build Optimizasyonları (v0.7.1)
- **Next.js Turbopack Çakışması:** `package.json` içerisindeki `"type": "commonjs"` tanımlaması nedeniyle ES Modules yapısıyla çalışan Next.js App Router yapısında ortaya çıkan CommonJS vs ESM çakışması (build hataları) giderildi. Dev server artık tamamen stabil çalışıyor.

### Kurumsal Kimlik, İletişim & Arayüz İyileştirmeleri (v0.7.0)
- **Hakkımızda Sayfası (Kapsamlı Redesign):** Sayfa bütünüyle BGTS Frontend Standartlarına uygun hale getirildi. Genel Bakış ve Değerler bölümleri premium glassmorphism detaylarıyla yenilendi.
- **İnteraktif Konumlar Haritası:** CSS/SVG tabanlı harita yerine dünya arka planı üzerine yerleştirilmiş, dinamik pin noktaları ve senkronize çalışan ofis slider kartlarıyla kurumsal global varlık (LocationsMap) sergilendi. Ofisler ve Hizmet Noktaları UI seviyesinde ayrıştırıldı.
- **İş Ortakları ve Sertifikasyonlar:** İç içe geçmiş logolar yerine kurumsal siteden alınan net ikonlarla 2 ayrı tam genişlik (full-width) section oluşturuldu. Dark Navy ve Warm Mesh arka planlarla UI zenginleştirildi.
- **Ana Sayfa İyileştirmeleri:** Kahraman (Hero) slider'ına uçuşan ve premium hissi veren "Teknoloji Baloncukları" eklendi.
- **İletişim Formları İyileştirildi:** Görünmeyen "Gönderiliyor..." metinleri ve disable statüleri UX standartlarına çekildi. Dosya yükleme (File Upload) butonuna seçilen dosya adının yazdırılması sağlandı.

## 🛠️ Teknik İyileştirmeler ve Optimizasyonlar

Proje genelinde uygulanan teknik standartlar:

### 1. SEO Optimizasyonu
- ✅ **Dinamik Sitemap:** Tüm sayfalar için otomatik güncellenen `sitemap.xml`.
- ✅ **Structured Data (Schema.org):** Arama motorları için zengin sonuçlar (Organization, Breadcrumb vb.).
- ✅ **Optimize Edilmiş Metadata:** Her sayfa için özelleştirilmiş başlık, açıklama ve OpenGraph etiketleri.

### 2. Performans ve Güvenlik
- ✅ **Görsel Optimizasyonu:** `next/image` ile format ve boyut optimizasyonu.
- ✅ **CSP Headers:** Content-Security-Policy ve diğer güvenlik başlıkları ile XSS koruması.
- ✅ **Form Validasyonu:** Zod şemaları ile güvenli ve kullanıcı dostu form doğrulama.

### 3. Erişilebilirlik (A11y)
- ✅ **ARIA Standartları:** Ekran okuyucular için optimize edilmiş menü ve interaktif bileşenler.
- ✅ **Semantik HTML:** Doğru etiket kullanımı ile daha iyi erişilebilirlik.

## 📁 Proje Yapısı

```bash
bgts-web/
├── public/              # Statik dosyalar (görseller, ikonlar, fontlar)
├── src/
│   ├── app/             # Next.js App Router sayfa yapısı
│   │   ├── about/       # Hakkımızda
│   │   ├── contact/     # İletişim
│   │   ├── industries/  # Sektörel Çözümler
│   │   ├── products/    # Ürünler
│   │   ├── resources/   # Kaynaklar (İnfografikler vb.)
│   │   ├── services/    # Hizmetler
│   │   └── layout.tsx   # Ana düzen
│   ├── components/      # React Bileşenleri
│   │   ├── ui/          # Temel UI elementleri (Button, Section, Container)
│   │   ├── layout/      # Header, Footer
│   │   └── shapes/      # Dekoratif şekiller
│   ├── content/         # İçerik verileri (Data Layer)
│   ├── lib/             # Yardımcı fonksiyonlar (utils)
│   └── styles/          # Global stiller
└── FRONTEND_STANDARDS.md # Tasarım Sistemi Dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için:

### Ön Gereksinimler
- Node.js 18 veya üzeri
- npm veya yarn

### Adım Adım
1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/Start-Up-Yazilim/bgts-web.git
    cd bgts-web
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

4.  **Production Build:**
    ```bash
    npm run build
    npm start
    ```

## 🤝 Katkıda Bulunma

1.  Yeni bir özellik için branch (dal) oluşturun (`git checkout -b feature/yeni-ozellik`)
2.  Değişikliklerinizi yapın ve commit'leyin (`git commit -m 'feat: yeni özellik eklendi'`)
3.  Branch'inizi uzak sunucuya gönderin (`git push origin feature/yeni-ozellik`)
4.  Bir Pull Request (PR) oluşturun.

---
© 2026 BGTS. Tüm Hakları Saklıdır.
