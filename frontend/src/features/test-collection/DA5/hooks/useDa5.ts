import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { da5Data, type Da5Answer } from "@/data/da5/index";
import { useTSubmitDa5 } from "@/api/test/da5/useTSubmitDa5";

export type Da5AnswerRecord = Record<number, Da5Answer>;
type Da5FormValues = Record<string, Da5Answer>;

const INITIAL_SECONDS = 50 * 60;

export const useDa5 = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);
  const { mutateAsync: submitResult, isPending: isSubmitting } = useTSubmitDa5();

  const methods = useForm<Da5FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("da5_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = da5Data.length;
  const answers: Da5AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(
        ([k, v]) =>
          k.startsWith("q_") && v !== null && v !== undefined,
      )
      .map(([k, v]) => [Number(k.slice(2)), v as Da5Answer]),
  );
  const answeredCount = Object.keys(answers).length;

  const handleFinish = () => {
    submitResult({ testType: "da5", answers });
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
    setIsTimeUp(true);
    console.log("DA5 timer ended. Auto submit triggered.", methods.getValues());
    handleFinish();
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("da5_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (id: number, option: Da5Answer) => {
    if (isTimeUp) return;
    const current = methods.getValues(`q_${id}`);
    if (current === option) {
      methods.setValue(`q_${id}`, null as any);
    } else {
      methods.setValue(`q_${id}`, option);
    }
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
    handleFinish,
    isSubmitting,
  };
};
