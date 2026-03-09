import { Navigate } from "react-router-dom";
import { useTProfile } from "../../tanstack/auth/profile";

export const RootRedirect = () => {
  const { data: profile, isPending } = useTProfile();

  if (isPending) return <div className="p-8 text-center">Loading...</div>;

  if (!profile) return <Navigate to="/login" replace />;

  if (profile.role === "admin" || profile.role === "super_admin") {
    return <Navigate to="/admin" replace />;
  }

  if (profile.role === "participant" && !profile.is_onboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Navigate to="/psikotes" replace />;
};
