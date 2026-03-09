import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useModal } from "@/context/ModalContext";
import type { BulkGenerateFormValues } from "../../types";

interface GenerateConfirmModalProps {
  values: BulkGenerateFormValues;
  isPending: boolean;
  onConfirm: (values: BulkGenerateFormValues) => void;
}

export const GenerateConfirmModal = ({
  values,
  isPending,
  onConfirm,
}: GenerateConfirmModalProps) => {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    onConfirm(values);
    closeModal();
  };

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Confirm generation
      </IntiDinamisText>
      <IntiDinamisText
        as="h2"
        size="20"
        weight="semibold"
        className="mt-3 text-neutral-900"
      >
        Generate accounts?
      </IntiDinamisText>
      <IntiDinamisText size="14" className="mt-2 text-neutral-600">
        You are about to create{" "}
        <span className="font-semibold text-neutral-900">{values.count}</span>{" "}
        participant account{values.count !== 1 ? "s" : ""} with the prefix{" "}
        <span className="font-mono font-semibold text-neutral-900">
          {values.prefix}_
        </span>
        . This action cannot be undone.
      </IntiDinamisText>

      <div className="mt-6 flex justify-end gap-3">
        <IntiDinamisButton
          type="button"
          variant="secondary"
          onClick={closeModal}
          disabled={isPending}
        >
          Cancel
        </IntiDinamisButton>
        <IntiDinamisButton
          type="button"
          onClick={handleConfirm}
          isLoading={isPending}
          disabled={isPending}
        >
          {isPending ? "Generating…" : "Yes, generate"}
        </IntiDinamisButton>
      </div>
    </div>
  );
};
