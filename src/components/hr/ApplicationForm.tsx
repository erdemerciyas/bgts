"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Check, Loader2, Upload, User, Mail, Phone, GraduationCap, Building2, Calendar, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type FormData = {
    fullName: string
    email: string
    phone: string
    university: string
    department: string
    grade: string
    cv: FileList
    message: string
}

export default function ApplicationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSuccess(true)
        reset()
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 relative overflow-hidden">
            {/* Success Overlay */}
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Başvurunuz Alındı!</h3>
                        <p className="text-slate-600">
                            İlgilendiğiniz için teşekkür ederiz. Başvurunuz değerlendirildikten sonra sizinle iletişime geçeceğiz.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Hemen Başvur</h3>
                <p className="text-slate-500">
                    Formu doldurarak Genç Mühendis Programı'na ilk adımını at.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400" /> Ad Soyad
                        </label>
                        <input
                            {...register("fullName", { required: true })}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none",
                                errors.fullName && "border-red-300 ring-red-100"
                            )}
                            placeholder="Adınız Soyadınız"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-slate-400" /> E-posta
                        </label>
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            type="email"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none",
                                errors.email && "border-red-300 ring-red-100"
                            )}
                            placeholder="ornek@email.com"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-slate-400" /> Telefon
                        </label>
                        <input
                            {...register("phone", { required: true })}
                            type="tel"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none",
                                errors.phone && "border-red-300 ring-red-100"
                            )}
                            placeholder="0555 555 55 55"
                        />
                    </div>

                    {/* University */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-slate-400" /> Üniversite
                        </label>
                        <input
                            {...register("university", { required: true })}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none",
                                errors.university && "border-red-300 ring-red-100"
                            )}
                            placeholder="Üniversite Adı"
                        />
                    </div>

                    {/* Department */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-slate-400" /> Bölüm
                        </label>
                        <input
                            {...register("department", { required: true })}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none",
                                errors.department && "border-red-300 ring-red-100"
                            )}
                            placeholder="Bölümünüz"
                        />
                    </div>

                    {/* Grade */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-400" /> Sınıf
                        </label>
                        <select
                            {...register("grade", { required: true })}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none appearance-none",
                                errors.grade && "border-red-300 ring-red-100"
                            )}
                        >
                            <option value="">Seçiniz</option>
                            <option value="3">3. Sınıf</option>
                            <option value="4">4. Sınıf</option>
                            <option value="graduate">Yeni Mezun</option>
                            <option value="master">Yüksek Lisans</option>
                        </select>
                    </div>
                </div>

                {/* CV Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400" /> CV Yükle
                    </label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                        <input
                            {...register("cv", { required: true })}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center gap-2 pointer-events-none">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                                <Upload className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-slate-700">Dosya seçmek için tıklayın veya sürükleyin</p>
                            <p className="text-xs text-slate-500">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                    </div>
                    {errors.cv && <span className="text-xs text-red-500">Lütfen güncel CV'nizi yükleyin.</span>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400" /> Kısa Notunuz
                    </label>
                    <textarea
                        {...register("message")}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none min-h-[100px]"
                        placeholder="Eklemek istedikleriniz..."
                    />
                </div>

                <button
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Gönderiliyor...
                        </>
                    ) : (
                        "Başvuruyu Tamamla"
                    )}
                </button>
            </form>
        </div>
    )
}
