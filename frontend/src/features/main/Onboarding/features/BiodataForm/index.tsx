import { Controller, useFormContext } from "react-hook-form";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { TextInput } from "@/components/TextInput";
import type { OnboardingFormValues } from "@/tanstack/users/useTCompleteOnboarding";

interface BiodataFormProps {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  isSubmitting: boolean;
}

export const BiodataForm = ({ onSubmit, isSubmitting }: BiodataFormProps) => {
  const { control, getValues } = useFormContext<OnboardingFormValues>();

  return (
    <div className="relative flex min-h-screen items-start justify-center px-4 sm:px-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs text-neutral-500 shadow-sm">
            First-Time Setup
          </div>
          <IntiDinamisText
            as="h1"
            size="24"
            weight="semibold"
            className="text-neutral-900"
          >
            Welcome to Mnemosyne
          </IntiDinamisText>
          <IntiDinamisText size="14" className="mt-2 text-neutral-500">
            Please fill in your biodata before accessing the assessment
            environment. This only takes a moment.
          </IntiDinamisText>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Personal Information
          </IntiDinamisText>

          <form className="mt-6 grid gap-5" onSubmit={onSubmit}>
            {/* Name row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Controller
                control={control}
                name="first_name"
                rules={{ required: "First name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput
                      label="First name"
                      placeholder="e.g. Alea"
                      {...field}
                    />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="last_name"
                rules={{ required: "Last name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput
                      label="Last name"
                      placeholder="e.g. Thorne"
                      {...field}
                    />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />
            </div>

            {/* DOB + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Controller
                control={control}
                name="date_of_birth"
                rules={{ required: "Date of birth is required" }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput label="Date of birth" type="date" {...field} />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="contact_email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput
                      label="Email address"
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Phone */}
            <Controller
              control={control}
              name="phone_number"
              rules={{ required: "Phone number is required" }}
              render={({ field, fieldState: { error } }) => (
                <div className="flex flex-col gap-1.5">
                  <TextInput
                    label="Phone number"
                    type="tel"
                    placeholder="e.g. +62 812 3456 7890"
                    {...field}
                  />
                  {error && (
                    <IntiDinamisText size="12" className="text-red-500">
                      {error.message}
                    </IntiDinamisText>
                  )}
                </div>
              )}
            />

            <div className="border-t border-neutral-100 pt-1">
              <IntiDinamisText
                size="12"
                className="uppercase tracking-[0.3em] text-neutral-400"
              >
                Organization
              </IntiDinamisText>
            </div>

            {/* Company + Department */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Controller
                control={control}
                name="company"
                rules={{ required: "Company is required" }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput
                      label="Company / Organization"
                      placeholder="e.g. PT Intidinamis"
                      {...field}
                    />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="department"
                rules={{ required: "Department is required" }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput
                      label="Department"
                      placeholder="e.g. Engineering"
                      {...field}
                    />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="border-t border-neutral-100 pt-1">
              <IntiDinamisText
                size="12"
                className="uppercase tracking-[0.3em] text-neutral-400"
              >
                Security
              </IntiDinamisText>
            </div>

            {/* New Password + Confirm Password */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Controller
                control={control}
                name="new_password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput
                      label="New password"
                      type="password"
                      placeholder="Min. 8 characters"
                      {...field}
                    />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="confirm_password"
                rules={{
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === getValues("new_password") ||
                    "Passwords do not match",
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="flex flex-col gap-1.5">
                    <TextInput
                      label="Confirm password"
                      type="password"
                      placeholder="Repeat your password"
                      {...field}
                    />
                    {error && (
                      <IntiDinamisText size="12" className="text-red-500">
                        {error.message}
                      </IntiDinamisText>
                    )}
                  </div>
                )}
              />
            </div>

            <IntiDinamisButton
              type="submit"
              className="mt-2 w-full"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving…" : "Complete Setup"}
            </IntiDinamisButton>
          </form>
        </div>
      </div>
    </div>
  );
};
