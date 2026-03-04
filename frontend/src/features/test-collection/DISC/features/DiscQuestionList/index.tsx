import {
  DISC_QUESTIONS_PER_PAGE,
  type DiscAnswer,
  type DiscAnswerRecord,
} from "../../hooks/useDisc";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { DiscQuestionCard } from "../DiscQuestionCard";
import type { DISC_QUESTIONS } from "@/data/disc";

interface DiscQuestionListProps {
  currentPage: number;
  questions: typeof DISC_QUESTIONS;
  answers: DiscAnswerRecord;
  onSelectMost: (questionId: number, optionIndex: number) => void;
  onSelectLeast: (questionId: number, optionIndex: number) => void;
}

const getLegendItem = (color: string, label: string, description: string) => (
  <div className="flex items-center gap-2">
    <IntiDinamisText
      as="span"
      size="12"
      weight="semibold"
      className={`rounded px-2 py-0.5 ${color}`}
    >
      {label}
    </IntiDinamisText>
    <IntiDinamisText as="span" size="12" className="text-neutral-500">
      {description}
    </IntiDinamisText>
  </div>
);

export const DiscQuestionList = ({
  currentPage,
  questions,
  answers,
  onSelectMost,
  onSelectLeast,
}: DiscQuestionListProps) => {
  const pageStart = currentPage * DISC_QUESTIONS_PER_PAGE + 1;
  const pageEnd = pageStart + questions.length - 1;

  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <IntiDinamisText
          size="12"
          weight="medium"
          className="text-neutral-500 sm:text-sm"
        >
          Pertanyaan{" "}
          <IntiDinamisText
            as="span"
            size="12"
            weight="semibold"
            className="text-neutral-900 sm:text-sm"
          >
            {pageStart}–{pageEnd}
          </IntiDinamisText>
        </IntiDinamisText>
        <IntiDinamisText
          size="10"
          className="uppercase tracking-widest text-neutral-400 sm:text-xs"
        >
          Halaman {currentPage + 1}
        </IntiDinamisText>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
        {getLegendItem(
          "bg-emerald-500 text-white",
          "Paling",
          "Paling menggambarkan saya",
        )}
        {getLegendItem(
          "bg-rose-500 text-white",
          "Kurang",
          "Paling tidak menggambarkan saya",
        )}
      </div>

      {/* Questions */}
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        {questions.map((question) => (
          <div
            key={question.id}
            className="border-b border-neutral-200 p-3 last:border-b-0 sm:p-4"
          >
            <DiscQuestionCard
              question={question}
              answer={answers[question.id] as DiscAnswer | undefined}
              onSelectMost={onSelectMost}
              onSelectLeast={onSelectLeast}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
