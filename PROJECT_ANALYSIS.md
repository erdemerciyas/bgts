# BGTS Web Projesi - Detaylı Teknik Analiz Raporu

**Tarih:** 12 Mayıs 2026
**Proje:** BGTS (Business & Global Technology Solutions) Kurumsal Web Sitesi
**Versiyon:** 0.24.0

---

## 1. Proje Genel Bakış

BGTS, kurumsal dijital dönüşüm alanında hizmet veren bir teknoloji şirketinin web sitesidir. Proje Next.js 16 ile geliştirilmiş olup, kurumsal kimlik ve çoklu dil desteği sunmaktadır.

### 1.1 Temel Bilgiler

| Özellik | Değer |
|---------|-------|
| **Framework** | Next.js 16.1.1 |
| **UI Kütüphanesi** | React 19.2.3 |
| **Programlama Dili** | TypeScript 5 |
| **CSS Framework** | Tailwind CSS 4 |
| **State Yönetimi** | React Hook Form + Zod |
| **AI Entegrasyonu** | Vercel AI SDK + Groq API |
| **E-Posta Servisi** | Nodemailer |
| **Animasyon** | Framer Motion 12 |
| **Varsayılan Dil** | Türkçe (tr) |
| **Desteklenen Diller** | Türkçe (tr), İngilizce (en) |

---

## 2. Çoklu Dil (i18n) Mimarisi

### 2.1 Dil Yapılandırması

Proje, Next.js App Router tabanlı bir i18n mimarisi kullanmaktadır.

**Konfigürasyon Dosyası:** `src/i18n-config.ts`

```typescript
export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
```

### 2.2 URL Routing Yapısı

```
/                     → /tr (varsayılan)
/en                   → İngilizce ana sayfa
/tr/about            → Hakkımızda (Türkçe)
/en/about            → About Us (İngilizce)
/tr/products/meetsense → MeetSense ürünü (Türkçe)
/en/products/meetsense → MeetSense product (English)
```

### 2.3 Middleware - Locale Yönlendirme

`src/middleware.ts` dosyası tüm istekleri yakalar ve locale kontrolü yapar:

- **Kural:** URL'de locale prefix'i yoksa varsayılan dil (`tr`) eklenir
- **Pattern:** `/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)`
- **Statik dosyalar:** `_next/static`, `_next/image`, favicon ve görseller middleware'den muaf tutulur

```typescript
// Locale bulunamadıysa varsayılan dile yönlendir
if (pathnameIsMissingLocale) {
  return NextResponse.redirect(
    new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
  );
}
```

### 2.4 Dictionary Sistemi

**Dosya Yapısı:**
```
src/dictionaries/
├── en.json    (İngilizce çeviriler - ~3000 satır)
└── tr.json    (Türkçe çeviriler - ~3000 satır)
```

**Çalışma Mantığı:** `src/get-dictionary.ts`

```typescript
const dictionaries = {
  tr: () => import('./dictionaries/tr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.tr();
};
```

**Kullanım:**
```typescript
// Server Component'lerde
const dict = await getDictionary(params.lang as Locale);

// Client Component'lerde props olarak aktarılır
<ContactForm dict={dict.contact} />
```

### 2.5 Dictionary Yapısı (Örnek)

Her sayfa için dictionary'de ilgili bölümler bulunur:

