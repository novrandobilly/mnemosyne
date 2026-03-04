import { a5Data } from "@/data/a5";
import { A5QuestionRow } from "../A5QuestionRow";

export function A5List() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-2 shadow-sm">
      {a5Data.map((item) => (
        <A5QuestionRow key={item.id} item={item} />
      ))}
    </div>
  );
}
