import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTProfile } from "../../tanstack/auth/profile";

export const AuthGuard = () => {
  const { data, isPending } = useTProfile();
  const isAuthenticated = Boolean(data);
  const location = useLocation();

  if (isPending) return <div className="p-8 text-center">Loading...</div>;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
