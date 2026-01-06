"use client"

import Hero from "@/components/ui/Hero"
import Breadcrumb from "@/components/ui/Breadcrumb"
import ContactCard from "@/components/ui/ContactCard"
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

export default function ContactPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Breadcrumb
          items={[
            { label: "İletişim", href: "/contact", icon: MessageSquare }
          ]}
        />

        <Hero
          title="Bize Ulaşın"
          subtitle="Projeleriniz için bir araya gelelim veya sorularınızı yanıtlayalım."
          badge="İletişim"
          className="bg-slate-900"
          backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        />

        <Section>
          <Container>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <ContactCard
                title="Bizi Arayın"
                description="Hafta içi 09:00 - 18:00 saatleri arasında."
                icon={Phone}
                contactInfo="+90 (216) 123 45 67"
                link="tel:+902161234567"
                linkText="Hemen Ara"
                color="blue"
                delay={0}
              />
              <ContactCard
                title="E-Posta Gönderin"
                description="Projeleriniz ve teklif talepleriniz için."
                icon={Mail}
                contactInfo="info@bgts.com.tr"
                link="mailto:info@bgts.com.tr"
                linkText="E-Posta Gönder"
                color="indigo"
                delay={0.1}
              />
              <ContactCard
                title="Ofisimizi Ziyaret Edin"
                description="Kahve içmeye bekleriz."
                icon={MapPin}
                contactInfo="Teknopark İstanbul, Pendik/İstanbul"
                link="https://maps.google.com"
                linkText="Yol Tarifi Al"
                color="orange"
                delay={0.2}
              />
            </div>

            {/* Map or Form Placeholder */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 text-center">
              <Heading variant="h3" className="mb-4 text-slate-900">Bir Mesaj Bırakın</Heading>
              <Text className="max-w-2xl mx-auto mb-8">
                Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
              </Text>

              {/* Simple Form Placeholder */}
              <form className="max-w-xl mx-auto space-y-4 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Adınız Soyadınız</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Ad Soyad" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-Posta Adresiniz</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="ornek@sirket.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mesajınız</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Mesajınızı buraya yazın..."></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                  Gönder
                </button>
              </form>
            </div>
          </Container>
        </Section>
      </div>
    </>
  )
}
