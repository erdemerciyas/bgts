"use client"

import Hero from "@/components/ui/Hero"
import { ContactForm } from "@/components/forms/ContactForm"
import ContactCard from "@/components/ui/ContactCard"
import Breadcrumb from "@/components/ui/Breadcrumb"
import { MapPin, Mail, Phone, Clock, Building2, Globe, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Breadcrumb
          items={[
            { label: "İletişim", href: "/contact", icon: MessageCircle }
          ]}
        />

        <Hero
          title="İletişime Geçin"
          subtitle="Projeleriniz hakkında bilgi almak veya iş birliği yapmak için bizimle iletişime geçin."
          badge="İletişim"
          align="center"
          className="bg-blue-900"
          backgroundImage="https://images.unsplash.com/photo-1596526131078-0c317a217983?auto=format&fit=crop&q=80"
        />

        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <ContactCard
                title="Genel Merkez"
                icon={Building2}
                contactInfo={
                  <div className="space-y-2">
                    <p className="text-slate-800 font-semibold">Maslak Mahallesi</p>
                    <p className="text-slate-600">İstanbul, Türkiye</p>
                  </div>
                }
                color="blue"
                delay={0}
              />

              <ContactCard
                title="E-posta"
                icon={Mail}
                contactInfo={
                  <a
                    href="mailto:info@bgts.com.tr"
                    className="text-blue-700 font-bold hover:underline"
                  >
                    info@bgts.com.tr
                  </a>
                }
                link="mailto:info@bgts.com.tr"
                linkText="E-posta Gönder"
                color="indigo"
                delay={0.1}
              />

              <ContactCard
                title="Telefon"
                icon={Phone}
                contactInfo={
                  <a
                    href="tel:+902123456789"
                    className="text-blue-700 font-bold hover:underline"
                  >
                    +90 212 345 67 89
                  </a>
                }
                link="tel:+902123456789"
                linkText="Ara"
                color="slate"
                delay={0.2}
              />

              <ContactCard
                title="Çalışma Saatleri"
                icon={Clock}
                contactInfo={
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-slate-800">Pazartesi - Cuma</p>
                    <p className="text-slate-600">09:00 - 18:00</p>
                    <p className="font-semibold text-slate-800 mt-2">7/24 Destek</p>
                    <p className="text-slate-600">Acil durumlar için</p>
                  </div>
                }
                color="blue"
                delay={0.3}
              />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                  Mesaj Gönderin
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                Ofislerimiz
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Türkiye ve Avrupa'daki ofislerimizle tanışın
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Istanbul Office"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">İstanbul</h3>
                <p className="text-slate-600 mb-4">Genel Merkez</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Maslak Mahallesi</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>+90 212 345 67 89</span>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border-2 border-slate-200 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-4 right-4 w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8d?auto=format&fit=crop&q=80"
                    alt="Ankara Office"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ankara</h3>
                <p className="text-slate-600 mb-4">Teknokent</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-slate-600" />
                    <span>ODTÜ Teknokent</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-slate-600" />
                    <span>+90 312 123 45 67</span>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-4 right-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1538435979614-7a761d79c473?auto=format&fit=crop&q=80"
                    alt="Amsterdam Office"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Amsterdam</h3>
                <p className="text-slate-600 mb-4">Hollanda</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                    <span>Amsterdam Centrum</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-indigo-600" />
                    <span>+31 20 123 45 67</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-24">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-200">
              <div className="grid lg:grid-cols-2">
                <div className="p-12">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                    Bizi Ziyaret Edin
                  </h3>
                  <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                    İstanbul ofisimize gelerek ekibimizle tanışabilir, projelerimiz hakkında detaylı bilgi alabilirsiniz.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Adres</h4>
                        <p className="text-slate-600">Maslak Mahallesi, Büyükdere Cad. No:123<br />34398 Şişli, İstanbul</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Telefon</h4>
                        <p className="text-slate-600">+90 212 345 67 89</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">E-posta</h4>
                        <p className="text-slate-600">info@bgts.com.tr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-full min-h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
                    alt="Map Location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end justify-center p-8">
                    <div className="text-center text-white">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold mb-2">İstanbul, Türkiye</h4>
                      <p className="text-blue-100">Genel Merkez</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
