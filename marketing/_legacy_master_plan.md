# Max Page Size — Marketing Plan

> A free Chrome + Safari extension that automatically clicks "100 per page" so you don't have to. Forever.

This document is the operating playbook for growing Max Page Size from zero to a healthy install base through reach and reputation (Karma) rather than paid acquisition. The product is free, single-purpose, and best monetized by ranking on Chrome Web Store / Safari App Store, getting onto "must-have extensions" lists, and earning shout-outs from power-users on Reddit, X, and Hacker News.

---

## 1. Product Snapshot

**One-liner:** Stop clicking "Next page." Max Page Size sets every product list, search result, and feed to its largest pagination option, automatically.

**What it does (built today):**
- Runs on all sites (`<all_urls>`) at `document_idle`.
- Looks up the current host in a hand-tuned `SITE_CONFIGS` table (~40 sites) and selects the largest `<option>` in the page-size `<select>` — or rewrites a URL param (`?count=50`, `?n=100`).
- Falls back to a generic "smart detector" that scans every `<select>` on the page, scores it against page-size keywords (`per_page`, `results`, `show`, `display`, `count`, `limit`, `rows`), and verifies the values look like a real page-size progression.
- Re-runs on DOM mutations so SPAs (React/Vue checkouts, search refinements) get caught.
- Popup with per-site disable, custom URL-param overrides, "Report this site" button, and a global on/off.
- Infinite scroll module is built but feature-flagged off — strong reserve weapon for a v1.1 launch.

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

## 2. Competitive Landscape

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

## 3. Audience Segments

Free utilities live or die on niche communities that adopt and evangelize them. Five segments matter, in priority order:

### A. Power Shoppers (Amazon / eBay / AliExpress heavy users) — PRIMARY
Heavy comparison shoppers who already click "100 per page" by hand. They lurk on r/Frugal, r/Flipping, r/BuyItForLife, r/Amazon, r/Ebay. Pain is acute and weekly. Conversion to install is high once they understand the value.

### B. Researchers & Analysts
Anyone who lives in paginated tools: PubMed, Google Scholar, JIRA, Confluence search, Bugzilla, real-estate listings (Zillow/Redfin/Realtor), job boards (LinkedIn, Indeed), legal databases. They want one screen of results, then Ctrl-F. **Action:** add a v1.1 site pack targeting these.

### C. Developers & QA
GitHub, Stack Overflow, npm, PyPI, package managers — already supported. Plus: testing list views in their own apps (extension is useful for QA). This crowd is on Hacker News, Twitter/X dev community, dev.to, and reads `awesome-chrome-extensions` lists on GitHub. They install extensions casually and recommend them in PRs / Slack.

### D. Reddit, X, and Forum Power-Users
Old.reddit.com browsers, RES users, X power-users using lists. They live in feeds and hate pagination. They drive Karma — one well-placed comment from a regular in r/InternetIsBeautiful is worth a paid ad.

### E. Accessibility / Low-Mobility Users
Less clicking = a real win for users with motor impairments, RSI, or anyone using switch control / voice control. Often overlooked, deeply grateful when included. Target r/disability, A11y Slack, WebAIM mailing list.

---

## 4. Positioning & Messaging

### Master positioning
> Max Page Size is the simplest extension on the Chrome Web Store: it clicks the "show 100 per page" dropdown on every site that has one, so you stop wasting clicks navigating to page 2, 3, 4 of your search. Free, open source, no account, no tracking.

### Headline pool (use in listings, posts, social)
1. Stop clicking "Next." Max Page Size already did it.
2. Why scroll 200 product pages when one is enough?
3. The Chrome extension that does one thing: max out your results-per-page.
4. Pagination is over. Install Max Page Size.
5. Free your right index finger. Install Max Page Size.
6. Amazon. eBay. GitHub. Stack Overflow. All set to 100/page. Forever.
7. The extension every comparison shopper installs and forgets they have.

### Three-sentence elevator
> Most shopping and search sites default to 24 results per page. They don't have to. Max Page Size auto-selects the largest page-size option on Amazon, eBay, Etsy, Walmart, GitHub, Stack Overflow, and ~40 other sites — plus a smart fallback that detects pagination dropdowns on any site you visit. Install it once, forget it forever.

