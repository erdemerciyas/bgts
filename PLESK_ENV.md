# Plesk Ortam Değişkenleri Şablonu

Bu dosya, **bgts-web** projesinin Plesk Node.js ortamında kullanılacak ortam değişkenlerinin şablonudur.

> **Önemli:** Bu değerleri repoya gerçek anahtarlarla commit etmeyin. Plesk panelinde **Node.js → Custom environment variables** bölümüne tek tek girin veya sunucuda yalnızca sizin erişebildiğiniz bir `.env.local` dosyası kullanın.

Genel deploy adımları için [PLESK_DEPLOY.md](./PLESK_DEPLOY.md) dosyasına bakın.

---

## E-posta akışı

| Rol | Değişken | Değer |
|-----|----------|-------|
| Gönderici (sistem) | `GMAIL_USER` | `bgtsweb@gmail.com` |
| Alıcı (form mesajları) | `CONTACT_EMAIL` | `info@bgts.com` |

İletişim formu gönderildiğinde:

1. Mail **bgtsweb@gmail.com** hesabı üzerinden Gmail API ile gönderilir
2. Mesaj **info@bgts.com** adresine iletilir
3. `Reply-To` alanı formu dolduran ziyaretçinin e-postasına ayarlanır (doğrudan yanıtlanabilir)

---

## Nereye eklenir?

**Plesk** → **Websites & Domains** → domain → **Node.js** → **Custom environment variables**

Her satırı ayrı bir değişken olarak ekleyin (`KEY` = `VALUE`).

---

## Şablon — kök domain (`https://bgts.com.tr`)

Site doğrudan domain kökünde çalışıyorsa (`/tr/...`, `/en/...`):

```env
NODE_ENV=production

# Gmail API - İletişim Formu
GMAIL_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=your_google_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token
GMAIL_USER=bgtsweb@gmail.com
CONTACT_EMAIL=info@bgts.com

# Google Analytics 4 (GA4)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-FSY3WLT3M7

# Google Search Console HTML tag doğrulama kodu (site canlı olduktan sonra)
NEXT_PUBLIC_GSC_VERIFICATION=

# AI Chatbot (opsiyonel — chatbot kapalıysa boş bırakılabilir)
GROQ_API_KEY=
```

---

## Şablon — alt klasör deploy (`https://bgts.com/tr3/...`)

Site `httpdocs/tr3` altında çalışıyorsa yukarıdaki değişkenlere **ek olarak**:

```env
NEXT_PUBLIC_BASE_PATH=/tr3
```

Bu değişken **build öncesinde** tanımlı olmalıdır; aksi halde linkler ve yönlendirmeler hatalı üretilir.

---

## Değişken açıklamaları

| Değişken | Zorunlu | Açıklama |
|----------|---------|----------|
| `NODE_ENV` | Evet | `production` |
| `GMAIL_CLIENT_ID` | Evet | Google Cloud OAuth 2.0 Client ID |
| `GMAIL_CLIENT_SECRET` | Evet | Google Cloud OAuth 2.0 Client Secret |
| `GMAIL_REFRESH_TOKEN` | Evet | `npm run gmail:auth` ile alınır |
| `GMAIL_USER` | Evet | Sistem gönderici Gmail (`bgtsweb@gmail.com`) |
| `CONTACT_EMAIL` | Evet | Form mesajlarının gideceği adres (`info@bgts.com`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Evet | GA4 Measurement ID (`G-...`) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Canlı sonrası | Search Console HTML tag `content` değeri |
| `NEXT_PUBLIC_BASE_PATH` | Koşullu | Yalnızca `/tr3` gibi alt klasör deploy'da |
| `GROQ_API_KEY` | Hayır | AI chatbot için (şu an devre dışı) |

---

## Build-time vs runtime

| Tip | Değişkenler | Not |
|-----|-------------|-----|
| **Build-time** | `NEXT_PUBLIC_*` | Build sırasında koda gömülür; değişince **yeniden build** gerekir |
| **Runtime** | `GMAIL_*`, `CONTACT_EMAIL`, `GROQ_API_KEY` | Build sonrası değiştirilebilir; yine de Restart App önerilir |

---

## Kurulum sırası

1. Custom environment variables değerlerini ekleyin
2. **NPM install** çalıştırın
3. **Run script** → `npm run build`
4. **Restart App**
5. Test edin:
   - Site açılıyor mu: `https://bgts.com.tr/tr`
   - İletişim formu → mail **info@bgts.com** kutusuna geliyor mu
   - GA4 Realtime'da ziyaret görünüyor mu (çerez onayı sonrası)

---

## Search Console (deploy sonrası)

1. [Google Search Console](https://search.google.com/search-console) → property ekleyin
2. Doğrulama yöntemi: **HTML tag**
3. `content="..."` içindeki kodu `NEXT_PUBLIC_GSC_VERIFICATION` olarak ekleyin
4. `npm run build` → **Restart App**
5. Search Console'da **Verify**
6. Sitemap gönderin: `https://bgts.com.tr/sitemap.xml`

---

## Gmail refresh token alma (yerel)

Production değerlerini yereldeki `.env.local` dosyasından kopyalayabilirsiniz. Token yoksa:

```bash
npm run gmail:auth
```

Terminalde görünen `GMAIL_REFRESH_TOKEN` değerini Plesk'e ekleyin. OAuth hesabı **bgtsweb@gmail.com** olmalıdır.

> OAuth uygulaması **Testing** modundaysa yalnızca test users listesindeki hesaplar mail gönderebilir. Production için Google Cloud Console → OAuth consent screen → **Publish App** gerekebilir.

---

## Güvenlik

- `.env.local` dosyasını **asla** git'e commit etmeyin
- Client secret ve refresh token'ı sohbet veya e-posta ile paylaşmayın
- Plesk panel erişimini sınırlı tutun
