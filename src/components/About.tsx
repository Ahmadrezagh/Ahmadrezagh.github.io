import { about, site } from "@/data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section py-24 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <Reveal>
          <p className="mono mb-3 text-xs uppercase tracking-[0.24em] text-[var(--teal)]">
            About
          </p>
          <h2 className="display text-4xl font-semibold md:text-5xl">
            {site.name}
          </h2>
        </Reveal>
        <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
          {about.map((line, index) => (
            <Reveal key={line} delay={index * 80}>
              <p>{line}</p>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <p className="text-[var(--ink)]">{site.description}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
