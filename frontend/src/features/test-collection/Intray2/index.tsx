import AdminWrapper from "@/components/MainWrapper/features/admin-wrapper";
import { Intray2Provider } from "./context/Intray2Context";
import { useIntray2Context } from "./context/Intray2Context";
import { Intray2Header } from "./features/Intray2Header";
import { Intray2DocPanel } from "./features/Intray2DocPanel";
import { Intray2Workspace } from "./features/Intray2Workspace";

function Intray2Layout() {
  const { isDocPanelOpen } = useIntray2Context();
  return (
    <div className="flex items-start gap-4">
      {isDocPanelOpen && <Intray2DocPanel />}
      <Intray2Workspace />
    </div>
  );
}

export function Intray2Test() {
  return (
    <AdminWrapper pageTitle="Intray-2">
      <Intray2Provider>
        <div className="flex flex-col gap-4">
          <Intray2Header />
          <Intray2Layout />
        </div>
      </Intray2Provider>
    </AdminWrapper>
  );
}
