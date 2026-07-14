import type { Article } from "@/data/articles.tr"
import type { Locale } from "@/i18n-config"

export const AUTHOR_AVATAR_FALLBACK = "/BGTS_logo.png"

export type AuthorProfile = {
  title: string
  department?: string
}

const AUTHOR_PROFILES: Record<string, Record<Locale, AuthorProfile>> = {
  "Alper Önsoy": {
    tr: { title: "Genel Müdür Yardımcısı", department: "Teknoloji Servisleri" },
    eng: { title: "Deputy General Manager", department: "Technology Services" },
  },
  "Erdoğan Bilici": {
    tr: { title: "Çözüm Mimarı", department: "Teknoloji Servisleri" },
    eng: { title: "Solution Architect", department: "Technology Services" },
  },
  "Sinan Demirci": {
    tr: { title: "Müşteri Başarı Yöneticisi", department: "Teknoloji Servisleri" },
    eng: { title: "Customer Success Manager", department: "Technology Services" },
  },
}

export function getAuthorProfile(author: string, lang: string): AuthorProfile | undefined {
  const locale = (lang === "eng" ? "eng" : "tr") as Locale
  return AUTHOR_PROFILES[author]?.[locale]
}

/** Local writer portraits under /public/images/articles/writer */
export const AUTHOR_AVATARS: Record<string, string> = {
  "Alper Önsoy": "/images/articles/writer/alper-onsoy.png",
  "Erdoğan Bilici": "/images/articles/writer/erdogan-bilici.png",
  "Sinan Demirci": "/images/articles/writer/sinan-dermirci.png",
}

export const ARTICLE_LINKEDIN_URLS: Record<string, string> = {
  "llm-lerden-dslm-lere-donusum":
    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7459558198862221313/",
  "malicious-server-cagi":
    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7467549004407562240/",
  "kurumlarda-yapay-zeka":
    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7475525109777346560/",
  "ai-governance-101":
    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7478014456204161024/",
  "pazarlamanin-yeni-musterisi-yapay-zeka-ajanalari":
    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7478413649469054976/",
}

export function getArticleLinkedInUrl(articleId: string): string | undefined {
  return ARTICLE_LINKEDIN_URLS[articleId]
}

export function getAuthorAvatar(author: string): string {
  return AUTHOR_AVATARS[author] ?? AUTHOR_AVATAR_FALLBACK
}

export function hasAuthorPortrait(author: string): boolean {
  return author in AUTHOR_AVATARS
}

/** Removes the leading `##` heading — the modal header already shows the article title. */
export function stripDuplicateTitleHeading(body: string, _title?: string): string {
  const lines = body.split("\n")
  const first = lines[0]?.trim() ?? ""
  if (/^##\s+/.test(first)) {
    return lines.slice(1).join("\n").trimStart()
  }
  return body
}

/** Returns the most recent articles sorted by date (newest first). */
export function getLatestArticles(articles: Article[], count = 5): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, Math.min(count, articles.length))
}

/** Picks one random article from the latest `latestCount` entries. */
export function getRandomFromLatestArticles(
  articles: Article[],
  latestCount = 5
): Article | null {
  const latest = getLatestArticles(articles, latestCount)
  if (latest.length === 0) return null
  return latest[Math.floor(Math.random() * latest.length)]
}
