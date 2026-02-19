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
- **İnfografikler Sayfası:** Veri görselleştirmesi ile zenginleştirilmiş istatistik sayfası (`/resources/infographics`).
- **Premium Sektör Sayfaları:** Bankacılık, Savunma, Telekomünikasyon gibi dikeyler için özel tasarlanmış detay sayfaları.
- **Kariyer & Kültür:** Gerçek ofis fotoğrafları ve çalışan hikayeleriyle zenginleştirilmiş İK sayfaları.
- **Yönetilen Hizmetler (MSP):** Tüm IT hizmetlerinin tek çatı altında toplandığı detaylı hizmet kataloğu.

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
