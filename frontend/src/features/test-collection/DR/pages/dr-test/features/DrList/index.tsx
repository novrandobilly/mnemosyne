import { drData } from "@/data/dr/index";
import { DrQuestionRow } from "../DrQuestionRow";

export function DrList() {
  return (
    <div className="rounded-2xl bg-white px-6 py-6 shadow-sm flex flex-col gap-10">
      {drData.map((item) => (
        <DrQuestionRow key={item.id} item={item} />
      ))}
    </div>
  );
}
