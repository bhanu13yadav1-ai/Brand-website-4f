# BLACKED Fusion 2.0 — Combined prototype

This package combines the most useful directions from the three supplied repositories into one mobile-first static site.

## What was combined

- **Brand-website-3 as the feature reference:** product-specific catalog images, explicit reference-vs-detail handling when a detail image exists, search/filter/sort, no-results/reset states, local wishlist, comparison shortlist, fit guidance, and clearer prototype limitations.
- **Brand-website-1 as the brand direction:** a stronger premium campaign hero, a distinct After Dark area, and a clearly labelled demo bag rather than fake checkout.
- **Brand-website-2 as the Wellness reference:** a separate Intimate Wellness finder with comfort/learning/relaxation/couples pathways and reset behaviour.
- Plus-One retains a local-only, platonic, public-outing preview and consent/boundary conversation prompts.

## Important implementation notes

- This is a **new combined prototype**, not a claim that changes have been pushed into any of the three GitHub repositories.
- The original repositories are read-only from the current connection. The original projects were not overwritten.
- To avoid copying a large image library into the ZIP, images load from the public `Brand-website-3` repository's `main` branch using raw.githubusercontent.com. Keep those assets in place or update `ASSET` in `app.js` if you move assets to a different repository.
- Some image assets are user-supplied campaign images, visual concepts, or external-brand inspiration. The UI labels them as references/concepts; that is not product inventory verification or proof of commercial image rights.
- All prices, sizes, ratings, stock numbers, discounts and shipping promises are intentionally omitted because verified data was not supplied.
- The bag is a demo only. There is no inventory, checkout, payments, customer account, ordering, booking, AI API or server backend.
- The age checks are self-attestation, not formal age/identity verification. A public launch needs appropriate age verification, privacy/deletion controls, moderation/reporting where applicable, accessibility QA and India-specific legal/privacy review.
- Fit Studio shows the selected reference image separately. A personal-photo canvas requires the user to upload their own image and, optionally, a transparent garment PNG. Preview rendering is local/manual, not realistic AI fitting or size prediction.
- The Fit Passport stores measurement fields in browser localStorage only after explicit consent; use the Clear button to delete them on that device.

## Run or deploy

1. Extract the ZIP.
2. Open `index.html` in a current browser. A connection is needed for the remote images and Google Fonts.
3. For GitHub Pages, upload `index.html`, `styles.css`, `app.js`, and `README.md` to a new repo or a test branch first.
4. If deploying into `Brand-website-3`, download its ZIP as a backup first. Upload these files only after reviewing the new combined prototype; this replaces the current UI implementation, so keep the original repo backup.
5. Test mobile menu, each catalog filter, search/reset, saved styles, three-item compare, reference/detail toggles, demo bag actions, photo uploads, overlay positioning, PNG export, each separate adult gate, Wellness finder/reset, and Plus-One preview on an Android phone.

## Source repositories reviewed

- https://github.com/bhanu13yadav1-ai/Brand-website-1
- https://github.com/bhanu13yadav1-ai/Brand-website-2
- https://github.com/bhanu13yadav1-ai/Brand-website-3
