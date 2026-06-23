# Max Page Size — Brand Guide

> The product is a 600-line content script with a popup. The brand has to do the heavy lifting that the UI does not.

---

## 1. Naming

### Product name
**Max Page Size**

- Two real words, instantly understood by the target audience (everyone who has ever changed a "per page" dropdown).
- Acts as both a brand name *and* a keyword phrase. Searchable, descriptive, no spelling tax.
- Initials `MPS` are acceptable as a short-form in code/file names, not in marketing copy.

### Display variants
- Default: **Max Page Size**
- Long form (store listings): **Max Page Size — Show More Per Page** *(or)* **Max Page Size for Safari**
- Conversational: "I built a thing called Max Page Size."

### Avoid
- "Maxpagesize" (one word) — hurts readability.
- "MaxPageSize" PascalCase — only in code identifiers.
- "MPS" in marketing copy — meaningless to first-time readers.
- All-caps "MAX PAGE SIZE" — feels shouty; the brand voice is dry, not loud.

### Domain
- Primary: `maxpagesize.com` (if available — buy it).
- Fallback: `iancmaccallum.dev/max-page-size`.
- Reserve socials: `@maxpagesize` on X. GitHub repo lives under `iancmaccallum/max-page-size`.

---

## 2. Tagline

**Primary:** *"Stop clicking 'Next.'"*

Short. Imperative. Names the pain. Universally understood. Works as ad copy, OG image text, store hero, and tweet.

**Secondary (long-form contexts):** *"Install once. Browse smarter forever."*

**Tertiary (technical / dev audience):** *"The simplest extension on the Chrome Web Store."*

---

## 3. Voice & Tone

### The voice in one sentence
**Dry, direct, slightly funny — the way a senior engineer explains their weekend project.**

### Five rules
1. **Plain.** No "synergy", no "revolutionary." If a sentence sounds like marketing, rewrite it.
2. **Direct.** "It clicks the dropdown." Not "It intelligently optimizes your browsing experience."
3. **Numeric where possible.** "40+ sites." "100 per page." "Zero accounts." Numbers beat adjectives.
4. **A little dry humor.** "Free your right index finger." "Apparently I'm one of about 12 people who ship Safari extensions." Underplayed, not zany.
5. **Never apologetic about the product being free.** Free is the feature.

### Things this voice would never say
- "Revolutionary browsing experience"
- "Empower your shopping journey"
- "Seamlessly integrate with your workflow"
- "We're excited to announce…"
- "🚀 Just shipped 🚀" — no emoji-as-applause
- "Game-changing", "next-gen", "AI-powered"

### Things this voice would say
- "It clicks the dropdown so you don't have to."
- "40 sites tuned by hand. A scoring heuristic for the rest."
- "No remote calls. The site list ships in the bundle. Read the manifest."
- "Open the popup if you want, but you probably won't need to."
- "Shipping the sites @username asked for."

---

## 4. Visual Identity

The product is a popup and a content script — there is almost no UI surface. Visual identity is concentrated in: the icon, the popup header, the screenshots, the landing page, the demo GIF.

### Color Palette

A two-color brand: a confident purple that reads as "productivity / utility, not e-commerce" plus a near-black for text.

| Token | Hex | Use |
|---|---|---|
| `mpsPrimary` | `#5B3FE0` | Brand purple — popup header gradient top, install buttons, accents |
| `mpsPrimaryDeep` | `#3D2AA8` | Popup header gradient bottom, pressed states |
| `mpsPrimaryLight` | `#EFEBFF` | Selected pills, hover backgrounds |
| `mpsAccent` | `#FFC857` | "100" callouts in screenshots, highlight badges (sparingly) |
| `mpsSuccess` | `#34A853` | "Detected" / "Maxed" status pills |
| `mpsForeground` | `#0E1116` | Body text |
| `mpsForegroundMuted` | `#5F6873` | Captions, secondary text |
| `mpsBackground` | `#FFFFFF` | App / popup background |
| `mpsBackgroundSubtle` | `#F6F7FB` | Card backgrounds, screenshot panels |
| `mpsBorder` | `#E3E6EE` | Dividers, popup borders |

