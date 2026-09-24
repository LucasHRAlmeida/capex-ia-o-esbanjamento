import { useEffect, useState, type ReactNode } from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  CAPEX,
  DEPREC_MISTA,
  DEPREC_PUBLICADA,
  DEPREC_SL3,
  RECEITA,
  ROI_BASE,
  ROI_OTIMISTA,
  ROI_PESSIMISTA,
  YEARS,
  bi,
} from "../lib/ledger";

const oxide = "var(--color-oxide)";
const bone = "var(--color-bone)";
const brass = "var(--color-brass)";
const muted = "var(--color-muted)";
const line = "var(--color-line)";

function ClientOnly({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return <div className="h-72 border border-line bg-ink" aria-hidden />;
  return children;
}

type TipPayload = { name?: string; value?: number; color?: string; dataKey?: string };

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TipPayload[];
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="border border-line bg-ink px-3 py-2 text-sm">
      <div className="font-semibold text-bone">{label}</div>
      {payload.map((item) => (
        <div key={String(item.dataKey)} className="text-muted">
          <span style={{ color: item.color }}>{item.name}</span>{" "}
          <span className="text-bone tabular-nums">{bi(Number(item.value), 1)}</span>
        </div>
      ))}
    </div>
  );
}

const axis = { fill: "var(--color-muted)", fontSize: 12 };
const yAxis = { tick: axis, axisLine: false as const, tickLine: false as const, width: 46, tickMargin: 8 };

export function CapexChart() {
  const data = YEARS.map((year, index) => ({
    year,
    Capex: CAPEX[index],
    Base: RECEITA.base[index],
    Otimista: RECEITA.otimista[index],
    Pessimista: RECEITA.pessimista[index],
  }));

  return (
    <ClientOnly>
      <div className="h-72 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={line} vertical={false} />
            <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} minTickGap={12} />
            <YAxis {...yAxis} />
            <Tooltip content={<Tip />} />
            <Bar dataKey="Capex" fill={oxide} maxBarSize={26} />
            <Line dataKey="Base" stroke={bone} strokeWidth={2} dot={false} />
            <Line dataKey="Otimista" stroke={brass} strokeWidth={2} dot={false} />
            <Line dataKey="Pessimista" stroke={muted} strokeWidth={2} strokeDasharray="4 4" dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ClientOnly>
  );
}

export function DeprecChart() {
  const data = YEARS.map((year, index) => ({
    year,
    Publicada: DEPREC_PUBLICADA[index],
    "Vida de 3 anos": DEPREC_SL3[index],
    Mista: DEPREC_MISTA[index],
    "Receita base": RECEITA.base[index],
  }));

  return (
    <ClientOnly>
      <div className="h-72 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={line} vertical={false} />
            <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} minTickGap={12} />
            <YAxis {...yAxis} domain={[0, 750]} />
            <Tooltip content={<Tip />} />
            <Line dataKey="Publicada" stroke={brass} strokeWidth={2} dot={false} />
            <Line dataKey="Vida de 3 anos" stroke={oxide} strokeWidth={2.4} dot={false} />
            <Line dataKey="Mista" stroke={muted} strokeWidth={2} strokeDasharray="5 4" dot={false} />
            <Line dataKey="Receita base" stroke={bone} strokeWidth={2} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ClientOnly>
  );
}

export function RoiChart() {
  const data = YEARS.map((year, index) => ({
    year,
    Base: ROI_BASE[index],
    Otimista: ROI_OTIMISTA[index],
    Pessimista: ROI_PESSIMISTA[index],
    Empate: 100,
  }));

  return (
    <ClientOnly>
      <div className="h-72 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={line} vertical={false} />
            <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} minTickGap={12} />
            <YAxis {...yAxis} domain={[0, 110]} />
            <Tooltip content={<Tip />} />
            <Line dataKey="Base" stroke={bone} strokeWidth={2.4} dot={false} />
            <Line dataKey="Otimista" stroke={brass} strokeWidth={2} dot={false} />
            <Line dataKey="Pessimista" stroke={muted} strokeWidth={2} strokeDasharray="4 4" dot={false} />
            <Line dataKey="Empate" stroke={oxide} strokeDasharray="2 6" strokeWidth={1.5} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ClientOnly>
  );
}
