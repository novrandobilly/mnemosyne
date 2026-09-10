import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";
import { useNavigate } from "react-router-dom";

export interface SubmitDiscPayload {
  answers: Record<string, { most: number | null; least: number | null }>;
}

export const useTSubmitDisc = () => {
  const queryClient = useQueryClient();
  const { showToast, showGeneralErrorToast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["submit-disc-result"],
    mutationFn: async ({ answers }: SubmitDiscPayload) => {
      const participantId = pb.authStore.model?.id;
      if (!participantId) {
        throw new Error("No participant ID found in auth store");
      }

      // Store only raw answers in PocketBase
      return await pb.collection("test_results").create({
        participant: participantId,
        test_type: "disc",
        status: "completed",
        data: answers,
      });
    },
    onSuccess: () => {
      showToast({
        message: "Jawaban DISC berhasil dikirim.",
      });
      queryClient.invalidateQueries({ queryKey: ["participant-results"] });

      sessionStorage.removeItem("disc_progress");
      navigate("/psikotes");
    },
    onError: (error) => {
      console.error("DISC submission error:", error);
      showGeneralErrorToast();
    },
  });
};
