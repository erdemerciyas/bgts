---
name: bgts-about-values
description: Premium Değerlerimiz bölümü tasarım ve implementasyon rehberi. Hakkımızda sayfası değerler bloğu yeniden tasarımı, kurumsal bento layout veya benzeri premium values section istendiğinde kullan.
---

# BGTS About Values — Premium Design Skill

## When to Use

- Redesigning or extending the "Değerlerimiz / Our Values" block on the About page
- Building similar corporate values sections elsewhere in BGTS Web
- Reviewing values UI for brand consistency

## Design Direction

**Tone:** Refined corporate editorial — luxury/minimal, engineering-firm credibility. Avoid generic AI aesthetics (rainbow gradients, floating SVG clutter, alternating timelines).

**Layout:** Full-width header + stacked value panels (one per row). Vector geometry as background decoration only. No photographs. Never shorten dictionary copy.

**Page context:** About page flows dark hero → light values → dark LocationsMap. Values section uses `Section background="muted"` (`corporate-surface`) as a visual bridge.

## Mandatory Primitives

Always compose from shared UI primitives in `src/components/ui/`:

- `Section` + `Container` — layout shell
- `Heading` + `Text` — typography (never raw `h2`/`p`)
- `AnimatedDiv` or `motion.div` — scroll reveals

Cross-reference: [FRONTEND_STANDARDS.md](../../../FRONTEND_STANDARDS.md)

## Color Rules

- **Primary:** `corporate-dark`, `corporate-secondary` (from `globals.css` `@theme`)
- **Accent (max one):** `corporate-highlight` for watermark numbers
- **Text:** `text-text-secondary` for body copy
- **Borders:** `border-border` default, `border-corporate-secondary/40` on hover
- **Forbidden:** Rainbow color rotation (blue/violet/emerald/amber/rose per card)

## Icon Mapping

Map principles by index (Lucide React):

| Index | Value (TR) | Icon |
|-------|------------|------|
| 0 | İnsan Odaklılık | `Users` |
| 1 | Güvenilirlik | `Shield` |
| 2 | Yenilikçilik | `Lightbulb` |
| 3 | Mükemmelliyetçilik | `Award` |
| 4 | Sürdürülebilirlik | `Leaf` |

## Motion Guidelines

- Staggered `whileInView`: `delay: index * 0.08`
- Card hover: `whileHover={{ y: -4 }}`, `transition-all duration-300`
- Single subtle blur orb — no decorative SVG scatter

## i18n

Use existing `about.peopleFirst` dictionary keys:

- `badge`, `heading`, `subtitle`
- `principles[].number`, `principles[].title`, `principles[].desc`

Do not add icon keys to dictionaries — map icons in component code.

## Implementation

Component: `src/app/[lang]/about/AboutValuesSection.tsx`

```tsx
<AboutValuesSection peopleFirst={about.peopleFirst} />
```

See [reference.md](reference.md) for grid spec and [examples.md](examples.md) for code patterns.

## Checklist

- [ ] `Section` + `Container` used
- [ ] `Heading` / `Text` — no raw heading/paragraph tags
- [ ] Corporate tokens only — no rainbow gradients
- [ ] Equal-weight value cards with short, focused copy
- [ ] Vector geometric shapes in editorial column (no photos)
- [ ] Responsive: single column mobile, split sticky desktop
