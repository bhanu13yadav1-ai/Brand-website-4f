# V1.8 Validation Notes

## Static validation results
- `node --check app.js`: PASS.
- HTML parser: PASS; 144 IDs found, no duplicate IDs.
- All 31 embedded asset values decode; SVG assets parse as XML; raster assets pass image verification.
- No relative `assets/...` `src` remains in HTML; the homepage hero and static reference images use embedded data URLs.
- Eight 360° frame assets are present and embedded (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°).
- All new feature controls exist and the 360° viewer, wheel, size converter and fantasy prompt controls have matching IDs.
- Wheel product targets match real product IDs.
- No legacy `ref-*`, `design-*` or `syrn-*.svg` product image references remain.
- New generated editorial images are bundled in `assets/` and embedded in app code.

## Browser testing limitation
A local Chromium headless attempt timed out and returned no DOM dump. Previous environment attempts were blocked/unstable, so I cannot claim a complete browser click-through or Android-device test. After GitHub Pages deployment, test age confirmation, image rendering, mobile menu, category filtering/search, cart operations, size question conditionals, cm/in conversion, wheel spin/offer/cart note, prompt generation/copy, and 360° drag/buttons/slider/reset.

## Features not connected to real commerce
- Demo coupons do not reduce real prices; checkout/payment/inventory are not connected.
- No answer or intimate measurement is saved to localStorage or sent to a server by the new form.
- Generated visual assets and product entries remain concepts until supplier, dimensions, materials, stock and image-use rights are verified.
