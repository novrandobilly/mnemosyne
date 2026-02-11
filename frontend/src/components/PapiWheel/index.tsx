import React from "react";

// Define the interface for the scores data
export interface PapiScores {
  [key: string]: number;
}

const groups = [
  { label: "GROUP 1", traits: ["N", "G", "A"], color: "#ef4444" }, // Red
  { label: "GROUP 2", traits: ["L", "P", "I"], color: "#f59e0b" }, // Orange
  { label: "GROUP 3", traits: ["T", "V"], color: "#10b981" }, // Green
  { label: "GROUP 4", traits: ["X", "S", "B", "O"], color: "#3b82f6" }, // Blue
  { label: "GROUP 5", traits: ["R", "D", "C"], color: "#8b5cf6" }, // Purple
  { label: "GROUP 6", traits: ["Z", "E", "K"], color: "#ec4899" }, // Pink
  { label: "GROUP 7", traits: ["F", "W"], color: "#6b7280" }, // Gray
];

const PapiWheel = ({ data }: { data: PapiScores }) => {
  const size = 500; // Increased slightly to give room for the outer circles
  const center = size / 2;
  const radius = 180; // The radius of the main grid grid
  const traits = [
    "N",
    "G",
    "A",
    "L",
    "P",
    "I",
    "T",
    "V",
    "X",
    "S",
    "B",
    "O",
    "R",
    "D",
    "C",
    "Z",
    "E",
    "K",
    "F",
    "W",
  ];

  // Helper to convert trait index and score (0-9) to X,Y coordinates
  const getCoords = (index: number, score: number) => {
    // -90 degrees rotates it so 'N' starts at the top
    const angle = (index * (360 / traits.length) - 90) * (Math.PI / 180);
    const dist = (score / 9) * radius;
    return {
      x: center + dist * Math.cos(angle),
      y: center + dist * Math.sin(angle),
    };
  };

  // Generate the polygon points string from the data
  const points = traits
    .map((t, i) => {
      // Safe access: if data[t] is undefined, default to 0
      const score = data[t] !== undefined ? data[t] : 0;
      const { x, y } = getCoords(i, score);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    // overflow-visible is important so the outer tokens don't get cut off
    <svg
      width={size}
      height={size}
      className="overflow-visible  rounded-xl p-4"
    >
      {/* 1. Background Circles (Grid) */}
      {[...Array(10)].map((_, i) => (
        <circle
          key={`grid-${i}`}
          cx={center}
          cy={center}
          r={(i / 9) * radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      ))}

      {/* 2. The User's Result Data Polygon (Drawn behind labels now) */}
      <polygon
        points={points}
        fill="rgba(59, 130, 246, 0.4)"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* 3. Radial Spokes & "Circular Piece" Labels */}
      {/* 3. Radial Spokes with Numeric Scales */}
      {traits.map((trait, i) => {
        const labelPos = getCoords(i, 11.2);
        const tokenRadius = 15;

        return (
          <g key={trait}>
            {/* THE SCALE NUMBERS (0-9) 
         We loop from 0 to 9 to place a digit at each coordinate point
      */}
            {[...Array(10)].map((_, scoreValue) => {
              const { x, y } = getCoords(i, scoreValue);
              return (
                <text
                  key={`${trait}-${scoreValue}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-[8px] fill-gray-400 select-none font-medium"
                >
                  {scoreValue}
                </text>
              );
            })}

            {/* 4. Grouping Arcs and Labels */}
            {groups.map((group, groupIndex) => {
              // 1. Sort indices to ensure clockwise drawing
              const indices = group.traits
                .map((t) => traits.indexOf(t))
                .sort((a, b) => a - b);

              const firstIdx = indices[0];
              const lastIdx = indices[indices.length - 1];

              // 2. Calculate the Arc Path (placed further out at 14.5)
              const arcRadius = radius * (14.5 / 9);
              const start = getCoords(firstIdx, 14.5);
              const end = getCoords(lastIdx, 14.5);

              const pathId = `arc-${groupIndex}`;
              const d = `M ${start.x} ${start.y} A ${arcRadius} ${arcRadius} 0 0 1 ${end.x} ${end.y}`;

              return (
                <g key={group.label}>
                  {/* The invisible path for the text to follow */}
                  <path
                    id={pathId}
                    d={d}
                    fill="none"
                    stroke="none" // Keep it invisible or use group.color for a line
                  />

                  <text className="text-[10px] font-bold uppercase tracking-widest fill-gray-500">
                    <textPath
                      href={`#${pathId}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {group.label}
                    </textPath>
                  </text>

                  {/* Optional: The visible colored line slightly closer to the tokens */}
                  <path
                    d={`M ${getCoords(firstIdx, 13.5).x} ${getCoords(firstIdx, 13.5).y} 
            A ${radius * (13.5 / 9)} ${radius * (13.5 / 9)} 0 0 1 
            ${getCoords(lastIdx, 13.5).x} ${getCoords(lastIdx, 13.5).y}`}
                    fill="none"
                    stroke={group.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              );
            })}

            {/* THE OUTER TOKEN (The Letter) */}
            <g className="drop-shadow-sm">
              <circle
                cx={labelPos.x}
                cy={labelPos.y}
                r={tokenRadius}
                fill="white"
                stroke="#4b5563"
                strokeWidth="2"
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[14px] font-extrabold fill-gray-800 select-none"
              >
                {trait}
              </text>
            </g>
          </g>
        );
      })}
      {/* Optional Center Decorator */}
      <circle cx={center} cy={center} r={4} fill="#4b5563" />
    </svg>
  );
};

export default PapiWheel;
