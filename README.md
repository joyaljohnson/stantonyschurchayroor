# St. Antony's Church Ayroor — Website Clone

A static HTML/CSS clone of [stantonyschurchayroor.base44.app](https://stantonyschurchayroor.base44.app), preserving the original design, colors, and fonts (Playfair Display, Inter, Noto Sans Malayalam).

## Structure

- `index.html` — Home
- `history.html` — Our History
- `parish-life.html` — Parish Life
- `jubilee.html` — Centenary Jubilee
- `devotion.html` — Devotion & Liturgy
- `contact.html` — Contact
- `assets/site.css` — Compiled stylesheet (Tailwind-based, same design tokens as the source site)
- `assets/common.js` — Mobile menu toggle, news ticker, and centenary countdown timer
- `assets/images/` — Site images
- `build.py` — Python script used to generate the HTML pages from templates

## Running locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
