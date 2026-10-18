# BLACKED Fusion 3.0

A standalone, mobile-first static site concept built around the supplied BLACKED Sanskari Edit campaign artwork.

## What's new in 3.0
- Dedicated **Sanskari Edit** story gallery using five locally bundled, optimized campaign images.
- Full-portrait campaign art preserves text printed into the uploaded poster; cards avoid awkward image cropping.
- Search, category filters, sort order, story preview modal, local wishlist, demo bag with quantities/removal, and illustrative totals.
- Separate 18+ Wellness area with a second self-attestation gate, topic tabs, and comfort finder.
- Boyfriend toolkit: date idea builder, message generator with copy action, conversation cards, and boundaries/consent guidance.
- Fit Studio with a general fit checklist and private on-device notes.
- Local profile preferences, JSON export, reset controls, sticky mobile navigation, back-to-top, and basic PWA/offline shell support.
- No external image/CDN dependencies.

## Run locally
Open `index.html` in a browser. PWA/service-worker behaviour is available when served via HTTPS or localhost; it will not register on a `file://` URL.

## Publish on GitHub Pages
1. Extract the ZIP.
2. Upload the contents of this folder (including `assets/`, `manifest.webmanifest`, and `sw.js`) to the root of the repository or a `/docs` folder selected in Pages settings.
3. In GitHub, open **Settings → Pages**, select the correct branch/folder, and save.
4. Wait for deployment, open the published URL on a phone, and refresh once if an older service-worker cache appears.

## Important prototype boundaries
- The campaign artwork was provided by the user. It is bundled as local WebP assets to make the page lighter; poster layouts are preserved rather than aggressively cropped.
- Prices are illustrative UI test values only. The bag does not place orders and the checkout button only shows a demo notice.
- No backend, live inventory, payment gateway, shipping, user accounts, medical advice, or cloud sync are configured.
- Age checks are self-attestation only, not verified age checks.
- The 18+ topics provide general education and do not provide diagnosis or explicit product guidance.
