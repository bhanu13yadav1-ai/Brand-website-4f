# BLACKED Big Update V1.8

## What changed
- **Image-loading repair:** the homepage hero, all 8 360° angle frames, wellness illustrations, cropped reference visuals and all local assets are embedded into `index.html`/`app.js` as data URLs. A fallback catches unexpected image failures, so a missing `/assets/` folder should no longer show broken-image icons.
- **Missing Intimates pictures replaced:** the supplied V1.7 ZIP did not include the original legacy `ref-*`, `design-*`, or SYRN SVG files. Four generated, clearly labelled editorial concept images replace those broken references. They are concepts, not verified stock or supplier photography.
- **Three main experiences stay separate:** Intimates, After Dark 18+, and Women’s Wellness. Fit Studio, 360° preview and size guide remain available as tools.
- **Couples Corner:** flirty, suggestive but non-graphic fantasy prompts; users can choose a vibe, generate another prompt and copy it. Prompts are not sent or saved. It includes an opt-out / consent reminder.
- **Size Surprise Wheel:** select For Him, dildo or butt-plug size-guide mode; spin to reveal a comparison band plus a demo coupon; add its product concept to the demo bag. It does not predict any person’s body size.
- **Size guide improvements:** length vs girth/circumference explained; dildo dimensions use usable length + maximum diameter; butt-plug dimensions use widest diameter + usable length + secure flared-base reminder. An optional cm/inches converter is included.

## Important limitations
- This is a static prototype. No real inventory, product variants, account backend, price calculation, coupon engine, payment provider, checkout or order management is connected. Discount codes are visual demo rewards only.
- Generated fashion images and sex-toy SVGs are design concepts, not proof of real product inventory or verified product dimensions/materials. Obtain supplier-approved imagery and specifications before selling.
- The 360° viewer uses eight generated concept-angle images, not manufacturer-supplied 3D photography.
- The simple 18+ confirmation is not identity verification.
- The Couple’s Corner prompts are flirty and suggestive, not explicit. Consent and the ability to skip any prompt are emphasised.

## Image reliability
All local asset keys are included as embedded data URLs in `app.js`. The hero, first 360° frame and reference strip images are embedded directly into `index.html`. This is designed to prevent broken images even when uploading from a phone accidentally omits the `assets/` folder. Keep the folder anyway for easier editing.

## Deploy from a phone
1. Extract the ZIP.
2. Open your GitHub repository and upload/replace `index.html`, `styles.css`, `app.js` and `VERSION.txt` at the repository root.
3. Upload the full `assets/` folder too (recommended, although the current code embeds the assets). Do not upload the outer wrapper folder as a nested folder.
4. Commit changes, wait for GitHub Pages to finish, then refresh/reopen the live URL.

## Sources used for the size guide
- NHS Sexual Health St Helens — https://www.sexualhealthsthelens.nhs.uk/adult-the-penis
- Planned Parenthood Toronto — https://ppt.on.ca/factsheets/anal-play/
- Planned Parenthood — https://www.plannedparenthood.org/learn/sex-pleasure-and-sexual-dysfunction/sex-and-pleasure/sex-toys
- Cleveland Clinic — https://health.clevelandclinic.org/safe-sex
