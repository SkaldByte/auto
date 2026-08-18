import { useEffect, useState } from "react";
import Console from "./components/Console";
import Capabilities from "./components/Capabilities";
import Playground from "./components/Playground";
import Process from "./components/Process";
import { StatsStrip, Faq, Footer } from "./components/Extras";
import { Marquee, Rv } from "./ui";
import { useScramble } from "./hooks";

/* ---------- rotating stamp ---------- */
function Stamp() {
  return (
    <div className="float-y pointer-events-none absolute -bottom-10 left-1/2 hidden h-36 w-36 -translate-x-1/2 lg:block xl:left-[54%]">
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full">
        <defs>
          <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(233,239,234,0.12)" strokeWidth="1" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="rgba(255,180,84,0.35)" strokeWidth="1" strokeDasharray="3 4" />
        <text className="font-m" fontSize="10.5" letterSpacing="2.5" fill="rgba(233,239,234,0.55)">
          <textPath href="#circ">НАЖМИ · ПОПРОБУЙ · СОБЕРИ · ПОВТОРИ ·</textPath>
        </text>
      </svg>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-m text-lg text-amber">✳</span>
    </div>
  );
}

/* ---------- hero headline ---------- */
function Headline() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t1 = window.setTimeout(() => setStep(1), 150);
    const t2 = window.setTimeout(() => setStep(2), 550);
    const t3 = window.setTimeout(() => setStep(3), 950);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
  const l1 = useScramble("СОБИРАЮ", step >= 1);
  const l2 = useScramble("САЙТЫ", step >= 2);
  const l3 = useScramble("ИЗ СЛОВ", step >= 3);
  return (
    <h1 className="font-d text-[13vw] leading-[1.02] font-black tracking-tight sm:text-6xl xl:text-[4.6rem]">
      <span className="block">{l1 || "\u00a0"}</span>
      <span className="block text-amber">{l2 || "\u00a0"}</span>
      <span className="block">{l3 || "\u00a0"}</span>
    </h1>
  );
}

/* ---------- nav ---------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3.5 md:px-8">
        <a href="#top" className="font-d flex items-center gap-2 text-sm font-bold tracking-wide">
          ЦЕХ·01
          <span className="mt-0.5 inline-block h-3.5 w-2 bg-amber" aria-hidden />
        </a>
        <nav className="font-m ml-auto hidden items-center gap-7 text-[11px] tracking-[0.2em] text-mut uppercase md:flex">
          <a href="#skills" className="u-sweep hover:text-amber">навыки</a>
          <a href="#playground" className="u-sweep hover:text-mint">полигон</a>
          <a href="#process" className="u-sweep hover:text-coral">процесс</a>
          <a href="#faq" className="u-sweep hover:text-bone">вопросы</a>
        </nav>
        <span className="font-m ml-auto flex items-center gap-2 text-[11px] text-mint md:ml-6">
          <span className="pulse-dot h-2 w-2 rounded-full bg-mint" />
          онлайн
        </span>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      {/* side note */}
      <p className="font-m absolute top-1/2 -left-2 hidden -translate-y-1/2 rotate-180 text-[10px] tracking-[0.4em] text-mut/60 uppercase [writing-mode:vertical-rl] xl:block">
        мастерская полного цикла — от строки до сборки
      </p>

      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Rv>
            <p className="font-m mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-amber uppercase">
              <span className="inline-block h-px w-10 bg-amber/60" />
              живой ответ на вопрос «что умеешь?»
            </p>
          </Rv>
          <Headline />
          <Rv delay={250}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-bone/75 md:text-lg">
              Я — цифровой цех: описываешь идею одной строкой — получаешь собранный, живой и
              адаптивный продукт. Лендинг, дашборд, игра или магазин. Ниже — что конкретно я умею,
              и всё это <span className="text-mint">можно потрогать</span>.
            </p>
          </Rv>
          <Rv delay={350}>
            <div className="font-m mt-8 flex flex-wrap gap-2">
              {["react 18", "vite", "tailwind v4", "typescript", "svg-графика", "60 fps"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-bone/15 px-3.5 py-1.5 text-[11px] text-mut transition-all duration-200 hover:-translate-y-0.5 hover:border-bone/40 hover:text-bone"
                >
                  {t}
                </span>
              ))}
            </div>
          </Rv>
          <Rv delay={450}>
            <a
              href="#skills"
              className="group font-m mt-10 inline-flex items-center gap-3 text-xs tracking-[0.25em] text-bone/70 uppercase transition-colors hover:text-amber"
            >
              листай — там всё в деталях
              <svg
                viewBox="0 0 20 20"
                className="float-y h-4 w-4 text-amber"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 3v13m0 0l-5-5m5 5l5-5" />
              </svg>
            </a>
          </Rv>
        </div>

        <Rv delay={200} className="relative">
          <Console />
        </Rv>
      </div>

      <Stamp />

      {/* coords */}
      <p className="font-m absolute right-8 bottom-6 hidden text-[10px] tracking-widest text-mut/50 lg:block">
        55.75°N 37.61°E · сборка №1 · v2.4
      </p>
    </section>
  );
}

/* ---------- app ---------- */
export default function App() {
  return (
    <div className="noise bg-stage relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Marquee
          items={[
            "лендинги",
            "дашборды",
            "игры",
            "магазины",
            "графики",
            "портфолио",
            "утилиты",
            "ai-чат",
          ]}
        />
        <Capabilities />
        <StatsStrip />
        <Playground />
        <Process />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
