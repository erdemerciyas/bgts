# BGTS About Values — Examples

## Section Shell

```tsx
<Section background="muted" className="overflow-hidden relative">
  <div className="absolute top-1/4 -left-32 w-96 h-96 bg-corporate-secondary/10 rounded-full blur-[120px] pointer-events-none" />
  <Container className="relative z-10">
    {/* content */}
  </Container>
</Section>
```

## Badge Pill

```tsx
<Text variant="eyebrow" className="inline-block mb-4 px-4 py-1.5 border border-corporate-secondary/30 rounded-full">
  {peopleFirst.badge}
</Text>
```

## Bento Card (motion)

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-40px" }}
  transition={{ duration: 0.5, delay: index * 0.08 }}
  whileHover={{ y: -4 }}
  className={cn(
    "group relative rounded-sm border border-border bg-white transition-all duration-300",
    "hover:border-corporate-secondary/40 hover:shadow-lg",
    isHero ? "sm:col-span-2 p-6 sm:p-8" : "p-5 sm:p-6"
  )}
>
  <span className="absolute top-3 right-4 text-5xl font-black text-corporate-highlight/20 select-none pointer-events-none">
    {principle.number}
  </span>
  <div className="flex items-start gap-4">
    <div className="shrink-0 w-10 h-10 rounded-sm bg-corporate-secondary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-corporate-secondary" />
    </div>
    <div className="flex-1 min-w-0">
      <Heading variant="h4" className="mb-2">{principle.title}</Heading>
      <Text variant="small" className="!text-text-secondary !leading-relaxed">{principle.desc}</Text>
    </div>
  </div>
</motion.div>
```

## Editorial Geometry (no photo)

```tsx
function ValuesGeometry() {
  return (
    <div className="relative mt-8 w-full max-w-sm aspect-square hidden sm:block" aria-hidden="true">
      <svg viewBox="0 0 320 320" className="w-full h-full" fill="none">
        <circle cx="160" cy="160" r="140" stroke="#1E5A8A" strokeOpacity="0.12" strokeWidth="1.5" />
        <polygon points="160,48 248,99 248,201 160,252 72,201 72,99" stroke="#1E5A8A" strokeOpacity="0.2" fill="#1E5A8A" fillOpacity="0.04" />
        <polygon points="160,110 198,160 160,210 122,160" stroke="#D4A853" strokeOpacity="0.35" fill="#D4A853" fillOpacity="0.08" />
      </svg>
    </div>
  )
}
```

## Page Integration

```tsx
// page.tsx (server component)
import { AboutValuesSection } from "./AboutValuesSection"

<AboutValuesSection peopleFirst={about.peopleFirst} />
```
