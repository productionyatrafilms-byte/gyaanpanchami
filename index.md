# index.html — Build Instructions

Source: Gyan Panchami — file key `r72hKbnYWHCsUouadP2HKg`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: ready**

---

## Navigation

← from: none (this is the only page currently defined)
→ to: none yet — the 4 revealed topic cards have no destination frame in
figma-links.md; left as dead links (`href="#"`) until a target page exists.

Two Figma frames are two STATES of this one page, toggled by JS:
- `82:860` = default state — big centered title + "Click" button
- `82:892` = revealed state — small title, back button, center decoration,
  4 topic cards. Toggled by adding/removing `.is-revealed` on `.stage`.

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| background.jpg | full-page background (mandala + gradient), used as `.page-bg` for both states. Re-exported from PNG→JPG (fully opaque, no alpha needed) to cut load time: ~1.2MB → ~190KB, preloaded via `<link rel="preload">` in `<head>` | 1920x1080 |
| back.png | back button, revealed state only, top-left | 64x64 (Figma: 51.656px) |
| cards.png | flower-shaped background for each of the 4 topic cards | 373x373 (Figma: 364.535px) |
| inner.png | center decorative mandala, revealed state, used twice at two sizes | 786x786 |
| stage-spacer.png | transparent spacer sizing `.stage`, regenerated to content extent | 1920x913 |

Missing: none. The "Click" button background (Figma node 82:832, a two-tone
rounded-pill shape, fill `#FFE2A2` over `#802922`) is simple enough to build
as pure CSS (two stacked pill shapes) rather than exporting a 6th PNG — no
image needed there.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Berkshire Swash | "Gyan Panchami" title (both states) | **missing — /fonts/ is empty.** Falls back to `cursive` until supplied. |
| Rounded Mplus 1c Bold | "Click" button label | **missing.** Falls back to `sans-serif`. |
| Barlow Condensed ExtraBold | topic card numbers/labels | **missing.** Falls back to `sans-serif`, condensed via `font-stretch` not available without the real font — visual will be wider than Figma until supplied. |
| Baloo | language-switch E/H/G letters | Already assumed present as `"Hindi"` `@font-face` per existing style.css (`font-family: "Hindi"` on `#langSelect label span`) — reused as-is, not changed. |

Ask for these 3 font files before pixel-perfect typography is possible;
built with named `font-family` + fallback stack now so swapping in `@font-face`
later requires no HTML/CSS restructuring beyond the `@font-face` block itself.

---

## 1. Palette

```
--bg-cream:      #ffe2a2   default-state page background (flat), Click button fill
--maroon:        #802922   title text fill, title stroke inner edge, Click button border/label, topic-card badge
--card-text:     #ffffff   topic-card label text (with drop shadow)
```

Per direct visual reference (Figma "FINAL" page, same file, same two frames):
- Default-state background is **flat `#ffe2a2`**, not the `background.jpg` swirl.
  `background.jpg` now only shows once revealed (`body.is-revealed .page-bg`),
  and is preloaded in `<head>` so it's already cached by the time of reveal.
- Title text carries a `#ffe2a2` outline (`-webkit-text-stroke`) around the
  maroon fill, in both states.
- Click button is a **solid** cream pill with a thin maroon border and
  centered label — not the two-tone cream-cap/maroon-body shape read from
  node 82:832's mask SVG. The mask SVG apparently doesn't match the current
  Figma state; built from the reference screenshot instead.

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer        transparent, 1920x913 (content extent)
    ├── .title                  "Gyan Panchami" — big (default) / small (revealed)
    ├── .btn-click              "Click" button — hidden when revealed
    ├── .back-btn               back.png — shown only when revealed
    ├── .center-deco (x2 img)   inner.png, two sizes — shown only when revealed
    └── .topic-card (x4)        cards.png + number + label — shown only when revealed

