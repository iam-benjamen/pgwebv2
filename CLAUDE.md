# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Serve production build
```

No test runner is configured.

## Architecture

This is a single-page marketing website for PGStudio (real estate pre-sales). The entire site is rendered in `src/app/page.tsx` as a vertical stack of section components.

**Stack:**
- Next.js 16 (App Router) with React 19
- Chakra UI v3 — this is a major breaking change from v2; component APIs differ significantly
- TypeScript

**Structure:**
- `src/app/layout.tsx` — root layout, loads Google fonts as CSS variables, wraps in `<Provider>`
- `src/app/page.tsx` — composes all section components in order
- `src/components/ui/provider.tsx` — Chakra UI `<ChakraProvider>` with `defaultSystem`
- `src/components/` — one file per page section (hero, stats, problem-section, system-section, testimonials-section, interior-designers-section, cta-section, footer, navbar)

**Key conventions:**
- All components use `"use client"` directive (no Server Components in use)
- Styling is done entirely via Chakra UI props (no Tailwind, no CSS modules beyond globals.css)
- Font variables available: `--font-poppins`, `--font-urbanist`, `--font-cormorant`, `--font-geist-sans`, `--font-geist-mono`; custom font `'Monument Extended'` is also used in headings
- Static assets live in `public/assets/`
- Base background color: `#050816`; primary accent: `#2345EF`

**Chakra UI v3 notes:**
- Provider uses `value={defaultSystem}` (not `theme` prop)
- Use `asChild` pattern for polymorphic components (e.g. `<ChakraLink asChild><Link /></ChakraLink>`)
- Check `node_modules/next/dist/docs/` for Next.js 16-specific APIs before making changes
