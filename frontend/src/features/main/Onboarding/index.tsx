import { FormProvider, useForm, type FieldErrors } from "react-hook-form";
import { useTProfile } from "@/api/auth/profile";
import {
  useTCompleteOnboarding,
  type OnboardingFormValues,
} from "@/api/users/useTCompleteOnboarding";
import { Navigate } from "react-router-dom";
import { BiodataForm } from "./features/BiodataForm";
import { MainWrapper } from "@/components/MainWrapper";
import { useToast } from "@/context/ToastContext";

const Onboarding = () => {
  const { data: profile, isPending } = useTProfile();
  const { mutate: completeOnboarding, isPending: isSubmitting } =
    useTCompleteOnboarding();
  const { showToast } = useToast();

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

  const onInvalid = (errors: FieldErrors<OnboardingFormValues>) => {
    const errorValues = Object.values(errors);
    if (errorValues.length === 0) return;

    const requiredErrors = errorValues.filter((e) =>
      e?.message?.toString().toLowerCase().includes("required"),
    );

    if (requiredErrors.length > 1) {
      showToast({
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    const firstErrorMessage = errorValues[0]?.message?.toString();
    showToast({
      message: firstErrorMessage || "Please fill in all required fields.",
      type: "error",
    });
  };

  const onSubmit = ({ confirm_password: _, ...data }: OnboardingFormValues) => {
    if (!profile?.id) return;
    completeOnboarding({ id: profile.id, ...data });
  };

  return (
    <MainWrapper pageTitle="Onboarding">
      <FormProvider {...methods}>
        <BiodataForm
          onSubmit={methods.handleSubmit(onSubmit, onInvalid)}
          isSubmitting={isSubmitting}
        />
      </FormProvider>
    </MainWrapper>
  );
};

export default Onboarding;
