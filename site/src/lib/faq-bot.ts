/** Leitor da página: FAQ com memória, entidades e estatuto epistêmico. */

export const CARD_IDS = [
  "titulo",
  "corpus",
  "serie",
  "cobertura",
  "identidade",
  "gap",
  "multiplicadores",
  "netflix",
  "depreciacao",
  "esteira",
  "divida",
  "mesmoProduto",
  "demanda",
  "escolas",
  "etica",
  "estatuto",
  "metodo",
  "perimetro",
  "simulador",
  "otimista",
  "pessimista",
  "autor",
] as const;

export type CardId = (typeof CARD_IDS)[number];

export type Epistemic = "verified" | "inferred" | "proposed" | "gap";

export type ReplyKind = "match" | "clarify" | "fallback" | "who" | "thanks" | "greeting";

export type Memory = {
  lastCards: CardId[];
};

export type Reply = {
  kind: ReplyKind;
  cards: CardId[];
  epistemic: Epistemic | null;
  href: string | null;
  clarify: CardId[];
  memory: Memory;
};

type Card = {
  id: CardId;
  section: string;
  epistemic: Epistemic;
  aliases: readonly string[];
  entities: readonly string[];
  related: readonly CardId[];
};

const EMPTY_MEMORY: Memory = { lastCards: [] };

