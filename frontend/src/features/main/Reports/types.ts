import type { TestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import type { ParticipantDetailsResponse } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";

export type ReportModuleId =
  | "papi"
  | "disc"
  | "intray1"
  | "intray2"
  | "competence";

export interface ReportModuleConfig {
  id: ReportModuleId;
  label: string;
  testTypes: string[];
}

export const REPORT_MODULES: ReportModuleConfig[] = [
  { id: "papi", label: "PAPI Kostick", testTypes: ["papikostick"] },
  { id: "disc", label: "DISC", testTypes: ["disc"] },
  { id: "intray1", label: "Intray-1", testTypes: ["intray1"] },
  { id: "intray2", label: "Intray-2", testTypes: ["intray2"] },
  {
    id: "competence",
    label: "Competence (EAS/DA)",
    testTypes: [
      "eas4",
      "eas5",
      "eas6",
      "eas7",
      "eas10",
      "a5",
      "dr",
      "da5",
      "st17",
    ],
  },
];

export function isModuleAvailable(
  moduleId: ReportModuleId,
  testResults: TestResult[],
): boolean {
  const mod = REPORT_MODULES.find((m) => m.id === moduleId);
  if (!mod) return false;
  return mod.testTypes.some((tt) =>
    testResults.some((r) => r.test_type === tt),
  );
}

// Convenience type alias used across the reporting system
export type ReportParticipant = ParticipantDetailsResponse<{
  test_results_via_participant: TestResult[];
}>;

export interface DiscGraphUrls {
  most: string | undefined;
  least: string | undefined;
  change: string | undefined;
}
