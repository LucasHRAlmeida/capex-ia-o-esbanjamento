import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useI18n, type Lang } from "../i18n";
import { type Dict } from "../i18n/pt";
import {
  emptyMemory,
  respond,
  type CardId,
  type Epistemic,
  type Memory,
  type Reply,
} from "../lib/faq-bot";

type Ask = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const AskContext = createContext<Ask | null>(null);

export function FaqProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#pergunte") setOpen(true);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const value = useMemo<Ask>(() => ({ open, setOpen }), [open]);
  return <AskContext.Provider value={value}>{children}</AskContext.Provider>;
}

function useAsk(): Ask {
  const value = useContext(AskContext);
  if (!value) throw new Error("useAsk fora de <FaqProvider>");
  return value;
}

type Bubble = {
  id: string;
  role: "user" | "bot";
  text: string;
  epistemic: Epistemic | null;
  href: string | null;
  also: string | null;
  followUps: string[];
  clarify: { id: CardId; title: string }[];
};

function cardCopy(t: Dict, id: CardId): Dict["bot"]["cards"][CardId] {
  return t.bot.cards[id];
}

function epistemicLabel(t: Dict, key: Epistemic): string {
  switch (key) {
    case "verified":
      return t.bot.epistemic.verified;
    case "inferred":
      return t.bot.epistemic.inferred;
    case "proposed":
      return t.bot.epistemic.proposed;
    case "gap":
      return t.bot.epistemic.gap;
    default: {
      const _never: never = key;
      return _never;
    }
  }
}

function replyToBubble(t: Dict, reply: Reply, id: string): Bubble {
  switch (reply.kind) {
    case "greeting":
      return {
        id,
        role: "bot",
        text: t.bot.greeting,
        epistemic: null,
        href: null,
        also: null,
        followUps: t.bot.suggestions,
        clarify: [],
      };
    case "thanks":
      return {
        id,
        role: "bot",
        text: t.bot.thanks,
        epistemic: null,
        href: null,
        also: null,
        followUps: t.bot.suggestions.slice(0, 2),
        clarify: [],
      };
    case "who":
      return {
        id,
        role: "bot",
        text: t.bot.who,
        epistemic: null,
        href: "#estatuto",
        also: null,
        followUps: t.bot.suggestions.slice(0, 2),
        clarify: [],
      };
    case "fallback":
      return {
        id,
        role: "bot",
        text: t.bot.fallback,
        epistemic: "gap",
        href: "#metodo",
        also: null,
        followUps: t.bot.suggestions,
        clarify: [],
      };
    case "clarify":
      return {
        id,
        role: "bot",
        text: t.bot.clarify,
        epistemic: null,
        href: null,
        also: null,
        followUps: [],
        clarify: reply.clarify.map((cardId) => ({ id: cardId, title: cardCopy(t, cardId).title })),
      };
    case "match": {
      const primary = reply.cards[0];
      if (!primary) {
        return replyToBubble(t, { ...reply, kind: "fallback" }, id);
      }
      const main = cardCopy(t, primary);
      const extra = reply.cards[1] ? cardCopy(t, reply.cards[1]) : null;
      return {
        id,
        role: "bot",
        text: main.body,
        epistemic: reply.epistemic,
        href: reply.href,
        also: extra ? `${extra.title}. ${extra.body}` : null,
        followUps: main.followUps,
        clarify: [],
      };
    }
    default: {
      const _never: never = reply.kind;
      return _never;
    }
  }
}

function nextId(prefix: string, index: number): string {
  return `${prefix}-${index}`;
}

export function FaqTeaser() {
  const { t } = useI18n();
  const { setOpen } = useAsk();
  return (
    <section id="pergunte" className="scroll-mt-28 border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] text-oxide uppercase">{t.bot.teaserKicker}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-bone md:text-4xl">{t.bot.teaserTitle}</h2>
          <p className="mt-4 text-bone-dim">{t.bot.teaserBody}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="min-h-11 shrink-0 border border-oxide bg-oxide px-5 text-sm font-semibold text-ink hover:bg-bone"
        >
          {t.bot.open}
        </button>
      </div>
    </section>
  );
}

