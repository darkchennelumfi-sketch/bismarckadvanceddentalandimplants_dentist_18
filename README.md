# Bismarck Advanced Dental & Implants

A modern redesign of the Bismarck Advanced Dental & Implants website, built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Motion, and Radix UI.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

Type checking and linting:

```bash
npx tsc --noEmit
npm run lint
```

## Routes

- `/` — home
- `/implants` and `/implants/[slug]` — implant treatments
- `/dental-services` and `/dental-services/[slug]` — general dentistry
- `/about`
- `/doctors/[slug]` — Dr. Derik Hoerner and Dr. Christopher Klym
- `/testimonials`
- `/blog` — article cards link to the original journal articles
- `/financial` — financing, insurance, and the Dental Savings Plan
- `/contact`
- `/api/contact` — appointment request endpoint
- `/sitemap.xml`, `/robots.txt`

## Content

Business details, navigation, reviews, services, plans, and doctors are centralized in `src/data/`:

- `site.ts` — address, phone, fax, email, hours, socials, payment and form links
- `services.ts` — treatment pages and categories
- `doctors.ts` — doctor profiles
- `reviews.ts` — patient reviews
- `financial.ts` — financing partners and Dental Savings Plan details
- `posts.ts` — journal article metadata

Update branding tokens, typography, and global styles in `src/app/globals.css`.

## Contact form

The form validates on the client and server with Zod. `src/app/api/contact/route.ts` currently validates submissions and returns a success response; it does **not** send email or persist data. Connect the marked integration point to an email, CRM, or scheduling service before launch.

## Deployment

The site is ready for Vercel or any Node.js host:

1. Set the production domain in `site.url` (`src/data/site.ts`) so canonical URLs, Open Graph metadata, `robots.txt`, and the sitemap use the live domain.
2. Add the contact delivery integration.
3. Run `npm run build` and deploy.

## Assets

Photography, logos, and financing assets live in `public/images/`. All content and images are sourced from the practice's existing site and public brand materials.
