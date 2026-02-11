import { type RouteObject } from "react-router-dom";
import AssessmentLobby from "../../features/AssessmentLobby";

export const participantRoutes: RouteObject[] = [
  {
    path: "psikotes",
    children: [
      {
        index: true,
        element: <AssessmentLobby />,
      },
    ],
  },
];
