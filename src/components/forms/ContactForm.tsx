"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"

type ContactFormDict = {
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
}

function createContactSchema(dict: ContactFormDict) {
  return z.object({
    name: z.string().min(2, dict.validation.nameRequired),
    email: z.string().email(dict.validation.emailInvalid),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(10, dict.validation.messageMin),
    consent: z.boolean().refine((val) => val === true, dict.validation.consentRequired),
  })
}

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>

export function ContactForm({ dict }: { dict: ContactFormDict }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactSchema = createContactSchema(dict)
  const d = dict.form

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error');
      }

      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 font-heading">{d.heading}</h2>
          <p className="text-slate-600">
            {d.subheading}
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900">{dict.success.title}</h3>
              <p className="text-sm text-green-700">{dict.success.body}</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">{dict.error.title}</h3>
              <p className="text-sm text-red-700">{dict.error.body}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                {d.name} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-slate-900 ${errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                    }`}
                  placeholder={d.namePlaceholder}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
              </div>
              {errors.name && (
                <p id="name-error" className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                {d.email} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-slate-900 ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                    }`}
                  placeholder={d.emailPlaceholder}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                {d.company}
              </label>
              <input
                id="company"
                type="text"
                {...register('company')}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                placeholder={d.companyPlaceholder}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                {d.phone}
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                placeholder={d.phonePlaceholder}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
              {d.message} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <textarea
                id="message"
                {...register('message')}
                rows={5}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none text-slate-900 ${errors.message ? 'border-red-300 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                  }`}
                placeholder={d.messagePlaceholder}
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
            </div>
            {errors.message && (
              <p id="message-error" className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('consent')}
                className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                disabled={isSubmitting}
              />
              <span className="text-sm text-slate-600">
                {d.consent.split(d.consentBold).map((part, i, arr) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<span className="font-semibold text-slate-900">{d.consentBold}</span></span>
                    : <span key={i}>{part}</span>
                )}
                {" "}<span className="text-red-500">*</span>
              </span>
            </label>
            {errors.consent && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.consent.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-blue-600/20"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {d.submitting}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {d.submit}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
