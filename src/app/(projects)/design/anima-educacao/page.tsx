import Overview from "@/components/cases/Overview";
import HighlightCard from "@/components/cases/HighlightCard";
import SideMenu from "@/components/cases/anima/SideMenu";
import "@/styles/alignments.css";
import CaseHeading from "@/components/cases/typography/CaseHeading";
import HighlightImage from "@/components/cases/HighlightImage";
import Research from "@/components/cases/anima/Research";
import Prototypes from "@/components/cases/anima/Prototypes";
import Solution from "@/components/cases/anima/Solution";
import Section from "@/components/cases/Section";

export default function AnimaEducacao() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <SideMenu />
      <div className={`default-alignment gap-12 sm:gap-20 smpb-4`}>
        <CaseHeading
          headline="build a web platform that is used to generate Bachelor's and Master's certificates for more than 350.000 students in Brazil."
          company="Ânima Educação"
          link="https://www.linkedin.com/company/animaeducacao/"
        />
        <Overview
          overview={`Ânima Educação is a company responsible for managing multiple private universities within Brazil. In 2020, they realized that its platform could be restructured to attend not only Ânima itself, but other higher education organizations.
            \nThis was possible since the Ministry of Education requirements should be followed by any organization that provides certificates to their students.`}
          date="August 2020 - July 2021"
          role="Product Designer — dti digital + Ânima Educação"
          keywords="User research, visual design, usability testing."
          results="Delivered the new platform to Ânima, which by 2021 was used to attend around 350.000 students."
        />
      </div>
      <HighlightImage
        url="/images/cases/anima/anima-overview.png"
        alt="A web platform by Ânima Educação showcasing a user-friendly mockup overview for generating personalized Bachelor's and Master's degrees."
      />
      <Section>
        <HighlightCard
          title={
            "Developing education management software for all higher education institutions in Brazil."
          }
          description={`In 2020, Ânima recognized that its platform could be restructured to serve not only its own needs but also other higher education organizations, as all must comply with Ministry of Education requirements for issuing certificates.
          \n This led to the creation of A2S Technology for Education, a company derived from Ânima, aiming to offer education management software, including a certificate issuance platform, to other institutions.`}
        />
      </Section>
      <Section>
        <Research />
      </Section>
      <Section>
        <Prototypes />
      </Section>
      <Section>
        <Solution />
      </Section>
      <Section>
        <HighlightCard
          title={"Results and outcomes"}
          description={`After completing the MVP, the legacy platform was adapted to transfer student data to the new system, with smaller universities prioritized based on student count. The successful certificate issuance process will eventually cover all of Ânima's universities.
          \nFollowing Ânima's acquisition of Laureate's Brazilian assets in early 2021 (another large education group), A2S Technology for Education was discontinued and merged back into Ânima. The focus shifted away from offering the platform to other companies due to Ânima's growing student base, reaching around 350,000 students by June 2021.`}
        />
      </Section>
      <Section />
    </div>
  );
}
