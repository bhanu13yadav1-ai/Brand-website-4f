# BLACKED Visual Reference v3 — test notes

## Automated/static checks run during packaging

- `node --check app.js` completed without syntax errors.
- All referenced local image filenames exist in `assets/`.
- All three required entry assets (`index.html`, `styles.css`, `app.js`) are included.
- Product cards are created from one data list and feed the wishlist, demo bag and category views.

## Test on your Android phone before publishing

- [ ] Open `index.html` or the GitHub Pages URL; check the header, banner and cards at phone width.
- [ ] Use Home, Innerwear and Sanskari Edit from both top navigation and bottom navigation.
- [ ] Search and filter Innerwear/Sanskari products.
- [ ] Open Wellness 18+, try to enter without checking the age box, then confirm 18+ and enter.
- [ ] In Wellness, test the guidance finder and filters.
- [ ] Save a product with ♡, open Wishlist and refresh to check persistence.
- [ ] Add a product to the demo bag, open the bag, remove it and refresh.
- [ ] Generate a date plan, message and conversation prompt in Boyfriend.
- [ ] Save and clear notes in Fit Studio.
- [ ] Confirm that no card or content causes horizontal page scrolling.

## Scope note

The web browser automation in the packaging environment blocked the local page from loading, so these interactions are wired in the code and syntax-checked, but a full end-to-end browser run and a live GitHub Pages check are still outstanding. Do not treat this as production QA.
