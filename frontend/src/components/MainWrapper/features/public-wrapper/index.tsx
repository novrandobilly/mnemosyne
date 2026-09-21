import { Fragment, type FC, type ReactNode } from "react";
import Logo from "./features/logo";
import PublicNavbar from "./features/navbar";

interface PublicWrapperProps {
  children: ReactNode;
  pageTitle?: string;
}

const PublicWrapper: FC<PublicWrapperProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-[110px]" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-neutral-200/70 blur-[90px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 pt-10 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <PublicNavbar />
        </header>
        {children}
      </div>
    </Fragment>
  );
};

export default PublicWrapper;
