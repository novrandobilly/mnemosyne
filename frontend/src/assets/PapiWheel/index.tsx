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
  // Using a larger internal coordinate system (500x500)
  // but the SVG will scale to its container.
  const size = 600;
  const center = size / 2;
  const gridMaxRadius = 200; // The radius for score 9

  // Helper to get coordinates based on ring level
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

  // Generate data points
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
      className="w-full aspect-square max-w-lg rounded-xl p-4"
    >
      {/* 1. Grid Rings */}
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

      {/* 2. Data Polygon */}
      <polygon
        points={points}
        fill="rgba(59, 130, 246, 0.4)"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* 3. Group Arcs (Moved outside the traits loop) */}
      {groups.map((group, gIdx) => {
        const indices = group.traits.map((t) => traits.indexOf(t));
        const firstIdx = indices[0];
        const lastIdx = indices[indices.length - 1];

        // Radius for the colored line and the text path
        const lineRadius = gridMaxRadius + 55;
        const textRadius = gridMaxRadius + 70;

        const startLine = getCoords(firstIdx, 9, lineRadius);
        const endLine = getCoords(lastIdx, 9, lineRadius);
        const startText = getCoords(firstIdx, 9, textRadius);
        const endText = getCoords(lastIdx, 9, textRadius);

        const pathId = `arc-text-${gIdx}`;

        return (
          <g key={group.label}>
            {/* Colored Accent Arc */}
            <path
              d={`M ${startLine.x} ${startLine.y} A ${lineRadius} ${lineRadius} 0 0 1 ${endLine.x} ${endLine.y}`}
              fill="none"
              stroke={group.color}
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Invisible path for Text */}
            <path
              id={pathId}
              d={`M ${startText.x} ${startText.y} A ${textRadius} ${textRadius} 0 0 1 ${endText.x} ${endText.y}`}
              fill="none"
            />

            <text className="text-[12px] font-bold fill-gray-500 uppercase tracking-tighter">
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

      {/* 4. Radial Spokes & Trait Tokens */}
      {traits.map((trait, i) => {
        const tokenPos = getCoords(i, 9, gridMaxRadius + 25);

        return (
          <g key={trait}>
            {/* Numeric Scale (0-9) */}
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

            {/* Trait Letter Token */}
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

      {/* Center Point */}
      <circle cx={center} cy={center} r={4} fill="#4b5563" />
    </svg>
  );
};

export default PapiWheel;
