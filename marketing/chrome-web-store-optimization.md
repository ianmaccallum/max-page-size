# Max Page Size — Chrome Web Store Optimization (CWSO)

> The #1 channel for any browser extension. The Web Store is the App Store of Chrome; if you don't rank, nothing else matters. This is the operating manual for the listing.

---

## 1. Strategic Foundation

### What CWS rewards (the ranking signals, in order of weight)
1. **Title keywords.** Substring match on the user query in the extension *name* is the single biggest lever. Treat the name as your H1.
2. **Weekly Active Users (WAU).** Not total installs — *active* users. Drives both search rank and the "Featured" / "Editor's Pick" pipeline.
3. **Rating + review count.** A 4.0 with 50 reviews outranks a 4.7 with 5 reviews. Velocity matters more than total.
4. **Update recency.** "Last updated" within the last 60 days is a trust signal. Ship something every 4–6 weeks even if it's tiny.
5. **Long-description keyword density.** Soft signal (2–3% density helps; stuffing hurts).
6. **Category + permissions match to query intent.** Productivity vs Shopping changes which queries rank.
7. **Click-through rate from search results.** Icon, name, short description, screenshot #1 are the 4 levers. CTR feeds back into rank.

### What CWS does NOT reward (don't waste effort)
- Number of supported languages (only matters if you actually localize the listing — see §11).
- Backlinks. Web Store is closed to off-site signals.
- Schema markup. Doesn't apply.
- Total install count. After ~10k, WAU dominates entirely.

### The flywheel
```
   Better title + description
            │
            ▼
   More search impressions
            │
            ▼
   Higher CTR → more installs
            │
            ▼
   Higher WAU + more reviews
            │
            ▼
   Higher search rank ──── (loops)
            │
            ▼
   "Featured" / "Recommended" placement
            │
            ▼
   Massive install spike → reinforces WAU/reviews
```

The whole strategy is: shove the flywheel hard during launch week (HN, PH, Reddit drive installs and reviews) so the algorithm has signal to work with, then keep it spinning with site-pack release loops every 4–6 weeks.

---

## 2. Listing Copy (Locked Recommendations)

### Title (~45 char displayed limit; truncated to ~35 in search results)
**Recommended:** `Max Page Size — Show More Per Page`

- Brand name first (recognition for return visitors and word-of-mouth searches).
- Em dash separator (CWS displays it cleanly; pipe `|` and colon `:` are also fine).
- "Show More Per Page" is the exact phrase shoppers search and the secondary keyword "more per page" / "per page" both substring-match.

**Alternatives to A/B test if rank stalls:**
- `Max Page Size: Auto Show 100 Per Page`
- `Show More Results — Max Page Size`
- `Max Page Size — Auto-Select Results Per Page` *(longest, riskier truncation)*

**Do not use:**
- `Max Page Size` alone — wastes the title slot on brand-only recognition (no one searches the brand yet).
- `Max Page Size — The #1 Pagination Killer` — superlatives get auto-flagged by review.
- Anything with emoji or `(2026)` — feels spammy, gets demoted.

### Short description (132 char hard limit)
> **Automatically sets every product list and search to its largest page-size. Amazon, eBay, GitHub, and 40+ sites. Free. No tracking.**

(131 chars exactly.)

This sentence is the second-most important asset after the title. It shows up in search results, in the install banner, and is the only thing many users read. It should:
- Lead with the verb (`Automatically sets`) — implies zero work.
- Name the sites by brand (`Amazon, eBay, GitHub`) — recognition triggers click-through.
- Number the breadth (`40+ sites`) — proof of scope.
- End with trust signals (`Free. No tracking.`) — removes the last objection before install.

**Variants to A/B:**
- `Stop clicking "Next." Auto-selects "100 per page" on Amazon, eBay, GitHub, and 40+ sites. Free, no tracking, open source.`
- `Show more results per page automatically. Works on Amazon, eBay, Walmart, GitHub, and 40+ sites. Free + open source.`

Run a 2-week test with one swap, look at CTR delta in the dashboard.

### Long description

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

**Why this structure works:**
- **Hook** in sentence 1 with three brand names (Amazon, eBay, Stack Overflow) for keyword density and credibility.
- **WHAT IT DOES** in 22 words. CWS truncates above-the-fold to ~150 chars; everything important is in the first paragraph.
- **SUPPORTED** as a bullet list with 30+ brand names. Each one is a substring-match opportunity for "[brand] extension" / "[brand] more results per page" searches.
- **WHY IT'S BETTER** anchors against the named competitors — they search for those names; we appear with a direct comparison.
- **PRIVACY** section closes the "shady extension" objection that's especially strong post-Honey/Pi-hole scandal.
- **CUSTOMIZE** signals depth without forcing users to learn anything.
- **CTA** ends on the price anchor.

