import Image from "next/image";
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
      <a href="#top" className="group flex items-center gap-3">
        <Image
          src="/brand-logo.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 rounded-full ring-1 ring-[rgba(249,243,227,0.12)] transition group-hover:ring-[rgba(216,58,44,0.55)]"
        />
        <span className="display text-lg font-semibold tracking-tight">
          {site.brand}
          <span className="text-[var(--accent)]">.</span>
        </span>
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
