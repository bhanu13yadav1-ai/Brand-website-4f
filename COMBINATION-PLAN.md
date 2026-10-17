# Combination decision

| Area | Best source | Why it is selected | Merge decision |
|---|---|---|---|
| Catalog/Try-On rules | Brand-website-3 | Most recent 1.1.0 behavior, selected-image mapping, detail view disabled when absent, search/sort/reset and 22 reported automated checks | Use as the functional baseline |
| Homepage and product paths | Brand-website-1 | Stronger campaign-led landing page and a dedicated After Dark navigation destination | Use the visual hierarchy; keep adult catalog separate |
| Wellness | Brand-website-2 | Dedicated wellness.html / wellness.css / wellness.js and category-filter approach | Bring finder/reset behavior into the single site, while keeping it separately gated |
| Plus-One/adult prompts | Brand-website-3 | Local preview, no fake providers/availability, explicit boundary and privacy notes | Keep as an optional section, not a core shopping path |
| Cart | Brand-website-1 | Demo bag interactions exist | Label it demo-only until a real backend exists |

## Main risks found

1. These repositories contain different generations of the same static app. Blindly copying all files together can overwrite newer app.js/index.html/styles.css and introduce incompatible IDs or missing assets.
2. Brand-website-1 refers to `assets/home-after-dark-hero.webp`, but that path was not present in its root listing. Confirm nested asset/deploy structure before using that hero as-is.
3. README/test notes in the reviewed repositories consistently say there is no real store backend, inventory, checkout/payment, connected account system or true AI virtual try-on.
4. The listed product catalog mixes campaign images, design concepts, and external-brand references. It must not be presented as 43 verified SKUs.
5. Repo 3's test result reports 22/22 in-memory DOM checks, but explicitly says this is not a live GitHub Pages or real-image visual test. Real Android testing is still required.

## Deployment recommendation

Safest path: publish this combination to a **new test repository or branch** first, verify images load and test the Android UI, then decide whether to replace the active Pages site. Do not delete original image assets or overwrite the only good copy without a backup.