```json
{
  "header": {
    "nav": {
      "services": "SERVICES",
      "industries": "INDUSTRIES",
      ...
    }
  },
  "home": {
    "hero": { "slides": [...] },
    "servicesSummary": { ... },
    "deliveryModels": { ... },
    "industries": { ... }
  },
  "about": { ... },
  "products_page": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

### 2.6 SEO - hreflang Tagları

`src/lib/seo.ts` dosyası ile canonical ve hreflang tagları oluşturulur:

```typescript
export function buildAlternates(path: string, lang: Locale) {
  return {
    canonical: `${SITE_URL}/${lang}${normalized}`,
    languages: {
      'tr': `${SITE_URL}/tr${normalized}`,
      'en': `${SITE_URL}/en${normalized}`,
      'x-default': `${SITE_URL}/${i18n.defaultLocale}${normalized}`
    }
  };
}
```

---

## 3. Sayfa Yapısı ve Routing

### 3.1 Ana Sayfalar

| Sayfa | Route | Açıklama |
|-------|-------|----------|
| **Ana Sayfa** | `/[lang]` | Landing page, hero slider, hizmetler |
| **Hakkımızda** | `/[lang]/about` | Şirket bilgileri, değerler, ortaklar |
| **Kariyer Yolları** | `/[lang]/career-paths` | Kariyer haritaları |
| **Çalışma Kültürü** | `/[lang]/culture` | Şirket kültürü |
| **Eğitim ve Gelişim** | `/[lang]/learning` | Eğitim programları |
| **İletişim** | `/[lang]/contact` | İletişim formu |
| **Partnerlikler** | `/[lang]/partnerships` | İş ortakları |
| **Sosyal Katkı** | `/[lang]/social-contribution` | Sosyal sorumluluk |

### 3.2 Hizmet Sayfaları

| Sayfa | Route | Layout |
|-------|-------|--------|
| **Yazılım Geliştirme** | `/[lang]/services/software-development` | SoftwareDevClient |
| **DevOps** | `/[lang]/services/devops` | ManagedServicesClient |
| **Yönetilen Hizmetler** | `/[lang]/services/managed-services` | ManagedServicesClient |

### 3.3 Sektör Sayfaları

| Sayfa | Route | Client Component |
|-------|-------|-----------------|
| **Bankacılık** | `/[lang]/industries/banking` | BankingClient |
| **Savunma** | `/[lang]/industries/defense` | DefenseClient |
| **Telekomünikasyon** | `/[lang]/industries/telecommunications` | TelecomClient |
| **Perakende** | `/[lang]/industries/retail` | RetailClient |
| **Perakende-Telecom** | `/[lang]/industries/retail-telecom` | - |

### 3.4 Ürün Sayfaları

| Ürün | Route | Client |
|------|-------|--------|
| **AI Hiring Assistant** | `/[lang]/products/ai-hiring-assistant` | AiHiringClient |
| **CV Converter** | `/[lang]/products/cv-converter` | CvConverterClient |
| **Cortex** | `/[lang]/products/cortex` | ProductsClient |
| **Doc2Bot** | `/[lang]/products/doc2bot` | Doc2BotClient |
| **DocMind** | `/[lang]/products/docmind` | - |
| **HCM** | `/[lang]/products/hcm` | HcmClient |
| **MeetSense** | `/[lang]/products/meetsense` | MeetSenseClient |
| **Praxila** | `/[lang]/products/praxila` | PraxilaClient |

### 3.5 Kaynak Sayfaları

| Sayfa | Route |
|-------|-------|
| **Başarı Hikayeleri** | `/[lang]/resources/success-stories` |
| **İnfografikler** | `/[lang]/resources/infographics` |

### 3.6 Özel Sayfalar

| Sayfa | Route |
|-------|-------|
| **Genç Mühendis Programı** | `/[lang]/genc-muhendis-programi` |
| **HR** | `/[lang]/hr` |
| **MeetSense Viewer** | `/[lang]/meetsense-viewer` |

---

## 4. Layout Mimarisi

### 4.1 Root Layout

`src/app/[lang]/layout.tsx` - Dinamik lang parametresi ile tüm sayfalara uygulanır:

```typescript
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as Locale);

  return (
    <html lang={params.lang}>
      <body className="...">
        <Header dict={dict.header} />
        <GlobalBreadcrumb />
        <main>{children}</main>
        <Footer dict={dict.footer} lang={params.lang} />
      </body>
    </html>
  );
}
```

### 4.2 Shared Layout'lar

Bazı sayfalar ortak layout'lar kullanır:

| Layout | Kullanıldığı Sayfalar |
|--------|---------------------|
| `products/layout.tsx` | Tüm ürün sayfaları |
| `services/software-development/layout.tsx` | Yazılım geliştirme |
| `services/devops/layout.tsx` | DevOps |
| `services/managed-services/layout.tsx` | Yönetilen hizmetler |
| `industries/banking/layout.tsx` | Bankacılık |
| `industries/defense/layout.tsx` | Savunma |

### 4.3 Global Components

| Component | Açıklama |
|-----------|----------|
| **Header** | Üst navigasyon, mega menüler |
| **Footer** | Alt bilgi, sosyal linkler |
| **GlobalBreadcrumb** | Sayfa breadcrumb'ları |
| **ContactForm** | İletişim formu |
| **ApplicationForm** | İş başvuru formu |

---

## 5. API Mimarisi

### 5.1 API Endpoint'leri

| Endpoint | Method | Açıklama |
|----------|--------|----------|
| `/api/chat` | POST | AI Chat (Groq/Llama) |
| `/api/contact` | POST | İletişim formu gönderimi |
| `/api/application` | POST | İş başvurusu (CV ile) |

### 5.2 Chat API Detayları

**Route:** `src/app/api/chat/route.ts`

- **Model:** Groq LLama 3.3 70B Versatile
- **Runtime:** Edge
- **Max Duration:** 30 saniye
- **Rate Limit:** 60 saniyede 10 istek

**System Prompt:** BGTS chatbot'u ("Ayla") için detaylı prompt tanımlanmış. Türkçe varsayılan dil, kullanıcı başka dilde yazarsa o dilde devam eder.

### 5.3 Contact API Detayları

**Validation (Zod):**
```typescript
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  company: z.string().max(200).optional(),
  phone: z.string().max(20).optional(),
  message: z.string().min(10).max(2000),
  consent: z.boolean(),
});
```

**Rate Limit:** 60 saniyede 5 istek

### 5.4 Application API Detayları

**Dosya Yükleme:**
- Max dosya boyutu: 5MB
- İzin verilen tipler: PDF, DOC, DOCX

**Validation (Zod):**
```typescript
const applicationSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(20).optional(),
  university: z.string().max(200).optional(),
  department: z.string().max(200).optional(),
  grade: z.string().max(50).optional(),
  message: z.string().max(2000).optional(),
});
```

**Rate Limit:** 60 saniyede 5 istek

---

## 6. Teknoloji Stack Detayları

### 6.1 Core Dependencies

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `next` | 16.1.1 | Framework |
| `react` | 19.2.3 | UI Library |
| `react-dom` | 19.2.3 | DOM rendering |
| `typescript` | 5 | Type safety |

### 6.2 Styling & UI

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `tailwindcss` | 4 | CSS framework |
| `@tailwindcss/postcss` | 4 | PostCSS plugin |
| `class-variance-authority` | 0.7.1 | Component variants |
| `clsx` | 2.1.1 | Class name utility |
| `tailwind-merge` | 3.4.0 | Tailwind birleştirme |

### 6.3 Form & Validation

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `react-hook-form` | 7.69.0 | Form state |
| `@hookform/resolvers` | 5.2.2 | Zod resolver |
| `zod` | 4.3.2 | Schema validation |

### 6.4 Animasyon

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `framer-motion` | 12.23.26 | Animations & transitions |

### 6.5 AI & Chat

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `ai` | 3.4.33 | AI SDK |
| `@ai-sdk/openai` | 0.0.72 | OpenAI compatible |
| `@ai-sdk/react` | 3.0.101 | React hooks |

### 6.6 Icons & Fonts

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `lucide-react` | 0.562.0 | Icon library |

**Google Fonts:**
- Inter (sans) - Body text
- Space Grotesk (heading) - Headings
- JetBrains Mono (mono) - Code/monospace

### 6.7 Email

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `nodemailer` | 8.0.1 | Email sending |

### 6.8 Testing

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| `vitest` | 4.0.16 | Test runner |
| `@testing-library/react` | 16.3.1 | React testing |
| `@testing-library/user-event` | 14.6.1 | User events |
| `jsdom` | 27.4.0 | DOM environment |

---

## 7. Klasör Yapısı

```
src/
├── app/
│   ├── [lang]/                    # Dinamik locale segment
│   │   ├── about/
│   │   ├── career-paths/
│   │   ├── contact/
│   │   ├── culture/
│   │   ├── genc-muhendis-programi/
│   │   ├── hr/
│   │   ├── industries/
│   │   │   ├── banking/
│   │   │   ├── defense/
│   │   │   ├── retail/
│   │   │   ├── retail-telecom/
│   │   │   └── telecommunications/
│   │   ├── learning/
│   │   ├── meetsense-viewer/
│   │   ├── partnerships/
│   │   ├── products/
│   │   │   ├── ai-hiring-assistant/
│   │   │   ├── cortex/
│   │   │   ├── cv-converter/
│   │   │   ├── doc2bot/
│   │   │   ├── docmind/
│   │   │   ├── hcm/
│   │   │   ├── meetsense/
│   │   │   └── praxila/
│   │   ├── resources/
│   │   │   ├── infographics/
│   │   │   └── success-stories/
│   │   └── services/
│   │       ├── devops/
│   │       ├── managed-services/
│   │       └── software-development/
│   ├── api/
│   │   ├── application/
│   │   ├── chat/
│   │   └── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── sitemap.ts
├── components/
│   ├── analytics/                 # Google Analytics
│   ├── chat/                      # Chatbot (disabled)
│   ├── forms/                     # ContactForm
│   ├── home/                      # Home page components
│   ├── hr/                        # ApplicationForm
│   ├── layout/
│   │   ├── header/
│   │   └── search/
│   ├── resources/                 # CaseStudyCard
│   ├── seo/                       # StructuredData
│   └── ui/                        # Reusable UI components
├── content/
│   ├── home.ts
│   ├── managed-services.ts
│   └── software-development.ts
├── data/
│   └── case-studies.tr.ts
├── dictionaries/
│   ├── en.json
│   └── tr.json
├── lib/
│   ├── email.ts
│   ├── highlight-ai.tsx
│   ├── seo.ts
│   └── utils.ts
├── get-dictionary.ts
├── i18n-config.ts
└── middleware.ts
```

---

## 8. Sayfa Mantığı ve Veri Akışı

### 8.1 Server Component Pattern

Tüm sayfalar Server Component olarak implement edilir:

```typescript
// src/app/[lang]/about/page.tsx
export default async function AboutPage(props: {
  params: Promise<{ lang: string }>
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero title={dict.about.hero.title} ... />
      {/* Diğer server component'ler */}
    </>
  );
}
```

### 8.2 Client Component Ayrımı

Bazı bileşenler interaktif oldukları için Client Component olarak işaretlenir:

```typescript
// "use client" ile işaretlenen bileşenler
- ContactForm (form validation, state management)
- ApplicationForm (file upload, form state)
- HeroSlider (carousel interactions)
- AnimatedElements (scroll animations)
```

### 8.3 Client Component'ler (Client.tsx)

Her sayfa için bir Client component bulunur:

| Sayfa | Client Component |
|-------|-----------------|
| About | (inline server components) |
| Products | ProductsClient |
| Industries/Banking | BankingClient |
| Industries/Defense | DefenseClient |
| Industries/Telecom | TelecomClient |
| Industries/Retail | RetailClient |

---

## 9. Content Sistemi

### 9.1 Content Dosyaları

`src/content/` klasöründe statik içerik tutulur:

**home.ts:**
```typescript
export const getHomeContent = (dict?: any) => {
  return {
    servicesSummary: { ... },
    deliveryModels: { ... },
    industries: { ... }
  };
};
```

Bu sistem dictionary'den gelen veriyi alır ve bileşenler için yapılandırır.

### 9.2 Data Dosyaları

`src/data/` klasöründe örnek:
- `case-studies.tr.ts` - Vaka çalışmaları

---

## 10. Form ve Validasyon Mimarisi

### 10.1 Zod Schema Validation

Tüm form validasyonları Zod ile yapılır:

```typescript
const contactSchema = z.object({
  name: z.string().min(2, dict.validation.nameRequired),
  email: z.string().email(dict.validation.emailInvalid),
  message: z.string().min(10, dict.validation.messageMin),
  consent: z.boolean().refine((val) => val === true, ...),
});
```

### 10.2 React Hook Form Entegrasyonu

```typescript
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
  mode: "onChange",
});
```

---

## 11. Güvenlik Özellikleri

### 11.1 Rate Limiting

Middleware'de IP bazlı rate limiting:

```typescript
const RATE_LIMITS: Record<string, { windowMs: number; maxRequests: number }> = {
  '/api/chat': { windowMs: 60_000, maxRequests: 10 },
  '/api/contact': { windowMs: 60_000, maxRequests: 5 },
  '/api/application': { windowMs: 60_000, maxRequests: 5 },
};
```

### 11.2 Security Headers

`next.config.ts`'de tanımlı:

```typescript
headers: [
  {
    source: '/:path*',
    headers: [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      { key: 'Content-Security-Policy', value: "..." },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=()' },
    ],
  },
]
```

### 11.3 HTML Escape

Kullanıcı girdileri email içeriğinde转义 edilir:

```typescript
export function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char]);
}
```

---

## 12. SEO Yapılandırması

### 12.1 Metadata

Her sayfa için generateMetadata fonksiyonu:

```typescript
export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "BGTS - ...",
    description: isTr ? "Türkçe açıklama" : "English description",
    keywords: [...],
    openGraph: { ... },
    twitter: { ... },
    robots: { ... },
  };
}
```

### 12.2 Structured Data

`src/components/seo/StructuredData.tsx`:
- OrganizationStructuredData
- WebSiteStructuredData
- BreadcrumbStructuredData

### 12.3 Alternates & hreflang

```typescript
alternates: buildAlternates("/", locale),
```

---

## 13. CSS ve Tasarım Sistemi

### 13.1 Tailwind v4 Yapılandırması

`src/app/globals.css` içinde @theme ile custom değerler:

```css
@theme {
  --font-sans: var(--font-inter);
  --font-heading: var(--font-space-grotesk);
  --font-mono: var(--font-jetbrains-mono);

  --color-corporate-secondary: #1E5A8A;
  --color-corporate-accent: #3A7CB5;
  --color-corporate-highlight: #D4A853;
  --color-corporate-dark: #0A1628;
  --color-corporate-surface: #F7F9FC;
  /* ... */
}
```

### 13.2 Custom Animations

```css
@keyframes blob { ... }
@keyframes float { ... }
@keyframes fadeInUp { ... }
@keyframes marquee { ... }

