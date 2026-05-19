# REU Shopify Boilerplate

A Shopify theme boilerplate built on Horizon with custom sections, brand colors, and a standardized development workflow.

---

## Starting a New Project

When using this as a boilerplate for a new client, work through these steps in order:

### 1. Brand colors

Update the two files that control color across the theme:

**`assets/pb-brand.css`** — Set the client's primary brand color for card accents and the testimonial sidebar. These are intentionally hardcoded here (not scheme-driven) so they stay consistent across all color schemes:

```css
:root {
  --pb-card-accent: #801425;   /* ← primary brand color */
  --pb-sidebar-bg: #801425;    /* ← usually same as above */
}
```

**`config/settings_data.json`** — Update the 6 color scheme definitions with the new palette (backgrounds, heading colors, button colors, borders). See the [Color Scheme Summary](#color-scheme-summary) below for the current defaults.

After updating `settings_data.json`, also update the Brand Colors and Color Scheme Summary tables in this README.

### 2. Home page

`templates/index.json` is pre-populated with one of each custom section for demo purposes. Replace it with the actual home page layout and section configuration for the new project.

### 3. Theme editor settings

Log in to the Shopify admin and set the logo, favicon, and typography under **Online Store → Themes → Customize → Theme settings**. These are not stored in the repository.

### 4. GitHub integration

The Shopify GitHub integration must be configured for each new store. In the Shopify admin: **Online Store → Themes → Add theme → Connect from GitHub**. Point it to the correct repo and branch.

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

Source of truth for brand colors. When the palette changes, update the table below, apply the changes to `config/settings_data.json` color schemes, and update the hardcoded hex values in `assets/pb-brand.css`.

### CSS variable layer

`assets/pb-brand.css` defines `--pb-*` custom properties used by all `pb-*` card sections. Most variables default to the active color scheme, but accent colors are brand-fixed:

| Variable | Default | Purpose |
|----------|---------|---------|
| `--pb-card-bg` | `var(--color-background)` | Card background |
| `--pb-card-border` | `var(--color-border)` | Card border |
| `--pb-card-heading` | `var(--color-foreground-heading)` | Card heading text |
| `--pb-card-body` | `var(--color-foreground)` | Card body text |
| `--pb-card-accent` | `#801425` | Stat values, quote marks, border highlights |
| `--pb-sidebar-bg` | `#801425` | Testimonial sidebar background |

These can be overridden per-block or per-section via color pickers in the theme editor.

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
