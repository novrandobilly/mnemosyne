import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DISC_QUESTIONS } from "@/data/disc";

export const DISC_QUESTIONS_PER_PAGE = 7;

export interface DiscAnswer {
  most: number | null; // index 0–3 of the option selected as "Most like me"
  least: number | null; // index 0–3 of the option selected as "Least like me"
}

export type DiscAnswerRecord = Record<number, DiscAnswer>;

type DiscFormValues = { [key: string]: DiscAnswer };

export const getPageForDiscQuestion = (questionId: number): number =>
  Math.floor((questionId - 1) / DISC_QUESTIONS_PER_PAGE);

const isAnswerComplete = (answer: DiscAnswer | undefined): boolean =>
  answer !== undefined &&
  answer.most !== null &&
  answer.least !== null &&
  answer.most !== answer.least;

export const useDisc = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const methods = useForm<DiscFormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("disc_progress") || "{}"),
  });
  const { watch } = methods;
  const values = watch();

  const total = DISC_QUESTIONS.length;
  const totalPages = Math.ceil(total / DISC_QUESTIONS_PER_PAGE);

  const answers = DISC_QUESTIONS.reduce<DiscAnswerRecord>((acc, q) => {
    acc[q.id] = values[`q_${q.id}`] ?? { most: null, least: null };
    return acc;
  }, {});

  const completedCount = DISC_QUESTIONS.filter((q) =>
    isAnswerComplete(answers[q.id]),
  ).length;

  const currentPageQuestions = DISC_QUESTIONS.slice(
    currentPage * DISC_QUESTIONS_PER_PAGE,
    (currentPage + 1) * DISC_QUESTIONS_PER_PAGE,
  );

  const incompleteIds = DISC_QUESTIONS.filter(
    (q) => !isAnswerComplete(answers[q.id]),
  ).map((q) => q.id);

  const selectMost = (questionId: number, optionIndex: number) => {
    const current = answers[questionId] ?? { most: null, least: null };
    let updated: DiscAnswer;
    if (current.most === optionIndex) {
      updated = { ...current, most: null };
    } else {
      const newLeast = current.least === optionIndex ? null : current.least;
      updated = { most: optionIndex, least: newLeast };
    }
    methods.setValue(`q_${questionId}`, updated);
  };

  const selectLeast = (questionId: number, optionIndex: number) => {
    const current = answers[questionId] ?? { most: null, least: null };
    let updated: DiscAnswer;
    if (current.least === optionIndex) {
      updated = { ...current, least: null };
    } else {
      const newMost = current.most === optionIndex ? null : current.most;
      updated = { most: newMost, least: optionIndex };
    }
    methods.setValue(`q_${questionId}`, updated);
  };

  const goNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };

  const goPrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) setCurrentPage(page);
  };

  const handleSubmit = methods.handleSubmit((data) => {
    console.log("Submitted DISC answers:", data);
  });

  // Persist answers across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("disc_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    methods,
    currentPage,
    totalPages,
    currentPageQuestions,
    answers,
    progress: Math.round((completedCount / total) * 100),
    completedCount,
    totalQuestions: total,
    isFirstPage: currentPage === 0,
    isLastPage: currentPage === totalPages - 1,
    isCompleted: completedCount === total,
    incompleteIds,
    selectMost,
    selectLeast,
    goNext,
    goPrev,
    goToPage,
    handleSubmit,
  };
};
