# VETRA Marketing Website

The official marketing site for [vetraverify.com](https://vetraverify.com).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + Custom Properties
- **Font:** Plus Jakarta Sans (Google Fonts)
- **Deployment:** Vercel (static export)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" → select this repo
4. Vercel auto-detects Next.js — just click "Deploy"
5. Add your custom domain (vetraverify.com) in Project Settings → Domains
6. Update your domain's DNS:
   - Add a CNAME record: `www` → `cname.vercel-dns.com`
   - Add an A record: `@` → `76.76.21.21`

Every `git push` to `main` will auto-deploy.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with SEO metadata
    page.tsx            # Homepage
    page.module.css     # Homepage styles
    globals.css         # Global styles + brand system
    carriers/page.tsx   # For Carriers page
    contractors/page.tsx # For Contractors page
    about/page.tsx      # About / Founder page
    contact/page.tsx    # Contact form page
  components/
    Navbar.tsx          # Responsive navbar with mobile menu
    Footer.tsx          # Site footer
```

## Brand System

Colors, typography, and design tokens are defined as CSS custom properties in `globals.css`. See the VETRA Brand Guide for full specifications.

## Notes

- Static export (`output: 'export'`) for maximum performance and CDN caching
- Contact form is currently client-side only — connect to your backend or a form service (Formspree, Formspark, etc.) when ready
- Replace the `WK` avatar placeholder with an actual photo when available
- Add your generated logo assets to `/public` and update Navbar/Footer components
