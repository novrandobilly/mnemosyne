import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { eas6Data } from "@/data/eas6";
import { useTSubmitEas6 } from "@/api/test/eas6/useTSubmitEas6";
import { type Eas6Choice } from "@/data/eas6/solution";

export type Eas6AnswerRecord = Record<number, Eas6Choice>;
type Eas6FormValues = Record<string, Eas6Choice>;

const INITIAL_SECONDS = 5 * 60;

export const useEas6 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);
  const { mutateAsync: submitResult, isPending: isSubmitting } =
    useTSubmitEas6();

  const methods = useForm<Eas6FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("eas6_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const answers: Eas6AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k, v]) => k.startsWith("q_") && v !== null && v !== undefined)
      .map(([k, v]) => [Number(k.slice(2)), v as Eas6Choice]),
  );
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = eas6Data.length;

  const handleFinish = () => {
    submitResult({ testType: "eas6", answers });
  };

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  useEffect(() => {
    if (secondsLeft !== 0 || hasAutoSubmitted.current) return;
    hasAutoSubmitted.current = true;
    console.log(
      "EAS6 timer ended. Auto submit triggered.",
      methods.getValues(),
    );
    handleFinish();
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("eas6_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (id: number, optionLetter: Eas6Choice) => {
    const current = methods.getValues(`q_${id}`);
    if (current === optionLetter) {
      methods.setValue(`q_${id}`, null as any);
    } else {
      methods.setValue(`q_${id}`, optionLetter);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondPart = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secondPart}`;
  };

  return {
    methods,
    answers,
    answeredCount,
    totalQuestions,
    secondsLeft,
    isTimeUp: secondsLeft === 0,
    selectAnswer,
    formatTime,
    eas6Data,
    handleFinish,
    isSubmitting,
  };
};
