import { eas10Data } from "@/data/eas10";
import { useEas10Context } from "../../context/Eas10Context";
import { EAS10Row } from "../EAS10Row";

export const EAS10List = () => {
  const { answers, selectAnswer } = useEas10Context();

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-2 shadow-sm">
      {eas10Data.map((item) => (
        <EAS10Row
          key={item.id}
          id={item.id}
          expression={item.expression}
          conclusion={item.conclusion}
          selectedAnswer={answers[item.id]}
          onSelectAnswer={selectAnswer}
        />
      ))}
    </div>
  );
};
