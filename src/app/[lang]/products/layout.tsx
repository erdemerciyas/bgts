import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "AI Ürünleri - Kurumsal Yapay Zeka Çözümleri | BGTS",
    description:
        "İşe alımdan kurumsal otomasyona, belge yönetiminden bilgi asistanlarına 8 yapay zeka platformu.",
    alternates: {
        canonical: "https://bgts.com.tr/products",
    },
    openGraph: {
        title: "AI Ürünleri - Kurumsal Yapay Zeka Çözümleri | BGTS",
        description:
            "İşe alımdan kurumsal otomasyona, belge yönetiminden bilgi asistanlarına 8 yapay zeka platformu.",
        url: "https://bgts.com.tr/products",
    },
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
