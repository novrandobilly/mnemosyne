import { useRoutes, type RouteObject } from "react-router-dom";
import Login from "../features/main/Login";
import { participantRoutes } from "./participant";
import { adminRoutes } from "./admin";
import { AuthGuard } from "./guard/auth-guard";
import { AdminGuard } from "./guard/admin-guard";
import { RootRedirect } from "./guard/root-redirect";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <AuthGuard />,
    children: [
      ...participantRoutes,
      {
        element: <AdminGuard />,
        children: [...adminRoutes],
      },
    ],
  },
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
