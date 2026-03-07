import { pb } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";

export interface ParticipantsResponse<T = { [key: string]: any }> {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  first_name: string;
  last_name: string;
  company: string;
  department: string;
  avatar: string;
  created: string; // Or Date if you pre-parse it
  updated: string;
  role: "participant" | "admin" | string; // Adjusted based on your data
  expand: T;
}

export const useGetParticipant = () => {
  const queryResponse = useQuery({
    queryKey: ["participants"],
    queryFn: async () => {
      const response: ParticipantsResponse[] = await pb
        .collection("users")
        .getFullList({
          filter: 'role="participant"',
          expand: "test_results_via_participant",
        });
      return response;
    },
  });

  return queryResponse;
};
