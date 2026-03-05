import { useEffect, useRef, useState } from "react";
import { da5Data } from "@/data/da5";

export type Da5AnswerRecord = Record<number, string>;

interface UseDa5Return {
  answers: Da5AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  currentIndex: number;
  isRulesOpen: boolean;
  selectAnswer: (id: number, option: string) => void;
  goToIndex: (idx: number) => void;
  goNext: () => void;
  goPrev: () => void;
  toggleRules: () => void;
  formatTime: (seconds: number) => string;
}

const INITIAL_SECONDS = 5 * 60;

export const useDa5 = (): UseDa5Return => {
  const [answers, setAnswers] = useState<Da5AnswerRecord>({});
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);

  const totalQuestions = da5Data.length;
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
    console.log("DA5 timer ended. Auto submit triggered.", answers);
    // TODO: submit to PocketBase
  }, [secondsLeft, answers]);

  const selectAnswer = (id: number, option: string) => {
    if (isTimeUp) return;
    setAnswers((prev) => ({ ...prev, [id]: option }));
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
