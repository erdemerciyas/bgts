import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Praxila - IT Hizmet ve Operasyon Yönetimi | BGTS",
    description:
        "ITSM, PPM ve ITOM süreçlerini tek platformda birleştiren yapay zeka destekli operasyon yönetimi.",
    alternates: {
        canonical: "https://bgts.com.tr/products/praxila",
    },
    openGraph: {
        title: "Praxila - IT Hizmet ve Operasyon Yönetimi | BGTS",
        description:
            "ITSM, PPM ve ITOM süreçlerini tek platformda birleştiren yapay zeka destekli operasyon yönetimi.",
        url: "https://bgts.com.tr/products/praxila",
    },
}

export default function PraxilaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
