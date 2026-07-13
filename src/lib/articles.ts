import type { Article } from "@/data/articles.tr"

export const AUTHOR_AVATAR_FALLBACK = "/BGTS_logo.png"

/** Local writer portraits under /public/images/articles/writer */
export const AUTHOR_AVATARS: Record<string, string> = {
  "Alper Önsoy": "/images/articles/writer/alper-onsoy.png",
  "Erdoğan Bilici": "/images/articles/writer/erdogan-bilici.png",
  "Sinan Demirci": "/images/articles/writer/sinan-dermirci.png",
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
