type TodayRefreshStatusProps = {
  dataUpdatedAt: number;
  isRefreshing: boolean;
};

/** Same ar-EG time formatting QueueLoadStatus uses for its "last updated" line. */
export function formatLastUpdated(dataUpdatedAt: number): string {
  return `آخر تحديث ${new Date(dataUpdatedAt).toLocaleTimeString("ar-EG")}`;
}

/** Small polite status line for manual refreshes; silent until data has loaded. */
export function TodayRefreshStatus({
  dataUpdatedAt,
  isRefreshing,
}: TodayRefreshStatusProps) {
  if (isRefreshing) {
    return (
      <span
        aria-live="polite"
        dir="rtl"
        className="text-xs text-muted-foreground"
      >
        جارٍ التحديث…
      </span>
    );
  }
  if (!dataUpdatedAt) return null;
  return (
    <span
      aria-live="polite"
      dir="rtl"
      className="text-xs text-muted-foreground"
    >
      {formatLastUpdated(dataUpdatedAt)}
    </span>
  );
}
