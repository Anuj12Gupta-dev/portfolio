import { WorldDots } from "./world-dots";

/* Gateways feeding the routing engine, drawn left to right. */
const GATEWAYS = [
  { label: "XPay", y: 92 },
  { label: "Razorpay", y: 130 },
  { label: "PayU", y: 168 },
  { label: "PayGlocal", y: 206 },
  { label: "PayPal", y: 244 },
] as const;

const CHIP_H = 30;
const NODE = { x: 278, y: 183, r: 46 };

/** Curve from a gateway chip's right edge into the engine node. */
function feedPath(y: number) {
  const from = y + CHIP_H / 2;
  return `M116 ${from} C 168 ${from}, 186 ${NODE.y}, 228 ${NODE.y}`;
}

const JSON_LINES: readonly { indent: number; key?: string; value?: string; raw?: string }[] = [
  { indent: 0, raw: "{" },
  { indent: 1, key: '"event"', value: '"payout.settled"' },
  { indent: 1, key: '"gateway"', value: '"razorpay"' },
  { indent: 1, key: '"merchant"', value: '"mrc_8241"' },
  { indent: 1, key: '"amount"', value: "148250" },
  { indent: 1, key: '"currency"', value: '"INR"' },
  { indent: 1, key: '"status"', value: '"reconciled"' },
  { indent: 1, key: '"attempts"', value: "1" },
  { indent: 1, key: '"settled_at"', value: '"2026-07-14"' },
  { indent: 0, raw: "}" },
];

