# REU Shopify Boilerplate

A Shopify theme boilerplate built on Horizon with custom sections, brand colors, and a standardized development workflow.

---

## Getting Started

The theme lives in the `reu-boilerplate/` subdirectory. All Shopify CLI commands should be run from there.

```bash
cd reu-boilerplate
shopify theme dev
```

---

## Custom Sections

All custom sections are prefixed `pb-` and appear under the **★ Custom Sections** category in the Shopify theme editor section picker.

| Section | File |
|---------|------|
| Banner Alert | `sections/pb-banner-alert.liquid` |
| Call to Action | `sections/pb-call-to-action.liquid` |
| CTA Banner | `sections/pb-cta-banner.liquid` |
| Grid Cards | `sections/pb-grid-cards.liquid` |
| Image with Stats | `sections/pb-image-with-stats.liquid` |
| Section Header | `sections/pb-section-header.liquid` |
| Stats | `sections/pb-stats.liquid` |
| Steps | `sections/pb-steps.liquid` |
| Tabbed Content | `sections/pb-tabbed-content.liquid` |
| Testimonial | `sections/pb-testimonial.liquid` |
| Text Columns | `sections/pb-text-columns.liquid` |
| Text with Media | `sections/pb-text-with-media.liquid` |
| Video Embed | `sections/pb-video-embed.liquid` |

To add a new custom section, set its preset `"category"` to `"★ Custom Sections"` in the `{% schema %}` block.

---

## Brand Colors

Source of truth for brand colors. When the palette changes, update the table below and apply the changes to `config/settings_data.json` color schemes.

| Label | Hex | Usage in Shopify schemes |
|-------|-----|--------------------------|
| Primary Maroon | `#801425` | Headings, links, primary buttons, scheme-1 accent |
| Accent Navy | `#14274D` | scheme-4 background |
| Primary Bulldog (gold) | `#CBA677` | Accent on dark schemes (4, 5) |
| Accent | `#000000` | General dark accent |
| Background (Primary) | `#FFFFFF` | scheme-1 background |
| Background (Secondary) | `#E4DCCA` | scheme-2 background (warm cream) |
| Background (Tertiary) | `#2E2E2E` | scheme-5 background (dark) |
| Card | `#EFF2F6` | scheme-3 background |
| Border / Divider | `#EAEAEA` | Border color across all light schemes |
| Heading Text | `#801425` | Same as Primary Maroon |
| Body Text | `#343434` | Foreground text across all light schemes |

### Color Scheme Summary

| Scheme | Background | Tone | Primary accent |
|--------|-----------|------|----------------|
| scheme-1 | `#FFFFFF` | Light | Maroon |
| scheme-2 | `#E4DCCA` | Warm cream | Maroon |
| scheme-3 | `#EFF2F6` | Cool gray | Maroon |
| scheme-4 | `#14274D` | Navy dark | Gold |
| scheme-5 | `#2E2E2E` | Charcoal | Gold |
| scheme-6 | transparent | Overlay | White / Maroon |
