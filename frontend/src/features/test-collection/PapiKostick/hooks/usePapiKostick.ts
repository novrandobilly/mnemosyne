import { useState } from "react";
import { PAPI_QUESTIONS } from "@/data/papikostick";

export const QUESTIONS_PER_PAGE = 10;

export type PapiAnswer = "a" | "b";

export interface PapiAnswerRecord {
  [questionId: number]: PapiAnswer;
}

export interface UsePapiKostickReturn {
  currentPage: number;
  totalPages: number;
  currentPageQuestions: typeof PAPI_QUESTIONS;
  answers: PapiAnswerRecord;
  progress: number;
  answeredCount: number;
  totalQuestions: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isCompleted: boolean;
  unansweredIds: number[];
  selectAnswer: (questionId: number, answer: PapiAnswer) => void;
  goNext: () => void;
  goPrev: () => void;
  goToPage: (page: number) => void;
}

export const getPageForQuestion = (questionId: number): number =>
  Math.floor((questionId - 1) / QUESTIONS_PER_PAGE);

export const usePapiKostick = (): UsePapiKostickReturn => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<PapiAnswerRecord>({});

  const total = PAPI_QUESTIONS.length;
  const totalPages = Math.ceil(total / QUESTIONS_PER_PAGE);
  const answeredCount = Object.keys(answers).length;

  const currentPageQuestions = PAPI_QUESTIONS.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE,
  );

  const unansweredIds = PAPI_QUESTIONS.filter(
    (q) => answers[q.id] === undefined,
  ).map((q) => q.id);

  const selectAnswer = (questionId: number, answer: PapiAnswer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
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
    progress: Math.round((answeredCount / total) * 100),
    answeredCount,
    totalQuestions: total,
    isFirstPage: currentPage === 0,
    isLastPage: currentPage === totalPages - 1,
    isCompleted: answeredCount === total,
    unansweredIds,
    selectAnswer,
    goNext,
    goPrev,
    goToPage,
  };
};
