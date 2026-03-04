import { IntiDinamisText } from "@/components/IntiDinamisText";

export const EAS4ColumnHeaders = () => (
  <div className="mb-1 flex w-full items-center gap-x-3 px-3 max-w-sm">
    <div className="w-8 shrink-0" />
    <IntiDinamisText
      size="10"
      className="flex-1 uppercase tracking-[0.12em] text-neutral-400"
    >
      Kiri
    </IntiDinamisText>
    <IntiDinamisText
      size="10"
      className="flex-1 uppercase tracking-[0.12em] text-neutral-400"
    >
      Kanan
    </IntiDinamisText>
    <div className="w-15 shrink-0" />
  </div>
);
