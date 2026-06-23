# Max Page Size — Positioning & Messaging

> The message house. Use this as the source of truth for store listings, landing pages, posts, ads, cold emails, replies — everything.

---

## 1. Master Positioning Statement

> **Max Page Size is the simplest extension on the Chrome Web Store: it clicks the "show 100 per page" dropdown on every site that has one, so you stop wasting clicks navigating to page 2, 3, 4 of your search. Free, open source, no account, no tracking.**

If the room only hears one sentence, that's the one.

---

## 2. Elevator (3 sentences)

> Most shopping and search sites default to 24 results per page. They don't have to. Max Page Size auto-selects the largest page-size option on Amazon, eBay, Etsy, Walmart, GitHub, Stack Overflow, and ~40 other sites — plus a smart fallback that detects pagination dropdowns on any site you visit. Install it once, forget it forever.

---

## 3. Message House

```
              ┌────────────────────────────────────────────┐
              │  Stop clicking "Next." (Master tagline)    │
              └────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
  ZERO CLICKS           ZERO CONFIG            ZERO CREEP
  Auto-selects the      40+ sites tuned,       No accounts,
  largest page-size     smart fallback on      no tracking,
  the moment a page     everything else.       no remote rules,
  loads.                Install and forget.    MV3, MIT, local-only.
```

### Pillar A — Zero Clicks
**Proof points:**
- Runs at `document_idle`, no user action required.
- Re-runs on DOM mutations so SPAs (React/Vue checkouts, search refinements) get caught.
- Works on first page load — not after you scroll.

**Verbatim phrases:**
- "Install once. Browse smarter forever."
- "The extension every comparison shopper installs and forgets they have."
- "Free your right index finger."

### Pillar B — Zero Config
**Proof points:**
- 40+ sites hand-tuned (Amazon US/UK/CA/DE/FR/JP, eBay, Etsy, AliExpress, Walmart, Target, Best Buy, Costco, Home Depot, Lowe's, Wayfair, GitHub, Stack Overflow, etc.).
- Smart-detect fallback for the rest: scores `<select>` elements against page-size keywords, validates option values look like a real pagination ladder.
- Optional popup for per-site disable and custom URL params — but you never have to open it.

**Verbatim phrases:**
- "Works on 40+ sites out of the box."
- "Three-second install, instant payoff."
- "No settings to fiddle with."

### Pillar C — Zero Creep
**Proof points:**
- No accounts. No telemetry. No analytics.
- No remote rules database — `SITE_CONFIGS` ships in the bundle (unlike AutoPagerize/Pagetual).
- Manifest V3, MIT licensed, ~600 lines of content script you can read.

**Verbatim phrases:**
- "No accounts. No tracking. No remote servers."
- "100% free. Forever."
- "Read the entire content script in about 600 lines."

---

## 4. Headline Pool

Use in listings, posts, social. Tested order — top three are the strongest.

1. **Stop clicking "Next." Max Page Size already did it.** *(default master headline)*
2. Why scroll 200 product pages when one is enough?
3. The Chrome extension that does one thing: max out your results-per-page.
4. Pagination is over. Install Max Page Size.
5. Free your right index finger. Install Max Page Size.
6. Amazon. eBay. GitHub. Stack Overflow. All set to 100/page. Forever.
7. The extension every comparison shopper installs and forgets they have.

---

## 5. Value Propositions by Audience

| Audience | One-line value prop |
|---|---|
| **Power shoppers** | "Compare 100 Amazon listings on one page instead of clicking through five." |
| **Researchers / analysts** | "Ctrl-F across an entire dataset, not just the first 25 rows." |
| **Developers / QA** | "GitHub issues, Stack Overflow answers, npm packages — all expanded by default." |
| **Reddit / forum power-users** | "Pagination is the worst part of the modern web. This deletes it." |
| **Accessibility users** | "Fewer clicks for switch control, voice control, RSI. One scroll instead of twenty taps." |

See [segments.md](segments.md) for full persona detail.

---

## 6. Against-Statements (Sharp Contrasts)

These are the lines that frame the category. Use them whenever a competitor or fuzzy alternative comes up.

| Not… | But… |
|---|---|
| **Not** an infinite scroller (AutoPagerize, Pagetual, Infy Scroll). | **We change the first request, not the scroll behavior.** Ctrl-F works. Page-saves work. Memory stays sane. |
| **Not** a Reddit-only or Google-only tool (RES, Endless Google). | **We work on ~40 sites + a generic fallback.** One extension instead of a folder. |
| **Not** a "set per-site rules" rule editor (Pagetual). | **Zero config.** You install it; it works on Amazon in three seconds. |
| **Not** a tool that phones home for rule updates. | **Site list ships in the bundle.** No remote calls, no privacy compromise. |
| **Not** a freemium product hiding a paywall. | **Free forever. MIT. No upsell.** |
| **Not** "AI-powered." | **A 600-line content script.** Boringly mechanical and that's the feature. |
| **Not** Chrome-only. | **Native Safari on iPhone, iPad, and Mac on launch day.** |

---

## 7. Why This Pitch Works for a *Free* Extension

- **Promises an obvious, measurable win.** "Stop clicking Next" is concrete; a user can verify it on Amazon in 10 seconds.
- **Names brands users recognize.** Amazon, eBay, GitHub do the persuasion for us. Listicles can paste this verbatim.
- **"Install once, forget" is a feature, not a bug.** Sets expectations that there's no learning curve, signup, or upsell — which is the truth.
- **Privacy posture is differentiation, not a footnote.** Most utility extensions ship with analytics. Saying "no remote calls" out loud beats every competitor on trust without costing us anything.
- **Free is the feature.** Never apologize for it; never sell against it. Saying "100% free forever" is part of the trust positioning, not a placeholder before a Pro tier.

---

## 8. Words To Use / Avoid

**Use:**
- Auto, automatically, instantly
- One page, one scroll, one click (or zero)
- Set, picks, selects, switches
- Free, open source, MIT, MV3
- Works on, supported, out of the box
- Numbers: 40+, 100/page, 600 lines, zero accounts

**Avoid:**
- "AI", "smart" (the smart-detect feature is fine — using "smart" as marketing fluff is not), "intelligent"
- "Revolutionary", "game-changing", "next-gen"
- "Seamless", "synergy", "ecosystem"
- "Optimize your browsing experience" (say "show more per page")
- "Empower", "unlock", "unleash"
- Promises about speed of the page itself (we don't make pages faster; we make you scroll fewer of them)

---

## 9. Pre-Approved Lines for Specific Contexts

**For a one-line ad / OG image:**
> "Stop clicking 'Next.' Install Max Page Size."

**For a podcast intro:**
> "Max Page Size is a free Chrome and Safari extension that automatically picks the biggest 'results per page' option on Amazon, eBay, GitHub, and about 40 other sites. Install it once, never touch a pagination dropdown again."

**For a hostile HN commenter who says "why not just use AutoPagerize":**
> "AutoPagerize loads more content as you scroll, which breaks Ctrl-F, doubles fetches, and eats memory. Max Page Size changes the first request so the entire list is already there. Different solution, sometimes complementary."

**For a customer who says "doesn't work on [site]":**
> "Thanks for flagging. The popup has a 'Report This Site' button that emails me the URL — I ship a site pack every ~4 weeks and yours will be in the next one. Or open a PR on GitHub if you want it faster."

**For someone asking how we make money:**
> "We don't. It's MIT-licensed, no tracking, no upsell. GitHub Sponsors link in the footer if you want to throw a coffee."