### Why this is the right pitch for a *free* extension
- Promises an obvious, measurable win ("stop clicking Next").
- Names brands users recognize (Amazon, eBay) — listicles can paste this verbatim.
- "Install once, forget" is a feature, not a bug — sets expectations that there's no learning curve, no signup, no upsell.

---

## 5. Chrome Web Store Listing Optimization

The Web Store's algorithm weighs **title keywords + WAU (Weekly Active Users)** more than anything else. Get the title right, get installs from launch channels, the flywheel does the rest.

### Title (limit ~45 chars displayed)
**Recommended:** `Max Page Size — Show More Per Page`
- Front-loads brand name + the exact phrase shoppers search ("show more per page", "items per page", "results per page").
- Keep under 45 chars; CWS truncates at ~35.

**Alternatives to A/B if growth stalls:**
- `Max Page Size: Auto Show 100 Per Page`
- `Show More Results — Max Page Size`

### Short description (132 char hard limit)
> Automatically sets every product list and search to its largest page-size. Amazon, eBay, GitHub, and 40+ sites. Free. No tracking.

(131 chars.)

### Long description structure
Lead with the win. Bullet the sites. Address objections. CTA last.

```
Tired of clicking "Next page" 20 times to compare prices on Amazon, browse
eBay listings, or scroll Stack Overflow answers? Max Page Size fixes that
in one install.

WHAT IT DOES
Every time you load a page with a "results per page" dropdown, Max Page Size
automatically picks the biggest option (usually 100). One page. One scroll.
Done.

SUPPORTED OUT OF THE BOX
• Marketplaces: Amazon (US/UK/CA/DE/FR/JP), eBay, Etsy, AliExpress
• Retail: Walmart, Target, Best Buy, Costco, Home Depot, Lowe's, Wayfair
• Fashion: Nordstrom, Macy's, Kohl's, ASOS, Nike, Adidas, Zalando, SHEIN
• Electronics: Newegg, B&H Photo, Micro Center
• Search engines: Bing, DuckDuckGo, Yahoo, Yandex
• Developer: GitHub, Stack Overflow, npm, PyPI
• ...plus a smart fallback that works on most other paginated sites.

WHY IT'S BETTER THAN INFINITE SCROLL EXTENSIONS
Infinite scrollers (AutoPagerize, Pagetual, Endless Pages) keep downloading
more content as you scroll. Max Page Size sets the largest page-size up
front, so:
  ✓ Ctrl-F finds everything on one page
  ✓ No layout jank, no duplicate fetches
  ✓ Works offline once the page loads
  ✓ No remote rule database — privacy stays local

PRIVACY
• No accounts, no tracking, no analytics.
• No remote servers. The site list ships with the extension.
• Open source: github.com/iancmaccallum/max-page-size

CUSTOMIZE
Toggle per-site rules from the popup, add your own URL parameters
(e.g., ?count=50), or report sites that should be supported.

100% FREE. FOREVER. INSTALL ONCE.
```

### Keywords to land naturally in description (avoid stuffing — 2–3% density)
`page size`, `per page`, `items per page`, `results per page`, `show more results`, `pagination`, `Amazon`, `eBay`, `productivity`, `shopping extension`.

### Visual assets (5 screenshots, 1280x800 each)
1. **Hero screenshot** — Amazon search before/after split: left "showing 24 results", right "showing 60 results", overlaid with "Automatic" badge.
2. **Site grid** — wall of recognizable logos (Amazon, eBay, Etsy, GitHub, Walmart, Stack Overflow, Target, Home Depot) with the headline "Works on 40+ sites out of the box."
3. **The popup** — clean shot of the actual extension popup with the gradient header.
4. **Smart detection** — generic e-commerce site with a "Detected automatically" annotation.
5. **Privacy / open source** — text-heavy slide: "No accounts. No tracking. No remote servers. MIT licensed."

Promo tile (440x280): purple gradient (matches popup), big "100" with arrow, brand name.

