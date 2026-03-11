/**
 * Captures the first SVG inside `wrapper` as a JPEG data URL.
 *
 * Why not html-to-image?
 * html-to-image wraps the target in a <foreignObject> which breaks SVG-internal
 * href references (textPath) and drops Tailwind CSS class styles. Instead we:
 *   1. Clone the live SVG and inline all relevant computed styles as explicit
 *      style properties so the serialized SVG is fully self-contained.
 *   2. Serialize with XMLSerializer → Blob URL.
 *   3. Draw onto a canvas (2× for retina) with a white background fill.
 *   4. Export as JPEG.
 */
export const captureSvgAsJpeg = (wrapper: HTMLElement): Promise<string> => {
  const svgEl = wrapper.querySelector("svg");
  if (!svgEl) return Promise.reject(new Error("SVG element not found"));

  const clone = svgEl.cloneNode(true) as SVGSVGElement;

  const rect = svgEl.getBoundingClientRect();
  const W = Math.round(rect.width) || 512;
  const H = Math.round(rect.height) || 512;
  clone.setAttribute("width", String(W));
  clone.setAttribute("height", String(H));

  const PROPS = [
    "fill",
    "stroke",
    "stroke-width",
    "font-size",
    "font-weight",
    "font-family",
    "text-anchor",
    "dominant-baseline",
    "letter-spacing",
    "text-transform",
    "filter",
  ];

  const liveEls = Array.from(svgEl.querySelectorAll<Element>("*"));
  const cloneEls = Array.from(clone.querySelectorAll<Element>("*"));
  liveEls.forEach((live, i) => {
    const cl = cloneEls[i] as HTMLElement;
    if (!cl?.style) return;
    const cs = getComputedStyle(live);
    PROPS.forEach((p) => {
      const v = cs.getPropertyValue(p);
      if (v) cl.style.setProperty(p, v);
    });
  });

  const svgStr = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = 2;
      const canvas = document.createElement("canvas");
      canvas.width = W * scale;
      canvas.height = H * scale;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.95));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("SVG image load failed"));
    };
    img.src = url;
  });
};
