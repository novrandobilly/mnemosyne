import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";

export const useGetDiscResult = () => {
  const { data: participantDetails } = useGetParticipantDetails();
  const testResult = participantDetails?.expand?.test_results_via_participant;
  const discResult = testResult?.find((result) => result.test_type === "disc");
  return discResult;
};