### Category & permissions justification
- **Category:** Productivity (primary), Shopping (secondary if dual-listing allowed).
- **Permissions justification (copy verbatim into developer dashboard):**
  - `storage` — Stores user preferences (per-site enable/disable, custom URL parameters). All local.
  - `activeTab` — Used to display the current site in the popup and to apply per-site overrides on demand.
  - `<all_urls>` — Required because the extension's smart detector needs to scan page-size selectors on any site the user visits. No data is collected or transmitted; everything runs in the content script.

### Privacy policy
Host a one-page policy at `iancmaccallum.dev/max-page-size/privacy`. Contents: "We collect nothing. We send nothing. All preferences are stored in `chrome.storage.sync`. The extension is open source — read the code." Required even for zero-data extensions; not optional.

---

## 6. Safari / Apple App Store Listing

Safari has a much smaller extension pool — that's the opportunity. iOS Safari extensions are a near-vacuum and rank quickly for productivity keywords.

### App name
`Max Page Size for Safari` (you can't repeat "Safari" in the subtitle; this is OK because "for Safari" helps users find it from outside the store via Google.)

### Subtitle (30 chars)
`Auto show more results`

### Keywords (100 char field, comma-separated, no spaces)
```
page,results,per page,amazon,ebay,shopping,pagination,scroll,productivity,utility,more,show all
```

### Promotional text (170 chars, can be updated without resubmission — use it for seasonal pushes)
> The free Safari extension that auto-clicks "100 per page" on Amazon, eBay, GitHub, and 40+ sites. Install once, browse smarter forever.

### App Store description (long)
Same structure as Chrome listing but lead with Safari-specific lines:
- "The Safari extension you've been waiting for."
- "Built natively for iPhone, iPad, and Mac."
- "Works in private browsing. No iCloud sync required."

### Screenshots
- 6.7" iPhone: 3 screenshots (Amazon mobile site before/after, popup, supported-sites grid).
- 13" iPad: 2 screenshots (Safari split-view showing comparison).
- Mac: 3 screenshots (1280x800) — same as Chrome but with Safari chrome.

### Review notes (private to App Review)
> The extension reads page-size `<select>` elements and changes their selected `<option>` to the largest numeric value. No data leaves the device. Test by visiting amazon.com/s?k=laptop — the results-per-page dropdown will automatically change from 16 to 60.

---

## 7. Launch Plan — Week-by-Week

### T-2 weeks (pre-launch)
- Ship Chrome Web Store listing (assets, copy, privacy policy live).
- Submit Safari extension to App Review (1–2 week review).
- Record the demo GIF (see asset spec below).
- Stand up the landing page at `maxpagesize.com` or `iancmaccallum.dev/max-page-size` — install buttons, demo GIF, supported-sites grid, GitHub link.
- Draft all launch posts (HN, PH, Reddit, X). **Don't post yet.**
- Soft-ask 5–10 friends to install + leave honest reviews on the Web Store (this is allowed; paid reviews are not). 5 reviews in week one is the difference between "0 reviews" (suspicious) and "5 reviews" (legitimate).
- Reach out to 3 listicle writers warmly (see outreach template below). No ask yet — just "I built this, thought you'd find it interesting."

### Launch Day (Tuesday or Wednesday, 8am PT)
- **Show HN** post goes live (template below). Stay glued to the thread for 6 hours — answer every comment within 30 minutes.
- **Product Hunt** scheduled at 12:01am PT same day. Pre-line up 5 hunters who'll comment in the first hour. Have a maker comment ready (template below).
- **r/InternetIsBeautiful** post (3pm PT) — different angle (the demo GIF, not the pitch).
- **Tweet thread** from your account, 6–8 tweets, demo GIF on the first.
- **DM 10 specific power-users** on X (people you've already engaged with) — "hey, built this thing for the exact use case you complain about — give it a try?"

### T+1 day
- **r/chrome_extensions** post (mods are strict — read sidebar, ask for permission if rules require).
- **r/productivity** post (frame as "I built this to stop pagination, what do you think").
- Email the listicle writers you warmed up — "It launched, here's the link, no pressure to cover."

### T+3 days
- Reddit cross-posts: r/Amazon, r/Ebay, r/Frugal, r/BuyItForLife (one per day, NOT all at once — looks spammy).
- Submit to extension aggregator sites (see directory list below).
- Reply to every HN/PH comment thread that's still active.

### T+1 week
- Write "What I learned launching a free Chrome extension" recap post on your blog → submit to HN as a follow-up (different post, gives a second shot at front page).
- Reach out to YouTube creators in the productivity/tech space (small ones, 5k–50k subs) — "I made a tool you'd love."

### T+2 weeks
- First update: ship 5 new sites users requested via the "Report This Site" button. Post the update on r/chrome_extensions ("I shipped the sites you asked for"). Free Karma.

### T+1 month
- Pitch to Lifehacker / MakeUseOf / Tom's Guide writers (templates below).
- Write a "Best Chrome extensions for Amazon shopping" listicle yourself, place Max Page Size at #3 or #4 (looks honest), publish on dev.to or Medium.

---

## 8. Channels

### Chrome Web Store (primary)
- Title + WAU growth flywheel is the entire game.
- Update version every 4–6 weeks even if minor — "last updated" date affects ranking and trust signals.
- Respond to every review within 48 hours. Polite, factual, no defensiveness.
- File bug fixes against negative reviews and reply with the fix version: "Fixed in 1.0.4 — try updating and let me know."

### Safari App Store (secondary, but uncontested)
- The Safari extension category is small. Few competitors are actively marketing. A simple, free, well-reviewed extension can rank top 10 in Productivity > Extensions quickly.
- Encourage 5-star reviews via the popup: after the extension successfully maxes the page 10+ times, show a one-time "Enjoying it? Rate on the App Store" link.

### Hacker News (Show HN)
- One shot at the front page. Make it count.
- Best window: Tuesday or Wednesday, 8–10am PT.
- Title: keep it short. **Show HN: Max Page Size – a browser extension that auto-clicks "100 per page"**
- First comment from you (within 5 min): the backstory and any technical detail HN loves.

### Product Hunt
- Launch on a Tuesday (highest traffic day).
- Tagline: "Stop clicking 'Next page.' Forever."
- First comment: maker story (3 short paragraphs).
- Line up 5 hunters in advance to comment in the first hour. Don't ask for upvotes — ask for honest feedback.

### Reddit (selective, in this order)
1. **r/InternetIsBeautiful** (16M members) — lead with the demo GIF, no pitch.
2. **r/chrome_extensions** (~80k) — direct, builder-to-builder.
3. **r/productivity** (~2M) — frame as a productivity tip.
4. **r/Frugal** (~3M), **r/BuyItForLife** (~3M) — angle: comparison shopping superpower.
5. **r/Amazon** (~1M), **r/Ebay** (~400k) — site-specific angles.
6. **r/macapps** (~150k), **r/iOSthemes**, **r/ios** — Safari angle.
7. **r/webdev** (~3M) — angle: open source, smart-detect heuristics, MV3.
8. **r/accessibility** (~30k) — angle: less clicking for motor-impaired users.

**Rules:** never post the same thing twice. Each subreddit gets a tailored title + body. Disclose you're the maker (Reddit hates stealth marketing).

### X / Twitter
- Pin a launch thread with the demo GIF.
- Reply-guy mode: search "show more per page", "amazon results per page", "pagination is annoying" — reply with the link from a personal account, never a brand account.
- Tag related extension authors (uAutoPagerize, RES, Stylus) — they'll often retweet a complementary tool.

### Listicle / Press outreach
Real publications, real writers. Cold email gets through if it's short, specific, and useful.

| Publication | Section / writer focus | Pitch angle |
|---|---|---|
| Lifehacker | "The Upgrade" tech tips | "A one-purpose extension that fixes something you didn't realize was annoying" |
| MakeUseOf | Chrome extension lists | "10 extensions that make Amazon shopping faster — here's one you don't have" |
| Tom's Guide | Browser tips | "Hidden Chrome setting: max out your search results automatically" |
| The Verge / Installer (David Pierce) | Friday Installer newsletter | "Tiny extension, real productivity win — feels like a feature Chrome should ship" |
| TechCrunch | Not a fit (free indie tool). Skip. |
| Hacker Noon | Dev productivity | "I built a Chrome extension in a weekend — here's the smart-detect heuristic" |
| Indie Hackers | "I launched this week" forum | Founder story, free, open source |
| Smashing Magazine | Web dev tips | Technical: MV3 content scripts, MutationObserver patterns |
| Dev.to | Tutorial cross-post | "Detecting page-size selectors on any site: a heuristic" |
| Browser Use newsletter | New tools | Just submit the tool |

### Aggregator directories (submit on T+3 days)
- alternativeto.net (listing alongside AutoPagerize)
- producthunt.com (covered above)
- chrome-stats.com (auto-indexed, but submit a description)
- betalist.com
- saashub.com
- toolify.ai (free tools)
- coolify.so / awesometools.io
- GitHub: PRs to `awesome-chrome-extensions`, `awesome-productivity`, `awesome-shopping`
- The Awesome List for Safari extensions (`awesome-safari-extensions`)

### Cross-pollination with related extension authors
- DM authors of complementary tools (price trackers, Wayback for Amazon, RES, Stylus): "I just shipped this — feels like a natural pair with yours. Want to swap mentions?"
- Offer to write a guest doc for their wiki / a section in their listing's description.

---

## 9. Asset Library (build this week)

### A. Demo GIF — single most important asset
**Spec:**
- 1200x675, MP4 + GIF fallback, <8MB.
- 12-second loop, no audio.
- **Storyboard:**
  1. (0–2s) Amazon search page loads showing "Showing 1-16 of 5,000 results."
  2. (2–3s) Brief flash of the extension icon glowing.
  3. (3–5s) Page reloads / dropdown changes to "60 per page." Result count animates: 16 → 60.
  4. (5–7s) Same thing on eBay (24 → 240).
  5. (7–9s) Same thing on Stack Overflow (15 → 50).
  6. (9–12s) Logo + tagline: "Install once. Browse smarter."

This GIF is the asset that makes Show HN, Product Hunt, Reddit, and X all work. **Do not launch without it.**

### B. Hero static (1280x800)
Split-screen "before / after" Amazon shot with bold "16" vs "60" overlay. Used as Chrome Web Store screenshot #1.

### C. Sites-supported grid (1200x630, also serves as OG image)
6×4 grid of logos with the headline "Works on 40+ sites out of the box." Used on the landing page, in social posts, in pitch emails.

### D. Show HN copy

```
Show HN: Max Page Size – a browser extension that auto-clicks "100 per page"

I got tired of changing the results-per-page dropdown on Amazon every time I
shopped. Built a Chrome/Safari extension that does it automatically across
~40 sites (Amazon, eBay, Etsy, Walmart, GitHub, Stack Overflow, etc.) and
falls back to a generic detector on the rest.

The fallback is the part I'm most proud of: it scans every <select> on the
page, scores it against page-size keywords (per_page, results, count, etc.),
and checks whether the option values look like a real pagination ladder
before changing anything. So far, low false-positive rate.

Free, open source (MIT), MV3, no remote calls, no analytics. The site
config table ships in the bundle — no phone-home for rule updates like
AutoPagerize / Pagetual.

Chrome: [link]
Safari (iOS + macOS): [link]
Source: github.com/iancmaccallum/max-page-size

Curious what edge cases I'm missing — especially on SPAs that re-render
the selector after a delay.
```

### E. Product Hunt maker comment

```
Hi Hunters,

Maker here. I built Max Page Size because I was changing the "results per
page" dropdown on Amazon roughly 20 times a day and finally decided to
automate it.

It's intentionally tiny. One job: visit a site with a results-per-page
dropdown, pick the biggest option. ~40 sites are hand-tuned (Amazon, eBay,
GitHub, Walmart, etc.) and a generic fallback handles the rest.

Why not just use an infinite scroll extension? Two reasons:
1. Infinite scroll downloads more content as you scroll. We change the
   first request so the entire list is there immediately.
2. Ctrl-F works. Page-saves work. Screenshots make sense.

Free, open source, no tracking, MV3. Safari version is in App Review and
should land this week.

Would love your feedback — especially: what sites should I add next?
```

### F. r/InternetIsBeautiful post

```
Title: I made a browser extension that automatically clicks "100 per page"
on shopping sites

Body: [demo gif embedded]

Free, open source, no signup. Works on Amazon, eBay, Etsy, GitHub, and
about 40 other sites out of the box, with a generic fallback for everything
else.

Disclosure: I'm the maker. Chrome: [link] · Safari: [link] · Source: [GitHub link]
```

### G. r/chrome_extensions post

```
Title: [Free, MV3, Open Source] Max Page Size — auto-selects the largest
"results per page" option on 40+ sites

Body:
Hey r/chrome_extensions, builder here. Shipped my first extension this week
and wanted to share both the result and the heuristic in case it's useful
to anyone building something similar.

What it does: when you load a paginated page, it looks for the
"results per page" <select>, picks the largest numeric option, dispatches
a change event. Done.

The interesting part is the fallback for unknown sites: scan every <select>,
build a text signature from name/id/aria-label/label/parent, match against
page-size keywords, validate that the option values look like a real
pagination ladder (10/25/50/100). Surprisingly low false-positive rate.

MV3, no remote calls, no analytics, MIT licensed. ~40 sites in the table
(full list in the GitHub README).

Chrome: [link]  Safari: [link]  Source: [GitHub]

Happy to take PRs for new sites — or just bug reports via the "Report This
Site" button in the popup.
```

### H. Cold email to listicle writer (~ Lifehacker / MakeUseOf)

```
Subject: Tiny Chrome extension you'll want to add to the next list

Hi [Name],

Loved your "[specific recent article they wrote]" piece — the bit about
[specific detail] saved me an hour this week.

I shipped a free Chrome + Safari extension yesterday called Max Page Size.
It does exactly one thing: when you visit Amazon / eBay / GitHub / Walmart
(or about 40 other sites), it auto-selects the largest "results per page"
option in the dropdown. Install once, no settings to fiddle with.

The reason I think it fits your readers: it's the kind of utility that's
obvious in hindsight — everyone already clicks that dropdown manually, but
nobody's bothered to automate it. Three-second install, instant payoff.

Free, open source, no tracking, no upsell. Demo GIF: [link]
Install: [Chrome link]

Happy to send a press image pack or answer any questions if it's useful for
a piece.

Best,
Ian
```

### I. X / Twitter launch thread (8 tweets)

```
1/ Tired of clicking "Next page" 20 times to compare prices on Amazon?

I shipped a free Chrome + Safari extension that auto-clicks "100 per page"
on ~40 sites and falls back to a smart detector on the rest.

Install once. Browse smarter forever.

[Demo GIF]

2/ Works out of the box on:
Amazon · eBay · Etsy · Walmart · Target · Best Buy · Costco · Home Depot
Lowe's · Wayfair · Nordstrom · Macy's · ASOS · Nike · GitHub · Stack
Overflow · Bing · DuckDuckGo · and ~25 more.

3/ The interesting part is the fallback for unknown sites:

- Scan every <select> on the page
- Score against page-size keywords (per_page, results, count, limit)
- Check the option values look like a pagination ladder (10, 25, 50, 100)
- Pick the max, dispatch change event

Surprisingly low false-positive rate.

4/ Why not just use an infinite scroller like AutoPagerize?

Infinite scroll downloads more content as you scroll, which:
- Breaks Ctrl-F
- Eats memory
- Reflows the page constantly
- Often double-fetches the same items

Setting a bigger page size up front avoids all of it.

5/ Privacy:
- No accounts
- No analytics
- No remote servers (the site config ships in the bundle)
- MV3, MIT licensed

You can read the entire content script in about 600 lines.

6/ Safari version is in review and should land this week — iPhone, iPad,
and Mac. Apparently I'm one of about 12 people who ship Safari extensions.

7/ Chrome: [link]
Safari: [link]
GitHub: [link]

8/ Tell me what site I should add next. The "Report This Site" button in
the popup goes straight to my inbox.
```

### J. Landing page (one screen, no nav)

Sections, in order:
1. **Headline:** "Stop clicking Next."
2. **Subhead:** "Max Page Size auto-selects the largest 'results per page' option on Amazon, eBay, GitHub, and 40+ other sites. Free. No signup."
3. **Two install buttons:** Chrome Web Store, Safari App Store.
4. **Demo GIF** (asset A above).
5. **Supported sites grid** (asset C above).
6. **Why not infinite scroll?** Two-column comparison.
7. **Privacy strip:** "No accounts. No tracking. No remote servers." with GitHub link.
8. **Footer:** support email, GitHub, privacy policy.

---

## 10. Five Initiatives (Q1, ranked by distribution upside)

### Initiative 1 — Show HN + Product Hunt Coordinated Launch
**Goal:** 2,000 installs in 72 hours, 4.5+ star rating.
**Owner:** Ian.
**Timeline:** 2 weeks prep, single launch day.
**Deliverables:** Demo GIF, landing page, both store listings live, all post copy drafted, 5 hunters lined up, 5 organic reviews queued.
**Success metric:** Front page of HN for 4+ hours OR top 10 of the day on Product Hunt.
**Why first:** This is the single highest-leverage day in the extension's life. Everything else amplifies what happens here.

### Initiative 2 — Chrome Web Store Listing SEO Sprint
**Goal:** Rank in top 5 for "show more per page", "results per page", "items per page", "page size."
**Owner:** Ian.
**Timeline:** Ongoing; major review every 6 weeks.
**Deliverables:**
- Title locked to optimal pattern.
- Long description rewritten with 2–3% keyword density.
- 5 polished screenshots + promo tile.
- Privacy policy live at a permanent URL.
- Version bump every 4–6 weeks (even if minor).
- Review responses within 48 hours.
**Success metric:** Top 5 search rank for two of the four target queries within 60 days. WAU/install ratio above 60% (good retention signal).

### Initiative 3 — Listicle PR Push
**Goal:** Get mentioned in 3 mid-tier publications (Lifehacker, MakeUseOf, Tom's Guide, The Verge Installer newsletter, dev.to homepage) within 90 days.
**Owner:** Ian.
**Timeline:** Outreach starts 2 weeks post-launch; cadence is 3 cold emails per week.
**Deliverables:**
- Press pack: demo GIF, 3 static screenshots, founder quote, supported-sites list, install numbers (refresh weekly).
- Target list: 20 writers researched by name, with a recent piece referenced in each cold email.
- Tracking spreadsheet: writer / publication / pitch sent date / response / outcome.
**Success metric:** 3 placements in 90 days. Each placement should drive 500+ installs (track via UTM on the landing page redirect).

### Initiative 4 — Reddit Karma Drip Campaign
**Goal:** 8 high-engagement posts across 8 subreddits in 30 days, total 50k+ post views, 5k+ install referrals.
**Owner:** Ian.
**Timeline:** One subreddit per 2–3 days; never more.
**Deliverables:**
- Tailored post for each subreddit (template ≠ copy-paste).
- Active in comments for the first 6 hours of each post.
- Post-mortem doc: which subreddits converted best, what title formats worked.
**Success metric:** 2+ posts crack 500 upvotes; install conversion >5%.

### Initiative 5 — Site Coverage Expansion + Re-Launch Loop
**Goal:** Turn the "Report This Site" feedback loop into a recurring growth engine.
**Owner:** Ian.
**Timeline:** Monthly cadence, indefinite.
**Deliverables:**
- Triage incoming site reports weekly.
- Ship a new site pack every 4 weeks (5–10 sites per release).
- Re-announce each release on r/chrome_extensions with the list of new sites and the names of users who requested them ("shipping the sites @username asked for"). Free Karma, free social proof.
- Add a "supported sites: X" counter to the landing page and increment it visibly.
**Success metric:** Supported site count goes from 40 → 100+ in 6 months. Site-request-to-install ratio stays above 3x.

---

## 11. What We're Explicitly NOT Doing

- **No paid ads.** The product is free. Paid ads will never recoup; the unit economics are zero.
- **No upsell / Pro tier (for now).** Killing the "100% free forever" pitch destroys the trust positioning. Revisit only after 100k WAU.
- **No newsletter / Discord / community.** Sounds nice; isn't necessary for a single-purpose utility. The extension's job is to be installed and forgotten.
- **No telemetry, even anonymous.** It would be useful to know which sites users visit most, but the privacy posture is a feature. Don't trade it for product data.
- **No fancy onboarding.** First-run experience is "the extension is on; visit a supported site; it just works." Don't add screens.

---

## 12. Metrics Dashboard

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

## 13. Long-Term Bets (6+ months)

Only if Initiative 1–5 hit their numbers.

1. **Firefox port** — MV3 port mostly mechanical from current codebase.
2. **Infinite scroll v1.1** — code already feature-flagged. Ship as opt-in.
3. **Custom rule sharing** — share-link pre-populates another user's settings. Long-tail network effect.
4. **Companion blog** — "Hidden settings on every shopping site" SEO bait.
5. **Donations** — GitHub Sponsors link, but only after 25k WAU and 4.7+ rating.

---

## 14. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Chrome Web Store rejects for `<all_urls>` | Medium | High | Strong permissions justification (drafted above). If rejected, fall back to per-site `host_permissions` for the top 40 sites + ask for `<all_urls>` only when user opts into smart-detect. |
| Site selectors break (Amazon redesigns) | High | Medium | Site reports → ship fixes every 4 weeks. Smart-detect fallback catches most breakages. |
| Negative reviews from "doesn't work on [site I care about]" | High | Medium | Polite reply template; ship support for that site in next release; reply again with version number. |
| Apple rejects Safari extension for vague reasons | Medium | High | Pre-emptive review notes (drafted above). Have a TestFlight build ready for re-submission. |
| AutoPagerize / Pagetual author writes a "why our thing is better" rebuttal | Low | Low | They're complementary, not competitive. Reach out preemptively for mutual mention. |
| Big publication writes about it and the site breaks under load | Low | Low | Static landing page on Vercel / Cloudflare. No backend. Can't break. |

---

## 15. Editorial Voice & Tone

- **Plain.** No "synergy", no "revolutionary." If a sentence sounds like marketing, rewrite it.
- **Direct.** "It clicks the dropdown." Not "It intelligently optimizes your browsing experience."
- **Numeric where possible.** "40+ sites." "100 per page." "Zero accounts." Numbers > adjectives.
- **A little dry humor.** "Free your right index finger." "Apparently I'm one of about 12 people who ship Safari extensions." Underplayed, not zany.
- **Never apologetic about the product being free.** Free is the feature.

---

## Appendix — Cadence Calendar (first 90 days)

| Week | Activity |
|---|---|
| W-2 | Build assets. Submit to both stores. Draft copy. Soft-recruit reviewers. |
| W-1 | Soft launch to friends. Get 5 reviews. Warm-email 3 listicle writers. |
| W1 (launch) | Show HN + Product Hunt + landing page live. r/InternetIsBeautiful + X thread. |
| W2 | r/chrome_extensions, r/productivity. Email listicle writers. Reply to every review. |
| W3 | r/Amazon, r/Ebay, r/Frugal (one per day). Ship 1.0.1 with bug fixes. |
| W4 | First site-pack release (10 new sites). Re-post on r/chrome_extensions. Recap blog post → HN. |
| W5 | Pitch Lifehacker / MakeUseOf. YouTube creator outreach (5 micro-influencers). |
| W6 | Version 1.1: infinite-scroll opt-in. r/macapps + r/ios Safari relaunch post. |
| W7–W8 | Aggregator submissions, `awesome-*` PRs. r/webdev technical post about heuristic. |
| W9–W10 | Second site-pack release. Cross-pollinator outreach. |
| W11 | First metrics review. Double down on best-converting channel. |
| W12 | Tom's Guide / Verge Installer pitch. Begin Firefox port if numbers warrant. |

---

## TL;DR — The Bet

Max Page Size wins through **listing SEO + Karma**, not through paid acquisition. The product is good enough that one front-page Hacker News appearance, one Lifehacker mention, and one strong Reddit post in r/InternetIsBeautiful would carry it to 50k+ installs in a quarter. Everything in this plan exists to make those three things happen, and to keep the flywheel turning afterward via review responses, site-pack releases, and regular re-engagement with the same channels.

Build the demo GIF first. Everything depends on it.
