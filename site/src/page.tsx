import { CapexChart, DeprecChart, RoiChart } from "./components/ledger-charts";
import { Simulator } from "./components/simulator";
import {
  CAPEX,
  DEPREC_MISTA,
  DEPREC_PUBLICADA,
  DEPREC_SL3,
  GAP_ACUMULADO,
  RECEITA,
  ROI_BASE,
  YEARS,
  bi,
} from "./lib/ledger";

const NAV = [
  ["#tese", "Tese"],
  ["#contas", "Contas"],
  ["#revisao", "Revisão"],
  ["#esteira", "Esteira"],
  ["#simulador", "Simulador"],
  ["#estatuto", "Estatuto"],
] as const;

export function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line bg-ink/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 md:flex-row md:items-center md:justify-between">
          <a href="#topo" className="font-serif text-lg tracking-tight text-bone">
            O título e o capex
          </a>
          <nav className="flex min-w-0 flex-nowrap gap-1 overflow-x-auto" aria-label="Seções">
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
            Iniciativa VIA · terceiro objeto · revisão do manifesto
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-medium tracking-tight text-bone md:text-7xl">
            O povo não alienou o título.
            <span className="mt-3 block text-bone-dim">O capex, por isso, não se sustenta.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-snug text-bone-dim">
            Vários vendors disputam o mesmo produto. O ferro se compra com dívida — agora também
            na Ásia — e pressiona capital que não decidiu o gasto. O produto que se anuncia existe
            para substituir a força de trabalho que teria de comprá-lo.
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
        <HeroFig k="O que volta, no base" v="19,8%" n="Setecentos e cinquenta e cinco sobre três mil oitocentos e cinco." />
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
        <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
          <Claim
            n="I"
            title="O título"
            body="A língua pública, o arquivo, a capacidade de agenciar e a visibilidade da mediação não foram transferidos a quem detém compute e interface. O conhecimento de que os pesos se extraem é o acúmulo da civilização. Não nasceu no data center. O algoritmo, sem corpus, não funda propriedade originária."
          />
          <Claim
            n="II"
            title="O mesmo produto"
            body="Os vendors não constroem demandas distintas. Comprimem o mesmo corpus, vendem a mesma inferência e duplicam o ferro para não ficar atrás do vizinho. Capacidade sem segundo cliente não é investimento. É corrida."
          />
          <Claim
            n="III"
            title="A demanda que se apaga"
            body="Se o uso anunciado é substituir quem trabalha, a receita que se espera é o salário que se extingue. Transferência não é demanda nova. O círculo não tem um comprador do lado de fora: o produto apaga a base que teria de sustentá-lo."
          />
          <Claim
            n="IV"
            title="A dívida"
            body="Quem decide o gasto não é quem fica com a conta. O manifesto já traz cerca de um terço do capex em dívida — veículos lastreados em processador gráfico, contratos take-or-pay. O autor acrescenta o crédito que agora também se origina na Ásia. Correção com dívida não é só queda de ação. É pressão sobre capital alheio."
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
        <SectionMark n="02" title="Os números, como publicados" />
        <p className="mt-6 max-w-3xl text-bone-dim">
          Série do repositório do manifesto, em bilhões de dólares. Três trajetórias de receita
          contra um único capex. Nenhuma chega ao empate em 2030. No otimista — 2.510 bi de
          receita — ainda faltam 1.295 bi. O retorno acumulado para em 66%.
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
                {["Ano", "Capex", "Base", "Gap", "Retorno", "Deprec. publicada", "Otimista", "Pessimista"].map(
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
                  <Td>{`${bi(ROI_BASE[index] ?? 0, 1)}%`}</Td>
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
          heurística de depreciação. O que não confere é o slogan que cola dois denominadores
          diferentes na mesma frase.
        </p>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          <Fix
            n="01"
            title="2,69× não fecha o buraco. Fecha um ano."
            body="Setecentos dividido por duzentos e sessenta é 2,69. Isso iguala a receita de 2030 ao capex de 2030. O buraco acumulado é outro objeto: 3.050 bi. Para a trajetória inteira empatar com o que foi gasto, a receita de todos os anos precisa ser 5,04 vezes a base. Se só o que vem de 2026 em diante crescer, 5,33 vezes. Se só 2030 crescer — como o simulador antigo fazia — 12,7 vezes."
          />
          <Fix
            n="02"
            title="17,9 bilhões de assinantes é um estoque, não um mercado."
            body="O número do arquivo sai de 3.050 bi divididos por cerca de US$ 170 ao ano — uma mensalidade na casa de US$ 14. É o que custaria, num único ano de assinaturas, tapar oito anos de buraco. O gap só de 2030, no mesmo preço, pede cerca de 2,6 bilhões de assinantes por um ano. Não são a mesma frase."
          />
          <Fix
            n="03"
            title="A esteira publicada é mais branda do que a vida de três anos que o texto afirma."
            body="A regra “35% do ano anterior mais 25% de dois anos atrás” reconhece 60% de duas safras e esquece a terceira, e o ano corrente. Em linha reta de três anos, a depreciação de 2030 não é 400 bi. É 677 bi, contra 260 bi de receita. A ferida, sob a premissa do próprio manifesto, é mais funda. A série publicada continua válida como o que ela é: uma heurística, não a vida útil declarada."
          />
          <Fix
            n="04"
            title="Nem todo ferro é chip. A página não finge a divisão."
            body="Prédio dura décadas; rede, menos; processador, cerca de três anos. Uma mistura proposta — 60% silício em três anos, 40% casca em vinte — dá 482 bi de depreciação em 2030. Ainda acima da receita. É sensibilidade, não medição. A divisão real do capex não está no arquivo."
          />
        </ol>
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
        <SectionMark n="04" title="A esteira. Você gasta para repor o que ainda não pagou." />
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
              vida de três anos imprime é 677 — quase o capex inteiro daquele ano. Caixa negativo
              antes de energia, gente e juro.
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
          <RoiChart />
          <p className="mt-3 text-sm text-muted">
            Retorno acumulado. A linha de óxido tracejada é o empate, 100%. Nenhuma trajetória a
            toca. O otimista, em 2030, está em 66%.
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
        <SectionMark n="05" title="O círculo, em controles" />
        <p className="mt-6 max-w-3xl text-bone-dim">
          Três movimentos, separados de propósito. Crescer a receita testa o slogan corrigido.
          Tratar parte dessa receita como salário substituído testa a ética. Marcar a corrida entre
          vendors mostra o dólar que já saiu — e que não volta só porque o produto era o mesmo.
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
    ["Austríaca", "Malinvestimento. A tecnologia sobrevive; o capital mal alocado, não. Correção inevitável."],
    ["Keynesiana", "Estímulo que segura o produto agora e transfere o risco ao fiscal."],
    ["Monetarista", "Máquina de inflação de recursos: energia, turbina, rede. A aposta é a deflação chegar antes."],
    ["Institucionalista", "Sustentável como projeto de poder. Insustentável como projeto de retorno."],
    ["Financeira", "As contas não fecham. Dívida torna a correção mais funda do que uma bolha só de ação."],
  ] as const;

  return (
    <section className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="06" title="Cinco escolas, e a sexta que o autor assina" />
        <p className="mt-6 max-w-3xl text-sm text-muted">
          As cinco formulações abaixo estão como o manifesto as deixou. Os fatos macro que elas
          citam — produto trimestral, fatia de equipamento no produto, o juízo de Damodaran — não
          foram reabertos contra a fonte primária nesta sessão.
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
            Não é só que a conta não fecha. É que o negócio, no desenho anunciado, não tem a quem servir sem apagar quem pagaria.
          </h3>
          <p className="mt-4 max-w-3xl text-bone-dim">
            O corpus não foi alienado. A interface que vende o limite comercial como limite da
            espécie administra um vestíbulo que não lhe pertence. E o capex que corre à frente
            dessa administração está alavancado. Onde as cinco convergem — o gap é real, a
            depreciação acelera, bolha de capex termina em correção — a sexta acrescenta o
            sujeito: o povo continua titular; a empresa continua administradora; a administração,
            quando se faz passar por origem, usurpação é.
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
        <SectionMark n="07" title="Estatuto desta página" />
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          <Status
            k="Verificado"
            body="Somas, gaps, retornos e a heurística 35/25 batem com o arquivo do manifesto. 700/260 = 2,69. 3.805/755 = 5,04. Depreciação em linha reta de três anos, recalculada. Texto da tese forte, lido no registro de 20 de setembro e na redação de 23."
          />
          <Status
            k="Inferido"
            body="A melhor leitura conjunta é a de uma captura das condições de exercício do poder popular, financiada à frente da demanda. A dívida asiática entra como registro do autor nesta sessão, não como auditoria de contrato."
          />
          <Status
            k="Proposto"
            body="A substituição de salário no simulador é identidade do argumento, não elasticidade estimada. A mistura 60/40 da depreciação é sensibilidade. A posição “capex insustentável” segue defensável como tese de risco e perigosa como aposta de timing."
          />
          <Status
            k="Lacuna"
            body="Fontes primárias dos indicadores macro citados pelas cinco escolas. Divisão medida entre chip e casca. Volume e jurisdição do crédito asiático. Áudio bruto que a tese forte já marcava como ausente."
          />
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="font-serif text-2xl leading-snug text-bone">
            O que importa é a tecnologia necessária, o suficiente — não o exagero. Sem corpora não
            existem pesos. E sem o trabalho que o produto pretende aposentar, não existe quem pague
            o recipiente.
          </p>
          <p className="mt-6 text-bone">
            Dr. Lucas HR Almeida
            <span className="mt-1 block text-sm text-muted">
              Médico · Iniciativa VIA · Human-gate · Lavras, Minas Gerais
            </span>
          </p>
          <p className="mt-4 text-sm text-muted">
            Manifesto de origem: repositório capex-ia-o-esbanjamento, 24 de setembro de 2026.
            Soberania informacional em iniciativa-via.com.
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
