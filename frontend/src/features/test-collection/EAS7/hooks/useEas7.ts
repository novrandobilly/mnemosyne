import { useEffect, useRef, useState } from "react";
import { eas7Data, type Eas7Answer } from "@/data/eas7";

export type Eas7AnswerRecord = Record<number, Eas7Answer>;

interface UseEas7Return {
  currentGroupId: number;
  currentGroup: (typeof eas7Data)[number];
  answers: Eas7AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (questionId: number, answer: Eas7Answer) => void;
  goToGroup: (groupId: number) => void;
  formatTime: (seconds: number) => string;
}

const INITIAL_SECONDS = 5 * 60;
const TOTAL_QUESTIONS = eas7Data.reduce(
  (acc, g) => acc + g.questions.length,
  0,
);

export const useEas7 = (): UseEas7Return => {
  const [currentGroupId, setCurrentGroupId] = useState(1);
  const [answers, setAnswers] = useState<Eas7AnswerRecord>({});
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const currentGroup =
    eas7Data.find((g) => g.groupId === currentGroupId) ?? eas7Data[0];

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
    console.log("EAS7 timer ended. Auto submit triggered.", answers);
    // TODO: submit to PocketBase
  }, [secondsLeft, answers]);

  const selectAnswer = (questionId: number, answer: Eas7Answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const goToGroup = (groupId: number) => {
    if (groupId < 1 || groupId > eas7Data.length) return;
    setCurrentGroupId(groupId);
  };

  const formatTime = (seconds: number): string => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondPart = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secondPart}`;
  };

  return {
    currentGroupId,
    currentGroup,
    answers,
    answeredCount,
    totalQuestions: TOTAL_QUESTIONS,
    secondsLeft,
    isTimeUp: secondsLeft === 0,
    selectAnswer,
    goToGroup,
    formatTime,
  };
};
