import type { Metadata } from "next"
import NotFoundClient from "./NotFoundClient"

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <NotFoundClient />
}
