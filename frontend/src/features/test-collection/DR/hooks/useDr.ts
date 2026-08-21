import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { drData, type DrAnswer } from "@/data/dr/index";
import { useTSubmitDr } from "@/api/test/dr/useTSubmitDr";

export type DrAnswerRecord = Record<number, DrAnswer>;
type DrFormValues = Record<string, DrAnswer>;

const INITIAL_SECONDS = 20 * 60; // 20 minutes

export function useDr() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);
  const { mutateAsync: submitResult, isPending: isSubmitting } = useTSubmitDr();

  const methods = useForm<DrFormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("dr_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = drData.length;
  const answers: DrAnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k, v]) => k.startsWith("q_") && v !== null && v !== undefined)
      .map(([k, v]) => [Number(k.slice(2)), v as DrAnswer]),
  );
  const answeredCount = Object.keys(answers).length;

  const handleFinish = () => {
    submitResult({ testType: "dr", answers });
  };

  function selectAnswer(id: number, option: DrAnswer) {
    if (isTimeUp) return;
    const current = methods.getValues(`q_${id}`);
    if (current === option) {
      methods.setValue(`q_${id}`, null as any);
    } else {
      methods.setValue(`q_${id}`, option);
    }
  }

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (!hasAutoSubmitted.current) {
        hasAutoSubmitted.current = true;
        setIsTimeUp(true);
        console.log("DR time is up! Final answers:", answers);
        handleFinish();
      }
      return;
    }

    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("dr_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return {
    methods,
    answers,
    selectAnswer,
    isTimeUp,
    timeDisplay,
    totalQuestions,
    answeredCount,
    handleFinish,
    isSubmitting,
  };
}
