import {
  QUESTIONS_PER_PAGE,
  type PapiAnswer,
  type PapiAnswerRecord,
} from "../../hooks/usePapiKostick";
import { QuestionCard } from "../QuestionCard";
import type { PAPI_QUESTIONS } from "@/data/papikostick";

interface QuestionListProps {
  currentPage: number;
  questions: typeof PAPI_QUESTIONS;
  answers: PapiAnswerRecord;
  onSelectAnswer: (questionId: number, answer: PapiAnswer) => void;
}

export const QuestionList = ({
  currentPage,
  questions,
  answers,
  onSelectAnswer,
}: QuestionListProps) => {
  const pageStart = currentPage * QUESTIONS_PER_PAGE + 1;
  const pageEnd = pageStart + questions.length - 1;

  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-neutral-500 sm:text-sm">
          Pertanyaan{" "}
          <span className="font-semibold text-neutral-900">
            {pageStart}–{pageEnd}
          </span>
        </p>
        <p className="text-xxs text-neutral-400 uppercase tracking-widest sm:text-xs">
          Halaman {currentPage + 1}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        {questions.map((question) => (
          <div
            key={question.id}
            className="border-b border-neutral-200 p-3 last:border-b-0 sm:p-4"
          >
            <QuestionCard
              questionId={question.id}
              questionNumber={question.id}
              textA={question.a}
              textB={question.b}
              selectedAnswer={answers[question.id]}
              onSelectAnswer={onSelectAnswer}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
