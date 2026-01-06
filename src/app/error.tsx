"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg w-full text-center">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Bir Hata Oluştu</h1>
        <p className="text-lg text-slate-600 mb-8">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            <RefreshCw className="w-5 h-5" />
            Sayfayı Yenile
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
        {error.digest && (
          <p className="mt-6 text-sm text-slate-500">
            Hata Kodu: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
