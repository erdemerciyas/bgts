import type { MetadataRoute } from "next"
import { getBasePath } from "@/lib/base-path"
import { SITE_URL } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  const basePath = getBasePath()

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/burs-yonetim", "/tr/burs-yonetim", "/tr/en/burs-yonetim"],
    },
    sitemap: `${SITE_URL}${basePath}/sitemap.xml`,
  }
}
