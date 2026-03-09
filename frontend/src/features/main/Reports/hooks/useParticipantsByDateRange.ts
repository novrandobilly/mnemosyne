import { pb } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";
import type { ReportParticipant } from "../types";

interface DateRangeParams {
  start: string | null; // "YYYY-MM-DD"
  end: string | null; // "YYYY-MM-DD"
}

export function buildDateRangeFilter({
  start,
  end,
}: DateRangeParams): string | null {
  if (!start || !end) return null;
  return `role="participant" && created >= "${start} 00:00:00" && created <= "${end} 23:59:59"`;
}

export const useParticipantsByDateRange = (params: DateRangeParams) => {
  const filter = buildDateRangeFilter(params);
  return useQuery({
    queryKey: ["participants-by-date", params.start, params.end],
    enabled: !!filter,
    queryFn: async () => {
      const response: ReportParticipant[] = await pb
        .collection("users")
        .getFullList({
          filter: filter!,
          expand: "test_results_via_participant",
          sort: "-created",
        });
      return response;
    },
  });
};