const CARDS: readonly Card[] = [
  {
    id: "titulo",
    section: "#tese",
    epistemic: "inferred",
    aliases: [
      "titulo",
      "titularidade",
      "alienou",
      "alienar",
      "povo",
      "constituicao",
      "constitution",
      "entitlement",
      "title",
      "pueblo",
      "enajeno",
      "poder emana",
    ],
    entities: [],
    related: ["corpus", "etica", "estatuto"],
  },
  {
    id: "corpus",
    section: "#tese",
    epistemic: "inferred",
    aliases: [
      "corpus",
      "corpora",
      "pesos",
      "weights",
      "pesos aleatorios",
      "sem corpora",
      "without corpora",
      "sin corpora",
      "arquivo",
      "knowledge",
    ],
    entities: [],
    related: ["titulo", "etica"],
  },
  {
    id: "serie",
    section: "#contas",
    epistemic: "verified",
    aliases: [
      "serie",
      "series",
      "cenario base",
      "base case",
      "numeros",
      "numbers",
      "numeros do manifesto",
      "planilha",
      "dados json",
    ],
    entities: ["3805", "755"],
    related: ["cobertura", "gap", "perimetro"],
  },
  {
    id: "cobertura",
    section: "#revisao",
    epistemic: "verified",
    aliases: [
      "roi",
      "cobertura",
      "coverage",
      "razao bruta",
      "gross ratio",
      "razon bruta",
      "retorno",
      "return",
      "receita sobre capex",
      "revenue over capex",
      "nao e roi",
      "not roi",
      "no es roi",
    ],
    entities: ["19.8"],
    related: ["identidade", "multiplicadores", "serie"],
  },
  {
    id: "identidade",
    section: "#contas",
    epistemic: "verified",
    aliases: [
      "prejuizo",
      "deficit",
      "caixa",
      "cash flow",
      "fluxo de caixa",
      "flujo de caja",
      "opex",
      "margem",
      "margin",
      "nao e prejuizo",
      "not a loss",
      "no es perdida",
      "capex minus revenue",
      "capex menos ingresos",
      "identidade",
      "identity",
    ],
    entities: [],
    related: ["cobertura", "gap", "esteira"],
  },
  {
    id: "gap",
    section: "#contas",
    epistemic: "verified",
    aliases: [
      "gap acumulado",
      "diferenca acumulada",
      "diferencia acumulada",
      "cumulative gap",
      "falta",
      "buraco",
    ],
    entities: ["3050"],
    related: ["serie", "multiplicadores", "perimetro"],
  },
  {
    id: "multiplicadores",
    section: "#revisao",
    epistemic: "verified",
    aliases: [
      "multiplicador",
      "multiplier",
      "empatar",
      "empatar o acumulado",
      "break even",
      "breakeven",
      "igualar",
      "2.7x",
      "2.69x",
      "5x",
      "5.0x",
      "nao fecha",
      "does not close",
      "no cierra",
    ],
    entities: ["2.69", "2.7", "5.04", "5.0", "5.33", "12.7"],
    related: ["cobertura", "gap", "netflix"],
  },
  {
    id: "netflix",
    section: "#revisao",
    epistemic: "verified",
    aliases: [
      "netflix",
      "assinantes",
      "subscribers",
      "suscriptores",
      "assinatura",
      "subscription",
    ],
    entities: ["17.9"],
    related: ["multiplicadores", "gap"],
  },
  {
    id: "depreciacao",
    section: "#esteira",
    epistemic: "proposed",
    aliases: [
      "depreciacao",
      "depreciation",
      "depreciacion",
      "vida util",
      "useful life",
      "vida util de 3",
      "tres anos",
      "three years",
      "3 anos",
      "3 years",
      "3 anos",
      "heuristica",
      "35 25",
      "servidores",
      "gpus",
    ],
    entities: ["5.5", "35", "25"],
    related: ["esteira", "identidade"],
  },
  {
    id: "esteira",
    section: "#esteira",
    epistemic: "proposed",
    aliases: [
      "esteira",
      "mista",
      "mixta",
      "mixed",
      "60 40",
      "silicio",
      "silicon",
      "casca",
      "building",
      "stack",
      "cinta",
      "400.5",
    ],
    entities: ["400.5", "482", "677", "260", "700"],
    related: ["depreciacao", "identidade"],
  },
  {
    id: "divida",
    section: "#tese",
    epistemic: "inferred",
    aliases: [
      "divida",
      "debt",
      "deuda",
      "spv",
      "project finance",
      "endividado",
      "hyperscalers",
      "credito",
      "credit",
    ],
    entities: ["27", "33"],
    related: ["perimetro", "metodo"],
  },
  {
    id: "mesmoProduto",
    section: "#tese",
    epistemic: "proposed",
    aliases: [
      "mesmo produto",
      "same product",
      "mismo producto",
      "duplicacao",
      "duplication",
      "duplicacion",
      "corrida",
      "race",
      "competicao",
      "competition",
      "sobrepostos",
      "overlapping",
    ],
    entities: [],
    related: ["demanda", "simulador"],
  },
  {
    id: "demanda",
    section: "#tese",
    epistemic: "proposed",
    aliases: [
      "demanda que se apaga",
      "demanda que se apaga",
      "erases demand",
      "demanda que borra",
      "salario substituido",
      "salary replacement",
      "salario sustituido",
      "renda do trabalho",
      "labor income",
      "automacao",
      "automation",
    ],
    entities: [],
    related: ["mesmoProduto", "simulador", "etica"],
  },
  {
    id: "escolas",
    section: "#escolas",
    epistemic: "inferred",
    aliases: [
      "escolas",
      "schools",
      "escuelas",
      "austriaca",
      "austrian",
      "malinvestment",
      "malinvestimento",
      "mises",
      "hayek",
      "keynesiana",
      "keynesian",
      "monetarista",
      "monetarist",
      "institucionalista",
      "institutionalist",
      "financeira",
      "financial school",
    ],
    entities: [],
    related: ["etica", "perimetro"],
  },
  {
    id: "etica",
    section: "#escolas",
    epistemic: "inferred",
    aliases: [
      "etica",
      "ethics",
      "sexta",
      "sixth",
      "normativa",
      "normative",
      "disciplina a tese",
      "does not replace",
    ],
    entities: [],
    related: ["titulo", "escolas", "estatuto"],
  },
  {
    id: "estatuto",
    section: "#estatuto",
    epistemic: "gap",
    aliases: [
      "estatuto",
      "status of this page",
      "verificado",
      "verified",
      "inferido",
      "inferred",
      "proposto",
      "proposed",
      "lacuna",
      "what is not proven",
      "nao prova",
      "does not prove",
      "no prueba",
      "no demuestra",
      "o que nao esta provado",
      "faltam dados",
      "faltan datos",
      "missing data",
    ],
    entities: [],
    related: ["perimetro", "metodo"],
  },
  {
    id: "metodo",
    section: "#metodo",
    epistemic: "verified",
    aliases: [
      "metodo",
      "method",
      "fontes",
      "sources",
      "fuentes",
      "goldman",
      "mckinsey",
      "bloomberg",
      "10-k",
      "form 10-k",
      "benchmark",
    ],
    entities: [],
    related: ["perimetro", "serie"],
  },
  {
    id: "perimetro",
    section: "#metodo",
    epistemic: "gap",
    aliases: [
      "perimetro",
      "perimeter",
      "se sustenta",
      "insustentavel",
      "unsustainable",
      "does not hold",
      "hold up",
      "sostiene",
      "sostenible",
      "prova matematica",
      "mathematical proof",
      "conclusao condicional",
      "conditional conclusion",
      "ponte auditavel",
      "auditable bridge",
    ],
    entities: [],
    related: ["estatuto", "cobertura", "metodo"],
  },
  {
    id: "simulador",
    section: "#simulador",
    epistemic: "proposed",
    aliases: [
      "simulador",
      "simulator",
      "controles",
      "sliders",
      "leitura do autor",
      "author reading",
      "lectura del autor",
    ],
    entities: [],
    related: ["demanda", "mesmoProduto", "multiplicadores"],
  },
  {
    id: "otimista",
    section: "#contas",
    epistemic: "verified",
    aliases: [
      "otimista",
      "optimistic",
      "optimista",
      "cenario otimista",
    ],
    entities: ["66", "2510"],
    related: ["cobertura", "serie"],
  },
  {
    id: "pessimista",
    section: "#contas",
    epistemic: "verified",
    aliases: [
      "pessimista",
      "pessimistic",
      "pesimista",
      "cenario pessimista",
      "pessimistic scenario",
      "escenario pesimista",
    ],
    entities: ["325", "8.5"],
    related: ["otimista", "cobertura", "serie"],
  },
  {
    id: "autor",
    section: "#estatuto",
    epistemic: "verified",
    aliases: [
      "autor",
      "author",
      "lucas",
      "almeida",
      "iniciativa via",
      "via initiative",
      "human-gate",
      "human gate",
      "lavras",
      "medico",
      "physician",
    ],
    entities: [],
    related: ["etica", "estatuto"],
  },
];

