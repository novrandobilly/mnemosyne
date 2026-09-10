import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";
import { useNavigate } from "react-router-dom";

export interface SubmitPapiPayload {
  answers: Record<string, "a" | "b">;
}

export const useTSubmitPapiKostick = () => {
  const queryClient = useQueryClient();
  const { showToast, showGeneralErrorToast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["submit-papikostick-result"],
    mutationFn: async ({ answers }: SubmitPapiPayload) => {
      const participantId = pb.authStore.model?.id;
      if (!participantId) {
        throw new Error("No participant ID found in auth store");
      }

      // Store only raw answers in PocketBase
      return await pb.collection("test_results").create({
        participant: participantId,
        test_type: "papikostick",
        status: "completed",
        data: answers,
      });
    },
    onSuccess: () => {
      showToast({
        message: "Jawaban PAPI Kostick berhasil dikirim.",
      });
      queryClient.invalidateQueries({ queryKey: ["participant-results"] });

      sessionStorage.removeItem("papi_progress");
      navigate("/psikotes");
    },
    onError: (error) => {
      console.error("PAPI Kostick submission error:", error);
      showGeneralErrorToast();
    },
  });
};
