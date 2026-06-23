# Max Page Size — Channel Mix

> Overview of all channels, ranked by priority. Each P0/P1 channel has its own deep-dive doc in this directory.

---

## 1. Ranked Channel Mix

| Rank | Channel | Type | Deep dive | Day-30 install target | Why this rank |
|---|---|---|---|---|---|
| **1** | Chrome Web Store search + recommendations | Owned listing | [chrome-web-store-optimization.md](chrome-web-store-optimization.md) | 1,200 | Largest pool, compounds forever, single biggest lever for a Chrome extension. |
| **2** | Hacker News (Show HN) | Karma spike | (covered here + `../marketing.md` §9.D) | 500 (launch day) | One shot, but a front-page run pays for itself for years (HN search rank + screenshot ammo for everything else). |
| **3** | Reddit (drip across 8 subs) | Karma steady | [communities.md](communities.md) | 800 | Highest *consistent* organic install driver for utility extensions. Long tail (posts keep converting for months). |
| **4** | Product Hunt | Karma spike | [product-hunt-launch.md](product-hunt-launch.md) | 400 | Less critical than HN for HN-savvy audiences, but reliable credentialing + listicle writers monitor PH. |
| **5** | Safari App Store search + recommendations | Owned listing | [safari-app-extension-listing.md](safari-app-extension-listing.md) | 200 | Small pool but uncontested — top 10 in Productivity is reachable. |
| **6** | Listicle / press (Lifehacker, MakeUseOf, Tom's Guide, Verge Installer) | Earned credentialing | (in [communities.md](communities.md) §5) | 0 launch / 1,500 by Day 60 | Long lead time, but one Lifehacker mention can drive 5k+ installs in a week. |
| **7** | X / Twitter | Build-in-public + reply | (covered here) | 200 | Useful for warm-up before launch and reply-guy mode after. Not a primary install driver. |
| **8** | GitHub `awesome-*` lists + cross-pollination with related extension authors | Earned distribution | (in [communities.md](communities.md) §6) | 100 | Slow drip; each accepted PR or mutual mention is permanent shelf space. |
| **9** | YouTube creator outreach | Earned | (in [communities.md](communities.md) §7) | 50 | High variance. Productivity creators occasionally pick up free utilities. Worth 1 hour/week of outreach. |
| **10** | Aggregator directories (alternativeto, chrome-stats, saashub, etc.) | Owned/earned | (covered here) | 50 | Submit once, forget. Free shelf space. |
| **11** | SEO / blog content (`maxpagesize.com/blog`) | Owned content | (covered here) | 0 launch / 200 by Day 90 | Long-payoff. Only worth doing once we have a domain and 2-3 site-pack releases under our belt. |
| **12** | Paid ads (Google, Meta, Twitter, Reddit) | Paid | — | 0 | **Not running.** Free product, zero unit economics. Revisit only if we ever launch a Pro tier. |

---

## 2. Channel Roles in the Funnel

```
              AWARENESS (the spike channels)
   ┌─────────────────────────────────────────────────┐
   │  Hacker News • Product Hunt • Reddit • X        │
   │  Lifehacker / MakeUseOf / Tom's Guide / Verge   │
   └─────────────────────────────────────────────────┘
                            │
                            ▼
                CONSIDERATION (the trust assets)
   ┌─────────────────────────────────────────────────┐
   │  Landing page • Demo GIF • GitHub repo          │
   │  Privacy policy • Open-source license badge     │
   └─────────────────────────────────────────────────┘
                            │
                            ▼
              CONVERSION (the owned listings)
   ┌─────────────────────────────────────────────────┐
   │  Chrome Web Store listing                       │
   │  Safari App Store listing                       │
   └─────────────────────────────────────────────────┘
                            │
                            ▼
                  RETENTION + EVANGELISM
   ┌─────────────────────────────────────────────────┐
   │  Site-pack release loop • Review responses      │
   │  "Report This Site" feedback flywheel           │
   └─────────────────────────────────────────────────┘
```

Each channel has exactly one job. **Hacker News is awareness, not conversion** — never put a store install button at the top of an HN post; it'll get flagged. **Chrome Web Store is conversion, not discovery** — don't write copy assuming the reader is curious; assume they were sent there by something that already convinced them.

---

## 3. Channel Notes (Brief — see deep-dive docs for tactics)

### Chrome Web Store (P0 — primary)
Title + WAU growth flywheel is the entire game. Update version every 4–6 weeks even for minor fixes — "last updated" date affects ranking and trust. Respond to every review within 48 hours.
**Deep dive:** [chrome-web-store-optimization.md](chrome-web-store-optimization.md).

### Safari App Store (P1 — secondary, uncontested)
Smaller pool but few competitors marketing actively. A simple, free, well-reviewed extension can rank top 10 in Productivity > Extensions quickly. Bonus: iOS Safari extensions are a near-vacuum.
**Deep dive:** [safari-app-extension-listing.md](safari-app-extension-listing.md).

### Hacker News (P0 spike)
One shot at the front page. Tuesday or Wednesday, 8–10am PT. Title: "Show HN: Max Page Size – a browser extension that auto-clicks '100 per page.'" First comment from maker within 5 min with backstory + technical detail.
**Tactics covered in:** [product-hunt-launch.md](product-hunt-launch.md) §5 (coordinated launch day).

### Product Hunt (P1 spike)
Tuesday launch. Tagline: "Stop clicking 'Next page.' Forever." Maker comment ready, 5 hunters lined up in advance.
**Deep dive:** [product-hunt-launch.md](product-hunt-launch.md).

### Reddit (P0 steady)
Eight subreddits, one post every 2–3 days, never duplicated copy. Disclose maker status. Reply for the first 6 hours of every post.
**Deep dive:** [communities.md](communities.md) §2–4.

### Listicle / press (P1 earned)
Real publications, real writers. Cold email gets through if it's short, specific, and useful. Pitch starts 2 weeks post-launch.
**Coverage:** [communities.md](communities.md) §5.

### X / Twitter (P2 supporting)
Pin launch thread with demo GIF. Reply-guy mode in search results for "amazon results per page", "pagination is annoying." Tag related extension authors (uAutoPagerize, RES, Stylus).
**Notes for ongoing posting:**
- Cadence: 2–3 product tweets/week post-launch (new sites added, milestone hits, funny pagination-in-the-wild observations).
- Never auto-DM. Never run ads.
- Reply length: under 200 chars. Always include the demo GIF or Chrome link, never both.

### GitHub `awesome-*` PRs (P2 evergreen)
- `sindresorhus/awesome` → `awesome-productivity` → submit.
- `awesome-chrome-extensions`, `awesome-userscripts`, `awesome-shopping`.
- `awesome-safari-extensions` (small but high-conversion).
- One PR per week for the first month, then quarterly.

### YouTube creator outreach (P2)
Target micro-influencers (5k–50k subs) in the productivity / tech-tips space. Cold email template:
> *"Subject: A free Chrome extension you might enjoy demoing"*
> *"Hi [Name], saw your [specific video] — the bit about [specific tip] was great. Built a free, MIT-licensed Chrome + Safari extension called Max Page Size that auto-selects the largest 'results per page' option on Amazon, eBay, GitHub, and 40 other sites. Demo GIF: [link]. No ask — just thought it might fit a future 'underrated extensions' video. Happy to send anything you'd need. — Ian"*

Track: which creators replied, who covered, what driving installs look like via UTM.

### Aggregator directories (P3 evergreen)
Submit on T+3 days, forget. List from `../marketing.md` §8:
- alternativeto.net (under AutoPagerize, Pagetual)
- chrome-stats.com (auto-indexed; submit a description)
- producthunt.com (covered)
- betalist.com
- saashub.com
- toolify.ai
- coolify.so / awesometools.io

### Light SEO / content (P3 long-payoff)
Only worth standing up after Initiative 1 ships. Then write:
- *"How to show more results per page on Amazon"* (intent: people Googling this exact phrase).
- *"How to view more items per page on eBay"* (same).
- *"How to disable Google's 'next page' button"* (curiosity intent → install).
- *"I built a Chrome extension to kill pagination — here's the smart-detect heuristic"* (HN follow-up post).
- *"The hidden settings on every shopping site"* (link-bait roundup).

Don't deep-invest in SEO until Day 60+. The compounding returns are real, but the upfront cost beats the upside in the first two months. If/when we do invest, see the (future) [seo.md](seo.md).

---

## 4. What We're Explicitly NOT Doing

- **No paid ads.** The product is free. Paid ads will never recoup; unit economics are zero. (Possible exception: a $200 Reddit ad experiment on r/Frugal *if* we want to test creative.)
- **No upsell / Pro tier (for now).** Killing the "100% free forever" pitch destroys trust positioning. Revisit only after 100k WAU.
- **No newsletter / Discord / community.** Sounds nice; isn't necessary for a single-purpose utility. The extension's job is to be installed and forgotten.
- **No telemetry, even anonymous.** It would be useful to know which sites users visit most, but the privacy posture is a feature. Don't trade it for product data.
- **No fancy onboarding.** First-run experience is "the extension is on; visit a supported site; it just works." Don't add screens.
- **No SEO blog before Day 60.** Premature; resources better spent on the demo GIF, the Safari listing, and Reddit drip.

---

## 5. Cadence Calendar (First 90 Days)

| Week | Activity | Channels touched |
|---|---|---|
| W-2 | Build assets. Submit to both stores. Draft copy. Soft-recruit reviewers. | CWS, SAS, landing page |
| W-1 | Soft launch to friends. Get 5 reviews. Warm-email 3 listicle writers. | CWS, press |
| W1 (launch) | Show HN + Product Hunt + landing page live. r/InternetIsBeautiful + X thread. | HN, PH, Reddit, X |
| W2 | r/chrome_extensions, r/productivity. Email listicle writers. Reply to every review. | Reddit, press, CWS |
| W3 | r/Amazon, r/Ebay, r/Frugal (one per day). Ship 1.0.1 with bug fixes. | Reddit, CWS |
| W4 | First site-pack release (10 new sites). Re-post on r/chrome_extensions. Recap blog post → HN. | CWS, Reddit, HN |
| W5 | Pitch Lifehacker / MakeUseOf. YouTube creator outreach (5 micro-influencers). | Press, YouTube |
| W6 | Version 1.1: infinite-scroll opt-in. r/macapps + r/ios Safari relaunch post. | CWS, SAS, Reddit |
| W7–W8 | Aggregator submissions, `awesome-*` PRs. r/webdev technical post about heuristic. | Aggregators, Reddit |
| W9–W10 | Second site-pack release. Cross-pollinator outreach. | CWS, X |
| W11 | First metrics review. Double down on best-converting channel. | All |
| W12 | Tom's Guide / Verge Installer pitch. Begin Firefox port if numbers warrant. | Press |

---

## 6. Kill Criteria (Per Channel)

| Channel | Reassess if… |
|---|---|
| Chrome Web Store | After 60 days: search rank not in top 20 for any of the 4 target queries → rewrite title and description. |
| Hacker News | If Show HN post sinks (<10 points in 30 min): do not re-submit. Pivot to PH + Reddit only. Try again with a follow-up "what I learned" post in W4. |
| Product Hunt | If <100 upvotes Day 1: don't re-launch on PH. Use the maker comment as a blog post instead. |
| Reddit | If 2 subreddit posts in a row get downvoted below zero: pause Reddit drip, audit copy, restart with different sub. |
| Safari App Store | If 90-day installs < 500: extension is fine; the channel pool is just small. Don't divert effort. |
| Listicle press | If 0 placements after 15 cold emails: rewrite the pitch, change the angle (technical → human-interest or vice versa). |
| X | If reply-guy mode drives <10 installs/week per measured: stop scheduling time for it; treat X as opportunistic only. |
| YouTube | If 0 creator pickups after 20 cold emails: stop outreach; rely on creators finding us organically. |
| SEO blog | If after Day 90 the blog has <500 sessions/week: deprioritize; the channel is too slow for our timeline. |
