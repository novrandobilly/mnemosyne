import { useModal } from "@/context/ModalContext";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";

export const useEas10FinishConfirmModal = () => {
  const { showModal, closeModal } = useModal();

  const handleConfirmFinish = (
    onConfirm: () => void,
    answeredCount: number,
    totalQuestions: number,
  ) => {
    showModal({
      content: (
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm space-y-4">
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Konfirmasi Selesai Tes
          </IntiDinamisText>
          <IntiDinamisText
            as="h2"
            size="20"
            weight="semibold"
            className="text-neutral-900"
          >
            Apakah Anda yakin ingin menyelesaikan tes?
          </IntiDinamisText>
          <IntiDinamisText
            size="14"
            className="text-neutral-600 leading-relaxed"
          >
            Anda telah menjawab{" "}
            <span className="font-semibold text-neutral-900">
              {answeredCount}
            </span>{" "}
            dari{" "}
            <span className="font-semibold text-neutral-900">
              {totalQuestions}
            </span>{" "}
            soal. Setelah dikirim, jawaban tidak dapat diubah lagi.
          </IntiDinamisText>
          <div className="flex justify-end gap-3 pt-2">
            <IntiDinamisButton variant="secondary" onClick={closeModal}>
              Batal
            </IntiDinamisButton>
            <IntiDinamisButton
              variant="primary"
              onClick={() => {
                onConfirm();
                closeModal();
              }}
            >
              Ya, Selesaikan
            </IntiDinamisButton>
          </div>
        </div>
      ),
    });
  };

  return { handleConfirmFinish };
};
