import { MainWrapper } from "@/components/MainWrapper";
import { Da5Provider } from "./context/Da5Context";
import { Da5Header } from "./features/Da5Header";
import { Da5TimeUpBanner } from "./features/Da5TimeUpBanner";
import { Da5QuestionView } from "./features/Da5QuestionView";
import { Da5RulesDrawer } from "./features/Da5RulesDrawer";

export function Da5Test() {
  return (
    <MainWrapper pageTitle="DA5">
      <Da5Provider>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <Da5Header />
          <Da5TimeUpBanner />
          <Da5QuestionView />
          <Da5RulesDrawer />
        </div>
      </Da5Provider>
    </MainWrapper>
  );
}
