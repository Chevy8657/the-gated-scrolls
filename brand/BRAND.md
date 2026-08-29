# TimeOff™ Brand Guidelines

## Identity
This is a governed enterprise-technology product. The identity must feel precise, premium, controlled, and human. 
The mark is composed of an interlocking T and an open O monogram, representing structured time (T) and the continuous cycle of work (O). The amber segment represents recovered time.

## Approved reference
The approved Concept B reference is recorded in `docs/wo-143-approved-reference.md`, including its dimensions and SHA-256 fingerprint. The vectors in this package are a deterministic reconstruction rather than a traced raster.

## Colors
These development tokens preserve the approved reference palette and align the mark with the existing dark TimeOff interface. The machine-readable source is `brand-tokens.json`.
- **Primary Cyan**: `#00A5FF` | RGB(0, 165, 255) | Use: O-body and brand emphasis on Charcoal. Do not use for body text on Warm White.
- **Recovered-Time Amber**: `#FFAC28` | RGB(255, 172, 40) | Use: Time segment wedge on Charcoal. Accent only; do not use for body text.
- **Charcoal**: `#0D1117` | RGB(13, 17, 23) | Use: T-stem on light backgrounds, dark mode lockups.
- **Warm White**: `#FAF9F6` | RGB(250, 249, 246) | Use: Light backgrounds, T-stem on dark backgrounds.

## Vector Construction
The logo is deterministically constructed with exact geometric paths:
- T's crossbar exactly touches the O's outer radius at `(40, 12)`.
- The amber wedge spans exactly 16 degrees.
- 12-degree clearance gaps isolate the wedge, proving legibility even when rendered in a single color.

## Brand Rules
- **Clear Space**: Maintain a clearance equal to the height of the 'T' stem on all sides.
- **Minimum Size**: Do not render the symbol smaller than 16px high or the full horizontal lockup smaller than 120px wide digitally.
- **Backgrounds**: Use `logo-horizontal.svg` on Warm White. Use `logo-horizontal-dark.svg` when full color is appropriate on Charcoal. Use the single-color White lockup when color is unavailable on dark backgrounds.
- **Monochrome**: When color is unavailable, use the solid Black or White SVGs. The geometric gaps ensure legibility of the recovered-time segment.
- **Symbol versus Lockup**: Use the full lockup for first identification and formal brand moments. Use the symbol alone for favicons, app icons, compact controls, or contexts where `TimeOff™` is already stated nearby.
- **Wordmark**: Always use `TimeOff™`. Never omit the ™ symbol. Never use an ® symbol, as the mark is not registered.
- **Incorrect Usage**:
  - Do not use gradients, shadows, or filters.
  - Do not skew, warp, or rotate the symbol.
  - Do not change the color of the wedge to anything other than Amber (or the monochrome equivalent).
  - Do not close the gaps in the O.

## Typography and license
The live Trust Bridge renders the wordmark as accessible HTML text in **Inter Semi Bold (600)**, with `sans-serif` as the failure fallback. Inter is already used by the project and is distributed under the **SIL Open Font License 1.1**.

- Font source: https://fonts.google.com/specimen/Inter
- License source: https://fonts.google.com/specimen/Inter/license

The SVG lockup files retain editable `<text>` wordmarks and therefore depend on Inter being available for exact wordmark metrics. The standalone symbol SVGs are fully portable geometry. No commercial-font or legal-exclusivity claim is made.

## Development Asset Review
For a visual validation of all SVGs, rendering behavior on light/dark backgrounds, and scale tests, open `public/brand/specimen.html` in your browser.
