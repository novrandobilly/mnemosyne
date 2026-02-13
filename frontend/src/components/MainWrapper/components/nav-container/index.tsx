import type { FC, ReactNode } from "react";

const NavigationContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <nav className="order-3 flex flex-wrap items-center gap-2 text-xs md:order-0">
      <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
        {children}
      </div>
    </nav>
  );
};
export default NavigationContainer;
