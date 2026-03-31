"use client"

import Link from "next/link"
import { CheckCircle, Users, Settings, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { HOME_CONTENT } from "@/content/home"
import { cn } from "@/lib/utils"

function GeometricPatterns() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[#F5F8FB]" />

            <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                    backgroundImage: "radial-gradient(circle, #1E5A8A 0.8px, transparent 0.8px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <svg className="absolute -top-12 -right-12 w-[420px] h-[420px] opacity-[0.06]" viewBox="0 0 420 420" fill="none">
                {Array.from({ length: 14 }).map((_, i) => (
                    <line key={i} x1={0} y1={i * 32} x2={i * 32} y2={0} stroke="#1E5A8A" strokeWidth="1.5" />
                ))}
            </svg>

            <svg className="absolute -bottom-8 -left-8 w-[360px] h-[360px] opacity-[0.05]" viewBox="0 0 360 360" fill="none">
                {[
                    { cx: 80, cy: 160 }, { cx: 140, cy: 120 }, { cx: 200, cy: 160 },
                    { cx: 140, cy: 200 }, { cx: 80, cy: 240 }, { cx: 200, cy: 240 },
                    { cx: 260, cy: 200 }, { cx: 260, cy: 120 }, { cx: 140, cy: 280 },
                ].map((h, i) => (
                    <polygon
                        key={i}
                        points={Array.from({ length: 6 }).map((_, j) => {
                            const angle = (Math.PI / 3) * j - Math.PI / 6;
                            return `${h.cx + 32 * Math.cos(angle)},${h.cy + 32 * Math.sin(angle)}`;
                        }).join(" ")}
                        stroke="#1E5A8A"
                        strokeWidth="1.2"
                        fill="none"
                    />
                ))}
            </svg>

            <svg className="absolute top-12 left-16 w-[200px] h-[200px] opacity-[0.05]" viewBox="0 0 200 200" fill="none">
                {[30, 50, 70, 90].map((s, i) => (
                    <rect key={i} x={100 - s} y={100 - s} width={s * 2} height={s * 2} rx="2" stroke="#3A7CB5" strokeWidth="1" transform={`rotate(45 100 100)`} />
                ))}
            </svg>

            <svg className="absolute top-1/2 -right-6 -translate-y-1/2 w-[280px] h-[280px] opacity-[0.04]" viewBox="0 0 280 280" fill="none">
                {[40, 65, 90, 115].map((r, i) => (
                    <circle key={i} cx="140" cy="140" r={r} stroke="#1E5A8A" strokeWidth="1.2" />
                ))}
            </svg>

            <svg className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[600px] h-[60px] opacity-[0.04]" viewBox="0 0 600 60" fill="none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <g key={i}>
                        <line x1={i * 30} y1={0} x2={i * 30 + 60} y2={60} stroke="#1E5A8A" strokeWidth="1" />
                        <line x1={i * 30 + 60} y1={0} x2={i * 30} y2={60} stroke="#1E5A8A" strokeWidth="1" />
                    </g>
                ))}
            </svg>

            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-corporate-secondary/[0.04] blur-[100px]" />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-corporate-accent/[0.05] blur-[100px]" />
        </div>
    )
}

function CardDecoration({ variant }: { variant: string }) {
    if (variant === "light") {
        return (
            <>
                {/* Top-right corner geometric accent */}
                <svg className="absolute top-0 right-0 w-[140px] h-[140px] opacity-[0.04]" viewBox="0 0 140 140" fill="none">
                    <circle cx="140" cy="0" r="60" stroke="#1E5A8A" strokeWidth="1" />
                    <circle cx="140" cy="0" r="90" stroke="#1E5A8A" strokeWidth="0.8" />
                    <circle cx="140" cy="0" r="120" stroke="#1E5A8A" strokeWidth="0.5" />
                </svg>
                {/* Subtle bottom-left line cluster */}
                <svg className="absolute bottom-6 left-6 w-[80px] h-[80px] opacity-[0.05]" viewBox="0 0 80 80" fill="none">
                    {[0, 16, 32, 48, 64].map((y, i) => (
                        <line key={i} x1="0" y1={y} x2={80 - y} y2="80" stroke="#3A7CB5" strokeWidth="0.8" />
                    ))}
                </svg>
            </>
        )
    }
    return (
        <>
            {/* Radiating lines from top-right */}
            <svg className="absolute top-0 right-0 w-[180px] h-[180px] opacity-[0.08]" viewBox="0 0 180 180" fill="none">
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (Math.PI / 2 / 7) * i;
                    return (
                        <line
                            key={i}
                            x1="180" y1="0"
                            x2={180 - 160 * Math.cos(angle)}
                            y2={160 * Math.sin(angle)}
                            stroke="#00A8A8" strokeWidth="0.8"
                        />
                    )
                })}
            </svg>
            {/* Grid dots bottom-left */}
            <svg className="absolute bottom-8 left-8 w-[60px] h-[60px] opacity-[0.1]" viewBox="0 0 60 60" fill="none">
                {Array.from({ length: 4 }).map((_, row) =>
                    Array.from({ length: 4 }).map((_, col) => (
                        <circle key={`${row}-${col}`} cx={col * 18 + 4} cy={row * 18 + 4} r="2" fill="#00A8A8" />
                    ))
                )}
            </svg>
        </>
    )
}

