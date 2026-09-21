# what.html / gyanpanchami.html / how.html / improve.html — Build Instructions

Source: Gyan Panchami — file key `r72hKbnYWHCsUouadP2HKg` (topic 1, "what",
only — see below for the other 3 topics)
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: ready — all 4 topic pages built**

---

## This doc now covers 4 pages, not 1

`what.html` was the original build (from real Figma frames, topic 1 "What is
Gyan Panchami ?"). The other 3 topics — `gyanpanchami.html` ("Gyan Panchami
Vidhi:"), `how.html` ("How to do Guru Pujan ?"), `improve.html` ("How to
improve memory") — reuse the **exact same layout/CSS** (all 4 link the same
`assets/css/what.css`) but were built directly from exported illustration
folders, not fresh Figma frames, since only topic 1 had Figma data pulled.
Everything in §2-4 below describing the shared layout applies to all 4 pages
equally; only the per-topic slide *content* differs.

## Data-driven architecture (all 4 pages)

Slide counts differ a lot per topic — what:5, gyanpanchami:8, how:5,
improve:15 — so slides are no longer hardcoded per page. Instead:

- **`assets/js/data.js`** — `TOPIC_SLIDES`, one entry per topic
  (`what`/`gyanpanchami`/`how`/`improve`), each with its image `folder`
  (`assets/images/<folder>/`) and a `slides` array of
  `{ image, captions: { english, hindi, gujrati } }`.
- **`assets/js/slides.js`** — shared renderer, replaces the old per-page
  `what.js`. Reads `data-topic` off `.stage`, looks up `TOPIC_SLIDES[topic]`,
  builds the illustration + caption `swiper-slide` markup at runtime, then
  initializes both Swiper instances exactly as before (vertical direction,
  `controller.control` sync, nav-disabled-opacity fix).
- Each HTML page is now just the static shell (title text, active topic-nav
  dot, `data-topic="..."`) with EMPTY `.swiper-wrapper` divs — no slide
  markup baked in.
- **Pagination dots scale with slide count** — `slides.js` sets
  `--pagination-bullet-size` / `--pagination-gap` custom properties based on
  `data.slides.length` (targets ~9vw of dots regardless of count), since a
  fixed 5-dot-sized layout would badly overflow at improve.html's 15 dots.

Only topic 1 (`what`) has real captions (from Figma, see §4.4). The other 3
topics currently have **placeholder captions** — `"Placeholder text for
<topic> — slide N."` — clearly marked as such in `data.js`; swap in real
copy per slide when it's available, no HTML/JS changes needed.

## Navigation

← from: index.html topic cards 1-4 (all 4 now link to their real page)
→ to: all 4 topic pages now cross-link via the vertical topic-nav (§4.5) —
no more `href="#"` placeholders.

