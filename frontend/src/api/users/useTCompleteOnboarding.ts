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
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast, showGeneralErrorToast } = useToast();

  return useMutation({
    mutationFn: async ({
      id,
      new_password,
      ...data
    }: OnboardingData & { id: string }) => {
      const currentUsername =
        profile?.username || (pb.authStore.record as { username?: string } | null)?.username;
      if (!currentUsername) {
        throw new Error("User profile not loaded. Cannot complete onboarding.");
      }

      await pb.collection("users").update(id, {
        ...data,
        password: new_password,
        passwordConfirm: new_password,
        oldPassword: DEFAULT_PASSWORD,
        is_onboarded: true,
      });

      return await pb
        .collection("users")
        .authWithPassword(currentUsername, new_password);
    },
    onSuccess: () => {
      showToast({ message: "Setup complete! Welcome to Inti Dinamis." });
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/psikotes", { replace: true });
    },
    onError: (error: any) => {
      const errorData =
        error?.response?.data || error?.data?.data || error?.data || {};

      if (errorData?.contact_email) {
        const isUnique =
          errorData.contact_email.code === "validation_not_unique" ||
          /unique/i.test(errorData.contact_email.message || "");
        showToast({
          message: isUnique
            ? "Email address is already in use. Please use a different email."
            : errorData.contact_email.message || "Invalid email address.",
          type: "error",
        });
        return;
      }

      if (errorData?.email) {
        const isUnique =
          errorData.email.code === "validation_not_unique" ||
          /unique/i.test(errorData.email.message || "");
        showToast({
          message: isUnique
            ? "Email address is already in use. Please use a different email."
            : errorData.email.message || "Invalid email address.",
          type: "error",
        });
        return;
      }

      const firstFieldKey = Object.keys(errorData)[0];
      if (firstFieldKey && errorData[firstFieldKey]?.message) {
        showToast({
          message: errorData[firstFieldKey].message,
          type: "error",
        });
        return;
      }

      if (
        error?.message &&
        typeof error.message === "string" &&
        !error.message.includes("Failed to update")
      ) {
        showToast({
          message: error.message,
          type: "error",
        });
        return;
      }

      showGeneralErrorToast();
    },
  });
};