### Keywords to land naturally (2–3% density, no stuffing)
`page size`, `per page`, `items per page`, `results per page`, `show more results`, `pagination`, `Amazon`, `eBay`, `productivity`, `shopping extension`, `comparison`, `search results`.

### Anti-patterns
- Don't list keywords as a "Keywords:" block — Google deprecated this pattern and CWS reviewers flag it.
- Don't link to "Buy Pro version" or similar — flags the listing as deceptive (we're free anyway).
- Don't repeat your brand name 15 times.
- Don't use ALL CAPS for emphasis (use it only for section headers as above).

---

## 3. Visual Assets (the listing's other 50%)

5 screenshots (1280×800 each), 1 small promo tile (440×280), 1 marquee tile (1400×560, optional but recommended).

### Screenshot ordering (matters a lot — #1 is shown 3× more than #2)

1. **Hero "before / after"** — Amazon search split-screen. Left: "Showing 1-16 of 5,000." Right: "Showing 1-60 of 5,000." Big yellow `mpsAccent` arrow "16 → 60." Overlay text: *"Automatic. Every page. Every site."*

2. **Site grid** — 6×4 wall of recognizable logos (Amazon, eBay, Etsy, Walmart, Target, Best Buy, Costco, Home Depot, Lowe's, Wayfair, Nordstrom, Macy's, Kohl's, ASOS, Nike, GitHub, Stack Overflow, npm, Bing, DuckDuckGo, etc.) with the headline *"Works on 40+ sites out of the box."*

3. **The popup** — clean shot of the extension popup with the purple gradient header, the global toggle, the per-site row, the "Report This Site" button. Caption: *"Tweak per-site if you want. You probably won't need to."*

4. **Smart detection** — a generic e-commerce site (use a screenshot of a niche store like Bonobos or BestBuy.ca that isn't in the site list) with a small "Detected automatically" annotation in the corner. Caption: *"A smart-detect fallback handles the long tail."*

5. **Privacy / open source** — text-heavy slide on white background: *"No accounts. No tracking. No remote servers. MIT licensed. ~600 lines of code you can read."* Below: small purple GitHub icon + repo URL.

### Promo tile (440×280)
- Vertical gradient: `mpsPrimary` → `mpsPrimaryDeep`.
- Foreground: big white "100" with a downward arrow icon.
- Bottom: "Max Page Size" in white, 600 weight.
- Optional bottom strip: "Stop clicking 'Next.'" in `mpsAccent` yellow.

### Marquee tile (1400×560, only used for "Featured" placement)
- Same gradient.
- Three frames side by side showing "16 → 60" on Amazon, eBay, GitHub.
- Brand mark on the right third.
- Tagline: *"Install once. Browse smarter forever."*

### Render specs
- 1280×800 PNG, sRGB, ≤4MB each.
- Use system fonts (`-apple-system, BlinkMacSystemFont`) so screenshots look native.
- Numbers in tabular figures.
- Don't include the browser chrome (no URL bar, no tabs) unless it serves the comparison.

---

## 4. Category, Languages, Permissions

### Category
- **Primary:** Productivity
- **Secondary (if dual-listing allowed):** Shopping

Productivity outranks Shopping for our target queries; shopping is a complementary place to be discovered by deal-hunters.

### Languages
Launch with English (en-US) only. After Day 60, if rank is plateauing, localize the listing (not the extension UI) into:
- German (de) — uAutoPagerize has a strong DE user base; we can steal that.
- French (fr) — Amazon.fr is in our site list.
- Japanese (ja) — Amazon.jp is supported; ja CWS has weaker English-extension penetration.
- Spanish (es) — Mexico + Spain.

Cost: ~$80 per language for a careful localization (DeepL + human review of short/long description). Worth it only if WAU is growing >5%/week and we want to expand the pool.

### Permissions justification (copy verbatim into developer dashboard)
- `storage` — Stores user preferences (per-site enable/disable, custom URL parameters). All data is local to the user's browser.
- `activeTab` — Used to display the current site in the popup and to apply per-site overrides on demand. No background tab access.
- `host_permissions: ["<all_urls>"]` — Required because the extension's smart detector needs to scan page-size selectors on any site the user visits. **No data is collected or transmitted.** Everything runs in the content script; nothing is sent to any server.

### Privacy policy (required)
Host at `iancmaccallum.dev/max-page-size/privacy` (or `maxpagesize.com/privacy` once the domain is live). Required because we use `storage` and `<all_urls>` even though we collect nothing.

**One-page contents:**
1. We collect nothing.
2. We send nothing to any server.
3. Preferences are stored in `chrome.storage.sync` (Google syncs that across your devices; we never see it).
4. Extension is open source. Repo URL.
5. Contact email for questions.

The link must be live before submitting for review or the listing will be rejected.

---

## 5. Reviews Strategy (the rating + velocity lever)

### Goal
Land 5 reviews in launch week (legitimacy threshold), 15 by Day 30, 60 by Day 90. Maintain ≥4.5 average.

### Tactics
- **Pre-launch:** soft-ask 5–10 friends to install and leave **honest** reviews. Honest is the keyword — fake/paid reviews get the listing pulled. "Did you find it useful? If so, would you leave a quick honest review? If not, tell me what's missing so I can fix it" is the script.
- **Launch week:** every HN/PH/Reddit comment that says "this is great" gets a polite reply ending with *"if you like it, a quick CWS review helps a ton."* Never beg; always offer.
- **In-product (after Day 30):** once the extension has successfully maxed the page 25+ times for a user, show a one-time, dismissible *"Enjoying it? Rate on the Chrome Web Store"* badge in the popup. Never a modal, never blocking, never repeating.
- **After each site-pack release:** post a "Just shipped support for [X, Y, Z]" update in the listing's "Changelog" section and on r/chrome_extensions; this surfaces the extension to existing users and prompts revisits.

### Responding to reviews
- **Every review, within 48 hours.** Polite, factual, no defensiveness.
- **For 5-star reviews:** *"Thanks! If there's a site you want added, the popup has a 'Report This Site' button — goes straight to me."*
- **For 1-2-star reviews ("doesn't work on [site]"):** *"Sorry about that — adding [site] to the next release (due [date]). I'll reply here with the version number when it ships."* Then actually do it, and update the reply.
- **For 1-star reviews ("seems sketchy", "asks for too many permissions"):** *"Totally fair to be cautious. The extension is open source — every line is at github.com/iancmaccallum/max-page-size. The `<all_urls>` permission exists because we need to look for the page-size dropdown on whatever site you visit; nothing is sent anywhere. Happy to answer more questions."* Don't argue.
- **For obvious troll reviews:** report via the dashboard, then ignore.

Public review responses are visible in search and contribute to trust signals. Treat them as listing copy.

---

## 6. Update Cadence (the "fresh" signal)

| Version | When | What ships |
|---|---|---|
| 1.0.0 | Launch | Initial release |
| 1.0.1 | Launch + 5 days | Bug fixes from review feedback |
| 1.0.2 | W2 | Cover 3 sites that came in via "Report This Site" |
| 1.1.0 | W6 | Site pack: 10 new sites + optional infinite-scroll opt-in |
| 1.1.x | Every 4 weeks | Site packs, indefinitely |
| 1.2.0 | When 100k WAU | New surface (could be Firefox, could be sharable rules) |

**Key rule:** never let "Last updated" cross 60 days without a version bump, even if it's just a single new site.

---

## 7. Launch-Week Acquisition Plan (CWS-side)

The first 7 days set the algorithm's view of the extension for months. The plan:

**Day 0 (launch):**
- Listing goes live first thing in the morning.
- Show HN posts 8am PT.
- Product Hunt scheduled 12:01am PT.
- r/InternetIsBeautiful 3pm PT.
- X launch thread morning of.
- 5 pre-warmed friend reviews drop in over 24 hours.

**Day 1–3:**
- All 5 launch channels driving installs to a single CWS listing URL with `?utm_source=hn` etc. (CWS supports this — track in dashboard).
- Reply to every CWS review and every external comment within 30 min during prime hours.
- Pin a Twitter post with the demo GIF.

**Day 4–7:**
- r/chrome_extensions post.
- r/productivity post.
- Email 3 listicle writers.
- Ship 1.0.1 with any review-driven bug fixes — bumps "Last updated."

**Day 7 review:**
- Pull the dashboard. Look at: installs, WAU, rating, search impression rank for the 4 target queries.
- If rating dips below 4.3, audit recent reviews and ship a focused fix release within 48 hours.
- If installs are >2k, prepare to handle the "Featured" spike (server-side: nothing; review-response-side: have a template ready).

---

## 8. Long-Term SEO Plays (Day 30+)

### Site-pack release loop (Initiative 5 in [strategy.md](strategy.md))
Each release adds keyword surface area in the long description. "Now supports Wayfair, Costco, Best Buy" introduces three new brand-name matches.

### "Compare to AutoPagerize / Pagetual" page on the landing site
Not in the listing, but linked from it. When someone Googles "AutoPagerize alternative," we want to rank — the landing-page comparison content compounds.

### Translated listings (see §4)
Each language is a fresh slot in regional CWS rankings. German, French, Japanese, Spanish are the four highest-ROI.

### "Recommended for you" / "Editor's Pick" pipeline
Not directly applicable for — but rank + reviews + recent updates is the formula CWS editors use. By Day 90 we should be candidate-eligible. Send a short note to `chrome-web-store-feedback@google.com` introducing the extension once we hit 5k WAU and 4.6+ rating; no guarantees but it gets us in the queue.

---

## 9. Measurement

**From the developer dashboard (weekly):**
- Installs (new, uninstalls, net).
- WAU and WAU/install ratio (target 60% by Day 30, 65% by Day 90).
- Rating + review count + review velocity (reviews/week).
- Search impressions for each tracked query (do manual checks — there's no impression API; use incognito search weekly and log the rank).

**From the landing-page redirect (with UTM):**
- Source of CWS clicks (utm_source=hn / pH / reddit / direct).
- Click-through rate per source.

**From email inbox (manual):**
- Site reports received (target 50 by Day 30; this is also a quality signal — engaged users report sites).

### Tracked search queries
- `results per page` (high-volume, high-competition)
- `show more per page` (medium-volume, high-intent)
- `items per page` (medium-volume)
- `page size` (low-volume, low-competition — easy early win)
- `amazon results per page` (low-volume, very high-intent)
- `more results per page chrome` (low-volume, high-intent)

Manual rank-check process: every Monday, open an incognito CWS search for each query, screenshot the result, log the rank in a spreadsheet. Watch the trend over weeks, not days.

---

## 10. Kill Criteria

| Signal | After… | Action |
|---|---|---|
| Search rank for all 4 target queries still outside top 30 | 60 days | Rewrite the title. A/B the short description. Get more reviews. |
| Rating drops below 4.0 | Ever | Stop everything; audit reviews; ship fix release within 7 days. |
| WAU/install ratio below 40% | 30 days | The extension is uninstalling. Identify why — survey recent uninstallers via the landing page if needed. |
| Net install count flat or negative | 2 weeks | Listing problem (title, screenshot, short description) or external buzz dried up. Ship a site pack and re-engage Reddit. |
| Permissions warning panic in reviews | Any | Add a popup-first-run note explaining the permissions; consider switching to per-site `host_permissions` for the top 40 and opt-in `<all_urls>`. |

---

## 11. Common Reviewer Rejection Reasons (and how to dodge them)

Chrome Web Store review takes 1–3 business days; rejections add 2–7 days each. Pre-empt:

| Reason | Mitigation |
|---|---|
| Insufficient permissions justification | Use the verbatim block in §4. Each permission gets a one-sentence "why" and an "where the data goes." |
| Missing privacy policy | Host at the URL listed in §4. Live before submit. |
| Misleading claims | Avoid "the best," "the #1," any superlative. Stick to verifiable facts. |
| Unclear extension purpose | Single-purpose declaration: "Sets the page-size dropdown to its largest value." Tick the single-purpose checkbox. |
| Branding / trademark in name | "Max Page Size" is clean. Don't add "for Amazon" or any specific trademark in the name. |
| Screenshots show competitor branding without comparison context | Our site-grid screenshot uses competitor logos for *identification* (we work on their site). This is fine because we're not making claims; just listing supported sites. If pressed, replace logos with text. |

---

## 12. Bonus Tactic: Pre-Featuring

CWS editors browse for "Featured" candidates weekly. To get noticed:
1. Have all of: 4.5+ rating, 10+ reviews, 5+ polished screenshots, recent update, clear single purpose, complete privacy policy.
2. Email `chrome-web-store-feedback@google.com` with: the extension link, a one-paragraph "why your users would benefit," a single demo GIF link. Don't ask to be featured; introduce.
3. Re-introduce after major milestones (10k installs, 1.1 release with infinite-scroll, etc.).

Featured slots drive 5×–20× normal install velocity for ~30 days. The whole listing optimization above exists to qualify.
