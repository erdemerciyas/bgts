import type { Article } from "@/data/articles.tr"

export const AUTHOR_AVATAR_FALLBACK = "/BGTS_logo.png"

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
