"use client"

import Hero from "@/components/ui/Hero"
import ContactCard from "@/components/ui/ContactCard"
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, consent: true }),
      });

      if (!response.ok) throw new Error("Hata oluştu");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }
  return (
    <>
      <div className="bg-white min-h-screen">

        <Hero
          title="Bize Ulaşın"
          subtitle="Projeleriniz için bir araya gelelim veya sorularınızı yanıtlayalım."

          className="bg-slate-900"
          backgroundImage="/images/headers/teknoloji-servisleri-genel.jpg"
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

            {/* Contact Form & Image Section */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
              <div className="grid lg:grid-cols-2">
                {/* Form Side */}
                <div className="p-8 md:p-12 lg:p-16">
                  <Heading variant="h3" className="mb-4 text-slate-900">Bir Mesaj Bırakın</Heading>
                  <Text className="mb-8 text-slate-600">
                    Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
                  </Text>

                  {status === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
                      Mesajınız başarıyla gönderildi. Size en kısa sürede dönüş yapacağız.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
                      Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Adınız Soyadınız</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                        placeholder="Ad Soyad"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-Posta Adresiniz</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                        placeholder="ornek@sirket.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mesajınız</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        "Gönder"
                      )}
                    </button>
                  </form>
                </div>

                {/* Image Side */}
                <div className="relative min-h-[400px] lg:min-h-full">
                  <Image
                    src="/images/culture/culture-2.jpg"
                    alt="Contact Us"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  )
}
