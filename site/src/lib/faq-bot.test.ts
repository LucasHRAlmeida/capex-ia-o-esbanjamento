import assert from "node:assert/strict";
import test from "node:test";
import { emptyMemory, normalize, respond } from "./faq-bot.ts";

test("normaliza milhar e decimal nos três idiomas", () => {
  assert.equal(normalize("3.805 bi"), "3805 bi");
  assert.equal(normalize("3,805 bn"), "3805 bn");
  assert.equal(normalize("19,8% é ROI?"), "19.8% e roi");
  assert.equal(normalize("2,69×"), "2.69x");
});

test("19,8% não é ROI — pt, en e es", () => {
  assert.equal(respond("O 19,8% é ROI?").cards[0], "cobertura");
  assert.equal(respond("Is 19.8% ROI?").cards[0], "cobertura");
  assert.equal(respond("¿El 19,8% es ROI?").cards[0], "cobertura");
  assert.equal(respond("O 19,8% é ROI?").epistemic, "verified");
});

test("2,7× fecha só 2030; o acumulado pede ~5×", () => {
  const reply = respond("Por que 2,7× não fecha a conta?");
  assert.equal(reply.cards[0], "multiplicadores");
  assert.equal(reply.kind, "match");
});

test("o capex se sustenta permanece conclusão condicional", () => {
  const reply = respond("O capex se sustenta?");
  assert.equal(reply.cards[0], "perimetro");
  assert.equal(reply.epistemic, "gap");
});

test("17,9 bi de assinantes não é mercado endereçável", () => {
  assert.equal(respond("O que são os 17,9 bilhões de assinantes Netflix?").cards[0], "netflix");
  assert.equal(respond("17.9 billion subscribers").cards[0], "netflix");
});

test("depreciação de três anos é teste, não vida útil", () => {
  assert.equal(respond("A depreciação de 3 anos está demonstrada?").cards[0], "depreciacao");
});

test("título e corpus caem na tese normativa", () => {
  assert.equal(respond("O que é o título?").cards[0], "titulo");
  assert.equal(respond("Sem corpora existem pesos?").cards[0], "corpus");
});

test("follow-up curto avança para o cartão relacionado", () => {
  const first = respond("O 19,8% é ROI?");
  const next = respond("por quê?", first.memory);
  assert.equal(next.cards[0], "identidade");
  assert.ok(next.cards.includes("cobertura"));
  assert.equal(next.kind, "match");
});

test("pergunta fora do perímetro não inventa resposta", () => {
  const reply = respond("Qual o preço do bitcoin amanhã?");
  assert.equal(reply.kind, "fallback");
  assert.deepEqual(reply.cards, []);
});

test("meta: saudação, agradecimento e quem é o leitor", () => {
  assert.equal(respond("oi").kind, "greeting");
  assert.equal(respond("thanks").kind, "thanks");
  assert.equal(respond("quem é você?").kind, "who");
  assert.equal(respond("are you an AI?").kind, "who");
});

test("o que a página não prova aponta o estatuto", () => {
  const reply = respond("O que esta página não prova?");
  assert.ok(reply.cards[0] === "estatuto" || reply.cards[0] === "perimetro");
});

test("memória começa vazia", () => {
  assert.deepEqual(emptyMemory(), { lastCards: [] });
});

test("2025 e 2.510 não são a parcela 25 da depreciação", () => {
  assert.equal(respond("dívida em 2025").cards[0], "divida");
  assert.equal(respond("debt in 2025").cards[0], "divida");
  assert.equal(respond("deuda en 2025").cards[0], "divida");
  assert.equal(respond("Goldman estima 27% em 2025").cards[0], "divida");
  assert.equal(respond("Goldman estima 27% em 2025").kind, "match");
  assert.equal(respond("No otimista a receita é 2.510").cards[0], "otimista");
  assert.equal(respond("What is 2,510 bn?").cards[0], "otimista");
  assert.equal(respond("35% mais 25%").cards[0], "depreciacao");
});

test("5,33× não é o 33% da dívida", () => {
  const reply = respond("O que é o 5,33×?");
  assert.equal(reply.cards[0], "multiplicadores");
  assert.equal(reply.kind, "match");
  assert.equal(respond("What does 5.33× mean?").cards[0], "multiplicadores");
  assert.equal(respond("12,7× se só 2030 variar").cards[0], "multiplicadores");
});

test("a identidade decimal não perde para os operandos", () => {
  assert.equal(respond("755 / 3.805 = 19,8%").cards[0], "cobertura");
  assert.equal(respond("755 / 3.805 = 19,8%").epistemic, "verified");
  const ratio = respond("700 / 260 = 2,69");
  assert.equal(ratio.cards[0], "multiplicadores");
  assert.equal(ratio.epistemic, "verified");
  assert.equal(respond("3.050 / 170 = 17,9").cards[0], "netflix");
  assert.equal(respond("receita 260, depreciação 400,5, capex 700").cards[0], "esteira");
});

test("os chips em inglês e espanhol não caem fora do perímetro", () => {
  assert.equal(respond("Is capex minus revenue a loss?").cards[0], "identidade");
  assert.equal(respond("What does the 2030 stack show?").cards[0], "esteira");
  assert.equal(respond("¿Qué no demuestra esta página?").cards[0], "estatuto");
  assert.equal(respond("¿Capex menos ingresos es pérdida?").cards[0], "identidade");
  assert.equal(respond("¿Qué muestra la cinta en 2030?").cards[0], "esteira");
});