Content extent: y 52..965 of the 1080 frame -> spacer 1920x913
All vertical % below are measured from y=52, not the frame's 0.
Toggling `.stage.is-revealed` (via JS on .btn-click / .back-btn click) swaps
which set of elements is visible — see custom page JS below.
```

---

## 3. Frame 82:860 Guidelines — default state

  3- read frame 82:860 from figma mcp local server
     https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=82-860&m=dev
     for image reference use @assets/images/

    3.0- .main-card — maincard.png, backdrop behind title + Click button
      3.0.1- width 68vw, height auto, left 50% (translateX(-50%)), top 11.38%
      3.0.2- z-index 1 (below title z-index 3 and .btn-click z-index 2)
      3.0.3- sizing is an ASSUMPTION, not a Figma value: this asset wasn't
             part of either fetched frame's design-context JSON (82:860/82:892),
             per direct user instruction to wrap the title+button in it. Sized
             by hand to enclose the title+button bounding box with padding —
             ask if exact Figma coordinates exist elsewhere in the file.
      3.0.4- hidden together with the title/button via `.stage.is-revealed .main-card { opacity:0 }`

    3.1- .title (default) — "Gyan Panchami"
      3.1.1- width 46.87vw, height auto, font Berkshire Swash
      3.1.2- position: left 50% top 31.16% (of content extent), transform translate(-50%, 0)
      3.1.3- font-size 9.895vw, line-height 0.98 (unitless), color #802922, text-align center

    3.2- .btn-click — pill button, pure CSS (no image)
      3.2.1- width 9.79vw, height auto (aspect ~159/188), left 45.26%, top 80.18%
      3.2.2- shape: rounded-pill `#802922` body, `#ffe2a2` top-cap ellipse (see node
             82:832 SVG: cream rect 0..47.5% height, maroon rect masked by an ellipse
             beneath it) — approximate with a maroon pill + lighter cream ellipse
             pseudo-element on top, `border-radius: 50vw`, drop-shadow
             `0 0.2vw 0.5vw rgba(0,0,0,.25)`
      3.2.3- label "Click", font Rounded Mplus 1c Bold, 2.5vw, color #802922,
             centered in the lower ~46% of the button height

    3.3- on click of .btn-click → add `.is-revealed` to `.stage` (fade transition,
         0.4s ease, on title/button/cards — exact easing not specified in Figma,
         a simple opacity fade is used)

---

## 4. Frame 82:892 Guidelines — revealed state

  4- read frame 82:892 from figma mcp local server
     https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=82-892&m=dev

    4.1- .title (revealed) — same text, same position/size as default state
      4.1.1- per direct instruction, title no longer shrinks or repositions on
             reveal — stays at left 50% / top 50% (stage center), 46.87vw,
             font-size 6vw, translate(-50%,-50%), identical in both states

    4.2- .back-btn — back.png
      4.2.1- width 2.69vw (51.656/1920), height auto, image back.png
      4.2.2- left 3.70% (71/1920), top 0.77% (of content extent: (59-52)/913)
      4.2.3- on click → remove `.is-revealed` from `.stage` (returns to 3.x state)

    4.3- .center-deco — inner.png, two overlapping copies
      4.3.1- large: width 43.09vw, left 28.44%, top 8.11% (of content extent)
      4.3.2- small: width 39.03vw, left 30.47%, top 12.38% (of content extent)
      4.3.3- both `height: auto`, purely decorative, no interaction

    4.4- .topic-card × 4 — cards.png background + number + label
      4.4.1- shared: width 18.99vw, height auto, background cards.png
      4.4.2- card 1 "What is Gyan Panchami ?": left 11.72%, top 6.90%
      4.4.3- card 2 "Gyan Panchami Vidhi:": left 69.58%, top 6.90%
      4.4.4- card 3 "How to do Guru Pujan ?": left 11.72%, top 60.02%
      4.4.5- card 4 "How to improve memory": left 69.58%, top 60.02%
      4.4.6- label inside each card: font Barlow Condensed ExtraBold, 2.34vw,
             white, text-shadow 0 0.21vw 0.21vw rgba(0,0,0,.25), centered,
             two lines — "N." then the question/topic text
      4.4.7- on click of a card → **open question, see below** — no target page
             defined yet; left as `href="#"` / no-op

    4.5- .btn-click — opacity 0 / `display:none` in this state (already hidden
         by the `.is-revealed` toggle in 3.3)

---

## 5. Open questions

1. Where do the 4 topic cards navigate to? figma-links.md has no other pages —
   built as inert placeholders (`#`) until a target exists.
2. Do the 4 numbered "option gif" circles (82:878/879/880, opacity 0 in both
   frames) and their floating labels (137:1446-1449) belong to a third,
   in-between animation frame that wasn't shared? Not built.
3. Does the off-canvas vertical track of numbered circles (`190:2970`, x=2069,
   beyond the 1920 frame edge) belong on-canvas somewhere, or is it a stale
   leftover? Not built.
4. Hindi and Gujarati translations for all title/label text — Figma only
   carries English; `.hindi`/`.gujrati` spans currently mirror the English
   text as a functional placeholder.
5. Berkshire Swash, Rounded Mplus 1c Bold, and Barlow Condensed ExtraBold font
   files are not present in `/fonts/` — built with fallback stacks
   (`cursive`, `sans-serif`) until the real files are supplied.
