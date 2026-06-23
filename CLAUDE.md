# Max Page Size

A free Chrome + Safari browser extension that automatically selects the largest "results per page" option when browsing product lists, search results, and feeds.

## What It Does
- Runs on all sites at `document_idle`.
- Looks up the current host in a hand-tuned `SITE_CONFIGS` table (~40 sites) and selects the largest `<option>` in the page-size `<select>` — or rewrites a URL param.
- Falls back to a generic "smart detector" that scans every `<select>` on the page, scores it against page-size keywords, and validates the option values look like a real pagination ladder.
- Re-runs on DOM mutations so SPAs catch updates.
- Popup for per-site disable, custom URL params, "Report this site," and a global toggle.

## Tech Stack
- **Chrome:** Manifest V3, vanilla JS, no build step. Content scripts + service worker.
- **Safari:** Xcode project (`safari/MaxPageSize/`) with iOS + macOS targets, using Safari Web Extension toolchain.
- **No backend.** Site config table ships in the bundle.
- **No tracking, no analytics, no remote calls.** Privacy posture is part of the pitch.
- MIT licensed. Open source.

## Project Structure
```
max-page-size/
├── chrome/                    # Chrome MV3 extension
│   ├── manifest.json
│   ├── icons/
│   └── src/
│       ├── background.js
│       ├── commonPageSizes.js
│       ├── content.js
│       ├── popup.html
│       ├── popup.js
│       └── siteConfigs.js
├── safari/                    # Safari Web Extension
│   └── MaxPageSize/
│       ├── iOS (App) / iOS (Extension)
│       ├── macOS (App) / macOS (Extension)
│       ├── Shared (App) / Shared (Extension)
│       └── MaxPageSize.xcodeproj
├── marketing/                 # Marketing strategy and playbooks
│   ├── strategy.md            # Strategic overview, initiatives, metrics
│   ├── positioning.md         # Message house, value props, against-statements
│   ├── segments.md            # 4 personas + JTBD + watering holes
│   ├── brand.md               # Voice, color, type, icon, logo usage
│   ├── channels.md            # Ranked channel mix + cadence + kill criteria
│   ├── chrome-web-store-optimization.md
│   ├── safari-app-extension-listing.md
│   ├── communities.md         # Reddit, HN, listicle press, GitHub, X, YouTube
│   ├── product-hunt-launch.md # Coordinated PH + HN + Reddit + X launch day
│   └── _legacy_master_plan.md # Original monolithic plan (kept as appendix)
├── package-extension.sh       # Builds the Chrome ZIP for CWS submission
├── PUBLISHING_GUIDE.md        # Chrome Web Store submission steps
└── README.md
```

## Key Commands

### Chrome
```bash
# Package for Chrome Web Store submission
./package-extension.sh

# Load unpacked in Chrome:
#   chrome://extensions → "Load unpacked" → select chrome/
```

### Safari
```bash
# Open Xcode project
open safari/MaxPageSize/MaxPageSize.xcodeproj

# Build + run on Mac: Cmd+R in Xcode with macOS scheme
# Build + run on iPhone: select iOS scheme + device + Cmd+R
```

## Distribution
- **Chrome Web Store App ID:** `icgnjkgcbcpbbfngehgpekggnebbnhec`
- **Apple Bundle ID:** *(set in safari/MaxPageSize/MaxPageSize.xcodeproj)*
- Pricing: free, forever, no IAPs, no Pro tier.

## Marketing

The marketing strategy is in [`marketing/`](marketing/). The product is free, so growth comes from three flywheels:
1. **Chrome Web Store listing SEO** — see [`marketing/chrome-web-store-optimization.md`](marketing/chrome-web-store-optimization.md).
2. **Karma channels** (HN, Reddit, Product Hunt, X) — see [`marketing/communities.md`](marketing/communities.md) and [`marketing/product-hunt-launch.md`](marketing/product-hunt-launch.md).
3. **Listicle press** (Lifehacker, MakeUseOf, Tom's Guide, Verge Installer) — see [`marketing/communities.md`](marketing/communities.md) §5.

Start with [`marketing/strategy.md`](marketing/strategy.md) for the overview, then [`marketing/channels.md`](marketing/channels.md) for the prioritized channel mix.

**Brand voice:** dry, direct, slightly funny. Numbers beat adjectives. Never apologize for the product being free — see [`marketing/brand.md`](marketing/brand.md).

**Primary tagline:** *"Stop clicking 'Next.'"*

**Master positioning:** Max Page Size is the simplest extension on the Chrome Web Store. It clicks the "show 100 per page" dropdown on every site that has one. Free, open source, no account, no tracking. See [`marketing/positioning.md`](marketing/positioning.md).

### What we're explicitly not doing
- No paid ads (no unit economics for a free product).
- No upsell / Pro tier (kills the "free forever" trust positioning).
- No telemetry, even anonymous (privacy posture is a feature).
- No newsletter / Discord / community.
- No fancy onboarding screens.

See [`marketing/channels.md`](marketing/channels.md) §4 for the rationale.

## Docs
- [PUBLISHING_GUIDE.md](PUBLISHING_GUIDE.md) — Chrome Web Store submission steps.
- [marketing/](marketing/) — Strategy, positioning, channels, store-listing optimization.
- [README.md](README.md) — Public-facing intro.
