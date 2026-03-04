import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useEas6Context } from "../../context/Eas6Context";

export const EAS6TimeUpBanner = () => {
  const { isTimeUp } = useEas6Context();

  if (!isTimeUp) return null;

  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-center">
      <IntiDinamisText size="16" weight="semibold" className="text-red-600">
        Waktu habis! Jawaban telah dicatat.
      </IntiDinamisText>
    </div>
  );
};
