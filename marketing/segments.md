# Max Page Size — Audience Segments

> Free utilities live or die on niche communities that adopt and evangelize them. Here are the four personas that matter, in priority order.

Each persona includes: demographics, psychographics, the pain we solve, the **Job To Be Done** they hire us for, **watering holes** where they live online, and the **channel** we use to reach them.

---

## A. Power Shoppers — *PRIMARY*

The reason the product exists. Heavy users of Amazon, eBay, Walmart, AliExpress, Etsy. They already click "100 per page" by hand multiple times a day.

| | |
|---|---|
| **Age / Demo** | 28–55, US/UK/CA/AU/EU dominant. Mixed income; the high-income end uses us for time savings, the low-income end uses us for deal hunting. |
| **Psychographic** | Comparison-shopper mindset. Buys based on research, not impulse. Reads reviews. Maintains spreadsheets for big purchases. Annoyed by friction in the buying process. |
| **Pain (acute and weekly)** | Default 16/24/48 page sizes force them to load 5–10 pages to scan all options. Sorting and filtering resets pagination. Mobile pagination is even worse. |
| **JTBD** | *"When I'm comparison shopping, I want to see every option on one screen so I can scan, sort, and Ctrl-F instead of clicking through pages."* |
| **Watering holes** | r/Frugal (3M), r/BuyItForLife (3M), r/Amazon (1M), r/Ebay (400k), r/Flipping (400k), r/ThriftStoreHauls, r/declutter, slickdeals.net forums, Wirecutter (readers, not staff) |
| **Channel** | Reddit drip campaign + Chrome Web Store SEO. Listicles in Lifehacker/MakeUseOf reach this audience cold. |
| **Headline that works for them** | *"Compare 100 Amazon listings on one page instead of clicking through five."* |
| **Headline that does NOT** | "Boost your productivity" — too generic, sounds like a SaaS app. |
| **Conversion signal** | They install, immediately go to Amazon to test, leave a 5-star review within 48 hours if it works. |

---

## B. Researchers, Analysts, and Knowledge Workers

Anyone who lives in paginated tools all day: PubMed, Google Scholar, JIRA, Confluence search, Bugzilla, real-estate listings (Zillow/Redfin/Realtor), legal databases (Westlaw, PACER), job boards (LinkedIn, Indeed). Want one screen of results, then Ctrl-F.

| | |
|---|---|
| **Age / Demo** | 28–50, college-educated, knowledge worker, info-dense jobs (research, finance, law, recruiting, real estate). |
| **Psychographic** | Tool-fluent. Has 30+ extensions already. Reads HN. Optimizes their own workflow. Will install something the moment they see a demo if it solves a real friction. |
| **Pain** | Daily — paging through 20+ pages of search results in tools that don't offer a way to expand. Loses context every time the page reloads. |
| **JTBD** | *"When I'm searching a database, I want all relevant results on one page so I can Ctrl-F, copy/paste, and not lose my place when filtering."* |
| **Watering holes** | Hacker News (front page, especially Show HN), r/productivity (2M), r/InternetIsBeautiful (16M), r/webdev (3M), Indie Hackers, dev.to, lobste.rs, The Verge Installer newsletter (David Pierce) |
| **Channel** | Show HN + Product Hunt + Installer newsletter + r/InternetIsBeautiful. This is the audience that decides whether the launch goes viral. |
| **Headline that works** | *"Ctrl-F across an entire dataset, not just the first 25 rows."* |
| **Headline that does NOT** | "For shoppers" — pigeonholes us. |
| **Conversion signal** | Bookmarks the GitHub repo. Stars it. Tweets the demo GIF. Adds to a personal "best tools 2026" list. |
| **Action item** | Ship a v1.1 site pack targeting *their* sites (PubMed, JIRA, Zillow, LinkedIn, Indeed, Redfin, Westlaw). Re-launch with a "now works on research databases" post. |

---

## C. Developers, QA, and Power Browser-Users

GitHub, Stack Overflow, npm, PyPI, package managers — already supported. They install extensions casually and recommend them in PRs / Slack / team standups. They're also the ones writing `awesome-chrome-extensions` GitHub lists.

