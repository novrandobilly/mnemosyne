import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";
import AssessmentLobby from "../../features/main/AssessmentLobby";

const PapiKostickTest = lazy(() =>
  import("@/features/test-collection/PapiKostick").then((m) => ({
    default: m.PapiKostickTest,
  })),
);
const DiscTest = lazy(() =>
  import("@/features/test-collection/DISC").then((m) => ({
    default: m.DiscTest,
  })),
);
const Eas5Test = lazy(() =>
  import("@/features/test-collection/EAS5/pages/eas5-test").then((m) => ({
    default: m.Eas5Test,
  })),
);
const Eas5Introduction = lazy(() =>
  import("@/features/test-collection/EAS5/pages/eas5-introduction").then(
    (m) => ({ default: m.Eas5Introduction }),
  ),
);
const Eas4Test = lazy(() =>
  import("@/features/test-collection/EAS4/pages/eas4-test").then((m) => ({
    default: m.Eas4Test,
  })),
);
const Eas4Introduction = lazy(() =>
  import("@/features/test-collection/EAS4/pages/eas4-introduction").then(
    (m) => ({ default: m.Eas4Introduction }),
  ),
);
const Eas6Test = lazy(() =>
  import("@/features/test-collection/EAS6/pages/eas6-test").then((m) => ({
    default: m.Eas6Test,
  })),
);
const Eas6Introduction = lazy(() =>
  import("@/features/test-collection/EAS6/pages/eas6-introduction").then(
    (m) => ({ default: m.Eas6Introduction }),
  ),
);
const Eas7Test = lazy(() =>
  import("@/features/test-collection/EAS7/pages/eas7-test").then((m) => ({
    default: m.Eas7Test,
  })),
);
const Eas7Introduction = lazy(() =>
  import("@/features/test-collection/EAS7/pages/eas7-introduction").then(
    (m) => ({ default: m.Eas7Introduction }),
  ),
);
const Eas10Test = lazy(() =>
  import("@/features/test-collection/EAS10/pages/eas10-test").then((m) => ({
    default: m.Eas10Test,
  })),
);
const Eas10Introduction = lazy(() =>
  import("@/features/test-collection/EAS10/pages/eas10-introduction").then(
    (m) => ({ default: m.Eas10Introduction }),
  ),
);
const A5Test = lazy(() =>
  import("@/features/test-collection/A5").then((m) => ({ default: m.A5Test })),
);
const A5Introduction = lazy(() =>
  import("@/features/test-collection/A5").then((m) => ({
    default: m.A5Introduction,
  })),
);
const DrTest = lazy(() =>
  import("@/features/test-collection/DR/pages/dr-test").then((m) => ({
    default: m.DrTest,
  })),
);
const DrIntroduction = lazy(() =>
  import("@/features/test-collection/DR/pages/dr-introduction").then((m) => ({
    default: m.DrIntroduction,
  })),
);
const Da5Test = lazy(() =>
  import("@/features/test-collection/DA5/pages/da5-test").then((m) => ({
    default: m.Da5Test,
  })),
);
const Da5Introduction = lazy(() =>
  import("@/features/test-collection/DA5/pages/da5-introduction").then((m) => ({
    default: m.Da5Introduction,
  })),
);
const St7Test = lazy(() =>
  import("@/features/test-collection/ST7/pages/st7-test").then((m) => ({
    default: m.St7Test,
  })),
);
const St7Introduction = lazy(() =>
  import("@/features/test-collection/ST7/pages/st7-introduction").then((m) => ({
    default: m.St7Introduction,
  })),
);
const Intray1Test = lazy(() =>
  import("@/features/test-collection/Intray1").then((m) => ({
    default: m.Intray1Test,
  })),
);
const Intray2Test = lazy(() =>
  import("@/features/test-collection/Intray2").then((m) => ({
    default: m.Intray2Test,
  })),
);

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
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <Eas10Introduction />,
          },
          {
            path: "test-start",
            element: <Eas10Test />,
          },
        ],
      },
      {
        path: "a5",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <A5Introduction />,
          },
          {
            path: "test-start",
            element: <A5Test />,
          },
        ],
      },
      {
        path: "dr",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <DrIntroduction />,
          },
          {
            path: "test-start",
            element: <DrTest />,
          },
        ],
      },
      {
        path: "da5",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <Da5Introduction />,
          },
          {
            path: "test-start",
            element: <Da5Test />,
          },
        ],
      },
      {
        path: "st7",
        children: [
          {
            index: true,
            element: <Navigate to="introduction" replace />,
          },
          {
            path: "introduction",
            element: <St7Introduction />,
          },
          {
            path: "test-start",
            element: <St7Test />,
          },
        ],
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
