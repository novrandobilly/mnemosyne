import { eas6Data } from "@/data/eas6";
import { useEas6Context } from "../../context/Eas6Context";
import { EAS6Card } from "../EAS6Card";

export const EAS6QuestionList = () => {
  const { answers, selectAnswer } = useEas6Context();

  return (
    <div className="flex flex-col gap-4">
      {eas6Data.map((item) => (
        <EAS6Card
          key={item.id}
          id={item.id}
          question={item.question}
          options={item.options}
          selectedAnswer={answers[item.id]}
          onSelectAnswer={selectAnswer}
        />
      ))}
    </div>
  );
};
