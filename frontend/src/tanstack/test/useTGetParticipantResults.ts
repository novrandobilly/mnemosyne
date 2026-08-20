import { pb } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";

export interface ParticipantTestResult {
  id: string;
  participant: string;
  test_type: string;
  status: string;
  created: string;
  updated: string;
}

export const useTGetParticipantResults = () => {
  const participantId = pb.authStore.model?.id;

  return useQuery({
    queryKey: ["participant-results", participantId],
    enabled: !!participantId,
    queryFn: async () => {
      const records = await pb.collection("test_results").getFullList<ParticipantTestResult>({
        filter: `participant = "${participantId}"`,
      });
      return records;
    },
  });
};
