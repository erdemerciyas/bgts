# Plesk Üzerinde Node.js ile Deploy Rehberi

Bu doküman, **bgts-web** (Next.js 16) projesinin Plesk paneli üzerinden production ortamında çalıştırılması için adım adım rehberdir.

---

## Ön Koşullar

| Gereksinim | Değer |
|------------|-------|
| Node.js | **18+** (tercihen **20 LTS**) |
| RAM | Build için en az **2 GB** (4 GB önerilir) |
| Plesk | **Node.js eklentisi** yüklü olmalı |

---

## 1. Dosyaları Sunucuya Alın

### Seçenek A — Git (önerilen)

1. Plesk → **Websites & Domains** → domain → **Git**
2. Repoyu bağlayın: `https://github.com/erdemerciyas/bgts.git`
3. Dosyaları `httpdocs` (veya alt klasör) içine çekin

### Seçenek B — SSH

```bash
cd /var/www/vhosts/bgts.com.tr/httpdocs
git clone https://github.com/erdemerciyas/bgts.git .
```

> `package.json` dosyasının bulunduğu klasör, Plesk'teki **Application Root** olmalıdır.

---

## 2. Plesk Node.js Ayarları

**Websites & Domains** → domain → **Node.js**

### `httpdocs/tr3` klasörü için örnek (bgts.com)

| Ayar | Değer | Not |
|------|-------|-----|
| Node.js version | `20.3.0` (veya 20.x) | ✓ |
| Package Manager | `npm` | ✓ |
| Application mode | `production` | ✓ |
| Application root | `/httpdocs/tr3` | `package.json` burada olmalı |
| Document root | `/httpdocs/tr3` | **Application root ile aynı olmalı** |
| Application startup file | `server.js` | `package.json` **çalışmaz** |
| Application URL | `http://bgts.com` | SSL aktifse `https://` |
| Custom environment variables | Aşağıya bakın | Zorunlu |

> **Kritik:** Document root `/httpdocs` iken Application root `/httpdocs/tr3` ise Plesk şu uyarıyı verir:
> *"Application will not work because document root is not a subchild of application root."*
>
> Çözüm: **Document root'u `/httpdocs/tr3` yapın** (Application root ile aynı).

### Application Startup File

Plesk tek bir `.js` dosyası bekler. `package.json` startup file olarak **kullanılamaz**.

Projede `server.js` dosyası mevcuttur. Panelde şunu seçin:

```
Application Startup File: server.js
```

`server.js`, Plesk'in atadığı `PORT` ortam değişkenini otomatik kullanır.

### Alt klasör (`/tr3`) ve i18n linkleri

Site `http://bgts.com/tr3/...` altında açılıyorsa, **build öncesi** şu ortam değişkenini ekleyin:

```env
NEXT_PUBLIC_BASE_PATH=/tr3
```

Bu değişken:
- Next.js `basePath` ayarını etkinleştirir
- i18n linklerinin `/tr3undefined` gibi hatalı üretilmesini engeller
- Middleware yönlendirmelerini doğru prefix ile yapar

> Site doğrudan `http://bgts.com/tr/...` (kök domain) üzerindeyse bu değişkeni **tanımlamayın**.

Değişkeni ekledikten veya güncelledikten sonra mutlaka yeniden build alın:

```bash
npm run build
```

### Panelde sıra

1. **Document root** → `/httpdocs/tr3` olarak düzelt
2. **Application startup file** → `server.js` olarak değiştir
3. **Custom environment variables** → ekle (aşağıdaki bölüm)
4. **+ NPM install** → tıkla
5. **Run script** → `npm run build` çalıştır
6. **Restart App** → tıkla

---

## 3. Ortam Değişkenleri

Plesk Node.js → **Custom environment variables** bölümüne aşağıdaki değişkenleri ekleyin:

```env
NODE_ENV=production

# AI Chatbot - Groq API
GROQ_API_KEY=your_groq_api_key_here

# Gmail API - İletişim Formu
GMAIL_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=your_google_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token
GMAIL_USER=your-sender@gmail.com

# Form mesajlarının iletileceği adres
CONTACT_EMAIL=contact@bgts.com.tr

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console (site canlı olduktan sonra)
NEXT_PUBLIC_GSC_VERIFICATION=
```

