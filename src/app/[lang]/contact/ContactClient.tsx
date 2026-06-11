"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { localizedHref } from "@/lib/routes"
import type { Locale } from "@/i18n-config"
import { motion } from "framer-motion"
import {
    Mail, Phone, MapPin, ArrowRight, Send, CheckCircle,
    AlertCircle, User, MessageSquare, Building2, Clock, ArrowUpRight
} from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

const METHOD_ICONS = [Phone, Mail, MapPin]

type ContactDict = {
    hero: { title: string; highlight: string; subtitle: string }
    methods: { label: string; value: string; href: string; sublabel: string }[]
    offices: { city: string; title: string; address: string; mapUrl: string; image: string }[]
    form: {
        heading: string; subheading: string
        name: string; namePlaceholder: string
        email: string; emailPlaceholder: string
        company: string; companyPlaceholder: string
        phone: string; phonePlaceholder: string
        message: string; messagePlaceholder: string
        consent: string; consentBold: string
        submit: string; submitting: string
    }
    validation: { nameRequired: string; emailInvalid: string; messageMin: string; consentRequired: string }
    success: { title: string; body: string }
    error: { title: string; body: string }
    sidebar: { officesHeading: string; whyHeading: string; whyItems: string[]; aboutLink: string }
}

export default function ContactClient({ dict: d, lang }: { dict: ContactDict; lang: string }) {
    const [formData, setFormData] = useState({
        name: "", email: "", company: "", phone: "", message: "", consent: false
    })
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validate = () => {
        const e: Record<string, string> = {}
        if (!formData.name || formData.name.length < 2) e.name = d.validation.nameRequired
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = d.validation.emailInvalid
        if (!formData.message || formData.message.length < 10) e.message = d.validation.messageMin
        if (!formData.consent) e.consent = d.validation.consentRequired
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
            if (!response.ok) throw new Error("Error")
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

            {/* HERO */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[520px] lg:min-h-[600px] flex items-end">
                <div className="absolute inset-0">
                    <Image src="/images/contact/bgts-iletisim.jpg" alt={d.hero.title} fill className="object-cover object-center" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
                </div>
                <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

                <Container className="relative z-10 pb-8">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
                                {d.hero.title}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{d.hero.highlight}</span>
                            </h1>
                            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">{d.hero.subtitle}</p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* CONTACT METHODS STRIP */}
            <div className="relative z-20 -mt-10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {d.methods.map((method, i) => {
                            const Icon = METHOD_ICONS[i]
                            return (
                                <motion.a key={i} href={method.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/60 border border-slate-100/60 hover:border-blue-200 hover:shadow-blue-100/40 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{method.label}</div>
                                        <div className="font-bold text-slate-900 text-sm truncate">{method.value}</div>
                                        <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                            <Clock className="w-3 h-3" />{method.sublabel}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors ml-auto shrink-0" />
                                </motion.a>
                            )
                        })}
                    </div>
                </Container>
            </div>

            {/* MAIN CONTENT: Sidebar + Form */}
            <section className="py-16 lg:py-24">
                <Container>
                    <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

                        {/* SIDEBAR */}
                        <div className="space-y-6 lg:sticky lg:top-24">

                            {/* Offices */}
                            <div>
                                <Heading variant="h3" className="text-slate-900 !text-lg !font-bold mb-4">{d.sidebar.officesHeading}</Heading>
                                <div className="space-y-3" id="offices">
                                    {d.offices.map((office, i) => (
                                        <a key={i} href={office.mapUrl} target="_blank" rel="noopener noreferrer"
                                            className="group flex items-start gap-4 bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                                            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                                                <Image src={office.image} alt={office.city} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{office.title}</div>
                                                <div className="font-bold text-slate-800 text-sm">{office.city}</div>
                                                <div className="text-xs text-slate-500 flex items-start gap-1 mt-1">
                                                    <MapPin className="w-3 h-3 mt-0.5 shrink-0" />{office.address}
                                                </div>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors mt-1 ml-auto shrink-0" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Why BGTS */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                                <h4 className="font-bold text-sm mb-4 text-white/80 uppercase tracking-wider">{d.sidebar.whyHeading}</h4>
                                <ul className="space-y-3">
                                    {d.sidebar.whyItems.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-300">
                                            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={localizedHref(lang as Locale, '/about')} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors mt-5 group">
                                    {d.sidebar.aboutLink}
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* FORM */}
                        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                            <div className="p-8 lg:p-10">
                                <Heading variant="h2" className="!text-2xl !font-bold text-slate-900 mb-2">{d.form.heading}</Heading>
                                <Text className="text-slate-500 mb-8">{d.form.subheading}</Text>

                                {/* SUCCESS */}
                                {status === "success" && (
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center text-center py-16 px-8 space-y-4">
                                        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                                            <CheckCircle className="w-10 h-10 text-emerald-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">{d.success.title}</h3>
                                        <p className="text-slate-500">{d.success.body}</p>
                                    </motion.div>
                                )}

                                {/* ERROR */}
                                {status === "error" && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                                        className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
                                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-bold text-red-800 text-sm">{d.error.title}</p>
                                            <p className="text-red-600 text-sm">{d.error.body}</p>
                                        </div>
                                    </motion.div>
                                )}

                                {status !== "success" && (
                                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                        {/* Name + Email */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                                                    <User className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />{d.form.name}
                                                </label>
                                                <input type="text" placeholder={d.form.namePlaceholder} value={formData.name}
                                                    onChange={e => update("name", e.target.value)}
                                                    className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${errors.name ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50 hover:border-slate-300 focus:border-blue-400 focus:bg-white"}`}
                                                />
                                                {errors.name && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                                                    <Mail className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />{d.form.email}
                                                </label>
                                                <input type="email" placeholder={d.form.emailPlaceholder} value={formData.email}
                                                    onChange={e => update("email", e.target.value)}
                                                    className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50 hover:border-slate-300 focus:border-blue-400 focus:bg-white"}`}
                                                />
                                                {errors.email && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Company + Phone */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                                                    <Building2 className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />{d.form.company}
                                                </label>
                                                <input type="text" placeholder={d.form.companyPlaceholder} value={formData.company}
                                                    onChange={e => update("company", e.target.value)}
                                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 focus:border-blue-400 focus:bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                                                    <Phone className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />{d.form.phone}
                                                </label>
                                                <input type="tel" placeholder={d.form.phonePlaceholder} value={formData.phone}
                                                    onChange={e => update("phone", e.target.value)}
                                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 focus:border-blue-400 focus:bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1.5">
                                                <MessageSquare className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />{d.form.message}
                                            </label>
                                            <textarea rows={5} placeholder={d.form.messagePlaceholder} value={formData.message}
                                                onChange={e => update("message", e.target.value)}
                                                className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all resize-none ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50 hover:border-slate-300 focus:border-blue-400 focus:bg-white"}`}
                                            />
                                            {errors.message && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                                        </div>

                                        {/* Consent */}
                                        <div>
                                            <label className="flex items-start gap-3 cursor-pointer group">
                                                <input type="checkbox" checked={formData.consent}
                                                    onChange={e => update("consent", e.target.checked)}
                                                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-corporate-secondary focus:ring-corporate-secondary/30"
                                                />
                                                <span className="text-xs text-slate-500 leading-relaxed">
                                                    {d.form.consent.split(d.form.consentBold).map((part, i, arr) =>
                                                        i < arr.length - 1
                                                            ? <span key={i}>{part}<span className="font-semibold text-slate-700">{d.form.consentBold}</span></span>
                                                            : <span key={i}>{part}</span>
                                                    )}
                                                    {" "}<span className="text-red-500">*</span>
                                                </span>
                                            </label>
                                            {errors.consent && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.consent}</p>}
                                        </div>

                                        {/* Submit */}
                                        <button type="submit" disabled={status === "submitting"}
                                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 group">
                                            {status === "submitting"
                                                ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{d.form.submitting}</>
                                                : <><Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />{d.form.submit}</>
                                            }
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
