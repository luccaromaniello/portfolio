import ApiContext from "@/components/cases/abinbev/ApiContext";
import BeesOverview from "@/components/cases/abinbev/BeesOverview";
import Research from "@/components/cases/abinbev/Research";
import SideMenu from "@/components/cases/abinbev/SideMenu";
import CaseOverview from "@/components/cases/CaseOverview";
import HighlightCard from "@/components/cases/HighlightCard";
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
      description: `Anheuser-Busch InBev (AB InBev) is a global beverage and brewing conglomerate known for brands like Budweiser, Corona, and Stella Artois. In 2019, AB InBev launched BEES, a B2B e-commerce and SaaS platform.
        \nIn 2023, budget constraints led BEES to phase out its existing API documentation tool and migrate its API data to a new platform. This prompted the development of a customized API documentation portal tailored for both developers and business stakeholders, including BEES partners.`,
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
      <Section id="context">
        <BeesOverview />
        <ApiContext />
      </Section>
      <Section id="challenge">
        <HighlightCard
          title={
            "Creating a unified API documentation platform for BEES developers and partners."
          }
          description={`BEES used Stoplight to share API documentation with both internal teams and external partners. For partners, this access is essential to integrate effectively and ensure their products are available on the BEES platform.
          \n Due to budget constraints, BEES planned to phase out Stoplight and move the API docs to a more customizable solution. The goal was to build a secure, flexible platform that preserved Stoplight's strengths while improving on its limitations.`}
        />
      </Section>
      <Section id="research">
        <Research />
      </Section>
    </div>
  );
}
