import { useEffect, useRef, useState } from "react";
import { eas6Data } from "@/data/eas6";

export type Eas6AnswerRecord = Record<number, string>;

interface UseEas6Return {
  answers: Eas6AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, option: string) => void;
  formatTime: (seconds: number) => string;
}

const INITIAL_SECONDS = 5 * 60;

export const useEas6 = (): UseEas6Return => {
  const [answers, setAnswers] = useState<Eas6AnswerRecord>({});
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = eas6Data.length;

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
    console.log("EAS6 timer ended. Auto submit triggered.", answers);
    // TODO: submit to PocketBase
  }, [secondsLeft, answers]);

  const selectAnswer = (id: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
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
