import { projects } from "@/data/content";
import { Reveal } from "./Reveal";
import { TechIcon } from "./TechIcon";

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
              <h3 className="mono mb-5 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                {group.title}
              </h3>
            </Reveal>
            <div className="project-grid">
              {group.items.map((project, index) => (
                <Reveal key={project.name} delay={index * 40}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="display text-xl font-semibold md:text-2xl">
                        {project.name}
                      </h4>
                      <span className="project-arrow mono shrink-0 text-sm text-[var(--accent)]">
                        Visit ↗
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-[0.95rem]">
                      {project.description}
                    </p>

                    <ul className="project-tech-list" aria-label={`${project.name} tech stack`}>
                      {project.stack.map((item) => (
                        <li key={item} className="project-tech">
                          <TechIcon name={item} className="project-tech-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
