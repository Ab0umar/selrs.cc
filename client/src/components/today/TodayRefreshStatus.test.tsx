// file: client/src/components/today/TodayRefreshStatus.test.tsx
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { TodayRefreshStatus, formatLastUpdated } from "./TodayRefreshStatus";

const SAMPLE_UPDATED_AT = new Date(2026, 9, 18, 14, 30, 45).getTime();

function renderStatus(
  dataUpdatedAt: number,
  isRefreshing: boolean,
): string {
  return renderToStaticMarkup(
    <TodayRefreshStatus dataUpdatedAt={dataUpdatedAt} isRefreshing={isRefreshing} />,
  );
}

describe("TodayRefreshStatus", () => {
  it("should_render_last_updated_time_when_data_loaded", () => {
    const html = renderStatus(SAMPLE_UPDATED_AT, false);

    expect(html).toContain('aria-live="polite"');
    expect(html).toContain('dir="rtl"');
    expect(html).toContain(`>${formatLastUpdated(SAMPLE_UPDATED_AT)}<`);

    // The helper renders the Arabic label followed by a localized clock time.
    const formatted = formatLastUpdated(SAMPLE_UPDATED_AT);
    expect(formatted).toMatch(/^آخر تحديث /);
    expect(formatted).toMatch(/[\d\u0660-\u0669]/);
  });

  it("should_render_refreshing_label_while_refreshing", () => {
    const html = renderStatus(SAMPLE_UPDATED_AT, true);

    expect(html).toContain('aria-live="polite"');
    expect(html).toContain(">جارٍ التحديث…<");
  });

  it("should_render_nothing_when_never_updated", () => {
    expect(renderStatus(0, false)).toBe("");
  });

  it("should_show_arabic_copy_without_english_labels", () => {
    const renderedStates = [renderStatus(SAMPLE_UPDATED_AT, false), renderStatus(SAMPLE_UPDATED_AT, true)];

    for (const html of renderedStates) {
      for (const label of ["Last updated", "Updated at", "Refreshing"]) {
        expect(html).not.toContain(`>${label}<`);
      }
    }
  });
});
