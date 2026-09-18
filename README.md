This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

'fix for security'

# What was fixed

## Bugs

- **navLink.jsx** — `pathName === link.url && "bg-black text-white"` inserted the literal
  text `false` into every inactive link's class list. Replaced with a proper ternary.
- **contact/page.jsx** — the form had no `onSubmit`, so clicking "Send message" reloaded
  the page and threw the data away. It's now a client component that POSTs to a new
  `/api/contact` route, with loading/success/error states.
- Removed the leftover `TestPage` scratch file (had a Framer Motion typo: `rotation`
  should be `rotate`, which Framer Motion silently ignores).

## Security

- Contact form is now handled server-side (`app/api/contact/route.js`) with:
  - Required-field and email-format validation
  - A message length cap
  - A hidden honeypot field (`company`) to silently drop basic bot spam
  - Errors logged server-side, generic messages returned to the client
- Social icons now use `<a target="_blank" rel="noopener noreferrer">` instead of
  Next's `<Link>` (which is for internal routes) — `rel="noopener noreferrer"` prevents
  the opened tab from getting a `window.opener` reference back to your site.
- **Next.js was on 14.1.0, an EOL, unpatched version** (Next 14 hit end-of-life Oct 26,
  2025). Bumped to `14.2.35`, the last security-patched 14.x release. **I'd still
  recommend planning a move to Next 15 or 16** when you have time — 14.x no longer
  receives security fixes at all going forward. This wasn't a one-line fix so I didn't
  do the migration automatically.

## Bug that would have broken your production build

- **tailwind.config.js** pointed only at `./src/pages`, `./src/components`, `./src/app` —
  but your actual files live at the project root (`./app`, `./components`). If left as-is,
  Tailwind would find zero matching files and strip out almost all utility classes in
  `next build`, so the deployed site would look unstyled even though `next dev` looked
  fine. Fixed to scan `./app`, `./components`, `./pages`, and keep `./src` as a fallback.

## UX polish

- Mobile menu now closes when a link is tapped (`onClick={closeMenu}`).
- Mobile menu overlay changed from `absolute` to `fixed` so it covers the full
  viewport even if the page was scrolled.
- Added descriptive `alt` text and `aria-label`s to social icons and the menu button
  (was `alt=""`, which screen readers skip).
- Added SEO basics to `layout.js`: `metadataBase`, Open Graph title/description,
  a title template.

# What YOU still need to do

1. **Install the new dependency:**
   ```bash
   npm install
   ```
2. **Set up Resend for the contact form** (or tell me if you'd rather use Formspree
   or plain `mailto:` instead — swapping this out is a small change):
   - Sign up at resend.com, verify a sending domain (or use their shared test domain
     for now)
   - Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_EMAIL`
   - `.env.local` is gitignored by default in Next.js — never commit real keys
3. **Replace the placeholder social links** in `components/navbar.jsx` (currently
   `github.com/yourusername` etc.) with your real profile URLs.
4. **Replace `metadataBase` in `app/layout.js`** with your real deployed domain once
   you know it.
5. **Decide on the Next.js version.** 14.2.35 is patched but still end-of-life. When
   you have bandwidth, upgrading to 15 (or 16, the current active release) is worth
   scheduling — just flag it and I can walk through the migration.
6. Confirm `favicon.png` and `hero.png` actually exist in your `/public` folder —
   they're referenced but weren't part of what you shared.
