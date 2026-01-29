# BGTS - Business & Global Technology Solutions

BGTS (Business & Global Technology Solutions), kurumların dijital dönüşüm süreçlerine liderlik eden, modern ve yüksek performanslı bir teknoloji şirketidir. Bu proje, BGTS'nin kurumsal web varlığını en güncel web teknolojileriyle sunan, performans, güvenlik ve kullanıcı deneyimi odaklı bir platformdur.

![BGTS Homepage](/public/images/headers/teknoloji-servisleri-genel.jpg)

## 🚀 Teknoloji Yığını (Tech Stack)

Proje, hız, ölçeklenebilirlik ve SEO uyumluluğu gözetilerek modern teknolojilerle geliştirilmiştir:

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router, Server Components)
- **Stil & Tasarım:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Programlama Dili:** [TypeScript](https://www.typescriptlang.org/)
- **İkon Seti:** [Lucide React](https://lucide.dev/)
- **Animasyonlar:** [Framer Motion](https://www.framer.com/motion/)
- **Font:** [Exo](https://fonts.google.com/specimen/Exo) (Google Fonts)

## 🌟 Öne Çıkan Özellikler

- **Modern & Kurumsal UI/UX:** Marka kimliğini yansıtan özel renk paleti (`action-blue`, `slate-900`, `indigo`), cam efektleri (glassmorphism) ve temiz tipografi.
- **Dinamik Kahraman (Hero) Alanları:** Her sayfa için özel olarak üretilmiş, sektöre ve içeriğe uygun yüksek çözünürlüklü görseller ve slider yapıları.
- **Gelişmiş Navigasyon:** "Mega Menu" yapısı sayesinde hizmetlere (MSP, Yazılım, DevOps) ve sektörlere hızlı erişim.
- **SEO Odaklı Mimari:** Anlamsal HTML yapısı, meta etiketler ve SEO dostu görsel isimlendirmeleri (örn: `savunma-sanayi-teknolojileri.jpg`).
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarda kusursuz çalışan esnek (fluid) yerleşimler.
- **Performans Optimizasyonu:** `next/image` ile optimize edilmiş görseller, lazy loading ve kod bölme (code splitting).
- **Sticky Alt Navigasyon:** Yönetilen Hizmetler gibi uzun sayfalarda içeriğe hızlı erişim sağlayan akıllı navigasyon çubuğu.

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### Ön Gereksinimler

- Node.js 18 veya üzeri
- npm veya yarn paket yöneticisi

### Adım Adım Kurulum

1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/Start-Up-Yazilim/bgts-web
    cd bgts-web
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```

4.  **Tarayıcıda Görüntüleyin:**
    Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı test edebilirsiniz.

## 📁 Proje Yapısı

```bash
bgts-web/
├── public/              # Statik dosyalar (görseller, ikonlar, fontlar)
│   ├── images/          # Optimize edilmiş ve isimlendirilmiş proje görselleri
│   └── icons/           # Favicon ve diğer ikonlar
├── src/
│   ├── app/             # Next.js App Router sayfa yapısı
│   │   ├── about/       # Hakkımızda sayfası
│   │   ├── contact/     # İletişim sayfası
│   │   ├── industries/  # Sektörel sayfalar (Finans, Savunma vb.)
│   │   ├── services/    # Hizmet sayfaları (Yazılım, DevOps vb.)
│   │   └── layout.tsx   # Ana layout (Header, Footer)
│   ├── components/      # Yeniden kullanılabilir React bileşenleri
│   │   ├── layout/      # Header, Footer, MegaMenu
│   │   ├── ui/          # Butonlar, Kartlar, Tipografi elementleri
│   │   └── home/        # Anasayfaya özel bölümler (Slider, Referanslar)
│   ├── content/         # Sayfa içeriklerinin yönetildiği veri dosyaları (data layer)
│   └── styles/          # Global stil dosyaları (globals.css)
├── FRONTEND_STANDARDS.md # Yazılım ve tasarım standartları dokümanı
└── tailwind.config.ts   # Tailwind CSS konfigürasyonu
```

## 🎨 Tasarım Sistemi & Standartlar

Proje geliştirme sürecinde uyulması gereken kurallar [FRONTEND_STANDARDS.md](./FRONTEND_STANDARDS.md) dosyasında detaylandırılmıştır:
- **Renk Paleti:** Kurumsal renk kodları ve kullanım alanları.
- **Tipografi:** Başlık ve metin hiyerarşisi.
- **Kod Standartları:** Dosya isimlendirme, component yapısı ve best practices.

## 🤝 Katkıda Bulunma

1.  Yeni bir özellik için branch (dal) oluşturun (`git checkout -b feature/yeni-ozellik`)
2.  Değişikliklerinizi yapın ve commit'leyin (`git commit -m 'Yeni özellik eklendi: X'`)
3.  Branch'inizi uzak sunucuya gönderin (`git push origin feature/yeni-ozellik`)
4.  Bir Pull Request (PR) oluşturun.

---
© 2026 BGTS. Tüm Hakları Saklıdır.
