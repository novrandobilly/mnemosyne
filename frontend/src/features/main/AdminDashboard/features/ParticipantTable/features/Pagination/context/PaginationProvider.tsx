import {
  useState,
  useMemo,
  type ReactNode,
} from "react";
import { PaginationContext, type PaginationContextValue } from "./PaginationContext";

export interface PaginationProviderProps<T = unknown> {
  items?: T[];
  totalItems?: number;
  initialPage?: number;
  initialPageSize?: number;
  pageSizeOptions?: number[];
  itemLabel?: string;
  children: ReactNode;
}

export function PaginationProvider<T = unknown>({
  items = [],
  totalItems: customTotalItems,
  initialPage = 1,
  initialPageSize = 10,
  pageSizeOptions = [5, 10, 20],
  itemLabel = "participants",
  children,
}: PaginationProviderProps<T>) {
  const [page, setPage] = useState<number>(initialPage);
  const [pageSize, setPageSizeState] = useState<number>(initialPageSize);

  const total = customTotalItems !== undefined ? customTotalItems : items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safeCurrentPage = Math.min(page, totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);

  const paginatedItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);

  const setPageSize = (size: number) => {
    setPageSizeState(size);
    setPage(1);
  };

  const firstPage = () => setPage(1);
  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));
  const lastPage = () => setPage(totalPages);

  const canPrevPage = safeCurrentPage > 1;
  const canNextPage = safeCurrentPage < totalPages;

  const value: PaginationContextValue<T> = {
    page: safeCurrentPage,
    pageSize,
    pageSizeOptions,
    totalItems: total,
    totalPages,
    safeCurrentPage,
    startIndex,
    endIndex,
    paginatedItems,
    itemLabel,
    setPage,
    setPageSize,
    firstPage,
    prevPage,
    nextPage,
    lastPage,
    canPrevPage,
    canNextPage,
  };

  return (
    <PaginationContext.Provider value={value as PaginationContextValue<unknown>}>
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationProvider;
