import SideMenu from "@/components/cases/abinbev/SideMenu";
import CaseOverview from "@/components/cases/CaseOverview";
import Section from "@/components/cases/Section";

export default function AbInbev() {
  const overview = {
    heading: {
      headline:
        "build a web portal used for mapping their APIs, facilitating integration with partners by enhancing documentation used by technical teams.",
      company: "AB InBev",
      link: "https://www.linkedin.com/company/ab-inbev/",
    },
    overview: {
      description: `Anheuser-Busch InBev, often known as AB InBev, is a global beverage and brewing conglomerate renowned for its extensive beer portfolio, including Budweiser, Corona, Stella Artois, and more. Founded in 2019, BEES, a B2B e-commerce and SaaS company, was established by AB InBev.
        \nIn 2023, due to budget constraints, BEES planned to phase out its existing API documentation tool and migrate API data to a different platform. This decision prompted the creation of a new, personalized API documentation portal designed for both developers and business stakeholders, including BEES partners.`,
      date: "April 2023 - June 2023",
      role: "Product Designer — AB InBev (BEES)",
      keywords: "User interviews, information architecture, usability testing.",
      results: `Improved overall system usability score by 9.63%; \nIncreased user subjective satisfaction by 9.21%; \nIncreased user task efficiency by 13.97%.`,
    },
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <SideMenu />
      <Section
        id="overview"
        image={{
          url: "/images/cases/abinbev/abinbev-overview.png",
          alt: "An illustrative mockup showcasing BEES's developer portal overview, featuring an intuitive user interface with organized sections for APIs, documentation, and developer tools.",
        }}
      >
        <CaseOverview heading={overview.heading} overview={overview.overview} />
      </Section>
    </div>
  );
}
