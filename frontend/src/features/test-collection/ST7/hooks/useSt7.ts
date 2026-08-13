import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ST7_TOTAL_QUESTIONS, type St7Answer } from "@/data/st7";

export type St7AnswerRecord = Record<number, St7Answer>;
type St7FormValues = Record<string, St7Answer>;

const INITIAL_SECONDS = 20 * 60;

export const useSt7 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<St7FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("st7_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = ST7_TOTAL_QUESTIONS;
  const answers: St7AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k, v]) => k.startsWith("q_") && v !== null && v !== undefined && (v as any) !== "")
      .map(([k, v]) => [Number(k.slice(2)), v as St7Answer]),
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
      "ST7 timer ended. Auto submit triggered.",
      methods.getValues(),
    );
    // TODO: submit to PocketBase
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("st7_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (id: number, option: St7Answer) => {
    if (isTimeUp) return;
    const current = methods.getValues(`q_${id}`);
    if (current === option) {
      methods.setValue(`q_${id}`, null as any);
    } else {
      methods.setValue(`q_${id}`, option);
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
    isTimeUp,
    selectAnswer,
    formatTime,
  };
};