const STOP = new Set([
  "o",
  "a",
  "os",
  "as",
  "de",
  "da",
  "do",
  "das",
  "dos",
  "e",
  "ou",
  "um",
  "uma",
  "uns",
  "em",
  "no",
  "na",
  "que",
  "se",
  "por",
  "para",
  "com",
  "the",
  "an",
  "of",
  "and",
  "or",
  "is",
  "are",
  "to",
  "in",
  "on",
  "for",
  "this",
  "that",
  "it",
  "el",
  "la",
  "los",
  "las",
  "un",
  "una",
  "y",
  "en",
  "del",
  "al",
  "es",
  "esta",
  "este",
  "eso",
]);

const GREETING = /^(oi|ola|hey|hi|hello|hola|bom dia|boa tarde|boa noite|buenas|good morning|good afternoon)$/;
const THANKS = /^(obrigad[oa]s?|valeu|thanks|thank you|gracias|vale)$/;
const WHO =
  /\b(quem e voce|o que voce e|voce e uma? ia|who are you|what are you|are you (an? )?ai|quien eres|que eres|eres una? ia|chatgpt|llm)\b/;
const FOLLOW_UP =
  /^(por que|porque|why|por que razao|e o|e a|e isso|e dai|and that|and the|y eso|y el|y la|isso e|is that|eso es|mais|more|mas|explica|explica melhor|nao entendi|i don t understand|no entiendo|ok|e)$/;

