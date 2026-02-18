import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  isVisible: boolean;
  isLeaving: boolean;
}

interface ToastContextType {
  showToast: (options: { message: string; type?: ToastType }) => void;
  showGeneralErrorToast: () => void;
}

interface ToastProviderProps {
  children: ReactNode;
  slideDurationMs?: number;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<ToastProviderProps> = ({
  children,
  slideDurationMs = 300,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const EXIT_DURATION_MS = Math.max(0, slideDurationMs);
  const AUTO_REMOVE_MS = 4000;

  const removeToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isLeaving: true, isVisible: false } : t,
      ),
    );

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, EXIT_DURATION_MS);
  }, []);

  const showToast = useCallback(
    ({ message, type = "success" }: { message: string; type?: ToastType }) => {
      // 1. Generate a unique ID for React diffing and removal
      const id = crypto.randomUUID();

      setToasts((prev) => [
        ...prev,
        { id, message, type, isVisible: false, isLeaving: false },
      ]);

      requestAnimationFrame(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, isVisible: true } : t)),
        );
      });

      // 2. Auto-remove after 3.5 seconds
      setTimeout(() => {
        removeToast(id);
      }, AUTO_REMOVE_MS);
    },
    [removeToast],
  );

  const showGeneralErrorToast = useCallback(() => {
    showToast({
      message: "An unexpected error occurred. Please try again.",
      type: "error",
    });
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, showGeneralErrorToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-9999 flex flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`
              flex items-center justify-between gap-4 
              min-w-70 px-4 py-3 rounded-xl shadow-2xl text-white 
              backdrop-blur-md transition-all ease-out border border-white/10
              ${t.isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
              ${
                t.type === "success"
                  ? "bg-emerald-600/90"
                  : t.type === "error"
                    ? "bg-rose-600/90"
                    : "bg-sky-600/90"
              }
            `}
            style={{ transitionDuration: `${slideDurationMs}ms` }}
          >
            <p className="text-sm font-medium">{t.message}</p>

            <button
              onClick={() => {
                if (!t.isLeaving) removeToast(t.id);
              }}
              className="hover:bg-white/20 p-1 rounded-md transition-colors"
              aria-label="Close notification"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};
