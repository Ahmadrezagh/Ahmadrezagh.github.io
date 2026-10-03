import { tech } from "@/data/content";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="section py-24 md:py-28">
      <Reveal>
          <p className="mono mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Toolkit
          </p>
        <h2 className="display mb-10 text-4xl font-semibold md:text-5xl">Tech stack</h2>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(tech).map(([area, items], index) => (
          <Reveal key={area} delay={index * 70}>
            <div className="border-t border-[var(--line)] pt-5">
              <h3 className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {area}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
