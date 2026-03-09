import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { a5Data } from "@/data/a5";

export type A5AnswerRecord = Record<number, string>;
type A5FormValues = Record<string, string>;

const INITIAL_SECONDS = 5 * 60;

export function useA5() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<A5FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("a5_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = a5Data.length;
  const answers: A5AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k]) => k.startsWith("q_"))
      .map(([k, v]) => [Number(k.slice(2)), v]),
  );
  const answeredCount = Object.keys(answers).length;

  function selectAnswer(id: number, option: string) {
    if (isTimeUp) return;
    methods.setValue(`q_${id}`, option);
  }

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (!hasAutoSubmitted.current) {
        hasAutoSubmitted.current = true;
        setIsTimeUp(true);
        console.log("A5 time is up! Final answers:", answers);
        // TODO: submit to PocketBase
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
  };
}
