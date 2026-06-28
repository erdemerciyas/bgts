# SEO & Performance

<cite>
**Referenced Files in This Document**
- [seo.ts](file://src/lib/seo.ts)
- [sitemap.ts](file://src/app/sitemap.ts)
- [StructuredData.tsx](file://src/components/seo/StructuredData.tsx)
- [middleware.ts](file://src/middleware.ts)
- [next.config.ts](file://next.config.ts)
- [i18n-config.ts](file://src/i18n-config.ts)
- [base-path.ts](file://src/lib/base-path.ts)
- [routes.ts](file://src/lib/routes.ts)
- [layout.tsx](file://src/app/[lang]/layout.tsx)
- [GoogleAnalytics.tsx](file://src/components/analytics/GoogleAnalytics.tsx)
- [package.json](file://package.json)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)

## Introduction
This document explains the SEO and performance optimization systems of the BGTS web application. It covers:
- Metadata generation with locale-aware titles and descriptions
- Structured data implementation using JSON-LD
- Dynamic sitemap generation with hreflang support
- Performance optimizations including image optimization and security headers
- Implementation details, monitoring approaches, and best practices for SEO and page speed

## Project Structure
The SEO and performance features are implemented across several modules:
- Internationalization and URL helpers
- Metadata generation in layouts
- Structured data components
- Sitemap generation
- Middleware for routing and rate limiting
- Next.js configuration for images, compression, and security headers

```mermaid
graph TB
subgraph "Internationalization"
I18N["i18n-config.ts"]
BASE["base-path.ts"]
ROUTES["routes.ts"]
end
subgraph "Metadata & SEO"
SEO_LIB["lib/seo.ts"]
LAYOUT["app/[lang]/layout.tsx"]
SD["components/seo/StructuredData.tsx"]
end
subgraph "Sitemap"
SM["app/sitemap.ts"]
end
subgraph "Middleware & Security"
MW["middleware.ts"]
NCFG["next.config.ts"]
end
I18N --> BASE
BASE --> ROUTES
ROUTES --> SEO_LIB
SEO_LIB --> LAYOUT
LAYOUT --> SD
ROUTES --> SM
SEO_LIB --> SM
NCFG --> MW
```

**Diagram sources**
- [i18n-config.ts:1-21](file://src/i18n-config.ts#L1-L21)
- [base-path.ts:1-67](file://src/lib/base-path.ts#L1-L67)
- [routes.ts:1-216](file://src/lib/routes.ts#L1-L216)
- [seo.ts:1-50](file://src/lib/seo.ts#L1-L50)
- [layout.tsx:1-139](file://src/app/[lang]/layout.tsx#L1-L139)
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)
- [sitemap.ts:1-75](file://src/app/sitemap.ts#L1-L75)
- [middleware.ts:1-153](file://src/middleware.ts#L1-L153)
- [next.config.ts:1-99](file://next.config.ts#L1-L99)

**Section sources**
- [i18n-config.ts:1-21](file://src/i18n-config.ts#L1-L21)
- [base-path.ts:1-67](file://src/lib/base-path.ts#L1-L67)
- [routes.ts:1-216](file://src/lib/routes.ts#L1-L216)
- [seo.ts:1-50](file://src/lib/seo.ts#L1-L50)
- [layout.tsx:1-139](file://src/app/[lang]/layout.tsx#L1-L139)
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)
- [sitemap.ts:1-75](file://src/app/sitemap.ts#L1-L75)
- [middleware.ts:1-153](file://src/middleware.ts#L1-L153)
- [next.config.ts:1-99](file://next.config.ts#L1-L99)

## Core Components
- Locale-aware metadata helpers: Build alternates, canonical URLs, and OpenGraph URLs for hreflang and social sharing.
- Structured data components: JSON-LD for Organization, WebSite, Breadcrumbs, SoftwareApplication, Service, LocalBusiness, FAQPage, HowTo, and VideoObject.
- Dynamic sitemap generator: Produces multilingual URLs with alternates for search engines.
- Middleware and security headers: Enforces locale routing, legacy redirects, rate limiting, and robust HTTP security policies.
- Image optimization and compression: Configured for modern formats and responsive sizes.

**Section sources**
- [seo.ts:1-50](file://src/lib/seo.ts#L1-L50)
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)
- [sitemap.ts:1-75](file://src/app/sitemap.ts#L1-L75)
- [middleware.ts:1-153](file://src/middleware.ts#L1-L153)
- [next.config.ts:1-99](file://next.config.ts#L1-L99)

## Architecture Overview
The SEO pipeline integrates internationalization, metadata generation, structured data injection, and sitemap production. Security and performance are enforced via middleware and Next.js configuration.

```mermaid
sequenceDiagram
participant Browser as "Browser"
participant Layout as "Root Layout"
participant SEO as "SEO Helpers"
participant SD as "Structured Data"
participant Sitemap as "Dynamic Sitemap"
Browser->>Layout : Request /{lang}/...
Layout->>SEO : buildAlternates(path, lang)
Layout->>SEO : buildOgUrl(path, lang)
Layout->>SD : Render JSON-LD components
Browser->>Sitemap : GET /sitemap.xml
Sitemap-->>Browser : XML with alternates
```

**Diagram sources**
- [layout.tsx:31-99](file://src/app/[lang]/layout.tsx#L31-L99)
- [seo.ts:12-49](file://src/lib/seo.ts#L12-L49)
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)
- [sitemap.ts:57-74](file://src/app/sitemap.ts#L57-L74)

## Detailed Component Analysis

### Metadata Generation and Hreflang
- Alternates and canonical URLs are built from internal paths and locale prefixes.
- OpenGraph URLs and locales are generated for proper social media previews.
- Root layout sets metadata base, titles, descriptions, keywords, robots, and icons.
- Locale-aware helpers ensure hreflang links and OG alternates reflect the current language.

```mermaid
flowchart TD
Start(["generateMetadata"]) --> GetParams["Resolve lang param"]
GetParams --> BuildAlt["buildAlternates(path, lang)"]
GetParams --> BuildOg["buildOgUrl(path, lang)"]
BuildAlt --> Meta["Populate alternates.languages"]
BuildOg --> OpenGraph["Set OG url and locale"]
Meta --> ReturnMeta["Return Metadata"]
OpenGraph --> ReturnMeta
```

**Diagram sources**
- [layout.tsx:31-99](file://src/app/[lang]/layout.tsx#L31-L99)
- [seo.ts:12-49](file://src/lib/seo.ts#L12-L49)

**Section sources**
- [layout.tsx:31-99](file://src/app/[lang]/layout.tsx#L31-L99)
- [seo.ts:12-49](file://src/lib/seo.ts#L12-L49)

### Structured Data (JSON-LD)
- Organization, WebSite, Breadcrumb, SoftwareApplication, Service, LocalBusiness, FAQPage, HowTo, and VideoObject schemas are supported.
- Components render JSON-LD scripts for search engines and rich results.
- Product and service pages inject schema-specific data using localized paths.

```mermaid
classDiagram
class OrganizationStructuredData {
+render()
}
class WebSiteStructuredData {
+render()
}
class BreadcrumbStructuredData {
+constructor(items)
+render()
}
class SoftwareApplicationStructuredData {
+constructor(name, description, url)
+render()
}
class ServiceStructuredData {
+constructor(name, description, url)
+render()
}
class LocalBusinessStructuredData {
+render()
}
class FAQPageStructuredData {
+constructor(questions)
+render()
}
class HowToStructuredData {
+constructor(name, description, steps)
+render()
}
class VideoStructuredData {
+constructor(name, description, uploadDate, thumbnailUrl, contentUrl)
+render()
}
```

**Diagram sources**
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)

**Section sources**
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)

### Dynamic Sitemap with Hreflang
- Sitemap defines static routes with priorities and change frequencies.
- For each route and locale, generates localized URLs and alternates.
- Uses helpers to compute locale-specific paths and site base URL.

```mermaid
flowchart TD
Init["Define ROUTES"] --> LoopRoutes["For each route"]
LoopRoutes --> LoopLocales["For each locale"]
LoopLocales --> MakeUrl["Compute localeUrl(locale, path)"]
MakeUrl --> Alternates["Build alternates.languages"]
Alternates --> PushEntry["Push sitemap entry"]
PushEntry --> Done["Return sitemap"]
```

**Diagram sources**
- [sitemap.ts:7-74](file://src/app/sitemap.ts#L7-L74)
- [base-path.ts:49-55](file://src/lib/base-path.ts#L49-L55)
- [routes.ts:148-153](file://src/lib/routes.ts#L148-L153)

**Section sources**
- [sitemap.ts:1-75](file://src/app/sitemap.ts#L1-L75)
- [base-path.ts:1-67](file://src/lib/base-path.ts#L1-L67)
- [routes.ts:1-216](file://src/lib/routes.ts#L1-L216)

### Middleware, Routing, and Rate Limiting
- Redirects legacy English paths to Turkish equivalents.
- Rewrites English locale paths under a consistent prefix.
- Enforces default locale for requests without a locale prefix.
- Applies rate limits for specific API endpoints.
- Skips middleware processing for static assets and Next.js internals.

```mermaid
flowchart TD
Req["Incoming Request"] --> StripBase["stripBasePath()"]
StripBase --> IsAPI["Is /api/* and POST?"]
IsAPI --> |Yes| CheckRate["Check rate limit"]
CheckRate --> |Exceeded| Block["429 Too Many Requests"]
CheckRate --> |OK| Next1["Next()"]
IsAPI --> |No| SkipAPI["Skip locale checks"]
SkipAPI --> Static["Static asset or Next internal?"]
Static --> |Yes| Next2["Next()"]
Static --> |No| Legacy["Legacy /en/ or /eng/?"]
Legacy --> |Yes| Redirect301["301 to /tr/en..."]
Legacy --> |No| HasLocale["Has /tr or /tr/en?"]
HasLocale --> |No| DefaultLocale["Redirect to default locale"]
HasLocale --> |Yes| Obsolete["Obsolete redirect?"]
Obsolete --> |Yes| Redirect301B["301 to new path"]
Obsolete --> |No| EngPath["Is locale 'eng'?"]
EngPath --> |Yes| RewriteEng["Rewrite to /eng..."]
EngPath --> |No| TrPath["Is locale 'tr'?"]
TrPath --> |Yes| TrRewrite["Apply legacy/tr rewrites"]
TrRewrite --> Next3["Next()"]
DefaultLocale --> Next3
Redirect301 --> End
Redirect301B --> End
RewriteEng --> End
Block --> End
Next1 --> End
Next2 --> End
Next3 --> End
```

**Diagram sources**
- [middleware.ts:51-146](file://src/middleware.ts#L51-L146)
- [base-path.ts:10-49](file://src/lib/base-path.ts#L10-L49)
- [routes.ts:193-215](file://src/lib/routes.ts#L193-L215)

**Section sources**
- [middleware.ts:1-153](file://src/middleware.ts#L1-153)
- [base-path.ts:1-67](file://src/lib/base-path.ts#L1-L67)
- [routes.ts:1-216](file://src/lib/routes.ts#L1-L216)

### Security Headers and Performance Optimizations
- Images: Remote patterns for approved hosts, WebP/AVIF formats, and responsive sizes/devices.
- Compression: Gzip-like compression enabled.
- Security headers: Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Content-Security-Policy, Permissions-Policy, DNS prefetch control.
- Vary header for Accept-Encoding to optimize caching.
- Logo and favicon served with long-lived immutable cache headers.

```mermaid
graph LR
NCFG["next.config.ts"] --> IMG["Images config"]
NCFG --> HDR["headers()"]
HDR --> CSP["Content-Security-Policy"]
HDR --> HSTS["Strict-Transport-Security"]
HDR --> XFO["X-Frame-Options"]
HDR --> XCTO["X-Content-Type-Options"]
HDR --> RP["Referrer-Policy"]
HDR --> PP["Permissions-Policy"]
HDR --> DNS["X-DNS-Prefetch-Control"]
HDR --> VARY["Vary: Accept-Encoding"]
NCFG --> CACHE["Logo/Favicon cache headers"]
```

**Diagram sources**
- [next.config.ts:7-95](file://next.config.ts#L7-L95)

**Section sources**
- [next.config.ts:1-99](file://next.config.ts#L1-L99)

## Dependency Analysis
The SEO and performance systems depend on:
- Internationalization configuration and URL helpers
- Route mapping for localized paths
- Metadata generation in layouts
- Structured data components
- Sitemap generation
- Middleware for routing and security
- Next.js configuration for images and headers

```mermaid
graph TB
I18N["i18n-config.ts"] --> BASE["base-path.ts"]
BASE --> ROUTES["routes.ts"]
ROUTES --> SEO["lib/seo.ts"]
SEO --> LAYOUT["app/[lang]/layout.tsx"]
ROUTES --> SITEMAP["app/sitemap.ts"]
SEO --> SITEMAP
LAYOUT --> SD["components/seo/StructuredData.tsx"]
NCONF["next.config.ts"] --> IMG["Images & Headers"]
MW["middleware.ts"] --> BASE
MW --> ROUTES
```

**Diagram sources**
- [i18n-config.ts:1-21](file://src/i18n-config.ts#L1-L21)
- [base-path.ts:1-67](file://src/lib/base-path.ts#L1-L67)
- [routes.ts:1-216](file://src/lib/routes.ts#L1-L216)
- [seo.ts:1-50](file://src/lib/seo.ts#L1-L50)
- [layout.tsx:1-139](file://src/app/[lang]/layout.tsx#L1-L139)
- [sitemap.ts:1-75](file://src/app/sitemap.ts#L1-L75)
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)
- [next.config.ts:1-99](file://next.config.ts#L1-L99)
- [middleware.ts:1-153](file://src/middleware.ts#L1-L153)

**Section sources**
- [i18n-config.ts:1-21](file://src/i18n-config.ts#L1-L21)
- [base-path.ts:1-67](file://src/lib/base-path.ts#L1-L67)
- [routes.ts:1-216](file://src/lib/routes.ts#L1-L216)
- [seo.ts:1-50](file://src/lib/seo.ts#L1-L50)
- [layout.tsx:1-139](file://src/app/[lang]/layout.tsx#L1-L139)
- [sitemap.ts:1-75](file://src/app/sitemap.ts#L1-L75)
- [StructuredData.tsx:1-304](file://src/components/seo/StructuredData.tsx#L1-L304)
- [next.config.ts:1-99](file://next.config.ts#L1-L99)
- [middleware.ts:1-153](file://src/middleware.ts#L1-L153)

## Performance Considerations
- Image optimization
  - Enable automatic format selection (WebP/AVIF) and responsive sizes.
  - Use Next.js Image component for optimized delivery.
  - Configure remote patterns for external images.
- Compression
  - Enable compression to reduce payload sizes.
- Security headers
  - Apply CSP, HSTS, XFO, XCTO, Referrer-Policy, and Permissions-Policy to harden the application and improve trust signals.
- Middleware filtering
  - Exclude static assets and Next.js internals from middleware to minimize overhead.
- Analytics strategy
  - Load analytics after consent to respect privacy and reduce initial payload.
- Monitoring
  - Track page views and events via Google Analytics with consent gating.
  - Use Lighthouse and PageSpeed Insights regularly to measure improvements.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
- Canonical and hreflang issues
  - Verify that internal paths passed to alternates helpers do not include locale prefixes.
  - Ensure locale prefixes and localized paths are computed consistently.
- Sitemap generation
  - Confirm that ROUTES include all relevant paths and that alternates.languages are populated for each locale.
- Middleware redirection loops
  - Check legacy redirect and rewrite mappings for cycles.
  - Validate locale stripping and prefix resolution.
- Security headers
  - Review CSP directives for analytics, fonts, videos, and external domains used.
  - Ensure Vary header aligns with caching strategy.
- Analytics
  - Confirm consent state updates trigger script loading.
  - Verify measurement ID environment variable is configured.

**Section sources**
- [seo.ts:12-49](file://src/lib/seo.ts#L12-L49)
- [sitemap.ts:57-74](file://src/app/sitemap.ts#L57-L74)
- [middleware.ts:51-146](file://src/middleware.ts#L51-L146)
- [next.config.ts:28-95](file://next.config.ts#L28-L95)
- [GoogleAnalytics.tsx:20-68](file://src/components/analytics/GoogleAnalytics.tsx#L20-L68)

## Conclusion
BGTS implements a robust, locale-aware SEO and performance stack:
- Metadata and structured data are generated dynamically with hreflang support.
- A comprehensive sitemap ensures search engine coverage across locales.
- Middleware and security headers enforce routing correctness and strong security posture.
- Next.js configuration optimizes images and reduces payload sizes.
Adhering to the best practices outlined here will help maintain strong SEO rankings and excellent page speed scores.