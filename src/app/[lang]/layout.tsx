import type { Metadata } from "next";
import { Exo, Manrope } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalBreadcrumb from "@/components/layout/GlobalBreadcrumb";
import { OrganizationStructuredData, WebSiteStructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
// import ChatbotWidget from "@/components/chat/ChatbotWidget"; // Temporarily disabled

const exo = Exo({ subsets: ["latin"], variable: "--font-exo" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bgts.com.tr"),
  title: "BGTS - Business & Global Technology Solutions",
  description: "Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı. 25 yılı aşkın deneyimle, 1,400+ mühendis ile dijital dönüşüm çözümleri sunuyoruz.",
  keywords: ["yazılım geliştirme", "devops", "yönetilen hizmetler", "teknoloji danışmanlığı", "dijital dönüşüm", "finans", "savunma", "perakende", "telekom"],
  authors: [{ name: "BGTS" }],
  creator: "BGTS",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://bgts.com.tr",
    title: "BGTS - Business & Global Technology Solutions",
    description: "Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı. 25 yılı aşkın deneyimle, 1,400+ mühendis ile dijital dönüşüm çözümleri sunuyoruz.",
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
    title: "BGTS - Business & Global Technology Solutions",
    description: "Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı.",
    images: ["/BGTS_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/icon.png",
  },
  alternates: {
    canonical: "https://bgts.com.tr",
  },
};

import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

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
        <OrganizationStructuredData />
        <WebSiteStructuredData />
        <GoogleAnalytics />
      </head>
      <body className={`${exo.variable} ${manrope.variable} font-sans antialiased text-[#212121] bg-white`}>
        <div className="flex flex-col min-h-screen overflow-x-clip">
          <Header dict={dict.header} />
          <GlobalBreadcrumb />

          <main className="flex-1">
            {children}
          </main>
          <Footer dict={dict.footer} lang={params.lang} />
          {/* <ChatbotWidget /> */} {/* Temporarily disabled */}
        </div>
      </body>
    </html>
  );
}
