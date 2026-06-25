# Changelog

## 1.0 Final Release

### Content
- Updated hero language to include:
  - 看见未被看见
  - SEE THE UNSEEN
  - 价值因被感知而存在
  - Discover · Connect · Reveal
- Added project-level statements to all cases.
- Updated section titles to bilingual Chinese-first hierarchy.

### Works / Case Images
- 科博会：removed repeated blue application pages; retained representative stage / visual / wayfinding pages.
- 悦活：removed near-duplicate bottle display image.
- 伊利：removed repetitive opening image.
- 鸿坤原乡郡：changed cover to atmosphere image and reduced explanation pages.
- 保利云上：removed timeline / catalogue-style pages and changed cover to stronger vertical visual.
- 南岸公馆：reduced image count and lowered archive weight.
- Moved unused images to `_unused_assets_removed` for backup.

### UI
- Added Project Statement style to case detail pages.
- Added final polish CSS for hero, case statement, archive image handling, and hover refinement.
- Updated footer/contact language to be more brand-led.

### Engineering
- Verified all referenced images exist.
- Verified core Next.js structure exists:
  - app/page.js
  - app/works/page.js
  - app/works/[slug]/page.js
  - app/about/page.js
  - data/projects.js


## 1.1 Production Fix

### Fixed
- Removed incorrect geometric hero logo from homepage.
- Updated About signature into a more calligraphic handwritten style.
- Reworked contact headline from advertising-like copy to Lightfield core philosophy:
  - Value exists when it is perceived.
- Added click-to-enlarge lightbox for all case detail images.
- Lightbox supports close, previous / next image, keyboard ESC / arrows, and mobile-friendly preview.


## v1.2 Final Polish
- Restored a dedicated hero symbol mark and removed duplicated small LIGHTFIELD text.
- Reduced and refined footer contact typography.
- Reworked archive covers into filled mosaic compositions.
- Refined signature styling away from decorative wedding-script feeling.
- Re-checked LightboxGallery syntax and static export config.
