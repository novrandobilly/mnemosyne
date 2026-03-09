import { FormProvider, useForm } from "react-hook-form";
import { useTProfile } from "@/tanstack/auth/profile";
import {
  useTCompleteOnboarding,
  type OnboardingData,
} from "@/tanstack/users/useTCompleteOnboarding";
import { Navigate } from "react-router-dom";
import { BiodataForm } from "./features/BiodataForm";

const Onboarding = () => {
  const { data: profile, isPending } = useTProfile();
  const { mutate: completeOnboarding, isPending: isSubmitting } =
    useTCompleteOnboarding();

  const methods = useForm<OnboardingData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      email: "",
      phone_number: "",
      company: "",
      department: "",
    },
  });

  if (isPending) return <div className="p-8 text-center">Loading…</div>;

  // If already onboarded, send straight to the lobby
  if (profile?.is_onboarded) return <Navigate to="/psikotes" replace />;

  const onSubmit = (data: OnboardingData) => {
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
