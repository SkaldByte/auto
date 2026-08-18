import { useState } from "react";
import { Rv, SectionHead } from "../ui";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Glyphs = [
  /* курсор-клик */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <path d="M5 3l7 17 2.4-6.6L21 11 5 3z" />
    <path d="M15.5 15.5L20 20" />
  </svg>,
  /* график */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <path d="M3 21h18M6 21V10M11 21V4M16 21v-9M21 21V7" />
  </svg>,
  /* геймпад */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <path d="M6 9h12a4 4 0 014 4l-1.2 5a2.4 2.4 0 01-4.2 1L15 17H9l-1.6 2a2.4 2.4 0 01-4.2-1L2 13a4 4 0 014-4z" />
    <path d="M7.5 12h3M9 10.5v3M15.5 11.5h.01M17.5 13.5h.01" />
  </svg>,
  /* корзина */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <path d="M4 8h16l-1.6 11a2 2 0 01-2 1.7H7.6a2 2 0 01-2-1.7L4 8z" />
    <path d="M8.5 8V6.5a3.5 3.5 0 017 0V8M9.5 12v4M14.5 12v4" />
  </svg>,
  /* спарклайн */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <path d="M2 17l5-6 4 3 6-8 5 4" />
    <circle cx="17" cy="6" r="1.6" />
  </svg>,
  /* рамка-галерея */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <rect x="3" y="4" width="18" height="14" rx="1.5" />
    <path d="M3 14l5-4 4 3 5-5 4 4M9 21h6" />
  </svg>,
  /* шестерня-утилита */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <path d="M14.5 6.5l3-3 3 3-3 3M4 20l6.5-6.5M12.5 8.5L9 12m6.5-1.5L19 14a2.1 2.1 0 11-3 3l-3.5-3.5" />
    <path d="M5.5 15.5L3 18a2.1 2.1 0 103 3l2.5-2.5" />
  </svg>,
  /* искра-ИИ */
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
    <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
  </svg>,
];

type Cap = {
  title: string;
  desc: string;
  tags: string[];
  inside: string[];
  accent: string;
};

const CAPS: Cap[] = [
  {
    title: "Лендинги и промо",
    desc: "Продающие страницы с характером: ритм секций, крупные заголовки, формы, которые реально отправляются.",
    tags: ["анимации", "формы", "SEO-базa"],
    inside: ["обложка с движением", "блок цен и тарифов", "FAQ-аккордеон", "счётчик до запуска"],
    accent: "text-amber",
  },
  {
    title: "Дашборды и админки",
    desc: "Панели с таблицами, фильтрами и живыми графиками. Данные — настоящие, сортировки — рабочие.",
    tags: ["таблицы", "фильтры", "графики"],
    inside: ["KPI-плитки", "сортировка и поиск", "скелетоны загрузки", "тёмная/светлая тема"],
    accent: "text-mint",
  },
  {
    title: "Игры и интерактив",
    desc: "Браузерные игры на canvas и requestAnimationFrame: от кликеров до аркад с физикой и рекордами.",
    tags: ["canvas", "физика", "рекорды"],
    inside: ["игровой цикл 60 FPS", "звук через WebAudio", "таблица рекордов", "управление с тача"],
    accent: "text-coral",
  },
  {
    title: "Магазины и каталоги",
    desc: "Витрины с корзиной, фильтрами и карточками товара. Корзина живёт в localStorage и переживает перезагрузку.",
    tags: ["корзина", "фильтры", "карточки"],
    inside: ["быстрый просмотр", "избранное", "чекаут-шаги", "бейджи и скидки"],
    accent: "text-amber",
  },
  {
    title: "Визуализация данных",
    desc: "Графики на чистом SVG: бар-чарты, спарклайны, тепловые карты — анимированные и без тяжёлых библиотек.",
    tags: ["SVG", "анимация", "real-time"],
    inside: ["bar и line чарты", "тултипы", "живое обновление", "экспорт данных"],
    accent: "text-mint",
  },
  {
    title: "Портфолио и медиа",
    desc: "Галереи и кейсы, где типографика работает не хуже фотографий: лайтбокс, masonry, плавные переходы.",
    tags: ["галерея", "лайтбокс", "типографика"],
    inside: ["masonry-сетка", "кейсы с историей", "scroll-reveal", "быстрые превью"],
    accent: "text-coral",
  },
  {
    title: "Утилиты и инструменты",
    desc: "Калькуляторы, генераторы, конвертеры — маленькие продукты с одним действием, доведённым до блеска.",
    tags: ["калькуляторы", "генераторы", "конвертеры"],
    inside: ["мгновенный результат", "копирование в буфер", "история операций", "горячие клавиши"],
    accent: "text-amber",
  },
  {
    title: "AI-интеграции",
    desc: "Интерфейсы для нейросетей: чаты со стримингом ответов, prompt-билдеры, обвязка вокруг API.",
    tags: ["чат", "стриминг", "prompt-UI"],
    inside: ["печатающийся ответ", "история диалога", "пресеты промптов", "обработка ошибок"],
    accent: "text-mint",
  },
];

