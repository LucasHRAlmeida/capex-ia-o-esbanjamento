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
      "mixed",
      "60 40",
      "silicio",
      "silicon",
      "casca",
      "building",
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
      "o que nao esta provado",
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
      "pessimista",
      "pessimistic",
      "cenario otimista",
    ],
    entities: ["66"],
    related: ["cobertura", "serie"],
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
    .replace(/[^\p{L}\p{N}.\s%/x-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokensOf(text: string): Set<string> {
  return new Set(text.split(" ").filter((token) => token && !STOP.has(token)));
}

function isFollowUp(text: string): boolean {
  return FOLLOW_UP.test(text);
}

function scoreCard(card: Card, text: string, tokens: Set<string>): number {
  let score = 0;
  for (const alias of card.aliases) {
    const folded = normalize(alias);
    if (!folded) continue;
    if (text.includes(folded)) {
      score += folded.includes(" ") ? 4 : 3;
      continue;
    }
    const parts = folded.split(" ").filter((part) => part && !STOP.has(part));
    if (parts.length > 1 && parts.every((part) => tokens.has(part))) {
      score += 3;
    }
  }
  for (const entity of card.entities) {
    if (text.includes(entity)) score += 6;
    if (entity === "2.69" && (text.includes("2.7x") || /\b2\.7\b/.test(text))) score += 5;
    if (entity === "5.04" && (text.includes("5x") || /\b5\.0\b/.test(text))) score += 4;
  }
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

export function emptyMemory(): Memory {
  return { lastCards: [] };
}

export function cardSection(id: CardId): string {
  return cardById(id).section;
}

export function cardEpistemic(id: CardId): Epistemic {
  return cardById(id).epistemic;
}
