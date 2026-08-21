import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";
import { useNavigate } from "react-router-dom";

export interface SubmitTestResultPayload {
  testType: string;
  answers: Record<string | number, any>;
}

export const useTSubmitEas10 = () => {
  const queryClient = useQueryClient();
  const { showToast, showGeneralErrorToast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["submit-test-result"],
    mutationFn: async ({ testType, answers }: SubmitTestResultPayload) => {
      const participantId = pb.authStore.model?.id;
      if (!participantId) {
        throw new Error("No participant ID found in auth store");
      }

      return await pb.collection("test_results").create({
        participant: participantId,
        test_type: testType,
        status: "completed",
        data: answers,
      });
    },
    onSuccess: (_, variables) => {
      showToast({
        message: "Jawaban berhasil dikirim.",
      });
      queryClient.invalidateQueries({ queryKey: ["participant-results"] });

      sessionStorage.removeItem(`${variables.testType}_progress`);
      sessionStorage.removeItem(`${variables.testType}_seconds_left`);
      navigate("/psikotes");
    },
    onError: (error) => {
      console.error("Submission error:", error);
      showGeneralErrorToast();
    },
  });
};
