import { IntiDinamisText } from "@/components/IntiDinamisText";

export const TestListHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <IntiDinamisText className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Test Visibility Control
      </IntiDinamisText>
      <IntiDinamisText
        as="h2"
        className="text-2xl font-semibold text-neutral-900"
      >
        Manage participant access
      </IntiDinamisText>
      <IntiDinamisText className="text-sm text-neutral-600">
        Toggle tests on or off to control which assessments are visible to
        participants in the lobby.
      </IntiDinamisText>
    </div>
  );
};
