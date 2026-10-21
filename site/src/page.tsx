import { CapexChart, CoverageChart, DeprecChart } from "./components/ledger-charts";
import { Simulator } from "./components/simulator";
import { LanguageSwitcher, useI18n } from "./i18n";
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
  pct,
} from "./lib/ledger";

const NAV_ITEMS = [
  ["#tese", "tese"],
  ["#contas", "contas"],
  ["#revisao", "revisao"],
  ["#metodo", "metodo"],
  ["#esteira", "esteira"],
  ["#simulador", "simulador"],
  ["#estatuto", "estatuto"],
] as const;

const MODULE_ITEMS = [
  ["#contas", "economia"],
  ["https://iniciativa-via.com/via-hub/soberania-informacional/", "soberania"],
  ["https://iniciativa-via.com/via-hub/via-literacia-programacao-github/", "literacia"],
] as const;

const SOURCE_HREFS = [
  "https://github.com/LucasHRAlmeida/capex-ia-o-esbanjamento/blob/main/dados.json",
  "https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out",
  "https://www.mckinsey.com/industries/private-capital/our-insights/scaling-bigger-faster-cheaper-data-centers-with-smarter-designs",
  "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/R15.htm",
  "https://www.goldmansachs.com/insights/goldman-sachs-exchanges/how-ai-debt-is-reshaping-the-credit-market",
  "https://www.bloomberg.com/company/press/generative-ai-market-poised-to-reach-2-3-trillion-by-2032-as-agentic-systems-proliferate-and-infrastructure-demand-surges-according-to-bloomberg-intelligence/",
] as const;

