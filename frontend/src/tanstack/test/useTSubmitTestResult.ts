import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";

export interface SubmitTestResultPayload {
  testType: string;
  answers: Record<string | number, any>;
}

export const useTSubmitTestResult = () => {
  const queryClient = useQueryClient();
  const { showToast, showGeneralErrorToast } = useToast();

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
    onSuccess: () => {
      showToast({
        message: "Jawaban berhasil dikirim.",
      });
      queryClient.invalidateQueries({ queryKey: ["participant-results"] });
    },
    onError: (error) => {
      console.error("Submission error:", error);
      showGeneralErrorToast();
    },
  });
};
