import { Controller } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
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
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs">
      {/* Header with Title and ADMIN ONLY badge */}
      <div className="flex items-center gap-2.5 border-b border-neutral-100 pb-3">
        <h1 className="text-lg font-bold tracking-tight text-neutral-900">
          ID Generator
        </h1>
        <span className="inline-flex items-center rounded-md border border-rose-200 bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-700">
          ADMIN ONLY
        </span>
      </div>

      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1">
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
              <div className="flex flex-col gap-1">
                <TextInput
                  label="Username prefix"
                  placeholder="e.g. MNM"
                  {...field}
                />
                {error && (
                  <span className="text-xs font-medium text-rose-600">
                    {error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <div className="w-full sm:w-48">
          <Controller
            control={control}
            name="count"
            rules={{
              required: "Count is required",
              min: { value: 1, message: "At least 1 account" },
              max: { value: 50, message: "Maximum 50 per batch" },
            }}
            render={({ field, fieldState: { error } }) => (
              <div className="flex flex-col gap-1">
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
                  <span className="text-xs font-medium text-rose-600">
                    {error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <div className="w-full sm:w-auto sm:pt-[22px]">
          <IntiDinamisButton
            type="submit"
            variant="emerald"
            size="md"
            className="w-full sm:w-auto h-[46px] rounded-xl px-6 cursor-pointer shrink-0"
            isLoading={isPending}
            disabled={isPending}
          >
            {isPending ? "Generating…" : "Generate Accounts"}
          </IntiDinamisButton>
        </div>
      </form>

      <div className="mt-3 text-xs text-neutral-500">
        Passwords:{" "}
        <span className="font-mono font-semibold text-neutral-800">
          intidinamis2005
        </span>
      </div>
    </div>
  );
};

export default GenerationForm;
