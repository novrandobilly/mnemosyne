import { QUESTIONS_PER_PAGE } from "../../context/FormContext";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { QuestionCard } from "../QuestionCard";
import { usePapiKostickContext } from "../../context/FormContext";

export const QuestionList = () => {
  const { currentPage, currentPageQuestions } = usePapiKostickContext();
  const pageStart = currentPage * QUESTIONS_PER_PAGE + 1;
  const pageEnd = pageStart + currentPageQuestions.length - 1;

  return (
    <section className="flex flex-col gap-3 sm:gap-4">
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
          className="text-neutral-400 uppercase tracking-widest sm:text-xs"
        >
          Halaman {currentPage + 1}
        </IntiDinamisText>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        {currentPageQuestions.map((question) => (
          <div
            key={question.id}
            className="border-b border-neutral-200 p-3 last:border-b-0 sm:p-4"
          >
            <QuestionCard
              questionId={question.id}
              questionNumber={question.id}
              textA={question.a}
              textB={question.b}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
