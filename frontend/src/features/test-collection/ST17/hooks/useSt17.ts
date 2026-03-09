import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ST17_TOTAL_QUESTIONS, type St17Answer } from "@/data/st17";

export type St17AnswerRecord = Record<number, St17Answer>;
type St17FormValues = Record<string, St17Answer>;

const INITIAL_SECONDS = 20 * 60;

export const useSt17 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<St17FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("st17_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = ST17_TOTAL_QUESTIONS;
  const answers: St17AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k]) => k.startsWith("q_"))
      .map(([k, v]) => [Number(k.slice(2)), v as St17Answer]),
  );
  const answeredCount = Object.keys(answers).length;

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
    setIsTimeUp(true);
    console.log(
      "ST17 timer ended. Auto submit triggered.",
      methods.getValues(),
    );
    // TODO: submit to PocketBase
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("st17_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (id: number, option: St17Answer) => {
    if (isTimeUp) return;
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
    isTimeUp,
    selectAnswer,
    formatTime,
  };
};
