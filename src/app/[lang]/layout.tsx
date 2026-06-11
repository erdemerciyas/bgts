import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalBreadcrumb from "@/components/layout/GlobalBreadcrumb";
import { OrganizationStructuredData, WebSiteStructuredData, LocalBusinessStructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/cookies/CookieConsent";
import { buildAlternates, buildOgUrl, ogLocale, SITE_URL } from "@/lib/seo";
import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
// import ChatbotWidget from "@/components/chat/ChatbotWidget"; // Temporarily disabled

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isTr = locale === "tr";

  const title = "BGTS - Business & Global Technology Solutions";
  const descriptionTr =
    "Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı. 25 yılı aşkın deneyimle, 1,400+ mühendis ile dijital dönüşüm çözümleri sunuyoruz.";
  const descriptionEn =
    "Leading technology partner for Finance, Defense, Retail, and Telecom sectors. With 25+ years of experience and 1,400+ engineers, we deliver digital transformation solutions.";
  const description = isTr ? descriptionTr : descriptionEn;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: isTr
      ? ["yazılım geliştirme", "devops", "yönetilen hizmetler", "teknoloji danışmanlığı", "dijital dönüşüm", "finans", "savunma", "perakende", "telekom"]
      : ["software development", "devops", "managed services", "technology consulting", "digital transformation", "finance", "defense", "retail", "telecom"],
    authors: [{ name: "BGTS" }],
    creator: "BGTS",
    alternates: buildAlternates("/", locale),
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: i18n.locales.filter(l => l !== locale).map(l => ogLocale(l)),
      url: buildOgUrl("/", locale),
      title,
      description,
      siteName: "BGTS",
      images: [
        {
          url: "/BGTS_logo.png",
          width: 1200,
          height: 630,
          alt: "BGTS - Business & Global Technology Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/BGTS_logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", type: "image/png" },
        { url: "/icon.png", type: "image/png", sizes: "192x192" },
      ],
      apple: "/icon.png",
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const { children } = props;
  
  // Wait for the translation dictionary
  const dict = await getDictionary(params.lang as Locale);

  return (
    <html lang={params.lang} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        {/* Google Search Console Verification - Replace YOUR_VERIFICATION_CODE with your actual code */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        <OrganizationStructuredData />
        <LocalBusinessStructuredData />
        <WebSiteStructuredData />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased text-[#212121] bg-white`}>
        <div className="flex flex-col min-h-screen overflow-x-clip">
          <Header dict={dict.header} />
          <GlobalBreadcrumb />

          <main className="flex-1">
            {children}
          </main>
          <Footer dict={dict.footer} lang={params.lang} />
          {/* <ChatbotWidget /> */} {/* Temporarily disabled */}
        </div>
        <CookieConsent dict={dict.cookies} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
