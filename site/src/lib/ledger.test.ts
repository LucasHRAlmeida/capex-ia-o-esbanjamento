import assert from "node:assert/strict";
import test from "node:test";
import {
  CAPEX_TOTAL,
  COBERTURA_BASE,
  RECEITA,
  RECEITA_BASE_TOTAL,
  breakEvenMultiplier,
  coberturaAcumulada,
  outcome,
  sum,
} from "./ledger.ts";

test("a série base reproduz soma e cobertura publicadas", () => {
  assert.equal(sum(RECEITA.base), RECEITA_BASE_TOTAL);
  assert.equal(CAPEX_TOTAL, 3805);
  assert.ok(Math.abs(coberturaAcumulada(RECEITA.base).at(-1)! - 19.8423) < 0.001);
  assert.equal(COBERTURA_BASE.at(-1), 19.8);
});

test("2,69× iguala apenas receita e capex de 2030", () => {
  const annual = 700 / 260;
  const allYears = CAPEX_TOTAL / RECEITA_BASE_TOTAL;

  assert.ok(Math.abs(annual - 2.6923) < 0.001);
  assert.ok(Math.abs(allYears - 5.0397) < 0.001);
});

test("o fator futuro mantém 2023–2025 fixos", () => {
  assert.ok(Math.abs(breakEvenMultiplier("base", 0) - 5.3262) < 0.001);
  assert.ok(Math.abs(breakEvenMultiplier("base", 0.7) - 17.7541) < 0.001);
});

test("o cenário do autor permanece explicitamente paramétrico", () => {
  const result = outcome("base", 1, 0.7, 0.5);

  assert.equal(result.receita, 261.5);
  assert.ok(Math.abs(result.cobertura - 6.8725) < 0.001);
  assert.equal(result.capexCorrida, 1902.5);
  assert.equal(result.fecha, false);
});
