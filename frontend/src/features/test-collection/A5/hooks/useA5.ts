import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { a5Data, type A5Answer } from "@/data/a5/index";
import { useTSubmitA5 } from "@/api/test/a5/useTSubmitA5";

export type A5AnswerRecord = Record<number, A5Answer>;
type A5FormValues = Record<string, A5Answer>;

const INITIAL_SECONDS = 5 * 60;

export const useA5 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);
  const { mutateAsync: submitResult, isPending: isSubmitting } = useTSubmitA5();

  const methods = useForm<A5FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("a5_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = a5Data.length;
  const answers: A5AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k, v]) => k.startsWith("q_") && v !== null && v !== undefined)
      .map(([k, v]) => [Number(k.slice(2)), v as A5Answer]),
  );
  const answeredCount = Object.keys(answers).length;

  const handleFinish = () => {
    submitResult({ testType: "a5", answers });
  };

  function selectAnswer(id: number, option: A5Answer) {
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
        console.log("A5 time is up! Final answers:", answers);
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
      sessionStorage.setItem("a5_progress", JSON.stringify(value));
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
};
