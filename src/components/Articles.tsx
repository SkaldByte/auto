import { Rv } from "../ui";

const ARTICLES = [
  {
    title: "Почему новый Land Cruiser 250 стал «беднее» старого Prado 150",
    subtitle: "Скрытый конфликт внутри Toyota",
    excerpt: "Есть машины, которые не воюют с конкурентами — они воюют сами с собой. Именно так выглядит история Land Cruiser Prado 150 и его формального наследника...",
    url: "https://dzen.ru/a/aonwxJDuHCwqP7O1",
    tag: "Toyota",
    color: "bg-red",
  },
  {
    title: "Citroën DS: Богиня, которая уехала от киллеров",
    subtitle: "На пробитых шинах",
    excerpt: "22 августа 1962 года президента Франции пытались убить прямо на дороге. Двенадцать боевиков открыли огонь по его машине из автоматов — почти полторы сотни пуль за несколько секунд...",
    url: "https://dzen.ru/a/aoYd4K1cgx1JbJN1",
    tag: "Citroën",
    color: "bg-gold",
  },
  {
    title: "Porsche 911 993: Последний, кто дышал свободно",
    subtitle: "Воздушное охлаждение уходит",
    excerpt: "В 1993 году в Штутгарте поняли страшную вещь. Воздух заканчивается. Не в прямом смысле. Просто двигатели с воздушным охлаждением больше не смогут пройти новые экологические нормы...",
    url: "https://dzen.ru/a/anXL3rdx9jSTbKDz",
    tag: "Porsche",
    color: "bg-red",
  },
  {
    title: "Honda NSX: Инженер, который решил убить Ferrari",
    subtitle: "Японская революция",
    excerpt: "В конце восьмидесятых годов Ferrari была одним из главных символов автомобильного мира. Её машины покупали не потому, что они были практичнее остальных...",
    url: "https://dzen.ru/a/anXKz1isDFMqmMjt",
    tag: "Honda",
    color: "bg-gold",
  },
  {
    title: "Mercedes W140: Последний настоящий босс",
    subtitle: "Чёрный Мерседес",
    excerpt: "В тот вечер он приехал без охраны. Это заметили сразу. Чёрный Mercedes медленно свернул во двор, прошёл мимо припаркованных машин и остановился у подъезда...",
    url: "https://dzen.ru/a/allrlEUef00ZvfCp",
    tag: "Mercedes",
    color: "bg-red",
  },
  {
    title: "BMW M5 E60: Немецкий психопат в костюме бизнесмена",
    subtitle: "V10 под смокингом",
    excerpt: "Пролог. Тот, кто не повышает голоса. Представь директора крупной компании. Идеальный костюм от Brioni. Дорогие часы на запястье. Спокойный, чуть уставший взгляд...",
    url: "https://dzen.ru/a/alVyesX5gx1023Aw",
    tag: "BMW",
    color: "bg-gold",
  },
  {
    title: "Nissan GT-R R35: Дело, которое никто не хотел расследовать",
    subtitle: "Почему его прозвали Годзиллой",
    excerpt: "В паддоке стояла тяжёлая тишина. Справа блестел красный Ferrari. Чуть дальше — Porsche, ещё дальше — Lamborghini. Все они уже давно считались местной аристократией...",
    url: "https://dzen.ru/a/alKvPHzQxXyhDpBL",
    tag: "Nissan",
    color: "bg-red",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Rv>
        <div className="mb-12 md:mb-16">
          <p className="font-m mb-4 text-xs tracking-[0.3em] text-red uppercase">
            последние публикации
          </p>
          <h2 className="font-d text-4xl leading-tight font-black tracking-tight sm:text-5xl md:text-6xl">
            Истории, которые <span className="text-red">за рулём</span>
          </h2>
        </div>
      </Rv>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article, i) => (
          <Rv key={article.url} delay={i * 80}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover relative flex h-full flex-col overflow-hidden rounded-lg border border-bone/10 bg-ink2 transition-all duration-300 hover:border-red/50"
            >
              {/* tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`font-m inline-block rounded px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${article.color} text-ink`}>
                  {article.tag}
                </span>
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col p-6 pt-14">
                <h3 className="font-d text-xl leading-tight font-bold transition-colors duration-300 group-hover:text-red">
                  {article.title}
                </h3>
                <p className="font-m mt-2 text-sm text-mut">{article.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-bone/70">
                  {article.excerpt}
                </p>

                {/* read more */}
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-red transition-all duration-300 group-hover:gap-3">
                  <span>Читать на Дзене</span>
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 10h10m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </div>
              </div>
            </a>
          </Rv>
        ))}
      </div>

      <Rv delay={200}>
        <div className="mt-12 text-center">
          <a
            href="https://dzen.ru/id/5aca8e15f0317313f624eb9b"
            target="_blank"
            rel="noopener noreferrer"
            className="font-d inline-flex items-center gap-3 rounded-full border-2 border-red px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-red hover:scale-105"
          >
            Все статьи на канале
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 10h10m0 0l-4-4m4 4l-4 4" />
            </svg>
          </a>
        </div>
      </Rv>
    </section>
  );
}
