# Max Page Size — Marketing Strategy

> A free Chrome + Safari extension that automatically clicks "100 per page" so you don't have to. Forever.

This document is the strategic overview. For the operating playbook, see the per-channel docs in this directory. For the long-form plan and asset library that pre-dates this split, see [`../marketing.md`](../marketing.md) (kept as the master appendix until everything is migrated).

---

## 1. Strategic Posture

Max Page Size is a **free, single-purpose, privacy-respecting browser extension**. There is no paid acquisition motion because there is no revenue motion. Growth has to come from three flywheels:

1. **Store-listing SEO** (Chrome Web Store + Safari App Store) — the long compounding asset.
2. **Karma channels** (Hacker News, Reddit, Product Hunt, X) — the spike asset.
3. **Listicle PR** (Lifehacker, MakeUseOf, Tom's Guide, The Verge Installer) — the credentialing asset.

Everything else (Twitter replies, GitHub `awesome-*` PRs, cross-pollination with related extension authors) amplifies one of those three.

**What we will not do:** paid ads, telemetry, newsletter, Discord, upsell. See [channels.md](channels.md) §4 and [`../marketing.md`](../marketing.md) §11 for the rationale.

---

## 2. Product Snapshot

**One-liner:** Stop clicking "Next page." Max Page Size sets every product list, search result, and feed to its largest pagination option, automatically.

**What it does (built today):**
- Runs on all sites (`<all_urls>`) at `document_idle`.
- Looks up the current host in a hand-tuned `SITE_CONFIGS` table (~40 sites) and selects the largest `<option>` in the page-size `<select>` — or rewrites a URL param (`?count=50`, `?n=100`).
- Falls back to a generic "smart detector" that scans every `<select>` on the page, scores it against page-size keywords (`per_page`, `results`, `show`, `display`, `count`, `limit`, `rows`), and verifies the values look like a real page-size progression.
- Re-runs on DOM mutations so SPAs (React/Vue checkouts, search refinements) get caught.
- Popup with per-site disable, custom URL-param overrides, "Report this site" button, and global on/off.
- Infinite scroll module built but feature-flagged off — reserve weapon for a v1.1 launch.

**Sites supported out of the box (publish in the listing):**
- Marketplaces: Amazon (US/UK/CA/DE/FR/JP), eBay, Etsy, AliExpress, Walmart, Target, Best Buy, Costco, Wayfair, Overstock, Bed Bath & Beyond, Temu, SHEIN
- Big box / home: Home Depot, Lowe's, IKEA
- Apparel: Macy's, Nordstrom, Kohl's, JCPenney, ASOS, Zappos, Nike, Adidas, Zalando
- Electronics: Newegg, B&H Photo, Micro Center
- Grocery: Instacart
- Search: Bing, DuckDuckGo, Yahoo, Yandex
- Dev: GitHub, Stack Overflow, npm, PyPI

**Distribution status:**
- Chrome Web Store ID assigned: `icgnjkgcbcpbbfngehgpekggnebbnhec` (publishing pipeline ready per `PUBLISHING_GUIDE.md`).
- Safari extension: Xcode project scaffolded for iOS + macOS, needs ASC submission.
- Manifest V3, no remote code, no analytics. Privacy story is clean.

**Price:** $0. Open source (MIT — see `LICENSE`). Forever free is part of the pitch.

---

## 3. Competitive Landscape

The closest neighbors are AutoPager-style infinite scrollers — they solve a related but different problem. **No major extension specifically targets "click the biggest page-size option."** That gap is the wedge.

| Extension | Users (approx) | What it does | Why we're different |
|---|---|---|---|
| **uAutoPagerize** | 70k+ Chrome users | Auto-appends the next page using a community-curated SiteInfo database | Loads more content via *navigation*; we change the *initial request* so the first page is already huge. Much faster, less DOM bloat. |
| **Pagetual** (hoothin) | 100k+ users | Universal auto-pager with rule learning | Heavier (rule editor, history). We're zero-config and do one thing well. |
| **Infy Scroll** | 30k+ users | Customizable infinite scroll powered by AutoPagerize DB | Same as above; we're "no scroll required, the list is already there." |
| **Endless Google** / **Bing Endless** | 10k–50k each | Site-specific infinite scroll for search | Single-site scope; we cover ~40 sites + smart fallback. |
| **Reddit Enhancement Suite (RES)** | 400k+ users | Power-user Reddit tweaks incl. "Never Ending Reddit" | Reddit-only. We're cross-site. |
| **Amazon-specific paginators** | <10k each | Variations of "load all Amazon results" | Single-site, often unmaintained. We replace 20 of these at once. |

**The angle the competition leaves open:**
1. **"Set, don't scroll."** Auto-pagers download more content as you scroll — bad for slow connections, bad for accessibility, bad for Ctrl-F. We set the largest static page, period.
2. **Cross-site, zero config.** Out of the box, the user installs it and never opens the popup.
3. **Privacy posture.** No remote rules database (uAutoPagerize/Pagetual phone home for SiteInfo updates). Our `SITE_CONFIGS` ships in the bundle.
4. **Safari coverage.** Most of these extensions are Chrome/Firefox-only. Shipping native Safari on day one is differentiation, especially on iOS where the extension market is thin.

---

## 4. Five Initiatives (Q1, ranked by distribution upside)

### Initiative 1 — Show HN + Product Hunt Coordinated Launch
**Goal:** 2,000 installs in 72 hours, 4.5+ star rating.
**Timeline:** 2 weeks prep, single launch day.
**Deliverables:** Demo GIF, landing page, both store listings live, all post copy drafted, 5 hunters lined up, 5 organic reviews queued.
**Success metric:** Front page of HN for 4+ hours OR top 10 of the day on Product Hunt.
**Why first:** Single highest-leverage day in the extension's life. Everything else amplifies what happens here.
**See:** [product-hunt-launch.md](product-hunt-launch.md).

### Initiative 2 — Chrome Web Store Listing SEO Sprint
**Goal:** Rank in top 5 for "show more per page", "results per page", "items per page", "page size."
**Timeline:** Ongoing; major review every 6 weeks.
**Success metric:** Top 5 search rank for two of the four target queries within 60 days. WAU/install ratio above 60%.
**See:** [chrome-web-store-optimization.md](chrome-web-store-optimization.md).

### Initiative 3 — Reddit Karma Drip Campaign
**Goal:** 8 high-engagement posts across 8 subreddits in 30 days, total 50k+ post views, 5k+ install referrals.
**Timeline:** One subreddit per 2–3 days; never more.
**Success metric:** 2+ posts crack 500 upvotes; install conversion >5%.
**See:** [communities.md](communities.md).

### Initiative 4 — Safari App Store Land Grab
**Goal:** Rank top 10 in macOS App Store > Productivity > Extensions and top 10 in iOS Safari extensions for "page size" / "results."
**Timeline:** Submit T-2 weeks; iterate on keywords every 2 weeks for first 60 days.
**Success metric:** 1,500 Safari installs in 90 days. Category top-10 by Day 30.
**See:** [safari-app-extension-listing.md](safari-app-extension-listing.md).

### Initiative 5 — Site Coverage Expansion + Re-Launch Loop
**Goal:** Turn the "Report This Site" feedback loop into a recurring growth engine.
**Timeline:** Monthly cadence, indefinite.
**Deliverables:**
- Triage incoming site reports weekly.
- Ship a new site pack every 4 weeks (5–10 sites per release).
- Re-announce each release on r/chrome_extensions naming the users who requested each site.
- Add a "supported sites: X" counter to the landing page.
**Success metric:** Supported site count goes from 40 → 100+ in 6 months.

---

## 5. Metrics Dashboard

Track weekly in a simple spreadsheet.

| Metric | Source | Target (Day 30) | Target (Day 90) |
|---|---|---|---|
| Chrome Web Store installs | Dev dashboard | 2,000 | 10,000 |
| Chrome WAU / install ratio | Dev dashboard | 60% | 65% |
| Chrome rating | Dev dashboard | 4.5+ | 4.7+ |
| Chrome review count | Dev dashboard | 15 | 60 |
| Safari App Store installs | ASC | 200 | 1,500 |
| Search rank: "results per page" | Manual check | Top 20 | Top 5 |
| Search rank: "page size" | Manual check | Top 20 | Top 10 |
| Site reports received | Popup → email | 50 | 200 |
| Listicle mentions | Manual log | 1 | 3 |
| HN / PH peak rank | Screenshot | Front page 4hr | — |
| Reddit posts with 500+ upvotes | Manual log | 1 | 3 |

---

## 6. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Chrome Web Store rejects for `<all_urls>` | Medium | High | Strong permissions justification (see [chrome-web-store-optimization.md](chrome-web-store-optimization.md) §5). Fallback: per-site `host_permissions` for top 40 + opt-in for smart-detect. |
| Site selectors break (Amazon redesigns) | High | Medium | Site reports → ship fixes every 4 weeks. Smart-detect fallback catches most breakages. |
| Negative reviews from "doesn't work on [site I care about]" | High | Medium | Polite reply template; ship support for that site in next release; reply again with version number. |
| Apple rejects Safari extension for vague reasons | Medium | High | Pre-emptive review notes (see [safari-app-extension-listing.md](safari-app-extension-listing.md) §6). Have a TestFlight build ready for re-submission. |
| AutoPagerize / Pagetual author writes a "why our thing is better" rebuttal | Low | Low | They're complementary, not competitive. Reach out preemptively for mutual mention. |
| Big publication writes about it and the site breaks under load | Low | Low | Static landing page on Vercel / Cloudflare. No backend. Can't break. |

---

## 7. TL;DR — The Bet

Max Page Size wins through **listing SEO + Karma**, not through paid acquisition. The product is good enough that one front-page Hacker News appearance, one Lifehacker mention, and one strong Reddit post in r/InternetIsBeautiful would carry it to 50k+ installs in a quarter. Everything in this plan exists to make those three things happen, and to keep the flywheel turning afterward via review responses, site-pack releases, and regular re-engagement with the same channels.

**Build the demo GIF first. Everything depends on it.**
