import { MainWrapper } from "@/components/MainWrapper";
import { Eas6Provider } from "../../context/Eas6Context";
import { EAS6Header } from "./features/EAS6Header";
import { EAS6TimeUpBanner } from "./features/EAS6TimeUpBanner";
import { EAS6QuestionList } from "./features/EAS6QuestionList";

const Eas6TestInner = () => {
  return (
    <MainWrapper pageTitle="EAS6">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <EAS6Header />
        <EAS6TimeUpBanner />
        <EAS6QuestionList />
      </div>
    </MainWrapper>
  );
};

export const Eas6Test = () => (
  <Eas6Provider>
    <Eas6TestInner />
  </Eas6Provider>
);
