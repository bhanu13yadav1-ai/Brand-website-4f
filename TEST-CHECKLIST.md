# Fusion 3.0 smoke-test checklist

- [ ] Open `index.html` locally; accept the site 18+ prompt.
- [ ] Check all navigation links on desktop and a 360–430px wide phone viewport.
- [ ] On Sanskari Edit, type into search, switch all category filters, and change sort order.
- [ ] Open and close each story preview; make sure the full poster text remains visible.
- [ ] Save and unsave stories; reload and confirm the wishlist persists.
- [ ] Add two different stories to the demo bag; increase/decrease quantities; remove an item.
- [ ] Confirm the demo checkout message makes clear that no order/payment occurs.
- [ ] Open Wellness only after checking the 18+ confirmation; test each topic and finder/reset.
- [ ] Test date ideas, message variations, message copy, and rotating conversation prompts.
- [ ] Save a fit note and profile preference, reload, and confirm they persist locally.
- [ ] Export the demo data JSON; test reset only after deciding to clear local state.
- [ ] On the published HTTPS site, verify the service worker installs and refreshes correctly.
- [ ] Test at least one Android Chrome device and one desktop browser before treating as production-ready.

The current build has automated static checks run by the package creator, but real-device checks above still need to be done before public production use.
