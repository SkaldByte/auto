import { Rv } from "../ui";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Rv>
          <div>
            <p className="font-m mb-4 text-xs tracking-[0.3em] text-red uppercase">
              о канале
            </p>
            <h2 className="font-d text-4xl leading-tight font-black tracking-tight sm:text-5xl md:text-6xl">
              Не обзоры, <br />
              а <span className="text-red">портреты</span>
            </h2>
          </div>
        </Rv>

        <Rv delay={150}>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-bone/80">
              Здесь машины — не просто железо. Это личности со своим характером, историей, слабостями и триумфами.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-bone/80">
              Я рассказываю о них так, как рассказывают о людях: с драмой, юмором и неожиданными поворотами. Без сухих цифр и скучных тестов.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-bone/80">
              Каждая статья — это история, которая заставляет почувствовать машину, а не просто узнать о ней.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-red pl-4">
                <p className="font-d text-3xl font-black text-red">01</p>
                <p className="font-m mt-2 text-xs tracking-wider text-mut uppercase">Характер</p>
                <p className="mt-2 text-sm text-bone/70">У каждой машины есть душа</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <p className="font-d text-3xl font-black text-gold">02</p>
                <p className="font-m mt-2 text-xs tracking-wider text-mut uppercase">История</p>
                <p className="mt-2 text-sm text-bone/70">Драма и триумф</p>
              </div>
            </div>
          </div>
        </Rv>
      </div>
    </section>
  );
}
