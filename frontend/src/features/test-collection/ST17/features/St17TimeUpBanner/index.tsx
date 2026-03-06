import { useSt17Context } from "../../context/St17Context";
import { IntiDinamisText } from "@/components/IntiDinamisText";

export function St17TimeUpBanner() {
  const { isTimeUp } = useSt17Context();

  if (!isTimeUp) return null;

  return (
    <div className="rounded-2xl bg-red-500 px-4 py-3 text-center">
      <IntiDinamisText size="14" weight="semibold" className="text-white">
        Waktu habis! Jawaban Anda telah dikumpulkan secara otomatis.
      </IntiDinamisText>
    </div>
  );
}