> **Not:** `.env.local` dosyasını repoya eklemeyin. Tüm gizli değerleri yalnızca Plesk panelinden yönetin.

Gmail refresh token almak için yerelde:

```bash
npm run gmail:auth
```

Detaylı kurulum adımları için README.md → **Google Entegrasyonları Kurulumu** bölümüne bakın.

### Search Console (deploy sonrası)

1. [Google Search Console](https://search.google.com/search-console) → property ekleyin (`https://bgts.com.tr`)
2. HTML tag doğrulama kodunu `NEXT_PUBLIC_GSC_VERIFICATION` olarak ekleyin
3. **Rebuild + Restart App** (public env build-time'da gömülür)
4. Search Console'da doğrulayın → Sitemap: `https://bgts.com.tr/sitemap.xml`

---

## 4. Bağımlılıkları Yükleyin ve Build Alın

Plesk Node.js panelinde:

1. **NPM Install** → `npm install` çalıştırın
2. **Run script** veya SSH ile:

```bash
cd /var/www/vhosts/bgts.com/httpdocs/tr3
npm install
npm run build
```

Build başarılı olduğunda `.next` klasörü oluşur. Bu adım sunucuda 2–5 dakika sürebilir.

---

## 5. Uygulamayı Başlatın

Plesk Node.js panelinde:

- **Application Startup File** / **Run script**: `npm start`
- Veya özel komut: `npx next start -p $PORT`

Ardından **Enable Node.js** / **Restart App** ile uygulamayı yeniden başlatın.

Plesk, Nginx üzerinden domain'i Node.js sürecine otomatik **reverse proxy** ile yönlendirir; ayrıca port açmanız gerekmez.

---

## 6. SSL ve Domain

1. **SSL/TLS** → Let's Encrypt sertifikası aktif edin
2. `www` → ana domain yönlendirmesini **Hosting Settings** üzerinden ayarlayın
3. Site `https://bgts.com.tr` üzerinden açılmalıdır

Middleware, locale prefix olmayan istekleri otomatik olarak `/tr/` adresine yönlendirir.

---

## Güncelleme Akışı

Her kod güncellemesinde:

```bash
git pull          # veya Plesk Git "Pull"
npm install       # package.json değiştiyse
npm run build
# Plesk'ten Restart App
```

---

## Sık Karşılaşılan Sorunlar

### Build hatası (bellek)

```
JavaScript heap out of memory
```

SSH üzerinden:

```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### 502 Bad Gateway

- Node.js uygulaması çalışmıyor → Plesk **Logs** → error log kontrol edin
- Yanlış port → `$PORT` ortam değişkenini kullanın
- Build alınmamış → `npm run build` tekrar çalıştırın

### İletişim formu çalışmıyor

- Gmail OAuth değişkenlerini kontrol edin
- Refresh token'ı yerelde `npm run gmail:auth` ile alıp Plesk'e yapıştırın

### Statik dosyalar / görseller yüklenmiyor

- `public/` klasörünün sunucuda mevcut olduğundan emin olun
- `.gitignore` nedeniyle eksik dosya kalmadığını doğrulayın

---

## Deploy Kontrol Listesi

- [ ] Node.js 20 LTS seçildi
- [ ] Proje dosyaları sunucuda (`package.json` mevcut)
- [ ] `npm install` tamamlandı
- [ ] Ortam değişkenleri Plesk panelinde tanımlı
- [ ] `npm run build` başarılı
- [ ] `npm start` (veya `next start -p $PORT`) çalışıyor
- [ ] SSL aktif
- [ ] `https://bgts.com.tr/tr` açılıyor
- [ ] İletişim formu test edildi

---

## İlgili Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm install` | Bağımlılıkları yükler |
| `npm run build` | Production build oluşturur |
| `npm start` | Production sunucusunu başlatır |
| `npm run gmail:auth` | Gmail OAuth refresh token alır (yerel) |

Daha fazla proje bilgisi için [README.md](./README.md) dosyasına bakın.
