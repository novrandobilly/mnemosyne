import { useEffect, useRef, useState, createElement } from "react";
import { createPortal } from "react-dom";
import type { DiscScores } from "@/features/main/DISCResult/types";
import DiscMostGraph from "@/features/main/DISCResult/features/MostTable";
import DiscLeastGraph from "@/features/main/DISCResult/features/LeastTable";
import DiscChangeGraph from "@/features/main/DISCResult/features/ChangeTable";
import { captureSvgAsJpeg } from "../utils/captureSvgAsJpeg";
import type { DiscGraphUrls } from "../types";

type GraphScores = { d: number; i: number; s: number; c: number };

interface UseDiscGraphsCaptureResult {
  graphUrls: DiscGraphUrls;
  isCapturing: boolean;
  /** Render this in your component's JSX — required for the portals to mount */
  portals: React.ReactPortal[];
}

const CONTAINER_STYLE =
  "position:fixed;left:0;top:0;width:400px;height:750px;opacity:0;pointer-events:none;z-index:-1;";

const toGraphScores = (row: DiscScores["MOST"]): GraphScores => ({
  d: row.D,
  i: row.I,
  s: row.S,
  c: row.C,
});

export const useDiscGraphsCapture = (
  scores: DiscScores | undefined,
  enabled = true,
): UseDiscGraphsCaptureResult => {
  const containersRef = useRef<HTMLDivElement[]>([]);
  const scoresRef = useRef(scores);
  scoresRef.current = scores;

  const [graphUrls, setGraphUrls] = useState<DiscGraphUrls>({
    most: undefined,
    least: undefined,
    change: undefined,
  });
  const [isCapturing, setIsCapturing] = useState(false);
  const [portals, setPortals] = useState<React.ReactPortal[]>([]);

  // A stable string key — only changes when actual values change
  const scoresKey = enabled && scores
    ? [
        scores.MOST.D,
        scores.MOST.I,
        scores.MOST.S,
        scores.MOST.C,
        scores.LEAST.D,
        scores.LEAST.I,
        scores.LEAST.S,
        scores.LEAST.C,
        scores.CHANGE.D,
        scores.CHANGE.I,
        scores.CHANGE.S,
        scores.CHANGE.C,
      ].join(",")
    : null;

  useEffect(() => {
    if (!scoresKey || !scoresRef.current) {
      setGraphUrls({ most: undefined, least: undefined, change: undefined });
      setIsCapturing(false);
      setPortals([]);
      return;
    }

    const currentScores = scoresRef.current;

    const configs: Array<{
      Component: React.ComponentType<{ scores: GraphScores }>;
      graphScores: GraphScores;
    }> = [
      { Component: DiscMostGraph, graphScores: toGraphScores(currentScores.MOST) },
      { Component: DiscLeastGraph, graphScores: toGraphScores(currentScores.LEAST) },
      { Component: DiscChangeGraph, graphScores: toGraphScores(currentScores.CHANGE) },
    ];

    const containers = configs.map(() => {
      const container = document.createElement("div");
      container.style.cssText = CONTAINER_STYLE;
      document.body.appendChild(container);
      return container;
    });
    containersRef.current = containers;

    setIsCapturing(true);
    setPortals(
      configs.map(({ Component, graphScores }, i) =>
        createPortal(
          createElement(Component, { scores: graphScores }),
          containers[i],
        ),
      ),
    );

    const cleanup = () => {
      containers.forEach((c) => {
        if (c.parentNode) c.parentNode.removeChild(c);
      });
      containersRef.current = [];
    };

    const timer = setTimeout(() => {
      Promise.all(containers.map((c) => captureSvgAsJpeg(c)))
        .then(([most, least, change]) => setGraphUrls({ most, least, change }))
        .catch((err: unknown) =>
          console.error("DISC graph capture failed:", err),
        )
        .finally(() => {
          setIsCapturing(false);
          setPortals([]);
          cleanup();
        });
    }, 300);

    return () => {
      clearTimeout(timer);
      setPortals([]);
      cleanup();
    };
  }, [scoresKey]);

  return { graphUrls, isCapturing, portals };
};
