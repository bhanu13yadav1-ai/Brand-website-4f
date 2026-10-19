# BLACKED Fusion 3.1 — validation report

## Static checks passed
- `node --check js/app.js` — passed.
- HTML parsed with Python's `html.parser` — passed.
- 78 HTML IDs found; no duplicate IDs.
- All 61 statically referenced JavaScript selector IDs resolve in the HTML. `resetCatalog`, `copyFantasy` and `skipFantasy` are intentionally created in the UI only after a relevant action/state change.
- All 11 image assets included in this package were decoded/verified by Pillow.
- Local image/reference paths and page stylesheet/script paths were checked: no missing paths found.
- No remote image-host dependencies or remote font imports.
- CSS is a separate file; JavaScript is a separate file; campaign images are packaged under `assets/`.
- Mobile and desktop CSS breakpoints are present.

## Browser limitation — not claimed as passed
The available headless Chromium/browser runtime returned `ERR_BLOCKED_BY_ADMINISTRATOR` when opening both `file://` and a localhost URL. That prevented a real browser click-through here. A final live/device smoke test is therefore still needed after the files are deployed. The static checks above do not replace that runtime test.

## Included artwork
11 optimized local WebP assets: five complete supplied campaign posters, five model-focused card crops, and one crop of the supplied Wellness reference screen. All visible site images reference this bundle; a local branded SVG fallback prevents the classic broken-image icon if a future path is accidentally changed.

## Before publishing
1. Keep the relative folder structure exactly as in the ZIP: `index.html`, `css/styles.css`, `js/app.js`, and `assets/`.
2. Upload the files into the repository root; do not upload only `index.html`.
3. Confirm that `css/styles.css`, `js/app.js`, and all `assets/*.webp` paths are served in GitHub Pages.
4. On a phone, test all six tabs, adult gate, catalogue search/sort, save/remove, bag quantity, the three separate wheels, copy buttons, fit-note save/clear and photo preview.

## Prototype scope
This is a front-end concept, not a production shop. Prices/discounts are demo-only. There is no live inventory, checkout, payment, shipping, customer account or ID verification. Wheel rewards do not create redeemable discount codes.
