# BGTS — Business & Global Technology Solutions

> Kurumsal dijital dönüşüme liderlik eden, yüksek performanslı bir teknoloji şirketinin modern web platformu.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-purple?logo=framer)
![Vitest](https://img.shields.io/badge/Vitest-4-6e9f18?logo=vitest)
![i18n](https://img.shields.io/badge/i18n-TR%20%7C%20EN-green)

---

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Özellikler](#özellikler)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum](#kurulum)
- [Ortam Değişkenleri](#ortam-değişkenleri)
- [Komutlar](#komutlar)
- [Sayfalar ve Rotalar](#sayfalar-ve-rotalar)
- [API Rotaları](#api-rotaları)
- [AI Chatbot Sistemi](#ai-chatbot-sistemi)
- [Bileşen Mimarisi](#bileşen-mimarisi)
- [İçerik Yönetimi](#içerik-yönetimi)
- [Güvenlik](#güvenlik)
- [SEO ve Performans](#seo-ve-performans)
- [Tasarım Sistemi](#tasarım-sistemi)
- [Test](#test)
- [Versiyon Geçmişi](#versiyon-geçmişi)
- [Çoklu Dil Desteği (i18n)](#çoklu-dil-desteği-i18n)
- [Katkıda Bulunma](#katkıda-bulunma)

---

## Proje Hakkında

Bu proje, **BGTS** (Business & Global Technology Solutions) şirketinin kurumsal web varlığını en güncel web teknolojileriyle sunan, performans, güvenlik ve kullanıcı deneyimi odaklı bir platformdur. Next.js 16 App Router mimarisi üzerine inşa edilmiş olup; **çoklu dil desteği (Türkçe/İngilizce)**, SSR/SSG yetenekleri, Edge Runtime API'lar, rate limiting middleware, Google Analytics entegrasyonu ve AI chatbot sistemi içermektedir.

**Hedefler:**
- Kurumsal marka kimliğini güçlü biçimde yansıtmak
- Müşteri adaylarını doğru servis ve ürün sayfalarına yönlendirmek
- 8 AI/kurumsal ürün ve 3 hizmet alanını detaylı şekilde tanıtmak
- 5 sektör çözümünü vaka çalışmalarıyla desteklemek
- Kariyer odaklı ziyaretçilere şeffaf bir büyüme yolu sunmak
- AI destekli chatbot ile 7/24 kurumsal danışmanlık sağlamak *(şu anda pasif)*

**Canlı Site:** [https://bgts.com.tr](https://bgts.com.tr)

---

## Teknoloji Yığını

| Katman | Teknoloji | Versiyon |
|--------|-----------|----------|
| Framework | Next.js (App Router) | 16.1.1 |
| Dil | TypeScript | ^5 |
| UI Kütüphanesi | React | 19.2.3 |
| Stillendirme | Tailwind CSS (PostCSS) | v4 |
| Animasyon | Framer Motion | ^12 |
| İkon Seti | Lucide React | ^0.562 |
| UI Primitives | Radix UI (Accordion, Slot) | ^1.2 |
| CSS Utility | class-variance-authority + tailwind-merge + clsx | — |
| Form Yönetimi | React Hook Form + Zod | ^7.69 + ^4.3 |
| AI / Chatbot | Vercel AI SDK + Groq | ^3.4 / Llama 3.3 70B |
| i18n | @formatjs/intl-localematcher + negotiator | ^0.8 / ^1.0 |
| Markdown Render | react-markdown | ^10.1 |
| E-posta | Nodemailer | ^8 |
| Analytics | Google Analytics (GA4) | — |
| Test | Vitest + Testing Library + jsdom | ^4 |
| Linting | ESLint + eslint-config-next | ^9 |

---

## Özellikler

### Çoklu Dil (i18n)
- **Türkçe ve İngilizce** tam destek — URL tabanlı dil ayrımı (`/tr/...`, `/en/...`)
- **Locale-aware URL slug'ları:** Türkçe sayfalar SEO dostu Türkçe path kullanır (`/tr/hakkimizda`), İngilizce sayfalar İngilizce path kullanır (`/en/about`)
- Merkezi route haritası (`src/lib/routes.ts`) — `localizedHref`, `switchLocalePath`, `localizedPathForLang` helper'ları
- Middleware ile locale prefix ekleme, eski `/tr/...` İngilizce slug'larından **301 redirect** ve Türkçe slug'lardan dahili route'a **rewrite**
- JSON tabanlı sözlük sistemi (`src/dictionaries/tr.json`, `src/dictionaries/en.json`)
- Varsayılan dil: Türkçe (`tr`)

### Tasarım ve Kullanıcı Deneyimi
- **Mega Menu Navigasyon:** Hizmetler, Ürünler, Sektörler, Kariyer ve Kaynaklar için tam genişlikte, detaylı açıklamalı mega menüler
- **Site İçi Arama:** 27+ öğeli arama endeksi — ürünler, sektörler, kariyer sayfaları, kurumsal sayfalar ve hizmetler arasında zengin etiketli hızlı arama
- **Responsive Tasarım:** Mobil öncelikli yaklaşım; mobil navigasyon (accordion menü, scroll lock, backdrop overlay)
- **Hero Slider:** Ana sayfada çok slaytlı, otomatik ilerleyen, swipe destekli animasyonlu kahraman alanı
- **Framer Motion Animasyonları:** Scroll-triggered reveal, spring animasyonları, stagger efektleri
- **Glassmorphism & Gradient Efektler:** Cam efektli kart tasarımları, gradient mesh arka planlar, geometrik dekorasyonlar
- **Fotoğraflı Hero Alanları:** Kariyer, Öğrenme, Genç Mühendis, Kültür sayfalarında gerçek fotoğraflı hero bölümleri (gradient overlay)
- **Kolaj Tasarım:** Sürdürülebilir Değer sayfasında dağınık fotoğraf kolajı ile duygusal hikaye anlatımı
- **Zoomable Image:** Ürün ve infografik sayfalarında büyütülebilir görsel bileşeni

### AI Destekli Chatbot (Ayla) — *Şu anda pasif*
- Groq API üzerinde çalışan Llama 3.3 70B modeli
- "Ayla" adında BGTS kurumsal danışmanı persona'sı
- Hizmet, ürün, kariyer konularında derin bilgi tabanı
- Hızlı soru butonları (ilk açılışta)
- Gerçek zamanlı streaming yanıtlar
- Tıklanabilir Markdown linkleri ile sayfa yönlendirmeleri

### Form ve E-posta Sistemi
- **İletişim Formu:** Zod validasyonlu, Nodemailer ile HTML e-posta gönderimi
- **Genç Mühendis Başvurusu:** CV dosyası yükleme (.pdf/.docx) ve e-posta eki olarak iletme
- GDPR onay checkbox'ı
- Hata/başarı bildirim mekanizmaları (toast feedback)

### SEO ve Performans
- Her sayfa için özelleştirilmiş metadata (`title`, `description`, OpenGraph, Twitter Card)
- `sitemap.ts` ile 30+ URL'lik otomatik sitemap üretimi (hreflang desteği)
- `robots.txt` arama motoru yönergeleri
- Schema.org yapılandırılmış veri (Organization, WebSite, LocalBusiness, Breadcrumb, Product, Service, FAQPage, HowTo, VideoObject JSON-LD)
- Google Search Console doğrulama meta tag desteği
- `next/image` ile otomatik görsel optimizasyonu (AVIF/WebP, lazy loading)
- Güvenlik başlıkları (HSTS, X-Frame-Options, CSP, Permissions-Policy)
- Core Web Vitals optimizasyonu (image formats, cache headers, compression)
- Google Analytics (GA4) entegrasyonu
- Canonical URL ve alternateLocale desteği

### Başarı Hikayeleri (Case Studies)
- 20+ vaka çalışması — yazılım, altyapı, yönetilen hizmet ve eğitim kategorilerinde
- Sektörel filtreleme (Finans, Savunma, Telekom, Perakende)
- Teknoloji stack'leri ile zenginleştirilmiş proje detayları

---

## Proje Yapısı

```
bgts-web/
├── public/
│   ├── images/                 # Tüm statik görseller
│   │   ├── collage/            # Sosyal katkı kolaj görselleri
│   │   ├── contact/            # İletişim sayfası görselleri
│   │   ├── culture/            # Çalışma kültürü görselleri
│   │   ├── events/             # Etkinlik görselleri
│   │   ├── genc-muhendis/      # Genç Mühendis Programı görselleri
│   │   ├── headers/            # Sayfa hero görselleri
│   │   ├── home/               # Ana sayfa görselleri
│   │   ├── industries/         # Sektör sayfası görselleri
│   │   ├── iso/                # İzometrik illüstrasyonlar (MSP)
│   │   ├── meetsense/          # MeetSense ürün görselleri + slides/
│   │   ├── products/           # Ürün sayfası görselleri (alt klasörler)
│   │   ├── services/           # Hizmet sayfası görselleri
│   │   ├── social/             # Sosyal medya görselleri
│   │   └── logos/              # Marka ve partner logolar
│   ├── favicon.png              # Tarayıcı sekmesi ikonu
│   ├── icon.png                 # PWA / Apple Touch ikonu
│   ├── grid.svg                # Arka plan grid deseni
│   └── robots.txt              # Arama motoru yönergeleri
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   ├── chat/           # AI chatbot endpoint (Edge Runtime)
│   │   │   ├── contact/        # İletişim formu e-posta API
│   │   │   └── application/    # İK başvuru + CV yükleme API
│   │   │
│   │   ├── [lang]/             # 🌐 i18n dinamik rota segmenti (tr/en)
│   │   │   ├── about/          # Hakkımızda (+ AboutStatsSection, AboutValuesSection, AboutPartnersSection, AboutCertificationsSection, LocationsMap)
│   │   │   ├── contact/        # İletişim
│   │   │   ├── culture/        # Çalışma Kültürü
│   │   │   ├── career-paths/   # Kariyer Yolları
│   │   │   ├── learning/       # Eğitim ve Gelişim
│   │   │   ├── genc-muhendis-programi/  # Genç Mühendis Programı
│   │   │   ├── hr/             # İnsan Kaynakları
│   │   │   ├── partnerships/   # İş Ortakları
│   │   │   ├── social-contribution/ # Sürdürülebilir Değer
│   │   │   ├── meetsense-viewer/    # MeetSense Demo Görüntüleyici
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── software-development/
│   │   │   │   ├── managed-services/
│   │   │   │   └── devops/
│   │   │   │
│   │   │   ├── industries/
│   │   │   │   ├── banking/
│   │   │   │   ├── defense/
│   │   │   │   ├── telecommunications/
│   │   │   │   ├── retail/
│   │   │   │   └── retail-telecom/
│   │   │   │
│   │   │   ├── products/
│   │   │   │   ├── ai-hiring-assistant/
│   │   │   │   ├── cortex/
│   │   │   │   ├── cv-converter/
│   │   │   │   ├── doc2bot/
│   │   │   │   ├── docmind/
│   │   │   │   ├── hcm/
│   │   │   │   ├── meetsense/
│   │   │   │   └── praxila/
│   │   │   │
│   │   │   ├── resources/
│   │   │   │   ├── infographics/
│   │   │   │   └── success-stories/
│   │   │   │
│   │   │   ├── layout.tsx      # Lang layout (Header, Footer, GA, ChatBot)
│   │   │   ├── page.tsx        # Ana sayfa
│   │   │   ├── error.tsx       # Global hata sayfası
│   │   │   └── not-found.tsx   # 404 sayfası
│   │   │
│   │   ├── favicon.ico         # Favicon
│   │   ├── icon.png            # Next.js App Router favicon (otomatik)
│   │   ├── globals.css         # Tailwind v4 import + global stiller
│   │   └── sitemap.ts          # Dinamik sitemap üretimi
│   │
│   ├── components/
│   │   ├── analytics/          # GoogleAnalytics.tsx
│   │   ├── chat/               # ChatbotWidget.tsx
│   │   ├── forms/              # ContactForm.tsx
│   │   ├── home/               # HeroSlider, ServicesSection, IndustriesGrid, DeliveryModels
│   │   ├── hr/                 # ApplicationForm.tsx
│   │   ├── layout/             # Header, Footer, MobileNav, GlobalBreadcrumb
│   │   │   ├── header/         # MegaMenus.tsx, data.ts
│   │   │   └── search/         # SearchOverlay.tsx, data.ts
│   │   ├── resources/          # CaseStudyCard.tsx
│   │   ├── seo/                # StructuredData.tsx
│   │   └── ui/                 # Paylaşılan UI bileşenleri
│   │       ├── AnimatedElements.tsx
│   │       ├── Breadcrumb.tsx
│   │       ├── Button.tsx
│   │       ├── CaseStudyCard.tsx
│   │       ├── ContactCard.tsx
│   │       ├── Container.tsx
│   │       ├── ContentSection.tsx
│   │       ├── CultureCard.tsx
│   │       ├── GradientMesh.tsx
│   │       ├── Hero.tsx
│   │       ├── MetricCard.tsx
│   │       ├── Section.tsx
│   │       ├── TechStackGrid.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── Typography.tsx
│   │       ├── ZoomableImage.tsx
│   │       └── __tests__/      # UI bileşen testleri
│   │
│   ├── content/                # İçerik veri katmanı (TypeScript objeleri)
│   │   ├── home.ts
│   │   ├── software-development.ts
│   │   └── managed-services.ts
│   │
│   ├── data/
│   │   ├── case-studies.tr.ts  # Vaka çalışmaları (Türkçe)
│   │   └── case-studies.en.ts  # Vaka çalışmaları (İngilizce)
│   │
│   ├── dictionaries/           # 🌐 i18n sözlük dosyaları
│   │   ├── tr.json             # Türkçe çeviriler
│   │   └── en.json             # İngilizce çeviriler
│   │
│   ├── i18n-config.ts          # Dil yapılandırması (desteklenen diller, varsayılan dil)
│   ├── get-dictionary.ts       # Sözlük yükleyici (server-only)
│   │
│   ├── lib/
│   │   ├── routes.ts           # 🌐 TR/EN URL slug haritası ve link helper'ları
│   │   ├── seo.ts              # Canonical + hreflang helper'ları (locale-aware slug)
│   │   ├── email.ts            # Nodemailer transporter yapılandırması
│   │   └── utils.ts            # cn() class merge yardımcısı
│   │
│   ├── middleware.ts            # Locale prefix, TR slug rewrite/redirect + API rate limiting
│   └── test/
│       └── setup.ts            # Vitest test setup
│
├── scripts/
│   └── find-unused-images.js   # Kullanılmayan görsel tespit scripti
│
├── FRONTEND_STANDARDS.md       # Tasarım sistemi dokümantasyonu
├── next.config.ts              # Next.js yapılandırması (güvenlik başlıkları, CSP)
├── tsconfig.json               # TypeScript yapılandırması
├── postcss.config.mjs          # PostCSS + Tailwind v4
├── eslint.config.mjs           # ESLint yapılandırması
├── vitest.config.ts            # Vitest test yapılandırması
├── .env.example                # Ortam değişkenleri şablonu
└── package.json
```

---

## Kurulum

### Ön Gereksinimler

- **Node.js** 18 veya üzeri
- **npm** (veya yarn / pnpm)

### Adım Adım

**1. Repoyu klonlayın:**
```bash
git clone https://github.com/erdemerciyas/bgts.git
cd bgts-web
```

**2. Bağımlılıkları yükleyin:**
```bash
npm install
```

**3. Ortam değişkenlerini ayarlayın:**
```bash
cp .env.example .env.local
# .env.local dosyasını düzenleyin (aşağıya bakın)
```

**4. Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

**5. Production build:**
```bash
npm run build
npm start
```

---

## Vercel Deploy

Bu proje Vercel üzerinde sorunsuz çalışacak şekilde yapılandırılmıştır.

### Otomatik Deploy

1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. "New Project" ile GitHub repo'nuzu bağlayın (`erdemerciyas/bgts`)
3. Framework: **Next.js** (otomatik algılanır)
4. Root Directory: `.` (varsayılan)
5. **Environment Variables** ekleyin:

| Değişken | Açıklama |
|----------|----------|
| `GROQ_API_KEY` | Groq AI API key (chatbot için) |
| `SMTP_HOST` | SMTP sunucu adresi |
| `SMTP_PORT` | SMTP port (genellikle 587) |
| `SMTP_USER` | SMTP kullanıcı adı |
| `SMTP_PASS` | SMTP şifresi |
| `CONTACT_EMAIL` | İletişim formu hedef e-posta |
| `HR_EMAIL` | İK başvuru hedef e-posta |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics Measurement ID (G-XXXXXXXXXX) |

6. **Deploy** butonuna tıklayın

### Önemli Notlar

- **Edge Runtime:** `/api/chat` endpoint Edge Runtime üzerinde çalışır — Vercel Edge Functions uyumluluğu sağlanmıştır
- **Image Optimization:** `next.config.ts`'de `images.unsplash.com` ve `i.pravatar.cc` remote patterns olarak tanımlıdır
- **Security Headers:** CSP, HSTS, X-Frame-Options gibi güvenlik başlıkları `next.config.ts` içinde yapılandırılmıştır
- **Build Command:** `npm run build`
- **Install Command:** `npm install`

### Vercel CLI ile Deploy

```bash
npm i -g vercel
vercel
```

---

## Ortam Değişkenleri

`.env.local` dosyası oluşturun ve aşağıdaki değerleri doldurun:

```env
# AI Chatbot - Groq API
# Ücretsiz API key için: https://console.groq.com
GROQ_API_KEY=your_groq_api_key_here

# SMTP E-posta Yapılandırması
# Gerçek SMTP sağlayıcı bilgilerini girin
# Test için boş bırakırsanız Ethereal test hesabı otomatik oluşturulur
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password

# E-posta hedefleri
CONTACT_EMAIL=contact@bgts.com.tr
HR_EMAIL=hr@bgts.com.tr

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Not:** `.env.local` dosyası `.gitignore` kapsamındadır ve asla commit edilmemelidir.

---

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu (hot reload) |
| `npm run build` | Production build oluştur |
| `npm start` | Production sunucusunu başlat |
| `npm run lint` | ESLint ile kod analizi |
| `npm run test` | Vitest ile testleri çalıştır |
| `npm run test:ui` | Vitest UI ile tarayıcıda test izle |
| `npm run test:coverage` | Coverage raporu oluştur |

---

## Sayfalar ve Rotalar

> **Not:** Dosya sistemi İngilizce klasör adları kullanır (`about`, `services/...`). Ziyaretçiye görünen URL'ler dil bazlıdır. Türkçe canonical path'ler aşağıdaki gibidir; İngilizce karşılıkları `/en/about`, `/en/services/...` formatındadır.
>
> Locale prefix yoksa middleware otomatik olarak `/tr/...` ekler. Eski İngilizce Türkçe slug'lar (`/tr/about` gibi) kalıcı olarak yeni Türkçe URL'lere yönlendirilir.

### URL Eşleme Özeti (TR canonical)

| Dahili route | Türkçe URL |
|---|---|
| `/about` | `/hakkimizda` |
| `/contact` | `/iletisim` |
| `/products` | `/urunler` |
| `/services` | `/hizmetler` |
| `/industries` | `/sektorler` |
| `/resources` | `/bilgi-merkezi` |
| `/social-contribution` | `/yerini-al` |
| `/services/software-development` | `/hizmetler/yazilim-muhendisligi` |
| `/services/managed-services` | `/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi` |
| `/services/devops` | `/hizmetler/servis-dayanikliligi-muhendisligi` |
| `/industries/banking` | `/sektorler/bankacilik-finans` |
| `/industries/defense` | `/sektorler/savunma-sanayi` |
| `/industries/telecommunications` | `/sektorler/telekom` |
| `/industries/retail` | `/sektorler/perakende-e-ticaret` |
| `/industries/retail-telecom` | `/sektorler/diger-sektorler` |
| `/products/hcm` | `/urunler/hcm` |
| `/products/praxila` | `/urunler/praxilla` |
| `/products/cortex` | `/urunler/cortex` |
| `/products/meetsense` | `/urunler/meetsense` |
| `/products/doc2bot` | `/urunler/doc2bot` |
| `/products/docmind` | `/urunler/docmind` |
| `/products/ai-hiring-assistant` | `/urunler/yapay-zeka-ise-alim-asistani` |
| `/products/cv-converter` | `/urunler/cv-donusturucu` |
| `/career-paths` | `/kariyer-yollari` |
| `/culture` | `/calisma-kulturu` |
| `/learning` | `/egitim-ve-gelisim` |
| `/hr` | `/acik-pozisyonlar` |
| `/partnerships` | `/is-ortaklari` |
| `/resources/success-stories` | `/basari-hikayeleri` |
| `/resources/infographics` | `/infografikler` |
| `/meetsense-viewer` | `/meetsense-goruntuleyici` |
| `/genc-muhendis-programi` | `/genc-muhendis-programi` |
| `/yetenek-gelisim-modeli` | `/yetenek-gelisim-modeli` |

Yeni link üretirken dahili path kullanın; helper otomatik locale slug'ına çevirir:

```tsx
import { localizedHref, localizedPathForLang } from '@/lib/routes'

// Server / client — lang biliniyorsa
localizedHref('tr', '/about')           // → /tr/hakkimizda
localizedPathForLang(lang, '/contact')  // → /tr/iletisim veya /en/contact
```

### Kurumsal Sayfalar

| TR URL | EN URL | Sayfa |
|--------|--------|-------|
| `/tr/hakkimizda` | `/en/about` | Hakkımızda |
| `/tr/iletisim` | `/en/contact` | İletişim |
| `/tr/is-ortaklari` | `/en/partnerships` | İş Ortakları |
| `/tr/yerini-al` | `/en/social-contribution` | Sürdürülebilir Değer / Yerini Al |

### Hizmetler

| TR URL | EN URL | Sayfa |
|--------|--------|-------|
| `/tr/hizmetler/yazilim-muhendisligi` | `/en/services/software-development` | Yazılım Geliştirme |
| `/tr/hizmetler/veri-merkezi-platform-ve-uygulama-yonetimi` | `/en/services/managed-services` | Yönetilen Hizmetler (MSP) |
| `/tr/hizmetler/servis-dayanikliligi-muhendisligi` | `/en/services/devops` | DevOps & SRE |

### Sektörler

| TR URL | EN URL | Sayfa |
|--------|--------|-------|
| `/tr/sektorler/bankacilik-finans` | `/en/industries/banking` | Bankacılık & Finans |
| `/tr/sektorler/savunma-sanayi` | `/en/industries/defense` | Savunma Sanayi |
| `/tr/sektorler/telekom` | `/en/industries/telecommunications` | Telekomünikasyon |
| `/tr/sektorler/perakende-e-ticaret` | `/en/industries/retail` | Perakende & E-Ticaret |
| `/tr/sektorler/diger-sektorler` | `/en/industries/retail-telecom` | Perakende & Telekom |

### Ürünler (8 Adet)

| TR URL | EN URL | Ürün |
|--------|--------|------|
| `/tr/urunler` | `/en/products` | Ürün Kataloğu |
| `/tr/urunler/yapay-zeka-ise-alim-asistani` | `/en/products/ai-hiring-assistant` | AI Hiring Assistant |
| `/tr/urunler/cortex` | `/en/products/cortex` | Cortex |
| `/tr/urunler/cv-donusturucu` | `/en/products/cv-converter` | CV Converter |
| `/tr/urunler/doc2bot` | `/en/products/doc2bot` | Doc2Bot |
| `/tr/urunler/docmind` | `/en/products/docmind` | DocMind |
| `/tr/urunler/hcm` | `/en/products/hcm` | HCM Platform |
| `/tr/urunler/meetsense` | `/en/products/meetsense` | MeetSense |
| `/tr/urunler/praxilla` | `/en/products/praxila` | Praxila |

### Kariyer

| TR URL | EN URL | Sayfa |
|--------|--------|-------|
| `/tr/acik-pozisyonlar` | `/en/hr` | İnsan Kaynakları |
| `/tr/kariyer-yollari` | `/en/career-paths` | Kariyer Yolları |
| `/tr/calisma-kulturu` | `/en/culture` | Çalışma Kültürü |
| `/tr/egitim-ve-gelisim` | `/en/learning` | Eğitim ve Gelişim |
| `/tr/genc-muhendis-programi` | `/en/genc-muhendis-programi` | Genç Mühendis Programı |

### Kaynaklar

| TR URL | EN URL | Sayfa |
|--------|--------|-------|
| `/tr/basari-hikayeleri` | `/en/resources/success-stories` | Başarı Hikayeleri |
| `/tr/infografikler` | `/en/resources/infographics` | İnfografikler |

### Diğer

| TR URL | EN URL | Sayfa |
|--------|--------|-------|
| `/tr/meetsense-goruntuleyici` | `/en/meetsense-viewer` | MeetSense Demo Görüntüleyici |
| `/tr/yetenek-gelisim-modeli` | `/en/yetenek-gelisim-modeli` | Yetenek Gelişim Modeli |

---

## API Rotaları

Tüm API endpoint'leri **rate limiting middleware** tarafından korunmaktadır.

### `POST /api/chat`
AI chatbot konuşma endpoint'i. Edge Runtime üzerinde çalışır.

- **Rate Limit:** 10 istek/dakika (IP bazlı)

**Request Body:**
```json
{
  "messages": [
    { "role": "user", "content": "Hizmetleriniz neler?" }
  ]
}
```

**Response:** Vercel AI SDK data stream formatı (streaming)

**Model:** Groq — `llama-3.3-70b-versatile`

---

### `POST /api/contact`
İletişim formu e-posta gönderimi.

- **Rate Limit:** 5 istek/dakika (IP bazlı)

**Request Body (JSON):**
```json
{
  "name": "Ad Soyad",
  "email": "ornek@email.com",
  "company": "Şirket Adı",
  "phone": "0500 000 00 00",
  "message": "Mesaj metni",
  "consent": true
}
```

**Zorunlu alanlar:** `name`, `email`, `message`, `consent`

---

### `POST /api/application`
İK başvuru formu — CV dosyası ile birlikte.

- **Rate Limit:** 5 istek/dakika (IP bazlı)

**Request Body (FormData):**

| Alan | Tip | Zorunlu |
|------|-----|---------|
| fullName | string | ✅ |
| email | string | ✅ |
| phone | string | — |
| university | string | — |
| department | string | — |
| grade | string | — |
| message | string | — |
| cv | File (.pdf/.docx) | ✅ |

---

## AI Chatbot Sistemi

> **Not:** Chatbot sistemi şu anda pasif durumdadır. Altyapı hazır olup, `layout.tsx` dosyasından aktifleştirilebilir.

### Mimari

```
Kullanıcı (ChatbotWidget.tsx)
    ↓ useChat() hook (Vercel AI SDK)
POST /api/chat (Edge Runtime)
    ↓ streamText() (Vercel AI SDK)
Groq API (llama-3.3-70b-versatile)
    ↓ data stream
ChatbotWidget.tsx (gerçek zamanlı render)
```

### Persona: Ayla

Chatbot, "Ayla" adında bir BGTS kurumsal danışmanı kimliğiyle yapılandırılmıştır. Sistem prompt'u şu bilgi alanlarını kapsar:

- Tüm hizmetler (Yazılım Geliştirme, MSP, DevOps) ve teknik detayları
- Tüm ürünler (8 AI/kurumsal ürün) ve kullanım senaryoları
- Sektör çözümleri (Bankacılık, Savunma, Telekom, Perakende)
- Kariyer yolları, Genç Mühendis Programı, şirket kültürü
- İletişim yönlendirmeleri ve fiyatlandırma politikası

### Özellikler

| Özellik | Açıklama |
|---------|----------|
| Streaming | Yanıtlar karakter karakter gerçek zamanlı akıyor |
| Markdown | Kalın yazı, liste, tıklanabilir linkler destekleniyor |
| Hızlı Sorular | İlk açılışta 4 hazır soru butonu |
| Dil | Türkçe varsayılan; kullanıcı dili algılama |
| Yönlendirme | Ürün/hizmet adlarında otomatik sayfa linkleri |
| Persona | Robotik değil, insan gibi iletişim tarzı |

---

## Bileşen Mimarisi

### Layout Bileşenleri
- **Header:** Sticky header, logo, navigasyon linkleri, mega menü trigger'ları, arama ve LinkedIn ikonları
- **MegaMenus:** 5 farklı mega menü (Hizmetler, Ürünler, Sektörler, Kariyer, Kaynaklar) — ikon, açıklama ve alt başlıklar
- **MobileNav:** Tam ekran mobil navigasyon, accordion alt menüler, scroll lock
- **Footer:** Ofis bilgileri, sosyal medya, hızlı bağlantılar
- **GlobalBreadcrumb:** Otomatik breadcrumb navigasyonu; rota slug'ları `breadcrumb` sözlük anahtarından locale'e göre etiketlenir

### Ana Sayfa Bileşenleri
- **HeroSlider:** Çoklu slayt, otomatik ilerleme, swipe desteği, animasyonlu geçişler
- **ServicesSection:** Hizmet kartları grid'i
- **IndustriesGrid:** Sektör çözümleri grid'i
- **DeliveryModels:** İş modeli sunumu

### UI Bileşen Kütüphanesi (`components/ui/`)
- **Section:** Tutarlı dikey boşluk sağlayan sarmalayıcı
- **Container:** Yatay hizalama (max-width + padding)
- **Typography:** `Heading` ve `Text` bileşenleri (standart h1-h6 ve p yerine)
- **Hero:** Sayfa hero alanı (fotoğraflı / gradientli varyantlar)
- **Button:** CVA tabanlı varyant sistemi (primary, secondary, ghost, outline)
- **AnimatedElements:** Framer Motion ile scroll-triggered animasyon sarmalayıcıları
- **GradientMesh:** Animasyonlu gradient arka plan dekorasyonu
- **MetricCard:** Sayısal metrik gösterim kartı
- **CultureCard:** Kültür sayfası için özel kart bileşeni
- **TechStackGrid:** Teknoloji yığını gösterim grid'i
- **ZoomableImage:** Tıklanabilir büyütülebilir görsel
- **TestimonialCard:** Müşteri/çalışan referans kartı
- **ContentSection:** İçerik bölümü şablonu
- **ContactCard:** İletişim bilgi kartı

### Arama Sistemi
- **SearchOverlay:** Tam ekran arama overlay'i
- **data.ts:** 27+ öğeli arama endeksi (ürünler, sektörler, kariyer, hizmetler, kurumsal sayfalar)

---

## İçerik Yönetimi

Proje, içerik verilerini TypeScript objeleri olarak yönetir (headless CMS kullanılmamaktadır):

| Dosya | İçerik |
|-------|--------|
| `src/content/home.ts` | Ana sayfa tüm bölüm verileri |
| `src/content/software-development.ts` | Yazılım geliştirme hizmet detayları |
| `src/content/managed-services.ts` | Yönetilen hizmetler (MSP) detayları |
| `src/data/case-studies.tr.ts` | 20+ vaka çalışması — Türkçe (başlık, gereksinim, çözüm, teknolojiler) |
| `src/data/case-studies.en.ts` | 20+ vaka çalışması — İngilizce |
| `src/dictionaries/tr.json` | Tüm UI metinleri — Türkçe sözlük |
| `src/dictionaries/en.json` | Tüm UI metinleri — İngilizce sözlük |
| `src/components/layout/header/data.ts` | Mega menü navigasyon verileri |
| `src/components/layout/search/data.ts` | Arama endeksi verileri |

---

## Güvenlik

### HTTP Güvenlik Başlıkları (`next.config.ts`)
- **Strict-Transport-Security (HSTS):** 2 yıl, includeSubDomains, preload
- **X-Frame-Options:** SAMEORIGIN (clickjacking koruması)
- **X-Content-Type-Options:** nosniff (MIME sniffing koruması)
- **Referrer-Policy:** origin-when-cross-origin
- **Content-Security-Policy:** Detaylı kaynak kısıtlamaları (script, style, img, font, connect, frame)
- **Permissions-Policy:** Kamera, mikrofon, konum erişimi devre dışı
- **X-DNS-Prefetch-Control:** Açık (performans)

### Middleware (`middleware.ts`)

**i18n Locale Routing:**
- Locale prefix yoksa varsayılan dile (`tr`) yönlendirme
- `/tr/` altında Türkçe slug → dahili route **rewrite**; eski İngilizce slug → Türkçe URL **301 redirect**
- Statik dosyalar ve API rotaları için locale redirect atlanır

**API Rate Limiting:**
- IP bazlı istek sınırlama (in-memory Map)
- `/api/chat`: 10 istek/dakika
- `/api/contact`: 5 istek/dakika
- `/api/application`: 5 istek/dakika
- Otomatik bellek temizleme (60 saniyede bir expired entry silimi)
- 429 Too Many Requests yanıtı (Türkçe hata mesajı)

### Form Güvenliği
- Zod schema validasyonu (sunucu tarafı)
- GDPR onay kontrolü
- Dosya tipi kısıtlaması (.pdf, .docx)

---

## SEO ve Performans

### Metadata Stratejisi
- Her sayfa için **dinamik `generateMetadata`** ile locale-aware metadata üretimi
- TR/EN dile göre `title`, `description`, `keywords` otomatik değişir
- OpenGraph (`url`, `locale`) ve Twitter Card meta tag'leri locale ile eşlenir
- **Canonical URL'ler locale-aware:** Her sayfa kendi diline ait canonical üretir (`/tr/hakkimizda`, `/en/about`)
- Tüm metadata mantığı `src/lib/seo.ts` + `src/lib/routes.ts` üzerinden locale slug eşlemesi yapılır

### hreflang ve Çoklu Dil SEO
- Her sayfada otomatik `<link rel="alternate" hreflang="tr">`, `hreflang="en">`, `hreflang="x-default">` etiketleri
- Next.js `Metadata.alternates.languages` API'si üzerinden üretim
- Google'a iki dilli içerik açıkça bildirilir → duplicate content riski yoktur

### Yapılandırılmış Veri (JSON-LD)
- **Organization:** Şirket bilgileri
- **Breadcrumb:** Sayfa hiyerarşisi
- **Product:** Ürün sayfalarında detaylı ürün bilgisi

### Sitemap
- `src/app/sitemap.ts` ile dinamik üretim
- **Locale-aware slug'lar:** Her route için TR ve EN canonical URL'ler ayrı slug ile listelenir
- Her sitemap girdisinde `alternates.languages` ile hreflang eşleşmesi
- Öncelik ve değişim sıklığı bilgileri

### Görsel Optimizasyonu
- `next/image` ile otomatik WebP dönüşümü ve lazy loading
- Responsive srcset üretimi
- Uzak görseller için whitelist (Unsplash, Pravatar)

---

## Tasarım Sistemi

Projenin tüm UI standartları `FRONTEND_STANDARDS.md` dosyasında belgelenmiştir.

### Temel Prensipler
- Tüm bölümler `<Section>` bileşeni ile sarılır (tutarlı dikey boşluk)
- Yatay hizalama `<Container>` bileşeni ile sağlanır (max-width + padding)
- Başlıklar için `<Heading>`, paragraflar için `<Text>` bileşenleri kullanılır
- Ham `h1-h6` veya `p` etiketleri doğrudan kullanılmaz

### Renk Paleti
| Amaç | Renk | Tailwind Sınıfı |
|------|------|-----------------|
| Birincil | Action Blue | `blue-700` / `blue-600` |
| İkincil | Koyu Zemin | `slate-900` |
| Vurgu (CTA) | Turuncu | `orange-500` |
| Nötr | Gri Skalası | `gray-50` – `gray-800` |

### Animasyonlar
- **Scroll-triggered:** `opacity 0→1`, `y 20→0` (Framer Motion `whileInView`)
- **Spring config:** `damping: 25`, `stiffness: 300`
- **Stagger:** Kart listeleri için sıralı giriş animasyonları
- **Sayfa geçişleri:** `duration: 0.3s ease`

### Tailwind CSS v4
- PostCSS entegrasyonu (`@tailwindcss/postcss`)
- `globals.css` üzerinden `@import "tailwindcss"` kullanımı
- Ayrı `tailwind.config.*` dosyası yok (v4 CSS-first yaklaşım)

---

## Test

```bash
# Tüm testleri çalıştır
npm run test

# Tarayıcı UI'da izle
npm run test:ui

# Coverage raporu
npm run test:coverage
```

**Test Altyapısı:**
- **Vitest** — Test runner
- **@testing-library/react** — React bileşen testleri
- **@testing-library/user-event** — Kullanıcı etkileşim simülasyonu
- **@testing-library/jest-dom** — DOM matchers
- **jsdom** — Tarayıcı ortamı emülasyonu
- **@vitejs/plugin-react** — React desteği
- **@vitest/coverage-v8** — Coverage raporlama

---

## Versiyon Geçmişi

| Versiyon | Tarih | Öne Çıkan Değişiklikler |
|----------|-------|-------------------------|
| v0.36.0 | — | **Türkçe URL slug altyapısı:** `src/lib/routes.ts` ile merkezi TR/EN route haritası; middleware rewrite + legacy 301 redirect; `localizedHref`, `localizedPathForLang`, `switchLocalePath` helper'ları; navigasyon, ana sayfa, ürün sayfaları, SEO/sitemap, chatbot prompt ve breadcrumb etiketleri locale-aware URL'lere taşındı; TR canonical path'ler (`/hakkimizda`, `/hizmetler/...`, `/sektorler/...`, `/urunler/...` vb.) |
| v0.35.0 | — | **i18n slug ve breadcrumb düzeltmeleri:** `tr.json` içindeki çift `breadcrumb` anahtarı birleştirildi (36 slug etiketi TR/EN eşleşmesi); breadcrumb etiketleri metadata ile hizalandı (`genc-muhendis-programi`, `yetenek-gelisim-modeli`, `hr`, `culture`, `learning`, `partnerships`, `social-contribution`, `meetsense-viewer`); `genc-muhendis-programi` metadata "Genç Mühendis Programı" / "Young Engineers Program" olarak düzeltildi; `meetsense-viewer` hreflang (`buildAlternates`) eklendi; sitemap'e `yetenek-gelisim-modeli`, `hr`, `meetsense-viewer` rotaları eklendi; site aramasına Yetenek Gelişim Modeli kaydı eklendi. |
| v0.34.0 | — | **Hakkımızda — İş Ortaklıkları ve Sertifikasyonlar geri eklendi:** Değerlerimiz ile ofis haritası arasına eski about sayfasındaki iki bölüm yeniden yerleştirildi; `AboutPartnersSection.tsx` (koyu arka plan, 9 partner logosu grid), `AboutCertificationsSection.tsx` (açık arka plan, 6 ISO sertifikası + etiketler); mevcut `about.partners` ve `about.certifications` sözlük anahtarları kullanılıyor (TR/EN). |
| v0.33.0 | — | **Hakkımızda — Sayılarla BGTS banner kartı:** Hero ile Değerlerimiz arasına `AboutStatsSection.tsx` eklendi; hero altına taşan (`-mt-14 md:-mt-24`) tek parça bar banner card (gradient üst şerit, kurumsal vektör geometri, `divide-x` istatistik barı); 5 metrik: 30+ yıllık deneyim, 2.000+ çalışan, 1.400+ mühendis, 1.500+ tamamlanan proje, 50+ yetenek gelişim programı; `about.byNumbers` sözlük anahtarı (TR/EN). **Hero başlık:** "Hakkımızda" / "About Us" olarak sadeleştirildi. |
| v0.32.0 | — | **Hakkımızda — Değerlerimiz ve Ofislerimiz revizyonu:** Değerlerimiz bloğu `AboutValuesSection.tsx` client bileşenine taşındı; tam genişlikte yığılmış paneller, büyük tipografi (`h3` + `bodyLg`), kurumsal renk token'ları ve arka plan vektör geometrisi ile premium editorial düzen; fotoğraf kullanılmıyor, "Felsefemiz" badge kaldırıldı, sözlük metinleri tam uzunlukta korunuyor; `.cursor/skills/bgts-about-values/` tasarım skill paketi eklendi. **Hero başlık:** "Güçlü Mühendislik." / "Sürdürülebilir Başarı." iki satırda render (`\n` + `<br />`, TR/EN). **Ofislerimiz:** Hizmet Noktaları bölümü tamamen kaldırıldı (harita pinleri, alt liste, `deliveryCenters` verisi); yalnızca ofis pinleri ve ofis kartları kaldı; açıklama metni sadeleştirildi. |
| v0.31.0 | — | **İletişim sayfası Ankara ofisi görseli:** Ankara ofisi için Bilkent Cyberpark görseli (`bilkent-cyberpark.jpg`) eklendi; TR/EN sözlüklerde Ankara ofis görseli `itu-ari3.jpg` → `bilkent-cyberpark.jpg` olarak güncellendi. |
| v0.30.0 | — | **Hakkımızda hero alanı ana sayfa slider formatına geçiş:** Hero bileşeni yerine ana sayfadaki HeroSlider ile aynı görsel formatta özel hero bölümü oluşturuldu; sola yaslı içerik düzeni (`max-w-4xl` başlık, `max-w-2xl` alt metin); çift katmanlı gradient overlay (`from-slate-950/90 via-slate-900/60` + `from-slate-950 via-transparent`); yükseklik `min-h-[55svh] md:h-[75vh] md:min-h-[500px]`; tipografi: başlık `text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl`, alt metin `text-base md:text-xl font-light drop-shadow-lg`; yeni içerik: "Güçlü Mühendislik. Sürdürülebilir Başarı." / "30 yılı aşkın deneyimimiz ve uzman ekiplerimizle teknoloji projelerini güvenle hayata geçiriyoruz."; Hero bileşeni import'u kaldırıldı, `next/image` ile doğrudan arka plan görsel yönetimi. |
| v0.29.0 | — | **Hakkımızda hero alanı sadeleştirme:** Hero başlığı kaldırılarak yalnızca tek paragraf metin bırakıldı ("Güçlü Mühendislik Kültürümüz, Sektör Uzmanlığımız ve Deneyimli Ekiplerimizle Teknoloji Yolculuğunuza Değer Katıyoruz"); kayan istatistik barı (30 Yıl, 3000+ Proje, 14 Ülke, 850+ Uzman, 100+ Partner) tamamen kaldırıldı; hero yüksekliği `min-h-[68vh]` olarak ayarlandı; hero alt yazı okunabilirliği artırıldı (`text-xl md:text-2xl lg:text-3xl`, `font-semibold`, `drop-shadow-lg`, `max-w-3xl`, tam beyaz); Hero bileşeninde `title` ve `subtitle` prop'ları opsiyonel hale getirildi, başlık yoksa render atlanıyor; TR/EN sözlük metinleri güncellendi. |
| v0.28.0 | — | **Hakkımızda sayfası yeniden tasarımı:** Değerlerimiz bölümü alternating timeline layout ile yeniden kurgulandı (sol-sağ yaslı kartlar, merkezi çizgi ve renkli dot bağlantıları); yarı-opak geometrik SVG şekilleri arka plana dekoratif olarak eklendi (içi dolu daireler, altıgenler, baklava dilimleri); People-First görseli doğal oranında ve kesmesiz gösteriliyor; istatistik barı backdrop-blur ve responsive tipografi ile optimize edildi; iletişim formu ve sol panel kaldırılarak sayfa sadeleştirildi; "Felsefemiz" badge etiketi kaldırıldı. |
| v0.27.0 | — | **Kariyer — Staj programı ve İK içerik düzeni:** `/{lang}/career-paths` sayfasında `#staj-programi` bölümü açık (light) tema ile sayfa bütünlüğüne uyumlu hale getirildi; bölüm başlığı ve giriş metni sol kolonda, 2026 stajyer kriterleri sağ kolonda; `careers_internship` sözlüğüne `sectionTitle` ve `applyCta` (TR/EN) eklendi; tekrarlayan intro sağ kolondan kaldırıldı; başvuru CTA’sı LinkedIn şirket iş ilanlarına yönlendiriliyor. **İK / Genç Mühendis:** Yetenek Hızlandırma bileşeninde (`TalentAccelerationSection`) teslimat, ekip olgunluğu ve iş değeri alt blokları ile ilgili tip ve sözlük girdileri sadeleştirildi; `staj.jpg` görseli güncellendi. |
| v0.26.0 | — | **i18n SEO altyapısı (canonical + hreflang):** `src/lib/seo.ts` helper'ı eklendi (`buildAlternates`, `buildOgUrl`, `ogLocale`, `SITE_URL`); tüm sayfa `layout.tsx` ve ürün `page.tsx` dosyaları static `metadata` exportundan dinamik `generateMetadata` fonksiyonuna geçirildi (32 dosya); her sayfa locale'e göre TR/EN title + description üretiyor; canonical URL'ler artık doğru locale ile eşleşiyor (`/en/about` sayfasının canonical'ı `https://bgts.com.tr/en/about`); her sayfada hreflang etiketleri (`tr`, `en`, `x-default`) Google'a iki dilli içeriği bildiriyor; `sitemap.ts` her route için hem `/tr/...` hem `/en/...` URL'lerini `alternates.languages` ile yayınlıyor; SEO yaklaşımı: URL slug'lar tek dil İngilizce kalır, metadata ve hreflang locale-aware yönetilir (kurumsal B2B standardı) |
| v0.25.0 | — | **Navigasyon ve mobil hero düzeltmeleri:** Yazılım Geliştirme alt menüsü yeniden sıralandı (Yazılım Geliştirme Hizmetleri ilk sırada); hizmet detay sayfası sticky sidebar başlıkları sağdaki blok başlıklarıyla eşitlendi (`domain.title`); nav menüde "Telekomünikasyon" → "Telekomünikasyon & Teknoloji", "MSP & Yönetilen Hizmetler" → "MSP & AIOps" olarak güncellendi; Ürünler mega menüsü 4 kurumsal ürüne (Cortex, HCM, Praxila, MeetSense) odaklı 2x2 grid tasarımıyla yeniden kurgulandı; mobil hero slider'da içerik kırpılması ve bir sonraki section ile çakışma giderildi (`min-h-[55svh]`, üst padding, beyaz kart `mt-8` ile artık binmiyor); slide göstergeleri her ekranda slider'ın gerçek alt-merkezinde sabitlendi, desktop'ta beyaz kartın üzerine binmesi engellendi (`md:bottom-44`) |
| v0.24.0 | — | **MSP yönetilen hizmetler kart düzeltmeleri:** KOM ve Analytics grid kartlarında sabit `h-10` başlık yüksekliğinden kaynaklanan metin çakışmaları giderildi (örn. "Servis Organizasyonu Tasarımı" başlığının altındaki liste öğeleriyle ezişmesi); başlıklar `min-h-10 leading-snug break-words` ile esnek hale getirildi |
| v0.23.0 | — | **Mobil uyumluluk ve hizmet sayfası iyileştirmeleri:** HeroSlider mobil layout optimize edildi (kompakt partner kartları, indicator düzeltmesi); Yazılım Geliştirme ve Yönetilen Hizmetler sayfalarında hizmet kartları mobilde yan yana layout'a geçirildi; Yönetilen Hizmetler kartlarına `/images/iso/` görsel eşleştirmesi eklendi (IMAGES map) |
| v0.22.0 | — | **Çoklu dil desteği (i18n):** Türkçe/İngilizce tam destek; `[lang]` dinamik rota segmenti; middleware ile otomatik dil algılama; JSON sözlük sistemi; vaka çalışmaları dil bazlı ayrımı; tüm sayfa rotaları `/{lang}/...` formatına taşındı |
| v0.21.0 | — | Favicon eklendi; HCM ürün sayfası video alanı cover görseline dönüştürüldü; İnfografik hero alanı fotoğraflı tasarıma geçirildi; Ana sayfa slider sıralama güncellendi; Vaka çalışması içerik düzeltmeleri |
| v0.20.0 | — | Sürdürülebilir Değer kolaj görselleri orijinal oranlarına uygun hale getirildi; kolaj kartları gerçek görsel boyutlarına göre yeniden boyutlandırıldı |
| v0.19.0 | — | Sayfa hero alanları fotoğraflı tasarıma geçirildi; kolaj fotoğraf hero tasarımı; Genç Mühendis içerik revizyonu; stok fotoğraflar yerine kurumsal görsellere geçiş |
| v0.18.0 | — | Logo sistemi yenilendi; beyaz logo varyantı; mega menü kart layout iyileştirmeleri; kullanılmayan referans logolar temizlendi |
| v0.17.0 | — | Kapsamlı SEO revizyonu; tüm sayfalar için metadata layout'ları; 15+ kullanılmayan bileşen temizliği; JSON-LD yapılandırılmış veri; middleware eklenmesi |
| v0.16.0 | — | Genç Mühendis Programı revizyonları; başlıklar kısaltıldı; içerikler güncellendi |
| v0.15.0 | — | Homepage slider revizyonları; footer ofis güncellemesi; gradient mask efekti; chatbot pasife alındı |
| v0.14.0 | — | Hero alanları optimizasyonu; slider ve içerik iyileştirmeleri |
| v0.13.0 | — | Mobil navigasyon tam yeniden yazım; chatbot bilgi bankası güncelleme |
| v0.12.0 | — | Responsive optimizasyon; Savunma Sanayi sayfa revizyonu |
| v0.11.0 | — | İş Ortakları sayfası; MSP görsel revizyonu; Sürdürülebilir Değer |
| v0.10.0 | — | MeetSense ve Kültür sayfası UI güncellemeleri |
| v0.9.0 | — | Cortex AI platformu; chatbot bilgi bankası genişletme |
| v0.8.0 | — | MeetSense ürün sayfası; Genç Mühendis Akademisi redesign |
| v0.6.0 | — | Nodemailer SMTP; CV yükleme ve e-posta eki |
| v0.5.0 | — | BGTS Dijital Asistan chatbot (Groq + Llama 3.3) |
| v0.4.0 | — | Codebase temizliği; Header mega menu revizyonu |
| v0.3.0 | — | Bankacılık redesign; AI Hiring Assistant; İnfografikler |

---

## Çoklu Dil Desteği (i18n)

### Mimari

```
Kullanıcı isteği (örn: /hakkimizda veya /about)
    ↓ middleware.ts
Locale prefix yoksa → /tr/... yönlendirme
/tr/ altında eski EN slug → 301 Türkçe URL
/tr/ altında TR slug → dahili route rewrite (örn. /tr/hakkimizda → about/page)
    ↓ [lang] dinamik segment + dahili klasör
getDictionary(lang) → ilgili JSON sözlük yüklenir
    ↓ Server Component
Sayfa render edilir; linkler localizedHref() ile üretilir
```

Dil değiştirici (`Header`, `MobileNav`) `switchLocalePath()` ile aynı sayfanın karşı dil URL'ine geçer (`/tr/hakkimizda` ↔ `/en/about`).

### Dosya Yapısı

| Dosya | Görev |
|-------|-------|
| `src/i18n-config.ts` | Desteklenen diller ve varsayılan dil tanımı |
| `src/lib/routes.ts` | TR/EN slug haritası, redirect/rewrite lookup, link helper'ları |
| `src/lib/seo.ts` | Locale-aware canonical + hreflang (`buildAlternates`, `buildOgUrl`) |
| `src/get-dictionary.ts` | Server-only sözlük yükleyici fonksiyon |
| `src/dictionaries/tr.json` | Türkçe çeviriler; `breadcrumb` slug etiketleri (Türkçe URL segmentleri dahil) |
| `src/dictionaries/en.json` | İngilizce çeviriler; `breadcrumb` slug etiketleri |
| `src/middleware.ts` | Locale prefix, TR slug rewrite/redirect, API rate limiting |
| `src/data/case-studies.tr.ts` | Vaka çalışmaları (Türkçe) |
| `src/data/case-studies.en.ts` | Vaka çalışmaları (İngilizce) |

### Yeni Route Ekleme

1. `src/app/[lang]/...` altında sayfa klasörünü oluşturun (dahili path İngilizce kalabilir)
2. `src/lib/routes.ts` içindeki `ROUTE_MAP`'e TR/EN slug çiftini ekleyin
3. Gerekirse `TR_LEGACY_REDIRECTS`'e eski slug → yeni TR slug eşlemesi ekleyin
4. `src/dictionaries/*/json` breadcrumb anahtarlarına yeni segment etiketlerini ekleyin
5. Navigasyon ve arama endeksinde `localizedHref()` / dahili path kullanın

---

## Katkıda Bulunma

1. Yeni özellik için branch oluşturun:
   ```bash
   git checkout -b feature/yeni-ozellik
   ```
2. Değişikliklerinizi commit'leyin:
   ```bash
   git commit -m 'feat: yeni özellik eklendi'
   ```
3. Branch'i push edin:
   ```bash
   git push origin feature/yeni-ozellik
   ```
4. Pull Request açın.

**Commit Mesajı Kuralları:**

| Prefix | Kullanım |
|--------|----------|
| `feat:` | Yeni özellik |
| `fix:` | Hata düzeltme |
| `refactor:` | Yapısal iyileştirme |
| `style:` | Stil değişikliği (mantık yok) |
| `docs:` | Dokümantasyon |
| `chore:` | Build, bağımlılık, yapılandırma |
| `test:` | Test ekleme/düzeltme |
| `perf:` | Performans iyileştirmesi |

---

## Lisans

Bu proje özel (private) bir projedir. Tüm hakları saklıdır.

© 2026 BGTS — Business & Global Technology Solutions
