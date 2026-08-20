import { useCallback } from "react";
import { scoreEas4 } from "@/data/eas4/scoring";
import { useTSubmitTestResult } from "@/tanstack/test/useTSubmitTestResult";
import { useNavigate } from "react-router-dom";

export const useEas4Scoring = () => {
  const { mutateAsync: submitResult, isPending: isSubmitting } = useTSubmitTestResult();
  const navigate = useNavigate();

  const handleFinish = useCallback(
    async (answers: Record<number, "sama" | "beda">) => {
      const scoringResult = scoreEas4(answers);
      try {
        await submitResult({
          testType: "eas4",
          answers: {
            ...scoringResult,
            raw_answers: answers,
          },
        });
        sessionStorage.removeItem("eas4_progress");
        sessionStorage.removeItem("eas4_seconds_left");
        navigate("/psikotes");
      } catch (error) {
        console.error("Failed to submit EAS4 answers", error);
      }
    },
    [submitResult, navigate]
  );

  return {
    handleFinish,
    isSubmitting,
  };
};
