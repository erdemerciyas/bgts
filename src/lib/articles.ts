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

/** Shuffles articles and returns one featured + side list without duplicates. */
export function getRandomAnalysesMenuArticles(
  articles: Article[],
  sideCount = 3
): { featured: Article | null; side: Article[] } {
  const pool = [...articles]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return {
    featured: pool[0] ?? null,
    side: pool.slice(1, 1 + sideCount),
  }
}

type AnalysesMenuSelection = {
  featured: Article | null
  side: Article[]
}

/** Page-load cache: stable across mega-menu remounts/hovers, resets on full refresh. */
let analysesMenuSelectionCache: {
  key: string
  selection: AnalysesMenuSelection
} | null = null

/**
 * Random analyses for the nav mega menu.
 * Selection is fixed for the current page load; a full refresh picks a new set.
 */
export function getStableRandomAnalysesMenuArticles(
  articles: Article[],
  lang: string,
  sideCount = 3
): AnalysesMenuSelection {
  const key = `${lang}:${sideCount}:${articles.map((a) => a.id).join(",")}`
  if (analysesMenuSelectionCache?.key === key) {
    return analysesMenuSelectionCache.selection
  }
  const selection = getRandomAnalysesMenuArticles(articles, sideCount)
  analysesMenuSelectionCache = { key, selection }
  return selection
}

export function formatArticleDate(
  date: string,
  lang: string,
  style: "short" | "long" = "long"
): string {
  const options: Intl.DateTimeFormatOptions =
    style === "short"
      ? { year: "numeric", month: "short", day: "numeric" }
      : { year: "numeric", month: "long", day: "numeric" }
  return new Date(date).toLocaleDateString(
    lang === "eng" ? "en-US" : "tr-TR",
    options
  )
}
