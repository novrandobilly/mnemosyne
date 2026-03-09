import { pb } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";
import type {
  ParticipantDetailsResponse,
  TestResult,
} from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";

export const useFetchParticipantById = (id: string | null) => {
  return useQuery({
    queryKey: ["participant-report", id],
    enabled: !!id,
    queryFn: async () => {
      if (!id) throw new Error("Participant ID is required");
      const response: ParticipantDetailsResponse<{
        test_results_via_participant: TestResult[];
      }> = await pb.collection("users").getOne(id, {
        expand: "test_results_via_participant",
      });
      return response;
    },
  });
};
