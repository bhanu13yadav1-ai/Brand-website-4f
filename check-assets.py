#!/usr/bin/env python3
"""Static audit for the BLACKED Fusion package (no network required)."""
from pathlib import Path
from html.parser import HTMLParser
from collections import Counter
import re, subprocess, sys, json

ROOT = Path(__file__).resolve().parent
html = (ROOT / 'index.html').read_text(encoding='utf-8')
css = (ROOT / 'css/styles.css').read_text(encoding='utf-8')
js = (ROOT / 'js/app.js').read_text(encoding='utf-8')

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.img_src=[]; self.files=[]
    def handle_starttag(self, tag, attrs):
        d=dict(attrs)
        if d.get('id'): self.ids.append(d['id'])
        if tag == 'img' and d.get('src'): self.img_src.append(d['src'])
        if tag in ('script','link'):
            p=d.get('src') if tag=='script' else d.get('href')
            if p and not p.startswith(('http://','https://','data:','#')): self.files.append(p)

p=AuditParser(); p.feed(html)
dups=sorted(k for k,v in Counter(p.ids).items() if v>1)
ids=set(p.ids)
selector_ids=set(re.findall(r"\$\(['\"]#([A-Za-z][\w-]*)['\"]\)",js))
# These elements are deliberately injected only after a user action/state change.
dynamic_ids={'resetCatalog','copyFantasy','skipFantasy'}
missing_ids=sorted(selector_ids-ids-dynamic_ids)

image_refs=set()
for src in p.img_src:
    if src.startswith('assets/'): image_refs.add(src)
image_refs.update(re.findall(r'''(?:src|href)\s*=\s*["'](assets/[^"'#?]+)''',html))
# Image references generated from `asset(<filename>)` and `safeAsset(<filename>)`.
js_filenames=set(re.findall(r'''(?:image|asset)\s*:\s*["']([^"']+\.(?:webp|png|jpe?g|gif|svg))["']''',js,re.I))
js_filenames.update(re.findall(r'''(?:asset|safeAsset)\(["']([^"']+\.(?:webp|png|jpe?g|gif|svg))["']\)''',js,re.I))
for name in js_filenames:
    image_refs.add(name if name.startswith('assets/') else 'assets/'+name)
css_files=set(re.findall(r'''url\(["']?(assets/[^"')]+)["']?\)''',css))
image_refs.update(css_files)
missing_images=sorted(ref for ref in image_refs if not (ROOT/ref).is_file())

file_refs=set(p.files)
missing_files=sorted(ref for ref in file_refs if not (ROOT/ref).is_file())
external_img_urls=bool(re.search(r'''<img\b[^>]*\bsrc\s*=\s*["']https?://''',html,re.I))
external_font_import=bool(re.search(r'''@import\s+url\(["']?https?://''',css,re.I))
remote_asset_refs=bool(re.search(r'''(?:src|href)\s*=\s*["']https?://[^"']+\.(?:webp|png|jpe?g|gif|svg)''',html+js,re.I))

asset_files=[]; invalid_images=[]
try:
    from PIL import Image
    for f in sorted((ROOT/'assets').iterdir()):
        if f.suffix.lower() in {'.webp','.png','.jpg','.jpeg','.gif','.svg'}:
            asset_files.append(f.name)
            if f.suffix.lower() != '.svg':
                try:
                    with Image.open(f) as im: im.verify()
                except Exception: invalid_images.append(f.name)
except ImportError:
    asset_files=[f.name for f in (ROOT/'assets').iterdir() if f.is_file()]

syntax=subprocess.run(['node','--check',str(ROOT/'js/app.js')],capture_output=True,text=True)
report={
 'javascript_syntax':'PASS' if syntax.returncode==0 else 'FAIL',
 'html_parser':'PASS',
 'html_id_count':len(p.ids),
 'duplicate_html_ids':dups,
 'static_js_selector_count':len(selector_ids),
 'missing_static_selector_ids':missing_ids,
 'allowed_dynamic_ids':sorted(dynamic_ids),
 'local_asset_references_checked':len(image_refs),
 'missing_local_asset_references':missing_images,
 'local_css_js_files_checked':len(file_refs),
 'missing_css_js_files':missing_files,
 'packaged_image_file_count':len(asset_files),
 'invalid_image_files':invalid_images,
 'remote_image_references_in_page':external_img_urls or remote_asset_refs,
 'remote_font_import':external_font_import,
 'asset_files':asset_files,
}
print(json.dumps(report,ensure_ascii=False,indent=2))
problems=(syntax.returncode or dups or missing_ids or missing_images or missing_files or invalid_images or external_img_urls or remote_asset_refs or external_font_import)
if problems:
    if syntax.stderr: print(syntax.stderr,file=sys.stderr)
    sys.exit(1)
print('\nPASS — static checks complete. Browser click-through must still be checked on the hosted page/device.')
