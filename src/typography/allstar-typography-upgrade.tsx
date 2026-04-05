// ============================================================
// ALL STAR REFRIGERATION — Typography Upgrade
// ============================================================
//
// OLD: Archivo Black (one weight, always screaming) + DM Sans
// NEW: Outfit (multiple weights, controlled authority) + Inter
//
// This file contains:
//   1. The font import to add to your layout
//   2. The typography constants to replace in your component
//   3. Specific find-and-replace instructions for Cursor
//
// ============================================================


// ━━━ STEP 1: UPDATE FONT IMPORT ━━━
//
// In your CSS or layout file, find the current Google Fonts import
// and replace it with this one:
//
// FIND (something like):
//   @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@300;400;500;600;700...')
//
// REPLACE WITH:
//   @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap')
//
// If you're using Next.js with next/font, add to layout.tsx:
//
//   import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
//
//   const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' });
//   const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
//   const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
//
//   <body className={`${outfit.variable} ${inter.variable} ${jetbrains.variable}`}>


// ━━━ STEP 2: TYPOGRAPHY CONSTANTS ━━━
//
// Replace your current font references throughout the component.
// Here's the new system:

export const fonts = {
  // Display headlines — Outfit
  // Use for: hero headline, section headings, service titles, CTA text
  display: "'Outfit', sans-serif",

  // Body text — Inter
  // Use for: paragraphs, descriptions, nav links, buttons, form fields
  body: "'Inter', -apple-system, sans-serif",

  // Data/labels — JetBrains Mono
  // Use for: phone numbers, license numbers, trust badges, stats, section labels
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};


// ━━━ STEP 3: WEIGHT + SPACING GUIDE ━━━
//
// This is what makes it feel "designed" vs "template":
//
// HEADLINES (Outfit):
//   Hero headline:     weight 600, size 36-48px, letter-spacing -0.01em
//   Section heading:   weight 600, size 28-36px, letter-spacing -0.01em
//   Card title:        weight 600, size 17-20px, letter-spacing 0.01em
//   The accent word:   weight 700 + color change (the "On Our Way" in blue)
//
// BODY (Inter):
//   Body text:         weight 400, size 14-16px, line-height 1.7
//   Strong emphasis:   weight 600 (not bold/700, keeps it refined)
//   Button text:       weight 600, size 13-14px, letter-spacing 0.04em
//   Nav links:         weight 500, size 13px, letter-spacing 0.08em
//
// LABELS (JetBrains Mono):
//   Section labels:    weight 400, size 11px, letter-spacing 0.12em, uppercase
//   Trust bar items:   weight 500, size 12px, letter-spacing 0.06em, uppercase
//   Phone number:      weight 500, size 14-18px
//   License/footer:    weight 400, size 10-11px, letter-spacing 0.06em
//
// KEY RULES:
//   - Outfit at weight 600 is the new default headline weight (not 700, not 800)
//   - Only use weight 700 on the ONE accent word per headline
//   - Inter at weight 400 for body, 500 for nav, 600 for buttons
//   - JetBrains Mono for anything that's "data" (numbers, codes, labels)
//   - Section labels ("We get it", "What we do", "Reviews") should be
//     JetBrains Mono, 11px, uppercase, wide letter-spacing, blue color


// ━━━ STEP 4: CURSOR INSTRUCTIONS ━━━
//
// Copy-paste this prompt into Cursor:
//
// ─── START CURSOR PROMPT ───
//
// I need you to update the typography across my All Star Refrigeration
// website. Here are the changes:
//
// 1. FONTS: Replace all instances of "Archivo Black" with "Outfit".
//    Replace all instances of "DM Sans" with "Inter".
//    Add JetBrains Mono for labels and data.
//
// 2. FONT IMPORT: Replace the Google Fonts import with:
//    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap')
//
// 3. HEADLINE WEIGHTS: Change all headline font-weights from 800/900
//    to 600. The only element that should be weight 700 is the accent
//    colored word in each headline (like "On Our Way" in blue).
//
// 4. SECTION LABELS: Any small label above a section heading
//    (like "We get it", "What we do", "Reviews", "Questions") should use:
//    fontFamily: "'JetBrains Mono', monospace"
//    fontSize: 11px
//    fontWeight: 400
//    letterSpacing: "0.12em"
//    textTransform: "uppercase"
//    color: #3B82F6 (the blue accent color)
//
// 5. TRUST BAR: The trust items (Same-day service, Licensed & insured,
//    5-star rated) should use:
//    fontFamily: "'Outfit', sans-serif"
//    fontSize: 12px
//    fontWeight: 500
//    letterSpacing: "0.06em"
//    textTransform: "uppercase"
//
// 6. PHONE NUMBERS: Any phone number display should use:
//    fontFamily: "'JetBrains Mono', monospace"
//    fontWeight: 500
//
// 7. FOOTER LICENSE TEXT: Should use:
//    fontFamily: "'JetBrains Mono', monospace"
//    fontSize: 10-11px
//    letterSpacing: "0.06em"
//
// 8. BUTTON TEXT: Should use:
//    fontFamily: "'Inter', sans-serif"
//    fontWeight: 600
//    letterSpacing: "0.04em"
//
// 9. NAV LINKS: Should use:
//    fontFamily: "'Inter', sans-serif"
//    fontWeight: 500
//    fontSize: 13px
//    letterSpacing: "0.08em"
//
// 10. DO NOT change any content, layout, colors, photos, or spacing.
//     Only change font families, weights, sizes, and letter-spacing.
//
// ─── END CURSOR PROMPT ───


// ━━━ STEP 5: QUICK REFERENCE CHEAT SHEET ━━━

export const typography = {
  // Headlines
  hero: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: "clamp(36px, 6vw, 48px)",
    lineHeight: 1.08,
    letterSpacing: "-0.01em",
  },
  heroAccent: {
    fontWeight: 700,
    color: "#3B82F6",
  },
  sectionHeading: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: "clamp(24px, 4vw, 36px)",
    lineHeight: 1.1,
    letterSpacing: "-0.01em",
  },
  cardTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: 17,
    letterSpacing: "0.01em",
  },

  // Body
  body: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 1.7,
  },
  bodyStrong: {
    fontWeight: 600, // not 700
  },
  button: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "0.04em",
  },
  nav: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: 13,
    letterSpacing: "0.08em",
  },

  // Data/labels
  sectionLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 400,
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#3B82F6",
  },
  trustBar: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  phoneNumber: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 500,
  },
  footer: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 400,
    fontSize: 11,
    letterSpacing: "0.06em",
  },
};
