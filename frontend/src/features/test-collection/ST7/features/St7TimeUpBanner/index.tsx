import { useSt7Context } from "../../context/St7Context";
import { IntiDinamisText } from "@/components/IntiDinamisText";

export function St7TimeUpBanner() {
  const { isTimeUp } = useSt7Context();

  if (!isTimeUp) return null;

  return (
    <div className="rounded-2xl bg-red-500 px-4 py-3 text-center">
      <IntiDinamisText size="14" weight="semibold" className="text-white">
        Waktu habis! Jawaban Anda telah dikumpulkan secara otomatis.
      </IntiDinamisText>
    </div>
  );
}
