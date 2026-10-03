import { links, site } from "@/data/content";

const sameAs = links
  .filter(
    (link) =>
      link.href.startsWith("http") && link.href !== site.portfolio,
  )
  .map((link) => link.href);

const personId = `${site.portfolio}/#person`;
const websiteId = `${site.portfolio}/#website`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      jobTitle: site.title,
      url: site.portfolio,
      email: site.email,
      telephone: site.phone,
      image: `${site.portfolio}/brand-logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tehran",
        addressCountry: "IR",
      },
      sameAs,
      knowsAbout: [
        "Software Engineering",
        "Laravel",
        "PHP",
        "Next.js",
        "React",
        "Web Applications",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: `${site.name} — ${site.title}`,
      url: site.portfolio,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": personId },
      author: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.portfolio}/#profile`,
      url: site.portfolio,
      name: `${site.name} — ${site.title}`,
      description: `${site.description} Based in ${site.location}.`,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.portfolio}/brand-logo.png`,
      },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
