import { eas6Data } from "@/data/eas6";
import { EAS6Card } from "../EAS6Card";

export const EAS6QuestionList = () => {
  return (
    <div className="flex flex-col gap-4">
      {eas6Data.map((item) => (
        <EAS6Card
          key={item.id}
          id={item.id}
          question={item.question}
          options={item.options}
        />
      ))}
    </div>
  );
};
