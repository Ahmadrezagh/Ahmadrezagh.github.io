import { site } from "@/data/content";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pb-16 pt-6">
      <div
        className="hero-orb left-[-8%] top-[18%] h-64 w-64 bg-[var(--accent-soft)] md:h-96 md:w-96"
        aria-hidden
      />
      <div
        className="hero-orb right-[-6%] top-[35%] h-72 w-72 bg-[var(--glow)] md:h-[28rem] md:w-[28rem]"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />

      <div className="section relative flex min-h-[calc(100svh-5.5rem)] flex-col justify-center">
        <p className="mono fade-up mb-6 text-xs uppercase tracking-[0.28em] text-[var(--teal)]">
          {site.location}
        </p>

        <h1 className="display fade-up fade-up-delay-1 max-w-5xl text-[clamp(3.4rem,12vw,8.5rem)] font-semibold leading-[0.9]">
          {site.brand}
          <span className="text-[var(--accent)]">.</span>
        </h1>

        <p className="fade-up fade-up-delay-2 mt-6 max-w-xl text-xl text-[var(--muted)] md:text-2xl">
          <span className="text-[var(--ink)]">{site.title}</span>
          {" — "}
          {site.tagline}
        </p>

        <div className="fade-up fade-up-delay-3 mt-10 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">
            View projects
          </a>
          <a href={site.portfolio} className="btn btn-ghost" target="_blank" rel="noreferrer">
            ahmadreza.dev
          </a>
        </div>
      </div>
    </section>
  );
}
