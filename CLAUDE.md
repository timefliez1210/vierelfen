# Claude Code Guidelines for Vier Elfen

This document provides context for AI assistants working on this codebase.

## Project Overview

Children's party venue website. Target audience: German-speaking parents looking to book birthday parties. The tone is friendly, warm, and professional.

---

## Styling System

### Architecture

The project uses a **hybrid approach**:
1. **Global Design System** (`/src/styles/globals.css`) - CSS custom properties and base styles
2. **CSS Modules** (`*.module.css`) - Component-scoped styles

### CSS Custom Properties

All design tokens are defined in `:root`. Always use these instead of hardcoded values:

```css
/* Colors */
--color-primary: #5B8FA8;        /* Main blue */
--color-purple: #5E53A9;         /* Accent purple */
--color-rose: #E5989B;           /* Soft pink */
--color-cream: #FAF0E6;          /* Background */
--color-text: #3D3D3D;           /* Body text */

/* Spacing (use for margins, padding, gaps) */
--space-1 through --space-24     /* 0.25rem to 6rem */

/* Typography */
--font-primary: Nunito           /* Body text */
--font-display: Fredoka          /* Headings */
--text-sm through --text-5xl     /* Font sizes */

/* Border Radius */
--radius-sm through --radius-full

/* Shadows */
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl, --shadow-card

/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;
```

### Naming Conventions

CSS Modules use camelCase:
```css
.priceCard { }
.priceCard.highlighted { }
.includedGrid { }
```

### Responsive Breakpoints

Mobile-first approach with two breakpoints:
```css
/* Mobile: default */
/* Tablet: */  @media (min-width: 768px) { }
/* Desktop: */ @media (min-width: 1024px) { }
```

### Component Styling Pattern

Each component has its own `.module.css` file:
```
components/
├── Header.tsx
├── Header.module.css
├── Footer.tsx
├── Footer.module.css
```

Import and use:
```tsx
import styles from './Component.module.css';
<div className={styles.container}>
```

---

## Code Conventions

### Constants

**Never hardcode business data.** Always use constants from `/src/constants/`:

```typescript
// WRONG
<p>0176 59960500</p>
<p>330 €</p>

// CORRECT
import { CONTACT, PRICING } from '@/constants';
<p>{CONTACT.phone}</p>
<p>{PRICING.weekday.priceFormatted}</p>
```

Available constants:
- `CONTACT` - phone, email, address, business name
- `OPENING_HOURS` - operating hours
- `PRICING` - weekday/weekend prices, duration
- `CAPACITY` - max guests, children, adults
- `NAV_LINKS` - navigation items
- `FOOTER_LINKS` - footer link groups
- `ROUTES` - page paths
- `EVENT_TYPES` - form dropdown options
- `PACKAGE_INCLUDES` - what's included in packages

### Imports

Use path aliases:
```typescript
// CORRECT
import { CONTACT } from '@/constants';
import Hero from '@/components/Hero';
import '@/styles/globals.css';

// WRONG
import { CONTACT } from '../../../constants';
```

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react';
import styles from './Component.module.css';
import { CONTACT } from '@/constants';

// 2. Types (if needed)
interface Props { }

// 3. Component
export default function Component({ }: Props) {
    // State
    // Effects
    // Handlers
    // Render
}
```

### Client vs Server Components

- Default to Server Components (no directive needed)
- Add `'use client'` only when using:
  - `useState`, `useEffect`, `useRef`
  - Event handlers (`onClick`, `onChange`)
  - Browser APIs

Currently client components:
- `Header.tsx` (menu state, scroll detection)
- `ScrollToTop.tsx` (usePathname)
- `kontakt/page.tsx` (form state)

---

## Optimization Guidelines

### Images

Always use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
    src="/images/example.jpg"
    alt="Descriptive alt text"
    fill                        // or width/height
    quality={70}                // Default compression
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{ objectFit: 'cover' }}
/>
```

Image optimization rules:
- Use `quality={70}` for most images
- Always provide `sizes` prop for responsive images
- Use `priority` only for above-the-fold images (hero, logo)
- Prefer `.jpg` for photos, `.png` for graphics with transparency
- Store in `/public/images/`

### Performance

1. **Minimize client components** - Keep interactivity isolated
2. **Use CSS Modules** - Automatic code splitting per component
3. **Lazy load below-fold images** - Default Next.js behavior
4. **Preload fonts** - Already configured in `layout.tsx`

### Bundle Size

- Avoid adding large dependencies
- Current external deps: `react-datepicker`, `date-fns`
- Tree-shake imports: `import { de } from 'date-fns/locale/de'`

---

## Repository Rules

### Branch Strategy

- `main` - Production branch, deploys to Netlify
- `dev` - Development branch for work in progress
- Create feature branches from `dev` for larger changes

### Commit Messages

Use conventional commits:
```
feat: Add new feature
fix: Fix bug
refactor: Code refactoring
style: CSS/styling changes
docs: Documentation updates
chore: Maintenance tasks
```

### Before Committing

1. Run `npm run build` - Ensure no TypeScript/build errors
2. Test on mobile viewport (Chrome DevTools)
3. Verify constants are used (no hardcoded business data)

### File Organization

```
DO:
- Keep components in /src/components/
- Keep page styles with their pages (page.module.css)
- Add new constants to appropriate file in /src/constants/
- Use existing CSS variables

DON'T:
- Create new global CSS files
- Add inline styles (use CSS Modules)
- Hardcode colors, spacing, or business data
- Create unused components
```

### Forms

Contact form uses Netlify Forms:
- Form name must match in component and `__forms.html`
- Hidden `form-name` input is required
- Honeypot field for spam protection

---

## Common Tasks

### Adding a New Page

1. Create folder in `/src/app/` with `page.tsx` and `page.module.css`
2. Add metadata export for SEO
3. Use Hero component for header section
4. Add to navigation if needed (update `NAV_LINKS` constant)

### Updating Prices/Contact Info

Edit the relevant file in `/src/constants/`:
- Prices: `pricing.ts`
- Contact: `contact.ts`
- Hours: `contact.ts` (OPENING_HOURS)

Changes automatically propagate to all pages.

### Adding a New Component

1. Create `ComponentName.tsx` and `ComponentName.module.css` in `/src/components/`
2. Use CSS custom properties for styling
3. Export as default
4. Import with `@/components/ComponentName`

---

## Language

- All user-facing text is in **German**
- Code comments and documentation in **English**
- Variable names in **English**
