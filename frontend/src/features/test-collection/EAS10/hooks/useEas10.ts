import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { eas10Data, type Eas10Answer } from "@/data/eas10";

export type Eas10AnswerRecord = Record<number, Eas10Answer>;
type Eas10FormValues = Record<string, Eas10Answer>;

const INITIAL_SECONDS = 5 * 60;

export const useEas10 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<Eas10FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("eas10_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const answers: Eas10AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k]) => k.startsWith("q_"))
      .map(([k, v]) => [Number(k.slice(2)), v as Eas10Answer]),
  );
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = eas10Data.length;

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
      "EAS10 timer ended. Auto submit triggered.",
      methods.getValues(),
    );
    // TODO: submit to PocketBase
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("eas10_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (id: number, answer: Eas10Answer) => {
    methods.setValue(`q_${id}`, answer);
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
  };
};
