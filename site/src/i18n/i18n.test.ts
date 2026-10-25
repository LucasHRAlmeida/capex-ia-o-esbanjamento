import assert from "node:assert/strict";
import test from "node:test";
import { CARD_IDS } from "../lib/faq-bot.ts";
import { bi, pct } from "../lib/ledger.ts";
import { en } from "./en.ts";
import { es } from "./es.ts";
import { pt } from "./pt.ts";

/** Caminho de cada folha do dicionário, com o índice dos arrays: "tese.claims.0.title". */
function shape(value: unknown, path = ""): string[] {
  if (typeof value === "string") return [path];
  if (Array.isArray(value)) return value.flatMap((item, index) => shape(item, `${path}.${index}`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => shape(item, path ? `${path}.${key}` : key));
  }
  throw new Error(`valor inesperado em ${path}`);
}

function leaves(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(leaves);
  if (value && typeof value === "object") return Object.values(value).flatMap(leaves);
  return [];
}

test("en e es têm exatamente as mesmas chaves e tamanhos de lista que pt", () => {
  const reference = shape(pt);
  assert.deepEqual(shape(en), reference);
  assert.deepEqual(shape(es), reference);
});

test("nenhuma tradução está vazia", () => {
  for (const [name, dict] of [["en", en], ["es", es]] as const) {
    for (const text of leaves(dict)) {
      assert.ok(text.trim().length > 0, `${name}: texto vazio`);
    }
  }
});

test("as fontes citadas continuam com o mesmo número de entradas por idioma", () => {
  assert.equal(en.metodo.sources.length, pt.metodo.sources.length);
  assert.equal(es.metodo.sources.length, pt.metodo.sources.length);
  assert.equal(en.contas.headers.length, 8);
  assert.equal(es.contas.headers.length, 8);
});

test("o leitor tem carta e dois follow-ups para cada id", () => {
  for (const id of CARD_IDS) {
    assert.equal(pt.bot.cards[id].followUps.length, 2);
    assert.equal(en.bot.cards[id].followUps.length, 2);
    assert.equal(es.bot.cards[id].followUps.length, 2);
  }
});

test("números seguem o separador de cada idioma", () => {
  assert.equal(bi(3805, 0, "pt-BR"), "3.805");
  assert.equal(bi(3805, 0, "en-US"), "3,805");
  assert.equal(pt.hero.figs[0]!.v, "3.805 bi");
  assert.equal(en.hero.figs[0]!.v, "3,805 bn");
  assert.equal(pct(19.8, 1, "pt-BR"), "19,8%");
  assert.equal(pct(19.8, 1, "en-US"), "19.8%");
  assert.equal(pct(19.8, 1, "es"), "19,8%");
  assert.equal(bi(-1902.5, 0, "es").startsWith("−"), true);
});
