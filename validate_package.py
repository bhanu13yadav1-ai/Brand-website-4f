#!/usr/bin/env python3
"""Offline static validator for BLACKED Fusion 4.0 package. Uses Python stdlib and Node.js."""
from pathlib import Path
from html.parser import HTMLParser
from collections import Counter
import json, re, subprocess, sys
try:
    from PIL import Image
except ImportError:
    Image = None

ROOT = Path(__file__).resolve().parents[1]
class AuditHTML(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.refs = []
        self.images = []
        self.inline_script = 0
        self.inline_style = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'img': self.images.append(a.get('src', ''))
        if tag == 'script':
            src = a.get('src')
            if src: self.refs.append(src)
            else: self.inline_script += 1
        if tag == 'link':
            href = a.get('href', '')
            if href and not href.startswith(('https://','http://','#','data:')): self.refs.append(href)
        if tag == 'style': self.inline_style += 1


def main():
    html_path = ROOT/'index.html'; css_path = ROOT/'styles.css'; js_path = ROOT/'app.js'
    assert html_path.exists() and css_path.exists() and js_path.exists(), 'Core file missing'
    html = html_path.read_text(encoding='utf-8'); js = js_path.read_text(encoding='utf-8')
    parser=AuditHTML(); parser.feed(html)
    dupes = [k for k,v in Counter(parser.ids).items() if v > 1]
    assert not dupes, f'Duplicate HTML IDs: {dupes}'
    missing_refs = [ref for ref in parser.refs if not (ROOT/ref).exists()]
    assert not missing_refs, f'Missing local references: {missing_refs}'
    missing_imgs = [src for src in parser.images if not src.startswith('assets/') or not (ROOT/src).is_file()]
    assert not missing_imgs, f'Missing/non-bundled image refs: {missing_imgs}'
    assert parser.inline_script == 0 and parser.inline_style == 0, 'Expected external JS/CSS, not inline blocks'
    direct_id_selectors = set(re.findall(r"\$\('#([A-Za-z0-9_-]+)", js))
    missing_selectors = sorted(direct_id_selectors - set(parser.ids))
    assert not missing_selectors, f'JS uses absent IDs: {missing_selectors}'
    node = subprocess.run(['node','--check',str(js_path)],capture_output=True,text=True)
    assert node.returncode == 0, f'JavaScript syntax error: {node.stderr}'
    assets = sorted((ROOT/'assets').glob('*'))
    assert len(assets) == 6, f'Expected 6 bundled visual assets; found {len(assets)}'
    image_meta=[]
    for f in assets:
        assert f.stat().st_size > 10000, f'Image suspiciously small: {f.name}'
        if Image:
            with Image.open(f) as im:
                im.verify()
            with Image.open(f) as im:
                image_meta.append({'file':f.name,'format':im.format,'width':im.width,'height':im.height,'bytes':f.stat().st_size})
    must_have = ['spinWheel','spinDildo','spinPlug','makeSecret','convertMeasure','BLACKED_FUSION_DIAGNOSTICS']
    for token in must_have: assert token in js, f'Missing expected feature handler: {token}'
    assert 'flared base' in html.lower(), 'Butt plug safety guidance missing'
    assert '13.12 cm' in html, 'Reviewed population-average size context missing'
    assert 'hymen' in html.lower() and 'virginity test' in html.lower(), 'Virginity/anatomy clarification missing'
    assert len(parser.images) >= 10, f'Expected campaign images to appear in gallery cards; found {len(parser.images)} refs'
    report={
      'result':'PASS',
      'version':'4.0.0',
      'html_ids':len(parser.ids),
      'duplicate_ids':dupes,
      'javascript_id_selectors_checked':len(direct_id_selectors),
      'missing_javascript_id_selectors':missing_selectors,
      'image_elements':len(parser.images),
      'image_assets':image_meta,
      'external_stylesheet_and_script':True,
      'inline_script_blocks':parser.inline_script,
      'inline_style_blocks':parser.inline_style,
      'node_syntax':'PASS',
      'features_checked':must_have,
      'scope':'Static validation only. See data/browser-test-results.json for interactive Chromium tests; public GitHub Pages is not tested.'
    }
    result_path=ROOT/'data'/'static-test-results.json'
    result_path.write_text(json.dumps(report,indent=2),encoding='utf-8')
    print(json.dumps(report,indent=2))

if __name__ == '__main__':
    try: main()
    except Exception as e:
        print('FAIL:', e, file=sys.stderr); sys.exit(1)
