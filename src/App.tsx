import Hero from "./components/Hero";
import Articles from "./components/Articles";
import About from "./components/About";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { Marquee } from "./ui";

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 md:px-8">
        <a href="#top" className="font-d flex items-center gap-2 text-sm font-bold tracking-wide">
          <span className="inline-block h-3 w-3 bg-red" aria-hidden />
          АВТО С ХАРАКТЕРОМ
        </a>
        <nav className="font-m ml-auto hidden items-center gap-7 text-[11px] tracking-[0.2em] text-mut uppercase md:flex">
          <a href="#articles" className="u-sweep hover:text-red">статьи</a>
          <a href="#about" className="u-sweep hover:text-red">о канале</a>
          <a href="#subscribe" className="u-sweep hover:text-red">подписка</a>
        </nav>
        <a
          href="https://dzen.ru/id/5aca8e15f0317313f624eb9b"
          target="_blank"
          rel="noopener noreferrer"
          className="font-d ml-auto rounded-full bg-red px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-red-dark hover:scale-105 md:ml-0"
        >
          Подписаться
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="bg-stage relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Marquee
          items={[
            "Toyota",
            "Porsche",
            "Honda",
            "Mercedes",
            "BMW",
            "Nissan",
            "Citroën",
            "легенды",
            "характер",
            "истории",
          ]}
        />
        <Articles />
        <About />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
