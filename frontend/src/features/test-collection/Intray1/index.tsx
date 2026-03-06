import { MainWrapper } from "@/components/MainWrapper";
import { Intray1Provider } from "./context/Intray1Context";
import { useIntray1Context } from "./context/Intray1Context";
import { Intray1Header } from "./features/Intray1Header";
import { Intray1DocPanel } from "./features/Intray1DocPanel";
import { Intray1Workspace } from "./features/Intray1Workspace";

function Intray1Layout() {
  const { isDocPanelOpen } = useIntray1Context();
  return (
    <div className="flex items-start gap-4">
      {isDocPanelOpen && <Intray1DocPanel />}
      <Intray1Workspace />
    </div>
  );
}

export function Intray1Test() {
  return (
    <MainWrapper pageTitle="Intray-1">
      <Intray1Provider>
        <div className="flex flex-col gap-4">
          <Intray1Header />
          <Intray1Layout />
        </div>
      </Intray1Provider>
    </MainWrapper>
  );
}
