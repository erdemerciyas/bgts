# BGTS About Values — Reference

## Corporate Color Tokens

From `src/app/globals.css` `@theme`:

| Token | Hex | Tailwind class |
|-------|-----|----------------|
| corporate-dark | `#0A1628` | `text-corporate-dark`, `bg-corporate-dark` |
| corporate-secondary | `#1E5A8A` | `text-corporate-secondary`, `bg-corporate-secondary` |
| corporate-accent | `#3A7CB5` | `text-corporate-accent` |
| corporate-highlight | `#D4A853` | `text-corporate-highlight` |
| corporate-surface | `#F7F9FC` | `bg-corporate-surface` (via `Section background="muted"`) |
| text-secondary | `#5A6B7C` | `text-text-secondary` |
| border | `#E2E8F0` | `border-border` |

## Bento Grid Spec

### Desktop (`lg+`)

```
┌─────────────────────┬──────────────────────────────────┐
│  STICKY COLUMN      │  BENTO GRID (2 cols)             │
│  (2fr)              │  (3fr)                           │
│                     │                                  │
│  [badge]            │  ┌────────────────────────────┐  │
│  [heading]          │  │ 01 — hero card (col-span-2)│  │
│  [subtitle]         │  └────────────────────────────┘  │
│  [geometry SVG]     │  ┌──────────┐  ┌──────────┐     │
│                     │  │ 02       │  │ 03       │     │
│                     │  └──────────┘  └──────────┘     │
│                     │  ┌──────────┐  ┌──────────┐     │
│                     │  │ 04       │  │ 05       │     │
│                     │  └──────────┘  └──────────┘     │
└─────────────────────┴──────────────────────────────────┘
```

- Outer grid: `lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16`
- Sticky column: `lg:sticky lg:top-24 lg:self-start`
- Inner bento: `grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5`

### Card spans

| Index | `col-span` | Padding |
|-------|------------|---------|
| 0–3 | `col-span-1` | `p-5 sm:p-6` |
| 4 (last) | `sm:col-span-2 sm:max-w-md sm:mx-auto` | `p-5 sm:p-6` |

## Card Anatomy

```
┌─────────────────────────────────────┐
│  01 (watermark, top-right, /20)     │
│  [icon]  Title                      │
│          Description text...        │
└─────────────────────────────────────┘
```

- Watermark: `text-5xl sm:text-6xl font-black text-corporate-highlight/20`
- Icon container: `w-10 h-10 rounded-sm bg-corporate-secondary/10`
- Icon color: `text-corporate-secondary`
- Card: `rounded-sm border border-border bg-white`
- Hover: `hover:border-corporate-secondary/40 hover:shadow-lg`

## Decorative Assets

- Editorial column: inline SVG geometric composition (`ValuesGeometry`)
- Shapes: concentric circles, hexagon, diamond, corner squares, accent nodes
- Colors: `corporate-secondary` (#1E5A8A), `corporate-highlight` (#D4A853) at low opacity
- No photographs in this section

## TypeScript Interface

```ts
type Principle = {
  number: string
  title: string
  desc: string
}

type PeopleFirstDict = {
  badge: string
  heading: string
  subtitle: string
  principles: Principle[]
}
```