export function DeliveryModels() {
    const { heading, description, models } = HOME_CONTENT.deliveryModels;

    return (
        <Section id="is-modelleri" className="relative z-0 overflow-hidden py-16 lg:py-24">
            <GeometricPatterns />

            <Container className="relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <Heading variant="h2" className="mb-6 text-corporate-dark">
                        {heading}
                    </Heading>
                    <Text variant="large" className="text-text-secondary max-w-2xl mx-auto font-medium">
                        {description}
                    </Text>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
                    {models.map((model) => (
                        <div
                            key={model.id}
                            className={cn(
                                "group relative flex flex-col h-full rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500",
                                model.variant === "light"
                                    ? "bg-white text-corporate-dark shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(30,90,138,0.06)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.04),0_16px_40px_rgba(30,90,138,0.12)] hover:-translate-y-1"
                                    : "bg-gradient-to-br from-[#0C1D36] via-corporate-dark to-[#0A1628] text-white shadow-[0_8px_32px_rgba(10,22,40,0.25)] hover:shadow-[0_16px_48px_rgba(10,22,40,0.35)] hover:-translate-y-1"
                            )}
                        >
                            <CardDecoration variant={model.variant} />

                            {/* Colored top accent bar */}
                            <div className={cn(
                                "h-1",
                                model.variant === "light"
                                    ? "bg-gradient-to-r from-corporate-secondary via-corporate-accent to-corporate-secondary/40"
                                    : "bg-gradient-to-r from-corporate-tertiary via-[#00C4C4] to-corporate-tertiary/40"
                            )} />

                            <div className="relative flex flex-col h-full p-8 lg:p-10">
                                <div className={cn(
                                    "w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                    model.variant === "light"
                                        ? "bg-gradient-to-br from-corporate-secondary to-corporate-accent text-white shadow-md shadow-corporate-secondary/20"
                                        : "bg-gradient-to-br from-corporate-tertiary/20 to-white/5 text-corporate-tertiary border border-white/10 backdrop-blur-sm"
                                )}>
                                    {model.id === "turnkey" ? <Settings className="w-7 h-7" /> : <Users className="w-7 h-7" />}
                                </div>

                                <Heading variant="h3" className={cn(
                                    "mb-3 text-xl lg:text-2xl",
                                    model.variant === "light" ? "text-corporate-dark" : "text-white"
                                )}>
                                    {model.title}
                                </Heading>

                                <Text className={cn(
                                    "mb-8 leading-relaxed",
                                    model.variant === "light" ? "text-text-secondary" : "text-slate-300"
                                )}>
                                    {model.description}
                                </Text>

                                {/* Divider */}
                                <div className={cn(
                                    "h-px mb-8",
                                    model.variant === "light"
                                        ? "bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                                        : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                )} />

                                {/* Features */}
                                <div className="space-y-4 mb-10">
                                    {model.features.map(item => (
                                        <div key={item} className={cn(
                                            "flex items-center gap-3.5",
                                            model.variant === "light" ? "text-corporate-dark" : "text-white"
                                        )}>
                                            <div className={cn(
                                                "w-7 h-7 rounded-lg flex items-center justify-center shrink-0",
                                                model.variant === "light"
                                                    ? "bg-corporate-surface"
                                                    : "bg-white/[0.06]"
                                            )}>
                                                <CheckCircle className={cn(
                                                    "w-4 h-4",
                                                    model.variant === "light" ? "text-corporate-secondary" : "text-corporate-tertiary"
                                                )} />
                                            </div>
                                            <span className="font-semibold text-[15px]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    href={model.ctaLink}
                                    className={cn(
                                        "group/btn relative flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-center text-sm transition-all duration-300 mt-auto overflow-hidden",
                                        model.variant === "light"
                                            ? "bg-corporate-surface text-corporate-secondary hover:bg-corporate-secondary hover:text-white hover:shadow-lg hover:shadow-corporate-secondary/15"
                                            : "bg-corporate-tertiary/15 text-corporate-tertiary border border-corporate-tertiary/25 hover:bg-corporate-tertiary hover:text-white hover:border-corporate-tertiary hover:shadow-lg hover:shadow-corporate-tertiary/20"
                                    )}
                                >
                                    {model.ctaText}
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
