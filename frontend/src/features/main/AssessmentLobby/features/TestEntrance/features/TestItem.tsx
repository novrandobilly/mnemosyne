import { Link } from "react-router-dom";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { StatusCapsule } from "@/components/StatusCapsule";
import type { FC } from "react";

interface TestItemProps {
  title: string;
  tag: string;
  status: string;
  orderNum: number;
  to: string;
  isCompleted?: boolean;
}

export const TestItem: FC<TestItemProps> = ({
  title,
  tag,
  status,
  orderNum,
  to,
  isCompleted = false,
}) => {
  return (
    <div className="w-full group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <StatusCapsule enabled={!isCompleted} className="absolute right-3 top-3">
        {isCompleted ? "Selesai" : status}
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

      {isCompleted ? (
        <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50/50 py-3 border border-green-100 text-green-700">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          <IntiDinamisText size="12" weight="semibold" className="text-green-700">
            Sudah dikerjakan
          </IntiDinamisText>
        </div>
      ) : (
        <Link
          to={to}
          className="relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none active:scale-[0.98] cursor-pointer min-w-[100px] rounded-[8px] px-4 py-2.5 bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-900/10 w-full"
        >
          <span className="flex items-center justify-center gap-2 w-full">
            <IntiDinamisText size="14" weight="semibold">
              Masuk Tes →
            </IntiDinamisText>
          </span>
        </Link>
      )}
    </div>
  );
};

