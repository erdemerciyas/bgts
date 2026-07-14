import { withBasePath } from "@/lib/base-path";
import type { Locale } from "@/i18n-config";
import { localizedHref } from "@/lib/routes";
import { SITE_URL } from "@/lib/seo";

const LEAGUE_PATH = "/league";

export function getLeagueHref(locale: Locale = "tr"): string {
  return withBasePath(localizedHref(locale, LEAGUE_PATH));
}

export function getLeagueAbsoluteUrl(locale: Locale = "tr"): string {
  return `${SITE_URL}${getLeagueHref(locale)}`;
}

/** Host + path, without protocol (e.g. bgts.com.tr/tr/league). */
export function getLeagueDisplayUrl(locale: Locale = "tr"): string {
  return getLeagueAbsoluteUrl(locale).replace(/^https?:\/\//, "");
}
