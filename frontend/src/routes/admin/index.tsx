import { type RouteObject } from "react-router-dom";
import AdminDashboard from "../../features/AdminDashboard";
import AssessmentPanel from "../../features/AssessmentPanel";
import ParticipantDetails from "../../features/ParticipantDetails";
import PKResult from "../../features/PKResult";
import DISCResult from "../../features/DISCResult";
import Intray1Result from "../../features/Intray1Result";
import Intray2Result from "../../features/Intray2Result";
import ParticipantGenerator from "../../features/ParticipantGenerator";

export const adminRoutes: RouteObject[] = [
  {
    path: "admin",
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "participants/:id",
        element: <ParticipantDetails />,
      },
      {
        path: "participants/:id/results/pk",
        element: <PKResult />,
      },
      {
        path: "participants/:id/results/disc",
        element: <DISCResult />,
      },
      {
        path: "participants/:id/results/intray1",
        element: <Intray1Result />,
      },
      {
        path: "participants/:id/results/intray2",
        element: <Intray2Result />,
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
