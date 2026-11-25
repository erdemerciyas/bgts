# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

BGTS corporate website — Next.js 16 App Router, React 19, TypeScript, Tailwind v4. Primary content language is Turkish; UI strings, code comments and commit messages are Turkish.

`README.md` is the exhaustive reference (full route table, env setup walkthroughs, feature descriptions). This file covers what is not obvious from reading a single file.

## Commands

```bash
npm run dev            # dev server on :3000
npm run build          # production build
npm run lint           # eslint
npm run test           # vitest, watch mode
npx vitest run src/lib/league/scoring.test.ts   # single test file, one shot
npm run test:coverage  # v8 coverage

npm run gmail:auth     # interactive OAuth flow → prints GMAIL_REFRESH_TOKEN
npm run db:init        # creates scholarship_applications table in Neon (reads .env.local)
```

Tests are colocated (`src/lib/**/ *.test.ts`) plus `src/components/ui/__tests__/`. Coverage is thin — only scholarship schema/labels, league scoring, and the `Hero` primitive are tested.

## Routing and i18n — read this before touching any link or page

This is the most error-prone part of the codebase. Three distinct path spaces exist:

| Space | Example | Where it lives |
|---|---|---|
| Internal / filesystem path | `/about`, `/services/software-development` | `src/app/[lang]/` folders — always English |
| Public URL | `/tr/hakkimizda`, `/tr/en/about` | what the visitor sees |
| Internal locale code | `tr`, `eng` | `[lang]` segment value; `eng` is never in a public URL |

Rules that follow from this:

- **Public English prefix is `/tr/en`, not `/en` or `/eng`.** Legacy `/en/*` and `/eng/*` 301-redirect to `/tr/en/*`.
- **Turkish URLs use Turkish slugs** and are rewritten (not redirected) to the English folder. The mapping is `ROUTE_MAP` in [src/lib/routes.ts](src/lib/routes.ts).
- **Never hardcode an href.** Use `localizedHref(locale, '/about')` or `localizedPathForLang(lang, '/contact')` from `@/lib/routes`, passing the *internal* path. `switchLocalePath` powers the language switcher.
- `dictionaryKey()` / `htmlLang()` in [src/i18n-config.ts](src/i18n-config.ts) convert `eng` → `en` for the dictionary filename and the `<html lang>` attribute.

**Adding a page** means touching several files, not just creating a folder:
1. `src/app/[lang]/<english-folder>/page.tsx`
2. `ROUTE_MAP` in `src/lib/routes.ts` (TR + ENG slugs)
3. `src/dictionaries/tr.json` and `en.json` (all visible copy)
4. `ROUTES` array in [src/app/sitemap.ts](src/app/sitemap.ts) — internal paths; it localizes them itself
5. Nav entries in `src/components/layout/header/data.ts` and the search index in `src/components/layout/search/data.ts`

Removing or renaming a page: add the old path to `TR_LEGACY_REDIRECTS`, `ENG_LEGACY_REDIRECTS` or `OBSOLETE_INTERNAL_REDIRECTS` in `src/lib/routes.ts` so the URL keeps 301-ing.

## src/proxy.ts (Next 16 middleware)

Next.js 16 renamed `middleware.ts` → `proxy.ts` with an exported `proxy()` function. [src/proxy.ts](src/proxy.ts) is the single edge entry point and does four unrelated jobs, in this order:

1. **Scholarship admin auth** — HTTP Basic (`SCHOLARSHIP_ADMIN_USER`/`_PASSWORD`, constant-time compare) guarding `/tr/burs-yonetim` and `/api/scholarship/export`; the page is rewritten from the locale-prefixed URL to the locale-less `/burs-yonetim` route.
2. **Rate limiting** — in-memory `Map` keyed by `ip:route`, POST only. Resets on restart and **does not work across instances**; limits live in `RATE_LIMITS`.
3. **`/tr/api/*` → `/api/*` rewrite** — on the live domain only `/tr/*` is routed to this app; the root is WordPress, so root `/api/*` never reaches Next. Client-side fetches therefore target `/tr/api/...`.
4. **Locale prefixing, legacy redirects, TR slug rewrites** — and it sets an `x-pathname` request header that server components read to know the real URL.

