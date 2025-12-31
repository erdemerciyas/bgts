"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { Server, Monitor } from "lucide-react"

export default function ServicesPage() {
    return (
        <>
            <Hero
                title="Technology Services"
                subtitle="End-to-end management of critical systems for operational excellence."
                badge="Services"
            />

            {/* Managed Services */}
            <ContentSection
                title="Data Center Platform & Application Management"
                badge="Managed Services"
                content={
                    <div className="space-y-4">
                        <p>
                            In today&apos;s complex digital world, managing large-scale and hybrid data center environments requires more than just keeping the lights on. We are your specialized Managed Service Provider for Platform and Application layers.
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white mt-4">Key Capabilities:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>End-to-End Expertise:</strong> From standard OS to virtualization, database platforms, and container orchestration.</li>
                            <li><strong>AI-Powered Operations (AIOps):</strong> Intelligent monitoring reduces noise and automates resolution for known issues.</li>
                            <li><strong>Site Reliability Engineering (SRE):</strong> A proactive approach focusing on reliability, SLOs, and automation-first remediation.</li>
                            <li><strong>Proven Excellence:</strong> 100% ITIL compliant operations with high First Call Resolution (FCR) rates.</li>
                        </ul>
                    </div>
                }
                image={
                    <div className="flex flex-col items-center justify-center h-full text-blue-100 bg-gradient-to-br from-blue-900 to-slate-900 p-8 text-center">
                        <Server className="w-20 h-20 mb-4 text-blue-400" />
                        <span className="text-xl font-bold text-white">Critical Infrastructure Leadership</span>
                    </div>
                }
            />

            {/* Desktop Support */}
            <ContentSection
                reverse
                title="Next-Gen Managed Desktop Services"
                badge="Workplace Support"
                content={
                    <div className="space-y-4">
                        <p>
                            Empower your workforce with AI-Enhanced Support. We manage desktop, laptop, mobile, and peripheral devices to ensure a seamless experience for your modern workforce.
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white mt-4">Why Choose Us?</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Omni-Channel Support:</strong> Remote support, on-site teams, and 7/24 self-service portals.</li>
                            <li><strong>Proactive Intelligence:</strong> RMM systems detect and self-heal issues (disk space, slow downs) before users notice.</li>
                            <li><strong>Single Point of Contact (SPoC):</strong> Simplified support flow for all hardware and software needs.</li>
                            <li><strong>SLA-Driven:</strong> High resolution rates with strictly managed Service Level Agreements.</li>
                        </ul>
                    </div>
                }
                image={
                    <div className="flex flex-col items-center justify-center h-full text-purple-100 bg-gradient-to-bl from-indigo-900 to-purple-900 p-8 text-center">
                        <Monitor className="w-20 h-20 mb-4 text-purple-400" />
                        <span className="text-xl font-bold text-white">Smart Workplace Solutions</span>
                    </div>
                }
            />
        </>
    )
}
