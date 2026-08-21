import { cn } from "@/lib/tailwind-merge";
import { useEas6Context } from "../../../context/Eas6Context";

interface EAS6CardProps {
  id: number;
  question: string;
  options: [string, string, string, string, string];
}

export const EAS6Card = ({ id, question, options }: EAS6CardProps) => {
  const { answers, selectAnswer } = useEas6Context();
  const selectedAnswer = answers[id];
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
        {/* Left Side: Question number + Grid of series numbers */}
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
            {id}
          </span>
          <div className="grid grid-cols-8 gap-x-1 sm:gap-x-2 font-mono text-sm font-semibold text-neutral-900">
            {question
              .trim()
              .split(/\s+/)
              .map((item, idx) => (
                <div key={idx} className="w-8 text-center sm:w-10">
                  {item}
                </div>
              ))}
          </div>
        </div>

        {/* Right Side: Options buttons */}
        <div className="flex flex-nowrap gap-2 overflow-x-auto md:overflow-x-visible">
          {options.map((option, idx) => {
            const letters = ["A", "B", "C", "D", "E"] as const;
            const letter = letters[idx];
            const isSelected = selectedAnswer === letter;

            return (
              <button
                key={option}
                type="button"
                onClick={() => selectAnswer(id, letter)}
                className={cn(
                  "flex min-w-12 sm:min-w-14 items-center justify-center rounded-xl border-2 px-3 py-1.5 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer",
                  isSelected
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50",
                )}
              >
                <span className="font-mono text-sm font-semibold">
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
