"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="flex flex-col">
            {/* Footer Section */}
            <div className="bg-corporate-dark text-white pt-16 pb-10">
                <div className="container mx-auto px-6">
                    {/* Links Grid with Logo */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">

                        {/* Logo & Description */}
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <div className="relative w-48 h-16 mb-4 filter brightness-0 invert opacity-90">
                                <Image src="/BGTS_logo.png" alt="BGTS Logo" fill className="object-contain" />
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Finans, Savunma, Perakende ve Telekom sektörleri için stratejik teknoloji ortağı. 25 yıldır dijital dönüşümü güvenle yönetiyoruz.
                            </p>
                        </div>

                        {/* Column 1 */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">Hizmetler</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><Link href="/services/managed-services" className="hover:text-corporate-accent transition-colors">Yönetilen Hizmetler</Link></li>
                                <li><Link href="/services/devops" className="hover:text-corporate-accent transition-colors">DevOps & SRE</Link></li>
                                <li><Link href="/services/software-development" className="hover:text-corporate-accent transition-colors">Yazılım Geliştirme</Link></li>
                                <li><Link href="#" className="hover:text-corporate-accent transition-colors">Tüm Hizmetler</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">Sektörler</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><Link href="/industries/banking" className="hover:text-corporate-accent transition-colors">Bankacılık & Finans</Link></li>
                                <li><Link href="/industries/defense" className="hover:text-corporate-accent transition-colors">Savunma Sanayi</Link></li>
                                <li><Link href="/industries/retail-telecom" className="hover:text-corporate-accent transition-colors">Perakende & Telekom</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">Kurumsal</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><Link href="/about" className="hover:text-corporate-accent transition-colors">Hakkımızda</Link></li>
                                <li><Link href="/hr" className="hover:text-corporate-accent transition-colors">Kariyer</Link></li>
                                <li><Link href="/hr#talent" className="hover:text-corporate-accent transition-colors">Genç Yetenek</Link></li>
                                <li><Link href="/contact" className="hover:text-corporate-accent transition-colors">İletişim</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">Ofislerimiz</h4>
                            <ul className="space-y-4 text-white/50 text-sm">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>Maslak, İstanbul (Genel Merkez)</span>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>Ankara Teknokent</span>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>Amsterdam, Hollanda</span>
                                </li>
                                <li className="flex gap-3">
                                    <Mail className="w-5 h-5 text-corporate-accent shrink-0" />
                                    <span>info@bgts.com.tr</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/30 text-sm">
                            © 2024 BGTS. Tüm hakları saklıdır.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Facebook className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
