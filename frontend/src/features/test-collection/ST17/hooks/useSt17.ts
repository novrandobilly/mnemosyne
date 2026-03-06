import { useEffect, useRef, useState } from "react";
import { ST17_TOTAL_QUESTIONS, type St17Answer } from "@/data/st17";

export type St17AnswerRecord = Record<number, St17Answer>;

interface UseSt17Return {
  answers: St17AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, option: St17Answer) => void;
  formatTime: (seconds: number) => string;
}

const INITIAL_SECONDS = 20 * 60;

export const useSt17 = (): UseSt17Return => {
  const [answers, setAnswers] = useState<St17AnswerRecord>({});
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);

  const totalQuestions = ST17_TOTAL_QUESTIONS;
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
    console.log("ST17 timer ended. Auto submit triggered.", answers);
    // TODO: submit to PocketBase
  }, [secondsLeft, answers]);

  const selectAnswer = (id: number, option: St17Answer) => {
    if (isTimeUp) return;
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
    isTimeUp,
    selectAnswer,
    formatTime,
  };
};
