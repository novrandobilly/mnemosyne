import { drData } from "@/data/dr";
import { DrQuestionRow } from "../DrQuestionRow";

export function DrList() {
  return (
    <div className="flex flex-col gap-4">
      {drData.map((item) => (
        <DrQuestionRow key={item.id} item={item} />
      ))}
    </div>
  );
}
