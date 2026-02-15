import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTProfile } from "../../tanstack/auth/profile";

export const AdminGuard = () => {
  const { data: profile, isPending } = useTProfile();

  const isAuthorized = (function () {
    if (!profile) return false;
    const role = profile?.role;
    return role === "admin" || role === "super_admin";
  })();

  const location = useLocation();

  if (isPending) return <div className="p-8 text-center">Loading...</div>;

  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to="/psikotes" state={{ from: location }} replace />
  );
};
