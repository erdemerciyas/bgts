import { Loader2 } from "lucide-react"

export function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-slate-600">Yükleniyor...</p>
      </div>
    </div>
  )
}

export function CardLoader() {
  return (
    <div className="animate-pulse bg-slate-100 rounded-2xl h-64 w-full" />
  )
}

export function TextLoader({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-slate-200 rounded h-4"
          style={{ width: `${(60 + (i * 13) % 40)}%` }}
        />
      ))}
    </div>
  )
}
