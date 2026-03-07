import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface ScoringListContextValue {
  showAll: boolean;
  setShowAll: (value: boolean) => void;
}

const ScoringListContext = createContext<ScoringListContextValue | null>(null);

export const ScoringListProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <ScoringListContext.Provider value={{ showAll, setShowAll }}>
      {children}
    </ScoringListContext.Provider>
  );
};

export const useScoringList = (): ScoringListContextValue => {
  const ctx = useContext(ScoringListContext);
  if (!ctx)
    throw new Error("useScoringList must be used within ScoringListProvider");
  return ctx;
};
