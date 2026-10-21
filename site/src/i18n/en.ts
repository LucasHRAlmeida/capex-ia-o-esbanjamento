import type { Dict } from "./pt";

export const en: Dict = {
  meta: {
    title: "The Title and the Capex",
    description:
      "The people did not alienate the title. AI capex does not hold up: a review of the arithmetic of waste and the ethical thesis of the demand that the product itself erases.",
  },
  ui: {
    language: "Language",
    modulesAria: "Modules",
    sectionsAria: "Sections of this analysis",
    openSource: "Open source ↗",
    unit: "bn",
    siteTitle: "The Title and the Capex",
  },
  nav: {
    tese: "Thesis",
    contas: "Accounts",
    revisao: "Review",
    metodo: "Method & sources",
    esteira: "Depreciation",
    simulador: "Simulator",
    estatuto: "Status",
  },
  modules: {
    economia: "Economics",
    soberania: "Sovereignty",
    literacia: "Literacy",
  },
  footer: {
    left: "Dr. Lucas HR Almeida · VIA Initiative · Lavras, Brazil, September 24, 2026",
    right: "Nil satis nisi optimum.",
  },
  hero: {
    kicker: "VIA Initiative · Economics module · audit of the manifesto",
    h1a: "What the numbers show.",
    h1b: "And what they still cannot prove.",
    lead: "The manifesto's series is an authorial scenario, not a consolidated measurement of the market. The arithmetic can be reproduced; the perimeter, the revenue expectations and the useful life of the assets remain open hypotheses.",
    quote: "“Whoever did not alienate the title did not lose it because someone else administers it.”",
    quoteNote:
      "Strong thesis, September 20, 2026. Text settled on September 23, Lavras. Brazilian Constitution, art. 1, sole paragraph: all power emanates from the people.",
    figs: [
      { k: "Spend 2023–2030", v: "3,805 bn", n: "The sum checks out." },
      { k: "Revenue / capex, base case", v: "19.8%", n: "Gross ratio, not ROI or cash flow." },
      { k: "To break even on the cumulative", v: "5.0×", n: "Not 2.7×. That other number only covers one year." },
    ],
  },
  tese: {
    title: "The thesis the arithmetic alone does not state",
    intro:
      "The four propositions below are the author's normative interpretation. They are not results deduced from the spreadsheet and receive no statistical probability on this page.",
    claims: [
      {
        n: "I",
        title: "The title",
        body: "Public language, the archive, the capacity to act as an agent and the visibility of mediation were not transferred to those who hold compute and interface. The knowledge from which weights are extracted is the accumulation of civilization. It was not born in the data center. The algorithm, without a corpus, does not found original property.",
      },
      {
        n: "II",
        title: "The same product",
        body: "Author's hypothesis: vendors compress overlapping corpora, sell substitutable inference and may duplicate capacity through strategic competition. The series does not measure product overlap, utilization or customers.",
      },
      {
        n: "III",
        title: "The demand that erases itself",
        body: "Author's hypothesis: if automation reduces labor income faster than it creates productivity and new income and demand, part of the paying base itself contracts. The net effect depends on prices, distribution and the responses of firms, households and the State.",
      },
      {
        n: "IV",
        title: "The debt",
        body: "There is corporate debt, project finance, private credit and SPVs in the financing of the expansion, but the share changes by year and perimeter. Goldman Sachs estimates 27% of hyperscaler capex financed by debt issuance in 2025 and projects 33% in 2026; this does not show that a third of all global capex is already debt-financed.",
      },
    ],
    closing:
      "The usurpation named here is one of title, on the constitutional and deontological plane. It is not, in this record, a criminal offense. A paywall is not a public function. Naming the expropriation without pretending to a verdict is the cut of the strong thesis — and this page preserves it.",
  },
  charts: {
    capex: "Capex",
    base: "Base",
    otimista: "Optimistic",
    pessimista: "Pessimistic",
    publicada: "Published",
    vida3: "3-year life",
    mista: "Mixed",
    receitaBase: "Base revenue",
    empate: "Parity",
  },
  contas: {
    title: "The manifesto's scenario, as published",
    intro:
      "Authorial series from the repository, in billions of dollars. It combines historical and future years without marking the boundary or citing the origin of each observation. It serves to test a thesis under three revenue trajectories; it should not be read as market consensus. In the scenario called “optimistic”, cumulative revenue equals 66% of cumulative capex.",
    chartNote: "Bars: capex. Light line: base revenue. Green: optimistic. Dashed: pessimistic.",
    headers: [
      "Year",
      "Capex",
      "Base",
      "Capex − revenue",
      "Revenue / capex",
      "Published deprec.",
      "Optimistic",
      "Pessimistic",
    ],
    sum: "Total",
    note: "“Capex − revenue” is neither a loss nor a cash deficit: it compares an investment that generates durable assets with gross revenue, without margin, opex, taxes, working capital, residual value or cost of capital. The column is kept only as an identity of the scenario.",
  },
  revisao: {
    title: "What the review did to the arithmetic",
    intro:
      "The series' internal arithmetic checks out: sums, annual gaps, cumulative returns, depreciation heuristic. That validates the operations, not the premises or the conclusion. The review separates mathematical identities, scenarios and claims about the world.",
    fixes: [
      {
        title: "2.69× equates two 2030 values. It does not solve the series.",
        body: "Seven hundred divided by two hundred sixty is 2.69. That equates revenue and capex in the year 2030. For cumulative revenue to equal cumulative capex, every year would need to be 5.04 times the base. If only 2026 onward varies, 5.33 times; if only 2030 varies, 12.7 times. None of these identities is, by itself, economic break-even.",
      },
      {
        title: "17.9 billion is an annual-revenue equivalent, not a subscriber base.",
        body: "The number comes from 3,050 bn divided by about US$ 170 per subscription-year. It translates an eight-year cumulative difference into a single hypothetical year of billing, without costs, taxes, churn or ability to pay. The 2030 value alone would give about 2.6 billion subscription-years. Neither measures an addressable market.",
      },
      {
        title: "Three years is a stress test, not a demonstrated useful life.",
        body: "The published rule — 35% of the prior year plus 25% of two years back — does not represent three-year straight-line depreciation. Applying three years to all capex yields 677 bn in 2030, but mixes chips, buildings, energy and works not yet operational. Meta reports 5.5 years for most servers and network; other companies use different policies. The uncertainty is material.",
      },
      {
        title: "Not all capex is chips — and revenue is not compared with depreciation as cash.",
        body: "An illustrative mix — 60% silicon over three years, 40% shell over twenty — yields 482 bn in 2030. The 60/40 split was not measured. Moreover, depreciation is a non-cash accounting expense; gross revenue above or below it does not, on its own, show positive or negative operating cash flow.",
      },
      {
        title: "19.8% is gross coverage, not ROI.",
        body: "Seven hundred fifty-five divided by 3,805 gives 19.8%. ROI would require at least profit or incremental cash flow in the numerator and consistent treatment of time, residual assets and cost of capital. The page now calls the metric what it is: cumulative revenue divided by cumulative capex.",
      },
    ],
  },
  metodo: {
    title: "Method and provenance",
    intro:
      "Audit carried out on October 1, 2026. “Checks out” means the operation can be reproduced. “Source” identifies where a value came from. “Benchmark” only delimits plausibility: it does not turn projection into fact.",
    sources: [
      {
        status: "Internal series",
        title: "dados.json · VIA manifesto",
        detail:
          "Origin of the vectors shown. It does not give a per-row source, the perimeter of “AI”, constant currency, the cut between observed and projected, or a base date.",
      },
      {
        status: "Projected benchmark",
        title: "Goldman Sachs · Tracking Trillions",
        detail:
          "Projects US$ 7.6 trillion over 2026–2031 and publishes assumptions on compute, data centers and energy. It shows that value and perimeter depend on the model; it does not validate the VIA series.",
      },
      {
        status: "Projected benchmark",
        title: "McKinsey · data centers through 2030",
        detail:
          "Estimates more than US$ 1.7 trillion globally, excluding IT hardware. The exclusion prevents direct comparison with a series that mixes infrastructure and compute.",
      },
      {
        status: "Primary source",
        title: "Meta 2025 Form 10-K · servers and network",
        detail:
          "Discloses an estimated useful life of 5.5 years for most server and network assets. It is one company's accounting policy, not a universal physical life of GPUs.",
      },
      {
        status: "Identified estimate",
        title: "Goldman Sachs · AI-linked debt",
        detail:
          "Estimates issuance equivalent to 27% of hyperscaler capex in 2025 and projects 33% in 2026. The cut itself excludes project finance from the ratio.",
      },
      {
        status: "Demand counterpoint",
        title: "Bloomberg Intelligence · generative AI market",
        detail:
          "Projects US$ 2.3 trillion in 2032 on a broad perimeter. It is not directly comparable to the manifesto's “AI revenue”, but it shows the dispersion of expectations.",
      },
    ],
    openTitle: "Question still open:",
    openBody:
      "this series has no auditable bridge between global capex, incremental revenue attributable to AI and the cash flow of the same economic agents. Without the same perimeter on both sides, “sustainable” or “unsustainable” remains a conditional conclusion, not a mathematical proof.",
  },
  esteira: {
    title: "Depreciation: three models, no hidden certainty",
    chartNote:
      "Green: published heuristic. Teal: three years, straight line. Dashed: proposed mix. Light: base revenue.",
    text: "In 2030 base revenue is 260. The depreciation the manifesto prints is 400. The one printed by the extreme three-year hypothesis on all capex is 677. This tests accounting sensitivity; it does not prove negative cash. Revenue, depreciation and capex are of different natures and would only be comparable in consistent financial statements.",
    bars: {
      receita: "Base revenue, 2030",
      publicada: "Published depreciation",
      mista: "Mixed depreciation",
      vida3: "3-year life",
      capex: "Capex of the year",
    },
    coverageNote:
      "Cumulative revenue / cumulative capex. The teal line marks arithmetic parity, 100% — not economic break-even. The optimistic scenario reaches 66% in 2030.",
  },
  simulador: {
    title: "The scenario, in controls",
    intro:
      "Three hypotheses, deliberately kept separate. Growing revenue tests the corrected identity. Treating part of it as replaced salary and part of capex as competitive duplication are user choices, not estimates. The simulator shows consequences, not probabilities.",
  },
  sim: {
    title: "Identity simulator",
    manifesto: "Manifesto accounts",
    autor: "Author's reading",
    sliders: [
      {
        label: "Revenue from 2026 on",
        hint: "1× is the base. Breaking even on the cumulative, with the past fixed, takes about 5.3× from here on.",
      },
      {
        label: "Share of future revenue that is merely replaced salary",
        hint: "Not a measured elasticity. It is the identity: a salary transfer is not new demand.",
      },
      {
        label: "Share of capex that is the same product, built again",
        hint: "Author's hypothesis of competitive duplication. The control does not estimate utilization, differentiation or residual value.",
      },
    ],
    stats: {
      cobertura: "Cumulative revenue / capex",
      receita: "Recognizable revenue",
      gap: "Capex − revenue",
      duplicado: "Capex treated as duplicated",
      fator: "Factor for gross parity",
      fecha: "Revenue ≥ capex",
    },
    none: "n/a",
    yes: "yes",
    no: "no",
    authorText:
      "Author's reading, illustrative — not an estimate: seventy percent of future revenue is treated as replaced salary, and half of the hardware as a race for the same product. The revenue/capex ratio falls from 19.8% to the single digits.",
    dragText:
      "Drag. The ratio keeps the 3,805 bn in the denominator. It is not ROI or cash flow: it does not include margin, operating expenses, taxes, residual value or cost of capital.",
  },
  escolas: {
    title: "Five readings — not five independent validations",
    intro:
      "The formulations below are interpretive lenses of the manifesto. They are not a consensus among schools nor additional evidence. Claims without a verifiable source were removed; the economic disagreement remains visible.",
    list: [
      {
        name: "Austrian",
        text: "May read excess capacity as malinvestment; “inevitable correction” would require assumptions about credit, prices and demand that the series does not contain.",
      },
      {
        name: "Keynesian",
        text: "May treat investment as support for aggregate demand; the net effect depends on imports, crowding out, productivity and fiscal response.",
      },
      {
        name: "Monetarist",
        text: "Highlights bottlenecks in energy, turbines and grid; localized resource pressure does not demonstrate persistent general inflation.",
      },
      {
        name: "Institutionalist",
        text: "Allows capacity to be rational as strategic power even with low financial return; the model does not quantify that value.",
      },
      {
        name: "Financial",
        text: "Requires cash flows, margins, cost of capital, debt and terminal value in the same perimeter. The current series does not contain enough data for that verdict.",
      },
    ],
    sextaKicker: "Sixth · ethics of entitlement",
    sextaTitle: "The mathematics disciplines the thesis. It does not replace economics.",
    sextaBody:
      "The argument of entitlement, corpus and power remains the author's normative position. The economic outcome, in turn, depends on adoption, prices, productivity, distribution, competition, financing and public policy. The page assigns no probabilities where there is no estimated model, nor does it call a scenario proof.",
  },
  estatuto: {
    title: "Status of this page",
    status: [
      {
        k: "Verified",
        body: "Sums, differences and ratios match the manifesto's file. 700/260 = 2.69. 3,805/755 = 5.04. The 35/25 heuristic was reproduced; alternative depreciation scenarios were recalculated.",
      },
      {
        k: "Inferred",
        body: "The risk of excess capacity, financial pressure and a dispute over title is a plausible interpretation. It does not necessarily follow from the revenue/capex ratio and receives no empirical probability.",
      },
      {
        k: "Proposed",
        body: "Salary replacement and competitive duplication in the simulator are chosen parameters. The 60/40 mix and the three-year life are sensitivities. They are not central estimates.",
      },
      {
        k: "Gap",
        body: "Line-by-line source for the series; common definition of capex and revenue; observed/projected cut; margins, opex, taxes, residual value, cost of capital; measured split of assets; calibrated probability distribution.",
      },
    ],
    thesis:
      "Author's thesis: what matters is the necessary technology, enough — not excess. The audit preserves this hypothesis without converting human expectation into numerical certainty.",
    name: "Dr. Lucas HR Almeida",
    role: "Physician · VIA Initiative · Human-gate · Lavras, Minas Gerais",
    notes:
      "Origin manifesto: repository capex-ia-o-esbanjamento, September 24, 2026. Economic audit: October 1, 2026. Informational sovereignty at iniciativa-via.com.",
  },
};
