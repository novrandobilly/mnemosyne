import { eas4Data } from "@/data/eas4";
import { useEas4Context } from "../../context/Eas4Context";
import { EAS4Row } from "../EAS4Row";

export const EAS4List = () => {
  const { answers, focusedId, selectAnswer, setFocusedId } = useEas4Context();

  return (
    <div className="flex w-full flex-col max-w-sm rounded-lg border border-neutral-200 bg-white shadow-sm">
      {eas4Data.map((item) => (
        <EAS4Row
          key={item.id}
          id={item.id}
          leftValue={item.leftValue}
          rightValue={item.rightValue}
          selectedAnswer={answers[item.id]}
          isFocused={focusedId === item.id}
          onSelect={selectAnswer}
          onFocus={setFocusedId}
        />
      ))}
    </div>
  );
};
