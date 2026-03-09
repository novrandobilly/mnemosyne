import {
  useGetParticipantDetails,
  type TestResult,
} from "./useGetParticipantDetails";

/**
 * Reads from the already-cached `useGetParticipantDetails` query and returns
 * the single test_result record for a given test type (or null if not found).
 */
export function useGetParticipantTestResult(testType: string): {
  result: TestResult | null;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading, isError } = useGetParticipantDetails();

  const result: TestResult | null =
    data?.expand?.test_results_via_participant?.find(
      (r) => r.test_type === testType,
    ) ?? null;

  return { result, isLoading, isError };
}
