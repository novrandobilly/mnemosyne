import { useEffect, useRef, useState } from "react";
import { eas10Data, type Eas10Answer } from "@/data/eas10";

export type Eas10AnswerRecord = Record<number, Eas10Answer>;

interface UseEas10Return {
  answers: Eas10AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, answer: Eas10Answer) => void;
  formatTime: (seconds: number) => string;
}

const INITIAL_SECONDS = 5 * 60;

export const useEas10 = (): UseEas10Return => {
  const [answers, setAnswers] = useState<Eas10AnswerRecord>({});
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

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
    console.log("EAS10 timer ended. Auto submit triggered.", answers);
    // TODO: submit to PocketBase
  }, [secondsLeft, answers]);

  const selectAnswer = (id: number, answer: Eas10Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };

  const formatTime = (seconds: number): string => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondPart = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secondPart}`;
  };

  return {
    answers,
    answeredCount,
    totalQuestions,
    secondsLeft,
    isTimeUp: secondsLeft === 0,
    selectAnswer,
    formatTime,
  };
};
