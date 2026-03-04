import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useEas7Context } from "../../context/Eas7Context";

export const EAS7Premises = () => {
  const { currentGroup } = useEas7Context();

  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
      <IntiDinamisText
        size="12"
        weight="semibold"
        className="mb-3 uppercase tracking-[0.15em] text-neutral-400"
      >
        Pernyataan
      </IntiDinamisText>
      <ul className="flex flex-col gap-2">
        {currentGroup.premises.map((premise, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
            <IntiDinamisText
              size="14"
              className="leading-relaxed text-neutral-800"
            >
              {premise}
            </IntiDinamisText>
          </li>
        ))}
      </ul>
    </div>
  );
};
