import { useQuery } from "@tanstack/react-query";
import { pb } from "../../lib/pocketbase";

interface User extends Record<string, any> {
  // Built-in PocketBase Auth Fields (included in AuthRecord, but listed here for clarity)
  id: string;
  collectionId: string;
  collectionName: "users";
  username: string;
  email: string;
  emailVisibility: boolean;
  verified: boolean;
  created: string; // ISO date string
  updated: string; // ISO date string
  avatar: string;

  // Custom Fields for Mnemosyne
  first_name: string;
  last_name: string;
  role: "super_admin" | "admin" | "participant" | string; // Literal types for better DX
}

export const useTProfile = () => {
  const queryResponse = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const authData = await pb.collection("users").authRefresh<User>();
      console.log("authData:", authData);
      return authData.record;
    },
    // 1. Disable retries for auth errors
    retry: false,
    // 2. Keep the user data "fresh" for 5 minutes so it doesn't refetch constantly
    staleTime: 1000 * 60 * 5,
  });

  return queryResponse;
};
