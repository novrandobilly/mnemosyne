import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "../../lib/pocketbase";
import { useNavigate } from "react-router-dom";

interface LoginPayload {
  identity: string;
  password: string;
}

export const useTLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutationResponse = useMutation({
    mutationKey: ["auth"],
    mutationFn: async ({ identity, password }: LoginPayload) => {
      const response = await pb
        .collection("users")
        .authWithPassword(identity, password);
      return response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });

      const role = data?.record?.role;
      const path = (function () {
        if (role === "admin" || role === "super_admin") return "/admin";
        return "/psikotes";
      })();

      navigate(path);
    },
  });

  return mutationResponse;
};
