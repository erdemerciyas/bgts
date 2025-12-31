# Background Color Fix Plan for Subpages

## Problem Summary

All subpages (About, Contact, Services, Industries, HR) display with a dark body background instead of white, making them look poor. This is caused by the dark mode media query in `globals.css` that sets `--background: #020617` when the system prefers dark color scheme.

## Root Cause

**File:** `src/app/globals.css` (lines 30-35)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #020617;  /* Dark slate color */
    --foreground: #f8fafc;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

The homepage looks fine because it has explicit white background sections, but subpages don't have explicit background colors on their main content areas, so they inherit the dark background.

## Affected Pages

All subpages need fixes:
1. `/about` - Hakkımızda
2. `/contact` - İletişim
3. `/services` - Hizmetler (main)
4. `/services/devops` - DevOps
5. `/services/managed-services` - Yönetilen Hizmetler
6. `/services/software-development` - Yazılım Geliştirme
7. `/industries/banking` - Bankacılık & Finans
8. `/industries/defense` - Savunma Sanayi
9. `/industries/retail-telecom` - Perakende & Telekom
10. `/hr` - Kariyer

## Solution Strategy

### Approach 1: Fix CSS Variables (Recommended)

**Pros:**
- Single point of change
- Ensures consistency across all pages
- Maintains the design system
- Future-proof

**Cons:**
- Removes dark mode support (if desired)

**Implementation:**

1. **Modify `src/app/globals.css`:**
   - Remove or comment out the dark mode media query
   - Keep light mode as the default for all pages
   - Ensure white background is always used

2. **Update `src/app/layout.tsx`:**
   - The body already has `bg-white` class (line 68)
   - Ensure this overrides any CSS variable conflicts

### Approach 2: Add Explicit Backgrounds to Each Page

**Pros:**
- More granular control
- Can have different backgrounds per page if needed

**Cons:**
- Requires changes to 10+ files
- More maintenance overhead
- Risk of inconsistency

## Recommended Implementation (Approach 1)

### Step 1: Fix globals.css

**File:** `src/app/globals.css`

**Changes:**
```css
/* Remove or comment out the dark mode media query */
/*
@media (prefers-color-scheme: dark) {
  :root {
    --background: #020617;
    --foreground: #f8fafc;
  }
}
*/

/* Or modify it to use light colors even in dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #ffffff;  /* Force white background */
    --foreground: #0f172a;
  }
}
```

### Step 2: Verify layout.tsx

**File:** `src/app/layout.tsx` (line 68)

The body already has:
```tsx
<body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-800 bg-white`}>
```

This is correct and should work with the CSS fix.

### Step 3: Test All Pages

After implementing the fix, verify all subpages display with white backgrounds:
- About page
- Contact page
- Services pages (main + 3 subpages)
- Industries pages (3 subpages)
- HR page

## Alternative: Page-Specific Backgrounds

If different pages need different background colors (as suggested in the redesign plan), we can add page-specific background classes:

### Example for About Page:
```tsx
// In src/app/about/page.tsx
<div className="min-h-screen bg-white">
  {/* page content */}
</div>
```

### Example for Defense Page (which intentionally uses dark theme):
```tsx
// In src/app/industries/defense/page.tsx
<div className="min-h-screen bg-slate-900 text-white">
  {/* page content */}
</div>
```

## Implementation Order

1. **Fix globals.css** - Remove dark mode media query or modify it
2. **Verify layout.tsx** - Ensure body has bg-white class
3. **Test all pages** - Confirm white backgrounds display correctly
4. **Optional:** Add page-specific background wrappers if needed

## Expected Outcome

After implementation:
- ✅ All subpages display with white/light backgrounds
- ✅ Text remains readable (slate-800 for light backgrounds)
- ✅ Hero sections retain their gradient backgrounds
- ✅ Content sections are clearly visible
- ✅ Consistent visual design across the site

## Notes

- The Defense page intentionally uses dark theme (slate-800/900) for its content sections
- This is appropriate for the defense industry aesthetic
- Other pages should use white/light backgrounds
- The fix ensures system dark mode preference doesn't override the intended design
