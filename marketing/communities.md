# Max Page Size — Communities, Reddit & Press

> The Karma channel for free indie tools. Reddit, Hacker News, Indie Hackers, niche forums, and the listicle press that monitors them. This is the operating manual for the drip campaign and the press outreach loop.

---

## 1. Strategic Foundation

### Why this channel matters most after CWS
- The Chrome Web Store algorithm rewards **WAU + reviews**. Reddit, HN, and listicles drive both, simultaneously.
- Communities convert at 5–15% (link click → install), several multiples better than paid social would for a free utility.
- Posts compound: a single r/InternetIsBeautiful post with 2k upvotes keeps driving installs for months via Google Image search and subreddit "Top of all time."
- Press placements credential us for *other* press placements (a Lifehacker mention makes Tom's Guide more likely to cover us).

### The rules of engagement
1. **Disclose maker status.** Reddit hates stealth marketing more than anything. Always say "I built this." Always.
2. **Tailored copy per subreddit.** Never cross-post the same title and body — looks spammy, gets removed, can ban your account.
3. **Active for the first 6 hours.** Reply to every comment within 30 minutes during prime hours. Karma rewards engagement velocity.
4. **One subreddit at a time.** Space posts 2–3 days apart. Carpet-bombing 8 subs in a day is a moderator-coordinated ban risk.
5. **Don't ask for upvotes.** Don't even hint. Ask for feedback, bug reports, site requests.
6. **Pre-warm 5 reviews before going public.** A post that drives traffic to a 0-review CWS listing converts poorly; 5 reviews is the legitimacy threshold.

---

## 2. The Subreddit Ladder (Posting Order)

Run in this exact order. Each prior post buys credibility for the next.

| # | Subreddit | Members | Day | Angle | Expected install lift |
|---|---|---|---|---|---|
| 1 | **r/InternetIsBeautiful** | 16M | Launch day, 3pm PT | Demo GIF, no pitch | 1,500–5,000 |
| 2 | **r/chrome_extensions** | 80k | Launch + 1 day | Builder-to-builder, technical | 300–800 |
| 3 | **r/productivity** | 2M | Launch + 2 days | Productivity tip framing | 500–1,500 |
| 4 | **r/Frugal** | 3M | Launch + 3 days | Comparison shopping superpower | 400–1,200 |
| 5 | **r/BuyItForLife** | 3M | Launch + 4 days | Research tool framing | 300–800 |
| 6 | **r/Amazon** | 1M | Launch + 5 days | Site-specific Amazon angle | 200–600 |
| 7 | **r/Ebay** | 400k | Launch + 6 days | Site-specific eBay angle | 100–400 |
| 8 | **r/macapps** | 150k | W2 (after Safari live) | Safari extension angle | 200–500 |
| 9 | **r/webdev** | 3M | W3 | Technical post about smart-detect heuristic | 200–500 |
| 10 | **r/accessibility** | 30k | W4 (after a11y audit) | "Fewer clicks for a11y" angle | 50–200 |

If a single post lands big (>1k upvotes), wait an extra week before the next one — let the buzz dissipate so the next post lands on a fresh-feeling audience.

---

## 3. Per-Subreddit Post Templates

### r/InternetIsBeautiful

**Title:** *"I made a browser extension that automatically clicks '100 per page' on shopping sites"*

**Body:**
```
[demo GIF embedded]

Free, open source, no signup. Works on Amazon, eBay, Etsy, GitHub, and
about 40 other sites out of the box, with a generic fallback for
everything else.

Disclosure: I'm the maker.

Chrome: [link]
Safari (iPhone, iPad, Mac): [link]
Source: github.com/iancmaccallum/max-page-size
```

**Why it works:** title focuses on the *action* (clicking "100 per page") which is concrete; doesn't sell, demonstrates. Demo GIF is doing 90% of the work. Disclosure is up front to dodge mod removal.

---

### r/chrome_extensions

**Title:** *"[Free, MV3, Open Source] Max Page Size — auto-selects the largest 'results per page' option on 40+ sites"*

**Body:**
```
Hey r/chrome_extensions, builder here. Shipped my first extension this
week and wanted to share both the result and the heuristic in case it's
useful to anyone building something similar.

WHAT IT DOES
When you load a paginated page, it looks for the "results per page"
<select>, picks the largest numeric option, dispatches a change event.
Done.

THE INTERESTING PART (smart-detect fallback for unknown sites):
- Scan every <select> on the page
- Build a text signature from name/id/aria-label/label/parent
- Match against page-size keywords (per_page, results, count, limit)
- Validate the option values look like a real pagination ladder
  (10/25/50/100)
- Pick the max, dispatch change event

Surprisingly low false-positive rate. ~600 lines of content script.

MV3, no remote calls, no analytics, MIT licensed. ~40 sites in the table
(full list in the GitHub README).

Chrome: [link]  Safari: [link]  Source: [GitHub]

Happy to take PRs for new sites — or just bug reports via the "Report
This Site" button in the popup.
```

**Why it works:** Builder-to-builder voice. Technical detail. No hard sell — the audience converts on the engineering, not the marketing.

---

### r/productivity

**Title:** *"I built a Chrome extension that auto-clicks 'show 100 per page' on Amazon, GitHub, and 40 other sites. Surprised this didn't already exist."*

**Body:**
```
[demo GIF]

The 30-second pitch:
- Every shopping site defaults to showing 16-24 results per page.
- That's a design choice, not a limit. Most have a "100 per page"
  dropdown buried in the corner.
- I shipped a free extension that auto-selects the biggest option on
  every site that has one — Amazon, eBay, Etsy, Walmart, GitHub, Stack
  Overflow, and 40 others. Plus a fallback for sites I haven't tuned
  manually.

I built it because I noticed I was changing the dropdown 15+ times a day
while shopping for an apartment. Three months later it's still my most-
used "weekend project."

Disclosure: I'm the maker.

Chrome: [link]
Safari: [link]
Source: github.com/iancmaccallum/max-page-size

Curious what other paginated sites people would want covered next.
```

**Why it works:** "Surprised this didn't already exist" is the productivity-Reddit dopamine hit. Personal story creates trust. Open question at the end invites engagement (which the algorithm rewards).

---

### r/Frugal & r/BuyItForLife

**Title:** *"Comparison shopping tip: a free browser extension that auto-loads 100 items per page on Amazon, eBay, Walmart"*

**Body:**
```
[demo GIF]

If you do a lot of comparison shopping, you've probably noticed that
clicking "Next page" 5 times to see all the options is the worst part of
the process. Most sites let you change the page size to 100 — but you
have to remember to do it every time.

I built a free Chrome + Safari extension that does it automatically on
~40 sites (Amazon, eBay, Etsy, Walmart, Target, Best Buy, Costco, Home
Depot, etc.). One install, then every product list expands by default.

Why I think it fits frugal/BIFL specifically:
- See more options on one page → easier Ctrl-F for the exact spec
- Sort/filter doesn't reset your pagination
- Faster price comparison across listings

Free, open source, no tracking. Disclosure: maker.

Chrome: [link]
Safari: [link]
```

**Why it works:** Subreddit-specific framing. Doesn't try to sell on technical detail — sells on the buyer-research workflow.

---

### r/Amazon / r/Ebay (similar template, different brand)

**Title (r/Amazon):** *"Free Chrome + Safari extension: never click 'Next page' on Amazon again"*

**Body:**
```
[demo GIF showing Amazon search going from 16 → 60 results per page]

Built this because I was tired of clicking through 4 pages every time I
shopped for anything on Amazon. It auto-selects the largest "items per
page" option (60 on Amazon) the moment the search loads.

Works on .com, .co.uk, .ca, .de, .fr, .jp. Also handles eBay, Walmart,
Target, GitHub, and ~35 other sites.

Free. Open source. No tracking.

Chrome: [link]
Safari: [link]
GitHub: [link]

Disclosure: I'm the maker.
```

**Why it works:** Site-specific Reddit communities convert better than horizontal ones because the demo is *literally* their site. The GIF lands harder.

---

### r/macapps

**Title:** *"Just shipped a free Safari extension: auto-show more results per page on Amazon, eBay, GitHub, and 40+ sites (iPhone, iPad, Mac)"*

**Body:**
```
[demo GIF showing Safari on Mac]

Apparently I'm one of about 12 people who ship Safari extensions, so
here we are.

Max Page Size is a free Safari extension (and Chrome equivalent) that
auto-selects the biggest "results per page" option on shopping sites and
search engines. Out of the box: Amazon, eBay, Etsy, AliExpress, Walmart,
Target, Best Buy, Home Depot, GitHub, Stack Overflow, and 30 others.
Smart-detect fallback for the rest.

Native Safari on iPhone, iPad, and Mac. Works in private browsing. No
iCloud sync required. No accounts, no tracking, no remote servers — site
list ships in the bundle.

App Store: [link]
Chrome Web Store: [link]
Source: github.com/iancmaccallum/max-page-size

Disclosure: maker. Happy to answer enable-the-extension questions —
iOS Safari extension activation is famously rough and I tried to make
the onboarding screen handle it.
```

**Why it works:** Self-deprecating Safari joke is genuine voice. r/macapps appreciates the "native, no electron" angle.

---

### r/webdev

**Title:** *"How I built a generic 'smart detect' for page-size dropdowns across any website (open source, MV3 extension)"*

**Body:** Lead with the heuristic, not the product. r/webdev wants the engineering write-up. Link to the GitHub source and the live extension at the end.

```
Shipped a Chrome + Safari extension last month called Max Page Size. The
hand-tuned site configs were the easy part — the interesting question was:
how do you reliably detect a "results per page" dropdown on a site you've
never seen before?

Here's the heuristic that ended up working:

1. Find every <select> on the page.
2. For each one, build a "context signature" from:
   - name, id, aria-label
   - associated <label for=…> text
   - text content of the immediate parent (3 levels up)
3. Score against a keyword list: per_page, results, count, limit, rows,
   show, display, view. Multiplied for proximity matches.
4. Validate option values: must be 3–8 numeric options forming a
   monotonic ladder (10, 25, 50, 100) — not 16:9 / 4:3 (aspect ratio),
   not 1, 2, 3 (pagination index), not 5, 10, 25, 50, 100 GBP (price
   filter).
5. If two <select> elements score equally, prefer the one with the
   highest option-value range (page-size dropdowns trend "1 to many").
6. Pick the largest option, dispatch a 'change' event.

False positive rate is below 1% across the 200+ sites I've manually
tested. False negatives are higher — about 10% of paginated sites use
infinite scroll or buttons instead of <select>, which is a different
problem.

Full source: github.com/iancmaccallum/max-page-size/blob/main/chrome/src/content.js

Disclosure: maker. Open to PRs and welcome smarter scoring ideas.
```

**Why it works:** r/webdev rewards engineering posts. The product is incidental; the write-up earns the upvotes; the GitHub link drives installs from people who'd never click a marketing CTA.

---

### r/accessibility

**Title:** *"Free browser extension that reduces pagination clicks — useful for switch control / voice control / RSI"*

**Body:**
```
Built a free Chrome + Safari extension called Max Page Size that auto-
selects the largest "results per page" option on shopping sites, search
engines, and developer tools (Amazon, eBay, GitHub, Stack Overflow, and
~40 others). Smart-detect fallback for unfamiliar sites.

Why I'm posting here specifically: each pagination click can be 3-10x
more effortful for users on switch control, voice control, or with
hand/wrist injuries. Maxing out the page size up front means one scroll
instead of twenty navigations.

The popup is keyboard-navigable. ARIA labels everywhere. Respects
prefers-reduced-motion (no animations). Tested with VoiceOver on Safari
and NVDA on Chrome.

Free, open source, no tracking. Site list ships local — no remote
servers.

Chrome: [link]
Safari: [link]
Source: github.com/iancmaccallum/max-page-size

Disclosure: maker. Feedback on the popup's a11y or other ways to reduce
input is welcome.
```

**Why it works (and the prerequisite):** This post lands only if the a11y claims are actually true. Audit the popup with VoiceOver, NVDA, keyboard-only, prefers-reduced-motion *before* posting. Lying to r/accessibility is unforgivable and the moderators will catch it.

---

## 4. Hacker News (Show HN)

### When
Tuesday or Wednesday, 8–10am PT. Avoid Mondays (busy) and Fridays (low traffic). Avoid US holidays. **One shot at the front page.**

### Title
**`Show HN: Max Page Size – a browser extension that auto-clicks "100 per page"`**

Keep it short. "Show HN:" prefix is required. The en-dash + concise description is the HN convention.

### Post body
```
I got tired of changing the results-per-page dropdown on Amazon every
time I shopped. Built a Chrome/Safari extension that does it
automatically across ~40 sites (Amazon, eBay, Etsy, Walmart, GitHub,
Stack Overflow, etc.) and falls back to a generic detector on the rest.

The fallback is the part I'm most proud of: it scans every <select> on
the page, scores it against page-size keywords (per_page, results,
count, etc.), and checks whether the option values look like a real
pagination ladder before changing anything. So far, low false-positive
rate.

Free, open source (MIT), MV3, no remote calls, no analytics. The site
config table ships in the bundle — no phone-home for rule updates like
AutoPagerize / Pagetual.

Chrome: [link]
Safari (iOS + macOS): [link]
Source: github.com/iancmaccallum/max-page-size

Curious what edge cases I'm missing — especially on SPAs that re-render
the selector after a delay.
```

### First-comment-by-maker (within 5 min of posting)
```
Builder here. Happy to answer questions about the heuristic, the MV3
constraints (event-page lifecycle was the trickiest part), Safari
extension porting, or specific sites you want covered.

Two open issues I'd love feedback on:
1. Sites that render the dropdown after a delay via a SPA framework —
   we use MutationObserver to catch them, but on some sites the
   selector exists from t=0 but only becomes interactive later.
2. Sites where the largest option is "All" (text, not a number) —
   currently we skip them since the value isn't numeric, but "All"
   might be what the user actually wants. Open question.
```

### Engagement rules
- Reply to every top-level comment within 30 minutes for the first 6 hours.
- Don't argue with negative comments. Acknowledge ("fair point, I'll think about that") and move on.
- If a thread gets deep on a specific site bug, file a GitHub issue *immediately* and link to it in your reply ("filed #42 for this").

### If the post sinks (<10 points in 30 min)
- Don't re-submit the same post (HN flags duplicates).
- Try again in 4 weeks with a different angle: "Show HN: I shipped the 'show more per page' heuristic — here's the smart-detect logic" (lead with engineering).
- Use the post as the body of a blog post on dev.to or your personal site for evergreen value.

### If the post hits front page
- Stay on the thread for the full first day.
- The CWS listing will spike — make sure the listing is polished *before* posting.
- Tweet the HN link mid-day for amplification.
- After 24 hours, write a follow-up "Lessons from a successful Show HN" post for 4 weeks later (separate Show HN, allowed).

---

## 5. Listicle / Press Outreach

### The target list

| Publication | Type | Writer to target | Pitch angle |
|---|---|---|---|
| **Lifehacker** | Tech tips | Anyone on "The Upgrade" desk | "A one-purpose extension that fixes something you didn't realize was annoying" |
| **MakeUseOf** | Chrome extension lists | Roundup writers | "10 extensions that make Amazon shopping faster — here's one you don't have" |
| **Tom's Guide** | Browser tips | Browser/extension column | "Hidden Chrome setting: max out your search results automatically" |
| **The Verge — Installer** | Friday newsletter | David Pierce | "Tiny extension, real productivity win — feels like a feature Chrome should ship" |
| **TechCrunch** | News | — | **Skip.** Free indie tool doesn't fit. |
| **Hacker Noon** | Dev productivity | Open submission | "I built a Chrome extension in a weekend — here's the smart-detect heuristic" |
| **Indie Hackers** | "I launched this week" | Forum + newsletter | Founder story, free, open source |
| **Smashing Magazine** | Web dev tips | Browser-focused authors | Technical: MV3 content scripts, MutationObserver patterns |
| **Dev.to** | Tutorial cross-post | Open submission | "Detecting page-size selectors on any site: a heuristic" |
| **Browser Use newsletter** | New tools | Open submission | Just submit the tool |
| **9to5Mac** | Mac/iOS apps | Open submission | Safari extension angle, day-one iPhone/iPad/Mac support |
| **MacRumors forums** | Reader community | — | Cross-post r/macapps body, slightly more formal |

### The cold email template (Lifehacker-style)
```
Subject: Tiny Chrome extension you'll want to add to the next list

Hi [Name],

Loved your "[specific recent article they wrote]" piece — the bit about
[specific detail] saved me an hour this week.

I shipped a free Chrome + Safari extension yesterday called Max Page
Size. It does exactly one thing: when you visit Amazon / eBay / GitHub /
Walmart (or about 40 other sites), it auto-selects the largest "results
per page" option in the dropdown. Install once, no settings to fiddle
with.

The reason I think it fits your readers: it's the kind of utility that's
obvious in hindsight — everyone already clicks that dropdown manually,
but nobody's bothered to automate it. Three-second install, instant
payoff.

Free, open source, no tracking, no upsell. Demo GIF: [link]
Install: [Chrome link]

Happy to send a press image pack or answer any questions if it's useful
for a piece.

Best,
Ian
```

### The cold email template (engineer-publication-style, e.g. Smashing Magazine, Dev.to)
```
Subject: Open-source extension + a smart-detect heuristic — would you cover or take a guest post?

Hi [Name],

I read your recent [specific article] and thought you might find this
interesting — or maybe wanting a guest tutorial.

I shipped a free, MIT-licensed Chrome + Safari extension last month
called Max Page Size. The product is simple (auto-clicks "100 per page"
on shopping sites), but the engineering question I had to solve was
fun: how do you detect a "results per page" dropdown on a site you've
never seen, with low false-positive rate?

I wrote up the heuristic here: [dev.to or blog link].

If a guest post on Smashing fits, I'd happily adapt it to your house
style (~1,500 words, working code samples, MV3-specific notes). If not,
no problem — just thought it might be useful as a reference.

Best,
Ian

GitHub: github.com/iancmaccallum/max-page-size
```

### Outreach cadence
- **3 cold emails per week** for the first 8 weeks post-launch.
- Track in a spreadsheet: writer / publication / pitch sent date / response / outcome.
- Personalize every email — reference a specific recent piece. Boilerplate gets deleted.
- Follow up *once* after 7 days. *Never* a second follow-up.

### Press kit (link in every email)
Host at `maxpagesize.com/press` (or temporary equivalent). Contents:
1. Demo GIF (1200×675 MP4 + GIF fallback)
2. 3 polished screenshots (1280×800)
3. Brand assets: logo PNG + SVG, color palette
4. Founder quote (1 paragraph, 50 words, ready to lift)
5. Supported-sites list (live count)
6. Install numbers (refresh weekly)
7. Privacy posture one-pager

### Success metric
3 placements in 90 days. Each placement should drive 500+ installs (track via UTM on the landing page redirect).

---

## 6. GitHub & Cross-Pollination

### `awesome-*` PRs

Each successful PR gets us a permanent backlink and a recurring trickle of installs (people browse `awesome-chrome-extensions` for years). Submit in this order:

| Repo | Section | What to PR |
|---|---|---|
| `transitive-bullshit/awesome-chrome-extensions` | "Productivity" | One-line entry with brand + tagline + link |
| `learn-anything/awesome-chrome-extensions` | "Browser" | Same |
| `Plebei4n/awesome-safari-extensions` | "Productivity" | Safari listing |
| `EvanLi/Github-Ranking` (passive — auto-indexed) | — | Make sure repo has good README + topics |
| `sindresorhus/awesome` → linked awesome lists | — | Submit to `awesome-productivity` curators |
| `awesome-shopping`, `awesome-utility` | — | If they exist + are maintained |

PR template:
```
Adds Max Page Size — a free, open-source Chrome + Safari extension that
auto-selects the largest "results per page" option on ~40 sites and
falls back to a smart detector. MV3, MIT, no telemetry.

Repo: github.com/iancmaccallum/max-page-size
Chrome Web Store: [link]
```

Keep the PR body short. Maintainers reject PRs that look like SEO spam.

### Cross-pollination with related extension authors

DM authors of complementary tools — they ship to overlapping audiences and a mutual mention is essentially free distribution.

**Targets:**
- uAutoPagerize / Pagetual / Infy Scroll authors (infinite scroll category — complementary, not competitive).
- RES (Reddit Enhancement Suite) — overlap on power-user audience.
- Stylus (CSS overrides) — overlap on "tinker with the web" audience.
- Honey (defunct but the open-source clones) — overlap on shopping.
- Wayback for Amazon (price history) — overlap on Amazon power users.

**DM template:**
```
Hey [name] — I built [their extension] is a big part of my browser, so
I figured I'd let you know I just shipped Max Page Size: a complementary
extension that auto-clicks "100 per page" on shopping sites. Different
problem from yours (we set page size up-front; you do [their thing]) but
overlapping audience.

Open to swapping mentions if useful — happy to add a "pairs well with"
note in our listing if you do the same. Or just say no, totally fine.

— Ian
github.com/iancmaccallum/max-page-size
```

---

## 7. YouTube Creator Outreach

### Target profile
- 5k–50k subs (any smaller doesn't move the needle; any larger doesn't respond to cold email).
- Productivity / tech tips / shopping channels.
- Posts at least once a month.
- Has covered free tools before.

### Search queries to find them
- "best chrome extensions" filter "this year"
- "browser productivity tips"
- "amazon shopping tips"
- "extensions you should install"
- "underrated chrome extensions"

### Outreach template
```
Subject: A free Chrome + Safari extension that might fit a future video

Hi [Name],

I really enjoyed your [specific recent video, e.g. "10 Chrome extensions
I use every day"] — the bit about [specific extension or tip] was great.

I just shipped a free, open-source Chrome + Safari extension called
Max Page Size. It auto-clicks "100 per page" on Amazon, eBay, GitHub,
and ~40 other sites. The demo is more compelling than the description:
[Demo GIF link]

No ask — just thought it might be a fit for a future "underrated
extensions" or "browser productivity" segment. Happy to send any assets
you'd need (high-res screenshots, install metrics, founder Q&A).

Chrome: [link]
Safari: [link]
Source: github.com/iancmaccallum/max-page-size

Best,
Ian
```

### Cadence
- 5 cold emails per week, 30 minutes total.
- Don't follow up. If interested, they reply.
- Track in same spreadsheet as press outreach.

---

## 8. X / Twitter Reply-Guy Mode

Not a primary install driver, but a useful supporting tactic and free.

### What to do
- Search X for live complaints about pagination: *"amazon results per page", "pagination is annoying", "show more per page", "ebay only 60 results"*.
- Reply with a one-line "I built this" + Chrome link. Personal account, never brand.
- Tag related extension authors when relevant (RES, Stylus, uAutoPagerize) — they often retweet a complementary tool.

### Cadence
- 10 replies per week, 15 min total.
- Quality over volume. A single reply to David Pierce or a popular HN commenter beats 50 spray-and-pray replies.

### Don't
- Don't auto-DM.
- Don't run paid ads.
- Don't reply to the same thread twice.
- Don't argue.

---

## 9. Indie Hackers

### Where
- IH "I'm Working On" thread (weekly).
- IH "Show IH" forum.
- IH newsletter "what I launched this week" feature (submit at indiehackers.com/launches).

### Post template (IH "I Launched" forum)
```
Title: Max Page Size — Free Chrome + Safari extension that auto-clicks "100 per page" on shopping sites

Body:
After watching myself change the "items per page" dropdown on Amazon
for the 500th time, I built a Chrome and Safari extension that does it
automatically across ~40 sites (Amazon, eBay, Etsy, Walmart, GitHub,
Stack Overflow, etc.). Smart-detect fallback for the rest.

The interesting product decision was committing to **forever free, no
upsell, no telemetry**. That puts a hard ceiling on growth (no paid
acquisition is possible) and makes the "Karma channels" (HN, Reddit,
listicles) the entire distribution strategy.

Tech: MV3, MIT, ~600 lines of content script. Site list ships in the
bundle (no remote calls — privacy is the differentiator vs
AutoPagerize / Pagetual).

Day 7 numbers (post-launch):
- Chrome Web Store: [X installs]
- Safari App Store: [Y installs]
- HN: [Z points, front page for N hours]

Happy to share what worked / didn't in the comments.

Chrome: [link]
Safari: [link]
Source: github.com/iancmaccallum/max-page-size
```

### Why IH works
- The audience is other indie devs. Conversion to install is high *and* secondary effect: they post about you on their blogs.

---

## 10. Measurement

| Channel | What to track | Tool |
|---|---|---|
| Reddit | Upvotes, comments, install referrals | Manual log + UTM |
| Hacker News | Points, peak rank, install referrals, "saved" count | Manual log + UTM |
| Press placements | Pub, writer, date, install spike | Spreadsheet |
| YouTube | Coverage rate (cold emails → videos) | Spreadsheet |
| X | Engagement on launch thread + reply conversion | Manual |
| `awesome-*` PRs | Accepted vs rejected | Spreadsheet |

### Targets (Day 30)
- 2+ Reddit posts with 500+ upvotes.
- 1 HN front-page appearance (or close — top 30 for 2+ hours).
- 1 listicle mention (Lifehacker / MakeUseOf / Tom's Guide / Installer).
- 3 accepted `awesome-*` PRs.

### Targets (Day 90)
- 4+ Reddit posts with 500+ upvotes.
- 3 listicle mentions.
- 1 YouTube creator covering it.
- 8 accepted `awesome-*` PRs.

---

## 11. Anti-Patterns

- **Don't post the same body in multiple subs.** Even slight rewording. Mods coordinate; auto-ban is real.
- **Don't post launch threads on Discord servers you've never participated in.** Read the rules first; in 90% of communities, drive-by self-promo is bannable.
- **Don't pay for upvotes / reviews / press.** It always comes out. Recovery is impossible.
- **Don't ghost negative feedback.** Reply, fix, ship, reply again with the version number.
- **Don't carpet-bomb writers.** A personalized email to 5 writers beats a templated email to 50.
- **Don't promise features in cold emails or Reddit posts.** Only promise what's shipped. Roadmap items become rage-bait in three months.
