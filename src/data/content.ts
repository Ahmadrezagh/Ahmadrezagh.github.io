export const site = {
  name: "Ahmadreza Ghanbari",
  brand: "Ahmadreza",
  title: "Laravel Developer",
  location: "Tehran, Iran",
  tagline:
    "Building clean, scalable web applications with Laravel and modern technologies.",
  description:
    "Backend-focused developer shipping e-commerce, CRM, EdTech, and fintech platforms.",
  portfolio: "https://ahmadrezagh.github.io",
  email: "ahmadreza1998dev@gmail.com",
  phone: "+989139759913",
};

export const links = [
  {
    label: "Website",
    value: "ahmadrezagh.github.io",
    href: "https://ahmadrezagh.github.io",
  },
  {
    label: "Email",
    value: "ahmadreza1998dev@gmail.com",
    href: "mailto:ahmadreza1998dev@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "ahmadrezaweb",
    href: "https://www.linkedin.com/in/ahmadrezaweb/",
  },
  {
    label: "GitHub",
    value: "Ahmadrezagh",
    href: "https://github.com/Ahmadrezagh",
  },
  {
    label: "Telegram",
    value: "@ahmadreza.web",
    href: "https://t.me/ahmadreza.web",
  },
  {
    label: "YouTube",
    value: "@ahmadrezaweb",
    href: "https://youtube.com/@ahmadrezaweb",
  },
  {
    label: "X",
    value: "@Ahmadreza_ghh",
    href: "https://x.com/Ahmadreza_ghh",
  },
] as const;

export const tech = {
  Backend: ["PHP", "Laravel", "FastAPI", "Flask"],
  Frontend: ["React", "Next.js", "React Native"],
  Mobile: ["Flutter"],
  Data: ["MySQL", "PostgreSQL", "MongoDB"],
  Other: ["REST APIs", "PWA", "BigBlueButton"],
} as const;

export type Project = {
  name: string;
  description: string;
  stack: string[];
  href: string;
  category: "commerce" | "platforms";
};

export const projects: Project[] = [
  {
    name: "TorobShop",
    description:
      "E-commerce for authentic international products, including Amazon order and delivery to Iran.",
    stack: ["Laravel"],
    href: "https://torobshop.com/",
    category: "commerce",
  },
  {
    name: "TorobMall",
    description:
      "Marketplace for international goods and automotive parts with Amazon integration.",
    stack: ["Laravel"],
    href: "https://torobmall.com/",
    category: "commerce",
  },
  {
    name: "PayTorobShop",
    description:
      "Gift cards and Google Ads services with Toman payments.",
    stack: ["Laravel"],
    href: "https://pay.torobshop.com/",
    category: "commerce",
  },
  {
    name: "PatiBal",
    description:
      "Party supplies store — balloons, candles, decorations, and accessories.",
    stack: ["Laravel", "Next.js"],
    href: "https://patibal.ir/",
    category: "commerce",
  },
  {
    name: "Dastbaf",
    description:
      "E-commerce for authentic Qashqai handwoven kilims, jajims, cushions, and bags.",
    stack: ["Laravel"],
    href: "https://dastbaf.shop/",
    category: "commerce",
  },
  {
    name: "Zarnia Gold Gallery",
    description:
      "Gold jewelry store with live gold prices, fast delivery, and PWA support.",
    stack: ["Laravel", "Next.js"],
    href: "https://zarniagoldgallery.com/",
    category: "commerce",
  },
  {
    name: "IranMotarjeman",
    description:
      "Translation freelancer marketplace with AI-assisted translation tools.",
    stack: ["Web platform"],
    href: "https://iranmotarjeman.com/",
    category: "platforms",
  },
  {
    name: "Roominest",
    description:
      "Online class platform powered by BigBlueButton with subscription packages.",
    stack: ["Laravel", "BBB"],
    href: "https://roominest.com/",
    category: "platforms",
  },
  {
    name: "Deutsch Center CRM",
    description:
      "Educational CRM for German language learning — classes, exams, online sessions.",
    stack: ["Laravel", "BBB"],
    href: "https://crm.deutschcenter.org/",
    category: "platforms",
  },
  {
    name: "Nerkhoone",
    description:
      "Live currency exchange rate board with real-time IRR prices and API access.",
    stack: ["Python", "Flask", "PWA"],
    href: "https://nerkhoone.com/",
    category: "platforms",
  },
  {
    name: "Jibeto",
    description:
      "Personal finance app with quick transactions and secure phone auth.",
    stack: ["Flutter", "Laravel"],
    href: "https://cafebazaar.ir/app/com.example.personal_finance_app",
    category: "platforms",
  },
];

export const about = [
  "Backend-focused developer specializing in Laravel / PHP.",
  "Comfortable across the stack: APIs, admin panels, PWAs, and mobile backends.",
  "Experience delivering production systems for commerce, education, finance, and marketplaces.",
];