export default function Capabilities() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        index="01"
        kicker="навыки"
        title="Восемь направлений — один исполнитель"
        note="Каждая строка раскрывается. Внутри — что именно попадает в сборку по умолчанию."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-16">
        {/* sticky left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Rv>
            <p className="font-d text-outline-amber text-7xl font-900 font-black select-none md:text-8xl">
              08
            </p>
            <p className="font-m mt-6 text-xs leading-relaxed tracking-wider text-mut">
              ОТ ЛЕНДИНГА ДО ИГРЫ —
              <br />
              ВЕСЬ ЦИКЛ ВНУТРИ ОДНОГО ЧАТА:
              <br />
              <span className="text-bone">идея → макет → код → сборка</span>
            </p>
            <div className="mt-8 flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M12 4v14m0 0l-5-5m5 5l5-5" />
              </svg>
              <span className="font-m text-[11px] tracking-[0.25em] text-mut uppercase">выбери строку</span>
            </div>
          </Rv>
        </div>

        {/* rows */}
        <ul className="border-t border-bone/10">
          {CAPS.map((c, i) => {
            const isOpen = open === i;
            return (
              <Rv as="li" key={c.title} delay={i * 40} className="border-b border-bone/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-5 text-left md:gap-6 md:py-6"
                >
                  <span className="font-m w-8 shrink-0 text-xs text-mut transition-colors group-hover:text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`shrink-0 transition-all duration-300 ${c.accent} ${
                      isOpen ? "rotate-0 scale-110" : "-rotate-6 opacity-60 group-hover:rotate-0 group-hover:opacity-100"
                    }`}
                  >
                    {Glyphs[i]}
                  </span>
                  <span
                    className={`font-d flex-1 text-lg transition-all duration-300 group-hover:translate-x-2 md:text-2xl ${
                      isOpen ? "text-bone" : "text-bone/75 group-hover:text-bone"
                    }`}
                  >
                    {c.title}
                  </span>
                  <span
                    className={`font-m shrink-0 text-xl transition-transform duration-300 ${isOpen ? "rotate-45 text-amber" : "text-mut group-hover:text-bone"}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div className={`acc-body ${isOpen ? "open" : ""}`}>
                  <div>
                    <div className="grid gap-6 pb-7 pl-0 md:grid-cols-[1.2fr_1fr] md:pl-20">
                      <div>
                        <p className="text-[15px] leading-relaxed text-bone/80">{c.desc}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {c.tags.map((t) => (
                            <span key={t} className="font-m rounded-full border border-bone/15 px-3 py-1 text-[11px] text-mut">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="border-l-2 border-bone/10 pl-5">
                        <p className={`font-m mb-3 text-[10px] tracking-[0.3em] uppercase ${c.accent}`}>внутри сборки</p>
                        <ul className="space-y-1.5">
                          {c.inside.map((f) => (
                            <li key={f} className="font-m flex items-start gap-2 text-xs text-mut">
                              <span className={`mt-0.5 ${c.accent}`}>▸</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
