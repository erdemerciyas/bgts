import Link from "next/link"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Sayfa Bulunamadı</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300"
          >
            <Search className="w-5 h-5" />
            İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  )
}
