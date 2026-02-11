import { type RouteObject } from "react-router-dom";
import AssessmentPanel from "../../features/AssessmentPanel";
import AdminDashboard from "../../features/AdminDashboard";

export const adminRoutes: RouteObject[] = [
  {
    path: "admin",
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "panel",
        element: <AssessmentPanel />,
      },
    ],
  },
];
