import IntiDinamisButton from "@/components/IntiDinamisButton";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { StatusCapsule } from "@/components/StatusCapsule";
import type { FC } from "react";

interface TestItemProps {
  title: string;
  tag: string;
  status: string;
  orderNum: number;
  onEnter: () => void;
}

export const TestItem: FC<TestItemProps> = ({
  title,
  tag,
  status,
  orderNum,
  onEnter,
}) => {
  return (
    <div className="w-full group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <StatusCapsule enabled={true} className="absolute right-3 top-3">
        {status}
      </StatusCapsule>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-base font-bold text-white">
        {orderNum}
      </div>

      <div className="mb-4">
        <IntiDinamisText
          as="h3"
          size="20"
          weight="semibold"
          className="mb-1.5 text-neutral-900"
        >
          {title}
        </IntiDinamisText>
        <IntiDinamisText
          as="span"
          size="12"
          weight="medium"
          className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-neutral-600"
        >
          {tag}
        </IntiDinamisText>
      </div>

      <IntiDinamisButton
        variant="secondary"
        className="w-full"
        onClick={onEnter}
      >
        Enter Test →
      </IntiDinamisButton>
    </div>
  );
};
