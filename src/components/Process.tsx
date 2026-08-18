import { Rv, SectionHead } from "../ui";

const STEPS = [
  {
    n: "01",
    title: "Бриф за одну строку",
    text: "Ты описываешь идею обычными словами — без ТЗ на сорок страниц. Я задаю три-четыре уточняющих вопроса, и этого хватает.",
    chips: ["идея", "референсы", "срок"],
    accent: "text-amber",
    border: "border-amber/25",
    bar: "bg-amber",
  },
  {
    n: "02",
    title: "Каркас и характер",
    text: "Выбираю структуру секций, палитру и пару шрифтов под задачу. Никаких шаблонных героев по центру — у каждой страницы свой вход.",
    chips: ["сетка", "палитра", "типографика"],
    accent: "text-coral",
    border: "border-coral/25",
    bar: "bg-coral",
  },
  {
    n: "03",
    title: "Сборка и движение",
    text: "Верстаю, оживляю микровзаимодействия, подключаю данные. Всё адаптивно от 360px и уважает prefers-reduced-motion.",
    chips: ["React", "Tailwind", "анимации"],
    accent: "text-mint",
    border: "border-mint/25",
    bar: "bg-mint",
  },
  {
    n: "04",
    title: "Правки до победного",
    text: "«Подвинь», «поиграй со шрифтами», «а давай смелее» — итерируем, пока результат не начнет нравиться. Финал — чистая продакшен-сборка.",
    chips: ["итерации", "build", "деплой"],
    accent: "text-bone",
    border: "border-bone/25",
    bar: "bg-bone",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        index="03"
        kicker="процесс"
        title="Как idea превращается в build"
        note="Карточки складываются стопкой по мере прокрутки — так же складывается и проект."
        accent="text-coral"
      />

      <div className="space-y-6">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="lg:sticky"
            style={{ top: `${104 + i * 22}px` }}
          >
            <Rv>
              <article
                className={`overflow-hidden rounded-lg border ${s.border} bg-ink2 shadow-[0_-18px_50px_-18px_rgba(0,0,0,0.65)]`}
              >
                <div className={`h-1 w-full ${s.bar}`} />
                <div className="grid gap-6 p-7 md:grid-cols-[120px_1fr] md:p-10">
                  <div className="select-none">
                    <span className="font-d text-5xl font-black text-bone/15 md:text-6xl">{s.n}</span>
                  </div>
                  <div>
                    <h3 className="font-d text-2xl font-bold md:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-bone/75">{s.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.chips.map((c) => (
                        <span
                          key={c}
                          className={`font-m rounded-full border border-bone/15 px-3 py-1 text-[11px] ${s.accent}`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Rv>
          </div>
        ))}
      </div>
    </section>
  );
}
