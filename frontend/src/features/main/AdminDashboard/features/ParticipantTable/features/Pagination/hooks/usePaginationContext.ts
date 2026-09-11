import { useContext } from "react";
import {
  PaginationContext,
  type PaginationContextValue,
} from "../context/PaginationContext";

export function usePaginationContext<T = unknown>(): PaginationContextValue<T> {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider",
    );
  }
  return context as PaginationContextValue<T>;
}

export default usePaginationContext;
