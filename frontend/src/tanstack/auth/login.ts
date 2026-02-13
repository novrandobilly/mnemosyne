import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "../../lib/pocketbase";

interface LoginPayload {
  identity: string;
  password: string;
}

export const useTLogin = () => {
  const queryClient = useQueryClient();

  const mutationResponse = useMutation({
    mutationKey: ["auth"],
    mutationFn: async ({ identity, password }: LoginPayload) => {
      const response = await pb
        .collection("users")
        .authWithPassword(identity, password);
      console.log("response login:", response);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  return mutationResponse;
};
