"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="flex flex-col">
            {/* Top Section: Logo & Newsletter/CTA */}
            <div className="bg-corporate-primary text-white pt-20 pb-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="mb-8 md:mb-0">
                            <div className="relative w-48 h-16 mb-4 filter brightness-0 invert opacity-90">
                                <Image src="/BGTS_logo.png" alt="BGTS Logo" fill className="object-contain" />
                            </div>
                            <p className="text-white/70 max-w-sm">
                                Finans, Savunma, Perakende ve Telekom sektörleri için stratejik teknoloji ortağı. 25 yıldır dijital dönüşümü güvenle yönetiyoruz.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">Bizimle İletişime Geçin</h3>
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-corporate-secondary px-8 font-medium text-white transition-all hover:bg-corporate-accent shadow-lg shadow-corporate-secondary/20">
                                Proje Başlat
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Links & Copyright */}
            <div className="bg-corporate-dark text-white pt-16 pb-10">
                <div className="container mx-auto px-6">
                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

                        {/* Column 1 */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white mb-4">Hizmetler</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><Link href="/services/managed-services" className="hover:text-corporate-accent transition-colors">Yönetilen Hizmetler</Link></li>
                                <li><Link href="/services/devops" className="hover:text-corporate-accent transition-colors">DevOps & SRE</Link></li>
                                <li><Link href="/services/software-development" className="hover:text-corporate-accent transition-colors">Yazılım Geliştirme</Link></li>
                                <li><Link href="/services" className="hover:text-corporate-accent transition-colors">Tüm Hizmetler</Link></li>
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
                    <div className="pt-8 border-t border-corporate-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/30 text-sm">
                            © 2024 BGTS. Tüm hakları saklıdır.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="p-2 bg-corporate-primary/50 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-corporate-primary/50 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-corporate-primary/50 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-corporate-primary/50 rounded-full hover:bg-corporate-secondary transition-colors text-white">
                                <Facebook className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
