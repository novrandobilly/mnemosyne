import { type RouteObject } from "react-router-dom";
import AssessmentPanel from "../../features/AssessmentPanel";
import AdminDashboard from "../../features/AdminDashboard";
import ParticipantGenerator from "../../features/ParticipantGenerator";
import ParticipantDetails from "../../features/ParticipantDetails";

export const adminRoutes: RouteObject[] = [
  {
    path: "admin",
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "participant-details",
        element: <ParticipantDetails />,
      },
      {
        path: "panel",
        element: <AssessmentPanel />,
      },
      {
        path: "id-generator",
        element: <ParticipantGenerator />,
      },
    ],
  },
];
