import React, { useState } from "react";

/**
 * MAPPING LOGIC:
 * We map the Raw Score (number in column) to the Visual Scale (-8 to 8).
 * This ensures that a "10" in the 'S' column aligns perfectly with
 * the horizontal grid line for "4".
 */
const DATA_MAPPING: Record<string, Record<number, number>> = {
  D: {
    21: 7.8,
    16: 7.3,
    15: 6.8,
    14: 4.8,
    13: 4.3,
    12: 3.2,
    11: 2.7,
    10: 2.2,
    9: 1.2,
    8: 0.5,
    7: -0.2,
    6: -0.8,
    5: -1.8,
    4: -2.3,
    3: -3,
    2: -4.5,
    1: -6.5,
    0: -7.5,
  },
  I: {
    19: 7.8,
    12: 7.3,
    11: 6.8,
    10: 6.3,
    9: 5.8,
    8: 5.3,
    7: 4.8,
    6: 2.8,
    5: 2.3,
    4: 0.5,
    3: -1.8,
    2: -2.8,
    1: -4.8,
    0: -7.5,
  },
  S: {
    20: 7.8,
    16: 7.3,
    14: 6.8,
    13: 6,
    12: 5.5,
    11: 5,
    10: 4.5,
    9: 3.5,
    8: 2.5,
    7: 2,
    6: 0.5,
    5: -0.2,
    4: -1.8,
    3: -2.3,
    2: -4.5,
    1: -5.5,
    0: -6.5,
  },
  C: {
    17: 7.8,
    13: 7.3,
    11: 6.8,
    10: 6.3,
    9: 5.8,
    8: 5.3,
    7: 4.8,
    6: 2.3,
    5: 1.5,
    4: 0.5,
    3: -1.8,
    2: -3.8,
    1: -5.5,
    0: -6.5,
  },
};

interface DISCProps {
  scores: { d: number; i: number; s: number; c: number };
}

const DiscMostGraph: React.FC<DISCProps> = ({ scores }) => {
  const width = 400;
  const height = 750;
  const paddingX = 60;
  const paddingY = 40;
  const graphWidth = width - paddingX * 2;
  const graphHeight = height - paddingY * 2;

  const xCoords: Record<string, number> = {
    d: paddingX + graphWidth * 0,
    i: paddingX + graphWidth * 0.33,
    s: paddingX + graphWidth * 0.66,
    c: paddingX + graphWidth * 1,
  };

  const getYPos = (val: number) => {
    const pixelsPerUnit = graphHeight / 16;
    return height / 2 - val * pixelsPerUnit;
  };

  const [tooltip, setTooltip] = useState<{
    label: string;
    value: number;
    x: number;
    y: number;
  } | null>(null);

  const points = [
    {
      x: xCoords.d,
      y: getYPos(DATA_MAPPING.D[scores.d] ?? -8),
      label: "D",
      graphValue: DATA_MAPPING.D[scores.d] ?? -8,
    },
    {
      x: xCoords.i,
      y: getYPos(DATA_MAPPING.I[scores.i] ?? -8),
      label: "I",
      graphValue: DATA_MAPPING.I[scores.i] ?? -8,
    },
    {
      x: xCoords.s,
      y: getYPos(DATA_MAPPING.S[scores.s] ?? -8),
      label: "S",
      graphValue: DATA_MAPPING.S[scores.s] ?? -8,
    },
    {
      x: xCoords.c,
      y: getYPos(DATA_MAPPING.C[scores.c] ?? -8),
      label: "C",
      graphValue: DATA_MAPPING.C[scores.c] ?? -8,
    },
  ];

  const polylinePath = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200 max-w-sm mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-slate-700 uppercase tracking-widest">
          Graph 1: MOST
        </h2>
        <p className="text-xs text-slate-400 font-bold uppercase">
          Mask, Public Self
        </p>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible select-none font-sans"
      >
        {/* Horizontal Major Grid Lines */}
        {[-8, -6, -4, -2, 0, 2, 4, 6, 8].map((tick) => (
          <g key={tick}>
            <line
              x1={paddingX}
              y1={getYPos(tick)}
              x2={width - paddingX}
              y2={getYPos(tick)}
              stroke={tick === 0 ? "#888" : "#eee"}
              strokeWidth={tick === 0 ? 3 : 1}
            />
            <text
              x={width - paddingX + 15}
              y={getYPos(tick) + 8}
              className="fill-slate-500 text-[24px] font-bold"
            >
              {tick}
            </text>
          </g>
        ))}

        {/* Vertical Column Lines */}
        {Object.values(xCoords).map((x, i) => (
          <line
            key={i}
            x1={x}
            y1={paddingY}
            x2={x}
            y2={height - paddingY}
            stroke="#bbb"
            strokeWidth="1.5"
          />
        ))}

        {/* Inner Scale Labels (The "Weird" numbers) */}
        {Object.entries(DATA_MAPPING).map(([col, mapping]) => (
          <g key={col}>
            <text
              x={xCoords[col.toLowerCase()]}
              y={paddingY - 15}
              textAnchor="middle"
              className="text-2xl font-black fill-slate-400 uppercase"
            >
              {col}
            </text>
            {Object.entries(mapping).map(([score, visualPos]) => (
              <text
                key={score}
                x={xCoords[col.toLowerCase()] - 8}
                y={getYPos(visualPos as number) + 4}
                textAnchor="end"
                className="fill-slate-400 text-[14px] font-medium"
              >
                {score}
              </text>
            ))}
          </g>
        ))}

        {/* The Graph Line */}
        <polyline
          points={polylinePath}
          fill="none"
          stroke="#ef4444"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* Data Points */}
        {points.map((p, idx) => (
          <circle
            key={idx}
            cx={p.x}
            cy={p.y}
            r="8"
            className="fill-red-600 stroke-white stroke-[3px] cursor-pointer"
            onMouseEnter={() =>
              setTooltip({
                label: p.label,
                value: p.graphValue,
                x: p.x,
                y: p.y,
              })
            }
            onMouseLeave={() => setTooltip(null)}
          />
        ))}

        {/* Tooltip */}
        {tooltip &&
          (() => {
            const tw = 120;
            const th = 28;
            const tx = Math.min(
              Math.max(tooltip.x - tw / 2, paddingX),
              width - paddingX - tw,
            );
            const ty =
              tooltip.y > paddingY + 50 ? tooltip.y - 42 : tooltip.y + 16;
            return (
              <g>
                <rect
                  x={tx}
                  y={ty}
                  width={tw}
                  height={th}
                  rx={6}
                  fill="#1e293b"
                  opacity={0.9}
                />
                <text
                  x={tx + tw / 2}
                  y={ty + 18}
                  textAnchor="middle"
                  fill="white"
                  fontSize="13"
                  fontWeight="600"
                >
                  Most | {tooltip.label} = {tooltip.value.toFixed(1)}
                </text>
              </g>
            );
          })()}
      </svg>
    </div>
  );
};

export default DiscMostGraph;
