# BGTS Frontend Redesign Plan
## Alt Sayfa İyileştirmeleri ve Breadcrumb Sistemi

---

## 📋 ÖZET

Bu plan, BGTS web sitesinin ana sayfa dışındaki tüm alt sayfalarını genel proje prensiplerine sadık kalarak görsel olarak zenginleştirmeyi ve breadcrumb navigasyon sistemini aktif hale getirmeyi amaçlar.

**Tasarım Tercihleri:**
- ✅ İkonlu breadcrumb navigasyonu
- ✅ Unsplash stok fotoğrafları
- ✅ Her sayfa için farklı renk temaları
- ✅ Zengin Framer Motion animasyonları

---

## 🎨 RENK TEMALARI

| Sayfa | Birincil Renk | İkincil Renk | Vurgu Rengi |
|-------|--------------|-------------|------------|
| About | Blue-600 | Slate-100 | Cyan-500 |
| Contact | Emerald-600 | Emerald-50 | Green-400 |
| Services | Blue-700 | Blue-50 | Indigo-500 |
| Services/DevOps | Indigo-600 | Indigo-50 | Violet-500 |
| Services/Managed-Services | Blue-600 | Blue-50 | Sky-400 |
| Services/Software-Dev | Purple-600 | Purple-50 | Pink-500 |
| HR | Orange-600 | Orange-50 | Amber-500 |
| Industries/Banking | Blue-700 | Blue-50 | Cyan-400 |
| Industries/Defense | Slate-800 | Slate-900 | Zinc-400 |
| Industries/Retail-Telecom | Orange-600 | Pink-50 | Rose-500 |

---

## 🧭 BREADCRUMB SİSTEMİ

### Component Yapısı

**Dosya:** `src/components/ui/Breadcrumb.tsx`

**Özellikler:**
- İkonlu navigasyon (Home, ChevronRight)
- Aktif sayfa vurgusu
- Hover animasyonları
- Responsive tasarım
- SEO için structured data (BreadcrumbList)
- Schema.org uyumlu JSON-LD

**Örnek Kullanım:**
```tsx
<Breadcrumb
  items={[
    { label: "Ana Sayfa", href: "/", icon: Home },
    { label: "Hizmetler", href: "/services", icon: Server },
    { label: "DevOps", href: "/services/devops" }
  ]}
/>
```

**Animasyonlar:**
- Fade-in yükleme animasyonu
- Hover'da scale efekti
- Aktif öğe için alt çizgi animasyonu

---

## 📄 SAYFA İYİLEŞTİRMELERİ

### 1. ABOUT PAGE (Hakkımızda)
**Dosya:** `src/app/about/page.tsx`

**Renk Teması:** Blue-600 + Slate-100

