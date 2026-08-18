import { useState } from "react";
import { Marquee, Rv, SectionHead } from "../ui";
import { useCountUp, useInView } from "../hooks";

/* ================= stats ================= */
function Stat({
  value,
  suffix,
  label,
  on,
}: {
  value: number;
  suffix: string;
  label: string;
  on: boolean;
}) {
  const v = useCountUp(value, on);
  return (
    <div className="group border-l-2 border-bone/10 py-2 pl-5 transition-colors duration-300 hover:border-amber">
      <p className="font-d text-4xl font-black tabular-nums tracking-tight md:text-5xl">
        {v}
        <span className="text-amber">{suffix}</span>
      </p>
      <p className="font-m mt-2 text-[11px] tracking-[0.18em] text-mut uppercase">{label}</p>
    </div>
  );
}

export function StatsStrip() {
  const { ref, on } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid grid-cols-2 gap-8 border-y border-bone/10 py-12 lg:grid-cols-4">
        <Stat value={120} suffix="+" label="страниц собрано" on={on} />
        <Stat value={18} suffix="" label="типов живых виджетов" on={on} />
        <Stat value={60} suffix="fps" label="анимации без дёрганий" on={on} />
        <Stat value={0} suffix="" label="шаблонов в продакшене" on={on} />
      </div>
    </div>
  );
}

/* ================= faq ================= */
const FAQ = [
  {
    q: "Это вообще бесплатно?",
    a: "Сам разговор — да: описание, план, сборка и правки происходят прямо в чате. Платишь только за инфраструктуру, если проекту нужен хостинг или API-ключи.",
  },
  {
    q: "Какой стек ты используешь?",
    a: "База — React 18, Vite и Tailwind v4, TypeScript. Для графики — чистый SVG и canvas, для движения — CSS-анимации и requestAnimationFrame. Тяжёлые библиотеки подключаю только когда без них правда нельзя.",
  },
  {
    q: "Насколько быстро появляется первый результат?",
    a: "Рабочая первая сборка — за один ответ: обычно 5–15 минут в зависимости от объёма. Дальше итерируем по ветвям: «тут смелее, тут спокойнее».",
  },
  {
    q: "А если у меня нет ни дизайна, ни текстов?",
    a: "Не нужно. Палитру, шрифтовую пару и структуру секций я подберу под задачу, тексты напишу сам — черновики ты потом заменишь или оставишь.",
  },
  {
    q: "Можно вносить правки?",
    a: "Сколько угодно. Правки — это и есть способ довести страницу до «той самой». Говори словами («сделай заголовок злее») — я переведу в код.",
  },
  {
    q: "Что нужно от меня, чтобы начать?",
    a: "Одна строка. «Сайт для кофейни», «дашборд для трекинга привычек», «игра, чтобы залипнуть в очереди». Остальное я додумаю и покажу.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        index="04"
        kicker="вопросы"
        title="Спрашивают чаще всего"
        note="Если ответа нет — просто задай вопрос в чате, он появится здесь."
        accent="text-amber"
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Rv className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-d text-outline text-6xl font-black select-none md:text-7xl">FAQ</p>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-mut">
            Коротко о том, как устроена работа с цифровым цехом — без мелкого шрифта.
          </p>
        </Rv>
        <ul className="border-t border-bone/10">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Rv as="li" key={f.q} delay={i * 40} className="border-b border-bone/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className={`font-m text-xs ${isOpen ? "text-amber" : "text-mut"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-d flex-1 text-base transition-colors duration-200 md:text-lg ${
                      isOpen ? "text-bone" : "text-bone/70 group-hover:text-bone"
                    }`}
                  >
                    {f.q}
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-amber" : "text-mut group-hover:text-bone"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M10 3v14M3 10h14" />
                  </svg>
                </button>
                <div className={`acc-body ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="max-w-xl pb-6 pl-9 text-[15px] leading-relaxed text-bone/75">{f.a}</p>
                  </div>
                </div>
              </Rv>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ================= footer ================= */
export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-bone/10">
      <Marquee
        reverse
        fast
        items={["опиши идею", "получи сборку", "правь словами", "запусти сегодня"]}
        className="border-b border-bone/10"
      />
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-8">
        <p
          className="font-d text-outline pointer-events-none text-center text-[17vw] leading-[0.95] font-black tracking-tight whitespace-nowrap select-none lg:text-[11rem]"
          aria-hidden
        >
          ЦЕХ·01
        </p>
        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-d text-lg font-bold">Готов собрать что-нибудь?</p>
            <p className="font-m mt-2 max-w-sm text-xs leading-relaxed text-mut">
              Просто напиши в чат одну строку — например, «сайт для кофейни». Через пару минут будет что посмотреть.
            </p>
          </div>
          <nav className="font-m flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest text-mut uppercase">
            <a href="#skills" className="u-sweep hover:text-amber">навыки</a>
            <a href="#playground" className="u-sweep hover:text-mint">полигон</a>
            <a href="#process" className="u-sweep hover:text-coral">процесс</a>
            <a href="#faq" className="u-sweep hover:text-bone">вопросы</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-bone/10 pt-6 font-m text-[11px] text-mut/70 md:flex-row">
          <span>© 2026 · цех·01 — цифровой мастер</span>
          <span>
            эта страница тоже собрана мной · <span className="text-mint">react + vite + tailwind</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
