import { type St7Phase } from "@/data/st7";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { St7QuestionRow } from "../St7QuestionRow";

interface Props {
  phase: St7Phase;
}

export function St7PhaseSection({ phase }: Props) {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {/* Left: sticky reference image */}
      <div className="self-start sticky top-24">
        <IntiDinamisText
          size="12"
          className="mb-2 uppercase tracking-[0.15em] text-neutral-400"
        >
          Pola Fase {phase.phase}
        </IntiDinamisText>
        <div className="overflow-hidden rounded-xl border border-neutral-200 p-2">
          <img
            src={phase.referenceImageUrl}
            alt={`Pola lipatan fase ${phase.phase}`}
            className="w-full object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-neutral-400">
          Soal {phase.questions[0].id}–
          {phase.questions[phase.questions.length - 1].id}
        </p>
      </div>

      {/* Right: questions */}
      <div className="divide-y divide-neutral-100">
        {phase.questions.map((q) => (
          <St7QuestionRow key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
