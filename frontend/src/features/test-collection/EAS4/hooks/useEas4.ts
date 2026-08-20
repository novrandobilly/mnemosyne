import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { eas4Data } from "@/data/eas4";
import { useTSubmitTestResult } from "@/tanstack/test/useTSubmitTestResult";
import { useNavigate } from "react-router-dom";

export type Eas4AnswerRecord = Record<number, boolean>;
type Eas4FormValues = Record<string, boolean>;

const INITIAL_SECONDS = 5 * 60;

export const useEas4 = () => {
  const [focusedId, setFocusedId] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    const saved = sessionStorage.getItem("eas4_seconds_left");
    return saved !== null ? parseInt(saved, 10) : INITIAL_SECONDS;
  });
  const hasAutoSubmitted = useRef(false);
  const { mutateAsync: submitResult, isPending: isSubmitting } = useTSubmitTestResult();
  const navigate = useNavigate();

  const methods = useForm<Eas4FormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("eas4_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const totalQuestions = eas4Data.length;
  const answers: Eas4AnswerRecord = Object.fromEntries(
    Object.entries(values)
      .filter(([k, v]) => k.startsWith("q_") && v !== null && v !== undefined && (v as any) !== "")
      .map(([k, v]) => [Number(k.slice(2)), v as boolean]),
  );
  const answeredCount = Object.keys(answers).length;

  const handleFinish = useCallback(async () => {
    try {
      await submitResult({
        testType: "eas4",
        answers,
      });
      sessionStorage.removeItem("eas4_progress");
      sessionStorage.removeItem("eas4_seconds_left");
      navigate("/psikotes");
    } catch (error) {
      console.error("Failed to submit EAS4 answers", error);
    }
  }, [answers, submitResult, navigate]);

  // Countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          sessionStorage.setItem("eas4_seconds_left", "0");
          return 0;
        }
        const next = prev - 1;
        sessionStorage.setItem("eas4_seconds_left", next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-submit on time up
  useEffect(() => {
    if (secondsLeft !== 0 || hasAutoSubmitted.current) return;
    hasAutoSubmitted.current = true;
    console.log(
      "EAS4 timer ended. Auto submit triggered.",
      methods.getValues(),
    );
    handleFinish();
  }, [secondsLeft, handleFinish]);

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("eas4_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const advanceFocus = useCallback((fromId: number) => {
    const nextItem = eas4Data.find((item) => item.id > fromId);
    if (nextItem) {
      setFocusedId(nextItem.id);
    }
  }, []);

  const selectAnswer = useCallback(
    (id: number, isSame: boolean) => {
      const current = methods.getValues(`q_${id}`);
      if (current === isSame) {
        methods.setValue(`q_${id}`, null as any);
      } else {
        methods.setValue(`q_${id}`, isSame);
        advanceFocus(id);
      }
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
    methods,
    answers,
    focusedId,
    answeredCount,
    totalQuestions,
    secondsLeft,
    isTimeUp: secondsLeft === 0,
    selectAnswer,
    setFocusedId,
    formatTime,
    handleFinish,
    isSubmitting,
  };
};
