import { pb } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
export interface ParticipantDetailsResponse<T = { [key: string]: any }> {
  id: string;
  avatar: string;
  collectionId: string;
  collectionName: string;
  company: string;
  created: string;
  department: string;
  email: string;
  emailVisibility: boolean;
  first_name: string;
  last_name: string;
  phone_number: string;
  role: string;
  updated: string;
  username: string;
  verified: boolean;
  expand: T;
}

export interface TestResult {
  collectionId: string;
  collectionName: string;
  created: string;
  data: { [key: string]: any };
  id: string;
  participant: string;
  status: string;
  test_type: string;
  updated: string;
}

export const useGetParticipantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const queryResponse = useQuery({
    queryKey: ["participant-details", id],
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

  return queryResponse;
};
