# LEONLUX Skill (Local)

Use this style system when generating or editing landing pages for Emna.

## 1) Visual Direction
- White or near-white canvas with subtle paper/noise texture.
- Editorial typography pair:
  - Display: high-contrast serif (for hero statements).
  - Body/UI: modern sans (for navigation, forms, utility copy).
- Use one accent color only (muted green family for Emna).
- Avoid SaaS card-grid defaults and generic three-column feature cards.

## 2) Layout Rules
- Hero must be asymmetrical:
  - Large headline + short narrative on one side.
  - A custom animated visual field on the other side.
- Keep strong negative space around hero headline.
- Prefer line-based sections and index-style rows over boxed KPI cards.

## 3) Motion Rules
- Motion must be calm and premium, not flashy.
- Use slow orbital/field animations (10-30s loops) with subtle pulsing nodes.
- Include pointer-parallax only if movement is very low amplitude.
- Never use jittery or high-frequency effects.

## 4) Copy Rules
- Replace startup cliches with concrete operational language.
- Focus on:
  - where brands appear in LLM answers
  - ranking quality
  - intervention priorities for advertisers
- Keep microcopy short and specific.

## 5) Accessibility and Performance
- Ensure text contrast remains readable over animated areas.
- Use `prefers-reduced-motion` handling for optional motion reduction.
- Avoid heavy dependencies for simple animation effects.
- Keep first paint clean with no blocking media requirements.

## 6) Emna Prompt Template
Use this prompt for future generation:

"""
Design a high-end editorial landing page for Emna (AI-driven LLM ranking intelligence for advertisers).
Constraints:
- White background, premium typography pairing (serif display + sans UI).
- Not SaaS-template looking. No generic card grids.
- Asymmetric hero with a custom signal-field animation.
- Calm motion, strong readability, minimal but deliberate interactions.
- Copy should emphasize ranking visibility in LLM answers and actionable interventions.
Return production-ready HTML/CSS/JS.
"""