export function FaqDock() {
  const { t, lang } = useI18n();
  const { open, setOpen } = useAsk();
  const titleId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState("");
  const [memory, setMemory] = useState<Memory>(emptyMemory);
  const [turns, setTurns] = useState<Bubble[]>([]);
  const seedLang = useRef<Lang | null>(null);

  const greet = useCallback(
    (dict: Dict) => {
      const opening = replyToBubble(dict, respond(""), "greet");
      setTurns([opening]);
      setMemory(emptyMemory());
    },
    [],
  );

  useEffect(() => {
    if (seedLang.current === lang) return;
    seedLang.current = lang;
    greet(t);
  }, [greet, lang, t]);

  useEffect(() => {
    if (!open) return;
    const node = inputRef.current;
    node?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    const root = logRef.current;
    if (root) root.scrollTop = root.scrollHeight;
  }, [turns, open]);

  const ask = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      const reply = respond(trimmed, memory);
      const user: Bubble = {
        id: nextId("u", turns.length),
        role: "user",
        text: trimmed,
        epistemic: null,
        href: null,
        also: null,
        followUps: [],
        clarify: [],
      };
      const bot = replyToBubble(t, reply, nextId("b", turns.length));
      setTurns((current) => [...current, user, bot]);
      setMemory(reply.memory);
      setDraft("");
    },
    [memory, t, turns.length],
  );

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    ask(draft);
  };

  return (
    <>
      {open ? null : (
        <button
          type="button"
          aria-expanded={false}
          aria-controls={titleId}
          onClick={() => setOpen(true)}
          className="fixed right-4 bottom-4 z-40 min-h-12 border border-oxide bg-ink px-4 text-sm font-semibold text-oxide shadow-[0_0_0_1px_var(--color-line)] hover:bg-oxide hover:text-ink md:right-6 md:bottom-6"
        >
          {t.bot.open}
        </button>
      )}

      {open ? (
        <div className="fixed inset-x-0 bottom-0 z-40 flex justify-end p-0 sm:inset-auto sm:right-6 sm:bottom-20 sm:p-0">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="flex h-[min(36rem,88dvh)] w-full flex-col border-t border-line bg-ink sm:h-[36rem] sm:w-[26rem] sm:border"
          >
            <header className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
              <div>
                <p id={titleId} className="font-serif text-xl text-bone">
                  {t.bot.title}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">{t.bot.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="min-h-9 border border-line px-2 text-xs text-muted hover:border-bone hover:text-bone"
              >
                {t.bot.close}
              </button>
            </header>

            <div ref={logRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {turns.map((turn) => (
                <Turn
                  key={turn.id}
                  turn={turn}
                  onAsk={ask}
                  onClose={() => setOpen(false)}
                />
              ))}
            </div>

            <form onSubmit={onSubmit} className="border-t border-line p-3">
              <label className="sr-only" htmlFor={`${titleId}-input`}>
                {t.bot.placeholder}
              </label>
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  id={`${titleId}-input`}
                  rows={2}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      ask(draft);
                    }
                  }}
                  placeholder={t.bot.placeholder}
                  className="min-h-14 flex-1 resize-none border border-line bg-panel px-3 py-2 text-sm text-bone placeholder:text-muted focus:border-oxide focus:outline-none"
                />
                <button
                  type="submit"
                  className="min-h-11 border border-oxide bg-oxide px-3 text-sm font-semibold text-ink hover:bg-bone"
                >
                  {t.bot.send}
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}

function Turn({
  turn,
  onAsk,
  onClose,
}: {
  turn: Bubble;
  onAsk: (text: string) => void;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const mine = turn.role === "user";
  return (
    <article className={mine ? "ml-8" : "mr-4"}>
      <p className="text-[0.65rem] tracking-wide text-muted uppercase">{mine ? t.bot.you : t.bot.page}</p>
      {turn.epistemic ? (
        <p className="mt-1 text-[0.65rem] tracking-[0.16em] text-brass uppercase">
          {epistemicLabel(t, turn.epistemic)}
        </p>
      ) : null}
      <p className={`mt-1 text-sm leading-relaxed ${mine ? "text-bone" : "text-bone-dim"}`}>{turn.text}</p>
      {turn.also ? (
        <p className="mt-2 border-l border-brass pl-3 text-sm text-muted">
          <span className="block text-[0.65rem] tracking-wide text-brass uppercase">{t.bot.also}</span>
          {turn.also}
        </p>
      ) : null}
      {turn.href ? (
        <a
          href={turn.href}
          onClick={onClose}
          className="mt-2 inline-flex min-h-9 items-center text-xs font-semibold text-oxide underline decoration-oxide/50 underline-offset-4 hover:text-bone"
        >
          {t.bot.seeSection}
        </a>
      ) : null}
      {turn.clarify.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {turn.clarify.map((item, index) => (
            <span key={item.id} className="contents">
              {index > 0 ? <span className="self-center text-xs text-muted">{t.bot.or}</span> : null}
              <Chip label={item.title} onClick={() => onAsk(item.title)} />
            </span>
          ))}
        </div>
      ) : null}
      {turn.followUps.length > 0 ? (
        <div className="mt-3">
          <p className="text-[0.65rem] tracking-wide text-muted uppercase">{t.bot.continue}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {turn.followUps.map((item) => (
              <Chip key={item} label={item} onClick={() => onAsk(item)} />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

function Chip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-9 border border-line px-2.5 text-left text-xs text-bone hover:border-oxide hover:text-oxide"
    >
      {label}
    </button>
  );
}
