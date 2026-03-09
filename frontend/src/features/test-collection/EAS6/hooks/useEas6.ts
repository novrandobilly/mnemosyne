import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { eas6Data } from "@/data/eas6";

export type Eas6AnswerRecord = Record<number, string>;
type Eas6FormValues = Record<string, string>;

const INITIAL_SECONDS = 5 * 60;

export const useEas6 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<Eas6FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("eas6_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const answeredCount = Object.keys(values).filter((k) =>
    k.startsWith("q_"),
  ).length;
  const totalQuestions = eas6Data.length;
  const answers: Eas6AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k]) => k.startsWith("q_"))
      .map(([k, v]) => [Number(k.slice(2)), v]),
  );

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
    // TODO: submit to PocketBase
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("eas6_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (id: number, option: string) => {
    methods.setValue(`q_${id}`, option);
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
