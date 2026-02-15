import { Fragment, type FC, type ReactNode } from "react";
import PageTitle from "../../components/page-title";
import Logo from "./features/logo";
import AdminNavbar from "./features/navbar";
import SideButtons from "./features/side-buttons";

interface AdminWrapperProps {
  children: ReactNode;
  pageTitle?: string;
}

const AdminWrapper: FC<AdminWrapperProps> = ({
  children,
  pageTitle = "Admin",
}) => {
  return (
    <Fragment>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-[110px]" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-neutral-200/70 blur-[90px]" />
        <div className="absolute bottom-12 right-1/3 h-40 w-40 rounded-full bg-amber-100/70 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 pt-10 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo />
            <PageTitle text={pageTitle} />
            <SideButtons />
          </div>
          <AdminNavbar />
        </header>
        {children}
      </div>
    </Fragment>
  );
};
export default AdminWrapper;
