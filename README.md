# Vier Elfen Kinderlounge

Website for Vier Elfen Kinderlounge - a children's party venue in Hildesheim, Germany specializing in birthday parties, baby showers, christenings, and themed celebrations.

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** CSS Modules + Global Design System
- **Fonts:** Nunito (body) + Fredoka (display)
- **Deployment:** Netlify (with form support)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── kindergeburtstage/  # Pricing & packages
│   ├── ablauf/             # Rules & process
│   ├── kontakt/            # Contact form (Netlify Forms)
│   ├── faq/                # Frequently asked questions
│   ├── datenschutz/        # Privacy policy
│   └── impressum/          # Legal notice
│
├── components/             # Reusable components
│   ├── Header.tsx          # Navigation + mobile menu + floating help button
│   ├── Footer.tsx          # Site footer with contact info
│   ├── Hero.tsx            # Flexible hero component for all pages
│   └── ScrollToTop.tsx     # Scroll restoration on route change
│
├── constants/              # Centralized data
│   ├── contact.ts          # Phone, email, address, hours
│   ├── navigation.ts       # Nav links, routes
│   ├── pricing.ts          # Prices, capacity, packages
│   └── index.ts            # Re-exports all constants
│
└── styles/
    └── globals.css         # Design system & global styles
```

## Key Features

- **Responsive Design:** Mobile-first with breakpoints at 768px and 1024px
- **Floating Help Button:** Mobile-only quick access to FAQ and phone
- **Contact Form:** Netlify Forms integration with date picker
- **SEO Optimized:** Metadata on all pages
- **Performance:** Next.js Image optimization, font preloading

## Constants

All business data is centralized in `/src/constants/`:

```typescript
import { CONTACT, PRICING, CAPACITY } from '@/constants';

// Use throughout the app
CONTACT.phone      // "0176 59960500"
PRICING.weekday    // { label: "...", price: 330, priceFormatted: "330 €" }
CAPACITY.total     // 30
```

This ensures single-source-of-truth for data like prices, contact info, and capacity limits.

## Deployment

The site is configured for Netlify deployment:

- Forms are handled by Netlify Forms (see `__forms.html`)
- Static export with `output: 'export'` in `next.config.ts`
- Push to `main` branch to deploy

## License

Private project - All rights reserved.
