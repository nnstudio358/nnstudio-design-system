# nnstudio Design System

Design system for [nnstudio.com](https://www.nnstudio.com) — senior design partner for in-house marketing teams at B2B organizations.

Built with **Next.js 16 + Tailwind CSS v4 + Framer Motion**. Deployed on Vercel.

---

## Identity

**Practice:** nnstudio — solo design practice, Nathan Billman  
**Positioning:** Senior design partner for in-house marketing and brand teams. Bridges Figma-based design systems and Adobe marketing production.  
**Voice:** Direct, confident, un-pretentious. No jargon. Outcome-first language.  
**Brand pillars:** On-Time. On-Brand. Un-Pretentious.

---

## Visual Language

**Aesthetic:** Editorial and premium. Typography does the heavy lifting — no decorative imagery. Clean whitespace, strong hierarchy, subtle texture.

**Background:** Warm parchment (#EDECE8) with a faint noise texture overlay.  
**Dark sections:** Ink (#232520) for featured work and closing CTAs.  
**Accent:** Amber (#C8923A) for primary CTAs and decorative markers only.  
**Max layout width:** 1440px, centered.  
**Borders:** Always `#D6D2CA` (--color-faint).

---

## Typography

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero headline | Playfair Display | 76px / 56px / 40px | 400 | tracking -0.02em, lh 1.08 |
| Section headline | Playfair Display | 52px / 40px / 30px | 400 | tracking -0.02em, lh 1.1 |
| Italic accent | Playfair Display | — | Italic | Used inside headlines for emphasis |
| Pillar headline | Playfair Display | 40px / 36px / 32px | 400 Italic | tracking -0.02em |
| Eyebrow / label | DM Sans | 12–13px | 400 | tracking 0.12–0.18em, uppercase |
| Body large | DM Sans | 19px / 17px / 16px | 300 (Light) | lh 1.65, color #6B6A63 |
| Body small | DM Sans | 15px | 300 | lh 1.65 |
| Nav links | DM Sans | 13px | 400 | tracking 0.04em |
| CTA buttons | DM Sans | 14px | 400 | tracking 0.04em |
| Tags / labels | DM Sans | 11–13px | 400 | tracking 0.04em |

Fonts loaded via `next/font/google`. Tailwind aliases: `font-serif` → Playfair Display, `font-sans` → DM Sans.

---

## Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#EDECE8` | Page background, light sections |
| `--color-ink` | `#232520` | All text, dark section backgrounds |
| `--color-muted` | `#8A8A82` | Secondary text, nav links, labels |
| `--color-faint` | `#D6D2CA` | Borders, dividers, card outlines |
| `--color-rule` | `#C8C2BA` | Horizontal rules, separators |
| `--color-amber` | `#C8923A` | Primary CTA, eyebrows, bullet markers |
| `--color-slate` | `#2C3236` | Secondary accent (tags) |
| `--color-offwhite` | `#F4F3EF` | Text on dark/ink sections |

Amber hover state: `#D4A55A`  
Body copy on light bg: `#6B6A63` (between ink and muted — applied inline)  
Body copy on dark bg: `#C8C2BA` (muted-on-ink — applied inline)

---

## Spacing Scale

`4 · 8 · 16 · 20 · 24 · 32 · 36 · 40 · 56 · 64 · 96 · 120` (px)

Section padding (responsive): `py-16 md:py-24 lg:py-32`  
Side padding (responsive): `px-5 md:px-10 lg:px-16`  
Left rail offset for hero: `lg:pl-28`

---

## Components

| Component | File | Notes |
|---|---|---|
| Nav | `components/Nav.tsx` | Responsive. Logo + links + CTA. Mobile hamburger. |
| Hero | `components/Hero.tsx` | Typographic only. Load animation (not scroll). |
| Logo Strip | `components/LogoStrip.tsx` | 4-slot rotating logo grid, staggered fade. |
| Problem + Pillars | `components/ProblemAndPillars.tsx` | Combined section — centered problem statement + 3-column pillar grid. |
| Dual Stack Section | `components/DualStackSection.tsx` | Two-column capability list with amber + divider. |
| Turno Feature | `components/TurnoFeature.tsx` | Dark (ink bg) featured work block with CountUp metrics. |
| Closing CTA | `components/ClosingCTA.tsx` | Light bg closing section with headline, copy, CTA button + email. |
| Footer | `components/Footer.tsx` | `dark` prop for ink variant. |
| nnstudio Logo | `components/NNStudioLogo.tsx` | SVG inline component. `color` + `height` props. |
| FadeUp | `components/FadeUp.tsx` | Scroll-triggered fade wrapper (Framer Motion). `delay` prop for stagger. |
| CountUp | `components/CountUp.tsx` | Animated numeric counter. Parses prefix/suffix (e.g. "8,000+", "65%"). |
| Pillars (legacy) | `components/Pillars.tsx` | Desktop-only original pillar layout — superseded by ProblemAndPillars. |
| Problem Section (legacy) | `components/ProblemSection.tsx` | Desktop-only original — superseded by ProblemAndPillars. |
| Contact Form | `components/ContactForm.tsx` | Formspree form with useActionState. |

---

## Animation Rules

- **FadeUp:** `whileInView`, `viewport: { once: true }`, duration 0.6s, ease `[0.25, 0.1, 0.25, 1]`
- **Hero:** Load animation (`animate`, not `whileInView`) — h1 at 0s, subhead at 0.15s, buttons at 0.3s
- **CountUp:** `useInView` + `requestAnimationFrame`, cubic ease-out, 1500ms default
- **Stagger:** 0.1s delay increments on grid children
- No parallax, no entrance effects beyond fade-up

---

## Section Pattern

Every section follows this structure:

```tsx
<section className="w-full bg-bg border-t border-faint">
  <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
    {/* content */}
  </div>
</section>
```

Dark variant replaces `bg-bg` with `bg-ink` and removes the border.

---

## Button Patterns

**Primary (amber fill):**
```tsx
<a className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors">
  Let's talk →
</a>
```

**Secondary (outline):**
```tsx
<a className="font-sans text-[14px] text-muted border border-faint px-9 py-4 hover:text-ink hover:border-ink transition-colors">
  See the work
</a>
```

No border-radius. Square corners throughout.

---

## Figma Design System

Figma file: `nnstudio — Design System`  
File key: `dAQqoHNzJmpKoo5duxT8Xj`  
Contains: Color variables, spacing variables, text styles, 5 base components (Button, Tag, Portfolio Card, Nav Bar, Section Wrapper).
