export function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate && !endDate) return "";

  const formatMonthYear = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
      }).format(date);
    } catch {
      return dateStr;
    }
  };

  const start = startDate ? formatMonthYear(startDate) : "";
  const end = endDate ? formatMonthYear(endDate) : "Present";

  if (start && end) return `${start} – ${end}`;
  return start || end;
}