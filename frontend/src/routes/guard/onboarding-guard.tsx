import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTProfile } from "../../tanstack/auth/profile";

/**
 * Intercepts authenticated participants who have not yet completed onboarding.
 * Any access to guarded routes (e.g. /psikotes) is blocked and redirected to
 * /onboarding until is_onboarded is true.
 * Admins are not affected by this guard.
 */
export const OnboardingGuard = () => {
  const { data: profile, isPending } = useTProfile();
  const location = useLocation();

  if (isPending) return <div className="p-8 text-center">Loading…</div>;

  const isParticipant = profile?.role === "participant";
  const needsOnboarding = isParticipant && profile?.is_onboarded === false;

  return needsOnboarding ? (
    <Navigate to="/onboarding" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
