# Figma Frame Links

## Base frame width

1920

<!-- The Figma frame's width in px. Every px -> vw conversion divides by this.
     Get it wrong and the whole page mis-scales. Usually 1440 or 1920. -->

## Frame Index

## index.html
| Frame | Node ID | Figma Link |
|-------|---------|------------|
| home — default (before click) | node-id=82-860 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=82-860&m=dev |
| home — revealed (after click) | node-id=82-892 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=82-892&m=dev |

## what.html
| Frame | Node ID | Figma Link |
|-------|---------|------------|
| 00  | node-id=82-925 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=82-925&m=dev |
| 1-1  | node-id=82-985 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=82-985&m=dev|
| 1-2  | node-id=120-1850 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=120-1850&m=dev|
| 1-3  | node-id=120-1928 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=120-1928&m=dev|
| 1-4  | node-id=120-2001 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=120-2001&m=dev|
| 1-5  | node-id=120-2071 | https://www.figma.com/design/r72hKbnYWHCsUouadP2HKg/%C2%A0Gyan-Panchami?node-id=120-2071&m=dev|

Both node IDs are two states of the same `index.html` page, toggled by
clicking the "Click" button — see index.md.

<!-- One row per frame.
     Node ID must match the node-id in the URL — e.g. a link ending
     ?node-id=82-860 means the Node ID column reads node-id=82-860.
     Several frames can map to one HTML file when they are states of the
     same page (an intro that expands on click, for example).
     Add another "## [page].html" heading per page. -->

---

## How to Read Each Frame
For every frame listed above, read ALL of the following from the Figma MCP
local server using get_design_context / get_metadata:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in the HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type, duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

Note: layers at `opacity: 0` in a frame are usually that state's start/end
position for an animation, not separate elements. Check whether two frames are
two pages or one page in two states before building.

Note: a layer positioned beyond the frame edge (e.g. `left: 2063px` in a
1920-wide frame) is parked off-canvas. Ask before building it.

---

## Interaction Map
> Fill after reading Figma. Drives click events and navigation.

| Page | Layer Name | Interaction | Target | Animation |
|------|------------|-------------|--------|-----------|
| index | Component ("Click" button, 82:831) | click | reveals 4 topic cards, shrinks/moves title, shows back button + center decoration (state 82:892) | fade (assumed — Figma gives only start/end states, no easing data) |
| index | back button (Layer 4, 137:1478, top-left, revealed state only) | click | returns to default state (82:860) | fade (assumed) |
| index | topic card 1 ("What is Gyan Panchami ?") | click | → what.html | none |
| index | topic card 2 ("Gyan Panchami Vidhi:") | click | → gyanpanchami.html | none |
| index | topic card 3 ("How to do Guru Pujan ?") | click | → how.html | none |
| index | topic card 4 ("How to improve memory") | click | → improve.html | none |

Note: nodes `82:878/879/880` (numbered "option gif" circles) and `137:1446-1449`
(their floating labels) are `opacity:0` in **both** given frames — they never
appear in either static state, so they read as an in-between animation frame
that wasn't provided. Not built; ask if a third/transition frame exists.

Note: a vertical track of 4 numbered circles (`190:2970`, `N`/`N1`/`N2`/`N3`)
sits at Figma x=2069, off the right edge of the 1920-wide frame. Per project
convention this is parked off-canvas — not built. Ask if it belongs on-canvas.

---

## Sliders
> Fill when a page has a slider. Swiper.js only.

| Page | Slider Layer | Slides (node ids) | Effect | Synced with |
|------|--------------|-------------------|--------|-------------|
| — | none on this page | — | — | — |

---

## Translations
> Figma usually carries English only. Every visible text node needs all three.

| Page | English | Hindi | Gujarati |
|------|---------|-------|----------|
| index | Gyan Panchami / Click / 1. What is Gyan Panchami? / 2. Gyan Panchami Vidhi: / 3. How to do Guru Pujan? / 4. How to improve memory | **pending** — mirrors English as placeholder | **pending** — mirrors English as placeholder |

Figma carries English only for this frame. `.hindi`/`.gujrati` spans are
present (language switch stays functional) but currently duplicate the
English text — swap in real translations when provided, do not leave this as
final copy.
