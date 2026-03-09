import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { eas5Data } from "@/data/eas5";

export interface Eas5AnswerRecord {
  [questionId: number]: number;
}
type Eas5FormValues = Record<string, number>;

const INITIAL_SECONDS = 5 * 60;

export const useEas5 = () => {
  const [currentPileId, setCurrentPileId] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<Eas5FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("eas5_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const currentPile = useMemo(
    () => eas5Data.find((pile) => pile.pileId === currentPileId) ?? eas5Data[0],
    [currentPileId],
  );

  const answers: Eas5AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k]) => k.startsWith("q_"))
      .map(([k, v]) => [Number(k.slice(2)), v as number]),
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
    console.log(
      "EAS5 timer ended. Auto submit triggered.",
      methods.getValues(),
    );
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("eas5_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (questionId: number, answer: number) => {
    methods.setValue(`q_${questionId}`, answer);
  };

  const goToPile = (pileId: number) => {
    if (pileId < 1 || pileId > eas5Data.length) return;
    setCurrentPileId(pileId);
  };

  const formatTime = (seconds: number): string => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondPart = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secondPart}`;
  };

  return {
    methods,
    currentPileId,
    currentPile,
    answers,
    answeredCount,
    totalQuestions: eas5Data.length * 5,
    secondsLeft,
    isTimeUp: secondsLeft === 0,
    selectAnswer,
    goToPile,
    formatTime,
  };
};
