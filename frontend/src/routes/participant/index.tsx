import { Navigate, type RouteObject } from "react-router-dom";
import AssessmentLobby from "../../features/main/AssessmentLobby";
import { PapiKostickTest } from "@/features/test-collection/PapiKostick";
import { DiscTest } from "@/features/test-collection/DISC";
import { Eas5Test } from "@/features/test-collection/EAS5/pages/eas5-test";
import { Eas5Introduction } from "@/features/test-collection/EAS5/pages/eas5-introduction";
import { Eas4Test } from "@/features/test-collection/EAS4/pages/eas4-test";
import { Eas4Introduction } from "@/features/test-collection/EAS4/pages/eas4-introduction";
import { Eas6Test } from "@/features/test-collection/EAS6/pages/eas6-test";
import { Eas6Introduction } from "@/features/test-collection/EAS6/pages/eas6-introduction";
import { Eas7Test } from "@/features/test-collection/EAS7/pages/eas7-test";
import { Eas7Introduction } from "@/features/test-collection/EAS7/pages/eas7-introduction";
import { Eas10Test } from "@/features/test-collection/EAS10";
import { A5Test } from "@/features/test-collection/A5";
import { DrTest } from "@/features/test-collection/DR";
import { Da5Test } from "@/features/test-collection/DA5";
import { St17Test } from "@/features/test-collection/ST17";
import { Intray1Test } from "@/features/test-collection/Intray1";
import { Intray2Test } from "@/features/test-collection/Intray2";

export const participantRoutes: RouteObject[] = [
  {
    path: "psikotes",
    children: [
      {
        index: true,
        element: <AssessmentLobby />,
      },
      {
        path: "papikostick",
        element: <PapiKostickTest />,
      },
      {
        path: "disc",
        element: <DiscTest />,
      },
      {
        path: "eas4",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <Eas4Introduction />,
          },
          {
            path: "test-start",
            element: <Eas4Test />,
          },
        ],
      },
      {
        path: "eas5",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <Eas5Introduction />,
          },
          {
            path: "test-start",
            element: <Eas5Test />,
          },
        ],
      },
      {
        path: "eas6",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <Eas6Introduction />,
          },
          {
            path: "test-start",
            element: <Eas6Test />,
          },
        ],
      },
      {
        path: "eas7",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <Eas7Introduction />,
          },
          {
            path: "test-start",
            element: <Eas7Test />,
          },
        ],
      },
      {
        path: "eas10",
        element: <Eas10Test />,
      },
      {
        path: "a5",
        element: <A5Test />,
      },
      {
        path: "dr",
        element: <DrTest />,
      },
      {
        path: "da5",
        element: <Da5Test />,
      },
      {
        path: "st17",
        element: <St17Test />,
      },
      {
        path: "intray1",
        element: <Intray1Test />,
      },
      {
        path: "intray2",
        element: <Intray2Test />,
      },
    ],
  },
];