**İyileştirmeler:**
- ✨ Hero section'a video background veya gradient animasyonu
- 📊 İstatistik kartları için animasyonlu sayı sayaçları
- 🏢 Ofis görseli galerisi (grid layout)
- 📅 Timeline component (1997'den günümüze)
- 🎯 Misyon/Vizyon kartları ikonlarla
- 🏆 Sertifikalar ve ödüller bölümü
- 💼 Ekip fotoğrafı carousel'i

**Yeni Bileşenler:**
- `StatsCard` - Animasyonlu istatistik kartları
- `Timeline` - Şirket tarihi timeline
- `TeamGallery` - Ekip fotoğraf galerisi

---

### 2. CONTACT PAGE (İletişim)
**Dosya:** `src/app/contact/page.tsx`

**Renk Teması:** Emerald-600 + Emerald-50

**İyileştirmeler:**
- 🗺️ İnteraktif harita (Google Maps veya OpenStreetMap)
- 📧 İletişim bilgileri için animasyonlu kartlar
- 🏢 Ofis lokasyonları için görsel kartlar
- 📱 QR kod ile hızlı iletişim
- 📞 Çalışma saatleri göstergesi
- 📨 İletişim formu için animasyonlu alanlar

**Yeni Bileşenler:**
- `ContactCard` - İletişim bilgi kartı
- `OfficeLocation` - Ofis lokasyon kartı
- `MapEmbed` - İnteraktif harita

---

### 3. SERVICES MAIN PAGE (Hizmetler)
**Dosya:** `src/app/services/page.tsx`

**Renk Teması:** Blue-700 + Blue-50

**İyileştirmeler:**
- 🎯 Hizmet kartları grid layout (hover efektleri)
- 📊 Hizmet karşılaştırma tablosu
- 🚀 İkonlu hizmet kategorileri
- 📈 Başarı metrikleri görselleştirmesi
- 🎬 Hizmet tanıtım video'ları
- 💬 Müşteri referansları slider

**Yeni Bileşenler:**
- `ServiceCard` - Hizmet kartı
- `ServiceComparison` - Hizmet karşılaştırma
- `TestimonialSlider` - Referans slider

---

### 4. SERVICES/DEVOPS PAGE
**Dosya:** `src/app/services/devops/page.tsx`

**Renk Teması:** Indigo-600 + Indigo-50

**İyileştirmeler:**
- 🔧 Teknoloji stack görselleştirmesi (icons + badges)
- 📊 CI/CD pipeline diyagramı (animasyonlu)
- 🌐 Kubernetes cluster görselleştirmesi
- ⚡ Otomasyon akış şeması
- 📈 Performans metrikleri grafikleri
- 🎯 Kullanım senaryoları için timeline

**Yeni Bileşenler:**
- `TechStackGrid` - Teknoloji stack grid
- `PipelineDiagram` - Pipeline diyagramı
- `MetricCard` - Metrik kartı

---

### 5. SERVICES/MANAGED-SERVICES PAGE
**Dosya:** `src/app/services/managed-services/page.tsx`

**Renk Teması:** Blue-600 + Blue-50

**İyileştirmeler:**
- 📊 Operasyonel metrikler dashboard
- ⏰ 7/24 destek görselleştirmesi
- 🎯 SLA göstergeleri (progress bars)
- 📈 Uptime görselleştirmesi
- 🔄 İzleme sistemi diyagramı
- 🏢 Müşteri logoları wall'u

**Yeni Bileşenler:**
- `OperationMetric` - Operasyon metrik kartı
- `SLAIndicator` - SLA göstergesi
- `MonitoringDiagram` - İzleme diyagramı

---

### 6. SERVICES/SOFTWARE-DEVELOPMENT PAGE
**Dosya:** `src/app/services/software-development/page.tsx`

**Renk Teması:** Purple-600 + Purple-50

**İyileştirmeler:**
- 💻 Teknoloji stack görselleştirmesi
- 🔄 Proje teslim modelleri karşılaştırma
- 📊 Geliştirme süreci flow chart
- 🎯 Mikroservis mimarisi diyagramı
- 🚀 Deployment pipeline görselleştirmesi
- 💡 İnovasyon vurgusu için animasyonlar

**Yeni Bileşenler:**
- `DevStackCard` - Geliştirme stack kartı
- `DeliveryModel` - Teslim modeli kartı
- `ProcessFlow` - Süreç akışı

---

### 7. INDUSTRIES/BANKING PAGE
**Dosya:** `src/app/industries/banking/page.tsx`

**Renk Teması:** Blue-700 + Blue-50

**İyileştirmeler:**
- 🏦 Başarı hikayeleri case study kartları
- 📊 Finansal metrikler görselleştirmesi
- 🎯 Çözüm alanları grid layout
- 🏆 Müşteri logoları
- 📈 Dijital dönüşüm roadmap'i
- 💳 Ödeme sistemleri görselleştirmesi

**Yeni Bileşenler:**
- `CaseStudyCard` - Case study kartı
- `FinancialMetric` - Finansal metrik
- `SolutionArea` - Çözüm alanı kartı

---

### 8. INDUSTRIES/DEFENSE PAGE
**Dosya:** `src/app/industries/defense/page.tsx`

**Renk Teması:** Slate-800 + Slate-900

**İyileştirmeler:**
- 🛡️ Teknik kapasiteler görselleştirmesi
- 📊 Standartlar uyumluluğu göstergeleri
- 🎯 C4I sistemleri diyagramı
- 🔒 Güvenlik standartları badge'leri
- 📈 Test ve doğrulama süreçleri
- 🚀 Gömülü sistemler görselleştirmesi

**Yeni Bileşenler:**
- `CapabilityCard` - Kapasite kartı
- `StandardBadge` - Standart badge
- `SystemDiagram` - Sistem diyagramı

---

### 9. INDUSTRIES/RETAIL-TELECOM PAGE
**Dosya:** `src/app/industries/retail-telecom/page.tsx`

**Renk Teması:** Orange-600 + Pink-50

**İyileştirmeler:**
- 🛒 E-ticaret case study kartları
- 📊 Yük kapasitesi görselleştirmesi
- 🎯 Perakende çözümleri grid
- 📱 Telekom platformları görselleştirmesi
- 📈 Omnichannel strateji diyagramı
- 🏆 Müşteri başarı metrikleri

**Yeni Bileşenler:**
- `RetailCaseStudy` - Perakende case study
- `CapacityMetric` - Kapasite metrik
- `PlatformCard` - Platform kartı

---

### 10. HR PAGE (Kariyer)
**Dosya:** `src/app/hr/page.tsx`

**Renk Teması:** Orange-600 + Orange-50

**İyileştirmeler:**
- 🎨 Kültür değerleri animasyonlu kartlar
- 👥 Ekip fotoğrafı galerisi
- 📊 Kariyer yolları görselleştirmesi
- 🎯 Genç yetenek programları timeline
- 💬 Çalışan testimonials slider
- 🏢 Ofis ortamı görselleri
- 📈 Eğitim programları görselleştirmesi

**Yeni Bileşenler:**
- `CultureCard` - Kültür kartı
- `CareerPath` - Kariyer yolu
- `TestimonialCard` - Testimonial kartı
- `ProgramTimeline` - Program timeline

---

## 🎬 ANİMASYON STRATEJİSİ

### Framer Motion Animasyonları

**Sayfa Yükleme:**
- Fade-in-up (hero section)
- Stagger (kartlar için)
- Scale-in (ikonlar için)

**Scroll Animasyonları:**
- WhileInView (scroll reveal)
- Slide-in (yan paneller)
- Parallax (background görseller)

**Hover Animasyonları:**
- Scale (kartlar)
- Glow (ikonlar)
- Border-color (linkler)
- Shadow-depth (kartlar)

**Micro-interactions:**
- Button press
- Form focus
- Link hover
- Card lift

---

## 📱 RESPONSIVE TASARIM

Breakpoint'ler:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Mobile Optimizasyonları:
- Stacked layouts
- Simplified animations
- Touch-friendly targets
- Reduced motion (prefers-reduced-motion)

---

## 🔧 TEKNİK GEREKSİNİMLER

### Yeni Component'ler
```
src/components/ui/
├── Breadcrumb.tsx
├── StatsCard.tsx
├── Timeline.tsx
├── ServiceCard.tsx
├── CaseStudyCard.tsx
├── ContactCard.tsx
├── CultureCard.tsx
├── MetricCard.tsx
├── TechStackGrid.tsx
└── TestimonialCard.tsx
```

### SEO Optimizasyonları
- Breadcrumb structured data
- Open Graph meta tags
- Twitter Card meta tags
- Schema.org markup
- Alt text for images

### Performance Optimizasyonları
- Image optimization (Next.js Image)
- Lazy loading for below-fold content
- Code splitting
- Animation performance (GPU acceleration)

---

## ✅ IMPLEMENTATION SIRASI

1. **Phase 1: Temel Altyapı**
   - Breadcrumb component oluşturma
   - Temel UI component'leri
   - Animasyon utility'leri

2. **Phase 2: Hizmet Sayfaları**
   - Services main page
   - DevOps page
   - Managed Services page
   - Software Development page

3. **Phase 3: Sektör Sayfaları**
   - Banking page
   - Defense page
   - Retail-Telecom page

4. **Phase 4: Diğer Sayfalar**
   - About page
   - Contact page
   - HR page

5. **Phase 5: Final Polish**
   - Mobile responsiveness
   - SEO optimization
   - Performance tuning
   - Cross-browser testing

---

## 🎯 BAŞARI KRİTERLERİ

✅ Tüm sayfalarda breadcrumb navigasyonu aktif
✅ Her sayfa için unique renk teması
✅ Zengin görsel elementler (Unsplash görselleri)
✅ Akıcı Framer Motion animasyonları
✅ Mobile responsive tasarım
✅ SEO uyumlu structured data
✅ Erişilebilirlik standartları (WCAG AA)
✅ Performans optimizasyonu (Lighthouse score > 90)

---

## 📊 PROJE ESTIMATE

**Component Geliştirme:** ~15 yeni component
**Sayfa İyileştirmesi:** ~10 sayfa
**Animasyon Ekleme:** ~50+ animasyon
**Görsel Entegrasyon:** ~30+ görsel
**SEO Optimizasyon:** Tüm sayfalar

---

## 🚀 SONRAKİ ADIMLAR

Bu plan onaylandıktan sonra:
1. Code mode'a geçiş
2. Component'leri sırasıyla oluşturma
3. Sayfaları iyileştirme
4. Test ve optimizasyon
5. Deployment

---

**Not:** Tüm geliştirmeler, ana sayfadaki tasarım prensiplerine sadık kalınarak, modern ve profesyonel bir görünüm sağlamak için yapılacaktır.
