import Image from "next/image";
import { site } from "@/data/content";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pb-20 pt-4">
      <div
        className="hero-orb left-[-12%] top-[22%] h-72 w-72 bg-[var(--accent-soft)] md:h-[28rem] md:w-[28rem]"
        aria-hidden
      />
      <div
        className="hero-orb right-[-10%] top-[48%] h-80 w-80 bg-[var(--glow)] md:h-[32rem] md:w-[32rem]"
        style={{ animationDelay: "-5s" }}
        aria-hidden
      />

      <div className="section relative flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-center text-center">
        <div className="brand-mark mb-10 md:mb-12">
          <Image
            src="/brand-logo.png"
            alt={`${site.name} brand mark`}
            width={840}
            height={840}
            priority
            className="relative z-[1] h-full w-full rounded-full object-cover"
            style={{
              boxShadow:
                "0 0 0 1px rgba(249, 243, 227, 0.08), 0 24px 60px rgba(0, 0, 0, 0.55), 0 0 40px rgba(216, 58, 44, 0.18)",
            }}
          />
        </div>

        <h1 className="display fade-up fade-up-delay-1 max-w-3xl text-[clamp(2.4rem,7vw,4.75rem)] font-bold leading-[0.95] tracking-tight">
          {site.title}
        </h1>

        <p className="fade-up fade-up-delay-2 mt-5 max-w-lg text-base text-[var(--muted)] md:text-lg">
          {site.tagline}
        </p>

        <div className="fade-up fade-up-delay-3 mt-9 flex flex-wrap justify-center gap-3">
          <a href="#work" className="btn btn-primary">
            View projects
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
