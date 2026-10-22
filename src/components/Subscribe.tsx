import { Rv } from "../ui";

export default function Subscribe() {
  return (
    <section id="subscribe" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Rv>
        <div className="relative overflow-hidden rounded-2xl border border-red/30 bg-gradient-to-br from-ink2 via-ink3 to-ink2 p-10 md:p-16">
          {/* decorative elements */}
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-red/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative z-10 text-center">
            <p className="font-m mb-4 text-xs tracking-[0.3em] text-red uppercase">
              не пропусти
            </p>
            <h2 className="font-d text-4xl leading-tight font-black tracking-tight sm:text-5xl md:text-6xl">
              Подпишись на <span className="text-red">характер</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bone/80">
              Новые истории о легендарных машинах — каждую неделю. Без спама, только характер.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://dzen.ru/id/5aca8e15f0317313f624eb9b"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-d relative inline-flex items-center gap-3 rounded-full bg-red px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-red-dark hover:scale-105"
              >
                <span className="relative z-10">Подписаться на Дзене</span>
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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

            <div className="mt-10 flex items-center justify-center gap-8">
              <div>
                <p className="font-d text-3xl font-black text-red">107</p>
                <p className="font-m mt-1 text-xs tracking-wider text-mut uppercase">уже с нами</p>
              </div>
              <div className="h-12 w-px bg-bone/20" />
              <div>
                <p className="font-d text-3xl font-black text-gold">1</p>
                <p className="font-m mt-1 text-xs tracking-wider text-mut uppercase">новая статья в неделю</p>
              </div>
            </div>
          </div>
        </div>
      </Rv>
    </section>
  );
}
