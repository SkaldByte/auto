import { CSSProperties, ReactNode } from "react";
import { useInView } from "./hooks";

/* scroll-reveal wrapper */
export function Rv({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const { ref, on } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`rv ${on ? "on" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* running line */
export function Marquee({
  items,
  reverse = false,
  fast = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  fast?: boolean;
  className?: string;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="font-d px-6 text-sm font-medium tracking-[0.22em] text-bone/70 uppercase md:px-8 md:text-base">
            {it}
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" className="text-amber">
            <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`overflow-hidden border-y border-bone/10 bg-ink2/60 py-4 ${className}`}
    >
      <div
        className={`marquee-track flex w-max ${reverse ? "rev" : ""} ${fast ? "fast" : ""}`}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* section heading with mono index */
export function SectionHead({
  index,
  kicker,
  title,
  note,
  accent = "text-amber",
}: {
  index: string;
  kicker: string;
  title: string;
  note?: string;
  accent?: string;
}) {
  return (
    <Rv className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
      <div>
        <p className={`font-m mb-4 text-xs tracking-[0.3em] uppercase ${accent}`}>
          <span className="text-mut">{index} / </span>
          {kicker}
        </p>
        <h2 className="font-d max-w-2xl text-3xl leading-[1.08] font-bold sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {note && (
        <p className="font-m max-w-xs border-l-2 border-bone/15 pl-4 text-xs leading-relaxed text-mut">
          {note}
        </p>
      )}
    </Rv>
  );
}
