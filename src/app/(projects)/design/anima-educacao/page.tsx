import HighlightCard from "@/components/cases/HighlightCard";
import SideMenu from "@/components/cases/anima/SideMenu";
import "@/styles/alignments.css";
import Section from "@/components/cases/Section";
import Research from "@/components/cases/anima/Research";
import Prototypes from "@/components/cases/anima/Prototypes";
import Solution from "@/components/cases/anima/Solution";
import DesignSystem from "@/components/cases/anima/DesignSystem";
import DesignDocumentation from "@/components/cases/anima/DesignDocumentation";
import CaseOverview from "@/components/cases/anima/CaseOverview";

export default function AnimaEducacao() {
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
        <CaseOverview />
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
