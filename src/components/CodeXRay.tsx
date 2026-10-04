"use client";

import { useEffect, useRef } from "react";

const SOURCE = `// ahmadrezagh.github.io — source glimpse
import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora, Syne } from "next/font/google";
import { site, projects, tech } from "@/data/content";

export const metadata: Metadata = {
  title: \`\${site.name} — \${site.title}\`,
  description: site.tagline,
  metadataBase: new URL(site.portfolio),
};

export default function Home() {
  return (
    <div className="site-shell">
      <div className="atmosphere" aria-hidden />
      <Header brand={site.brand} />
      <main>
        <Hero
          title={site.title}
          tagline={site.tagline}
          cta={["View projects", "Contact"]}
        />
        <Projects items={projects} />
        <Stack groups={tech} />
        <About location={site.location} />
        <Contact email={site.email} />
      </main>
      <Footer />
    </div>
  );
}

function Hero({ title, tagline }: HeroProps) {
  return (
    <section className="relative min-h-[100svh]">
      <h1 className="display">{title}</h1>
      <p className="muted">{tagline}</p>
      {/* Laravel · Next.js · FastAPI · Flutter */}
    </section>
  );
}

const projects = [
  { name: "TorobShop", stack: ["Laravel"] },
  { name: "TorobMall", stack: ["Laravel"] },
  { name: "PayTorobShop", stack: ["Laravel"] },
  { name: "PatiBal", stack: ["Laravel", "Next.js"] },
  { name: "Zarnia", stack: ["Laravel", "Next.js"] },
  { name: "Roominest", stack: ["Laravel", "BBB"] },
  { name: "Nerkhoone", stack: ["Python", "Flask"] },
  { name: "Jibeto", stack: ["Flutter", "Laravel"] },
];

async function getRates(): Promise<RateBoard> {
  const res = await fetch("/api/rates", { next: { revalidate: 30 } });
  if (!res.ok) throw new Error("rate_board_unavailable");
  return res.json();
}

export async function POST(req: Request) {
  const body = await req.json();
  const order = await Order::create({
    user_id: auth()->id(),
    payload: body,
    status: "pending",
  });
  return Response.json({ id: order.id }, { status: 201 });
}

/* CSS tokens — brand pulse */
:root {
  --bg: #050505;
  --ink: #f9f3e3;
  --accent: #d83a2c;
  --glow: rgba(216, 58, 44, 0.28);
}

.atmosphere {
  background:
    radial-gradient(ellipse at 50% -8%, rgba(216, 58, 44, 0.22), transparent),
    linear-gradient(180deg, #050505, #0a0808);
}

.btn-primary {
  background: var(--accent);
  box-shadow: 0 0 24px var(--glow);
}

// shipping production systems across
// commerce · education · finance · marketplaces
`;

function colorize(line: string): string {
  const escaped = line
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  if (/^\s*(\/\/|\/\*)/.test(line) || /^\s*\*/.test(line)) {
    return `<span class="cx-comment">${escaped}</span>`;
  }

  return escaped
    .replace(
      /("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`)/g,
      '<span class="cx-str">$1</span>',
    )
    .replace(
      /(#(?:[0-9a-fA-F]{3,8}))/g,
      '<span class="cx-accent">$1</span>',
    )
    .replace(
      /\b(import|from|export|default|function|const|async|await|return|throw|new|type|if)\b/g,
      '<span class="cx-kw">$1</span>',
    )
    .replace(/\b(\d+)\b/g, '<span class="cx-num">$1</span>');
}

const HIGHLIGHTED_LINES = SOURCE.split("\n").map((line) => colorize(line));

function buildColumn(offset: number, repeats = 4): string {
  const rotated = [
    ...HIGHLIGHTED_LINES.slice(offset),
    ...HIGHLIGHTED_LINES.slice(0, offset),
  ];
  return Array.from({ length: repeats }, () => rotated.join("\n")).join("\n\n");
}

const COLUMNS = [
  { html: buildColumn(0), shift: "0vh" },
  { html: buildColumn(14), shift: "-8vh" },
  { html: buildColumn(28), shift: "-18vh" },
  { html: buildColumn(7), shift: "-4vh" },
  { html: buildColumn(21), shift: "-12vh" },
];

export function CodeXRay() {
  const rootRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const beam = beamRef.current;
    if (!root || !beam) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reduceMotion.matches) {
      root.dataset.state = "off";
      return;
    }

    root.dataset.state = "ready";

    let raf = 0;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.35;
    let currentX = targetX;
    let currentY = targetY;
    let scrollY = window.scrollY;

    const setActive = (active: boolean) => {
      if (activeRef.current === active) return;
      activeRef.current = active;
      root.dataset.state = active ? "on" : "ready";
    };

    const paint = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.18;
      currentY += dy * 0.18;

      root.style.setProperty("--cx", `${currentX}px`);
      root.style.setProperty("--cy", `${currentY}px`);
      root.style.setProperty("--scroll", `${scrollY}px`);
      beam.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        raf = requestAnimationFrame(paint);
      } else {
        raf = 0;
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!activeRef.current) {
        currentX = targetX;
        currentY = targetY;
      }
      setActive(true);
      schedule();
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      root.style.setProperty("--scroll", `${scrollY}px`);
    };

    const onLeave = () => {
      setActive(false);
    };

    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    schedule();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="code-xray"
      data-state="off"
      aria-hidden
    >
      <div className="code-xray-beam" ref={beamRef} />
      <div className="code-xray-panel">
        <div className="code-xray-grid">
          {COLUMNS.map((column, index) => (
            <pre
              key={index}
              className="code-xray-source"
              style={{ marginTop: column.shift }}
              dangerouslySetInnerHTML={{ __html: column.html }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