For `what.html` specifically: five Figma frames (`1-1`..`1-5`) are 5 slides
of ONE Swiper carousel — not five separate frames. `00` is the carousel's
entrance state (see §5) — not a 6th slide.

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| home.png | top-left "back to index.html" button (Figma "Vector", a house icon — confirmed via its SVG path, not a plain arrow) | 64x64 (Figma: 60x54 within a 76x70 shadow box) |
| frame.png | illustration border/frame around each slide's photo (868x609 box, `border:10px #b1492d`, `border-radius:47px`) | matches 868x609 box aspect |
| decoup.png | quote-flourish decoration, TOP of the caption box (Figma "Group8", rotated 180 + flipped) | wide flourish, ~530px wide box |
| decodown.png | quote-flourish decoration, BOTTOM of the caption box (Figma "Group9") | same |
| next.png / prev.png | slide arrows (Figma "Polygon" x2, triangle chevrons) | 68x102 |
| 1/1.png .. 1/5.png | all 5 slide illustrations — pre-cropped exports of the shared 868x3045 scrolling composite (Figma masks one long image strip; these are the flattened results for each slide's mask-position) | 868x609-ish aspect each |

All 5 illustrations are now exported and wired in (`assets/images/1/1.png`
through `1/5.png`) — no missing assets remain for this page.

### 0.2 — Fonts

Same gaps as index.html — Berkshire Swash (title), Barlow Condensed
ExtraBold (caption text) not in `/fonts/` yet, fallback stacks used.

---

## 1. Palette

```
--maroon:      #802922   title, home-button icon (baked into home.png)
--caption:     #b1492d   caption text, frame.png border color
--card-glass:  rgba(255,254,251,0.45)   caption box background
```

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer
    ├── .title                 "What is Gyan Panchami ?" — static, same on
    │                          every slide
    ├── .topic-nav             vertical N/N1/N2/N3 track, right edge —
    │                          cross-links to the site's 4 topic pages
    │                          (only topic 1 = this page — others `href="#"`
    │                          until built)
    ├── .slide-frame           STATIC: frame.png border (never moves)
    │   └── .swiper.illustration-swiper   5 slides, each just the photo —
    │                                     only this swipes inside the frame
    ├── .slide-caption         STATIC: glass background + decoup.png/
    │   │                      decodown.png flourishes (never move)
    │   └── .swiper.caption-swiper        5 slides, each just the caption
    │                                     text — only this swipes
    ├── .slide-nav-btn.prev / .next   prev.png / next.png, control both
    │                                 swipers at once (see below)
    └── .swiper-pagination     5 dots, sits inline between the arrows

Two independent Swiper instances (illustration + caption) are kept in sync
via Swiper's built-in `controller.control` (each set to control the other),
so one set of arrows/pagination/dots drives both — the frame border and
glass box are outside either swiper entirely and simply never move.

All percentages below are of the FULL 1080 frame height — this page has no
dead space to trim (content spans close to edge-to-edge), so unlike
index.html the spacer is sized to the full frame, not a trimmed content
extent.
```

---

## 3. Frame `00` — carousel entrance state (not a slide)

  3- read frame 82:925 from figma mcp local server
     https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=82-925&m=dev

Figma shows the caption box and illustration parked just off-canvas
(caption box at x=1932, 12px past the 1920 frame edge; illustration at
x=-1050, off the left edge) — i.e. this is the START keyframe of a slide-in
entrance, with `1-1` as its settled end state. Built as a simple CSS
slide-in-on-load (caption box slides in from the right, illustration from
the left, ~0.6s ease-out) rather than a literal 6th frame — same visual
intent, far less code than replicating a whole extra frame.

---

## 4. Frame `1-1`..`1-5` Guidelines — the 5 slides

  4- read frames 82:985 / 120:1850 / 120:1928 / 120:2001 / 120:2071 from
     figma mcp local server (see figma-links.md for each URL)

    4.1- .title — shared across all 5 slides, not per-slide
      4.1.1- font Berkshire Swash, inset top 4.06% / left 22.17% / right
             22.48% / bottom 86.13% (of 1080 frame) → converts to top 4.06%,
             width 55.35vw, centered
      4.1.2- font-size 96/1920*100 = 5vw, color #802922, centered

    4.2- .slide-frame — frame.png + illustration, per slide
      4.2.1- box: left 125/1920=6.51%, top 244/1080=22.59%, width
             868/1920=45.21vw, height auto (aspect 868:609)
      4.2.2- illustration fills the frame's interior, `object-fit:cover`,
             swapped per slide (1.png for slide 1, placeholders for 2-5)
      4.2.3- Polygon prev/next arrows: left 249/1920=12.97% and
             800/1920=41.67%, top 890/1080=82.41%, width 68/1920=3.54vw —
             these are FIXED (not per-slide), positioned outside/below the
             frame, controlling the shared swiper instance

    4.3- .slide-caption — glass box + flourishes + text, per slide
      4.3.1- box: left 1109/1920=57.76%, top 369/1080=34.17%, width
             672/1920=35vw, height auto (aspect 672:358), background
             rgba(255,254,251,0.45), border-radius 22/1920*100=1.15vw
      4.3.2- decoup.png top-inset, decodown.png bottom-inset, both centered,
             width ~40% of box
      4.3.3- caption text: Barlow Condensed ExtraBold, 55/1920*100=2.86vw,
             color #b1492d, centered, per-slide (see table below)

    4.4- 5 captions (Figma text, verbatim):
      1. Gyan Panchami is the festival of knowledge.
      2. This festival is celebrated on Kartik Sud 5 (the fifth day after Diwali).
      3. On this day, we should perform Gyan Pujan of the Agam scriptures.
      4. We must perform Pujan of Saraswati Devi (Goddess of Shrut).
      5. We must perform the Gyan Panchami Vidhi.

    4.5- .topic-nav — vertical track, same position on all 5 slides
      4.5.1- track (bg #ffd35a pill): left 1833/1920=95.47%, width
             71/1920=3.7vw, height 343/1080=31.76%, centered vertically
      4.5.2- 4 numbered circles (1-4) inside — link to the 4 index.html
             topic cards; topic 1 (this page) marked active, 2/3/4 → `#`
             until built

    4.6- .swiper-pagination — 5 dots, bottom-left
      4.6.1- positions: left 451,498,545,592,639 (all /1920), top
             933/1080=86.39%, size 29/1920=1.51vw each, spacing ~2.45vw
      4.6.2- Figma marks the CURRENT slide's dot with the opposite asset
             (Ellipse15 vs Ellipse16) from the other 4 — implemented as
             Swiper's own `.swiper-pagination-bullet-active` state instead
             of swapping images per-dot

---

## 5. Open questions

1. **Placeholder captions for gyanpanchami/how/improve** — only topic 1
   (`what`) has real Figma-sourced text; the other 3 topics' 8+5+15 slides
   all read `"Placeholder text for <topic> — slide N."` in `data.js`. Swap
   in real copy per slide when available.
2. Frame `00`'s exact entrance timing/easing isn't specified by Figma (no
   motion data on this node) — built with a reasonable default (0.7s
   ease-out slide-in for the frame/caption, 0.6s fade for the nav controls),
   matching the spirit of "elements arrive from off-canvas" rather than an
   exact keyframe match. Applies to all 4 pages (shared CSS).
3. Hindi/Gujarati translations — same as index.html, Figma is English-only;
   `.hindi`/`.gujrati` spans mirror English (or the placeholder text) as a
   functional stand-in on all 4 pages.
4. Slide transitions were changed from Figma's implied horizontal swipe to
   vertical (top-to-bottom) per direct instruction — a deliberate deviation
   from the source frames, not an oversight. Applies to all 4 pages.
5. gyanpanchami.html/how.html/improve.html were never given their own Figma
   frames to read — their layout is inherited from `what.html`'s Figma-based
   build (§2-4) on the assumption all 4 topic pages share one design. Flag
   if that assumption is wrong and any of the 3 actually needs a distinct
   layout.
