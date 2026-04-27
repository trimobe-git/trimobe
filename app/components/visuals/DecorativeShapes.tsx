type ShapeProps = {
  className?: string;
  color?: string;
  size?: number;
};

export function Dot({ className = "", color = "#EA4335", size = 12 }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="6" fill={color} />
    </svg>
  );
}

export function RingDot({
  className = "",
  color = "#1A73E8",
  size = 24,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" fill={color} />
    </svg>
  );
}

export function WavyLine({
  className = "",
  color = "#EA4335",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 16"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 8 Q 15 0, 30 8 T 60 8 T 90 8 T 120 8 T 150 8 T 180 8 T 210 8 T 240 8"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StraightLine({
  className = "",
  color = "#202124",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 4"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="2"
        x2="100"
        y2="2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BurstStar({
  className = "",
  color = "#FBBC04",
  size = 48,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <g fill={color}>
        <path d="M24 0 L26 22 L24 22 L22 22 Z" />
        <path d="M24 48 L26 26 L24 26 L22 26 Z" />
        <path d="M0 24 L22 26 L22 24 L22 22 Z" />
        <path d="M48 24 L26 26 L26 24 L26 22 Z" />
        <path d="M7 7 L23 23 L24 22 L25 21 Z" />
        <path d="M41 41 L25 25 L24 26 L23 27 Z" />
        <path d="M7 41 L23 25 L24 26 L25 27 Z" />
        <path d="M41 7 L25 23 L24 22 L23 21 Z" />
      </g>
    </svg>
  );
}

export function BlobShape({
  className = "",
  color = "#E8F0FE",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M155.6 32.7c19.6 14.4 32.4 38.5 30.5 60.8-1.9 22.4-18.5 43.1-37.7 56.4-19.2 13.4-40.9 19.5-60.7 14.7C67.9 159.7 50.1 144 35 124.5 19.9 105 7.5 81.8 12 60.7 16.5 39.7 38 20.7 62.7 12.4c24.7-8.3 52.6-5.8 73.4 3.9 8.3 3.9 14.4 9.6 19.5 16.4z"
        fill={color}
      />
    </svg>
  );
}

export function CornerArrow({
  className = "",
  color = "#1A73E8",
  size = 56,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 28 Q 8 8, 28 8 L 44 8"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 4"
      />
      <path
        d="M38 2 L 46 8 L 38 14"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