| | |
|---|---|
| **Age / Demo** | 22–45, software / SRE / QA / data, English-speaking-dominant, Mac/Linux-heavy. |
| **Psychographic** | Privacy-conscious (MV3, MIT, no telemetry resonates strongly). Skeptical of "smart" anything until they read the code. Open-source first. Will judge the product by its `manifest.json` and bundle size. |
| **Pain** | Mild but constant — GitHub PR lists default to 25, Stack Overflow answers paginate at 15, npm package lists at 20. Adds up over a day. |
| **JTBD** | *"When I'm scanning issues / PRs / Stack Overflow / packages, I want the full list on one page so I can navigate with browser find."* |
| **Watering holes** | Hacker News, r/webdev, r/chrome_extensions (80k), GitHub `awesome-*` lists, dev.to, Lobste.rs, X (dev community), Mastodon (small but vocal) |
| **Channel** | Show HN (technical post about the smart-detect heuristic, not the shopping angle), r/chrome_extensions, `awesome-*` PRs, dev.to tutorial cross-post |
| **Headline that works** | *"MV3 extension, ~600-line content script, MIT, no remote calls. Smart-detects page-size selectors on any site."* |
| **Headline that does NOT** | "Shop smarter on Amazon" — they will roll their eyes. |
| **Conversion signal** | GitHub star, PR for a new site, blog post about the heuristic, "I've been wanting this" comment on HN. |
| **Bonus value** | Devs ship PRs that expand site coverage. The most active contributors essentially become product. |

---

## D. Accessibility & Low-Mobility Users

Often overlooked, deeply grateful when included. Less clicking is a real win for users with motor impairments, RSI, anyone using switch control / voice control / eye tracking.

| | |
|---|---|
| **Age / Demo** | All ages; over-indexes older adults, post-injury workers, gamers with hand strain, professional typists. |
| **Psychographic** | Has tried every "reduce clicks" tool ever made. Patient with bugs as long as the maintainer is responsive. Will evangelize the extension in private accessibility forums in a way that doesn't show up in your analytics. |
| **Pain** | Each pagination click can be 3–10x more effortful than for a typical user (switch control may need a 4-step sequence per click). 20 pages of Amazon = real physical pain. |
| **JTBD** | *"When I'm browsing a list, I want the most content possible per page so I can navigate by keyboard / voice / switch without repeating click sequences."* |
| **Watering holes** | r/accessibility (~30k), r/disability, WebAIM mailing list, A11y Slack, Mastodon a11y community, Voice Control / Switch Control user groups, Apple Accessibility forums |
| **Channel** | Targeted single post in r/accessibility framed around "fewer clicks." Outreach to a11y writers (Léonie Watson, Adrian Roselli, Eric Bailey). Ensure popup is keyboard-navigable and screen-reader-labeled before pitching this audience. |
| **Headline that works** | *"Fewer clicks. Less scrolling. Built to play nicely with switch control, voice control, and keyboard navigation."* |
| **Headline that does NOT** | The default "stop clicking next" copy is fine but slightly mismatched — for this audience, lead with "less effort per page." |
| **Prerequisite** | Audit the popup for keyboard navigation, ARIA labels, focus rings, prefers-reduced-motion. Don't pitch this audience until the extension itself is a11y-clean. |
| **Conversion signal** | Quiet, deep loyalty. They don't tweet, but they'll mention the extension in a screen-reader user group thread that converts 20 installs in a week. |

---

## Segment Summary Table

| Segment | Size of pool | Reachability | Conversion | Evangelism | Priority |
|---|---|---|---|---|---|
| A. Power Shoppers | Massive (100M+ in US alone) | Medium (Reddit, listicles) | High | Medium | P0 |
| B. Researchers / Knowledge Workers | Large (10M+) | High (HN, PH, Installer) | High | High | P0 |
| C. Developers / Power Users | Medium (1M+) | High (HN, r/chrome_extensions, GitHub) | Very High | Very High | P1 |
| D. Accessibility | Small but underserved (<500k engaged) | Low without warm intros | Very High | Quiet but loyal | P2 (after a11y audit) |

---

## What's Explicitly NOT a Persona

- **Casual shoppers who buy on impulse.** Friction-tolerant; pagination doesn't bother them. They won't install.
- **Mobile-only users (non-Safari).** Chrome on Android has no extensions. Our reach to them is zero.
- **Enterprise / SaaS buyers.** No purchase decision; no marketing surface.
- **Reddit-only people who want infinite scroll on Reddit.** RES already serves them better; don't try to compete on that single-site axis.
