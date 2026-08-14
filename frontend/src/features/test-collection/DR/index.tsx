import { MainWrapper } from "@/components/MainWrapper";
import { DrProvider } from "./context/DrContext";
import { DrHeader } from "./pages/dr-test/features/DrHeader";
import { DrTimeUpBanner } from "./pages/dr-test/features/DrTimeUpBanner";
import { DrList } from "./pages/dr-test/features/DrList";

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
