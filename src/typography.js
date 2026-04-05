/**
 * All Star Refrigeration — typography system
 * (ported from allstar-typography-upgrade: Outfit + Inter + JetBrains Mono)
 *
 * Display: Outfit (headlines, logo wordmark weight)
 * Body: Inter (paragraphs, nav, buttons)
 * Mono: JetBrains Mono (labels, phone, license lines)
 */

export const FONT_IMPORT_CSS = `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');`;

/** Use in React `style={{ fontFamily: fonts.body }}` */
export const fonts = {
  display: "'Outfit', sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

/** CSS `font-family` values (no JSX quotes) — for injected stylesheet */
export const fontsCss = {
  display: "Outfit, system-ui, sans-serif",
  body: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

/** Reference tokens for headings / UI (optional spread into styles) */
export const typography = {
  hero: {
    fontFamily: fonts.display,
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  sectionHeading: {
    fontFamily: fonts.display,
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  sectionLabel: {
    fontFamily: fonts.mono,
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  button: {
    fontFamily: fonts.body,
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
  nav: {
    fontFamily: fonts.body,
    fontWeight: 500,
    fontSize: 13,
    letterSpacing: "0.08em",
  },
  phone: {
    fontFamily: fonts.mono,
    fontWeight: 500,
  },
  trustBar: {
    fontFamily: fonts.display,
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
};
