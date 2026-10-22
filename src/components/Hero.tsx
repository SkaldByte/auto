import { Rv } from "../ui";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* speed lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 h-px w-32 bg-gradient-to-r from-transparent via-red/40 to-transparent speed-line" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 left-0 h-px w-48 bg-gradient-to-r from-transparent via-red/30 to-transparent speed-line" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-0 h-px w-40 bg-gradient-to-r from-transparent via-red/20 to-transparent speed-line" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 left-0 h-px w-36 bg-gradient-to-r from-transparent via-red/25 to-transparent speed-line" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 py-32 text-center md:px-8">
        <Rv>
          <p className="font-m mb-6 flex items-center justify-center gap-3 text-xs tracking-[0.3em] text-red uppercase">
            <span className="pulse-dot h-2 w-2 rounded-full bg-red" />
            канал на дзене
          </p>
        </Rv>

        <Rv delay={100}>
          <h1 className="font-d text-6xl leading-[0.95] font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block">АВТО</span>
            <span className="block text-red">С ХАРАКТЕРОМ</span>
          </h1>
        </Rv>

        <Rv delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
            Здесь каждое авто раскрывается как настоящая личность — со своим характером, историями, юмором и неожиданными фактами.
          </p>
        </Rv>

        <Rv delay={300}>
          <p className="mt-4 max-w-xl text-base text-mut">
            От легендарных классиков до редких моделей — без скучных обзоров.
          </p>
        </Rv>

        <Rv delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://dzen.ru/id/5aca8e15f0317313f624eb9b"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-d relative inline-flex items-center gap-3 rounded-full bg-red px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-red-dark hover:scale-105"
            >
              <span className="relative z-10">Подписаться на канал</span>
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
            <a
              href="#articles"
              className="font-d inline-flex items-center gap-2 rounded-full border-2 border-bone/20 px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:border-bone hover:bg-bone/5"
            >
              Читать статьи
            </a>
          </div>
        </Rv>

        <Rv delay={500}>
          <div className="mt-16 flex items-center gap-8 text-center">
            <div>
              <p className="font-d text-4xl font-black text-red">107</p>
              <p className="font-m mt-1 text-xs tracking-wider text-mut uppercase">подписчиков</p>
            </div>
            <div className="h-12 w-px bg-bone/20" />
            <div>
              <p className="font-d text-4xl font-black text-red">9+</p>
              <p className="font-m mt-1 text-xs tracking-wider text-mut uppercase">статей</p>
            </div>
            <div className="h-12 w-px bg-bone/20" />
            <div>
              <p className="font-d text-4xl font-black text-red">∞</p>
              <p className="font-m mt-1 text-xs tracking-wider text-mut uppercase">характера</p>
            </div>
          </div>
        </Rv>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="float-y flex flex-col items-center gap-2">
            <span className="font-m text-[10px] tracking-widest text-mut uppercase">листай</span>
            <svg
              viewBox="0 0 20 20"
              className="h-6 w-6 text-red"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 3v14m0 0l-5-5m5 5l5-5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
