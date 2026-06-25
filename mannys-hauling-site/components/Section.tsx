import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  text,
  children,
  dark = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-black py-24 text-white" : "bg-white py-24 text-brand-ink"}>
      <div className="container">
        <div className="mb-12 max-w-3xl">
          {eyebrow && <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">{eyebrow}</p>}
          <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">{title}</h2>
          {text && <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/68" : "text-black/62"}`}>{text}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
