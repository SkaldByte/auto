import { CSSProperties, ReactNode } from "react";
import { useInView } from "./hooks";

export function Rv({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article" | "p" | "h2" | "h3";
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

export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="font-d px-6 text-sm font-medium tracking-[0.22em] text-bone/60 uppercase md:px-8 md:text-base">
            {it}
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-red">
            <path d="M8 2l4 6-4 6-4-6z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden border-y border-bone/10 bg-ink2/60 py-4 ${className}`}>
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
