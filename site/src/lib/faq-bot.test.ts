import assert from "node:assert/strict";
import test from "node:test";
import { emptyMemory, normalize, respond, respondCard } from "./faq-bot.ts";

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

test("o pessimista não herda os 2.510 e os 66% do otimista", () => {
  const en = respond("What about the pessimistic scenario?");
  assert.equal(en.cards[0], "pessimista");
  assert.equal(en.kind, "match");
  assert.equal(en.epistemic, "verified");
  assert.equal(respond("cenário pessimista").cards[0], "pessimista");
  assert.equal(respond("escenario pesimista").cards[0], "pessimista");
  assert.equal(respond("No pessimista a receita acumulada é 325").cards[0], "pessimista");
  assert.equal(respond("a cobertura pessimista é 8,5%").cards[0], "pessimista");
  assert.equal(respond("otimista").cards[0], "otimista");
  assert.equal(respond("otimista").kind, "match");
  assert.equal(respond("optimista").cards[0], "otimista");
  assert.equal(respond("o 66%").cards[0], "otimista");
  assert.equal(respond("What is 66%?").cards[0], "otimista");
  assert.equal(respond("In the optimistic scenario revenue is 2,510").cards[0], "otimista");
  assert.equal(respond("En el optimista el ingreso es 2510").cards[0], "otimista");
});

test("66 da depreciação mista não é a cobertura otimista", () => {
  for (const query of ["depreciação mista 66", "mixed depreciation of 66", "mixta 66"]) {
    const reply = respond(query);
    assert.notEqual(reply.cards[0], "otimista");
    assert.equal(reply.epistemic, "proposed");
  }
  assert.equal(respond("mista").cards[0], "esteira");
});

test("mista e race não casam no meio de outra palavra", () => {
  assert.equal(respond("o que é o tracejado?").kind, "fallback");
  assert.equal(respond("competição").cards[0], "mesmoProduto");
  assert.equal(respond("competição").kind, "match");
  assert.equal(respond("buildings").cards[0], "esteira");
  assert.equal(respond("SPVs").cards[0], "divida");
});

test("faltam dados não é o gap verificado de 3.050", () => {
  for (const query of ["faltam dados", "faltam os dados", "faltan datos", "missing data"]) {
    const reply = respond(query);
    assert.equal(reply.cards[0], "estatuto", query);
    assert.equal(reply.kind, "match", query);
    assert.equal(reply.epistemic, "gap", query);
    assert.equal(reply.cards.includes("gap"), false, query);
  }
  assert.equal(respond("qual é a falta?").cards[0], "gap");
  assert.equal(respond("a falta de 3.050").cards[0], "gap");
  assert.equal(respond("a falta de 3.050").epistemic, "verified");
  assert.equal(respond("está faltando a fonte").cards[0] === "gap", false);
});

test("66 da depreciação não é a cobertura otimista de 2.510", () => {
  for (const query of [
    "depreciação 66",
    "depreciação de 66",
    "66 de depreciação",
    "depreciation of 66",
    "66 depreciation",
    "depreciación 66",
    "66 de depreciación",
    "66 bi",
    "66 bn",
    "66 bilhões",
  ]) {
    const reply = respond(query);
    assert.notEqual(reply.cards[0], "otimista", query);
    assert.notEqual(reply.epistemic, "verified", query);
  }
  for (const query of [
    "depreciação 66",
    "depreciation of 66",
    "depreciación 66",
    "66 bi",
    "66 bn",
    "66 bilhões",
  ]) {
    const reply = respond(query);
    assert.equal(reply.cards[0], "depreciacao", query);
    assert.equal(reply.epistemic, "proposed", query);
  }
  assert.equal(respond("o 66%").cards[0], "otimista");
  assert.equal(respond("What is 66%?").cards[0], "otimista");
});

test("os chips em inglês e espanhol não caem fora do perímetro", () => {
  assert.equal(respond("Is capex minus revenue a loss?").cards[0], "identidade");
  assert.equal(respond("What does the 2030 stack show?").cards[0], "esteira");
  assert.equal(respond("¿Qué no demuestra esta página?").cards[0], "estatuto");
  assert.equal(respond("¿Capex menos ingresos es pérdida?").cards[0], "identidade");
  assert.equal(respond("¿Qué muestra la cinta en 2030?").cards[0], "esteira");
});

test("escolha por id não reclassifica o título do cartão", () => {
  assert.equal(respondCard("escolas").cards[0], "escolas");
  assert.equal(respondCard("autor").cards[0], "autor");
  assert.equal(respondCard("escolas").kind, "match");
  assert.equal(respond("malinvestment").cards[0], "escolas");
});
