import { FormProvider, useForm } from "react-hook-form";
import { useTProfile } from "@/tanstack/auth/profile";
import {
  useTCompleteOnboarding,
  type OnboardingFormValues,
} from "@/tanstack/users/useTCompleteOnboarding";
import { Navigate } from "react-router-dom";
import { BiodataForm } from "./features/BiodataForm";

const Onboarding = () => {
  const { data: profile, isPending } = useTProfile();
  const { mutate: completeOnboarding, isPending: isSubmitting } =
    useTCompleteOnboarding();

  const methods = useForm<OnboardingFormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      contact_email: "",
      phone_number: "",
      company: "",
      department: "",
      new_password: "",
      confirm_password: "",
    },
  });

  if (isPending) return <div className="p-8 text-center">Loading…</div>;

  // If already onboarded, send straight to the lobby
  if (profile?.is_onboarded) return <Navigate to="/psikotes" replace />;

  const onSubmit = ({ confirm_password: _, ...data }: OnboardingFormValues) => {
    if (!profile?.id) return;
    completeOnboarding({ id: profile.id, ...data });
  };

  return (
    <FormProvider {...methods}>
      <BiodataForm
        onSubmit={methods.handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      />
    </FormProvider>
  );
};

export default Onboarding;
