import { useEas7Context } from "../../context/Eas7Context";
import { EAS7QuestionRow } from "../EAS7QuestionRow";

export const EAS7QuestionList = () => {
  const { currentGroup, answers, selectAnswer } = useEas7Context();

  return (
    <div className="flex flex-col gap-2">
      {currentGroup.questions.map((q) => (
        <EAS7QuestionRow
          key={q.id}
          questionId={q.id}
          statement={q.statement}
          selectedAnswer={answers[q.id]}
          onSelectAnswer={selectAnswer}
        />
      ))}
    </div>
  );
};
