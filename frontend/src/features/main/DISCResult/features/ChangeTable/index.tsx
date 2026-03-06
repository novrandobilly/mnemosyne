import React, { useState } from "react";

/**
 * CHANGE MAPPING: Extracted from Screenshot 2026-03-06 at 22.55.15.png
 * Maps Raw Score (ranging from -22 to 21) -> Visual Y-Axis (-8 to 8).
 */
const CHANGE_MAPPING: Record<string, Record<number, number>> = {
  D: {
    21: 7.8,
    18: 7.2,
    15: 6.6,
    14: 6.0,
    13: 5.5,
    12: 5.1,
    10: 4.5,
    9: 3.5,
    8: 3.1,
    7: 2.7,
    6: 2.3,
    5: 1.9,
    4: 1.4,
    3: 1.0,
    2: 0.6,
    1: 0.2,
    0: -0.2,
    "-2": -0.7,
    "-3": -1.2,
    "-4": -1.6,
    "-5": -2.0,
    "-6": -2.4,
    "-7": -2.8,
    "-9": -3.3,
    "-10": -4.3,
    "-11": -5.1,
    "-12": -5.5,
    "-16": -6.5,
    "-20": -7.5,
  },
  I: {
    18: 7.5,
    10: 6.8,
    8: 6.2,
    7: 5.3,
    6: 4.8,
    5: 3.8,
    4: 2.8,
    3: 1.8,
    2: 0.8,
    1: 0.2,
    0: -0.2,
    "-1": -0.8,
    "-2": -1.8,
    "-3": -2.5,
    "-4": -3.2,
    "-5": -4.2,
    "-6": -4.8,
    "-7": -5.5,
    "-8": -6.2,
    "-9": -6.8,
    "-10": -7.5,
    "-18": -8,
  },
  S: {
    20: 7.5,
    15: 6.8,
    11: 6.2,
    10: 5.8,
    9: 5.2,
    8: 4.8,
    7: 4.2,
    6: 3.8,
    5: 3.2,
    4: 2.8,
    3: 2.2,
    2: 1.8,
    1: 0.8,
    0: 0.2,
    "-1": -0.5,
    "-2": -1.2,
    "-3": -1.8,
    "-4": -2.2,
    "-5": -2.8,
    "-6": -3.2,
    "-7": -3.8,
    "-8": -4.8,
    "-9": -5.2,
    "-10": -5.8,
    "-15": -6.8,
    "-18": -7.8,
  },
  C: {
    17: 7.5,
    10: 6.8,
    6: 6.2,
    5: 5.8,
    4: 5.2,
    3: 3.8,
    2: 3.2,
    1: 2.2,
    0: 1.5,
    "-1": 0.8,
    "-2": 0.2,
    "-3": -0.5,
    "-4": -1.2,
    "-5": -2.8,
    "-6": -3.2,
    "-7": -3.8,
    "-8": -4.8,
    "-9": -5.2,
    "-10": -5.8,
    "-13": -6.8,
    "-15": -7.2,
    "-19": -7.5,
    "-22": -8,
  },
};

interface DISCProps {
  scores: { d: number; i: number; s: number; c: number };
}

const DiscChangeGraph: React.FC<DISCProps> = ({ scores }) => {
  const width = 400;
  const height = 750;
  const paddingX = 60;
  const paddingY = 40;
  const graphWidth = width - paddingX * 2;
  const graphHeight = height - paddingY * 2;

  const xCoords = {
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
      y: getYPos(CHANGE_MAPPING.D[scores.d] ?? -0.2),
      label: "D",
      graphValue: CHANGE_MAPPING.D[scores.d] ?? -0.2,
    },
    {
      x: xCoords.i,
      y: getYPos(CHANGE_MAPPING.I[scores.i] ?? -0.2),
      label: "I",
      graphValue: CHANGE_MAPPING.I[scores.i] ?? -0.2,
    },
    {
      x: xCoords.s,
      y: getYPos(CHANGE_MAPPING.S[scores.s] ?? 0.2),
      label: "S",
      graphValue: CHANGE_MAPPING.S[scores.s] ?? 0.2,
    },
    {
      x: xCoords.c,
      y: getYPos(CHANGE_MAPPING.C[scores.c] ?? 1.5),
      label: "C",
      graphValue: CHANGE_MAPPING.C[scores.c] ?? 1.5,
    },
  ];

  const polylinePath = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200 max-w-sm mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-slate-700 uppercase tracking-widest">
          Graph 3: CHANGE
        </h2>
        <p className="text-xs text-slate-400 font-bold uppercase">
          Mirror, Perceived Self
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

        {/* Column Labels and Inner Scale Numbers */}
        {Object.entries(CHANGE_MAPPING).map(([col, mapping]) => {
          const x = xCoords[col.toLowerCase() as keyof typeof xCoords];
          return (
            <g key={col}>
              <text
                x={x}
                y={paddingY - 15}
                textAnchor="middle"
                className="text-2xl font-black fill-slate-400 uppercase"
              >
                {col}
              </text>
              {Object.entries(mapping).map(([score, visualPos]) => (
                <text
                  key={score}
                  x={x - 8}
                  y={getYPos(visualPos as number) + 4}
                  textAnchor="end"
                  className="fill-slate-400 text-[14px] font-medium"
                >
                  {score}
                </text>
              ))}
            </g>
          );
        })}

        {/* Blue Graph Line */}
        <polyline
          points={polylinePath}
          fill="none"
          stroke="#2563eb"
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
            className="fill-blue-700 stroke-white stroke-[3px] cursor-pointer"
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
            const tw = 130;
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
                  Change | {tooltip.label} = {tooltip.value.toFixed(1)}
                </text>
              </g>
            );
          })()}
      </svg>
    </div>
  );
};

export default DiscChangeGraph;
