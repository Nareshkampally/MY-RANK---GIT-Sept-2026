// Learnly 11+ / MyRank 11+ — Dynamic Dual-Design TailwindCSS Configuration
// Integrates both Stitch Projects:
// 1. "Learnly 11+ Modern Prep" (Light Mode, Indigo)
// 2. "MyRank 11+ Learning / Luminous Scholar" (Dark Mode, Electric Lime)

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container": "var(--surface-container, #e5eeff)",
        "inverse-surface": "var(--inverse-surface, #213145)",
        "tertiary": "var(--tertiary, #005338)",
        "outline": "var(--outline, #777587)",
        "primary-fixed-dim": "var(--primary-fixed-dim, #c3c0ff)",
        "error-container": "var(--error-container, #ffdad6)",
        "on-secondary-container": "var(--on-secondary-container, #684000)",
        "inverse-primary": "var(--inverse-primary, #c3c0ff)",
        "on-primary-fixed": "var(--on-primary-fixed, #0f0069)",
        "secondary-fixed": "var(--secondary-fixed, #ffddb8)",
        "surface-container-highest": "var(--surface-container-highest, #d3e4fe)",
        "on-surface": "var(--on-surface, #0b1c30)",
        "secondary": "var(--secondary, #855300)",
        "surface-container-high": "var(--surface-container-high, #dce9ff)",
        "surface-container-low": "var(--surface-container-low, #eff4ff)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim, #ffb95f)",
        "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant, #005236)",
        "tertiary-fixed": "var(--tertiary-fixed, #6ffbbe)",
        "on-secondary-fixed": "var(--on-secondary-fixed, #2a1700)",
        "surface-tint": "var(--surface-tint, #4d44e3)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed, #002113)",
        "surface-variant": "var(--surface-variant, #d3e4fe)",
        "on-background": "var(--on-background, #0b1c30)",
        "secondary-container": "var(--secondary-container, #fea619)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant, #3323cc)",
        "error": "var(--error, #ba1a1a)",
        "surface-container-lowest": "var(--surface-container-lowest, #ffffff)",
        "on-secondary": "var(--on-secondary, #ffffff)",
        "on-tertiary": "var(--on-tertiary, #ffffff)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim, #4edea3)",
        "on-surface-variant": "var(--on-surface-variant, #464555)",
        "on-error": "var(--on-error, #ffffff)",
        "background": "var(--background, #f8f9ff)",
        "on-tertiary-container": "var(--on-tertiary-container, #67f4b7)",
        "surface-dim": "var(--surface-dim, #cbdbf5)",
        "inverse-on-surface": "var(--inverse-on-surface, #eaf1ff)",
        "tertiary-container": "var(--tertiary-container, #006e4b)",
        "on-error-container": "var(--on-error-container, #93000a)",
        "on-primary-container": "var(--on-primary-container, #dad7ff)",
        "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant, #653e00)",
        "surface": "var(--surface, #f8f9ff)",
        "on-primary": "var(--on-primary, #ffffff)",
        "primary-fixed": "var(--primary-fixed, #e2dfff)",
        "surface-bright": "var(--surface-bright, #f8f9ff)",
        "primary-container": "var(--primary-container, #4f46e5)",
        "outline-variant": "var(--outline-variant, #c7c4d8)",
        "primary": "var(--primary, #3525cd)",
        "surface-elevated": "var(--surface-elevated, #ffffff)",
        "surface-border": "var(--surface-border, #e2e8f0)",
        "text-muted": "var(--text-muted, #64748b)"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-tablet": "2rem",
        "gutter": "1.25rem",
        "space-lg": "1.5rem",
        "space-xl": "2.25rem",
        "space-xs": "0.25rem",
        "space-md": "1rem",
        "margin": "1rem",
        "space-sm": "0.5rem",
        "margin-desktop": "3rem",
        "space-2xl": "3.5rem",
        "gutter-desktop": "1.75rem"
      },
      fontFamily: {
        "display-hero": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "label-timer": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "label-lg": ["Plus Jakarta Sans"],
        "body-sm": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "display-hero-mobile": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "display-hero": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "headline-sm": ["18px", { "lineHeight": "24px", "fontWeight": "600" }],
        "body-md": ["15px", { "lineHeight": "22px", "fontWeight": "400" }],
        "label-timer": ["20px", { "lineHeight": "24px", "letterSpacing": "0.04em", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "label-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
        "body-sm": ["13px", { "lineHeight": "18px", "fontWeight": "400" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "headline-md": ["22px", { "lineHeight": "28px", "fontWeight": "700" }],
        "display-hero-mobile": ["30px", { "lineHeight": "38px", "letterSpacing": "-0.015em", "fontWeight": "800" }],
        "body-lg": ["17px", { "lineHeight": "26px", "fontWeight": "400" }]
      }
    }
  }
};
