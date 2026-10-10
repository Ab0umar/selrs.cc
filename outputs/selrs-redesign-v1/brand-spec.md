# SELRS preview brand spec

- **Register:** Product UI for clinic staff, not a marketing page.
- **Identity asset:** `assets/selrs-mark.png`, a bundled copy of `client/public/logos/icon-128.png` from the existing SELRS project. This is the supplied project logo asset; no external imagery is used.
- **Brand cues:** Existing blue for trust/focus and orange for primary actions; green, amber, and red are reserved for status meaning.
- **Surface strategy:** Light, blue-tinted neutral page background with near-white work surfaces, based on SELRS's bright-clinic context. Colors are implemented with OKLCH tokens in `index.html`.
- **Typography:** System UI stack with Segoe UI and Tahoma fallbacks for Arabic; no remote fonts.
- **Language/layout:** Arabic-first content, RTL within each interface region. Outer document flow remains LTR to avoid RTL horizontal-scroll edge behavior in browser shells.
- **Interaction scope:** Local screen switching, sample search feedback, and in-memory Admin Hub filter/search only. No API calls or persistent state.
