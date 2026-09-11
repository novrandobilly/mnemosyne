import type { FC } from "react";
import { Link } from "react-router-dom";
import { SwitchButton } from "./features/switch";

interface TestItemProps {
  number: string;
  title: string;
  enabled: boolean;
  slug: string;
  onToggle: () => void;
  fullyDisabled?: boolean;
}

export const TestItem: FC<TestItemProps> = ({
  number,
  title,
  enabled,
  slug,
  onToggle,
  fullyDisabled = false,
}) => {
  const cleanSlug = slug.replace(/^\//, "");

  return (
    <div
      className={`flex items-center justify-between gap-3 px-4 py-2.5 transition-colors ${
        fullyDisabled
          ? "bg-neutral-50/70 opacity-50 cursor-not-allowed"
          : "hover:bg-emerald-50/20"
      }`}
    >
      {/* Left: Number + Title */}
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-bold text-neutral-600">
          {number}
        </span>
        <h3
          className="truncate text-sm font-semibold text-neutral-900"
          title={title}
        >
          {title}
        </h3>
      </div>

      {/* Right: Preview + Status Pill + Switch Toggle */}
      <div className="flex shrink-0 items-center gap-2">
        {fullyDisabled ? (
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-400">
            Unavailable
          </span>
        ) : (
          <>
            <Link
              to={`/psikotes/${cleanSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs font-medium text-neutral-600 shadow-xs transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              title={`Preview ${title} in a new tab`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Preview</span>
            </Link>

            <span
              className={`inline-flex min-w-13.5 items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold transition-colors ${
                enabled
                  ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border border-rose-200 bg-rose-50 text-rose-700"
              }`}
            >
              {enabled ? "Open" : "Closed"}
            </span>

            <SwitchButton enabled={enabled} onToggle={onToggle} />
          </>
        )}
      </div>
    </div>
  );
};

export default TestItem;
