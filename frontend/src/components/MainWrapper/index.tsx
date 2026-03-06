import type { FC, ReactNode } from "react";
import { useTProfile } from "@/tanstack/auth/profile";
import AdminWrapper from "./features/admin-wrapper";
import ParticipantWrapper from "./features/participant-wrapper";
import PublicWrapper from "./features/public-wrapper";

interface MainWrapperProps {
  children: ReactNode;
  pageTitle?: string;
}

export const MainWrapper: FC<MainWrapperProps> = ({ children, pageTitle }) => {
  const { data: profile, isLoading } = useTProfile();

  if (isLoading) return null;

  if (profile?.role === "admin" || profile?.role === "super_admin") {
    return <AdminWrapper pageTitle={pageTitle}>{children}</AdminWrapper>;
  }

  if (profile?.role === "participant") {
    return (
      <ParticipantWrapper pageTitle={pageTitle}>{children}</ParticipantWrapper>
    );
  }

  return <PublicWrapper pageTitle={pageTitle}>{children}</PublicWrapper>;
};