**Why purple:** competitive utility-extensions space is dominated by blue (Pocket, Honey before purple, Grammarly green). Purple reads as "productivity tool" without being any specific competitor.

### Typography

System fonts only. No webfont download, no FOIT, faster popup paint.

- **Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Weights used:** 400 (body), 600 (headings, buttons, brand mark).
- **Tabular numerals** for any "100", "60", "16 → 60" displays in screenshots — keeps numbers aligned.

### Icon

- 128×128 base, rendered down to 48 and 16.
- Concept: a stylized **"100"** with a downward arrow / bottom border, suggesting "more on one page." Purple background, white mark. Reads at 16×16 as a solid purple chiclet with a hint of "100."
- Avoid: hands clicking, arrows pointing right (suggests "next" — exactly what we're against), magnifying glasses (every productivity extension), gears.

### Promo tile (440×280, Chrome Web Store)

- Background: vertical gradient `mpsPrimary` → `mpsPrimaryDeep`.
- Foreground: huge white **"100"** with a downward arrow, brand mark "Max Page Size" beneath in white.
- Tagline (optional bottom strip): "Stop clicking 'Next.'"

### Screenshot style (1280×800)

- Always show real sites (Amazon, eBay, GitHub) — recognition does the persuasion.
- Use a side-by-side "16 → 60" or "Before / After" pattern. Numbers in `mpsAccent` (yellow).
- White or `mpsBackgroundSubtle` canvas with a small purple brand strip in a corner.
- One annotation per screenshot, max. The screenshot is doing the work; copy is supporting.

### Demo GIF
See [`../marketing.md`](../marketing.md) §9.A for the full storyboard spec. Visual notes:
- 1200×675, MP4 + GIF fallback, <8MB, no audio.
- Number tickers (16 → 60) use `mpsAccent`.
- End card: white background, purple brand mark, tagline.

---

## 5. Logo Usage

- Minimum width: 24px digital. Don't render the "100" mark below that — switch to the icon glyph.
- Clear space: at least 1× the logo's cap-height on every side.
- Don't recolor. Don't rotate. Don't add a drop shadow. Don't outline.
- On a photo or busy background: place on a white or `mpsBackgroundSubtle` rounded chip.

---

## 6. Brand Across Channels (Quick Reference)

| Surface | Voice | Visual |
|---|---|---|
| Chrome Web Store listing | Direct, numeric, benefit-first | Purple promo tile, real-site screenshots |
| Safari App Store listing | Same, slightly more "native Apple" tone (mention iPhone/iPad/Mac) | Same screenshots adapted to Safari chrome |
| Landing page | Three-section: headline, demo GIF, sites grid | White canvas, purple buttons, GIF dominant |
| Show HN post | Builder-to-builder, technical detail welcome | No graphics in post; demo GIF link in comments |
| Reddit posts | Tailored per subreddit; disclose maker status | Demo GIF or a single screenshot — never carousel |
| X/Twitter | Conversational, slightly funny | Demo GIF in tweet 1; everything else text |
| Cold email to writer | Personal, short, one ask | Press pack link, no inline images |
| GitHub README | Technical, MIT-friendly | Repo header SVG; small badges |

---

## 7. What the Brand Is NOT

- **Not a shopping brand.** We don't talk about deals, prices, or coupons. We're a productivity utility that happens to be great for shopping.
- **Not a "fun" brand.** No cartoon mascots, no exclamation points, no emoji confetti.
- **Not a startup brand.** No "we're a team building…", no founder LinkedIn polish. It's one person; the brand reads that way.
- **Not a corporate brand.** No "Inc.", no "© 2026 Max Page Size LLC" in copy. The brand is the product is the GitHub repo.
