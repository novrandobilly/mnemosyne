import { useDa5Context } from "../../context/Da5Context";
import { IntiDinamisText } from "@/components/IntiDinamisText";

export function Da5TimeUpBanner() {
  const { isTimeUp } = useDa5Context();

  if (!isTimeUp) return null;

  return (
    <div className="rounded-2xl bg-red-500 px-4 py-3 text-center">
      <IntiDinamisText size="14" weight="semibold" className="text-white">
        Waktu habis! Jawaban Anda telah dikumpulkan secara otomatis.
      </IntiDinamisText>
    </div>
  );
}
