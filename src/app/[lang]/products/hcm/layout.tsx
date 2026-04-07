import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HCM Platform - İnsan Kaynakları Yönetim Sistemi | BGTS",
    description:
        "16 entegre modül ile işe alımdan bordro yönetimine tüm İK süreçlerini dijitalleştiren HCM platformu.",
    alternates: {
        canonical: "https://bgts.com.tr/products/hcm",
    },
    openGraph: {
        title: "HCM Platform - İnsan Kaynakları Yönetim Sistemi | BGTS",
        description:
            "16 entegre modül ile işe alımdan bordro yönetimine tüm İK süreçlerini dijitalleştiren HCM platformu.",
        url: "https://bgts.com.tr/products/hcm",
    },
}

export default function HcmLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
