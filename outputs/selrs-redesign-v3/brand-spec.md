# SELRS Direction 03 brand spec

- **Concept:** Low-light clinical operations wallboard for an OR/recovery corridor, presented as an exploratory alternative to the existing light clinic app.
- **Identity asset:** `assets/selrs-mark.png`, bundled from the project logo `client/public/logos/icon-128.png`.
- **Palette:** Tinted graphite surfaces, warm white text, amber/orange for the next case and priority, mint for healthy/completed states, muted red for escalation. No blue dashboard panels or cream-paper treatment.
- **Composition:** A single control-room wallboard. The next case is the largest element; room schedules occupy adjacent lanes and reception queue shares the same board. The Dashboard moves cases through stage columns; Admin uses a concise control index. No sidebar or repeated card grid.
- **Reason for dark exploration:** This concept targets staff glancing at schedules in low ambient light near procedure/recovery rooms. It is not a proposal to replace the current light production theme without review.
- **Language and type:** Arabic-first RTL content, familiar compact system UI text, tabular numerals, no external fonts/assets.
- **Behavior:** Local navigation, sample stage action, Admin search and filters, optional `?view=dashboard` / `?view=admin`. No API, real patient data, or persistent state.
