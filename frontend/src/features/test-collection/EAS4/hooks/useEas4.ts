import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { eas4Data } from "@/data/eas4";

export type Eas4AnswerRecord = Record<number, boolean>;

interface UseEas4Return {
  answers: Eas4AnswerRecord;
  focusedId: number;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, isSame: boolean) => void;
  setFocusedId: (id: number) => void;
  formatTime: (seconds: number) => string;
}

const INITIAL_SECONDS = 5 * 60;

export const useEas4 = (): UseEas4Return => {
  const [answers, setAnswers] = useState<Eas4AnswerRecord>({});
  const [focusedId, setFocusedId] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = eas4Data.length;

  // Countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Auto-submit on time up
  useEffect(() => {
    if (secondsLeft !== 0 || hasAutoSubmitted.current) return;
    hasAutoSubmitted.current = true;
    console.log("EAS4 timer ended. Auto submit triggered.", answers);
    // TODO: submit to PocketBase
  }, [secondsLeft, answers]);

  const advanceFocus = useCallback((fromId: number) => {
    const nextItem = eas4Data.find((item) => item.id > fromId);
    if (nextItem) {
      setFocusedId(nextItem.id);
    }
  }, []);

  const selectAnswer = useCallback(
    (id: number, isSame: boolean) => {
      setAnswers((prev) => ({ ...prev, [id]: isSame }));
      advanceFocus(id);
    },
    [advanceFocus],
  );

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.stopPropagation();
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "s" || e.key === "S") {
        e.preventDefault();
        selectAnswer(focusedId, true);
      } else if (e.key === "b" || e.key === "B") {
        e.preventDefault();
        selectAnswer(focusedId, false);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevItem = [...eas4Data]
          .reverse()
          .find((item) => item.id < focusedId);
        if (prevItem) setFocusedId(prevItem.id);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextItem = eas4Data.find((item) => item.id > focusedId);
        if (nextItem) setFocusedId(nextItem.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedId, selectAnswer]);

  const formatTime = useMemo(
    () =>
      (seconds: number): string => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
        const secondPart = String(seconds % 60).padStart(2, "0");
        return `${minutes}:${secondPart}`;
      },
    [],
  );

  return {
    answers,
    focusedId,
    answeredCount,
    totalQuestions,
    secondsLeft,
    isTimeUp: secondsLeft === 0,
    selectAnswer,
    setFocusedId,
    formatTime,
  };
};