export function HeroDiagram({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 660 470"
        fill="none"
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Diagram: payment gateways routing through a rulebook engine into a reconciled JSON payout event."
      >
        {/* ---- world map backdrop ---------------------------------- */}
        <foreignObject x="0" y="6" width="660" height="300" aria-hidden>
          <div className="fade-edges-soft h-full w-full opacity-45 [html[data-theme='dark']_&]:opacity-25">
            <WorldDots className="h-full w-full text-blueprint" />
          </div>
        </foreignObject>

        {/* ---- origination pins + arcs ------------------------------ */}
        <g className="stroke-blueprint/70" strokeWidth="1">
          <path d="M150 52 C 168 96, 214 118, 240 146" className="flow-slow" fill="none" />
          <path d="M244 40 C 250 88, 258 112, 266 134" className="flow-slow" fill="none" />
          <path d="M338 50 C 330 96, 306 118, 292 142" className="flow-slow" fill="none" />
        </g>
        {[
          [150, 44],
          [244, 32],
          [338, 42],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
            <path
              d="M0 0 C -7 -8, -11 -13, -11 -19 A 11 11 0 1 1 11 -19 C 11 -13, 7 -8, 0 0 Z"
              className="fill-ink"
            />
            <circle cx="0" cy="-19" r="4" className="fill-paper" />
          </g>
        ))}

        {/* ---- gateway chips --------------------------------------- */}
        {GATEWAYS.map((g) => (
          <g key={g.label}>
            <rect
              x="4"
              y={g.y}
              width="112"
              height={CHIP_H}
              rx="9"
              className="fill-surface stroke-line"
              strokeWidth="1"
            />
            <text
              x="60"
              y={g.y + CHIP_H / 2 + 4}
              textAnchor="middle"
              className="fill-ink font-sans text-[12px] font-medium"
            >
              {g.label}
            </text>
          </g>
        ))}

        {/* ---- feed curves + travelling packets --------------------- */}
        {GATEWAYS.map((g, i) => (
          <g key={`feed-${g.label}`}>
            <path
              id={`feed-${i}`}
              d={feedPath(g.y)}
              className="flow stroke-blueprint"
              strokeWidth="1"
              fill="none"
            />
            <circle r="2.5" className="fill-accent [@media(prefers-reduced-motion:reduce)]:hidden">
              <animateMotion dur="3.4s" begin={`${i * 0.55}s`} repeatCount="indefinite">
                <mpath href={`#feed-${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* ---- engine node ----------------------------------------- */}
        <g>
          <circle
            cx={NODE.x}
            cy={NODE.y}
            r={NODE.r + 16}
            className="fill-none stroke-blueprint/35"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          <circle
            cx={NODE.x}
            cy={NODE.y}
            r={NODE.r}
            className="fill-surface stroke-line"
            strokeWidth="1"
          />
          {/* routing glyph: one input fanning to three routes */}
          <g
            transform={`translate(${NODE.x - 20} ${NODE.y - 18})`}
            className="stroke-ink"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M0 18 h9" />
            <path d="M9 18 C 18 18, 18 4, 27 4" />
            <path d="M9 18 h18" />
            <path d="M9 18 C 18 18, 18 32, 27 32" />
            <circle cx="2" cy="18" r="2.6" className="fill-ink" />
            <circle cx="35" cy="4" r="3.2" className="fill-surface" />
            <circle cx="35" cy="18" r="3.2" className="fill-surface" />
            <circle cx="35" cy="32" r="3.2" className="fill-surface" />
          </g>
        </g>
        <text
          x={NODE.x}
          y={NODE.y + NODE.r + 34}
          textAnchor="middle"
          className="fill-muted font-mono text-[10px] tracking-[0.14em] uppercase"
        >
          Rulebook Engine
        </text>

        {/* ---- engine to response ---------------------------------- */}
        <path
          d={`M${NODE.x + NODE.r} ${NODE.y} h72`}
          className="flow stroke-blueprint"
          strokeWidth="1"
          fill="none"
        />

        {/* ---- reconciliation branch ------------------------------- */}
        <path
          d={`M${NODE.x} ${NODE.y + NODE.r} v40 h-96 v31`}
          className="flow-slow stroke-blueprint/70"
          strokeWidth="1"
          fill="none"
        />
        <g transform="translate(122 300)">
          <rect
            width="120"
            height="34"
            rx="9"
            className="fill-surface stroke-line"
            strokeWidth="1"
          />
          <text
            x="60"
            y="21"
            textAnchor="middle"
            className="fill-ink font-sans text-[11.5px] font-medium"
          >
            Reconciliation
          </text>
        </g>

        {/* ---- browser / JSON response panel ------------------------ */}
        <g>
          <rect
            x="396"
            y="44"
            width="256"
            height="300"
            rx="16"
            className="fill-surface stroke-line"
            strokeWidth="1"
          />
          <path
            d="M396 74 h256"
            className="stroke-line"
            strokeWidth="1"
          />
          <circle cx="414" cy="59" r="4" className="fill-accent/70" />
          <circle cx="428" cy="59" r="4" className="fill-accent/70" />
          <circle cx="442" cy="59" r="4" className="fill-accent/70" />
          <rect
            x="458"
            y="52"
            width="180"
            height="15"
            rx="7.5"
            className="fill-sunken"
          />

          {JSON_LINES.map((line, i) => {
            const y = 100 + i * 22;
            const x = 414 + line.indent * 14;
            return (
              <text key={i} x={x} y={y} className="font-mono text-[11px]">
                {line.raw ? (
                  <tspan className="fill-body">{line.raw}</tspan>
                ) : (
                  <>
                    <tspan className="fill-muted">{line.key}</tspan>
                    <tspan className="fill-body">: </tspan>
                    <tspan className="fill-ink font-medium">{line.value}</tspan>
                    {i < JSON_LINES.length - 2 ? (
                      <tspan className="fill-body">,</tspan>
                    ) : null}
                  </>
                )}
              </text>
            );
          })}
        </g>

        {/* ---- floating annotation pills ---------------------------- */}
        <g className="floaty">
          <rect
            x="352"
            y="18"
            width="132"
            height="30"
            rx="15"
            className="fill-surface stroke-line"
            strokeWidth="1"
          />
          <text
            x="418"
            y="37"
            textAnchor="middle"
            className="fill-ink font-sans text-[11.5px] font-medium"
          >
            {"{ }"} Webhook event
          </text>
        </g>

        <g>
          <rect x="466" y="360" width="178" height="30" rx="15" className="fill-accent" />
          <circle cx="486" cy="375" r="4" className="fill-on-accent" />
          <text
            x="568"
            y="379"
            textAnchor="middle"
            className="fill-on-accent font-sans text-[11.5px] font-medium"
          >
            Settled &amp; reconciled
          </text>
        </g>
      </svg>
    </div>
  );
}
