"use client"

import { Heading, Text } from "@/components/ui/Typography"
import { CaseStudy } from "@/data/case-studies"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/* ── Category left-bar colors ── */
const CATEGORY_COLOR: Record<string, { bar: string; num: string; label: string; labelBg: string }> = {
    "yazilim": { bar: "bg-blue-500", num: "text-blue-500/20", label: "Yazılım", labelBg: "bg-blue-50 text-blue-600" },
    "altyapi": { bar: "bg-slate-400", num: "text-slate-400/20", label: "Altyapı", labelBg: "bg-slate-100 text-slate-600" },
    "yonetilen-hizmet": { bar: "bg-emerald-500", num: "text-emerald-500/20", label: "Yönetilen Hizmet", labelBg: "bg-emerald-50 text-emerald-700" },
    "egitim": { bar: "bg-amber-500", num: "text-amber-500/20", label: "Eğitim", labelBg: "bg-amber-50 text-amber-700" },
}

const TECH_COLORS: Record<string, string> = {
    "Java": "bg-orange-100 text-orange-700",
    "Java 17": "bg-orange-100 text-orange-700",
    "Spring Boot": "bg-green-100  text-green-700",
    "Spring Framework": "bg-green-100  text-green-700",
    "Spring Batch": "bg-green-100  text-green-700",
    "React": "bg-cyan-100   text-cyan-700",
    "React Native": "bg-cyan-100   text-cyan-700",
    "gRPC": "bg-blue-100   text-blue-700",
    "C#": "bg-purple-100 text-purple-700",
    ".NET": "bg-purple-100 text-purple-700",
    "ASP.NET": "bg-purple-100 text-purple-700",
    "ASP.NET Web API": "bg-purple-100 text-purple-700",
    "ASP.NET MVC": "bg-purple-100 text-purple-700",
    "ASP.NET WebForms": "bg-purple-100 text-purple-700",
    "TypeScript": "bg-blue-50    text-blue-800",
    "Oracle DB": "bg-red-100    text-red-700",
    "SQL Server": "bg-red-100    text-red-700",
    "DB2": "bg-red-100    text-red-700",
    "RabbitMQ": "bg-orange-100 text-orange-700",
    "Docker": "bg-sky-100    text-sky-700",
    "Kubernetes": "bg-sky-100    text-sky-700",
    "OpenShift": "bg-red-50     text-red-800",
    "Jenkins": "bg-slate-100  text-slate-700",
    "Angular": "bg-red-100    text-red-700",
    "Kibana": "bg-pink-100   text-pink-700",
    "Dynatrace": "bg-violet-100 text-violet-700",
    "ARK Platform": "bg-indigo-100 text-indigo-700",
    "Microservices": "bg-teal-100   text-teal-700",
    "High-Availability": "bg-teal-100   text-teal-700",
    "Elasticsearch": "bg-yellow-100 text-yellow-700",
    "ITIL 4": "bg-emerald-100 text-emerald-700",
    "4me ITSM": "bg-emerald-100 text-emerald-700",
    "Terraform": "bg-violet-100 text-violet-700",
    "Ansible": "bg-rose-100   text-rose-700",
    "Mainframe Dönüşüm": "bg-amber-100  text-amber-700",
    "Cobol Reverse": "bg-amber-100  text-amber-700",
    "Monitoring": "bg-slate-100  text-slate-700",
    "Prometheus": "bg-orange-100 text-orange-700",
    "Grafana": "bg-orange-100 text-orange-700",
    "ELK Stack": "bg-yellow-100 text-yellow-700",
    "PagerDuty": "bg-green-100  text-green-700",
    "Backbone.js": "bg-slate-100  text-slate-700",
    "Google Maps API": "bg-blue-100   text-blue-700",
    "LinkedIn API": "bg-sky-100    text-sky-700",
    "Microsoft SharePoint": "bg-indigo-100 text-indigo-700",
    "Microsoft 365": "bg-blue-100   text-blue-700",
    "Power Automate": "bg-indigo-50  text-indigo-700",
    "RESTful API": "bg-teal-100   text-teal-700",
    "Linux / Unix": "bg-slate-100  text-slate-700",
    "Windows Server 2019": "bg-blue-50    text-blue-800",
    "SCCM": "bg-blue-50    text-blue-700",
    "PowerShell": "bg-indigo-50  text-indigo-700",
    "Active Directory": "bg-slate-100  text-slate-700",
    "Microsoft Intune": "bg-blue-50    text-blue-700",
    "MDM": "bg-slate-100  text-slate-700",
    "Disaster Recovery": "bg-rose-50    text-rose-700",
}

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
    const cat = CATEGORY_COLOR[study.category ?? "yazilim"]
    const num = String(index + 1).padStart(2, "0")

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.38, delay: (index % 3) * 0.06 }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 flex flex-col"
        >
            {/* Left accent bar */}
            <div className={cn("absolute left-0 top-0 bottom-0 w-[3px]", cat.bar)} />

            {/* ─── Header ─── */}
            <div className="pl-8 pr-6 pt-7 pb-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className={cn("text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider", cat.labelBg)}>
                        {cat.label}
                    </span>
                    {study.projectType && (
                        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100 uppercase tracking-wider">
                            {study.projectType}
                        </span>
                    )}
                </div>

                <Heading variant="h3" className="text-[1.05rem] font-extrabold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">
                    {study.title}
                </Heading>
            </div>

            {/* ─── Body: Gereksinim + Çözüm ─── */}
            <div className="pl-8 pr-6 pb-6 flex-grow space-y-5">

                {/* Gereksinim */}
                {study.requirement && (
                    <div>
                        <span className="block text-[10px] font-black text-amber-600 tracking-[0.14em] uppercase mb-1.5">
                            Gereksinim
                        </span>
                        <p className="text-slate-600 text-[13px] leading-relaxed">
                            {study.requirement}
                        </p>
                    </div>
                )}

                {/* Çözüm */}
                {study.solution && (
                    <div>
                        <span className="block text-[10px] font-black text-emerald-700 tracking-[0.14em] uppercase mb-1.5">
                            Çözüm
                        </span>
                        <p className="text-slate-600 text-[13px] leading-relaxed">
                            {study.solution}
                        </p>
                    </div>
                )}
            </div>

            {/* ─── Technologies (footer) ─── */}
            <div className="pl-8 pr-6 py-5 border-t border-slate-50 bg-slate-50/60">
                {(study.technologies && study.technologies.length > 0) ? (
                    <div className="flex flex-wrap gap-1.5">
                        {study.technologies.map((tech) => (
                            <span
                                key={tech}
                                className={cn(
                                    "inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-default hover:scale-105 transition-transform",
                                    TECH_COLORS[tech] ?? "bg-slate-100 text-slate-600"
                                )}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                ) : (
                    <span className="text-[12px] text-slate-400 italic">Özel kurumsal geliştirme</span>
                )}
            </div>
        </motion.article>
    )
}
