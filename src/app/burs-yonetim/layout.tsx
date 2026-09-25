import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
    title: "Burs Başvuruları · BGTS",
    robots: { index: false, follow: false },
};

// Site kromundan bağımsız, Basic Auth ile korunan yönetim sayfası.
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr">
            <head>
                <link rel="icon" href="/favicon.png" type="image/png" />
            </head>
            <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-corporate-surface font-sans text-[#212121] antialiased`}>
                {children}
            </body>
        </html>
    );
}
