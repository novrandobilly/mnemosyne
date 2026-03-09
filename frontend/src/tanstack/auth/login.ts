import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "../../lib/pocketbase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/context/ToastContext";

interface LoginPayload {
  identity: string;
  password: string;
}

export const useTLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast, showGeneralErrorToast } = useToast();

  const mutationResponse = useMutation({
    mutationKey: ["auth"],
    mutationFn: async ({ identity, password }: LoginPayload) => {
      const response = await pb
        .collection("users")
        .authWithPassword(identity, password);
      return response;
    },
    onSuccess: (data) => {
      showToast({ message: "Logged in successfully." });
      queryClient.invalidateQueries({ queryKey: ["auth"] });

      const role = data?.record?.role;
      const isOnboarded = data?.record?.is_onboarded;

      const path = (function () {
        if (role === "admin" || role === "super_admin") return "/admin";
        if (role === "participant" && !isOnboarded) return "/onboarding";
        return "/psikotes";
      })();

      navigate(path);
    },
    onError: () => showGeneralErrorToast(),
  });

  return mutationResponse;
};
