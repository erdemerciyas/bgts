import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "MeetSense - Yapay Zeka Toplantı Asistanı | BGTS",
    description:
        "Toplantılarınızı AI ile kaydedin, analiz edin ve aksiyon maddelerine dönüştüren akıllı platform.",
    alternates: {
        canonical: "https://bgts.com.tr/products/meetsense",
    },
    openGraph: {
        title: "MeetSense - Yapay Zeka Toplantı Asistanı | BGTS",
        description:
            "Toplantılarınızı AI ile kaydedin, analiz edin ve aksiyon maddelerine dönüştüren akıllı platform.",
        url: "https://bgts.com.tr/products/meetsense",
    },
}

export default function MeetSenseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
