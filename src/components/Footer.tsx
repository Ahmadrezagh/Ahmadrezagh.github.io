import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="section border-t border-[var(--line)] py-8">
      <div className="flex flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p className="display text-[var(--ink)]">
          {site.brand}
          <span className="text-[var(--accent)]">.</span>
        </p>
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js · Hosted on GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
