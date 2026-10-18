# V1.8 Research & Upgrade Plan

## Size language implemented
- **Penis size:** length and girth/circumference are different measurements. Length is measured along the top from base to tip; girth is a soft tape wrapped around the mid-shaft / widest part. No measurement is a body score. The optional converter handles cm and inches and does not save or send entries.
- **Dildo size:** compare usable/insertion length and maximum diameter rather than only total length or unstandardised labels such as medium/large. The app describes diameter as straight-across width and notes circumference is approximately diameter × 3.14.
- **Butt-plug size:** compare widest diameter/width and usable length; a secure flared base is a safety requirement. Use a toy only as intended, use suitable lubricant, follow the manufacturer's instructions and stop if there is pain.
- **Wheel:** produces a size-guide band and a demo coupon for entertainment/shopping navigation. It never claims to predict a boyfriend's anatomy. Actual product variants must match manufacturer specifications before any real sale or discount.

## Sources consulted
- NHS Sexual Health St Helens — adult penis overview and general size context: https://www.sexualhealthsthelens.nhs.uk/adult-the-penis
- Planned Parenthood Toronto — anal-play safety, flared base and toy hygiene: https://ppt.on.ca/factsheets/anal-play/
- Planned Parenthood — sex-toy overview: https://www.plannedparenthood.org/learn/sex-pleasure-and-sexual-dysfunction/sex-and-pleasure/sex-toys
- Cleveland Clinic — consent, boundaries and safer-sex considerations: https://health.clevelandclinic.org/safe-sex

## Image root cause & fix
The V1.7 zip contained assets in its local `assets/` folder, but the user-provided screenshots show those local paths were broken after deployment. The most likely operational cause is that the folder was omitted during mobile GitHub upload. V1.8 prevents this class of failure by embedding every local image/SVG/WebP/JPG as a `data:` URL in JavaScript and embedding the hero, initial 360 frame and static reference-strip images into HTML. A global error fallback catches unexpected `<img>` failures.

The original legacy `ref-*`, `design-*` and `syrn-*.svg` files were not in the provided V1.7 zip, and were not accessible in the working directory. Four new generated editorial images are used as clearly labelled concepts instead of leaving broken icons; they are not represented as actual inventory or approved product imagery.

## Further improvements after deployment
1. Replace concept images with approved supplier photos and actual product-only transparent cutouts.
2. Replace the 8 generated 360-degree concepts with true turntable photos or a manufacturer-supplied 3D model.
3. Connect a backend/commerce provider only after supplier, pricing, privacy, stock and relevant legal checks are complete.
