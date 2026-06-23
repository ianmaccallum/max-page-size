# Max Page Size — Product Hunt + Coordinated Launch Day

> Product Hunt is the second-most-impactful spike day for a free indie extension (Hacker News is first). This is the operating manual for both, coordinated as a single launch event.

---

## 1. Strategic Foundation

### Why Product Hunt matters for an extension
- **Credentialing.** A top-5 of-the-day or top-3 weekly ranking is press-quotable for months ("Featured on Product Hunt").
- **Listicle pipeline.** Writers at Lifehacker, MakeUseOf, Tom's Guide, and Tech Crunch's "Top 10" desks browse PH daily for indie tool roundups. A PH spike often becomes a press placement 2–4 weeks later.
- **PH SEO.** The PH listing page itself ranks in Google for "max page size", "page size extension," "results per page chrome" within a few weeks. Backlink + content shelf.
- **Audience overlap.** PH audience = makers, designers, PMs, indie devs. Heavily overlapping with our Researcher and Developer segments (see [segments.md](segments.md)). They install, they tweet, they recommend internally.

### Why it ranks below Hacker News
- HN front page traffic is ~3× PH's *and* more technical (better fit for an MV3 / open-source pitch).
- PH upvotes can be gamed; HN moderates harder, so an HN win signals quality.
- PH leans toward "shiny SaaS launches" — we have to position carefully to not look out of place.

### The coordinated launch concept
**Single launch day** = HN + PH + r/InternetIsBeautiful + X thread + landing page live + 5 friend reviews drop on CWS — all within an 18-hour window. Each channel amplifies the others. Press writers see "this thing is everywhere today" and that's the moment they pitch it to their editor.

---

## 2. Pre-Launch Checklist (T-2 weeks)

Do not launch without every box ticked.

