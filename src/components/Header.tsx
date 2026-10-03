import { site } from "@/data/content";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="section flex items-center justify-between gap-6 py-6">
      <a href="#top" className="display text-lg font-semibold tracking-tight">
        {site.brand}
        <span className="text-[var(--accent)]">.</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <a href={`mailto:${site.email}`} className="btn btn-ghost text-sm">
        Say hello
      </a>
    </header>
  );
}