export function normalize(raw: string): string {
  const folded = raw.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  return folded
    .replace(/[×]/g, "x")
    .replace(/\b(\d{1,3})[.,](\d{3})\b/g, "$1$2")
    .replace(/(\d),(\d+)/g, "$1.$2")
    // The page writes the mix and the 2030 ratio as 60/40 and 700/260.
    // A slash glues each pair into one token, so the mix is refused.
    .replace(/(\d)\s*\/\s*(\d)/g, "$1 $2")
    .replace(/[^\p{L}\p{N}.\s%/x-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokensOf(text: string): Set<string> {
  return new Set(text.split(" ").filter((token) => token && !STOP.has(token)));
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Figures are whole tokens. A bare includes() reads 25 inside 2025 and 2.510,
// and 33 inside 5.33, then stamps the wrong card and the wrong statute.
// A letter glued in front is the same miss: "mista" sits inside "otimista",
// "pessimista" and "pesimista", and "race" sits inside "tracejado".
function containsTerm(text: string, term: string): boolean {
  if (!/\d/.test(term)) {
    const pattern = new RegExp(`(?<![\\p{L}])${escapeRegExp(term)}`, "u");
    return pattern.test(text);
  }
  const pattern = new RegExp(`(?<![\\d.])${escapeRegExp(term)}(?![\\d.])`);
  return pattern.test(text);
}

// "falta" is the 3,050 shortfall. Without a trailing boundary the verb
// faltam/faltan/faltando shares that stem, and "faltam dados" is answered
// as the verified cumulative gap.
function matchesAlias(text: string, alias: string): boolean {
  if (alias === "falta") {
    return /(?<![\p{L}])faltas?(?![\p{L}])/u.test(text);
  }
  return containsTerm(text, alias);
}

function namesDepreciation(text: string): boolean {
  return containsTerm(text, "deprecia");
}

function amountOf(text: string, number: string): boolean {
  return new RegExp(
    `(?<![\\d.])${escapeRegExp(number)}\\s*(?:bi|bn|bilh\\p{L}*|billion\\p{L}*|mil)\\b`,
    "u",
  ).test(text);
}

function percentOf(text: string, number: string): boolean {
  return new RegExp(
    `(?<![\\d.])${escapeRegExp(number)}\\s*(?:%|por\\s+cento|por\\s+ciento|percent\\p{L}*)`,
    "u",
  ).test(text);
}

function namesRevenue(text: string): boolean {
  return containsTerm(text, "receita") || containsTerm(text, "revenue") || containsTerm(text, "ingreso");
}

function namesBaseSeries(text: string): boolean {
  return (
    containsTerm(text, "cenario base") ||
    containsTerm(text, "escenario base") ||
    containsTerm(text, "base case")
  );
}

function namesPessimistic(text: string): boolean {
  return containsTerm(text, "pessimist") || containsTerm(text, "pesimist");
}

function namesOptimistic(text: string): boolean {
  return containsTerm(text, "otimist") || containsTerm(text, "optimist");
}

function namesSubscribers(text: string): boolean {
  return (
    containsTerm(text, "assinant") ||
    containsTerm(text, "assinatur") ||
    containsTerm(text, "subscriber") ||
    containsTerm(text, "suscriptor") ||
    containsTerm(text, "netflix")
  );
}

// 66% is the optimistic coverage ratio. 66 bi / bn / bilhões is the 2024
// mixed-depreciation point, not 2,510.
function sixtySixIsAmount(text: string): boolean {
  return amountOf(text, "66");
}

function namesMixedDepreciation(text: string): boolean {
  return containsTerm(text, "mista") || containsTerm(text, "mixta") || containsTerm(text, "mixed");
}

// 25 on the revenue series is US$ 25 bi in 2025. The depreciation card's 25
// is a percent. An amount or a revenue question must not inherit that rule.
function revenueTwentyFive(text: string): boolean {
  if (!containsTerm(text, "25") || percentOf(text, "25") || namesDepreciation(text)) return false;
  return amountOf(text, "25") || namesRevenue(text) || namesBaseSeries(text);
}

// 2026 pessimistic revenue is 35 bi. Bare 35 bi stays the published
// depreciation amount. Naming that revenue on the pessimistic path does not.
function pessimisticRevenueThirtyFive(text: string): boolean {
  if (!containsTerm(text, "35") || percentOf(text, "35") || namesDepreciation(text)) return false;
  if (!namesPessimistic(text)) return false;
  return namesRevenue(text) || amountOf(text, "35");
}

// 2029 optimistic revenue is 700. The stack's 700 is capex, and that card
// states revenue 260. Capex in the question keeps the stack.
function optimisticRevenueSevenHundred(text: string): boolean {
  if (!containsTerm(text, "700") || !namesOptimistic(text) || !namesRevenue(text)) return false;
  return !containsTerm(text, "capex");
}

// 3,050 / 170 is the subscriber equivalence, not a restatement of the gap.
function subscriberDivision(text: string): boolean {
  return containsTerm(text, "3050") && (containsTerm(text, "170") || namesSubscribers(text));
}

// 700 and 260 together are the verified 2.69× identity, unless the question
// is the depreciation stack that also lists 400.5, 482 and 677.
function is2030CapexOverRevenue(text: string): boolean {
  if (!containsTerm(text, "700") || !containsTerm(text, "260")) return false;
  if (namesDepreciation(text) || namesMixedDepreciation(text)) return false;
  if (containsTerm(text, "400.5") || containsTerm(text, "482") || containsTerm(text, "677")) return false;
  if (containsTerm(text, "esteira") || containsTerm(text, "stack") || containsTerm(text, "cinta")) return false;
  return true;
}

function entityIsForeign(cardId: CardId, entity: string, text: string): boolean {
  if (
    cardId === "otimista" &&
    entity === "66" &&
    (namesMixedDepreciation(text) || namesDepreciation(text) || sixtySixIsAmount(text))
  ) {
    return true;
  }
  if (cardId === "depreciacao" && entity === "25" && revenueTwentyFive(text)) return true;
  if (cardId === "depreciacao" && entity === "35" && pessimisticRevenueThirtyFive(text)) return true;
  if (cardId === "esteira" && entity === "700" && optimisticRevenueSevenHundred(text)) return true;
  if (cardId === "gap" && entity === "3050" && subscriberDivision(text)) return true;
  return false;
}

function isFollowUp(text: string): boolean {
  return FOLLOW_UP.test(text);
}

function scoreCard(card: Card, text: string, tokens: Set<string>): number {
  let score = 0;
  for (const alias of card.aliases) {
    const folded = normalize(alias);
    if (!folded) continue;
    if (matchesAlias(text, folded)) {
      score += folded.includes(" ") ? 4 : 3;
      continue;
    }
    const parts = folded.split(" ").filter((part) => part && !STOP.has(part));
    if (parts.length > 1 && parts.every((part) => tokens.has(part))) {
      score += 3;
    }
  }
  for (const entity of card.entities) {
    // A decimal identity has to outrank the two integers it is built from
    // (each +6, sum 12). 12 / 0.85 is the line where the runner-up forces a clarify.
    // A foreign reading of the same digits (25 bi, pessimistic 35, optimistic
    // revenue 700, 3,050/170) must not take the point.
    if (!entityIsForeign(card.id, entity, text) && containsTerm(text, entity)) {
      score += entity.includes(".") ? 15 : 6;
    }
    if (entity === "2.69" && (containsTerm(text, "2.7x") || /\b2\.7\b/.test(text))) score += 5;
    if (entity === "5.04" && (containsTerm(text, "5x") || /\b5\.0\b/.test(text))) score += 4;
  }
  if (card.id === "depreciacao" && sixtySixIsAmount(text)) score += 6;
  if (card.id === "serie" && revenueTwentyFive(text)) score += 6;
  // Above the stack's 6+6 and above the 0.7 extra-card line (20 * 0.7 = 14).
  if (card.id === "multiplicadores" && is2030CapexOverRevenue(text)) score += 20;
  if (card.id === "netflix" && subscriberDivision(text)) score += 8;
  return score;
}

function ranked(text: string, tokens: Set<string>, memory: Memory): { card: Card; score: number }[] {
  const rows = CARDS.map((card) => ({ card, score: scoreCard(card, text, tokens) }));
  if (isFollowUp(text) && memory.lastCards.length > 0) {
    for (const row of rows) {
      if (memory.lastCards.includes(row.card.id)) row.score += 2.5;
      if (memory.lastCards.some((id) => cardById(id).related.includes(row.card.id))) {
        row.score += 1.8;
      }
    }
  }
  return rows.sort((a, b) => b.score - a.score || a.card.id.localeCompare(b.card.id));
}

const CARD_BY_ID: Record<CardId, Card> = Object.fromEntries(CARDS.map((card) => [card.id, card])) as Record<
  CardId,
  Card
>;

function cardById(id: CardId): Card {
  return CARD_BY_ID[id];
}

function pack(kind: ReplyKind, ids: CardId[], memoryCards: CardId[], clarify: CardId[] = []): Reply {
  const primary = ids[0];
  const card = primary ? cardById(primary) : null;
  return {
    kind,
    cards: ids,
    epistemic: card?.epistemic ?? null,
    href: card?.section ?? null,
    clarify,
    memory: { lastCards: memoryCards },
  };
}

export function respond(query: string, memory: Memory = EMPTY_MEMORY): Reply {
  const text = normalize(query);
  if (!text) return pack("greeting", [], memory.lastCards);

  if (GREETING.test(text)) return pack("greeting", [], memory.lastCards);
  if (THANKS.test(text)) return pack("thanks", [], memory.lastCards);
  if (WHO.test(text)) return pack("who", ["autor"], ["autor"]);

  if (isFollowUp(text) && memory.lastCards[0]) {
    const last = cardById(memory.lastCards[0]);
    const next = last.related[0];
    const ids = next ? [next, last.id] : [last.id];
    return pack("match", ids, ids);
  }

  const tokens = tokensOf(text);
  const rows = ranked(text, tokens, memory);
  const top = rows[0];
  const second = rows[1];

  if (!top || top.score < 2.5) {
    if (isFollowUp(text) && memory.lastCards[0]) {
      const last = cardById(memory.lastCards[0]);
      const next = last.related[0] ? [last.id, last.related[0]] : [last.id];
      return pack("match", next, next);
    }
    return pack("fallback", [], memory.lastCards);
  }

  const close =
    second &&
    second.score >= 2.5 &&
    second.score >= top.score * 0.85 &&
    !top.card.related.includes(second.card.id) &&
    top.card.id !== second.card.id &&
    !isFollowUp(text);

  if (close) {
    return pack("clarify", [], memory.lastCards, [top.card.id, second.card.id]);
  }

  const extras = rows
    .filter((row) => row.card.id !== top.card.id && row.score >= 3 && row.score >= top.score * 0.7)
    .slice(0, 1)
    .map((row) => row.card.id);

  const ids = [top.card.id, ...extras];
  return pack("match", ids, ids);
}

export function respondCard(id: CardId, _memory: Memory = EMPTY_MEMORY): Reply {
  return pack("match", [id], [id]);
}

export function emptyMemory(): Memory {
  return { lastCards: [] };
}

export function cardSection(id: CardId): string {
  return cardById(id).section;
}

export function cardEpistemic(id: CardId): Epistemic {
  return cardById(id).epistemic;
}
