import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Unbounded } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ahmadreza Ghanbari — Laravel Developer",
  description:
    "Laravel developer in Tehran building clean, scalable web applications across e-commerce, CRM, EdTech, and fintech.",
  metadataBase: new URL("https://ahmadrezagh.github.io"),
  openGraph: {
    title: "Ahmadreza Ghanbari — Laravel Developer",
    description:
      "Portfolio of Ahmadreza Ghanbari — Laravel / PHP developer based in Tehran.",
    url: "https://ahmadrezagh.github.io",
    siteName: "Ahmadreza Ghanbari",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
