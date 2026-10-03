import { projects } from "@/data/content";
import { Reveal } from "./Reveal";

const groups = [
  {
    id: "commerce",
    title: "E-commerce & Marketplaces",
    items: projects.filter((p) => p.category === "commerce"),
  },
  {
    id: "platforms",
    title: "Platforms & Products",
    items: projects.filter((p) => p.category === "platforms"),
  },
] as const;

export function Projects() {
  return (
    <section id="work" className="section py-24 md:py-32">
      <Reveal>
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
              Selected work
            </p>
            <h2 className="display text-4xl font-semibold md:text-5xl">Projects</h2>
          </div>
          <p className="max-w-md text-[var(--muted)]">
            Production systems across commerce, education, finance, and marketplaces.
          </p>
        </div>
      </Reveal>

      <div className="space-y-16">
        {groups.map((group, groupIndex) => (
          <div key={group.id}>
            <Reveal delay={groupIndex * 80}>
              <h3 className="mono mb-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                {group.title}
              </h3>
            </Reveal>
            <div>
              {group.items.map((project, index) => (
                <Reveal key={project.name} delay={index * 40}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-row"
                  >
                    <div className="display text-xl font-semibold md:text-2xl">
                      {project.name}
                    </div>
                    <div>
                      <p className="text-[var(--muted)] transition-colors group-hover:text-inherit">
                        {project.description}
                      </p>
                      <p className="mono mt-2 text-xs tracking-wide text-[var(--accent)]">
                        {project.stack.join(" · ")}
                      </p>
                    </div>
                    <div className="project-arrow mono text-sm text-[var(--accent)]">
                      Visit ↗
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
