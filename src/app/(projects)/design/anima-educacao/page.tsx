import HighlightCard from "@/components/cases/HighlightCard";
import "@/styles/alignments.css";
import Section from "@/components/cases/Section";
import SideMenu from "@/components/cases/anima/SideMenu";
import CaseOverview from "@/components/cases/CaseOverview";
import DesignDocumentation from "@/components/cases/anima/DesignDocumentation";
import DesignSystem from "@/components/cases/anima/DesignSystem";
import Prototypes from "@/components/cases/anima/Prototypes";
import Research from "@/components/cases/anima/Research";
import Solution from "@/components/cases/anima/Solution";

export default function AnimaEducacao() {
  const overview = {
    heading: {
      headline:
        "build a web platform that is used to generate Bachelor's and Master's certificates for more than 350.000 students in Brazil.",
      company: "Ânima Educação",
      link: "https://www.linkedin.com/company/animaeducacao/",
    },
    overview: {
      description: `Ânima Educação is a company responsible for managing multiple private universities within Brazil. In 2020, they realized that its platform could be restructured to attend not only Ânima itself, but other higher education organizations.
        \nThis was possible since the Ministry of Education requirements should be followed by any organization that provides certificates to their students.`,
      date: "August 2020 - July 2021",
      role: "Product Designer — dti digital + Ânima Educação",
      keywords: "User research, visual design, usability testing.",
      results:
        "Delivered the new platform to Ânima, which by 2021 was used to attend around 350.000 students.",
    },
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <SideMenu />
      <Section
        id="overview"
        image={{
          url: "/images/cases/anima/anima-overview.png",
          alt: "A web platform by Ânima Educação showcasing a user-friendly mockup overview for generating personalized Bachelor's and Master's degrees.",
        }}
      >
        <CaseOverview heading={overview.heading} overview={overview.overview} />
      </Section>
      <Section id="challenge">
        <HighlightCard
          title={
            "Developing education management software for all higher education institutions in Brazil."
          }
          description={`In 2020, Ânima recognized that its platform could be restructured to serve not only its own needs but also other higher education organizations, as all must comply with Ministry of Education requirements for issuing certificates.
          \n This led to the creation of A2S Technology for Education, a company derived from Ânima, aiming to offer education management software, including a certificate issuance platform, to other institutions.`}
        />
      </Section>
      <Section id="research">
        <Research />
      </Section>
      <Section id="prototypes">
        <Prototypes />
      </Section>
      <Section id="solution">
        <Solution />
      </Section>
      <Section id="results">
        <HighlightCard
          title={"Results and outcomes"}
          description={`After completing the MVP, the legacy platform was adapted to transfer student data to the new system, with smaller universities prioritized based on student count. The successful certificate issuance process will eventually cover all of Ânima's universities.
          \nFollowing Ânima's acquisition of Laureate's Brazilian assets in early 2021 (another large education group), A2S Technology for Education was discontinued and merged back into Ânima. The focus shifted away from offering the platform to other companies due to Ânima's growing student base, reaching around 350,000 students by June 2021.`}
        />
      </Section>
      <Section
        id="design-system"
        image={{
          url: "/images/cases/anima/design-system.png",
          alt: "A comprehensive mockup overview of Ânima's design system, highlighting a visually cohesive and user-centric interface.",
        }}
      >
        <DesignSystem />
      </Section>
      <Section
        id="design-documentation"
        image={{
          url: "/images/cases/anima/design-documentation.png",
          alt: "Mockup of Ânima's design documentation system, featuring clear design decisions and a glossary of terms. Streamlined interface for easy access and understanding of key design elements.",
        }}
      >
        <DesignDocumentation />
      </Section>
    </div>
  );
}
