import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./en";
import { es } from "./es";
import { pt, type Dict } from "./pt";

export const LANGS = ["pt", "en", "es"] as const;
export type Lang = (typeof LANGS)[number];

const DICTS: Record<Lang, Dict> = { pt, en, es };
const NUMBER_LOCALE: Record<Lang, string> = { pt: "pt-BR", en: "en-US", es: "es" };
const HTML_LANG: Record<Lang, string> = { pt: "pt-BR", en: "en", es: "es" };
const NATIVE_NAME: Record<Lang, string> = { pt: "Português", en: "English", es: "Español" };
const STORAGE_KEY = "capex-lang";

function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

/** Prioridade: ?lang= na URL (link compartilhável) > escolha salva > português. */
function readInitialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (isLang(fromUrl)) return fromUrl;
  } catch {
    /* ambiente sem URL utilizável */
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* armazenamento bloqueado */
  }
  return "pt";
}

type I18n = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
  /** Locale para Intl/toLocaleString (separadores decimais e de milhar). */
  locale: string;
};

const Context = createContext<I18n | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* armazenamento bloqueado: a escolha vale só nesta visita */
    }
    try {
      const url = new URL(window.location.href);
      if (next === "pt") url.searchParams.delete("lang");
      else url.searchParams.set("lang", next);
      window.history.replaceState(window.history.state, "", url);
    } catch {
      /* sem history API */
    }
  }, []);

  useEffect(() => {
    const dict = DICTS[lang];
    document.documentElement.lang = HTML_LANG[lang];
    document.title = dict.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", dict.meta.description);
  }, [lang]);

  const value = useMemo<I18n>(
    () => ({ lang, setLang, t: DICTS[lang], locale: NUMBER_LOCALE[lang] }),
    [lang, setLang],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useI18n(): I18n {
  const value = useContext(Context);
  if (!value) throw new Error("useI18n fora de <LangProvider>");
  return value;
}

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  return (
    <div role="group" aria-label={t.ui.language} className="flex">
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            lang={HTML_LANG[code]}
            title={NATIVE_NAME[code]}
            aria-label={NATIVE_NAME[code]}
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`min-h-9 min-w-9 border px-2 text-xs font-semibold tracking-wide -ml-px first:ml-0 ${
              active
                ? "relative z-10 border-bone bg-bone text-ink"
                : "border-line text-muted hover:border-bone hover:text-bone"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
