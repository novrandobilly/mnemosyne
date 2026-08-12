import { useNavigate } from "react-router-dom";
import { useModal } from "@/context/ModalContext";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";

export const useEas7ConfirmModal = () => {
  const navigate = useNavigate();
  const { showModal, closeModal } = useModal();

  const handleStart = () => {
    sessionStorage.removeItem("eas7_progress");
    sessionStorage.removeItem("eas7_seconds_left");
    navigate("/psikotes/eas7/test-start");
    closeModal();
  };

  const handleConfirmStart = () => {
    showModal({
      content: (
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm space-y-4">
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Konfirmasi Mulai Tes
          </IntiDinamisText>
          <IntiDinamisText
            as="h2"
            size="20"
            weight="semibold"
            className="text-neutral-900"
          >
            Mulai Tes EAS7?
          </IntiDinamisText>
          <IntiDinamisText
            size="14"
            className="text-neutral-600 leading-relaxed"
          >
            Anda akan memulai tes{" "}
            <span className="font-semibold text-neutral-900">
              EAS7 - Verbal Reasoning
            </span>
            . Waktu pengerjaan adalah{" "}
            <span className="font-semibold text-neutral-900">5 menit</span>.
            Setelah tes dimulai, timer tidak dapat dihentikan atau dijeda.
          </IntiDinamisText>
          <div className="flex justify-end gap-3 pt-2">
            <IntiDinamisButton variant="secondary" onClick={closeModal}>
              Batal
            </IntiDinamisButton>
            <IntiDinamisButton variant="primary" onClick={handleStart}>
              Mulai Sekarang
            </IntiDinamisButton>
          </div>
        </div>
      ),
    });
  };

  return { handleConfirmStart };
};
