import { useEffect, useMemo, useRef, useState } from "react";
import { eas5Data } from "@/data/eas5";

export interface Eas5AnswerRecord {
  [questionId: number]: number;
}

interface UseEas5Return {
  currentPileId: number;
  currentPile: (typeof eas5Data)[number];
  answers: Eas5AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (questionId: number, answer: number) => void;
  goToPile: (pileId: number) => void;
  formatTime: (seconds: number) => string;
}

const INITIAL_SECONDS = 5 * 60;

export const useEas5 = (): UseEas5Return => {
  const [currentPileId, setCurrentPileId] = useState(1);
  const [answers, setAnswers] = useState<Eas5AnswerRecord>({});
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const currentPile = useMemo(
    () => eas5Data.find((pile) => pile.pileId === currentPileId) ?? eas5Data[0],
    [currentPileId],
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
    console.log("EAS5 timer ended. Auto submit triggered.", answers);
  }, [secondsLeft, answers]);

  const selectAnswer = (questionId: number, answer: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
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
