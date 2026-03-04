import { useA5Context } from "../../context/A5Context";
import { IntiDinamisText } from "@/components/IntiDinamisText";

export function A5TimeUpBanner() {
  const { isTimeUp } = useA5Context();

  if (!isTimeUp) return null;

  return (
    <div className="bg-red-500 px-4 py-2 text-center">
      <IntiDinamisText size="14" weight="semibold" className="text-white">
        Waktu habis! Jawaban Anda telah dikumpulkan secara otomatis.
      </IntiDinamisText>
    </div>
  );
}
