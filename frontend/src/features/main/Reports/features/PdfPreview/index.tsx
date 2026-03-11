import { useEffect, useRef, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { ReportDocument } from "../../pdf/ReportDocument";
import { DUMMY_PK_DATA } from "@/features/main/PKResult/constants";
import PapiWheel from "@/assets/PapiWheel";
import type { ReportParticipant } from "../../types";
import type { TestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";

const DUMMY_RESULTS: TestResult[] = [
  {
    collectionId: "",
    collectionName: "",
    created: "",
    id: "preview-papi",
    participant: "preview",
    status: "completed",
    test_type: "papikostick",
    updated: "",
    data: { processed_scores: DUMMY_PK_DATA.results },
  },
];

const DUMMY_PARTICIPANT: ReportParticipant = {
  id: "preview",
  avatar: "",
  collectionId: "",
  collectionName: "",
  company: "PT. Mnemosyne Indonesia",
  created: "",
  department: "Engineering",
  email: "budi@example.com",
  emailVisibility: false,
  contact_email: "",
  first_name: "Budi",
  last_name: "Santoso",
  phone_number: "",
  role: "participant",
  updated: "",
  username: "budi.santoso",
  verified: false,
  expand: {
    test_results_via_participant: DUMMY_RESULTS,
  },
};

// Converts the PapiWheel SVG to a JPEG data URL by:
// 1. Inlining computed styles so the serialized SVG is self-contained
//    (Tailwind classes like fill-gray-500 / font-bold don't survive
//    XMLSerializer — they must be converted to inline style properties)
// 2. Serializing with XMLSerializer → Blob URL
// 3. Drawing onto a canvas with an explicit white background
// 4. Exporting as JPEG
const captureWheelAsJpeg = (wrapper: HTMLElement): Promise<string> => {
  const svgEl = wrapper.querySelector("svg");
  if (!svgEl) return Promise.reject(new Error("SVG element not found"));

  const clone = svgEl.cloneNode(true) as SVGSVGElement;

  const rect = svgEl.getBoundingClientRect();
  const W = Math.round(rect.width) || 512;
  const H = Math.round(rect.height) || 512;
  clone.setAttribute("width", String(W));
  clone.setAttribute("height", String(H));

  // Walk every element in the live SVG and copy key computed style properties
  // as inline styles on the corresponding cloned element.
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

const PdfPreview = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [wheelImageUrl, setWheelImageUrl] = useState<string | undefined>();
  const [isCapturing, setIsCapturing] = useState(true);

  useEffect(() => {
    if (!wheelRef.current) return;

    const timer = setTimeout(() => {
      captureWheelAsJpeg(wheelRef.current!)
        .then((dataUrl) => {
          setWheelImageUrl(dataUrl);
          setIsCapturing(false);
        })
        .catch((err) => {
          console.error("PapiWheel capture failed:", err);
          setIsCapturing(false);
        });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col">
      {/* PapiWheel rendered in-viewport but invisible so the browser fully
          computes layout & Tailwind styles before html-to-image captures it */}
      <div
        ref={wheelRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 512,
          height: 512,
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <PapiWheel data={DUMMY_PK_DATA.results} />
      </div>

      {isCapturing ? (
        <div className="flex flex-1 items-center justify-center text-neutral-400">
          <p className="text-sm">Generating preview…</p>
        </div>
      ) : (
        <PDFViewer width="100%" height="100%" style={{ border: "none" }}>
          <ReportDocument
            participant={DUMMY_PARTICIPANT}
            selectedModules={["papi"]}
            generatedAt={new Date().toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            papiWheelImageUrl={wheelImageUrl}
          />
        </PDFViewer>
      )}
    </div>
  );
};

export default PdfPreview;
