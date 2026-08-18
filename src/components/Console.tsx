import { FormEvent, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks";

type Spec = {
  format: string;
  stack: string;
  screens: string;
  features: string;
  time: string;
};

const SPECS: { keys: RegExp; spec: Spec }[] = [
  {
    keys: /магазин|кофе|товар|продаж|shop|cart|корзин/i,
    spec: {
      format: "e-commerce · 6 экранов",
      stack: "React 18 · Vite · Tailwind v4",
      screens: "витрина → карточка → корзина → чекаут → избранное → 404",
      features: "фильтры по тегам, корзина в localStorage, быстрые карточки, тёмная тема, микродвижения на hover",
      time: "~15 минут до первой сборки",
    },
  },
  {
    keys: /дашборд|аналитик|график|метри|chart|admin|таблиц/i,
    spec: {
      format: "дашборд · 4 вьюхи",
      stack: "React 18 · Vite · SVG-графики",
      screens: "обзор → таблицы с сортировкой → детализация → настройки",
      features: "живые графики без библиотек, фильтры по периодам, скелетоны загрузки, экспорт в CSV",
      time: "~20 минут до первой сборки",
    },
  },
  {
    keys: /игр|кликер|аркад|тетрис|змейк|game|платформер/i,
    spec: {
      format: "браузерная игра · 1 экран + меню",
      stack: "React 18 · requestAnimationFrame · Canvas/SVG",
      screens: "меню → игра → пауза → таблица рекордов",
      features: "физика и коллизии, звук по WebAudio, рекорды в localStorage, управление с клавиатуры и тача",
      time: "~25 минут до первой сборки",
    },
  },
  {
    keys: /портфолио|фото|галер|кейс|резюме|cv/i,
    spec: {
      format: "портфолио · 5 секций",
      stack: "React 18 · Vite · CSS-анимации",
      screens: "обложка → работы → кейс → обо мне → контакты",
      features: "masonry-галерея, scroll-reveal, лайтбокс, типографика под характер работ, быстрая загрузка",
      time: "~12 минут до первой сборки",
    },
  },
  {
    keys: /лендинг|фестиваль|ивент|презент|запуск|promo/i,
    spec: {
      format: "лендинг · 7 секций",
      stack: "React 18 · Vite · Tailwind v4",
      screens: "обложка → программа → спикеры → билеты → FAQ → форма → футер",
      features: "scramble-заголовки, бегущие строки, липкие карточки, форма с валидацией, счётчик до старта",
      time: "~10 минут до первой сборки",
    },
  },
];

const DEFAULT_SPEC: Spec = {
  format: "сайт-визитка · 6 секций",
  stack: "React 18 · Vite · Tailwind v4",
  screens: "обложка → суть → возможности → процесс → отзывы → контакты",
  features: "живой фон, scroll-reveal, адаптив до 360px, тёмная палитра, микровзаимодействия",
  time: "~10 минут до первой сборки",
};

const CHIPS = [
  "магазин кофе",
  "дашборд аналитики",
  "игра-кликер",
  "портфолио фотографа",
  "лендинг фестиваля",
];

function buildSpec(query: string): Spec {
  for (const s of SPECS) if (s.keys.test(query)) return s.spec;
  return DEFAULT_SPEC;
}

type Line = { text: string; tone: "mut" | "bone" | "amber" | "mint" | "coral" };

const toneClass: Record<Line["tone"], string> = {
  mut: "text-mut",
  bone: "text-bone/90",
  amber: "text-amber",
  mint: "text-mint",
  coral: "text-coral",
};

export default function Console() {
  const reduced = useReducedMotion();
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { text: "цех-консоль v2.4 — сеанс открыт", tone: "mut" },
    { text: "введи идею или выбери пример ниже ⌄", tone: "mut" },
  ]);
  const [typing, setTyping] = useState(false);
  const timers = useRef<number[]>([]);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const run = (raw: string) => {
    const query = raw.trim();
    if (!query || typing) return;
    setTyping(true);
    setInput("");
    const spec = buildSpec(query);
    const plan: Line[] = [
      { text: `❯ ${query}`, tone: "bone" },
      { text: "анализ запроса… готово за 0.4с", tone: "mut" },
      { text: `проект    :: ${query.toLowerCase()}`, tone: "amber" },
      { text: `формат    :: ${spec.format}`, tone: "bone" },
      { text: `стек      :: ${spec.stack}`, tone: "bone" },
      { text: `экраны    :: ${spec.screens}`, tone: "bone" },
      { text: `внутри    :: ${spec.features}`, tone: "bone" },
      { text: `срок      :: ${spec.time}`, tone: "coral" },
      { text: "статус    :: ▮ готов начать — скажи «поехали»", tone: "mint" },
    ];

    setLines((p) => [...p, { text: `❯ ${query}`, tone: "bone" }]);

    if (reduced) {
      timers.current.push(
        window.setTimeout(() => {
          setLines((p) => [...p, ...plan.slice(1)]);
          setTyping(false);
        }, 250),
      );
      return;
    }

    /* line-by-line char typing */
    let delay = 350;
    plan.slice(1).forEach((line) => {
      timers.current.push(
        window.setTimeout(() => {
          setLines((p) => [...p, { text: "", tone: line.tone }]);
          let i = 0;
          const step = () => {
            i += 2;
            setLines((p) => {
              const copy = [...p];
              copy[copy.length - 1] = { text: line.text.slice(0, i), tone: line.tone };
              return copy;
            });
            if (i < line.text.length) {
              timers.current.push(window.setTimeout(step, 14));
            }
          };
          step();
        }, delay),
      );
      delay += 420 + line.text.length * 6;
    });
    timers.current.push(window.setTimeout(() => setTyping(false), delay + 300));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    run(input);
  };

  return (
    <div className="group/term relative">
      {/* offset frame */}
      <div className="absolute -top-3 -right-3 h-full w-full rounded-lg border border-amber/30" aria-hidden />
      <div className="relative overflow-hidden rounded-lg border border-bone/15 bg-ink2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* chrome */}
        <div className="flex items-center gap-2 border-b border-bone/10 bg-ink3/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className="font-m ml-3 text-[11px] tracking-widest text-mut uppercase">
            цех-консоль — zsh · 80×24
          </span>
          <span className="font-m ml-auto hidden text-[11px] text-mut sm:block">
            {typing ? "▮ печатаю…" : "онлайн"}
          </span>
        </div>

        {/* output */}
        <div
          ref={bodyRef}
          className="font-m h-64 overflow-y-auto px-4 py-3 text-[12.5px] leading-[1.75] sm:h-72"
          aria-live="polite"
        >
          {lines.map((l, i) => (
            <div key={i} className={`whitespace-pre-wrap break-words ${toneClass[l.tone]}`}>
              {l.text || "\u00a0"}
            </div>
          ))}
          <span className="cursor-blink -ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-mint" />
        </div>

        {/* input */}
        <form onSubmit={submit} className="flex items-center gap-2 border-t border-bone/10 bg-ink px-4 py-3">
          <span className="font-m text-sm font-bold text-amber">❯</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="например: сайт для кофейни…"
            className="font-m min-w-0 flex-1 bg-transparent text-sm text-bone outline-none placeholder:text-mut/60"
            aria-label="Идея проекта"
          />
          <button
            type="submit"
            disabled={typing || !input.trim()}
            className="font-m rounded border border-mint/40 px-3 py-1.5 text-xs font-bold tracking-widest text-mint uppercase transition-all duration-200 hover:bg-mint hover:text-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-mint"
          >
            собрать
          </button>
        </form>

        {/* chips */}
        <div className="flex flex-wrap gap-2 border-t border-bone/10 bg-ink2/60 px-4 py-3">
          {CHIPS.map((c) => (
            <button
              key={c}
              onClick={() => run(c)}
              disabled={typing}
              className="font-m rounded-full border border-bone/15 px-3 py-1 text-[11px] text-mut transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/60 hover:text-amber active:translate-y-0 disabled:opacity-40"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
