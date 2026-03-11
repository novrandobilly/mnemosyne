import { useEffect, useRef, useState, createElement } from "react";
import { createPortal } from "react-dom";
import type { PapiResults } from "@/features/main/PKResult/types";
import PapiWheel from "@/assets/PapiWheel";
import { captureSvgAsJpeg } from "../utils/captureSvgAsJpeg";

interface UsePapiWheelCaptureResult {
  wheelImageUrl: string | undefined;
  isCapturing: boolean;
  /** Mount this portal in your component's render output */
  portal: React.ReactPortal | null;
}

/**
 * Renders PapiWheel invisibly in the DOM, captures it as a JPEG, then cleans up.
 * Only runs the capture when `scores` is defined and `enabled` is true.
 */
export const usePapiWheelCapture = (
  scores: PapiResults | undefined,
  enabled = true,
): UsePapiWheelCaptureResult => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [wheelImageUrl, setWheelImageUrl] = useState<string | undefined>();
  const [isCapturing, setIsCapturing] = useState(false);
  const [portal, setPortal] = useState<React.ReactPortal | null>(null);

  useEffect(() => {
    if (!scores || !enabled) return;

    // Create a fixed, invisible container mounted directly on document.body
    const container = document.createElement("div");
    container.style.cssText =
      "position:fixed;left:0;top:0;width:512px;height:512px;opacity:0;pointer-events:none;z-index:-1;";
    document.body.appendChild(container);
    containerRef.current = container;

    setIsCapturing(true);

    // Render PapiWheel into the container
    const wheelEl = createElement(PapiWheel, { data: scores });
    setPortal(createPortal(wheelEl, container));

    // Give the browser a paint cycle to fully render the SVG before capturing
    const timer = setTimeout(() => {
      captureSvgAsJpeg(container)
        .then((dataUrl: string) => setWheelImageUrl(dataUrl))
        .catch((err: unknown) =>
          console.error("PapiWheel capture failed:", err),
        )
        .finally(() => {
          setIsCapturing(false);
          setPortal(null);
          document.body.removeChild(container);
          containerRef.current = null;
        });
    }, 300);

    return () => {
      clearTimeout(timer);
      setPortal(null);
      if (
        containerRef.current &&
        document.body.contains(containerRef.current)
      ) {
        document.body.removeChild(containerRef.current);
        containerRef.current = null;
      }
    };
  }, [scores, enabled]);

  return { wheelImageUrl, isCapturing, portal };
};
