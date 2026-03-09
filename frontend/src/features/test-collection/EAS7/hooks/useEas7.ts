import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { eas7Data, type Eas7Answer } from "@/data/eas7";

export type Eas7AnswerRecord = Record<number, Eas7Answer>;
type Eas7FormValues = Record<string, Eas7Answer>;

const INITIAL_SECONDS = 5 * 60;
const TOTAL_QUESTIONS = eas7Data.reduce(
  (acc, g) => acc + g.questions.length,
  0,
);

export const useEas7 = () => {
  const [currentGroupId, setCurrentGroupId] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const hasAutoSubmitted = useRef(false);

  const methods = useForm<Eas7FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("eas7_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const currentGroup =
    eas7Data.find((g) => g.groupId === currentGroupId) ?? eas7Data[0];

  const answers: Eas7AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k]) => k.startsWith("q_"))
      .map(([k, v]) => [Number(k.slice(2)), v as Eas7Answer]),
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
      "EAS7 timer ended. Auto submit triggered.",
      methods.getValues(),
    );
    // TODO: submit to PocketBase
  }, [secondsLeft]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("eas7_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const selectAnswer = (questionId: number, answer: Eas7Answer) => {
    methods.setValue(`q_${questionId}`, answer);
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
    methods,
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
