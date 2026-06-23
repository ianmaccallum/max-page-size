# Max Page Size — Safari App Store Listing

> Safari has a much smaller extension pool than Chrome — that's the opportunity. iOS Safari extensions in particular are a near-vacuum and rank quickly for productivity keywords. This is the operating manual for the App Store Connect listing.

---

## 1. Strategic Foundation

### Why Safari is worth the effort
- **Tiny competitive set.** Maybe a dozen indie devs ship Safari extensions actively. Top 10 in Productivity > Extensions is reachable inside 30 days.
- **High user value.** Safari users (especially on iPhone/iPad) have *no* extension reflex — they're not jaded by ad-blocker spam. A genuinely useful free extension is a delight.
- **Distinct distribution.** Safari users discover via App Store search (not via Reddit / HN), so it's a parallel funnel that doesn't cannibalize Chrome launch.
- **Differentiation in marketing.** "Native Safari on iPhone, iPad, and Mac on launch day" is a quotable bullet for HN, listicles, and X. Almost no one ships day-one Safari.

### Why it's harder than Chrome
- **Review is slower** (1–2 weeks vs CWS's 1–3 days). Pre-emptive review notes are critical.
- **Distribution = the App Store**, which means an Xcode project with three target families (iOS app + extension, iPadOS via Universal, macOS app + extension). Already scaffolded — see `safari/MaxPageSize/`.
- **iOS Safari extension UX is brittle.** Users have to enable the extension in Settings → Safari → Extensions, then grant per-site permissions. First-run is the #1 churn point. Onboarding has to handle this.
- **App Store guidelines are stricter.** "Single purpose" must be airtight. No telemetry is mandatory, not nice-to-have.

### What success looks like
- **Day 30:** 200 installs (Mac + iOS combined), 4.5+ rating, ranked top 20 in macOS > Productivity > Safari Extensions.
- **Day 90:** 1,500 installs, top 10 in category, 1 mention in Apple's "New Apps We Love" or a Safari extension roundup.

---

## 2. App Store Connect Listing Copy

### App name (30 char limit)
**`Max Page Size for Safari`**

24 characters. "For Safari" helps discovery from outside the store via Google ("page size safari extension") *and* satisfies the user expectation that Safari extensions are clearly labeled.

**Do not use:**
- `Max Page Size` alone — Apple's search doesn't substring-match brand-only names well; including "Safari" doubles our hit rate.
- `Max Page Size: Auto-Select Results Per Page` — over 30 chars, gets truncated.

### Subtitle (30 char limit)
**`Auto show more results`**

Punchy, verb-led, contains "show more" which is a keyword phrase. Drops articles ("the") to fit.

**Variants to A/B:**
- `Stop clicking "Next page"` (29 chars)
- `Show 100 results per page` (25 chars)
- `One page. Every site.` (21 chars, brandiest)

### Keywords field (100 char limit, comma-separated, no spaces)
```
page,results,perpage,amazon,ebay,shopping,pagination,scroll,productivity,utility,more,showall
```

96 chars. Notes:
- Apple's algorithm matches partial words inside keywords AND the app name/subtitle. So `page` here pairs with `Max Page Size` in the title — double-weight signal.
- `perpage` (one word) hedges against tokenization differences.
- No need to repeat words that already appear in the name/subtitle ("Safari", "Max").
- Don't include competitor names (Apple flags it).
- Comma-separated, **no spaces** — every wasted character is one less keyword.

### Promotional text (170 char limit, can be updated without resubmission)
> **The free Safari extension that auto-clicks "100 per page" on Amazon, eBay, GitHub, and 40+ sites. Install once, browse smarter forever.**

Updateable without going through review again — use this for **seasonal pushes** (Black Friday: *"Shop smarter this Black Friday — see every Amazon deal on one page."* / January: *"New year, fewer clicks. The free Safari extension that maxes out 'results per page' on 40+ sites."*).

### Description (long)
Open with Safari-specific lines, then follow the same structure as the Chrome listing.

```
The Safari extension you've been waiting for. Built natively for iPhone,
iPad, and Mac. Works in private browsing. No iCloud sync required.

WHAT IT DOES
Every time you load a page with a "results per page" dropdown, Max Page
Size automatically picks the biggest option (usually 100). One page. One
scroll. Done.

SUPPORTED OUT OF THE BOX
• Marketplaces: Amazon (US/UK/CA/DE/FR/JP), eBay, Etsy, AliExpress
• Retail: Walmart, Target, Best Buy, Costco, Home Depot, Lowe's, Wayfair
• Fashion: Nordstrom, Macy's, Kohl's, ASOS, Nike, Adidas, Zalando, SHEIN
• Electronics: Newegg, B&H Photo, Micro Center
• Search engines: Bing, DuckDuckGo, Yahoo, Yandex
• Developer: GitHub, Stack Overflow, npm, PyPI
• …plus a smart fallback that works on most other paginated sites.

WHY IT'S BETTER THAN INFINITE SCROLL EXTENSIONS
Infinite scrollers keep downloading more content as you scroll. Max Page
Size sets the largest page-size up front, so:
  ✓ Find finds everything on one page (Cmd-F / iPad share-sheet "Find")
  ✓ No layout jank, no duplicate fetches
  ✓ Works in private browsing
  ✓ No remote rule database — privacy stays local

PRIVACY
• No accounts, no tracking, no analytics.
• No remote servers. Site list ships with the extension.
• Open source: github.com/iancmaccallum/max-page-size

HOW TO ENABLE
1. Install the app.
2. Open Settings → Safari → Extensions → Max Page Size, toggle ON.
3. On the first site you visit, tap the "Always Allow" button when prompted.
4. That's it. Visit Amazon — you'll see "60 per page" instead of "16."

100% FREE. FOREVER.
```

**Why the "HOW TO ENABLE" section is mandatory:** iOS Safari extension activation is the single biggest UX bottleneck for the entire category. Users install, don't know what to do next, leave 1-star reviews. The four-step enable instructions in the description pre-empt that. (We also need a first-launch onboarding screen in the iOS app — see §4.)

### What's New (per-version field)
Use it. Even minor updates should have a 1–2 line note: *"Added support for Costco, Wayfair, and Bed Bath & Beyond. Fixed Amazon DE detection."* This is shown to existing users in iOS App Store updates and creates a "still maintained" signal for new visitors.

---

## 3. Visual Assets

### Screenshots — required per device family

| Device | Resolution | Count required | Count recommended |
|---|---|---|---|
| **6.7" iPhone** (15/16 Pro Max) | 1290×2796 | 3 | 5 |
| **6.5" iPhone** (older Pro Max) | 1284×2778 | 0 (uses 6.7 fallback) | 3 |
| **13" iPad** (Pro) | 2064×2752 | 3 | 4 |
| **12.9" iPad** | 2048×2732 | 0 (uses 13 fallback) | 3 |
| **macOS** | 1280×800 minimum | 3 | 5 |

### Screenshot storyboards

**iPhone (5 shots):**
1. **Hero "before/after" Amazon mobile** — split screen, "16 of 5,000" → "60 of 5,000." Big yellow accent number.
2. **The enable flow** — Settings → Safari → Extensions → Max Page Size toggle ON, annotated "Three taps to enable."
3. **The popup** (Safari toolbar extension popup on iPhone) — clean shot of toggle and "Report this site."
4. **Site grid** — wall of recognizable logos with "Works on 40+ sites."
5. **Privacy** — text-heavy: "No accounts. No tracking. No remote servers."

**iPad (4 shots):**
1. **Split-view Amazon comparison** — leverages iPad's screen estate; before/after on the same screen.
2. **Enable flow** — same Settings screenshot, scaled.
3. **Popup + site grid composite.**
4. **Privacy slide.**

**macOS (5 shots, 1280×800):**
1. **Hero "before/after" Amazon desktop** — same as Chrome listing's hero, but with Safari chrome.
2. **Toolbar popup** — Safari toolbar with extension popup expanded.
3. **Site grid.**
4. **Smart detection on a generic site.**
5. **Privacy / open source slide.**

### App icon (1024×1024 master)
- Single source of truth: the same icon used in the Chrome listing (purple background, white "100" with downward arrow).
- Auto-generates all required sizes (iPhone, iPad, Mac, watch — disable watch, we don't ship one).
- Pre-rendered at 1024×1024 PNG, sRGB, no transparency.

### App Preview videos (optional but valuable)
- 15–30 second silent video, vertical (iPhone), landscape (Mac).
- Storyboard identical to the demo GIF: Amazon → eBay → GitHub, with the number ticker.
- Apple weights App Preview videos heavily in conversion — worth the 2 hours.

---

## 4. The Onboarding Screen (in-app)

The iOS app *itself* is required by Apple (a host app is mandatory to ship a Safari extension). Make it useful:

**Single screen, three sections:**
1. **Welcome.** "Max Page Size makes Safari show you the most results per page on Amazon, eBay, GitHub, and 40+ other sites." + the demo GIF as a looping video.
2. **Enable Safari extension.** Three labeled steps with a single tap deep-linking to `App-prefs:Safari&path=WEB_EXTENSIONS` (the iOS Settings deep link).
3. **First-site permission grant.** "On the first website you visit, tap the page-size icon in the Safari toolbar, then tap 'Always Allow.'" + a screenshot.

After enable: a **status check** that pings whether the extension is enabled, and shows a green "✓ All set" or a red "Not enabled yet — tap to retry."

This is the difference between a 2-star rating and a 4.7. Most Safari extensions skip it; we won't.

---

## 5. Category & Settings

- **Primary Category:** Productivity
- **Secondary Category:** Utilities
- **Age Rating:** 4+
- **Pricing:** Free, no in-app purchases.
- **Available in:** All countries.
- **Game Center / iCloud / Sign In with Apple:** none required.
- **Privacy nutrition label:**
  - Data Not Collected. (This is correct and the most powerful privacy claim Apple lets you make. Tick every "no" box; submit no data collection at all.)

---

## 6. Review Notes (private to App Review)

This is the field that most often saves you a rejection cycle. Fill it out completely:

```
Reviewer notes for Max Page Size:

The extension scans the current page for a "results per page" <select>
element and changes its selected <option> to the largest numeric value.
On some sites we instead rewrite a URL parameter (e.g. ?count=100). The
goal is to show users more results per page so they don't have to
paginate.

NO DATA LEAVES THE DEVICE. The extension makes no network requests. The
site configuration table ships with the bundle.

HOW TO TEST:
1. Install the app, complete onboarding.
2. Open Safari, enable the extension (Settings → Safari → Extensions).
3. Visit https://www.amazon.com/s?k=laptop
4. The "Items per page" dropdown will change from 16 to 60.
5. Repeat on https://www.ebay.com/sch/i.html?_nkw=keyboard — you'll see
   the page size change from 60 to 240.

PERMISSIONS:
- The extension requests permission for "All Websites" because we need to
  detect page-size dropdowns on any site the user visits. We do not
  collect, transmit, or store any browsing data.
- The host app uses no permissions (no camera, location, contacts, etc.).

SINGLE-PURPOSE:
- The extension does exactly one thing: change the page-size selector to
  its maximum value. No tracking, no ads, no social, no upsell.

OPEN SOURCE:
- Full source code: github.com/iancmaccallum/max-page-size

Contact: ian@iancmaccallum.dev — happy to answer any questions.
```

### Common Safari rejection reasons (and pre-empts)

| Reason | Pre-empt |
|---|---|
| "Extension purpose unclear" | Single-purpose declaration in review notes + description. |
| "App is a thin wrapper" | The onboarding screen + post-install status check makes it a real app, not a placeholder. |
| "Trademark concerns (Amazon, eBay logos in screenshots)" | Replace any pixel-perfect competitor logo with text in screenshots. Use clearly-rendered text "Amazon", "eBay" not the live brandmark. |
| "Doesn't follow Safari extension guidelines" | Use the official `safari-web-extension-converter` toolchain output. No raw native Swift content scripts; web extension only. |
| "Asks for too many permissions without justification" | The review notes block above. Be specific. |
| "Privacy policy URL invalid" | Have the URL live with valid HTTPS at submission time. Test in a private window before submitting. |

---

## 7. Pricing, Updates, and Versions

### Pricing
- Free, forever. No IAPs. No "Pro" tier.
- Apple Developer Program membership is $99/year — that's the only cost. Accept it as the cost of being on the App Store; do not try to recoup it via the app.

### Versioning
- 1.0.0 launch.
- Increment **build** number on every TestFlight upload (use `agvtool` or Xcode's auto-increment).
- Increment **marketing version** for each App Store release.
- Match Chrome's version numbers when possible to make support easier.

### Update cadence
- Same as Chrome: ship every 4–6 weeks even if minor.
- Each release reuses the changelog from Chrome but framed for the Safari audience ("Now better on iPad," "Added support for Costco mobile site").

### What's New copy template
> *"Added Wayfair, Costco, and Bed Bath & Beyond. Fixed Amazon DE detection on iPad. Faster popup load on macOS Sonoma."*

---

## 8. Launch Plan (Safari-Specific)

### T-3 weeks
- Finalize iOS + macOS app icons.
- Build the onboarding screen.
- Record App Preview videos (iPhone + Mac).
- Draft all screenshot variants.
- Submit to App Review (allow 7–10 days).

### T-2 weeks
- Address any review feedback.
- Set release date for App Store to coincide with Chrome launch day.
- Configure pre-order? **No** — pre-orders for free apps are awkward; just plan release for the day.

### Launch day
- Coordinate with Chrome launch (single landing page with both buttons).
- Show HN post mentions Safari prominently: *"Native Safari on iPhone, iPad, and Mac on launch day."*
- r/macapps post (separate from Chrome subs, fresh audience).
- r/ios post (frame as "I shipped a Safari extension — here's how to enable it").

### T+1 week
- Replies to all App Store reviews within 48 hours.
- If iOS reviews trend toward "couldn't figure out how to enable" → ship a 1.0.1 that improves the onboarding screen.

### T+2 weeks
- Submit to "Apps We Love" via App Store Connect's "Featuring" workflow (free, integrated into ASC).
- Apple editors review Featuring submissions monthly. Quality bar: complete metadata, good screenshots, clear use case, no bugs.

### T+1 month
- Post on r/macapps: "Update: Max Page Size 1.1 now supports Costco, Wayfair, Bed Bath & Beyond." Free re-engagement.

---

## 9. Measurement

### From App Store Connect
- **Impressions** (App Store searches that showed our app).
- **Product page views** (clicked into the listing).
- **Installs** (tapped Get).
- **Conversion rate** (Installs / Impressions) — target 4%+ for free productivity apps; <2% means listing copy or icon needs work.
- **Crashes / OS version / device family** breakdown.
- **In-app actions** (we report none — privacy posture).

### Manual weekly checks
- Search rank in App Store for:
  - `page size` (low-volume, easy win)
  - `more results per page`
  - `safari extension` (high-volume, harder)
  - `pagination`
  - `amazon safari` (long-tail, intent-rich)
  - `productivity extension`
- Take screenshots, log in spreadsheet.

### KPIs
| Metric | Day 30 | Day 90 |
|---|---|---|
| Installs (all platforms) | 200 | 1,500 |
| Conversion rate (page views → installs) | 3% | 5% |
| Rating | 4.3+ | 4.5+ |
| Review count | 5 | 25 |
| Top-10 rank in Productivity > Extensions (macOS) | No | Yes |
| "Apps We Love" feature | No | Maybe |

---

## 10. Kill Criteria

| Signal | After… | Action |
|---|---|---|
| Conversion rate below 1.5% | 30 days | Listing problem — A/B subtitle, swap hero screenshot, rewrite description hook. |
| Rating below 4.0 | Ever | Triage reviews: if "can't enable" complaints dominate, rewrite onboarding screen. If "doesn't work on X" dominates, ship a site pack. |
| 90-day installs below 500 | 90 days | Safari category is just small. Not a failure — keep listing maintained but don't divert effort from Chrome. |
| App Review rejects 2× in a row | Mid-launch | Pause; rewrite review notes; address every flagged item; consider switching to per-site host permissions if `<all_urls>` is the issue. |

---

## 11. Why Safari Matters Even at Small Numbers

Even if Safari only ever delivers 5% of total installs, it earns its keep three other ways:

1. **It's a quotable bullet.** Press and Reddit love "native Safari on day one."
2. **It's an SEO moat.** Future Safari extension competitors will find ours already ranked when they look.
3. **It de-risks the brand.** Apple-rejected extensions can't be reposted; getting through Apple Review credentials us for "Apps We Love" pipelines we couldn't otherwise enter.

Don't optimize Safari for install volume. Optimize for *credibility* and *coverage*.
