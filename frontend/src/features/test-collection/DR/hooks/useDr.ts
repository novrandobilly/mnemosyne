import { useEffect, useRef, useState } from "react";
import { drData } from "@/data/dr";

export type DrAnswerRecord = Record<number, string>;

const INITIAL_SECONDS = 20 * 60; // 20 minutes

export function useDr() {
  const [answers, setAnswers] = useState<DrAnswerRecord>({});
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const hasAutoSubmitted = useRef(false);

  const totalQuestions = drData.length;
  const answeredCount = Object.keys(answers).length;

  function selectAnswer(id: number, option: string) {
    if (isTimeUp) return;
    setAnswers((prev) => ({ ...prev, [id]: option }));
  }

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (!hasAutoSubmitted.current) {
        hasAutoSubmitted.current = true;
        setIsTimeUp(true);
        console.log("DR time is up! Final answers:", answers);
        // TODO: submit to PocketBase
      }
      return;
    }

    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return {
    answers,
    selectAnswer,
    isTimeUp,
    timeDisplay,
    totalQuestions,
    answeredCount,
  };
}
