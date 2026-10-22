import { Marquee } from "../ui";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-bone/10">
      <Marquee
        items={[
          "Toyota",
          "Porsche",
          "Honda",
          "Mercedes",
          "BMW",
          "Nissan",
          "Citroën",
          "характер",
          "истории",
          "легенды",
        ]}
        className="border-b border-bone/10"
      />
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-8">
        <div className="text-center">
          <p className="font-d text-outline pointer-events-none text-6xl leading-[0.95] font-black tracking-tight select-none sm:text-7xl md:text-8xl">
            <span className="text-bone/15">АВТО С</span>
            <br />
            <span className="text-red/30">ХАРАКТЕРОМ</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="font-d text-lg font-bold">Канал на Дзене</p>
            <p className="font-m mt-2 max-w-sm text-xs leading-relaxed text-mut">
              Легендарные автомобили с душой. Истории, характеры, неожиданные факты. Без скучных обзоров.
            </p>
          </div>
          <nav className="font-m flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-widest text-mut uppercase md:justify-end">
            <a href="#top" className="u-sweep hover:text-red">главная</a>
            <a href="#articles" className="u-sweep hover:text-red">статьи</a>
            <a href="#about" className="u-sweep hover:text-red">о канале</a>
            <a href="#subscribe" className="u-sweep hover:text-red">подписка</a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-bone/10 pt-6 text-center font-m text-[11px] text-mut/70 md:flex-row md:text-left">
          <span>© 2026 · Авто с характером</span>
          <a
            href="https://dzen.ru/id/5aca8e15f0317313f624eb9b"
            target="_blank"
            rel="noopener noreferrer"
            className="u-sweep hover:text-red"
          >
            dzen.ru/id/5aca8e15f0317313f624eb9b
          </a>
        </div>
      </div>
    </footer>
  );
}
