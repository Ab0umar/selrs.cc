# Attendance overview design verification

Scope: `/attendance` overview only. Existing worktree changes, routes, backend queries, refresh intervals, action permissions and payroll-period computation preserved.

Direction: Soft Structuralism with an editorial split, ENERGY 2 / RHYTHM 2 / MOTION 2. Silver-green trays separate the two payroll sections; large figures prioritize employees currently inside. Cairo remains the application's Arabic typeface because these are Arabic operational labels. Nested 32/26px shells establish section boundaries; inputs use 12px radii and the compact action island uses round targets. Entry motion introduces summary panels before the register, using transform/opacity only, disabled for reduced motion. Desktop spacing follows the requested 96px register; mobile reduces to 32px.

## Delivery gate

- R-02 PASS: introduced caption contains no em dash.
- R-03 PASS: browser geometry checks at 360, 768, 1024 and 1440px in both themes found no document overflow; action targets measured 44x44px.
- R-17/R-18/R-36/R-38 PASS: production figures still come from dashboardSummary; no invented trends, testimonials or claims. Screenshots deliberately use a fixture named بيانات اختبار and are verification artifacts.
- R-23/R-24 PASS: no logo, avatar or destination created. Existing reports link navigated to /attendance/reports in the harness.
- R-25 PASS: muted light text 6.02:1, muted dark text 7.85:1, light accent 7.03:1 against their surfaces, computed by the supplied contrast script.
- R-26 PASS: refresh triggered dashboard/device refetch and daily-register invalidation; sync and recompute invoked their respective mutation hooks and displayed feedback. Search hid unmatched rows; absent filter hid the present fixture; present filter restored it. Both retry buttons triggered refetch.
- R-27 PASS: empty, loading and error fixture states rendered their existing Arabic messages; failed summary does not display zero as a result.
- R-28 PASS: no FAQ added.
- R-32 PASS: Tab reached a control with visible outline; existing labels and native controls retained.
- R-33 PASS: production changes made directly in TSX/CSS using apply_patch.
- R-34 PASS: light and dark fixture screenshots and geometry verified across four widths.
- R-35 PASS: pnpm check, pnpm exec vite build and pnpm check:encoding completed successfully. Browser harness rendered the actual Home/Register components with compiled web CSS and isolated query/mutation fixtures; no page errors. This does not verify production authentication, live SQL data, device connectivity or successful server-side writes.
- R-37 PASS: explicit high-end-visual-design direction supplied by the user.
- Purpose gate PASS: matte section trays distinguish payroll groups; shadows restricted to summary elevation; relevant fingerprint/calculator/refresh glyphs use light strokes. No background grid, glow, blur, illustration or decorative badges introduced. Arrow retained only for the existing reports destination. All new transitions use custom cubic-bezier timing.
- Liveliness PASS: declared 2/2/2 dials, a visible heading and large inside-now figures, structural spacing, green focus/action accent and repeated nested trays. Two unequal summary columns at wide widths collapse to one below 768px.
- Quality locks PASS: composition follows actual center/clinic counts, then the register and device state. Native filters, status text, empty/error feedback and permission conditions retained. No template sections, generic CTAs or marketing copy added.

Additional validation: 9 tests passed across attendance-department-filter, attendance-dailyAggregation and visibleAssignments.

Reproduce browser verification: `node outputs/attendance-premium/verify.mjs`. Requires a completed Vite build and the installed Microsoft Edge executable. Screenshots are test fixtures, not screenshots of production.

Graph update: `graphify update .` completed (14,194 nodes). Its diagnostics reported 97 files with zero nodes, 240 SQL files excluded because tree_sitter_sql is missing, 27 retained nodes from existing files outside the current scan corpus, and community-label changes. The graph remains incomplete for those inputs; no dependency installation or full re-extraction performed.
