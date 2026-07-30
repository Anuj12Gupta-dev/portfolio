/**
 * Dotted world map.
 *
 * Land is stored as [row, colStart, colEnd] spans on a 64 x 28 grid
 * (lon -180..180, lat 80..-60). Cheap to ship, resolution-independent,
 * and it renders as a dot field rather than a filled silhouette.
 */
const LAND: readonly (readonly [number, number, number])[] = [
  [0, 20, 24], [0, 44, 56],
  [1, 8, 18], [1, 19, 25], [1, 40, 58],
  [2, 5, 19], [2, 20, 25], [2, 31, 36], [2, 37, 60],
  [3, 2, 6], [3, 7, 20], [3, 21, 24], [3, 30, 35], [3, 36, 61],
  [4, 2, 5], [4, 6, 20], [4, 22, 23], [4, 29, 35], [4, 36, 61],
  [5, 5, 20], [5, 28, 29], [5, 30, 36], [5, 37, 60],
  [6, 5, 20], [6, 28, 38], [6, 39, 58],
  [7, 5, 19], [7, 28, 38], [7, 39, 58],
  [8, 5, 19], [8, 28, 38], [8, 39, 57], [8, 59, 60],
  [9, 6, 19], [9, 28, 40], [9, 41, 45], [9, 46, 57], [9, 58, 60],
  [10, 8, 16], [10, 28, 41], [10, 42, 45], [10, 46, 49], [10, 50, 57], [10, 58, 59],
  [11, 9, 15], [11, 28, 41], [11, 45, 49], [11, 50, 56],
  [12, 11, 15], [12, 16, 18], [12, 28, 42], [12, 45, 49], [12, 50, 55],
  [13, 13, 16], [13, 28, 42], [13, 45, 48], [13, 51, 55],
  [14, 17, 19], [14, 29, 42], [14, 51, 56],
  [15, 17, 22], [15, 29, 42], [15, 51, 57],
  [16, 17, 24], [16, 30, 41], [16, 51, 58],
  [17, 18, 25], [17, 31, 41], [17, 52, 58],
  [18, 18, 25], [18, 31, 40], [18, 55, 58],
  [19, 18, 25], [19, 31, 39], [19, 53, 59],
  [20, 19, 25], [20, 31, 38], [20, 52, 60],
  [21, 19, 24], [21, 32, 37], [21, 52, 60],
  [22, 19, 23], [22, 32, 36], [22, 53, 59],
  [23, 19, 22], [23, 33, 35], [23, 54, 58],
  [24, 19, 21], [24, 61, 62],
  [25, 19, 21], [25, 61, 62],
  [26, 19, 20],
  [27, 19, 20],
];

const STEP = 10;

/**
 * Every dot is a zero-length subpath (`M x y h0`) on ONE path element
 * with a round line-cap, which paints an identical circle for roughly a
 * fifth of the markup of ~700 <circle> tags. This map is inlined into
 * the server-rendered HTML, so the byte count is on the critical path.
 */
const DOTS = LAND.flatMap(([row, from, to]) => {
  const y = row * STEP;
  const run: string[] = [];
  for (let col = from; col <= to; col++) run.push(`M${col * STEP} ${y}h0`);
  return run;
}).join("");

export function WorldDots({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 640 280"
      fill="none"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d={DOTS}
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
