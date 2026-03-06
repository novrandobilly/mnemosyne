export interface PapiScores {
  [key: string]: number;
}

const groups = [
  { label: "WORK DIRECTION", traits: ["N", "G", "A"], color: "#ef4444" },
  { label: "LEADERSHIP", traits: ["L", "P", "I"], color: "#f59e0b" },
  { label: "ACTIVITY", traits: ["T", "V"], color: "#10b981" },
  { label: "SOCIAL NATURE", traits: ["X", "S", "B", "O"], color: "#3b82f6" },
  { label: "WORK STYLE", traits: ["R", "D", "C"], color: "#8b5cf6" },
  { label: "TEMPERAMENT", traits: ["Z", "E", "K"], color: "#ec4899" },
  { label: "FOLLOWERSHIP", traits: ["F", "W"], color: "#6b7280" },
];

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

const PapiWheel = ({ data }: { data: PapiScores }) => {
  const size = 700;
  const center = size / 2;
  const gridMaxRadius = 200;

  const getCoords = (
    index: number,
    score: number,
    customRadius = gridMaxRadius,
  ) => {
    const angle = (index * (360 / traits.length) - 90) * (Math.PI / 180);
    const dist = (score / 9) * customRadius;
    return {
      x: center + dist * Math.cos(angle),
      y: center + dist * Math.sin(angle),
    };
  };

  const points = traits
    .map((t, i) => {
      const score = data[t] ?? 0;
      const { x, y } = getCoords(i, score);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full aspect-square max-w-lg rounded-xl p-4 bg-white" // Removed bg-amber if you want white
    >
      {/* 1. Grid Rings & 2. Data Polygon (Same as before) */}
      {[...Array(10)].map((_, i) => (
        <circle
          key={`grid-${i}`}
          cx={center}
          cy={center}
          r={(i / 9) * gridMaxRadius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      ))}
      <polygon
        points={points}
        fill="rgba(59, 130, 246, 0.4)"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* 3. Group Arcs with Flipped Bottom Text */}
      {groups.map((group, gIdx) => {
        const indices = group.traits.map((t) => traits.indexOf(t));
        let firstIdx = indices[0] - 0.25; // Shift slightly to center the arc between traits
        let lastIdx = indices[indices.length - 1] + 0.25; // Shift slightly to center the arc between traits

        // Logic to determine if text should be flipped
        // Usually, groups between index 5 and 15 are "bottom heavy"
        const isBottom = firstIdx > 4 && lastIdx < 16;

        const lineRadius = gridMaxRadius + 55;
        // If bottom, we push the text path slightly further out so the
        // top of the letters align with the top of the normal letters
        const textRadius = isBottom ? gridMaxRadius + 85 : gridMaxRadius + 70;

        const startLine = getCoords(firstIdx, 9, lineRadius);
        const endLine = getCoords(lastIdx, 9, lineRadius);

        // For the text path:
        // Top: Start -> End (Clockwise)
        // Bottom: End -> Start (Counter-clockwise)
        const startText = getCoords(
          isBottom ? lastIdx : firstIdx,
          9,
          textRadius,
        );
        const endText = getCoords(isBottom ? firstIdx : lastIdx, 9, textRadius);

        const pathId = `arc-text-${gIdx}`;
        // Sweep flag (the '1' or '0' after radius) controls clockwise vs counter-clockwise
        const sweepFlag = isBottom ? 0 : 1;

        return (
          <g key={group.label}>
            <path
              d={`M ${startLine.x} ${startLine.y} A ${lineRadius} ${lineRadius} 0 0 1 ${endLine.x} ${endLine.y}`}
              fill="none"
              stroke={group.color}
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              id={pathId}
              d={`M ${startText.x} ${startText.y} A ${textRadius} ${textRadius} 0 0 ${sweepFlag} ${endText.x} ${endText.y}`}
              fill="none"
            />

            <text className="text-[14px] font-bold fill-gray-500 uppercase tracking-tight">
              <textPath
                href={`#${pathId}`}
                startOffset="50%"
                textAnchor="middle"
              >
                {group.label}
              </textPath>
            </text>
          </g>
        );
      })}

      {/* 4. Radial Spokes & Trait Tokens (Same as before) */}
      {traits.map((trait, i) => {
        const tokenPos = getCoords(i, 9, gridMaxRadius + 25);
        return (
          <g key={trait}>
            {[...Array(10)].map((_, scoreValue) => {
              const { x, y } = getCoords(i, scoreValue);
              return (
                <text
                  key={`${trait}-${scoreValue}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-[12px] fill-gray-400 font-medium pointer-events-none"
                >
                  {scoreValue}
                </text>
              );
            })}
            <g className="filter drop-shadow-sm">
              <circle
                cx={tokenPos.x}
                cy={tokenPos.y}
                r={15}
                fill="white"
                stroke="#4b5563"
                strokeWidth="1.5"
              />
              <text
                x={tokenPos.x}
                y={tokenPos.y}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[12px] font-bold fill-gray-800"
              >
                {trait}
              </text>
            </g>
          </g>
        );
      })}
      <circle cx={center} cy={center} r={4} fill="#4b5563" />
    </svg>
  );
};
export default PapiWheel;
