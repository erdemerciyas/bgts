import type { MetadataRoute } from "next"
import { getBasePath } from "@/lib/base-path"

export default function manifest(): MetadataRoute.Manifest {
  const basePath = getBasePath()

  return {
    name: "BGTS - Business & Global Technology Solutions",
    short_name: "BGTS",
    description:
      "Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı.",
    start_url: `${basePath}/tr`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: `${basePath}/icon.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${basePath}/favicon.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],
  }
}
