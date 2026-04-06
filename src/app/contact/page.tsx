"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    Mail, Phone, MapPin, ArrowRight, Send, CheckCircle,
    AlertCircle, User, MessageSquare, Building2, Clock, ArrowUpRight
} from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

const CONTACT_METHODS = [
    {
        icon: Phone,
        label: "Telefon",
        value: "+90 444 3330",
        href: "tel:+904443330",
        sublabel: "Hafta içi 09:00 – 18:00",
    },
    {
        icon: Mail,
        label: "E-Posta",
        value: "info@bgts.com",
        href: "mailto:info@bgts.com",
        sublabel: "24 saat içinde dönüş",
    },
    {
        icon: MapPin,
        label: "Ofisler",
        value: "İstanbul & Ankara",
        href: "#ofisler",
        sublabel: "2 lokasyonda hizmet",
    },
]

const OFFICES = [
    {
        city: "İstanbul",
        title: "Merkez Ofis",
        address: "İTÜ ARI Teknokent, Sarıyer",
        fullAddress: "Reşitpaşa Mah. Katar Cad. No:4 Arı 3 Binası, 34467 Sarıyer/İstanbul",
        mapUrl: "https://maps.google.com/?q=ITU+ARI+Teknokent",
        image: "/images/contact/itu-ari3.jpg",
    },
    {
        city: "Ankara",
        title: "Ankara Ofis",
        address: "Bilkent Cyberpark",
        fullAddress: "Cyberpark, Cyberplaza B Blok, Bilkent, 06800 Çankaya/Ankara",
        mapUrl: "https://maps.google.com/?q=Bilkent+Cyberpark",
        image: "/images/contact/itu-ari3.jpg",
    },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "", email: "", company: "", phone: "", message: "", consent: false
    })
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validate = () => {
        const e: Record<string, string> = {}
        if (!formData.name || formData.name.length < 2) e.name = "Ad soyad gerekli"
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Geçerli e-posta giriniz"
        if (!formData.message || formData.message.length < 10) e.message = "Mesaj en az 10 karakter olmalı"
        if (!formData.consent) e.consent = "KVKK onayı gerekli"
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setStatus("submitting")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (!response.ok) throw new Error("Hata oluştu")

            setStatus("success")
            setFormData({ name: "", email: "", company: "", phone: "", message: "", consent: false })
            setErrors({})
            setTimeout(() => setStatus("idle"), 6000)
        } catch {
            setStatus("error")
            setTimeout(() => setStatus("idle"), 5000)
        }
    }

    const update = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
    }

    return (
        <div className="bg-white min-h-screen">

            {/* Hero — Full-bleed dark with asymmetric layout */}
            <section className="relative bg-corporate-dark overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/headers/teknoloji-servisleri-genel.jpg"
                        alt=""
                        fill
                        priority
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-corporate-dark/40 via-corporate-dark/80 to-corporate-dark" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-corporate-secondary/8 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-corporate-accent/6 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

                <Container className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heading variant="h1" className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                                Projenizi birlikte
                                <span className="block text-corporate-accent">hayata geçirelim.</span>
                            </Heading>
                            <Text variant="large" className="text-slate-300 max-w-xl leading-relaxed">
                                30+ yıllık deneyimimizle, ihtiyaçlarınıza en uygun teknoloji çözümünü belirlemek için yanınızdayız.
                            </Text>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Contact Methods — Floating cards */}
            <section className="relative z-10">
                <Container className="-mt-10 md:-mt-14">
                    <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
                        {CONTACT_METHODS.map((method, i) => (
                            <motion.a
                                key={method.label}
                                href={method.href}
                                target={method.href.startsWith("http") ? "_blank" : undefined}
                                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                                className="group bg-white rounded-2xl p-6 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-corporate-secondary/30 hover:shadow-xl hover:shadow-corporate-secondary/5 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-corporate-dark flex items-center justify-center shrink-0 group-hover:bg-corporate-secondary transition-colors">
                                        <method.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">{method.label}</div>
                                        <div className="text-slate-900 font-bold text-sm md:text-base truncate">{method.value}</div>
                                        <div className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {method.sublabel}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-corporate-secondary shrink-0 mt-1 transition-colors" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Main Content — Form + Image */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-0 items-start">

                        {/* Form — 3 cols */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3 lg:pr-16"
                        >
                            <Heading variant="h2" className="text-slate-900 mb-3 text-2xl md:text-3xl">
                                Size nasıl yardımcı olabiliriz?
                            </Heading>
                            <Text className="text-slate-500 mb-10 max-w-lg">
                                Formu doldurun, en kısa sürede uzman ekibimiz sizinle iletişime geçsin.
                            </Text>

                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-900 text-sm">Mesajınız iletildi</div>
                                        <div className="text-emerald-700 text-sm mt-0.5">En kısa sürede size dönüş yapacağız.</div>
                                    </div>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-8 p-5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-red-900 text-sm">Bir hata oluştu</div>
                                        <div className="text-red-700 text-sm mt-0.5">Lütfen tekrar deneyin veya doğrudan e-posta gönderin.</div>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name + Email row */}
                                <div className="grid md:grid-cols-2 gap-5">
                                    <FormField
                                        id="name" label="Ad Soyad" required icon={User}
                                        value={formData.name} error={errors.name}
                                        onChange={v => update("name", v)}
                                        placeholder="Adınız Soyadınız"
                                        disabled={status === "submitting"}
                                    />
                                    <FormField
                                        id="email" label="E-Posta" required icon={Mail} type="email"
                                        value={formData.email} error={errors.email}
                                        onChange={v => update("email", v)}
                                        placeholder="ornek@sirket.com"
                                        disabled={status === "submitting"}
                                    />
                                </div>

                                {/* Company + Phone row */}
                                <div className="grid md:grid-cols-2 gap-5">
                                    <FormField
                                        id="company" label="Şirket" icon={Building2}
                                        value={formData.company} error={errors.company}
                                        onChange={v => update("company", v)}
                                        placeholder="Şirket adı"
                                        disabled={status === "submitting"}
                                    />
                                    <FormField
                                        id="phone" label="Telefon" icon={Phone} type="tel"
                                        value={formData.phone} error={errors.phone}
                                        onChange={v => update("phone", v)}
                                        placeholder="+90 212 XXX XX XX"
                                        disabled={status === "submitting"}
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                                        Mesajınız <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                                        <textarea
                                            id="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={e => update("message", e.target.value)}
                                            disabled={status === "submitting"}
                                            className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-secondary/30 focus:border-corporate-secondary transition-all resize-none text-slate-900 text-sm ${errors.message ? "border-red-300 bg-red-50/50" : "border-slate-200 bg-white"}`}
                                            placeholder="Mesajınızı buraya yazın..."
                                        />
                                    </div>
                                    {errors.message && (
                                        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* KVKK */}
                                <div className="space-y-1">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.consent}
                                            onChange={e => update("consent", e.target.checked)}
                                            disabled={status === "submitting"}
                                            className="mt-0.5 w-4 h-4 rounded border-slate-300 text-corporate-secondary focus:ring-corporate-secondary/30"
                                        />
                                        <span className="text-xs text-slate-500 leading-relaxed">
                                            Kişisel verilerimin <span className="font-semibold text-slate-700">6698 sayılı KVKK</span> kapsamında işlenmesini kabul ediyorum. <span className="text-red-500">*</span>
                                        </span>
                                    </label>
                                    {errors.consent && (
                                        <p className="text-xs text-red-600 flex items-center gap-1 pl-7">
                                            <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                                        </p>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="inline-flex items-center justify-center gap-2.5 h-13 px-10 text-sm font-bold text-white bg-corporate-secondary rounded-full hover:bg-corporate-dark transition-all hover:shadow-lg hover:shadow-corporate-secondary/15 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Gönderiliyor...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Mesajı Gönder
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Right Side — Offices + Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-6"
                            id="ofisler"
                        >
                            {/* Offices */}
                            <div className="space-y-4">
                                <Heading variant="h4" className="text-slate-900 text-lg">Ofislerimiz</Heading>
                                <div className="grid gap-4">
                                    {OFFICES.map((office) => (
                                        <a
                                            key={office.city}
                                            href={office.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative h-[180px] rounded-2xl overflow-hidden block"
                                        >
                                            <Image
                                                src={office.image}
                                                alt={`BGTS ${office.title}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/80 via-corporate-dark/20 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="text-white/70 text-xs font-medium uppercase tracking-wide mb-1">{office.title}</div>
                                                        <div className="text-white font-bold text-sm">{office.address}</div>
                                                        <div className="text-white/60 text-xs mt-1">{office.city}</div>
                                                    </div>
                                                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick info card */}
                            <div className="bg-corporate-dark rounded-2xl p-6 md:p-8 text-white">
                                <Heading variant="h4" className="text-white mb-4 text-lg">Neden BGTS?</Heading>
                                <ul className="space-y-3">
                                    {[
                                        "1400+ mühendis ile kurumsal ölçekte çözümler",
                                        "Finans, telekom, savunma sektörlerinde derin uzmanlık",
                                        "Atlassian, Qlik, ServiceNow iş ortaklıkları",
                                        "7/24 yönetilen hizmetler ve SRE desteği"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                            <CheckCircle className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 pt-5 border-t border-white/10">
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-corporate-accent transition-colors group/link"
                                    >
                                        Hakkımızda daha fazla
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

function FormField({
    id, label, required, icon: Icon, type = "text",
    value, error, onChange, placeholder, disabled
}: {
    id: string; label: string; required?: boolean; icon: React.ComponentType<{ className?: string }>;
    type?: string; value: string; error?: string; onChange: (v: string) => void;
    placeholder: string; disabled: boolean;
}) {
    return (
        <div className="space-y-1.5">
            <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    disabled={disabled}
                    className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-secondary/30 focus:border-corporate-secondary transition-all text-slate-900 text-sm ${error ? "border-red-300 bg-red-50/50" : "border-slate-200 bg-white"}`}
                    placeholder={placeholder}
                />
            </div>
            {error && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {error}
                </p>
            )}
        </div>
    )
}
