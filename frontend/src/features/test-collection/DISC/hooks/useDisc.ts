import { useState } from "react";
import { DISC_QUESTIONS } from "@/data/disc";

export const DISC_QUESTIONS_PER_PAGE = 7;

export interface DiscAnswer {
  most: number | null; // index 0-3 of the option selected as "Most like me"
  least: number | null; // index 0-3 of the option selected as "Least like me"
}

export interface DiscAnswerRecord {
  [questionId: number]: DiscAnswer;
}

export interface UseDiscReturn {
  currentPage: number;
  totalPages: number;
  currentPageQuestions: typeof DISC_QUESTIONS;
  answers: DiscAnswerRecord;
  progress: number;
  completedCount: number;
  totalQuestions: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isCompleted: boolean;
  incompleteIds: number[];
  selectMost: (questionId: number, optionIndex: number) => void;
  selectLeast: (questionId: number, optionIndex: number) => void;
  goNext: () => void;
  goPrev: () => void;
  goToPage: (page: number) => void;
}

export const getPageForDiscQuestion = (questionId: number): number =>
  Math.floor((questionId - 1) / DISC_QUESTIONS_PER_PAGE);

const isAnswerComplete = (answer: DiscAnswer | undefined): boolean =>
  answer !== undefined &&
  answer.most !== null &&
  answer.least !== null &&
  answer.most !== answer.least;

export const useDisc = (): UseDiscReturn => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<DiscAnswerRecord>({});

  const total = DISC_QUESTIONS.length;
  const totalPages = Math.ceil(total / DISC_QUESTIONS_PER_PAGE);

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
    setAnswers((prev) => {
      const current = prev[questionId] ?? { most: null, least: null };
      // If this option is already "most", deselect it
      if (current.most === optionIndex) {
        return { ...prev, [questionId]: { ...current, most: null } };
      }
      // If this option is currently "least", clear least and set as most
      const newLeast = current.least === optionIndex ? null : current.least;
      return { ...prev, [questionId]: { most: optionIndex, least: newLeast } };
    });
  };

  const selectLeast = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => {
      const current = prev[questionId] ?? { most: null, least: null };
      // If this option is already "least", deselect it
      if (current.least === optionIndex) {
        return { ...prev, [questionId]: { ...current, least: null } };
      }
      // If this option is currently "most", clear most and set as least
      const newMost = current.most === optionIndex ? null : current.most;
      return { ...prev, [questionId]: { most: newMost, least: optionIndex } };
    });
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

  return {
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
  };
};
