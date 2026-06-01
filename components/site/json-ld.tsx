export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manish Kumar Shah",
    jobTitle: "Full-Stack Engineer + Aspiring Data Scientist",
    url: "https://example.com",
    sameAs: [
      "https://github.com/Manish-412",
      "https://www.linkedin.com/in/manish-shah098",
    ],
    alumniOf: "JAIN Deemed to be University",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
