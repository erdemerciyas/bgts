# Frontend & UI/UX Standards (Skill File)

This document serves as the "Skill File" and central source of truth for Frontend architecture and UI/UX standards for the BGTS Web project. All new development should strictly adhere to these guidelines to ensure consistency, maintainability, and premium design quality aligned with the **BGTS Corporate Identity**.

## 1. Core Architecture Principles

### "No Ad-hoc Styles" Policy
-   **Avoid** manual padding/margin on top-level elements (e.g., `div className="px-4 py-8"`).
-   **Always Use** the shared primitives: `Section` for vertical layout and `Container` for horizontal constraints.

### The "Primitive First" Approach
Before building a custom component, check if it can be composed using existing UI primitives. Only build custom if the primitives are insufficient.

---

## 2. Core UI Primitives

These components are the building blocks of the entire application. Find them in `src/components/ui/`.

### Container (`Container.tsx`)
**Purpose:** Enforces consistent max-width and horizontal padding across all viewport sizes.
**Usage:**
```tsx
import { Container } from "@/components/ui/Container"

<Container>
  {/* Your content here */}
</Container>
```
**Standard props:**
-   `className`: For occasional overrides (use sparingly).

### Section (`Section.tsx`)
**Purpose:** Enforces consistent vertical spacing (`py-16 md:py-24`) and background handling.
**Usage:**
```tsx
import { Section } from "@/components/ui/Section"

<Section background="default"> {/* options: default, glazed, dark, navy */}
  <Container>
    {/* Content */}
  </Container>
</Section>
```
**Standard props:**
-   `background`:
    -   `default`: White (`#FFFFFF`)
    -   `glazed`: Light Blue-Gray (`#E0ECF4` - Extracted from Corporate Site)
    -   `dark`: Dark Navy (`#0B0F25`)
    -   `navy`: Deepest Navy/Black (`#05081A`)
-   `className`: For specific padding adjustments if absolutely necessary.

### Typography (`Typography.tsx`)
**Purpose:** Standardizes font sizes, weights, and line heights using the **Exo** typeface. **Do not use raw `h1`-`h6` or `p` tags directly.**

**Font Family:**
-   All text should use **'Exo', sans-serif**.

**Usage:**
```tsx
import { Heading, Text } from "@/components/ui/Typography"

{/* Headings */}
<Heading variant="h1">Page Title</Heading> {/* 56px, Weight 400 */}
<Heading variant="h2" className="text-corporate-blue">Section Title</Heading> {/* 42px, Weight 400 */}

{/* Text */}
<Text variant="lead">Introduction text...</Text>
<Text variant="default">Standard body text...</Text> {/* 18px, Weight 700 (High readability) */}
<Text variant="small" className="text-slate-500">Metadata / Labels</Text>
```

---

## 3. UI/UX & Design Guidelines

### Corporate Color Palette (Extracted from Live Site)
-   **Primary Corporate Blue:** `#0070BA` (`bg-blue-600` / `text-blue-600` in Tailwind map). Used for highlights, "Sonuç Odaklı" emphases.
-   **Action Blue:** `#1863DC` (`bg-indigo-600`). Used for primary buttons and interactive states.
-   **Corporate Dark:** `#404567`. Used for primary headings and major UI elements.
-   **Deep Navy:** `#05081A` & `#0B0F25`. Used for footer and dark section backgrounds.
-   **Body Text:** `#212121`. Near-black for maximum contrast.
-   **Backgrounds:** `#E0ECF4`. Soft glacial blue for alternating sections.

### Buttons & Radius
-   **Shape:** **Pill / Stadium** (`rounded-full` or `25px`).
-   **Style:** Flat with distinct shadow on hover.
-   **Padding:** Elongated (`px-8 py-3`).
-   **Glassmorphism:** Used in header buttons (`bg-white/20 backdrop-blur`).

### Spacing
-   **Vertical Rhythm:** Use the `Section` component.
-   **Component Spacing:** Use `gap-6` or `gap-8` in Grids.
-   **Border Radius on Cards:** Sharp or Minimal. Unlike buttons, cards should be professional and structured (`rounded-none` or `rounded-sm`).

### Shadows & Depth
-   **Cards:** Use `shadow-sm` for default state, `shadow-lg` for hover states.
-   **Transitions:** Always add `transition-all duration-300` to interactive elements.

---

## 4. Development Workflow

1.  **New Page:**
    -   Start with `import { Section, Container } from "@/components/ui/..."`
    -   Define the page structure using these blocks.
2.  **New Component:**
    -   Define props interface clearly.
    -   Use `cn()` for class merging.
    -   Use `Typography` components internally.
3.  **Refactoring:**
    -   Identify `div`s acting as containers and replace with `<Container>`.
    -   Identify `section` tags and replace with `<Section>`.
    -   Identify raw `h*` and `p` tags and replace with `<Heading>` and `<Text>`.

---

## 5. Animation (Motion) guidelines

-   Use `framer-motion` for complex interactions.
-   **Standard Fade:** `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`.
-   **Hover:** `whileHover={{ y: -5 }}` for cards to encourage interactivity.

---
**This document is now aligned with the live BGTS Corporate Identity (bgts.com/tr/).**
