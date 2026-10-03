import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
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
    images: [{ url: "/brand-logo.png" }],
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
