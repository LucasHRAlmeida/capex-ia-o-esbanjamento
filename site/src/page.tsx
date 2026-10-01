import { CapexChart, CoverageChart, DeprecChart } from "./components/ledger-charts";
import { Simulator } from "./components/simulator";
import {
  CAPEX,
  DEPREC_MISTA,
  DEPREC_PUBLICADA,
  DEPREC_SL3,
  GAP_ACUMULADO,
  RECEITA,
  COBERTURA_BASE,
  YEARS,
  bi,
} from "./lib/ledger";

const NAV = [
  ["#tese", "Tese"],
  ["#contas", "Contas"],
  ["#revisao", "Revisão"],
  ["#metodo", "Método e fontes"],
  ["#esteira", "Esteira"],
  ["#simulador", "Simulador"],
  ["#estatuto", "Estatuto"],
] as const;

const MODULES = [
  ["#contas", "Economia"],
  ["https://iniciativa-via.com/via-hub/soberania-informacional/", "Soberania"],
  ["https://iniciativa-via.com/via-hub/via-literacia-programacao-github/", "Literacia"],
] as const;

export function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line bg-ink/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <a href="#topo" className="font-serif text-lg tracking-tight text-bone">
              O título e o capex
            </a>
            <nav className="flex gap-1" aria-label="Módulos">
              {MODULES.map(([href, label], index) => (
                <a
                  key={href}
                  href={href}
                  aria-current={index === 0 ? "page" : undefined}
                  className={`border px-2.5 py-1.5 text-xs whitespace-nowrap ${
                    index === 0
                      ? "border-oxide bg-oxide text-bone"
                      : "border-line text-muted hover:border-bone hover:text-bone"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <nav className="flex min-w-0 flex-nowrap gap-1 overflow-x-auto" aria-label="Seções desta análise">
            {NAV.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 px-2 py-2 text-sm whitespace-nowrap text-muted hover:text-bone"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="topo">
        <Hero />
        <Tese />
        <Contas />
        <Revisao />
        <Metodo />
        <Esteira />
        <SimuladorSection />
        <Escolas />
        <Estatuto />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between">
          <p>Dr. Lucas HR Almeida · Iniciativa VIA · Lavras, 24 de setembro de 2026</p>
          <p>Nil satis nisi optimum.</p>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-oxide">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8">
          <p className="text-xs tracking-[0.22em] text-oxide uppercase">
            Iniciativa VIA · módulo Economia · auditoria do manifesto
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-medium tracking-tight text-bone md:text-7xl">
            O que os números mostram.
            <span className="mt-3 block text-bone-dim">E o que continuam sem poder provar.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-snug text-bone-dim">
            A série do manifesto é um cenário autoral, não uma medição consolidada do mercado.
            A aritmética pode ser reproduzida; o perímetro, as expectativas de receita e a vida
            útil dos ativos permanecem hipóteses abertas.
          </p>
        </div>
        <aside className="flex flex-col justify-end border-t border-line pt-6 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <p className="font-serif text-2xl leading-snug text-bone">
            “Quem não alienou o título não o perdeu pelo fato de outro o administrar.”
          </p>
          <p className="mt-4 text-sm text-muted">
            Tese forte, 20 de setembro de 2026. Redação assentada em 23 de setembro, Lavras.
            Constituição, art. 1º, parágrafo único: todo o poder emana do povo.
          </p>
        </aside>
      </div>
      <div className="mx-auto grid max-w-6xl border-t border-line sm:grid-cols-3">
        <HeroFig k="Gasto 2023–2030" v="3.805 bi" n="A soma confere." />
        <HeroFig k="Receita / capex, no base" v="19,8%" n="Razão bruta, não ROI nem fluxo de caixa." />
        <HeroFig k="Para empatar o acumulado" v="5,0×" n="Não 2,7×. Esse outro número só cobre um ano." />
      </div>
    </section>
  );
}

function HeroFig({ k, v, n }: { k: string; v: string; n: string }) {
  return (
    <div className="border-b border-line px-5 py-6 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-xs tracking-wide text-muted uppercase">{k}</p>
      <p className="mt-2 font-serif text-4xl text-bone tabular-nums">{v}</p>
      <p className="mt-2 text-sm text-muted">{n}</p>
    </div>
  );
}

function Tese() {
  return (
    <section id="tese" className="scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="01" title="A tese que a conta sozinha não diz" />
        <p className="mt-6 max-w-3xl border-l-2 border-brass pl-4 text-bone-dim">
          As quatro proposições abaixo são a interpretação normativa do autor. Não são resultados
          deduzidos da planilha e não recebem probabilidade estatística nesta página.
        </p>
        <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
          <Claim
            n="I"
            title="O título"
            body="A língua pública, o arquivo, a capacidade de agenciar e a visibilidade da mediação não foram transferidos a quem detém compute e interface. O conhecimento de que os pesos se extraem é o acúmulo da civilização. Não nasceu no data center. O algoritmo, sem corpus, não funda propriedade originária."
          />
          <Claim
            n="II"
            title="O mesmo produto"
            body="Hipótese do autor: vendors comprimem corpora sobrepostos, vendem inferência substituível e podem duplicar capacidade por competição estratégica. A série não mede sobreposição de produto, utilização ou clientes."
          />
          <Claim
            n="III"
            title="A demanda que se apaga"
            body="Hipótese do autor: se a automação reduzir renda do trabalho mais rápido do que cria produtividade, renda e demanda novas, parte da própria base pagadora se contrai. O efeito líquido depende de preços, distribuição e respostas de firmas, famílias e Estado."
          />
          <Claim
            n="IV"
            title="A dívida"
            body="Há dívida corporativa, project finance, crédito privado e SPVs no financiamento da expansão, mas a fração muda por ano e perímetro. Goldman Sachs estima 27% do capex dos hyperscalers financiado por emissão de dívida em 2025 e projeta 33% em 2026; isso não demonstra que um terço de todo o capex global já esteja endividado."
          />
        </div>
        <p className="mt-8 max-w-3xl text-bone-dim">
          A usurpação aqui nomeada é de título, no plano constitucional e deontológico. Não é,
          neste auto, tipo penal. Paywall não é função pública. Nomear a expropriação sem fingir
          sentença é o corte da tese forte — e esta página o conserva.
        </p>
      </div>
    </section>
  );
}

function Claim({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <article className="bg-ink p-6 md:p-8">
      <p className="font-serif text-sm text-oxide">{n}</p>
      <h3 className="mt-3 font-serif text-3xl text-bone">{title}</h3>
      <p className="mt-4 text-bone-dim">{body}</p>
    </article>
  );
}

function Contas() {
  return (
    <section id="contas" className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="02" title="O cenário do manifesto, como publicado" />
        <p className="mt-6 max-w-3xl text-bone-dim">
          Série autoral do repositório, em bilhões de dólares. Ela combina anos históricos e
          futuros sem marcar a fronteira nem citar a origem de cada observação. Serve para testar
          uma tese sob três trajetórias de receita; não deve ser lida como consenso de mercado.
          No cenário chamado “otimista”, a receita acumulada equivale a 66% do capex acumulado.
        </p>
        <div className="mt-8 border border-line bg-ink p-4 md:p-6">
          <CapexChart />
          <p className="mt-3 text-sm text-muted">
            Barras: capex. Linha clara: receita base. Latão: otimista. Tracejado: pessimista.
          </p>
        </div>
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-3xl text-left text-sm">
            <thead className="bg-ink text-xs tracking-wide text-muted uppercase">
              <tr>
                {["Ano", "Capex", "Base", "Capex − receita", "Receita / capex", "Deprec. publicada", "Otimista", "Pessimista"].map(
                  (head) => (
                    <th key={head} className="px-3 py-3 font-semibold">
                      {head}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {YEARS.map((year, index) => (
                <tr key={year} className="border-t border-line odd:bg-ink">
                  <th className="px-3 py-2.5 font-semibold text-bone">{year}</th>
                  <Td>{CAPEX[index]}</Td>
                  <Td>{RECEITA.base[index]}</Td>
                  <Td oxide>{CAPEX[index]! - RECEITA.base[index]!}</Td>
                  <Td>{`${bi(COBERTURA_BASE[index] ?? 0, 1)}%`}</Td>
                  <Td>{DEPREC_PUBLICADA[index]}</Td>
                  <Td>{RECEITA.otimista[index]}</Td>
                  <Td>{RECEITA.pessimista[index]}</Td>
                </tr>
              ))}
              <tr className="border-t border-bone bg-ink font-semibold">
                <th className="px-3 py-3 text-bone">Soma</th>
                <Td>3805</Td>
                <Td>755</Td>
                <Td oxide>{GAP_ACUMULADO}</Td>
                <Td>19,8%</Td>
                <td className="px-3 py-3 text-muted">—</td>
                <Td>2510</Td>
                <Td>325</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          “Capex − receita” não é prejuízo nem déficit de caixa: compara um investimento que gera
          ativos duráveis com receita bruta, sem margem, opex, impostos, capital de giro, valor
          residual ou custo de capital. A coluna é mantida apenas como identidade do cenário.
        </p>
      </div>
    </section>
  );
}

function Td({ children, oxide = false }: { children: number | string; oxide?: boolean }) {
  const text = typeof children === "number" ? bi(children, Number.isInteger(children) ? 0 : 1) : children;
  return <td className={`px-3 py-2.5 tabular-nums ${oxide ? "text-oxide" : "text-bone"}`}>{text}</td>;
}

function Revisao() {
  return (
    <section id="revisao" className="scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="03" title="O que a revisão fez com a conta" />
        <p className="mt-6 max-w-3xl text-bone-dim">
          A aritmética interna da série confere: somas, gaps anuais, retornos acumulados,
          heurística de depreciação. Isso valida as operações, não as premissas nem a conclusão.
          A revisão separa identidades matemáticas, cenários e afirmações sobre o mundo.
        </p>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          <Fix
            n="01"
            title="2,69× iguala dois valores de 2030. Não resolve a série."
            body="Setecentos dividido por duzentos e sessenta é 2,69. Isso iguala receita e capex no ano de 2030. Para a receita acumulada igualar o capex acumulado, todos os anos precisariam valer 5,04 vezes a base. Se só 2026 em diante variar, 5,33 vezes; se apenas 2030 variar, 12,7 vezes. Nenhuma dessas identidades é, por si, break-even econômico."
          />
          <Fix
            n="02"
            title="17,9 bilhões é uma equivalência de receita anual, não uma base de assinantes."
            body="O número sai de 3.050 bi divididos por cerca de US$ 170 por assinatura-ano. Ele traduz uma diferença acumulada de oito anos em um único ano hipotético de faturamento, sem custos, impostos, churn ou capacidade de pagamento. O valor de 2030 isolado daria cerca de 2,6 bilhões de assinaturas-ano. Nenhum dos dois mede mercado endereçável."
          />
          <Fix
            n="03"
            title="Três anos é teste de estresse, não vida útil demonstrada."
            body="A regra publicada — 35% do ano anterior mais 25% de dois anos atrás — não representa depreciação linear de três anos. Aplicar três anos a todo o capex produz 677 bi em 2030, mas mistura chips, prédios, energia e obras ainda não operacionais. Meta reporta 5,5 anos para a maior parte de servidores e rede; outras empresas usam políticas distintas. A incerteza é material."
          />
          <Fix
            n="04"
            title="Nem todo capex é chip — e receita não se compara a depreciação como caixa."
            body="Uma mistura ilustrativa — 60% silício em três anos, 40% casca em vinte — produz 482 bi em 2030. A divisão 60/40 não foi medida. Além disso, depreciação é despesa contábil não caixa; receita bruta acima ou abaixo dela não demonstra, sozinha, fluxo operacional positivo ou negativo."
          />
          <Fix
            n="05"
            title="19,8% é cobertura bruta, não ROI."
            body="Setecentos e cinquenta e cinco dividido por 3.805 resulta em 19,8%. ROI exigiria ao menos lucro ou fluxo incremental no numerador e tratamento consistente de tempo, ativos residuais e custo de capital. A página passa a chamar a métrica pelo que ela é: receita acumulada dividida por capex acumulado."
          />
        </ol>
      </div>
    </section>
  );
}

const SOURCES = [
  {
    status: "Série interna",
    title: "dados.json · manifesto VIA",
    detail:
      "Origem dos vetores exibidos. Não informa fonte por linha, perímetro de “IA”, moeda constante, corte entre observado e projetado ou data-base.",
    href: "https://github.com/LucasHRAlmeida/capex-ia-o-esbanjamento/blob/main/dados.json",
  },
  {
    status: "Benchmark projetado",
    title: "Goldman Sachs · Tracking Trillions",
    detail:
      "Projeta US$ 7,6 tri entre 2026–2031 e publica hipóteses de compute, data centers e energia. Mostra que valor e perímetro dependem do modelo; não valida a série VIA.",
    href: "https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out",
  },
  {
    status: "Benchmark projetado",
    title: "McKinsey · data centers até 2030",
    detail:
      "Estima mais de US$ 1,7 tri globalmente, excluindo hardware de TI. A exclusão impede comparação direta com uma série que mistura infraestrutura e compute.",
    href: "https://www.mckinsey.com/industries/private-capital/our-insights/scaling-bigger-faster-cheaper-data-centers-with-smarter-designs",
  },
  {
    status: "Fonte primária",
    title: "Meta 2025 Form 10-K · servidores e rede",
    detail:
      "Divulga vida útil estimada de 5,5 anos para a maior parte dos ativos de servidores e rede. É política contábil de uma empresa, não vida física universal de GPUs.",
    href: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/R15.htm",
  },
  {
    status: "Estimativa identificada",
    title: "Goldman Sachs · dívida ligada à IA",
    detail:
      "Estima emissões equivalentes a 27% do capex dos hyperscalers em 2025 e projeta 33% em 2026. O próprio recorte exclui project finance da razão.",
    href: "https://www.goldmansachs.com/insights/goldman-sachs-exchanges/how-ai-debt-is-reshaping-the-credit-market",
  },
  {
    status: "Contraponto de demanda",
    title: "Bloomberg Intelligence · mercado de IA generativa",
    detail:
      "Projeta US$ 2,3 tri em 2032 num perímetro amplo. Não é comparável diretamente à “receita de IA” do manifesto, mas evidencia a dispersão das expectativas.",
    href: "https://www.bloomberg.com/company/press/generative-ai-market-poised-to-reach-2-3-trillion-by-2032-as-agentic-systems-proliferate-and-infrastructure-demand-surges-according-to-bloomberg-intelligence/",
  },
] as const;

function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="04" title="Método e procedência" />
        <p className="mt-6 max-w-3xl text-bone-dim">
          Auditoria feita em 1º de outubro de 2026. “Confere” significa que a operação pode ser
          reproduzida. “Fonte” identifica de onde veio um valor. “Benchmark” apenas delimita
          plausibilidade: não transforma projeção em fato.
        </p>
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {SOURCES.map((source) => (
            <article key={source.title} className="bg-ink p-6">
              <p className="text-xs tracking-wide text-brass uppercase">{source.status}</p>
              <h3 className="mt-2 font-serif text-2xl text-bone">{source.title}</h3>
              <p className="mt-3 text-sm text-bone-dim">{source.detail}</p>
              <a
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-oxide underline decoration-oxide/50 underline-offset-4 hover:text-bone"
                href={source.href}
                target="_blank"
                rel="noreferrer"
              >
                Abrir fonte ↗
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-brass p-5 text-sm text-bone-dim">
          <strong className="text-bone">Questão ainda aberta:</strong> não existe nesta série uma
          ponte auditável entre capex global, receita incremental atribuível à IA e fluxo de caixa
          dos mesmos agentes econômicos. Sem o mesmo perímetro nos dois lados, “sustentável” ou
          “insustentável” permanece conclusão condicional, não prova matemática.
        </div>
      </div>
    </section>
  );
}

function Fix({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="grid gap-3 py-7 md:grid-cols-12">
      <p className="font-serif text-oxide md:col-span-1">{n}</p>
      <div className="md:col-span-11">
        <h3 className="font-serif text-2xl text-bone md:text-3xl">{title}</h3>
        <p className="mt-3 max-w-3xl text-bone-dim">{body}</p>
      </div>
    </li>
  );
}

function Esteira() {
  const bars = [
    { name: "Receita base, 2030", value: 260, max: 700, tone: "bg-bone" },
    { name: "Depreciação publicada", value: 400.5, max: 700, tone: "bg-brass" },
    { name: "Depreciação mista", value: DEPREC_MISTA[7] ?? 0, max: 700, tone: "bg-muted" },
    { name: "Vida de 3 anos", value: DEPREC_SL3[7] ?? 0, max: 700, tone: "bg-oxide" },
    { name: "Capex do ano", value: 700, max: 700, tone: "bg-bone-dim" },
  ];

  return (
    <section id="esteira" className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="05" title="Depreciação: três modelos, nenhuma certeza escondida" />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="border border-line bg-ink p-4 md:p-6">
            <DeprecChart />
            <p className="mt-3 text-sm text-muted">
              Latão: heurística publicada. Óxido: três anos, linha reta. Tracejado: mistura
              proposta. Clara: receita base.
            </p>
          </div>
          <div>
            <p className="text-bone-dim">
              Em 2030 a receita base é 260. A depreciação que o manifesto imprime é 400. A que a
              hipótese extrema de três anos sobre todo o capex imprime é 677. Isso testa
              sensibilidade contábil; não prova caixa negativo. Receita, depreciação e capex têm
              naturezas diferentes e só seriam comparáveis em demonstrações consistentes.
            </p>
            <ul className="mt-8 space-y-4">
              {bars.map((bar) => (
                <li key={bar.name}>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">{bar.name}</span>
                    <span className="text-bone tabular-nums">{bi(bar.value, bar.value % 1 ? 1 : 0)} bi</span>
                  </div>
                  <div className="mt-1.5 h-2 bg-line">
                    <div className={`h-2 ${bar.tone}`} style={{ width: `${Math.min(100, (bar.value / bar.max) * 100)}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border border-line bg-ink p-4 md:p-6">
          <CoverageChart />
          <p className="mt-3 text-sm text-muted">
            Receita acumulada / capex acumulado. A linha de óxido marca igualdade aritmética,
            100% — não break-even econômico. O cenário otimista chega a 66% em 2030.
          </p>
        </div>
      </div>
    </section>
  );
}

function SimuladorSection() {
  return (
    <section id="simulador" className="scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="06" title="O cenário, em controles" />
        <p className="mt-6 max-w-3xl text-bone-dim">
          Três hipóteses, separadas de propósito. Crescer a receita testa a identidade corrigida.
          Tratar parte como salário substituído e parte do capex como duplicação competitiva são
          escolhas do usuário, não estimativas. O simulador mostra consequências, não probabilidades.
        </p>
        <div className="mt-8">
          <Simulator />
        </div>
      </div>
    </section>
  );
}

function Escolas() {
  const escolas = [
    ["Austríaca", "Pode ler excesso de capacidade como malinvestimento; “correção inevitável” exigiria premissas de crédito, preços e demanda que a série não contém."],
    ["Keynesiana", "Pode tratar o investimento como suporte à demanda agregada; o efeito líquido depende de importações, crowding out, produtividade e resposta fiscal."],
    ["Monetarista", "Destaca gargalos de energia, turbinas e rede; pressão localizada de recursos não demonstra inflação geral persistente."],
    ["Institucionalista", "Permite que capacidade seja racional como poder estratégico mesmo com retorno financeiro baixo; o modelo não quantifica esse valor."],
    ["Financeira", "Exige fluxos, margens, custo de capital, dívida e valor terminal no mesmo perímetro. A série atual não contém dados suficientes para esse veredito."],
  ] as const;

  return (
    <section className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="07" title="Cinco leituras — não cinco validações independentes" />
        <p className="mt-6 max-w-3xl text-sm text-muted">
          As formulações abaixo são lentes interpretativas do manifesto. Elas não constituem
          consenso entre escolas nem evidência adicional. Alegações sem fonte verificável foram
          retiradas; o desacordo econômico permanece visível.
        </p>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {escolas.map(([nome, texto], index) => (
            <li key={nome} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
              <p className="text-sm text-muted md:col-span-3">
                0{index + 1} · {nome}
              </p>
              <p className="text-bone md:col-span-9">{texto}</p>
            </li>
          ))}
        </ol>
        <article className="mt-8 border border-oxide bg-ink p-6 md:p-8">
          <p className="text-xs tracking-[0.18em] text-oxide uppercase">Sexta · ética da titularidade</p>
          <h3 className="mt-3 font-serif text-3xl text-bone md:text-4xl">
            A matemática disciplina a tese. Não substitui a economia.
          </h3>
          <p className="mt-4 max-w-3xl text-bone-dim">
            O argumento de titularidade, corpus e poder permanece a posição normativa do autor.
            Já o resultado econômico depende de adoção, preços, produtividade, distribuição,
            competição, financiamento e política pública. A página não atribui probabilidades
            onde não há modelo estimado nem chama cenário de prova.
          </p>
        </article>
      </div>
    </section>
  );
}

function Estatuto() {
  return (
    <section id="estatuto" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="08" title="Estatuto desta página" />
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          <Status
            k="Verificado"
            body="Somas, diferenças e razões batem com o arquivo do manifesto. 700/260 = 2,69. 3.805/755 = 5,04. A heurística 35/25 foi reproduzida; cenários alternativos de depreciação foram recalculados."
          />
          <Status
            k="Inferido"
            body="O risco de excesso de capacidade, pressão financeira e disputa por titularidade é interpretação plausível. Não decorre necessariamente da razão receita/capex e não recebe probabilidade empírica."
          />
          <Status
            k="Proposto"
            body="Substituição de salário e duplicação competitiva no simulador são parâmetros escolhidos. A mistura 60/40 e a vida de três anos são sensibilidades. Não são estimativas centrais."
          />
          <Status
            k="Lacuna"
            body="Fonte linha a linha da série; definição comum de capex e receita; corte observado/projetado; margens, opex, impostos, valor residual, custo de capital; divisão medida dos ativos; distribuição probabilística calibrada."
          />
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="font-serif text-2xl leading-snug text-bone">
            Tese do autor: o que importa é a tecnologia necessária, o suficiente — não o exagero.
            A auditoria preserva essa hipótese sem converter expectativa humana em certeza numérica.
          </p>
          <p className="mt-6 text-bone">
            Dr. Lucas HR Almeida
            <span className="mt-1 block text-sm text-muted">
              Médico · Iniciativa VIA · Human-gate · Lavras, Minas Gerais
            </span>
          </p>
          <p className="mt-4 text-sm text-muted">
            Manifesto de origem: repositório capex-ia-o-esbanjamento, 24 de setembro de 2026.
            Auditoria econômica: 1º de outubro de 2026. Soberania informacional em iniciativa-via.com.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionMark({ n, title }: { n: string; title: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.22em] text-oxide uppercase">{n}</p>
      <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-bone md:text-5xl">{title}</h2>
    </div>
  );
}

function Status({ k, body }: { k: string; body: string }) {
  return (
    <article className="bg-ink p-6">
      <h3 className="font-serif text-2xl text-brass">{k}</h3>
      <p className="mt-3 text-bone-dim">{body}</p>
    </article>
  );
}
