# BGTS — Business & Global Technology Solutions

> Kurumsal dijital dönüşüme liderlik eden, yüksek performanslı bir teknoloji şirketinin modern web platformu.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-purple?logo=framer)
![Vitest](https://img.shields.io/badge/Vitest-4-6e9f18?logo=vitest)

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
- [Katkıda Bulunma](#katkıda-bulunma)

---

## Proje Hakkında

Bu proje, **BGTS** (Business & Global Technology Solutions) şirketinin kurumsal web varlığını en güncel web teknolojileriyle sunan, performans, güvenlik ve kullanıcı deneyimi odaklı bir platformdur. Next.js 16 App Router mimarisi üzerine inşa edilmiş olup; SSR/SSG yetenekleri, Edge Runtime API'lar, rate limiting middleware, Google Analytics entegrasyonu ve AI chatbot sistemi içermektedir.

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
| Markdown Render | react-markdown | ^10.1 |
| E-posta | Nodemailer | ^8 |
| Analytics | Google Analytics (GA4) | — |
| Test | Vitest + Testing Library + jsdom | ^4 |
| Linting | ESLint + eslint-config-next | ^9 |

---

## Özellikler

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
- `sitemap.ts` ile 30+ URL'lik otomatik sitemap üretimi
- `robots.txt` arama motoru yönergeleri
- Schema.org yapılandırılmış veri (Organization, Breadcrumb, Product JSON-LD)
- `next/image` ile otomatik görsel optimizasyonu (WebP, lazy loading)
- Güvenlik başlıkları (HSTS, X-Frame-Options, CSP, Permissions-Policy)
- Google Analytics (GA4) entegrasyonu

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
│   │   ├── about/              # Hakkımızda (+ LocationsMap bileşeni)
│   │   ├── contact/            # İletişim
│   │   ├── culture/            # Çalışma Kültürü
│   │   ├── career-paths/       # Kariyer Yolları
│   │   ├── learning/           # Eğitim ve Gelişim
│   │   ├── genc-muhendis-programi/  # Genç Mühendis Programı
│   │   ├── hr/                 # İnsan Kaynakları
│   │   ├── partnerships/       # İş Ortakları
│   │   ├── social-contribution/# Sürdürülebilir Değer
│   │   ├── meetsense-viewer/   # MeetSense Demo Görüntüleyici
│   │   │
│   │   ├── services/
│   │   │   ├── software-development/
│   │   │   ├── managed-services/
│   │   │   └── devops/
│   │   │
│   │   ├── industries/
│   │   │   ├── banking/
│   │   │   ├── defense/
│   │   │   ├── telecommunications/
│   │   │   ├── retail/
│   │   │   └── retail-telecom/
│   │   │
│   │   ├── products/
│   │   │   ├── ai-hiring-assistant/
│   │   │   ├── cortex/
│   │   │   ├── cv-converter/
│   │   │   ├── doc2bot/
│   │   │   ├── docmind/
│   │   │   ├── hcm/
│   │   │   ├── meetsense/
│   │   │   └── praxila/
│   │   │
│   │   ├── resources/
│   │   │   ├── infographics/
│   │   │   └── success-stories/
│   │   │
│   │   ├── layout.tsx          # Root layout (Header, Footer, GA, ChatBot)
│   │   ├── page.tsx            # Ana sayfa
│   │   ├── globals.css         # Tailwind v4 import + global stiller
│   │   ├── sitemap.ts          # Dinamik sitemap üretimi
│   │   ├── error.tsx           # Global hata sayfası
│   │   └── not-found.tsx       # 404 sayfası
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
│   │   └── case-studies.ts     # 20+ vaka çalışması verisi
│   │
│   ├── lib/
│   │   ├── email.ts            # Nodemailer transporter yapılandırması
│   │   └── utils.ts            # cn() class merge yardımcısı
│   │
│   ├── middleware.ts            # API rate limiting middleware
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

### Kurumsal Sayfalar

| Rota | Sayfa | Açıklama |
|------|-------|----------|
| `/` | Ana Sayfa | Hero slider, hizmetler, sektörler, teslimat modelleri |
| `/about` | Hakkımızda | Şirket tanıtımı, lokasyon haritası |
| `/contact` | İletişim | Premium tasarım iletişim formu, ofis bilgileri |
| `/partnerships` | İş Ortakları | Stratejik iş ortaklıkları |
| `/social-contribution` | Sürdürülebilir Değer | Kolaj fotoğraflı sosyal sorumluluk |

### Hizmetler

| Rota | Sayfa |
|------|-------|
| `/services/software-development` | Yazılım Geliştirme |
| `/services/managed-services` | Yönetilen Hizmetler (MSP) |
| `/services/devops` | DevOps & Cloud |

### Sektörler

| Rota | Sayfa |
|------|-------|
| `/industries/banking` | Bankacılık & Finans |
| `/industries/defense` | Savunma Sanayi |
| `/industries/telecommunications` | Telekomünikasyon |
| `/industries/retail` | Perakende & E-Ticaret |
| `/industries/retail-telecom` | Perakende & Telekom |

### Ürünler (8 Adet)

| Rota | Ürün | Açıklama |
|------|------|----------|
| `/products` | Ürün Kataloğu | Tüm ürünlerin listesi |
| `/products/ai-hiring-assistant` | AI Hiring Assistant | Yapay zeka destekli işe alım asistanı |
| `/products/cortex` | Cortex | AI platform çözümü |
| `/products/cv-converter` | CV Converter | Özgeçmiş dönüştürme aracı |
| `/products/doc2bot` | Doc2Bot | Doküman tabanlı chatbot oluşturucu |
| `/products/docmind` | DocMind | Akıllı doküman analiz platformu |
| `/products/hcm` | HCM Platform | İnsan kaynakları yönetim sistemi |
| `/products/meetsense` | MeetSense | Toplantı analiz ve raporlama |
| `/products/praxila` | Praxila | Süreç yönetimi çözümü |

### Kariyer

| Rota | Sayfa |
|------|-------|
| `/hr` | İnsan Kaynakları |
| `/career-paths` | Kariyer Yolları |
| `/culture` | Çalışma Kültürü |
| `/learning` | Eğitim ve Gelişim |
| `/genc-muhendis-programi` | Genç Mühendis Programı |

### Kaynaklar

| Rota | Sayfa |
|------|-------|
| `/resources/success-stories` | Başarı Hikayeleri (Case Studies) |
| `/resources/infographics` | İnfografikler |

### Diğer

| Rota | Sayfa |
|------|-------|
| `/meetsense-viewer` | MeetSense Demo Görüntüleyici |

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
- **GlobalBreadcrumb:** Otomatik breadcrumb navigasyonu

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
| `src/data/case-studies.ts` | 20+ vaka çalışması (başlık, gereksinim, çözüm, teknolojiler) |
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

### API Rate Limiting (`middleware.ts`)
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
- Her sayfa için özel `layout.tsx` ile metadata tanımları
- OpenGraph ve Twitter Card meta tag'leri
- Canonical URL'ler

### Yapılandırılmış Veri (JSON-LD)
- **Organization:** Şirket bilgileri
- **Breadcrumb:** Sayfa hiyerarşisi
- **Product:** Ürün sayfalarında detaylı ürün bilgisi

### Sitemap
- `src/app/sitemap.ts` ile dinamik üretim
- 30+ URL, öncelik ve değişim sıklığı bilgileri
- Kurumsal, hizmet, sektör, ürün, kariyer ve kaynak sayfaları

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
