import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { da5Data } from "@/data/da5";

export type Da5AnswerRecord = Record<number, string>;
type Da5FormValues = Record<string, string>;

const INITIAL_SECONDS = 5 * 60;

export const useDa5 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<Da5FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("da5_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = da5Data.length;
  const answers: Da5AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k]) => k.startsWith("q_"))
      .map(([k, v]) => [Number(k.slice(2)), v]),
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
    console.log("DA5 timer ended. Auto submit triggered.", methods.getValues());
    // TODO: submit to PocketBase
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("da5_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (id: number, option: string) => {
    if (isTimeUp) return;
    methods.setValue(`q_${id}`, option);
  };

  const goToIndex = (idx: number) => {
    if (idx >= 0 && idx < totalQuestions) setCurrentIndex(idx);
  };

  const goNext = () => goToIndex(currentIndex + 1);
  const goPrev = () => goToIndex(currentIndex - 1);

  const toggleRules = () => setIsRulesOpen((prev) => !prev);

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
    currentIndex,
    isRulesOpen,
    selectAnswer,
    goToIndex,
    goNext,
    goPrev,
    toggleRules,
    formatTime,
  };
};
