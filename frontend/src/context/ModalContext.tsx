import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface ModalOptions {
  content: ReactNode;
}

interface ModalContextType {
  showModal: (options: ModalOptions) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const TRANSITION_MS = 200;

  const closeModal = useCallback(() => {
    setIsLeaving(true);
    setIsVisible(false);
    setTimeout(() => {
      setContent(null);
      setIsLeaving(false);
    }, TRANSITION_MS);
  }, []);

  const showModal = useCallback(({ content }: ModalOptions) => {
    setContent(content);
    setIsLeaving(false);
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!content) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [content, closeModal]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = content ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [content]);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}

      {content && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all ease-out
            ${isVisible && !isLeaving ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDuration: `${TRANSITION_MS}ms` }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal card */}
          <div
            className={`relative z-10 w-full max-w-lg transition-all ease-out
              ${isVisible && !isLeaving ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 rounded-lg border border-neutral-200 bg-white p-1.5 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close modal"
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

            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};
