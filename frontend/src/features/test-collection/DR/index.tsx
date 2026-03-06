import { MainWrapper } from "@/components/MainWrapper";
import { DrProvider } from "./context/DrContext";
import { DrHeader } from "./features/DrHeader";
import { DrTimeUpBanner } from "./features/DrTimeUpBanner";
import { DrList } from "./features/DrList";

export function DrTest() {
  return (
    <MainWrapper pageTitle="DR">
      <DrProvider>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <DrHeader />
          <DrTimeUpBanner />
          <DrList />
        </div>
      </DrProvider>
    </MainWrapper>
  );
}
