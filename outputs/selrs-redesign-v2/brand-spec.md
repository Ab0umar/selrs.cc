# SELRS V2 brand spec

- **Register:** Product interface for clinic employees.
- **Identity asset:** `assets/selrs-mark.png`, bundled from the existing project logo `client/public/logos/icon-128.png`.
- **Brand tokens:** Existing blue for active navigation and focus, orange for primary actions and the current appointment, neutrals for surfaces, semantic green/amber/red for status only.
- **Composition:** A persistent, light blue-tinted vertical rail on the right. The Home page centers on a chronological appointment timeline with the reception queue adjacent. Dashboard uses a dense worklist; Admin uses an indexed task catalog. This replaces V1's centered horizontal switcher and repeated panel/card arrangement.
- **Theme and language:** Light clinic-office theme; Arabic-first RTL components. Outer document direction remains LTR for predictable browser scroll behavior.
- **Typography:** System UI with Segoe UI and Tahoma Arabic fallbacks. No network fonts or remote assets.
- **Behavior:** Local-only screen navigation, sample feedback, Admin search and category filter. No API calls, real patient data, or persistence.