export function Home() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line bg-ink/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <a href="#topo" className="font-serif text-lg tracking-tight text-bone">
              {t.ui.siteTitle}
            </a>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <a
                href="https://iniciativa-via.com/via-hub/"
                className="inline-flex min-h-11 items-center border border-line px-3 py-1.5 text-xs font-semibold text-bone hover:border-oxide hover:text-oxide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxide"
              >
                {t.ui.backToHub}
              </a>
              <nav className="flex gap-1" aria-label={t.ui.modulesAria}>
                {MODULE_ITEMS.map(([href, key], index) => (
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
                    {t.modules[key]}
                  </a>
                ))}
              </nav>
              <LanguageSwitcher />
            </div>
          </div>
          <nav className="flex min-w-0 flex-nowrap gap-1 overflow-x-auto" aria-label={t.ui.sectionsAria}>
            {NAV_ITEMS.map(([href, key]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 px-2 py-2 text-sm whitespace-nowrap text-muted hover:text-bone"
              >
                {t.nav[key]}
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
          <p>{t.footer.left}</p>
          <p>{t.footer.right}</p>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="border-b border-oxide">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8">
          <p className="text-xs tracking-[0.22em] text-oxide uppercase">{t.hero.kicker}</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-medium tracking-tight text-bone md:text-7xl">
            {t.hero.h1a}
            <span className="mt-3 block text-bone-dim">{t.hero.h1b}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-snug text-bone-dim">{t.hero.lead}</p>
        </div>
        <aside className="flex flex-col justify-end border-t border-line pt-6 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <p className="font-serif text-2xl leading-snug text-bone">{t.hero.quote}</p>
          <p className="mt-4 text-sm text-muted">{t.hero.quoteNote}</p>
        </aside>
      </div>
      <div className="mx-auto grid max-w-6xl border-t border-line sm:grid-cols-3">
        {t.hero.figs.map((fig) => (
          <HeroFig key={fig.k} k={fig.k} v={fig.v} n={fig.n} />
        ))}
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
  const { t } = useI18n();
  return (
    <section id="tese" className="scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="01" title={t.tese.title} />
        <p className="mt-6 max-w-3xl border-l-2 border-brass pl-4 text-bone-dim">{t.tese.intro}</p>
        <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
          {t.tese.claims.map((claim) => (
            <Claim key={claim.n} n={claim.n} title={claim.title} body={claim.body} />
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-bone-dim">{t.tese.closing}</p>
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
  const { t, locale } = useI18n();
  return (
    <section id="contas" className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="02" title={t.contas.title} />
        <p className="mt-6 max-w-3xl text-bone-dim">{t.contas.intro}</p>
        <div className="mt-8 border border-line bg-ink p-4 md:p-6">
          <CapexChart />
          <p className="mt-3 text-sm text-muted">{t.contas.chartNote}</p>
        </div>
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-3xl text-left text-sm">
            <thead className="bg-ink text-xs tracking-wide text-muted uppercase">
              <tr>
                {t.contas.headers.map((head) => (
                  <th key={head} className="px-3 py-3 font-semibold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {YEARS.map((year, index) => (
                <tr key={year} className="border-t border-line odd:bg-ink">
                  <th className="px-3 py-2.5 font-semibold text-bone">{year}</th>
                  <Td>{CAPEX[index]}</Td>
                  <Td>{RECEITA.base[index]}</Td>
                  <Td oxide>{CAPEX[index]! - RECEITA.base[index]!}</Td>
                  <Td>{pct(COBERTURA_BASE[index] ?? 0, 1, locale)}</Td>
                  <Td>{DEPREC_PUBLICADA[index]}</Td>
                  <Td>{RECEITA.otimista[index]}</Td>
                  <Td>{RECEITA.pessimista[index]}</Td>
                </tr>
              ))}
              <tr className="border-t border-bone bg-ink font-semibold">
                <th className="px-3 py-3 text-bone">{t.contas.sum}</th>
                <Td>3805</Td>
                <Td>755</Td>
                <Td oxide>{GAP_ACUMULADO}</Td>
                <Td>{pct(19.8, 1, locale)}</Td>
                <td className="px-3 py-3 text-muted">—</td>
                <Td>2510</Td>
                <Td>325</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted">{t.contas.note}</p>
      </div>
    </section>
  );
}

function Td({ children, oxide = false }: { children: number | string; oxide?: boolean }) {
  const { locale } = useI18n();
  const text =
    typeof children === "number"
      ? bi(children, Number.isInteger(children) ? 0 : 1, locale)
      : children;
  return <td className={`px-3 py-2.5 tabular-nums ${oxide ? "text-oxide" : "text-bone"}`}>{text}</td>;
}

function Revisao() {
  const { t } = useI18n();
  return (
    <section id="revisao" className="scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="03" title={t.revisao.title} />
        <p className="mt-6 max-w-3xl text-bone-dim">{t.revisao.intro}</p>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {t.revisao.fixes.map((fix, index) => (
            <Fix key={fix.title} n={`0${index + 1}`} title={fix.title} body={fix.body} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Metodo() {
  const { t } = useI18n();
  return (
    <section id="metodo" className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="04" title={t.metodo.title} />
        <p className="mt-6 max-w-3xl text-bone-dim">{t.metodo.intro}</p>
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {t.metodo.sources.map((source, index) => (
            <article key={SOURCE_HREFS[index]} className="bg-ink p-6">
              <p className="text-xs tracking-wide text-brass uppercase">{source.status}</p>
              <h3 className="mt-2 font-serif text-2xl text-bone">{source.title}</h3>
              <p className="mt-3 text-sm text-bone-dim">{source.detail}</p>
              <a
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-oxide underline decoration-oxide/50 underline-offset-4 hover:text-bone"
                href={SOURCE_HREFS[index]}
                target="_blank"
                rel="noreferrer"
              >
                {t.ui.openSource}
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-brass p-5 text-sm text-bone-dim">
          <strong className="text-bone">{t.metodo.openTitle}</strong> {t.metodo.openBody}
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
  const { t, locale } = useI18n();
  const bars = [
    { name: t.esteira.bars.receita, value: 260, max: 700, tone: "bg-bone" },
    { name: t.esteira.bars.publicada, value: 400.5, max: 700, tone: "bg-brass" },
    { name: t.esteira.bars.mista, value: DEPREC_MISTA[7] ?? 0, max: 700, tone: "bg-muted" },
    { name: t.esteira.bars.vida3, value: DEPREC_SL3[7] ?? 0, max: 700, tone: "bg-oxide" },
    { name: t.esteira.bars.capex, value: 700, max: 700, tone: "bg-bone-dim" },
  ];

  return (
    <section id="esteira" className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="05" title={t.esteira.title} />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="border border-line bg-ink p-4 md:p-6">
            <DeprecChart />
            <p className="mt-3 text-sm text-muted">{t.esteira.chartNote}</p>
          </div>
          <div>
            <p className="text-bone-dim">{t.esteira.text}</p>
            <ul className="mt-8 space-y-4">
              {bars.map((bar) => (
                <li key={bar.name}>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">{bar.name}</span>
                    <span className="text-bone tabular-nums">
                      {bi(bar.value, bar.value % 1 ? 1 : 0, locale)} {t.ui.unit}
                    </span>
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
          <p className="mt-3 text-sm text-muted">{t.esteira.coverageNote}</p>
        </div>
      </div>
    </section>
  );
}

function SimuladorSection() {
  const { t } = useI18n();
  return (
    <section id="simulador" className="scroll-mt-28 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="06" title={t.simulador.title} />
        <p className="mt-6 max-w-3xl text-bone-dim">{t.simulador.intro}</p>
        <div className="mt-8">
          <Simulator />
        </div>
      </div>
    </section>
  );
}

function Escolas() {
  const { t } = useI18n();
  return (
    <section className="scroll-mt-28 border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="07" title={t.escolas.title} />
        <p className="mt-6 max-w-3xl text-sm text-muted">{t.escolas.intro}</p>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {t.escolas.list.map((escola, index) => (
            <li key={index} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
              <p className="text-sm text-muted md:col-span-3">
                0{index + 1} · {escola.name}
              </p>
              <p className="text-bone md:col-span-9">{escola.text}</p>
            </li>
          ))}
        </ol>
        <article className="mt-8 border border-oxide bg-ink p-6 md:p-8">
          <p className="text-xs tracking-[0.18em] text-oxide uppercase">{t.escolas.sextaKicker}</p>
          <h3 className="mt-3 font-serif text-3xl text-bone md:text-4xl">{t.escolas.sextaTitle}</h3>
          <p className="mt-4 max-w-3xl text-bone-dim">{t.escolas.sextaBody}</p>
        </article>
      </div>
    </section>
  );
}

function Estatuto() {
  const { t } = useI18n();
  return (
    <section id="estatuto" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionMark n="08" title={t.estatuto.title} />
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {t.estatuto.status.map((item) => (
            <Status key={item.k} k={item.k} body={item.body} />
          ))}
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="font-serif text-2xl leading-snug text-bone">{t.estatuto.thesis}</p>
          <p className="mt-6 text-bone">
            {t.estatuto.name}
            <span className="mt-1 block text-sm text-muted">{t.estatuto.role}</span>
          </p>
          <p className="mt-4 text-sm text-muted">{t.estatuto.notes}</p>
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
