(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const ASSET = 'https://raw.githubusercontent.com/bhanu13yadav1-ai/Brand-website-3/main/';
  const products = [
  {
    "id": "move",
    "name": "Move Together",
    "category": "campaign",
    "label": "01 · BLACKED CAMPAIGN",
    "image": "ref-01-blacked-move-together.png",
    "description": "Black-and-grey movement-inspired styling from the original campaign visual.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "yoga",
    "name": "Yoga Together",
    "category": "campaign",
    "label": "02 · BLACKED CAMPAIGN",
    "image": "ref-02-blacked-yoga-together.png",
    "description": "Warm-studio lifestyle reference with an active, confident mood.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "redlace",
    "name": "Red Lace Bodysuit",
    "category": "reference",
    "label": "03 · DESIGN REFERENCE",
    "image": "ref-03-red-lace-bodysuit-reference.png",
    "description": "Red lace and strappy-construction inspiration.",
    "note": "Reference image only. Product ownership, specifications and commercial usage rights need verification."
  },
  {
    "id": "stretch",
    "name": "Movement & Stretch",
    "category": "reference",
    "label": "04 · SHOOT REFERENCE",
    "image": "ref-04-movement-stretch-reference.png",
    "description": "Movement-led photo direction for a comfortable editorial campaign.",
    "note": "Reference image only. Product ownership, specifications and commercial usage rights need verification."
  },
  {
    "id": "blacklace",
    "name": "Black Lace Cut-Out Set",
    "category": "reference",
    "label": "05 · DESIGN REFERENCE",
    "image": "ref-05-black-lace-cutout-reference.png",
    "description": "Black lace and matching-set construction inspiration.",
    "note": "Reference image only. Product ownership, specifications and commercial usage rights need verification."
  },
  {
    "id": "velvet",
    "name": "Velvet Lace Set",
    "category": "reference",
    "label": "06 · DESIGN REFERENCE",
    "image": "ref-06-velvet-lace-reference.png",
    "description": "Pink velvet and black lace details from a supplied visual reference.",
    "note": "Reference image only. Product ownership, specifications and commercial usage rights need verification."
  },
  {
    "id": "rose",
    "name": "Rose Strap Mannequin Set",
    "category": "reference",
    "label": "07 · PRODUCT DETAIL REFERENCE",
    "image": "ref-07-rose-strap-mannequin-reference.jpg",
    "description": "Mannequin reference for straps and garment construction.",
    "note": "Reference image only. Product ownership, specifications and commercial usage rights need verification."
  },
  {
    "id": "butterfly",
    "name": "Pink Butterfly Lace Detail",
    "category": "reference",
    "label": "08 · PRODUCT DETAIL REFERENCE",
    "image": "ref-08-pink-butterfly-detail-reference.jpg",
    "description": "Close-up reference for decorative details and colour direction.",
    "note": "Reference image only. Product ownership, specifications and commercial usage rights need verification."
  },
  {
    "id": "signature",
    "name": "Black Comfort Set",
    "category": "campaign",
    "label": "09 · BLACKED CAMPAIGN",
    "image": "ref-09-blacked-comfort-set.png",
    "description": "Comfort-set campaign image retained as the selected catalog reference.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "together",
    "name": "Better Together",
    "category": "campaign",
    "label": "10 · BLACKED CAMPAIGN",
    "image": "ref-10-blacked-better-together.png",
    "description": "Campaign reference with a confident, together-focused mood.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "sculpt",
    "name": "Midnight Sculpt",
    "category": "concept",
    "label": "11 · BLACKED DESIGN CONCEPT",
    "image": "design-11-midnight-sculpt.png",
    "description": "Charcoal cups with black lace accents and a matching strappy brief concept.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale.",
    "detail": "design-11-midnight-sculpt-product.jpg"
  },
  {
    "id": "midnight",
    "name": "Midnight Lace",
    "category": "concept",
    "label": "12 · BLACKED DESIGN CONCEPT",
    "image": "design-12-midnight-lace.png",
    "description": "Black floral lace with adjustable strappy details and a matching brief concept.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale.",
    "detail": "design-12-midnight-lace-product.jpg"
  },
  {
    "id": "scarlet",
    "name": "Scarlet Satin",
    "category": "concept",
    "label": "13 · BLACKED DESIGN CONCEPT",
    "image": "design-13-scarlet-satin.png",
    "description": "Deep burgundy satin-and-lace matching set concept.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale.",
    "detail": "design-13-scarlet-satin-product.jpg"
  },
  {
    "id": "ivory",
    "name": "Ivory Bloom",
    "category": "concept",
    "label": "14 · BLACKED DESIGN CONCEPT",
    "image": "design-14-ivory-bloom.png",
    "description": "Ivory lingerie with delicate floral embroidery and bow details concept.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale.",
    "detail": "design-14-ivory-bloom-product.jpg"
  },
  {
    "id": "syrn-demi",
    "name": "Showpiece Basque · supplied reference",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-showpiece-basque.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-balconette",
    "name": "Garter Skirt · front reference",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-garter-skirt-front.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-bodysuit",
    "name": "Garter Skirt · back reference",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-garter-skirt-back.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "midnight-lace-alt",
    "name": "Midnight Lace · alternate concept",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-midnight-lace-editorial.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "midnight-lace-upload",
    "name": "Midnight Lace · latest uploaded reference",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-midnight-lace-user-upload.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "midnight-sculpt-alt",
    "name": "Midnight Sculpt · alternate concept",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-midnight-sculpt-variation.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "noir-rose",
    "name": "Noir Halter & Rose Demi",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-noir-halter-rose-demi.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "scarlet-ivory-grid",
    "name": "Scarlet Satin & Ivory Bloom",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-scarlet-ivory-grid.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "curve-comfort",
    "name": "Curve Comfort",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-curve-comfort.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "model-duo",
    "name": "Everyday Duo · style reference",
    "category": "campaign",
    "label": "BLACKED CAMPAIGN REFERENCE",
    "image": "owner-ref-model-duo.jpg",
    "description": "Campaign visual retained for visual direction and collection storytelling.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "duo-campaign",
    "name": "Better Together · duo campaign",
    "category": "campaign",
    "label": "BLACKED CAMPAIGN CONCEPT",
    "image": "owner-ref-blacked-duo-campaign.jpg",
    "description": "Campaign visual retained for visual direction and collection storytelling.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "ivory-alt",
    "name": "Ivory Bloom · visual variation",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-ivory-bloom-variation.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "move-alt",
    "name": "Move Together · alternate campaign",
    "category": "campaign",
    "label": "BLACKED CAMPAIGN REFERENCE",
    "image": "owner-ref-move-together-alt.jpg",
    "description": "Campaign visual retained for visual direction and collection storytelling.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "cat-cow",
    "name": "Cat Cow Flow Together",
    "category": "campaign",
    "label": "BLACKED CAMPAIGN CONCEPT",
    "image": "owner-ref-cat-cow-flow.jpg",
    "description": "Campaign visual retained for visual direction and collection storytelling.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "bow-lace",
    "name": "Bow Lace Collection",
    "category": "concept",
    "label": "BLACKED DESIGN CONCEPT",
    "image": "owner-ref-bow-lace-collection.jpg",
    "description": "BLACKED design concept for visual planning, product direction and style-board exploration.",
    "note": "Design concept only, not confirmed inventory. Verify construction, material, sizing, stock and commercial image rights before sale."
  },
  {
    "id": "move-upload",
    "name": "Move Together · supplied alternate",
    "category": "campaign",
    "label": "BLACKED CAMPAIGN REFERENCE",
    "image": "owner-ref-move-together-upload.jpg",
    "description": "Campaign visual retained for visual direction and collection storytelling.",
    "note": "Campaign reference only—not proof of a separate sellable SKU. Verify product specs, image rights, sizes and stock before selling."
  },
  {
    "id": "stretch-upload",
    "name": "Movement & Stretch · supplied alternate",
    "category": "reference",
    "label": "MOVEMENT DESIGN REFERENCE",
    "image": "owner-ref-stretch-upload.jpg",
    "description": "Design or product-detail reference for garment construction, styling or visual direction.",
    "note": "Reference image only. Product ownership, specifications and commercial usage rights need verification."
  },
  {
    "id": "syrn-garter-pose",
    "name": "Garter Skirt · alternate reference",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-garter-skirt-pose.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-luxury",
    "name": "Luxury Collection · supplied inspiration",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-luxury.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-bridal",
    "name": "Bridal Edit · supplied inspiration",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-bridal.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-gift",
    "name": "Gift Collection · supplied inspiration",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-gift.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-romance",
    "name": "Soft Romance · supplied inspiration",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-romance.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-garter-front",
    "name": "Garter Skirt · front product reference",
    "category": "external",
    "label": "EXTERNAL BRAND · DESIGN REFERENCE",
    "image": "external-ref-syrn-garter-skirt-front.jpg",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-skirting-editorial",
    "name": "Skirting Around Garter Skirt · campaign reference",
    "category": "external",
    "label": "USER-SUPPLIED EXTERNAL BRAND REFERENCE",
    "image": "external-ref-syrn-skirting-garter-editorial.png",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-own-night",
    "name": "Own the Night · campaign reference",
    "category": "external",
    "label": "USER-SUPPLIED EXTERNAL BRAND REFERENCE",
    "image": "external-ref-syrn-own-the-night.png",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-curves-confidence",
    "name": "Curves & Confidence · campaign reference",
    "category": "external",
    "label": "USER-SUPPLIED EXTERNAL BRAND REFERENCE",
    "image": "external-ref-syrn-curves-confidence.png",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-signature-lace",
    "name": "The Signature Lace Set · reference",
    "category": "external",
    "label": "USER-SUPPLIED EXTERNAL BRAND REFERENCE",
    "image": "external-ref-syrn-signature-lace.png",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-midnight-allure",
    "name": "Midnight Allure · campaign reference",
    "category": "external",
    "label": "USER-SUPPLIED EXTERNAL BRAND REFERENCE",
    "image": "external-ref-syrn-midnight-allure.png",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  },
  {
    "id": "syrn-garter-back-full",
    "name": "Garter Skirt · full back-view reference",
    "category": "external",
    "label": "USER-SUPPLIED EXTERNAL BRAND REFERENCE",
    "image": "external-ref-syrn-garter-back-full.png",
    "description": "External-brand visual supplied for styling and composition inspiration only.",
    "note": "External-brand reference only—not BLACKED inventory or a confirmed collaboration. Confirm permission/rights before public commercial use."
  }
];
  const state = {filter:'all',query:'',sort:'featured',savedOnly:false,selected:null,compare:[],bag:[],detail:false};
  const savedKey='blackedFusionSavedV2', passportKey='blackedFusionFitPassportV2';
  const readSaved=()=>{try{const v=JSON.parse(localStorage.getItem(savedKey)||'[]');return Array.isArray(v)?v:[]}catch{return[]}};
  let saved=new Set(readSaved());
  const byId=id=>products.find(p=>p.id===id);
  const asset=name=>ASSET+name;
  const escapeHtml=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  let toastTimer;
  function toast(message){const el=$('#toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2500)}
  function persistSaved(){try{localStorage.setItem(savedKey,JSON.stringify([...saved]))}catch{toast('Browser storage unavailable; saved styles may not persist.')}$('#savedCount').textContent=saved.size}
  function imageTag(product,cls=''){return `<img class="${cls}" src="${asset(product.image)}" alt="${escapeHtml(product.name)} — ${escapeHtml(product.label)}" loading="lazy" onerror="this.onerror=null;this.src='${asset('ref-09-blacked-comfort-set.png')}'">`}
  function renderCatalog(){const grid=$('#productGrid');if(!grid)return;let list=products.filter(p=>state.filter==='all'||p.category===state.filter);if(state.query){const q=state.query.toLowerCase();list=list.filter(p=>(p.name+' '+p.label+' '+p.description).toLowerCase().includes(q))}if(state.savedOnly)list=list.filter(p=>saved.has(p.id));if(state.sort==='name-asc')list.sort((a,b)=>a.name.localeCompare(b.name));if(state.sort==='name-desc')list.sort((a,b)=>b.name.localeCompare(a.name));$('#catalogStatus').textContent=`Showing ${list.length} of ${products.length} styles/references`;$('#catalogEmpty').hidden=list.length!==0;grid.innerHTML=list.map(p=>`<article class="product-card"><button class="product-image-button" type="button" data-open="${p.id}" aria-label="Open ${escapeHtml(p.name)} details">${imageTag(p)}<span class="product-open">↗</span></button><div class="product-info"><span class="reference-tag">${escapeHtml(p.label)}</span><h3>${escapeHtml(p.name)}</h3><p class="product-desc">${escapeHtml(p.description)}</p><div class="product-actions"><button class="view-style" type="button" data-open="${p.id}">View style →</button><button class="save-button ${saved.has(p.id)?'saved':''}" type="button" data-save="${p.id}" aria-label="${saved.has(p.id)?'Remove saved style':'Save style'}">${saved.has(p.id)?'♥':'♡'}</button><button class="compare-button" type="button" data-compare="${p.id}" aria-label="${state.compare.includes(p.id)?'Remove from compare':'Add to compare'}">${state.compare.includes(p.id)?'✓':'⇄'}</button></div></div></article>`).join('');
    const filters={all:products.length,campaign:products.filter(p=>p.category==='campaign').length,concept:products.filter(p=>p.category==='concept').length,reference:products.filter(p=>p.category==='reference').length,external:products.filter(p=>p.category==='external').length};$$('[data-count]').forEach(el=>el.textContent=filters[el.dataset.count]??0);$$('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===state.filter));$('#savedOnlyToggle').setAttribute('aria-pressed',String(state.savedOnly));$('#savedOnlyToggle').classList.toggle('btn-dark',state.savedOnly);renderCompare();}
  function renderCompare(){const panel=$('#comparisonPanel');panel.hidden=!state.compare.length;$('#comparisonItems').innerHTML=state.compare.map(id=>{const p=byId(id);if(!p)return'';return `<div class="comparison-item">${imageTag(p)}<span>${escapeHtml(p.name)}<small>${escapeHtml(p.label)}</small></span><button data-remove-compare="${p.id}" aria-label="Remove ${escapeHtml(p.name)}">×</button></div>`}).join('')}
  function toggleSave(id){if(saved.has(id))saved.delete(id);else saved.add(id);persistSaved();renderCatalog();if(state.selected===id)$('#dialogSave').textContent=saved.has(id)?'♥ Saved style':'♡ Save style'}
  function toggleCompare(id){const i=state.compare.indexOf(id);if(i>=0)state.compare.splice(i,1);else if(state.compare.length>=3){toast('Compare up to three styles at a time.');return}else state.compare.push(id);renderCatalog();toast(i>=0?'Removed from compare':'Added to compare')}
  function selectStudio(id){const p=byId(id);if(!p)return;$('#studioProduct').value=id;$('#studioReference').src=asset(state.detail&&p.detail?p.detail:p.image);$('#studioReference').alt=p.name+' selected reference';$('#studioReferenceName').textContent=p.name;$('#studioReferenceType').textContent=p.detail?'Reference image · garment-detail view available':'Exact selected reference · no detail view mapped';}
  function openProduct(id){const p=byId(id);if(!p)return;state.selected=id;state.detail=false;$('#dialogTitle').textContent=p.name;$('#dialogCategory').textContent=p.label;$('#dialogDescription').textContent=p.description;$('#dialogNote').textContent=p.note;$('#dialogImage').src=asset(p.image);$('#dialogImage').alt=p.name+' reference image';$('#dialogSave').textContent=saved.has(id)?'♥ Saved style':'♡ Save style';$('#dialogCompare').textContent=state.compare.includes(id)?'Remove from compare':'Add to compare';$('#dialogViewToggle').hidden=!p.detail;$('#dialogViewToggle').textContent='Show product detail';$('#productDialog').showModal();}
  function openBag(){renderBag();$('#bagDrawer').classList.add('open');$('#bagDrawer').setAttribute('aria-hidden','false');$('#drawerBackdrop').hidden=false;document.body.classList.add('lock-bag')}
  function closeBag(){ $('#bagDrawer').classList.remove('open');$('#bagDrawer').setAttribute('aria-hidden','true');$('#drawerBackdrop').hidden=true;document.body.classList.remove('lock-bag') }
  function renderBag(){const area=$('#bagItems');$('#bagCount').textContent=state.bag.reduce((n,x)=>n+x.qty,0);if(!state.bag.length){area.innerHTML='<p class="hint">Your demo bag is empty. Adding a style here does not place an order.</p>';return}area.innerHTML=state.bag.map(x=>{const p=byId(x.id);return `<div class="bag-item">${imageTag(p)}<div><b>${escapeHtml(p.name)}</b><small>Reference/concept · demo only<br>Quantity: ${x.qty}</small></div><button data-remove-bag="${p.id}" aria-label="Remove ${escapeHtml(p.name)}">×</button></div>`}).join('')}
  function addBag(id){let x=state.bag.find(x=>x.id===id);if(x)x.qty++;else state.bag.push({id,qty:1});renderBag();toast('Added to demo bag — no order created.');}
  function unlockGate(id,contentId,checkId,errorId){if(!$(checkId).checked){$(errorId).hidden=false;return false}$(errorId).hidden=true;$(id).hidden=true;$(contentId).hidden=false;return true}
  // Navigation + main age gate.
  $('#ageAccept').addEventListener('click',()=>{$('#siteAgeGate').hidden=true;document.body.classList.remove('locked')});
  $('#ageDecline').addEventListener('click',()=>{$('#siteAgeGate').hidden=true;$('#underageScreen').hidden=false});
  $('#menuToggle').addEventListener('click',()=>{const open=$('#primaryNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open))});
  $$('#primaryNav a').forEach(a=>a.addEventListener('click',()=>{$('#primaryNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false')}));
  $('#catalogSearch').addEventListener('input',e=>{state.query=e.target.value.trim();renderCatalog()});$('#catalogSort').addEventListener('change',e=>{state.sort=e.target.value;renderCatalog()});
  $('#catalogFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;state.filter=b.dataset.filter;renderCatalog()});
  $('#resetCatalog').addEventListener('click',resetCatalog);$('#emptyReset').addEventListener('click',resetCatalog);
  function resetCatalog(){state.filter='all';state.query='';state.sort='featured';state.savedOnly=false;$('#catalogSearch').value='';$('#catalogSort').value='featured';renderCatalog()}
  $('#savedOnlyToggle').addEventListener('click',()=>{state.savedOnly=!state.savedOnly;renderCatalog()});$('#showSaved').addEventListener('click',()=>{state.savedOnly=true;state.filter='all';$('#catalogSearch').value='';state.query='';renderCatalog();$('#collection').scrollIntoView({behavior:'smooth'})});
  $('#productGrid').addEventListener('click',e=>{const open=e.target.closest('[data-open]');const save=e.target.closest('[data-save]');const comp=e.target.closest('[data-compare]');if(open)openProduct(open.dataset.open);else if(save)toggleSave(save.dataset.save);else if(comp)toggleCompare(comp.dataset.compare)});
  $('#comparisonItems').addEventListener('click',e=>{const b=e.target.closest('[data-remove-compare]');if(b)toggleCompare(b.dataset.removeCompare)});$('#clearCompare').addEventListener('click',()=>{state.compare=[];renderCatalog()});
  $('#closeDialog').addEventListener('click',()=>$('#productDialog').close());$('#productDialog').addEventListener('click',e=>{if(e.target===$('#productDialog'))$('#productDialog').close()});
  $('#dialogSave').addEventListener('click',()=>state.selected&&toggleSave(state.selected));$('#dialogCompare').addEventListener('click',()=>{if(!state.selected)return;toggleCompare(state.selected);$('#dialogCompare').textContent=state.compare.includes(state.selected)?'Remove from compare':'Add to compare'});$('#dialogBag').addEventListener('click',()=>{if(state.selected){addBag(state.selected);openBag()}});
  $('#dialogViewToggle').addEventListener('click',()=>{const p=byId(state.selected);if(!p?.detail)return;state.detail=!state.detail;$('#dialogImage').src=asset(state.detail?p.detail:p.image);$('#dialogViewToggle').textContent=state.detail?'Show campaign/reference':'Show product detail';selectStudio(p.id)});
  $('#sendToStudio').addEventListener('click',()=>{if(state.selected){$('#studioProduct').value=state.selected;selectStudio(state.selected)}$('#productDialog').close();$('#studio').scrollIntoView({behavior:'smooth'})});
  $('#openBag').addEventListener('click',openBag);$('#closeBag').addEventListener('click',closeBag);$('#drawerBackdrop').addEventListener('click',closeBag);$('#clearBag').addEventListener('click',()=>{state.bag=[];renderBag();toast('Demo bag cleared')});$('#bagItems').addEventListener('click',e=>{const b=e.target.closest('[data-remove-bag]');if(!b)return;state.bag=state.bag.filter(x=>x.id!==b.dataset.removeBag);renderBag()});

  // Product-specific reference display + optional user-owned transparent overlay.
  const canvas=$('#previewCanvas'),ctx=canvas.getContext('2d');let personImage=null,garmentImage=null,personObjectUrl=null,garmentObjectUrl=null;
  function drawCanvas(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#f0e7e2';ctx.fillRect(0,0,canvas.width,canvas.height);if(!personImage){$('#canvasPlaceholder').hidden=false;return}$('#canvasPlaceholder').hidden=true;const scale=Math.min(canvas.width/personImage.width,canvas.height/personImage.height);const w=personImage.width*scale,h=personImage.height*scale;ctx.drawImage(personImage,(canvas.width-w)/2,(canvas.height-h)/2,w,h);if(garmentImage){const pct=Number($('#overlayScale').value)/100;const gw=canvas.width*pct;const gh=gw*(garmentImage.height/garmentImage.width);const x=canvas.width*Number($('#overlayX').value)/100-gw/2;const y=canvas.height*Number($('#overlayY').value)/100-gh/2;ctx.drawImage(garmentImage,x,y,gw,gh)}}
  function readImage(file,done,which){if(!file)return;if(which==='person'&&personObjectUrl)URL.revokeObjectURL(personObjectUrl);if(which==='garment'&&garmentObjectUrl)URL.revokeObjectURL(garmentObjectUrl);const url=URL.createObjectURL(file);if(which==='person')personObjectUrl=url;else garmentObjectUrl=url;const im=new Image();im.onload=()=>done(im);im.onerror=()=>toast('Could not read that image. Please try another file.');im.src=url}
  $('#studioProduct').innerHTML=products.map(p=>`<option value="${p.id}">${escapeHtml(p.name)} — ${escapeHtml(p.label)}</option>`).join('');$('#studioProduct').addEventListener('change',e=>selectStudio(e.target.value));selectStudio(products[0].id);drawCanvas();
  $('#personPhoto').addEventListener('change',e=>readImage(e.target.files?.[0],im=>{personImage=im;drawCanvas();$('#studioStatus').textContent='Photo loaded locally. Add a transparent garment PNG if you want to try a manual overlay.'},'person'));
  $('#garmentPng').addEventListener('change',e=>readImage(e.target.files?.[0],im=>{garmentImage=im;drawCanvas();$('#studioStatus').textContent='Transparent garment loaded locally. Adjust scale and position manually.'},'garment'));
  ['overlayScale','overlayX','overlayY'].forEach(id=>$('#'+id).addEventListener('input',()=>{$('#scaleValue').textContent=$('#overlayScale').value+'%';$('#xValue').textContent=$('#overlayX').value+'%';$('#yValue').textContent=$('#overlayY').value+'%';drawCanvas()}));
  $('#resetOverlay').addEventListener('click',()=>{$('#overlayScale').value=50;$('#overlayX').value=50;$('#overlayY').value=45;$('#scaleValue').textContent='50%';$('#xValue').textContent='50%';$('#yValue').textContent='45%';drawCanvas()});
  $('#downloadPreview').addEventListener('click',()=>{if(!personImage){toast('Upload your own photo before downloading a preview.');return}try{const a=document.createElement('a');a.download='blacked-manual-preview.png';a.href=canvas.toDataURL('image/png');a.click()}catch{toast('Download could not be created. Try loading local images again.')}});
  let dragging=false;canvas.addEventListener('pointerdown',e=>{if(!garmentImage)return;dragging=true;canvas.setPointerCapture(e.pointerId);moveOverlay(e)});canvas.addEventListener('pointermove',e=>{if(dragging)moveOverlay(e)});canvas.addEventListener('pointerup',()=>dragging=false);canvas.addEventListener('pointercancel',()=>dragging=false);function moveOverlay(e){const r=canvas.getBoundingClientRect();$('#overlayX').value=Math.max(0,Math.min(100,Math.round((e.clientX-r.left)/r.width*100)));$('#overlayY').value=Math.max(0,Math.min(100,Math.round((e.clientY-r.top)/r.height*100)));$('#xValue').textContent=$('#overlayX').value+'%';$('#yValue').textContent=$('#overlayY').value+'%';drawCanvas()}
  // Optional measurement pass with explicit consent + clear button.
  function loadPassport(){try{const p=JSON.parse(localStorage.getItem(passportKey)||'null');if(!p)return;$('#measureBand').value=p.band||'';$('#measureBust').value=p.bust||'';$('#measureHip').value=p.hip||'';$('#fitPreference').value=p.preference||'';$('#passportStatus').textContent='Saved on this device.'}catch{}}
  $('#savePassport').addEventListener('click',()=>{if(!$('#passportConsent').checked){$('#passportStatus').textContent='Tick the device-only consent box before saving.';return}const data={band:$('#measureBand').value,bust:$('#measureBust').value,hip:$('#measureHip').value,preference:$('#fitPreference').value};try{localStorage.setItem(passportKey,JSON.stringify(data));$('#passportStatus').textContent='Fit Passport saved on this device only. This is not a size recommendation.'}catch{$('#passportStatus').textContent='Browser storage is unavailable; nothing was saved.'}});
  $('#clearPassport').addEventListener('click',()=>{localStorage.removeItem(passportKey);['measureBand','measureBust','measureHip'].forEach(id=>$('#'+id).value='');$('#fitPreference').value='';$('#passportConsent').checked=false;$('#passportStatus').textContent='Saved details cleared from this browser.'});loadPassport();
  // Separate adult gates: entering one does not unlock another section.
  $('#enterWellness').addEventListener('click',()=>unlockGate('wellnessGate','wellnessContent','wellnessAgeConfirm','wellnessAgeError'));
  $('#enterAfterDark').addEventListener('click',()=>unlockGate('afterDarkGate','afterDarkContent','afterDarkAgeConfirm','afterDarkAgeError'));
  $('#enterPlusOne').addEventListener('click',()=>unlockGate('plusOneGate','plusOneContent','plusOneAgeConfirm','plusOneAgeError'));
  const wellnessIdeas={comfort:['Intimate Care & Essentials','Personal Wellness','Comfort-first Basics'],learn:['Learning Basics','Intimate Care & Essentials','Product Safety & Care'],relax:['Massage & Relaxation','Personal Wellness','Care & Storage'],couples:['Couples’ Communication','Comfort & Boundaries','Personal Wellness']};
  $('#findWellness').addEventListener('click',()=>{const goal=$('#wellnessGoal').value,priority=$('#wellnessPriority').value;let ideas=[...wellnessIdeas[goal]];if(priority==='quiet')ideas=[ideas[2],'Discreet Storage',ideas[0]];if(priority==='together')ideas=['Couples’ Communication','Comfort & Boundaries',ideas[0]];if(priority==='simple')ideas=['Care Instructions','Intimate Care & Essentials',ideas[0]];$('#wellnessFinderResult').textContent='Starting points only—these are category ideas, not product or medical recommendations.';$('#wellnessCards').innerHTML=ideas.map((v,i)=>`<article><span>0${i+1}</span><h3>${escapeHtml(v)}</h3><p>${escapeHtml(priority==='together'?'Prioritise communication and clear boundaries.':priority==='quiet'?'Check storage and care guidance.':priority==='simple'?'Read verified care instructions first.':'Explore at your own pace and stop if anything feels uncomfortable.')}</p></article>`).join('')});
  $('#resetWellness').addEventListener('click',()=>{$('#wellnessGoal').value='comfort';$('#wellnessPriority').value='gentle';$('#wellnessFinderResult').textContent='Choose preferences to see category ideas.';$('#wellnessCards').innerHTML='<article><span>01</span><h3>Intimate Care & Essentials</h3><p>General hygiene and care education.</p></article><article><span>02</span><h3>Massage & Relaxation</h3><p>Comfort-focused relaxation category.</p></article><article><span>03</span><h3>Personal Wellness</h3><p>Explore categories at your own pace.</p></article>'});
  $('#previewOuting').addEventListener('click',()=>{if(!$('#publicPlaceCheck').checked){$('#outingPreview').textContent='Please choose a public venue and arrange your own transport before creating a preview.';return}$('#outingPreview').textContent=`Local preview only: ${$('#outingType').value} · ${$('#outingStyle').value} · ${$('#outingDuration').value} · boundary: ${$('#outingBoundary').value} · public venue. Nothing was sent, booked or saved.`});
  const prompts=['What helps each person feel safe, heard and comfortable?','How should we check in if someone wants to pause or leave?','What are we each hoping to get from this outing?','What boundaries should be discussed before meeting?','What is a simple way to communicate a change of plan?'];
  $('#generatePrompts').addEventListener('click',()=>{$('#promptList').hidden=false;$('#promptList').innerHTML=prompts.map(p=>`<p>${escapeHtml(p)}</p>`).join('')});$('#clearPrompts').addEventListener('click',()=>{$('#promptList').hidden=true;$('#promptList').innerHTML=''});
  persistSaved();renderCatalog();
})();
