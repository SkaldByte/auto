import { useEffect, useRef, useState } from "react";
import { Rv, SectionHead } from "../ui";
import { useInView } from "../hooks";

/* ================= reaction game ================= */
type Phase = "idle" | "arming" | "go" | "result" | "early";

function ReactionGame() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [last, setLast] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const t0 = useRef(0);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const start = () => {
    setPhase("arming");
    timer.current = window.setTimeout(() => {
      t0.current = performance.now();
      setPhase("go");
    }, 900 + Math.random() * 2200);
  };

  const click = () => {
    if (phase === "idle" || phase === "result" || phase === "early") start();
    else if (phase === "arming") {
      window.clearTimeout(timer.current);
      setPhase("early");
    } else if (phase === "go") {
      const ms = Math.round(performance.now() - t0.current);
      setLast(ms);
      setBest((b) => (b === null || ms < b ? ms : b));
      setPhase("result");
    }
  };

  const bg =
    phase === "go"
      ? "bg-mint text-ink"
      : phase === "arming"
        ? "bg-coral/15 text-coral"
        : phase === "early"
          ? "bg-amber/15 text-amber"
          : "bg-ink3 text-bone";

  return (
    <button
      onClick={click}
      className={`flex h-64 w-full select-none flex-col items-center justify-center gap-2 rounded-lg border border-bone/10 px-6 transition-colors duration-200 ${bg}`}
    >
      {phase === "idle" && (
        <>
          <span className="font-d text-xl font-bold">Проверь реакцию</span>
          <span className="font-m text-xs text-mut">жми, чтобы начать</span>
        </>
      )}
      {phase === "arming" && (
        <>
          <span className="font-d text-xl font-bold">Жди зелёный…</span>
          <span className="font-m text-xs opacity-70">не спеши</span>
        </>
      )}
      {phase === "go" && <span className="font-d text-4xl font-black tracking-tight">ЖМИ!</span>}
      {phase === "early" && (
        <>
          <span className="font-d text-xl font-bold">Рано!</span>
          <span className="font-m text-xs opacity-80">кликни ещё раз</span>
        </>
      )}
      {phase === "result" && last !== null && (
        <>
          <span className="font-d text-4xl font-black">
            {last}
            <span className="text-lg font-bold"> мс</span>
          </span>
          <span className="font-m text-xs opacity-70">
            {last < 250 ? "отлично! ещё разок?" : "ещё разок?"} · рекорд {best} мс
          </span>
        </>
      )}
    </button>
  );
}

/* ================= palette generator ================= */
function hslToHex(h: number, s: number, l: number) {
  h = ((h % 360) + 360) % 360;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * c)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

function makePalette() {
  const h = Math.floor(Math.random() * 360);
  const defs = [
    [h, 62, 62],
    [h + 22, 55, 48],
    [h + 180, 58, 60],
    [h + 200, 45, 72],
    [h + 160, 30, 22],
  ] as const;
  return defs.map(([dh, s, l]) => hslToHex(dh, s, l));
}

function PaletteGen() {
  const [pal, setPal] = useState<string[]>(makePalette);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      window.setTimeout(() => setCopied(null), 1200);
    } catch {
      setCopied(hex);
      window.setTimeout(() => setCopied(null), 1200);
    }
  };

  return (
    <div className="flex h-64 flex-col rounded-lg border border-bone/10 bg-ink3">
      <div className="flex min-h-0 flex-1">
        {pal.map((hex, i) => (
          <button
            key={`${hex}-${i}`}
            onClick={() => copy(hex)}
            style={{ background: hex }}
            className="group relative flex-1 transition-all duration-300 first:rounded-tl-md last:rounded-tr-md hover:flex-[1.6]"
            aria-label={`Скопировать ${hex}`}
          >
            <span className="font-m absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-ink/80 px-1.5 py-0.5 text-[10px] text-bone opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {copied === hex ? "✓ скопировано" : hex}
            </span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="font-d text-sm font-bold">Генератор палитр</p>
          <p className="font-m text-[10px] text-mut">клик по цвету — копирует hex</p>
        </div>
        <button
          onClick={() => setPal(makePalette())}
          className="font-m shrink-0 rounded border border-amber/40 px-3 py-1.5 text-[11px] font-bold tracking-widest text-amber uppercase transition-all duration-200 hover:bg-amber hover:text-ink active:scale-95"
        >
          смешать
        </button>
      </div>
    </div>
  );
}

/* ================= live chart ================= */
const DAYS = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const rand = () => DAYS.map(() => 20 + Math.floor(Math.random() * 80));

function LiveChart() {
  const [data, setData] = useState<number[]>(() => [46, 72, 58, 91, 64, 35, 82]);
  const { ref, on } = useInView<HTMLDivElement>(0.3);
  const max = 100;

  return (
    <div ref={ref} className="flex h-64 flex-col rounded-lg border border-bone/10 bg-ink3">
      <div className="flex items-center justify-between px-4 pt-4">
        <div>
          <p className="font-d text-sm font-bold">Запросы в цех</p>
          <p className="font-m text-[10px] text-mut">за неделю · обновляется на лету</p>
        </div>
        <button
          onClick={() => setData(rand())}
          className="font-m rounded border border-mint/40 px-3 py-1.5 text-[11px] font-bold tracking-widest text-mint uppercase transition-all duration-200 hover:bg-mint hover:text-ink active:scale-95"
        >
          ↻ данные
        </button>
      </div>
      <div className="flex flex-1 items-end gap-2 px-4 pt-3 sm:gap-3">
        {data.map((v, i) => (
          <div key={DAYS[i]} className="group flex h-full flex-1 flex-col items-center justify-end gap-1.5">
            <span className="font-m text-[10px] text-mut opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {v}
            </span>
            <div
              className="bar w-full rounded-t-sm bg-teal transition-colors duration-200 group-hover:bg-mint"
              style={{
                height: on ? `${(v / max) * 78}%` : "4px",
                transitionDelay: `${i * 60}ms`,
              }}
            />
            <span className="font-m pb-2 text-[10px] text-mut uppercase">{DAYS[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= section ================= */
export default function Playground() {
  return (
    <section id="playground" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        index="02"
        kicker="полигон"
        title="Не верь словам — потрогай"
        note="Три живых виджета собраны ровно так же, как я собираю всё остальное. Кликай без стеснения."
        accent="text-mint"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Rv className="md:col-span-2 lg:col-span-1">
          <ReactionGame />
        </Rv>
        <Rv delay={90} className="md:col-span-1 lg:col-span-1">
          <PaletteGen />
        </Rv>
        <Rv delay={180} className="md:col-span-2 lg:col-span-1">
          <LiveChart />
        </Rv>
      </div>
      <Rv delay={120}>
        <p className="font-m mt-6 text-xs text-mut">
          <span className="text-amber">*</span> каждый виджет — ~80 строк кода. Дашборд из таких же деталей, только
          побольше.
        </p>
      </Rv>
    </section>
  );
}
