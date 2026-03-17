"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { cn } from "@/lib/utils"
import {
    CheckCircle2,
    FileText,
    Cpu,
    Briefcase,
    Activity,
    Mic,
    Bot,
    Code,
    ArrowRight,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

type CategoryId = "recruitment" | "enterprise" | "document"

interface Product {
    slug: string
    name: string
    description: string
    category: CategoryId
}

interface Category {
    id: CategoryId
    accentColor: string
    accentBg: string
    accentBorder: string
    iconColor: string
    sectionLabel: string
    heading: string
    headingAccent: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
    {
        slug: "ai-hiring-assistant",
        name: "AI HIRING ASSISTANT",
        description: "İşe alım süreçlerini yapay zeka ile hızlandırın.",
        category: "recruitment",
    },
    {
        slug: "cv-converter",
        name: "CV-CONVERTER",
        description: "Dağınık CV formatlarını standart hale getirin.",
        category: "recruitment",
    },
    {
        slug: "cortex",
        name: "CORTEX",
        description: "Yazılım yaşam döngüsünü AI agent'larla otomatikleştirin.",
        category: "enterprise",
    },
    {
        slug: "hcm",
        name: "HCM PLATFORMU",
        description: "İK operasyonlarınızı uçtan uca dijitalleştiren HCM platformumuz.",
        category: "enterprise",
    },
    {
        slug: "praxila",
        name: "PRAXILA",
        description: "Yeni nesil otomasyon ve operasyon yönetimi platformumuz.",
        category: "enterprise",
    },
    {
        slug: "meetsense",
        name: "MEETSENSE",
        description: "Toplantıları AI ile kaydedin, analiz edin ve kurumsal hafızaya dönüştürün.",
        category: "enterprise",
    },
    {
        slug: "doc2bot",
        name: "DOC2BOT",
        description: "Kurum içi bilgi bankanızı akıllı bir asistana dönüştürün.",
        category: "document",
    },
    {
        slug: "docmind",
        name: "DOCMIND",
        description: "Kod tabanınızdan otomatik teknik dokümantasyon üretin.",
        category: "document",
    },
]

const CATEGORIES: Category[] = [
    {
        id: "recruitment",
        accentColor: "text-blue-600",
        accentBg: "bg-blue-50",
        accentBorder: "border-blue-500",
        iconColor: "text-blue-600",
        sectionLabel: "01 — İşe Alım Teknolojileri",
        heading: "İşe Alım Süreçlerini",
        headingAccent: "Dönüştürün",
    },
    {
        id: "enterprise",
        accentColor: "text-indigo-600",
        accentBg: "bg-indigo-50",
        accentBorder: "border-indigo-500",
        iconColor: "text-indigo-600",
        sectionLabel: "02 — Kurumsal Çözümler",
        heading: "Kurumsal Operasyonları",
        headingAccent: "Otomatikleştirin",
    },
    {
        id: "document",
        accentColor: "text-teal-600",
        accentBg: "bg-teal-50",
        accentBorder: "border-teal-500",
        iconColor: "text-teal-600",
        sectionLabel: "03 — Doküman & Bilgi Yönetimi",
        heading: "Bilgiyi Akıllı Bir",
        headingAccent: "Asistana Dönüştür",
    },
]

const ICON_MAP: Record<string, React.ElementType> = {
    "ai-hiring-assistant": CheckCircle2,
    "cv-converter": FileText,
    cortex: Cpu,
    hcm: Briefcase,
    praxila: Activity,
    meetsense: Mic,
    doc2bot: Bot,
    docmind: Code,
}

const CATEGORY_MAP = Object.fromEntries(
    CATEGORIES.map((c) => [c.id, c])
) as Record<CategoryId, Category>

const productsByCategory = (id: CategoryId) =>
    PRODUCTS.filter((p) => p.category === id)

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product, index }: { product: Product; index: number }) {
    const Icon = ICON_MAP[product.slug]
    const cat = CATEGORY_MAP[product.category]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className={cn(
                "group relative flex flex-col bg-white rounded-sm overflow-hidden",
                "border border-slate-100 border-l-4",
                cat.accentBorder,
                "shadow-sm hover:shadow-xl",
                "transition-all duration-300"
            )}
        >
            <div className="p-6 flex-1 flex flex-col">
                {/* Icon */}
                <div
                    className={cn(
                        "w-11 h-11 rounded-sm flex items-center justify-center mb-5",
                        cat.accentBg,
                        cat.iconColor
                    )}
                >
                    <Icon className="w-5 h-5" />
                </div>

                {/* Name */}
                <Heading
                    variant="h4"
                    className={cn(
                        "mb-2 transition-colors duration-300",
                        "group-hover:" + cat.accentColor.replace("text-", "text-")
                    )}
                >
                    {product.name}
                </Heading>

                {/* Description */}
                <Text variant="muted" className="leading-relaxed flex-1">
                    {product.description}
                </Text>
            </div>

            <div className="px-6 py-4 border-t border-slate-100 flex justify-end">
                <Link
                    href={`/products/${product.slug}`}
                    className={cn(
                        "inline-flex items-center gap-1.5 text-sm font-bold",
                        cat.accentColor,
                        "hover:gap-3 transition-all duration-300"
                    )}
                >
                    İncele
                    <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>
        </motion.div>
    )
}

// ─── Category Section ─────────────────────────────────────────────────────────

function CategorySection({
    category,
    background,
}: {
    category: Category
    background: "default" | "glazed"
}) {
    const products = productsByCategory(category.id)

    return (
        <Section background={background}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Text
                        variant="small"
                        className={cn(
                            "font-bold uppercase tracking-[0.18em] mb-3 block",
                            category.accentColor
                        )}
                    >
                        {category.sectionLabel}
                    </Text>
                    <Heading variant="h2">
                        {category.heading}{" "}
                        <span className={category.accentColor}>
                            {category.headingAccent}
                        </span>
                    </Heading>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.slug} product={product} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const sectionBg: Array<"default" | "glazed"> = ["default", "glazed", "default"]

export default function ProductsPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ─── HERO ─────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden min-h-[55vh] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-28">

                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/headers/ai-urunler-hero.jpg')" }}
                />

                {/* Overlay: sol tarafı okunabilir yapmak için soldan sağa gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(5,8,26,0.82) 0%, rgba(5,8,26,0.65) 50%, rgba(5,8,26,0.25) 100%)",
                    }}
                />

                <Container className="relative z-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Heading
                                variant="h1"
                                className="text-white mb-5"
                                style={{ lineHeight: 1.1 }}
                            >
                                Kurumunuzu Dönüştüren{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                                    Akıllı Platformlar
                                </span>
                            </Heading>

                            <Text
                                variant="lead"
                                className="text-slate-300 font-light leading-relaxed"
                            >
                                Verimliliği artıran, maliyetleri düşüren ve rekabet avantajı
                                kazandıran 8 yapay zeka platformu — işe alımdan kurumsal
                                otomasyona, belge yönetiminden bilgi asistanlarına.
                            </Text>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ─── CATEGORIES ─────────────────────────────────────────────── */}
            {CATEGORIES.map((category, i) => (
                <CategorySection
                    key={category.id}
                    category={category}
                    background={sectionBg[i]}
                />
            ))}
        </div>
    )
}
