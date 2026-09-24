/** Série do manifesto (dados.json, 24 set 2026). US$ bilhões. */

export const YEARS = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030] as const;

export const CAPEX = [100, 200, 375, 500, 600, 650, 680, 700];

export const RECEITA = {
  base: [10, 15, 25, 45, 80, 130, 190, 260],
  otimista: [10, 15, 25, 60, 150, 350, 700, 1200],
  pessimista: [10, 15, 25, 35, 45, 55, 65, 75],
} as const;

/** Heurística publicada: 35% do capex do ano anterior + 25% do de dois anos atrás. */
export const DEPREC_PUBLICADA = [0, 35, 95, 181.2, 268.8, 335, 377.5, 400.5];

/** Vida útil de 3 anos, linha reta, ano cheio, sobre todo o capex. */
export const DEPREC_SL3 = [33.33, 100, 225, 358.33, 491.67, 583.33, 643.33, 676.67];

/**
 * Mista, proposta — não medida.
 * 60% silício, vida 3 anos; 40% casca (prédio, rede, energia), vida 20 anos.
 */
export const DEPREC_MISTA = [22, 66, 148.5, 238.5, 330.5, 398.5, 448.1, 482.1];

export const CAPEX_TOTAL = 3805;
export const RECEITA_BASE_TOTAL = 755;
export const GAP_ACUMULADO = 3050;

/** Preço implícito no 17,9 bi de “assinantes Netflix” do JSON: 3050 / 17,9. */
export const NETFLIX_USD_ANO = 170.39;

const FORWARD = 3;

export function sum(values: readonly number[]): number {
  return values.reduce((acc, value) => acc + value, 0);
}

export function bi(value: number, digits = 0): string {
  const sign = value < 0 ? "−" : "";
  const abs = Math.abs(value);
  const body = abs.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  return sign + body;
}

export function pct(value: number, digits = 1): string {
  return `${bi(value, digits)}%`;
}

export type Scenario = keyof typeof RECEITA;

/** A partir de 2026: escala a receita e retira a fração que é só substituição de salário. */
export function adjustRevenue(path: readonly number[], multiplier: number, alpha: number): number[] {
  return path.map((value, index) => {
    if (index < FORWARD) return value;
    return value * multiplier * (1 - alpha);
  });
}

export function roiAcumulado(revenue: readonly number[]): number[] {
  let spent = 0;
  let earned = 0;
  return revenue.map((value, index) => {
    spent += CAPEX[index] ?? 0;
    earned += value;
    return (earned / spent) * 100;
  });
}

export function gapAnual(revenue: readonly number[]): number[] {
  return revenue.map((value, index) => (CAPEX[index] ?? 0) - value);
}

export type LedgerOutcome = {
  receita: number;
  gap: number;
  roi: number;
  fecha: boolean;
  capexCorrida: number;
};

export function outcome(
  scenario: Scenario,
  multiplier: number,
  alpha: number,
  race: number,
): LedgerOutcome {
  const revenue = adjustRevenue(RECEITA[scenario], multiplier, alpha);
  const receita = sum(revenue);
  return {
    receita,
    gap: CAPEX_TOTAL - receita,
    roi: (receita / CAPEX_TOTAL) * 100,
    fecha: receita >= CAPEX_TOTAL,
    capexCorrida: CAPEX_TOTAL * race,
  };
}

/** Multiplicador, daqui para frente, que empataria o capex acumulado dada a substituição α. */
export function breakEvenMultiplier(scenario: Scenario, alpha: number): number {
  const keep = 1 - alpha;
  if (keep <= 0.001) return Number.POSITIVE_INFINITY;
  const path = RECEITA[scenario];
  const early = sum(path.slice(0, FORWARD));
  const late = sum(path.slice(FORWARD));
  return (CAPEX_TOTAL - early) / (late * keep);
}

export const ROI_BASE = [10, 8.3, 7.4, 8.1, 9.9, 12.6, 15.9, 19.8];
export const ROI_OTIMISTA = [10, 8.3, 7.4, 9.4, 14.6, 25.2, 42.2, 66];
export const ROI_PESSIMISTA = [10, 8.3, 7.4, 7.2, 7.3, 7.6, 8.1, 8.5];
