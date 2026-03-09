import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PAPI_QUESTIONS } from "@/data/papikostick";

export const QUESTIONS_PER_PAGE = 10;

export type PapiAnswer = "a" | "b";

export type PapiFormValues = Record<string, PapiAnswer>;

export const getPageForQuestion = (questionId: number): number =>
  Math.floor((questionId - 1) / QUESTIONS_PER_PAGE);

export const usePapiKostick = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const methods = useForm<PapiFormValues>({
    defaultValues: JSON.parse(sessionStorage.getItem("papi_progress") || "{}"),
  });
  const { watch, handleSubmit: rhfHandleSubmit } = methods;

  const values = watch();

  const total = PAPI_QUESTIONS.length;
  const totalPages = Math.ceil(total / QUESTIONS_PER_PAGE);
  const answeredCount = Object.values(values).filter(Boolean).length;

  const currentPageQuestions = PAPI_QUESTIONS.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE,
  );

  const unansweredIds = (() => {
    const unansweredQuestions = PAPI_QUESTIONS.filter(
      (q) => !values[`q_${q.id}`],
    );
    const unansweredQuestionIds = unansweredQuestions.map((q) => q.id);
    return unansweredQuestionIds;
  })();

  const goNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };

  const goPrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) setCurrentPage(page);
  };

  const handleSubmit = rhfHandleSubmit((data) => {
    // TODO: wire up submission logic (e.g. save to PocketBase)
    console.log("Submitted answers:", data);
  });

  //handle refresh on progress
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem("papi_progress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    methods,
    currentPage,
    totalPages,
    currentPageQuestions,
    progress: Math.round((answeredCount / total) * 100),
    answeredCount,
    totalQuestions: total,
    isFirstPage: currentPage === 0,
    isLastPage: currentPage === totalPages - 1,
    isCompleted: answeredCount === total,
    unansweredIds,
    goNext,
    goPrev,
    goToPage,
    handleSubmit,
  };
};
