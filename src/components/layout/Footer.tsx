"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-deep-navy text-white pt-20 pb-10">
            <div className="container mx-auto px-6">

                {/* Top Section: Logo & Newsletter/CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-slate-800 pb-12">
                    <div className="mb-8 md:mb-0">
                        <div className="relative w-48 h-16 mb-4 filter brightness-0 invert opacity-90">
                            <Image src="/BGTS_logo.png" alt="BGTS Logo" fill className="object-contain" />
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            Finans, Savunma, Perakende ve Telekom sektörleri için stratejik teknoloji ortağı. 25 yıldır dijital dönüşümü güvenle yönetiyoruz.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Bizimle İletişime Geçin</h3>
                        <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-action-blue px-8 font-medium text-white transition-all hover:bg-blue-700 shadow-lg shadow-blue-900/20">
                            Proje Başlat
                        </Link>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white mb-4">Hizmetler</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><Link href="/services/managed-services" className="hover:text-blue-400 transition-colors">Yönetilen Hizmetler</Link></li>
                            <li><Link href="/services/devops" className="hover:text-blue-400 transition-colors">DevOps & SRE</Link></li>
                            <li><Link href="/services/software-development" className="hover:text-blue-400 transition-colors">Yazılım Geliştirme</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Tüm Hizmetler</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white mb-4">Sektörler</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><Link href="/industries/banking" className="hover:text-blue-400 transition-colors">Bankacılık & Finans</Link></li>
                            <li><Link href="/industries/defense" className="hover:text-blue-400 transition-colors">Savunma Sanayi</Link></li>
                            <li><Link href="/industries/retail-telecom" className="hover:text-blue-400 transition-colors">Perakende & Telekom</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white mb-4">Kurumsal</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/hr" className="hover:text-blue-400 transition-colors">Kariyer</Link></li>
                            <li><Link href="/hr#talent" className="hover:text-blue-400 transition-colors">Genç Yetenek</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white mb-4">Ofislerimiz</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>Maslak, İstanbul (Genel Merkez)</span>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>Ankara Teknokent</span>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>Amsterdam, Hollanda</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>info@bgts.com.tr</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 BGTS. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors text-white">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors text-white">
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors text-white">
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors text-white">
                            <Facebook className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
