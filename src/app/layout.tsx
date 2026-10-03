import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Sora, Syne } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/content";
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

const title = `${site.name} — ${site.title}`;
const description = `${site.description} Based in ${site.location}. ${site.tagline}`;
const ogImage = {
  url: "/brand-logo.png",
  width: 640,
  height: 640,
  alt: `${site.name} brand mark`,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.portfolio),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Ahmadreza Ghanbari",
    "Software Engineer",
    "Laravel",
    "PHP",
    "Next.js",
    "React",
    "Backend Developer",
    "Tehran",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: site.name, url: site.portfolio }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title,
    description,
    url: site.portfolio,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [ogImage.url],
    creator: "@Ahmadreza_ghh",
  },
  verification: {
    google: "LbXN2kt_0-SQ7FluzkOUjNfoW2BwlPJLxUwR8_YStt0",
  },
};

export const viewport: Viewport = {
  themeColor: "#d83a2c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
