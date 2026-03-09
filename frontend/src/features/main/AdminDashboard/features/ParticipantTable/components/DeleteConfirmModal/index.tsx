import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useModal } from "@/context/ModalContext";

interface DeleteConfirmModalProps {
  name: string;
  isPending: boolean;
  onConfirm: () => void;
}

export const DeleteConfirmModal = ({
  name,
  isPending,
  onConfirm,
}: DeleteConfirmModalProps) => {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Confirm deletion
      </IntiDinamisText>
      <IntiDinamisText
        as="h2"
        size="20"
        weight="semibold"
        className="mt-3 text-neutral-900"
      >
        Delete participant?
      </IntiDinamisText>
      <IntiDinamisText size="14" className="mt-2 text-neutral-600">
        You are about to permanently delete{" "}
        <span className="font-semibold text-neutral-900">{name}</span> and all
        of their associated test results. This action cannot be undone.
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
          className="bg-rose-600 hover:bg-rose-700"
          onClick={handleConfirm}
          isLoading={isPending}
          disabled={isPending}
        >
          {isPending ? "Deleting…" : "Yes, delete"}
        </IntiDinamisButton>
      </div>
    </div>
  );
};
