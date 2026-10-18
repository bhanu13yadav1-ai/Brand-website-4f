# BLACKED Fusion 3.0 — test checklist

Test date: 18 October 2026

## Automated checks run

- [x] JavaScript syntax check (`node --check`).
- [x] HTML parsed; no duplicate `id` attributes found.
- [x] All 11 image elements point to the five bundled files under `assets/`.
- [x] All five bundled WebP assets decoded in a headless Chromium browser test.
- [x] Mobile layout checked at 390 × 844 — no horizontal overflow.
- [x] Desktop layout checked at 1440 × 1000 — no horizontal overflow.
- [x] Wellness entry gate and size finder interaction.
- [x] Butt-plug recommendation contains the flared-base safety note.
- [x] Partner penis-size explainer renders the reviewed research numbers.
- [x] Flirty-message generator responds after its consent confirmation.
- [x] Fantasy-opener generator responds after its consent confirmation.
- [x] Size & Deal Wheel returns a mock offer and discount.
- [x] Add-to-demo-bag action increments the local demo bag.
- [x] No browser JavaScript exceptions during these checks.

## Manual checks before production

- [ ] Upload the full folder (not just `index.html`) to the target GitHub Pages repository.
- [ ] Open the public GitHub Pages URL on an Android phone and verify each image section.
- [ ] Test on a second browser and a slower mobile connection.
- [ ] Replace sample offers with approved real catalog SKUs, prices, size measurements and stock data only when those data are available.
- [ ] Add a real, legally compliant age-verification flow and production privacy/security review before any adult commerce launch.
- [ ] Connect a secure backend and payment provider only if a real checkout is planned.

This report covers the local prototype and browser interaction tests. It does not mean the site has been pushed to GitHub Pages or tested as a live deployment.
