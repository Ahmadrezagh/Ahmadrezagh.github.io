import { links, site } from "@/data/content";
import { ContactIcon } from "./ContactIcon";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section py-24 md:py-32">
      <Reveal>
        <p className="mono mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
          Connect
        </p>
        <h2 className="display mb-4 text-4xl font-semibold md:text-6xl">
          Let&apos;s build something solid.
        </h2>
        <p className="mb-10 max-w-xl text-lg text-[var(--muted)]">
          Open to collaborations, freelance work, and backend-heavy product builds.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            {site.email}
          </a>
          <a href={site.portfolio} className="btn btn-ghost" target="_blank" rel="noreferrer">
            Portfolio site
          </a>
        </div>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {links.map((link, index) => (
          <Reveal key={link.label} delay={index * 50}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="link-tile"
              aria-label={`${link.label}: ${link.value}`}
            >
              <span className="link-tile-main">
                <ContactIcon name={link.label} className="link-tile-icon" />
                <span className="link-tile-swap">
                  <span className="link-tile-label" aria-hidden="true">
                    {link.label}
                  </span>
                  <span className="link-tile-value" aria-hidden="true">
                    {link.value}
                  </span>
                </span>
              </span>
              <span className="mono text-sm opacity-70">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
