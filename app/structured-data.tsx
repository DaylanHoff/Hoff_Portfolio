export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daylan Hoff",
    url: "https://daylanhoff.com",
    jobTitle: "DevOps Engineer",
    description: "DevOps Engineer specializing in C#/.NET, AWS, and privacy-first application development",
    sameAs: [
      "https://www.linkedin.com/in/DaylanHoff/",
      "https://github.com/DaylanHoff",
      "https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg"
    ],
    knowsAbout: [
      "DevOps",
      "C#",
      ".NET",
      "AWS",
      "Cloud Infrastructure",
      "CI/CD",
      "Privacy Engineering",
      "Software Development",
      "Automation",
      "Infrastructure as Code"
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Your University" // Update with actual education
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