@utility animate-marquee { ... }
@utility animate-marquee-reverse { ... }
```

### 13.3 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1400px

---

## 14. Testing Altyapısı

### 14.1 Vitest Konfigürasyonu

```typescript
// vitest.config.ts
export default defineConfig({
  plugins: [react()],
  environment: 'jsdom',
  setupFiles: ['./src/test/setup.ts'],
});
```

### 14.2 Test Örneği

```typescript
// src/components/ui/__tests__/Hero.test.tsx
import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../Hero';

test('Hero renders correctly', () => {
  // ...
});
```

---

## 15. Environment Değişkenleri

### 15.1 Gerekli Değişkenler

```env
# SMTP
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=password

# Email
CONTACT_EMAIL=contact@bgts.com.tr
HR_EMAIL=hr@bgts.com.tr

# AI
GROQ_API_KEY=your-groq-api-key

# Site
SITE_URL=https://bgts.com.tr
```

---

## 16. Önemli Notlar ve Best Practices

### 16.1 Server/Client Component Ayrımı

- Dictionary'ler server-side'da yüklenir ve server component'lere aktarılır
- Client component'ler `"use client"` directive ile işaretlenir
- Server component'lerdeki interaktif bileşenler ayrı Client component olarak çıkarılır

### 16.2 i18n'de Dikkat Edilmesi Gerekenler

- Locale routing otomatik olarak middleware'de yapılır
- Dictionary dosyaları tam çeviri içermelidir (3000+ satır)
- Her yeni sayfa için dictionary'ye ekleme yapılmalıdır

### 16.3 Form Validasyonu

- Server-side validasyon API route'larında tekrarlanmalıdır
- Client-side validasyon için Zod + React Hook Form kullanılır
- Hata mesajları dictionary'den dinamik olarak alınır

### 16.4 Performance

- Görseller için Next.js Image component kullanılır
- Font optimizasyonu için `next/font/google` kullanılır
- Static export mümkün değil (dynamic routing nedeniyle)

---

## 17. Geliştirme Notları

### 17.1 npm Script'leri

```json
{
  "dev": "next dev -p 3000",      // Development server
  "build": "next build",           // Production build
  "start": "next start -p 3000",   // Production server
  "lint": "eslint",               // Linting
  "test": "vitest",               // Test runner
  "test:ui": "vitest --ui",       // UI ile test
  "test:coverage": "vitest --coverage"  // Coverage report
}
```

### 17.2 Path Aliases

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Kullanım: `@/components/ui/Button` → `src/components/ui/Button.tsx`

---

## 18. Sonuç ve Değerlendirme

BGTS web projesi, modern Next.js 16 App Router mimarisi üzerine kurulmuş, profesyonel bir kurumsal web sitesidir.

### Güçlü Yönler:
- ✅ Next.js 16 ile modern App Router kullanımı
- ✅ Tailwind CSS 4 ile custom tasarım sistemi
- ✅ i18n için sağlam altyapı (dictionary tabanlı)
- ✅ Server/Client component ayrımı
- ✅ Zod ile güçlü form validasyonu
- ✅ AI chatbot entegrasyonu (Groq)
- ✅ Güvenlik headers ve rate limiting
- ✅ SEO optimizasyonu (structured data, hreflang)
- ✅ Test altyapısı (Vitest)

### Dikkat Edilmesi Gerekenler:
- ⚠️ Chatbot şu an disabled olarak işaretli
- ⚠️ Bazı sayfalarda Client component pattern'i tutarsız
- ⚠️ Content dosyaları ile dictionary'ler arasında bağımlılık
- ⚠️ Static export desteği yok (dynamic routing)

---

*Bu rapor, projenin mevcut durumunu ve mimarisini detaylı olarak analiz etmek için hazırlanmıştır. İlerleyen süreçlerde yapılacak geliştirmeler için temel referans belgesidir.*