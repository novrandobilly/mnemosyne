import type { ParticipantsResponse } from "./hooks/useGetParticipant";

export type ParticipantItem = ParticipantsResponse<{
  test_results_via_participant?: Array<{ test_type: string }>;
}>;
