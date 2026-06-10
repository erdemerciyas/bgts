"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { localizedHref } from "@/lib/routes"
import type { Locale } from "@/i18n-config"

export default function Footer({ dict, lang = "tr" }: { dict: any; lang?: string }) {
    if (!dict) return null;
    const locale = lang as Locale;
    const href = (path: string) => localizedHref(locale, path);

    return (
        <footer className="flex flex-col">
            {/* Footer Section */}
            <div className="bg-corporate-dark text-white pt-12 pb-8">
                <div className="container mx-auto px-6">
                    {/* Links Grid with Logo */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">

                        {/* Logo & Description */}
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <div className="mb-4">
                                <Image src="/BGTS_logo_white.png" alt="BGTS Logo" width={150} height={66} className="object-contain" />
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {dict.description}
                            </p>
                        </div>

                        {/* Column 1 */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">{dict.columns.services}</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><Link href={href('/services/managed-services')} className="hover:text-corporate-accent transition-colors">{dict.links.managedServices}</Link></li>
                                <li><Link href={href('/services/devops')} className="hover:text-corporate-accent transition-colors">{dict.links.devops}</Link></li>
                                <li><Link href={href('/services/software-development')} className="hover:text-corporate-accent transition-colors">{dict.links.softwareDev}</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">{dict.columns.industries}</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><Link href={href('/industries/banking')} className="hover:text-corporate-accent transition-colors">{dict.links.banking}</Link></li>
                                <li><Link href={href('/industries/defense')} className="hover:text-corporate-accent transition-colors">{dict.links.defense}</Link></li>
                                <li><Link href={href('/industries/retail-telecom')} className="hover:text-corporate-accent transition-colors">{dict.links.retailTelecom}</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">{dict.columns.corporate}</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><Link href={href('/about')} className="hover:text-corporate-accent transition-colors">{dict.links.about}</Link></li>
                                <li><Link href={href('/contact')} className="hover:text-corporate-accent transition-colors">{dict.links.contact}</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">{dict.columns.offices}</h4>
                            <ul className="space-y-4 text-white/50 text-sm">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>İstanbul / İTÜ Arı 3 Teknokent</span>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>Ankara / Bilkent Cyberpark</span>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>London</span>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>Sheffield</span>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>Düsseldorf</span>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>Amsterdam</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/30 text-sm">
                            {dict.copyright}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
