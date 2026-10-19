# BLACKED Fusion 3.1 — Local asset repair & feature update

## What changed
- Rebuilt with separate `index.html`, `css/styles.css`, and `js/app.js` files.
- Packaged every campaign image used by the page in `assets/`; no production page image depends on a remote host.
- Replaced broken/missing image URLs with local, validated image files and a branded fallback for future mistakes.
- Clean single-view navigation: Home, Innerwear, Sanskari Edit, Wellness 18+, Boyfriend, Fit Studio.
- Added a campaign gallery, local wishlist, demo bag, filters/sort, image preview, and local fit notes/photo preview.
- Added three separate preference-first wheels: Boyfriend range, Dildo sizing and Butt Plug sizing. Each spin gives a sample discount; it is not redeemable.
- Added plain-language size guides and body-safety guidance. No internal vaginal measuring or so-called virginity test is recommended.
- Added respectful coming-soon concept tiles: Noor Edit and Grace Edit.

## Run locally
Open `index.html` in a browser. The page uses local relative paths, so the packaged images do not need an internet connection. For best results, use a static local server (for example, VS Code Live Server) so browser storage and local image handling behave consistently.

## Publish to GitHub Pages
Upload/replace the entire contents of this folder into the repository root, keeping the `assets/`, `css/`, and `js/` folders. Do not upload only `index.html`—the separate CSS, JavaScript and image assets are required. GitHub Pages may take a few minutes to update. Then hard-refresh the page or open it in a private tab.

## Validation
- JavaScript syntax check: passed with Node.js.
- Duplicate HTML IDs: none found.
- Static audit verifies all 11 packaged image files, local image references, the stylesheet and the JavaScript path; no missing path found.
- 78 HTML IDs; no duplicates. JavaScript syntax check passes.
- External image URLs and external font imports: none.
- Browser click-through could not be run here because the headless browser returned `ERR_BLOCKED_BY_ADMINISTRATOR` for both local and localhost navigation. Final hosted/device interaction testing remains required.

## Honesty / scope
This is a front-end prototype. All demo prices, discount rewards, and cart values are illustrative; there is no live product inventory, checkout, shipping, user account, or payment processor. The adult access prompt is self-attestation, not ID verification. Image references are supplied campaign artwork and are not a claim that a specific product is in stock.

## Wellness references
- Planned Parenthood, Sex Toys: https://www.plannedparenthood.org/learn/sex-pleasure-and-sexual-dysfunction/sex-and-pleasure/sex-toys
- Cleveland Clinic, Vaginal pH: https://my.clevelandclinic.org/health/diagnostics/vaginal-ph
- WHO, Eliminating virginity testing: https://www.who.int/news/item/17-10-2018-interagency-statement-calls-for-the-elimination-of-virginity-testing
- Joyal et al., What Exactly Is an Unusual Sexual Fantasy? Journal of Sexual Medicine (2015): https://academic.oup.com/jsm/article-abstract/12/2/328/6980029
