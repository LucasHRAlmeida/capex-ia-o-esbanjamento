import { useMemo, useState } from "react";
import { bi, breakEvenMultiplier, outcome, pct } from "../lib/ledger";

const AUTHOR = { multiplier: 1, alpha: 0.7, race: 0.5 };

export function Simulator() {
  const [multiplier, setMultiplier] = useState(1);
  const [alpha, setAlpha] = useState(0);
  const [race, setRace] = useState(0);

  const result = useMemo(
    () => outcome("base", multiplier, alpha, race),
    [multiplier, alpha, race],
  );
  const needed = useMemo(() => breakEvenMultiplier("base", alpha), [alpha]);

  const authorOn =
    multiplier === AUTHOR.multiplier && alpha === AUTHOR.alpha && race === AUTHOR.race;

  return (
    <div className="border border-line bg-panel">
      <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm tracking-wide text-muted uppercase">Simulador da identidade</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setMultiplier(1);
              setAlpha(0);
              setRace(0);
            }}
            className="min-h-11 border border-line px-4 text-sm text-bone hover:border-bone"
          >
            Contas do manifesto
          </button>
          <button
            type="button"
            onClick={() => {
              setMultiplier(AUTHOR.multiplier);
              setAlpha(AUTHOR.alpha);
              setRace(AUTHOR.race);
            }}
            className={`min-h-11 border px-4 text-sm ${authorOn ? "border-oxide bg-oxide text-bone" : "border-oxide text-oxide hover:bg-oxide hover:text-bone"}`}
          >
            Leitura do autor
          </button>
        </div>
      </div>

      <div className="grid gap-8 px-5 py-6 lg:grid-cols-5">
        <div className="space-y-7 lg:col-span-3">
          <Slider
            label="Receita a partir de 2026"
            hint="1× é a base. Empatar o acumulado, com o passado fixo, pede cerca de 5,3× daqui para frente."
            min={0.5}
            max={8}
            step={0.1}
            value={multiplier}
            display={`${bi(multiplier, 1)}×`}
            onChange={setMultiplier}
          />
          <Slider
            label="Fração da receita futura que é só salário substituído"
            hint="Não é elasticidade medida. É a identidade: transferência de salário não é demanda nova."
            min={0}
            max={0.95}
            step={0.05}
            value={alpha}
            display={pct(alpha * 100, 0)}
            onChange={setAlpha}
          />
          <Slider
            label="Fração do capex que é o mesmo produto, construído de novo"
            hint="Hipótese autoral de duplicação competitiva. O controle não estima utilização, diferenciação nem valor residual."
            min={0}
            max={0.8}
            step={0.05}
            value={race}
            display={pct(race * 100, 0)}
            onChange={setRace}
          />
        </div>

        <dl className="grid grid-cols-2 gap-px bg-line lg:col-span-2 lg:grid-cols-1">
          <Stat k="Receita / capex acumulado" v={pct(result.cobertura)} accent />
          <Stat k="Receita reconhecível" v={`${bi(result.receita, 0)} bi`} />
          <Stat k="Capex − receita" v={`${bi(result.gap, 0)} bi`} />
          <Stat
            k="Capex tratado como duplicado"
            v={`${bi(result.capexCorrida, 0)} bi`}
          />
          <Stat
            k="Fator para igualdade bruta"
            v={Number.isFinite(needed) ? `${bi(needed, 1)}×` : "não há"}
          />
          <Stat k="Receita ≥ capex" v={result.fecha ? "sim" : "não"} />
        </dl>
      </div>

      <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
        {authorOn
          ? "Leitura do autor, ilustrativa — não estimativa: setenta por cento da receita futura é tratado como salário substituído, e metade do ferro como corrida pelo mesmo produto. A razão receita/capex cai de 19,8% para a casa de um dígito."
          : "Arraste. A razão mantém os 3.805 bi no denominador. Ela não é ROI nem fluxo de caixa: não inclui margem, despesas operacionais, impostos, valor residual ou custo de capital."}
      </p>
    </div>
  );
}

function Slider({
  label,
  hint,
  min,
  max,
  step,
  value,
  display,
  onChange,
}: {
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  value: number;
  display: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-medium text-bone">{label}</span>
        <span className="font-serif text-2xl text-brass tabular-nums">{display}</span>
      </span>
      <input
        className="mt-4 w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span className="mt-2 block text-sm text-muted">{hint}</span>
    </label>
  );
}

function Stat({ k, v, accent = false }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="bg-ink px-4 py-4">
      <dt className="text-xs tracking-wide text-muted uppercase">{k}</dt>
      <dd className={`mt-1 font-serif text-3xl tabular-nums ${accent ? "text-oxide" : "text-bone"}`}>
        {v}
      </dd>
    </div>
  );
}