### Product
- [ ] Chrome Web Store listing live and reviewed for at least 5 days (so the algorithm has baseline data).
- [ ] Safari App Store listing live (or, if still in review, ready to "release on approval" same day as launch).
- [ ] All copy locked: title, short description, long description, screenshots, promo tile, marquee tile.
- [ ] 5 organic reviews on the CWS listing (friends + family who actually installed and tested).
- [ ] Latest version of the extension is the one in the store — no pending updates.
- [ ] "Report This Site" inbox is monitored (you'll get a flood within hours).

### Assets
- [ ] **Demo GIF** (1200×675, MP4 + GIF fallback, <8MB, 12s loop). This is the single most important asset. Do not launch without it.
- [ ] Hero static screenshot (1280×800, Amazon before/after).
- [ ] Sites-supported grid (1200×630, also serves as OG image).
- [ ] Three additional screenshots: popup, smart-detection in action, privacy.
- [ ] App icon at 512×512 (PH), 240×240 (PH thumbnail), 128×128 (CWS), 1024×1024 (App Store).

### Landing page
- [ ] Live at the production URL (`maxpagesize.com` or fallback) with HTTPS.
- [ ] Headline matches launch copy.
- [ ] Two install buttons above the fold (Chrome, Safari).
- [ ] Demo GIF embedded autoplay-on-scroll.
- [ ] Open Graph image set to sites-supported grid.
- [ ] UTM-aware install redirects: `?utm_source=hn`, `?utm_source=ph`, etc.

### Posts (drafted, not yet posted)
- [ ] Show HN title + body.
- [ ] PH tagline + first-comment maker story.
- [ ] r/InternetIsBeautiful title + body.
- [ ] X launch thread (8 tweets, demo GIF in #1).
- [ ] r/chrome_extensions post (for T+1).
- [ ] r/productivity post (for T+2).

### People
- [ ] 5 Product Hunt hunters lined up to comment in the first hour (DM them ahead of time with the time, link, and a "honest feedback, no upvote ask" note).
- [ ] 10 specific power-users on X DMed pre-launch with "hey, building this thing for the use case you complain about — would love your honest take when it ships."
- [ ] 3 listicle writers warmed up via "I built this, thought you'd find interesting" emails 2 weeks prior (no ask yet).

### Operational
- [ ] Calendar block: 8am PT to 10pm PT on launch day, no other meetings.
- [ ] Phone notifications for every channel where you posted (CWS reviews, HN, PH, Reddit, X).
- [ ] Templated reply snippets saved for common questions (see §6).

---

## 3. The Launch Day Schedule

Times in PT. Tuesday or Wednesday only. Avoid US holidays. Avoid Apple keynote weeks. Avoid days a major Apple/Google announcement is expected.

| Time | Action | Channel |
|---|---|---|
| **12:01 AM** | Product Hunt post auto-publishes (scheduled prior). | PH |
| **12:05 AM** | Maker comment posted on PH. | PH |
| **12:15 AM** | DM the 5 hunters: "Live now — would love your honest feedback." | PH (via DM) |
| **8:00 AM** | Show HN goes live. | HN |
| **8:05 AM** | Maker comment on HN (within 5 min of post going live). | HN |
| **8:10 AM** | X launch thread (tweet #1 with demo GIF). | X |
| **8:15 AM** | DM 10 pre-warmed power-users on X. | X (DM) |
| **9:00 AM** | First hourly checkpoint: respond to every HN comment so far. Respond to every PH comment so far. | HN + PH |
| **10:00 AM** | Second checkpoint: same. Note rank position; screenshot if good. | HN + PH |
| **11:00 AM** | r/InternetIsBeautiful post scheduled to go live. | Reddit |
| **12:00 PM** | Lunch — but keep notifications on. Reply to anything urgent within 15 min. | All |
| **1:00 PM** | Third checkpoint. By now: HN trajectory is clear (front page or not). | All |
| **2:00 PM** | Send personal "we're live" follow-up email to the 3 warmed listicle writers with: PH link, HN link, current installs, demo GIF. | Press |
| **3:00 PM** | Tweet a "PH ranking update" if doing well, or a "first 6 hours" milestone post regardless. | X |
| **4:00 PM** | Continue replying. Specifically check Reddit thread velocity. | All |
| **6:00 PM** | Final daytime checkpoint. By now PH ranking is mostly set for the day. | All |
| **8:00 PM** | Evening update tweet with the demo GIF and a "what shipped today" recap. | X |
| **9:00 PM** | Reply to any remaining open threads. | All |
| **10:00 PM** | Stop. Sleep. The PH 24-hour cycle ends at 12:01 AM PT — you can't post-game it. | — |

---

## 4. Product Hunt — Listing Setup

### Product name
**Max Page Size**

### Tagline (60 char limit)
**`Stop clicking "Next page." Forever.`** (35 chars)

**Alternatives:**
- *"Auto-clicks 'show 100 per page' on every site."* (49 chars)
- *"The Chrome + Safari extension every shopper installs."* (54 chars)

### Description (260 chars displayed in feed, ~1,500 chars in detail view)
> **Max Page Size auto-selects the largest "results per page" option on Amazon, eBay, GitHub, Walmart, and 40+ other sites. Plus a smart fallback for everything else. Free, open source, native Safari, no tracking. Install once, browse smarter forever.**

(245 chars.)

### Topics (pick 4)
- Browser Extensions
- Chrome Extensions
- Productivity
- Shopping

### Media (in order)
1. **Demo GIF** (the 12-second loop) — autoplays in feed.
2. **Sites-supported grid** (1200×630).
3. **Popup screenshot.**
4. **Smart-detect screenshot.**
5. **Privacy slide.**

### Launch options
- **First-time maker?** Tick yes if it's your first PH launch (gets you a small badge that humanizes the post).
- **Hunters:** if a Hunter wants to hunt it on your behalf, accept — Hunter-hunted posts get a small algorithmic boost. But don't pay anyone to "hunt" your product; PH cracks down on this.
- **Maker bio:** "Indie dev. Previously shipped [other projects]. github.com/iancmaccallum."

### Maker comment (post within 5 min of launch)

```
Hi Hunters,

Maker here. I built Max Page Size because I was changing the "results
per page" dropdown on Amazon roughly 20 times a day and finally decided
to automate it.

It's intentionally tiny. One job: visit a site with a results-per-page
dropdown, pick the biggest option. ~40 sites are hand-tuned (Amazon,
eBay, GitHub, Walmart, etc.) and a generic fallback handles the rest.

Why not just use an infinite scroll extension? Two reasons:
1. Infinite scroll downloads more content as you scroll. We change the
   first request so the entire list is there immediately.
2. Ctrl-F works. Page-saves work. Screenshots make sense.

Free, open source (MIT), no tracking, MV3. Safari version is also live
today — native iPhone, iPad, and Mac.

Would love your feedback — especially: what sites should I add next?
The "Report This Site" button in the popup goes straight to my inbox.

Chrome: [link]
Safari: [link]
Source: github.com/iancmaccallum/max-page-size
```

### Replies — house style
- **First 6 hours:** reply to every comment within 20 minutes.
- **For "this is great, installed":** *"Thank you! If you find a site I should add, the popup has a 'Report This Site' button — goes straight to me."*
- **For "how is this different from [competitor]?":** redirect to the "infinite scroll vs us" answer in the maker comment, then add: *"Different solutions. Sometimes complementary — I personally run both."*
- **For "why is it free?":** *"Because charging would mean paid acquisition, and the privacy posture is more valuable to me than the revenue. GitHub Sponsors in the footer if you want to throw a coffee."*
- **For obvious spammers asking "want to swap upvotes?":** ignore. PH bans accounts that engage with vote rings.

---

## 5. The Coordinated Launch — Per-Channel Detail

### Hacker News
**See [communities.md](communities.md) §4** for the full Show HN template, first-comment, and engagement rules. Brief recap:
- Title: `Show HN: Max Page Size – a browser extension that auto-clicks "100 per page"`
- Post 8–10am PT Tue/Wed.
- Maker comment within 5 min.
- Reply within 30 min for first 6 hours.

### r/InternetIsBeautiful
**See [communities.md](communities.md) §3** for the full template. Brief recap:
- Title: *"I made a browser extension that automatically clicks '100 per page' on shopping sites"*
- Demo GIF embedded.
- Disclose maker status.
- Post 3pm PT — catches both East-Coast end-of-workday and West-Coast lunch.

### X / Twitter — the launch thread

```
1/ Tired of clicking "Next page" 20 times to compare prices on Amazon?

I shipped a free Chrome + Safari extension that auto-clicks "100 per
page" on ~40 sites and falls back to a smart detector on the rest.

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

6/ Safari version is live today — iPhone, iPad, and Mac.
Apparently I'm one of about 12 people who ship Safari extensions.

7/ Chrome: [link]
Safari: [link]
GitHub: [link]
Product Hunt: [link]

8/ Tell me what site I should add next. The "Report This Site" button
in the popup goes straight to my inbox.
```

**Pinning:** pin tweet #1 to your profile for 7 days.
**Engagement:** retweet your own thread once at 2pm PT and once at 7pm PT to surface for different time zones.
**Quote replies:** quote-reply to anyone who comments positively; this surfaces their handle to your followers.

---

## 6. Reply Snippets (Save These — You'll Use Them All Day)

### "How does this differ from [AutoPagerize / Pagetual / Infy Scroll]?"
> "AutoPagerize and Pagetual load more content as you scroll, which breaks Ctrl-F, doubles fetches, and eats memory. Max Page Size changes the first request so the entire list is already there. Different solution; sometimes complementary — I personally run both."

### "Why don't you just use the URL parameter directly?"
> "Some sites do use URL params (eBay's `_ipg`, Amazon mobile's `count`) and the extension does rewrite those. Most sites only let you change it via a JS-driven `<select>`, which the extension dispatches a `change` event on. The smart-detect fallback handles both cases."

### "Does it work on [Site X]?"
> "Not yet — but the popup has a 'Report This Site' button. Reports come straight to me; I ship a site pack every 4 weeks. Open a PR on GitHub if you want it faster."

### "Will this break [some feature on site X]?"
> "Shouldn't — we only change the page-size selector value and re-dispatch a `change` event. Everything else on the page works normally. If it does break something, hit the 'Disable for this site' toggle in the popup and email me what broke; I'll fix it."

### "Is it really open source?"
> "MIT licensed. Full source: github.com/iancmaccallum/max-page-size. Content script is ~600 lines you can read in 10 minutes."

### "How do you make money?"
> "I don't. It's free, MIT-licensed, no upsell, no tracking. There's a GitHub Sponsors link in the footer of the landing page if you want to throw a coffee."

### "Why no Firefox?"
> "On the roadmap — MV3 port is mostly mechanical from the current code. If Chrome + Safari grow enough that Firefox demand shows up in the inbox, it goes next."

### "Why no Android?"
> "Chrome on Android doesn't support extensions. If/when it does, this will be the first thing I ship there."

### "The permissions list is scary"
> "Fair to be cautious. `<all_urls>` is needed because the smart-detect has to look for a page-size dropdown on whatever site you visit; we don't know which sites in advance. Nothing is sent anywhere — the entire content script is open source and you can audit it. Privacy policy at [link]."

### "Can I add my own site?"
> "Two ways: open the popup, scroll to 'Custom URL parameters,' and add your own (e.g., `?count=50`). Or open a PR on GitHub adding to `siteConfigs.js` — those are merged within a day or two."

---

## 7. Day-After Plan (T+1)

### Morning
- **PH ranking is now final.** Screenshot the position regardless.
- **HN post:** if still on front page, keep replying. If on page 2+, the spike is over — pivot to maintenance.
- **CWS dashboard:** check install + WAU + review count. Compare to pre-launch baseline.
- **Reddit r/InternetIsBeautiful:** thread should still be live. Reply to overnight comments.

### Mid-day
- **Post on r/chrome_extensions** (separate post, technical angle — see [communities.md](communities.md) §3).
- **Email the listicle writers:** *"Quick follow-up: launched yesterday, here's the numbers (PH rank #X, HN front-page-N-hours, Y installs, Z 5-star reviews). Reposting demo GIF in case useful: [link]. No pressure to cover."*

### Afternoon
- **Process site reports.** You'll have 20–50 emails. Sort by frequency; the top 5 are the next site pack.
- **Ship a 1.0.1** with any review-driven bug fixes from launch day. Bumps "Last updated" date in CWS.

### Evening
- **Personal recap tweet:** "24 hours after launching Max Page Size: [N] installs, [M] reviews, ranked #X on Product Hunt, [Y] hours on HN front page. Thanks to everyone who installed."
- **Write the W4 "what I learned launching a free Chrome extension" blog post outline** (you'll publish it as a fresh HN post in 3 weeks for a second front-page shot).

---

## 8. Measurement

### Day-1 targets
| Metric | Target | Stretch |
|---|---|---|
| Chrome installs | 500 | 1,500 |
| Safari installs | 50 | 200 |
| PH rank (end of day) | Top 10 | Top 3 |
| PH upvotes | 200 | 600 |
| PH comments | 30 | 80 |
| HN points | 100 | 400 |
| HN front-page time | 1 hour | 6+ hours |
| Reddit r/IIB upvotes | 200 | 1,000 |
| X thread engagement | 100 likes | 1,000 likes |
| 5-star CWS reviews | 5 | 15 |

### 72-hour targets
| Metric | Target | Stretch |
|---|---|---|
| Chrome installs | 2,000 | 5,000 |
| Safari installs | 200 | 500 |
| CWS rating | 4.5+ | 4.7+ |
| CWS review count | 10 | 30 |
| Listicle inquiries | 1 | 3 |
| YouTube creator inquiries | 0 | 2 |

### Where to log
- Spreadsheet tab "Launch Day" with hourly install counts.
- Spreadsheet tab "Press Inquiries" with writer / pub / date / pitch sent / outcome.

---

## 9. Anti-Patterns

- **Don't ask for upvotes.** PH actively bans products that do; HN flags posts as "voting manipulation."
- **Don't ship a new version on launch day.** Pre-load 1.0.0 a week prior; ship 1.0.1 only on T+1 if there's a real bug.
- **Don't post on Black Friday week, US holidays, or Apple/Google keynote weeks.** Signal:noise is wrong.
- **Don't launch on a Friday.** PH 24-hour cycle ends Saturday morning when nobody is browsing.
- **Don't put launch links in your email signature, Slack status, Discord profile, etc.** That's "stealth marketing" by PH standards.
- **Don't post the PH link on r/SideProject or r/Entrepreneur first** — those audiences over-index on competing PH launches and won't engage. They also see through cross-promotion immediately.
- **Don't argue with negative PH comments.** Acknowledge, fix if real, move on. Argumentative replies tank the entire thread's algorithmic visibility.
- **Don't engage with paid "PH boost services."** They get accounts banned and products demoted, sometimes permanently.

---

## 10. If The Launch Underperforms

Realistic floor for a free utility extension with a good demo GIF:
- PH: 50 upvotes, rank #20–30.
- HN: 30 points, briefly on /show but never on front page.
- Reddit: 100–300 upvotes on r/IIB, less elsewhere.
- Chrome installs Day 1: 200–500.

If the numbers come in at this floor:

1. **Don't re-launch the same posts.** PH/HN/Reddit all flag duplicates.
2. **W2:** post a *different* angle on HN — "I shipped a smart-detect heuristic for page-size selectors; here's the code." Lead with the engineering, not the product.
3. **W3:** post the recap blog ("What I learned launching a free Chrome extension") as a fresh HN submission. Different post, allowed.
4. **W4:** ship the first site pack and re-post on r/chrome_extensions with the new sites — that re-engages existing users and surfaces to new ones.
5. **Stay patient.** Free-utility extensions often grow on a 6-month curve: 500 installs Month 1, 5k Month 6, 25k Month 12. The launch day is one signal, not the whole story.

The Chrome Web Store SEO sprint ([chrome-web-store-optimization.md](chrome-web-store-optimization.md)) compounds regardless of launch-day numbers. Treat launch day as ignition, not the whole engine.
