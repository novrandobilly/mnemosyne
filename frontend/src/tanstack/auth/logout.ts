import { useNavigate } from "react-router-dom"; // or your preferred router
import { useQueryClient } from "@tanstack/react-query";
import { pb } from "../../lib/pocketbase";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    // 1. Clear the PocketBase AuthStore (removes token from localStorage)
    pb.authStore.clear();

    // 2. Clear ALL TanStack Query caches
    // This is crucial so the 'current-user' query doesn't persist
    queryClient.clear();

    // 3. Redirect to login or home
    navigate("/login");

    // Optional: Refresh the page if you want a complete state hard-reset
    // window.location.reload();
  };

  return logout;
}
