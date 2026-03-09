import { Controller } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { TextInput } from "@/components/TextInput";
import type { BulkGenerateFormValues } from "../../types";

interface GenerationFormProps {
  formMethods: UseFormReturn<BulkGenerateFormValues>;
  onSubmit: (values: BulkGenerateFormValues) => void;
  isPending: boolean;
}

export const GenerationForm = ({
  formMethods,
  onSubmit,
  isPending,
}: GenerationFormProps) => {
  const { control, handleSubmit } = formMethods;

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Bulk Generation
      </IntiDinamisText>
      <IntiDinamisText
        as="h1"
        size="24"
        weight="semibold"
        className="mt-3 text-neutral-900"
      >
        Create participant accounts
      </IntiDinamisText>
      <IntiDinamisText size="14" className="mt-2 text-neutral-600">
        Auto-generate usernames and temporary passwords. Each account is
        initialized with{" "}
        <span className="font-medium text-neutral-800">role: participant</span>{" "}
        and pending onboarding.
      </IntiDinamisText>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Controller
            control={control}
            name="prefix"
            rules={{
              required: "Prefix is required",
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: "Alphanumeric only, no spaces",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <div className="flex flex-col gap-1.5">
                <TextInput
                  label="Username prefix"
                  placeholder="e.g. MNM"
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
            name="count"
            rules={{
              required: "Count is required",
              min: { value: 1, message: "At least 1 account" },
              max: { value: 50, message: "Maximum 50 per batch" },
            }}
            render={({ field, fieldState: { error } }) => (
              <div className="flex flex-col gap-1.5">
                <TextInput
                  label="Number of accounts"
                  placeholder="e.g. 10"
                  type="number"
                  min={1}
                  max={50}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
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

        <div className="rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3">
          <IntiDinamisText size="12" className="text-neutral-500">
            Usernames follow the pattern:{" "}
            <span className="font-mono font-semibold text-neutral-700">
              PREFIX_XXXXXXXX
            </span>
            . Passwords:{" "}
            <span className="font-mono font-semibold text-neutral-700">
              PREFIX-XXXX-XXXX
            </span>
            . Credentials are shown once — export immediately.
          </IntiDinamisText>
        </div>

        <IntiDinamisButton
          type="submit"
          className="w-full"
          isLoading={isPending}
          disabled={isPending}
        >
          {isPending ? "Generating…" : "Generate Accounts"}
        </IntiDinamisButton>
      </form>
    </div>
  );
};
