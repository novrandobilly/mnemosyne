import type { FC } from "react";
import { useTProfile } from "@/api/auth/profile";
import { AdminProfileCard } from "./features/AdminProfileCard";
import { ParticipantProfileCard } from "./features/ParticipantProfileCard";

export { UserProfileCard } from "./features/UserProfileCard";
export { AdminProfileCard } from "./features/AdminProfileCard";
export { ParticipantProfileCard } from "./features/ParticipantProfileCard";

export const UserProfile: FC = () => {
  const { data: profile } = useTProfile();
  const isAdmin = profile?.role === "admin" || profile?.role === "super_admin";

  if (isAdmin) {
    return <AdminProfileCard />;
  }

  return <ParticipantProfileCard />;
};

export default UserProfile;
