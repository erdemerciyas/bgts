# BGTS — Business & Global Technology Solutions

> Kurumsal dijital dönüşüme liderlik eden, yüksek performanslı bir teknoloji şirketinin modern web platformu.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-purple?logo=framer)

---

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Özellikler](#özellikler)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum](#kurulum)
- [Ortam Değişkenleri](#ortam-değişkenleri)
- [API Rotaları](#api-rotaları)
- [AI Chatbot Sistemi](#ai-chatbot-sistemi)
- [Sayfalar ve Rotalar](#sayfalar-ve-rotalar)
- [Tasarım Sistemi](#tasarım-sistemi)
- [Test](#test)
- [Versiyon Geçmişi](#versiyon-geçmişi)

---

## Proje Hakkında

Bu proje, BGTS'nin kurumsal web varlığını en güncel web teknolojileriyle sunan, performans, güvenlik ve kullanıcı deneyimi odaklı bir platformdur. Next.js App Router mimarisi üzerine inşa edilmiş; SSR/SSG yetenekleri, edge runtime API'lar ve AI entegrasyonları içermektedir.

**Hedefler:**
- Kurumsal marka kimliğini güçlü biçimde yansıtmak
- Müşteri adaylarını doğru servis ve ürün sayfalarına yönlendirmek
- Kariyer odaklı ziyaretçilere şeffaf bir büyüme yolu sunmak
- AI destekli chatbot ile 7/24 kurumsal danışmanlık sağlamak (şu anda pasif)

---

## Teknoloji Yığını

| Katman | Teknoloji | Versiyon |
|--------|-----------|----------|
| Framework | Next.js (App Router) | 16.1.1 |
| Dil | TypeScript | ^5 |
| UI Kütüphanesi | React | 19.2.3 |
| Stillendirme | Tailwind CSS | v4 |
| Animasyon | Framer Motion | ^12 |
| İkon Seti | Lucide React | ^0.562 |
| Form Yönetimi | React Hook Form + Zod | 7.x + 4.x |
| AI / Chatbot | Vercel AI SDK + Groq | 3.x / Llama 3.3 70B |
| E-posta | Nodemailer | ^8 |
| Doküman Ayrıştırma | pdf-parse, officeparser | — |
| Test | Vitest + Testing Library | ^4 |

---

## Özellikler

### Tasarım ve Kullanıcı Deneyimi
- **Mega Menu Navigasyon:** Hizmetler, Ürünler, Sektörler, Kariyer ve Kaynaklar için tam genişlikte menüler
- **Responsive Tasarım:** Mobil öncelikli yaklaşım; mobil navigasyon tam yeniden yazıldı (accordion, scroll lock, backdrop)
- **Hero Slider:** Ana sayfada çok slaytlı, animasyonlu kahraman alanı
- **Framer Motion Animasyonları:** Scroll-triggered reveal, spring animasyonları, sayfa geçişleri
- **Glassmorphism Efektleri:** Cam efektli kart ve bölüm tasarımları

### AI Destekli Chatbot (Ayla) — *Şu anda pasif*
- Groq API üzerinde çalışan Llama 3.3 70B modeli
- Persona bazlı sistem prompt: "Ayla" adında BGTS kurumsal danışmanı kimliği
- Hizmet, ürün ve kariyer konularında derin bilgi tabanı
- Hızlı soru butonları (ilk açılışta)
- Gerçek zamanlı streaming yanıtlar
- Tıklanabilir Markdown linkleri ile sayfa yönlendirmeleri

### Form ve E-posta Sistemi
- **İletişim Formu:** Zod validasyonlu, Nodemailer ile e-posta gönderimi
- **Genç Mühendis Başvurusu:** CV dosyası yükleme ve e-posta eki olarak iletme
- GDPR onay checkbox'ı
- Hata/başarı bildirim mekanizmaları

### SEO ve Performans
- Her sayfa için özelleştirilmiş metadata (title, description, OpenGraph, Twitter Card)
- `sitemap.xml` otomatik üretimi
- Schema.org yapılandırılmış veri (Organization, Breadcrumb)
- `next/image` ile otomatik görsel optimizasyonu
- Güvenlik başlıkları (HSTS, X-Frame-Options, X-Content-Type-Options)

### Site İçi Arama
- 27 öğeli arama endeksi: 8 ürün, 4 sektör, 5 kariyer, 5 kurumsal sayfa ve hizmetler
- Zengin arama etiketleri ile hızlı erişim

---

## Proje Yapısı

```
bgts-web/
├── public/
│   └── images/              # Tüm statik görseller
│       ├── headers/         # Sayfa hero görselleri
│       ├── iso/             # İzometrik illüstrasyonlar (MSP)
│       └── logos/           # Marka ve partner logolar
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/
│   │   │   ├── chat/        # AI chatbot endpoint (Edge Runtime)
│   │   │   ├── contact/     # İletişim formu e-posta API
│   │   │   └── application/ # İK başvuru + CV yükleme API
│   │   ├── about/
│   │   ├── contact/
│   │   ├── culture/
│   │   ├── career-paths/
│   │   ├── learning/
│   │   ├── genc-muhendis-programi/
│   │   ├── hr/
│   │   ├── partnerships/
│   │   ├── social-contribution/
│   │   ├── industries/
│   │   │   ├── banking/
│   │   │   ├── defense/
│   │   │   ├── telecommunications/
│   │   │   └── retail/
│   │   ├── products/
│   │   │   ├── ai-hiring-assistant/
│   │   │   ├── cortex/
│   │   │   ├── cv-converter/
│   │   │   ├── doc2bot/
│   │   │   ├── docmind/
│   │   │   ├── hcm/
│   │   │   ├── meetsense/
│   │   │   └── praxila/
│   │   ├── services/
│   │   │   ├── software-development/
│   │   │   ├── managed-services/
│   │   │   └── devops/
│   │   ├── resources/
│   │   │   ├── infographics/
│   │   │   └── success-stories/
│   │   ├── layout.tsx       # Root layout (Header, Footer, ChatBot)
│   │   └── page.tsx         # Ana sayfa
│   │
│   ├── components/
│   │   ├── chat/            # ChatbotWidget.tsx
│   │   ├── forms/           # ContactForm.tsx
│   │   ├── home/            # HeroSlider, ServicesSection, vb.
│   │   ├── hr/              # ApplicationForm.tsx
│   │   ├── layout/          # Header, Footer, MobileNav, MegaMenus
│   │   ├── seo/             # StructuredData, metadata yardımcıları
│   │   ├── analytics/       # GoogleAnalytics
│   │   └── ui/              # Section, Container, Typography, Button, vb.
│   │
│   ├── content/             # İçerik veri katmanı (TypeScript objeleri)
│   │   └── home.ts          # Ana sayfa içerik verisi
│   │
│   └── lib/
│       ├── email.ts         # Nodemailer transporter
│       ├── utils.ts         # cn() class merge yardımcısı
│       └── animations.ts    # Framer Motion preset'leri
│
├── FRONTEND_STANDARDS.md    # Tasarım sistemi dokümantasyonu
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## Kurulum

### Ön Gereksinimler

- Node.js **18** veya üzeri
- npm veya yarn

### Adım Adım

**1. Repoyu klonlayın:**
```bash
git clone https://github.com/Start-Up-Yazilim/bgts-web.git
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
```

> **Not:** `.env.local` dosyası `.gitignore` kapsamındadır ve asla commit edilmemelidir.

---

## API Rotaları

### `POST /api/chat`
AI chatbot konuşma endpoint'i. Edge Runtime üzerinde çalışır.

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

## Sayfalar ve Rotalar

| Rota | Sayfa |
|------|-------|
| `/` | Ana Sayfa |
| `/about` | Hakkımızda |
| `/contact` | İletişim |
| `/culture` | Çalışma Kültürü |
| `/career-paths` | Kariyer Yolları |
| `/learning` | Eğitim ve Gelişim |
| `/genc-muhendis-programi` | Genç Mühendis Programı |
| `/hr` | İnsan Kaynakları |
| `/partnerships` | İş Ortakları |
| `/social-contribution` | Sürdürülebilir Değer |
| `/services/software-development` | Yazılım Geliştirme |
| `/services/managed-services` | Yönetilen Hizmetler |
| `/services/devops` | DevOps |
| `/industries/banking` | Bankacılık & Finans |
| `/industries/defense` | Savunma Sanayi |
| `/industries/telecommunications` | Telekomünikasyon |
| `/industries/retail` | Perakende & E-Ticaret |
| `/products/ai-hiring-assistant` | AI Hiring Assistant |
| `/products/cortex` | Cortex |
| `/products/cv-converter` | CV Converter |
| `/products/doc2bot` | Doc2Bot |
| `/products/docmind` | DocMind |
| `/products/hcm` | HCM Platformu |
| `/products/meetsense` | MeetSense |
| `/products/praxila` | Praxila |
| `/resources/infographics` | İnfografikler |
| `/resources/success-stories` | Başarı Hikayeleri |

---

## Tasarım Sistemi

Projenin tüm UI standartları `FRONTEND_STANDARDS.md` dosyasında belgelenmiştir.

**Temel Prensipler:**
- Tüm bölümler `<Section>` bileşeni ile sarılır (tutarlı dikey boşluk)
- Yatay hizalama `<Container>` bileşeni ile sağlanır (max-width + padding)
- Başlıklar için `<Heading>`, paragraflar için `<Text>` bileşenleri kullanılır
- Ham `h1-h6` veya `p` etiketleri doğrudan kullanılmaz

**Renk Paleti:**
- Birincil: `blue-700` / `blue-600` (action blue)
- İkincil: `slate-900` (koyu zemin)
- Vurgu: `orange-500` (CTA)
- Nötr: `gray-50` – `gray-800`

**Animasyonlar:**
- Scroll-triggered: `opacity 0→1`, `y 20→0`
- Spring config: `damping: 25, stiffness: 300`
- Sayfa geçişleri: `duration: 0.3s ease`

---

## Test

```bash
# Tüm testleri çalıştır
npm run test

# İzleme modunda çalıştır
npm run test:watch

# Coverage raporu
npm run test:coverage
```

Test altyapısı: **Vitest** + **@testing-library/react** + **jsdom**

---

## Versiyon Geçmişi

| Versiyon | Öne Çıkan Özellik |
|----------|-------------------|
| v0.16.0 | Genç Mühendis Programı revizyonları: program başlıkları kısaltıldı, içerikler ve hedefler güncellendi, story kart metin boyutu düzeltildi, gereksiz ikon kaldırıldı. |
| v0.15.0 | Homepage slider ve içerik revizyonları, footer ofis güncellemesi, sektör ve iş modeli metin düzeltmeleri, hizmet sayfalarında görsel daraltma + gradient mask efekti, chatbot geçici olarak pasife alındı. |
| v0.14.0 | Hero alanları optimizasyonu, slider ve içerik iyileştirmeleri |
| v0.13.0 | Mobil navigasyon tam yeniden yazım, chatbot bilgi bankası güncelleme |
| v0.12.0 | Responsive optimizasyon, savunma sanayi sayfa revizyonu |
| v0.11.0 | İş Ortakları sayfası, MSP görsel revizyonu, Sürdürülebilir Değer |
| v0.10.0 | MeetSense ve Kültür sayfası UI güncellemeleri |
| v0.9.0 | Cortex AI platformu, chatbot bilgi bankası genişletme |
| v0.8.0 | MeetSense ürün sayfası, Genç Mühendis Akademisi redesign |
| v0.6.0 | Nodemailer SMTP, CV yükleme ve e-posta eki |
| v0.5.0 | BGTS Dijital Asistan chatbot (Groq + Llama 3.3) |
| v0.4.0 | Codebase temizliği, Header mega menu revizyonu |
| v0.3.0 | Bankacılık redesign, AI Hiring Assistant, İnfografikler |

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
- `feat:` — yeni özellik
- `fix:` — hata düzeltme
- `refactor:` — yapısal iyileştirme
- `style:` — stil değişikliği (mantık yok)
- `docs:` — dokümantasyon

---

© 2026 BGTS — Business & Global Technology Solutions. Tüm hakları saklıdır.
