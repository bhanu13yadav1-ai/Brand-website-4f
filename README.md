# BLACKED Fusion 4.0 — modular, image-bundled concept shop

This is a **front-end prototype**, packaged as separate HTML, CSS, JavaScript and local image assets—not a single HTML-only file. It is built mobile-first and does not need a CDN or remote image host.

## Package contents

- `index.html` — semantic page structure and separate sections.
- `styles.css` — responsive layouts, accessible states and visual system.
- `app.js` — tab/navigation interactions, search/filter, saved styles, fit notes, generated messages, three independent wheels and local demo-bag behavior.
- `assets/` — five optimized WebP campaign posters plus one clean hero crop made from the supplied artwork.
- `data/catalog.json` — sample front-end catalog concepts (not a real stock feed).
- `TEST-CHECKLIST.md` — automated and manual test notes.

## Main sections

1. **Innerwear** — local campaign-image cards, search, category filtering and saved styles.
2. **Sanskari Edit** — dedicated black/gold campaign gallery, plus a respectful “Faith & Culture Edit” teaser marked Coming Soon (Muslim- and Christian-inspired moodboards are not represented as authoritative religious guidance).
3. **Wellness 18+** — self-attestation gate; body/anatomy education; simple dimensions guide; separate dildo and butt-plug preference/discount wheels; product-care, lubrication and flared-base safety notes.
4. **Boyfriend** — date ideas, message prompts, suggestive Hinglish/English lines, a secret fantasy conversation deck, boundaries and its own size/deal wheel.
5. **Fit Studio** — local fit notes and saved style references.

## Image-load fix

All six bundled images are stored in `assets/` and referenced by local relative paths such as `assets/sanskari-mirror.webp`. Extract the **whole ZIP**, not only `index.html`. For GitHub Pages, upload `index.html`, `styles.css`, `app.js`, `data/` and the entire `assets/` directory into the same published root. The JavaScript swaps any missing image for a branded fallback instead of showing a broken-image icon. `window.BLACKED_FUSION_DIAGNOSTICS()` can be inspected in the browser console.

## Research notes and limits

- Professionally measured adult penis-size systematic review: average erect length 13.12 cm and circumference 11.66 cm, in the included samples; these are population statistics, not targets. [Veale et al., BJU International / PubMed](https://pubmed.ncbi.nlm.nih.gov/25487360/).
- Toys are not standardized by labels; check the manufacturer's actual insertable length, maximum diameter, material and care guidance. [Planned Parenthood: Sex Toys](https://www.plannedparenthood.org/learn/sex-pleasure-and-sexual-dysfunction/sex-and-pleasure/sex-toys).
- Anal toys need a flared base/stop feature and plenty of suitable lubricant; the anus does not lubricate itself. [Planned Parenthood: Safer Sex](https://www.plannedparenthood.org/learn/stds-hiv-safer-sex/safer-sex/how-do-i-make-sex-safer).
- Vaginal appearance and dimensions naturally vary, and a hymen exam is not a reliable way to determine sexual history. [Cleveland Clinic: Vagina](https://my.clevelandclinic.org/health/body/22469-vagina).
- Sexual fantasy content differs between individuals; fantasies are not proof of what someone wants to do in real life. [Lehmiller & Gormezano, 2023 review](https://pubmed.ncbi.nlm.nih.gov/36436469/).
- Consent communication: [Planned Parenthood](https://www.plannedparenthood.org/learn/relationships/sexual-consent/how-do-i-talk-about-consent).

The wheels use illustrative size filters and **fake demo discounts only**. They do not check body measurements, display real inventory, create real deals, or process payment. This demo has no secure account system or formal age verification; the 18+ gate is self-attestation. Fantasy text is generated in memory only and is not written to browser storage. Saved styles/fit notes are local to the browser and can be cleared; avoid storing sensitive private details on a shared device.

## Quick run

Open `index.html` in a modern browser after extracting the ZIP. When publishing, keep all files and folders together. No build step or internet connection is required to render the local campaign images.
