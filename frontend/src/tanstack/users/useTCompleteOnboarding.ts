import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "@/lib/pocketbase";
import { useNavigate } from "react-router-dom";

export interface OnboardingData {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  phone_number: string;
  company: string;
  department: string;
}

export const useTCompleteOnboarding = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ id, ...data }: OnboardingData & { id: string }) => {
      return await pb.collection("users").update(id, {
        ...data,
        emailVisibility: true,
        is_onboarded: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/psikotes", { replace: true });
    },
  });
};
