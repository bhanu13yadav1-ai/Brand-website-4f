# BLACKED — Visual Reference v3

A mobile-first concept storefront based on the supplied BLACKED reference screenshots. The build uses a black base, hot-pink accents, round category chips, compact two-column mobile product cards, and separate experiences rather than one crowded page.

## What is included

- **Home** — hero, category shortcuts, campaign strips and best sellers.
- **Innerwear** — filterable concept catalogue, search and local wishlist.
- **Sanskari Edit** — a separate desi-inspired campaign and collection.
- **Wellness 18+** — a separate self-attestation gate, product concepts and a comfort/care guidance finder.
- **Boyfriend** — date planner, message ideas, conversation prompts and healthy-boundary guidance.
- **Fit Studio** — fit checklist and private notes stored in the current browser.
- **Wishlist and demo bag** — locally stored prototype interactions; checkout is not connected.
- Cropped WebP images from the screenshots you supplied. Crops that were too text-heavy or awkward were not used as full-page screenshots.

## Open the site

Extract the ZIP and open `index.html` in a modern browser. The CSS, JavaScript and image files are included in the ZIP; no build command or external library is required.

For a local static server, run from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

1. Extract all files and folders from this ZIP.
2. Upload `index.html`, `styles.css`, `app.js`, and the full `assets/` folder to the repository root (keep the folder and filenames unchanged).
3. Open repository **Settings → Pages**, select the branch and `/ (root)`, and save.
4. After Pages publishes, open the public URL and check it on a phone.

## Important prototype limits

- This is a front-end concept, not connected to live inventory, real orders, checkout, payment, account sign-in, delivery or any backend.
- Product names, prices, discounts and labels are demonstration content, not current offers or verified specifications.
- Wishlist, demo bag and Fit Studio notes live only in the current browser/device and do not sync.
- The Wellness prompt is a self-attestation only, not formal age verification. The educational text is general information, not medical advice.
- Supplied screenshots are compressed references; the included visual crops work for a prototype but should be replaced by original high-resolution product/model files before a public production launch.
