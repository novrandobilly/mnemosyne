import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb } from "@/lib/pocketbase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/context/ToastContext";
import { DEFAULT_PASSWORD } from "./useTBulkGenerateAccounts";
import { useTProfile } from "../auth/profile";

export interface OnboardingData {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  contact_email: string;
  phone_number: string;
  company: string;
  department: string;
  new_password: string;
}

// confirm_password is form-only — validated client-side, never sent to the API
export type OnboardingFormValues = OnboardingData & {
  confirm_password: string;
};

export const useTCompleteOnboarding = () => {
  const { data: profile } = useTProfile();
  const username = profile?.username;
  if (!username)
    throw new Error("User profile not loaded. Cannot complete onboarding.");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast, showGeneralErrorToast } = useToast();

  return useMutation({
    mutationFn: async ({
      id,
      new_password,
      ...data
    }: OnboardingData & { id: string }) => {
      await pb.collection("users").update(id, {
        ...data,
        password: new_password,
        passwordConfirm: new_password,
        oldPassword: DEFAULT_PASSWORD,
        is_onboarded: true,
      });

      return await pb
        .collection("users")
        .authWithPassword(username, new_password);
    },
    onSuccess: () => {
      showToast({ message: "Setup complete! Welcome to Mnemosyne." });
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/psikotes", { replace: true });
    },
    onError: () => showGeneralErrorToast(),
  });
};
