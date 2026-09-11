import { createContext } from "react";

export interface PaginationContextValue<T = unknown> {
  page: number;
  pageSize: number;
  pageSizeOptions: number[];
  totalItems: number;
  totalPages: number;
  safeCurrentPage: number;
  startIndex: number;
  endIndex: number;
  paginatedItems: T[];
  itemLabel: string;
  setPage: (page: number | ((prev: number) => number)) => void;
  setPageSize: (size: number) => void;
  firstPage: () => void;
  prevPage: () => void;
  nextPage: () => void;
  lastPage: () => void;
  canPrevPage: boolean;
  canNextPage: boolean;
}

export const PaginationContext = createContext<PaginationContextValue<unknown> | null>(null);