Subfolder deploys (Plesk, `NEXT_PUBLIC_BASE_PATH=/tr3`) mean raw `pathname` comparisons are wrong. Always go through `stripBasePath` / `withBasePath` / `pathnameHasLocale` / `stripLocalePrefix` in [src/lib/base-path.ts](src/lib/base-path.ts). `next/link` handles basePath on its own; manual `NextResponse.redirect/rewrite` does not.

## Content and data layers

There is no CMS — every content change is a code change and a deploy.

- `src/dictionaries/{tr,en}.json` — all UI copy, loaded server-side only via `getDictionary(lang)` in [src/get-dictionary.ts](src/get-dictionary.ts). Pages are async server components: `await props.params` → `lang` → `getDictionary`, then pass slices of `dict` down as props to client components.
- `src/data/articles.{tr,en}.ts`, `src/data/case-studies.{tr,en}.ts` — parallel per-locale files; keep ids in sync between them.
- `src/content/home.ts` — home page content object.
- `src/lib/articles.ts` — author profiles, LinkedIn URLs, and `getStableRandomAnalysesMenuArticles()` (random per page load, stable within it, then date-sorted) for the Analyses mega menu.

Persistent state exists only in two features:
- **Scholarship** — Neon serverless Postgres, single `scholarship_applications` table with a `jsonb` `data` column ([src/lib/scholarship/db.ts](src/lib/scholarship/db.ts), DDL in `scripts/scholarship-db-init.mjs`). Admin panel at `/burs-yonetim` with ExcelJS export.
- **League** — staff quiz. OTP by email, signed cookie session (`LEAGUE_SECRET`), scoring in `src/lib/league/scoring.ts`; participant progress is kept in `localStorage` (`src/lib/league/storage.ts`), not a DB. Unlisted route: no nav entry, no sitemap, `noindex`.

## API routes

`/api/chat` (edge, streaming), `/api/contact`, `/api/application`, `/api/scholarship` (+ `/export`), `/api/league/{send-code,verify,submit,question,reveal,health}`. Every input is validated with a Zod schema defined in the route or in `src/lib/*/schema.ts`; HTML in emails is escaped before interpolation.

Email goes through the **Gmail API with OAuth2** ([src/lib/email.ts](src/lib/email.ts)) — not SMTP. Sender is `GMAIL_USER`, recipient `CONTACT_EMAIL`, `Reply-To` is the form submitter.

The chat route reaches Groq (`llama-3.3-70b-versatile`) through `@ai-sdk/openai`'s `createOpenAI` pointed at Groq's OpenAI-compatible `baseURL`. The chatbot widget itself is deliberately commented out in `src/app/[lang]/layout.tsx`.

## UI conventions

[FRONTEND_STANDARDS.md](FRONTEND_STANDARDS.md) is the design-system source of truth. The non-negotiable parts:

- Compose with the primitives in `src/components/ui/` — `Section` (vertical rhythm + `background="default|glazed|dark|navy"`), `Container` (max-width + gutters), `Typography`. Don't put ad-hoc `px-*`/`py-*` on top-level wrappers, and don't use raw `h1`–`h6`/`p` where a Typography variant exists.
- Tailwind v4 only (no CSS-in-JS); corporate color tokens and the Exo/Manrope font variables are declared in `src/app/globals.css`.
- `cn()` from `@/lib/utils` for conditional classes.
- Heavy client components (mega menus, mobile nav, search overlay) are `dynamic()`-imported; keep that pattern.

Adding an external image host requires updating both `images.remotePatterns` **and** the CSP `img-src` in [next.config.ts](next.config.ts).

## Deployment notes

Production runs under a path prefix alongside WordPress (see proxy section) and can also be deployed into a Plesk subfolder — `PLESK_DEPLOY.md` and `PLESK_ENV.md` cover that. `NEXT_PUBLIC_*` variables are inlined at build time, so they must be set *before* `npm run build`. `.env.example` is the authoritative env var list.
