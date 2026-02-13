import type { FC, ReactNode } from "react";
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
  );
};
export default AdminWrapper;
